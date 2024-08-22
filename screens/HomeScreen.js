import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, SectionList, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { db } from '../firebaseConfig';
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';
import { getDistance } from 'geolib';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Styles imports
import styles from '../styles/HomeScreenStyles';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/CustomToastStyles.css';


// Component imports
import Navbar from '../components/Navbar';
import Slider from '@react-native-community/slider';
import Geolocation from 'react-native-geolocation-service';
import LoadingOverlay from '../components/LoadingOverlay';
import MatchCard from '../components/MatchCard';
import CustomToast from '../components/CustomToast';

const HomeScreen = () => {
  const [distance, setDistance] = useState(0);
  const [location, setLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const [listData, setListData] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [collectionName, setCollectionName] = useState('matches');
  const [querySnapshot, setQuerySnapshot] = useState(null);

  useEffect(() => {
    const onChange = ({ window }) => {
      setScreenDimensions({
        width: window.width,
        height: window.height,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription?.remove();
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
        setCollectionName('matches');
      } else {
        setIsUserLoggedIn(false);
        setCollectionName('matches_guest');
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const q = query(collection(db, collectionName));
        const querySnapshot = await getDocs(q);

        setQuerySnapshot(querySnapshot);
  
      } catch (error) {
        console.error('Error al obtener los partidos:', error);
        toast.error(<CustomToast message="Error al obtener los partidos. Por favor, intenta de nuevo." />);
      } finally {
        setIsLoading(false)
      }
    };
  
    fetchData();
  
  }, [collectionName]);

  const handleGetLocation = () => {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setIsLoading(false);
      },
      (error) => {
        console.error(error.code, error.message);
        toast.error(<CustomToast message="No se pudo obtener la ubicación. Intenta de nuevo." />);
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = async () => {
    if (!location) {
      toast.warn(<CustomToast message="Ubicación no disponible. Por favor, haz click en el botón Ubicación" />);
      return;
    }

    if (!selectedDate) {
      toast.warn(<CustomToast message="Fecha no seleccionada. Por favor, selecciona una fecha." />);
      return;
    }

    if (!querySnapshot || querySnapshot.empty) {
      toast.warn(<CustomToast message="No se encontraron datos. Intenta de nuevo." />);
      return;
    }

    setIsLoading(true);
    try {
      // const q = query(collection(db, collectionName));
      // const querySnapshot = await getDocs(q);
      const documents = [];

      for (const docSnap of querySnapshot.docs) {
        const data = docSnap.data();
        const fixtureDate = typeof data.fixture.date === 'string' ? data.fixture.date : '';
        const docDate = fixtureDate.split("T")[0];

        if (docDate === selectedDate) {
          const id = data.fixture.venue.id.toString();
          const venueDocRef = doc(db, "venues", id);
          const venueDocSnap = await getDoc(venueDocRef);

          if (venueDocSnap.exists()) {
            const venueData = venueDocSnap.data();

            if (Array.isArray(venueData.location) && venueData.location.length === 2) {
              const [latitude, longitude] = venueData.location.map(coord => parseFloat(coord));
              const distanceInMeters = getDistance(
                { latitude: location.lat, longitude: location.lng },
                { latitude, longitude }
              );
              const distanceInKm = distanceInMeters / 1000;

              if (distanceInKm <= distance) {
                documents.push({ ...data, id: docSnap.id, distance: distanceInKm });
              }
            } else {
              console.log(`El campo location no es un array válido para el venue con ID: ${data.fixture.venue.id}`);
            }
          } else {
            console.log(`No existe el documento de venue con ID: ${data.fixture.venue.id}`);
          }
        }
      }
      if (documents.length === 0) {
        toast.warn("No se encontraron resultados para la búsqueda.");
      }
        const sections = documents.reduce((acc, doc) => {
        const leagueName = doc.league.name;
        if (!acc.some(section => section.title === leagueName)) {
          acc.push({ title: leagueName, data: [doc] });
        } else {
          const section = acc.find(section => section.title === leagueName);
          section.data.push(doc);
        }
        return acc;
      }, []);
  
      setListData(sections);
    } catch (error) {
      console.error('Error al obtener los partidos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderItem = ({ item }) => {
    const { home, away } = item.teams;
    const id = item.fixture.id;
    const date = item.fixture.date.split("T")[0];
    const time = item.fixture.date.split("T")[1].split("+")[0];
    const leagueLogo = item.league.logo;

    return (
      <MatchCard 
        key={id}
        homeTeam={home.name} 
        awayTeam={away.name} 
        date={date} 
        time={time}
        homeLogo={home.logo} 
        awayLogo={away.logo} 
        leagueLogo={leagueLogo}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbarWrapper}>
        <Navbar />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.mapWrapper}>
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={styles.mapContainer}
              center={location || { lat: 40.3816, lng: -3.74625 }}
              zoom={15}
            >
              {location && <Marker position={location} />}
            </GoogleMap>
          </LoadScript>
        </View>
        <ScrollView 
          style={styles.searchWrapper}
          contentContainerStyle={styles.searchContentContainer}>
          <View style={styles.elementsContainer}>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Seleccionar distancia: {distance} km</Text>
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5000}
                step={1}
                value={distance}
                onValueChange={setDistance}
                minimumTrackTintColor="#25a519"
                maximumTrackTintColor="#99FF33"
                thumbTintColor="#25a519"
              />
            </View>
            <View style={styles.calendarContainer}>
              <Calendar
                style={styles.calendar}
                theme={{
                  backgroundColor: '#f5f5f5',
                  calendarBackground: '#f5f5f5',
                  textSectionTitleColor: '#b6c1cd',
                  textDayFontWeight: 'bold',
                  textMonthFontWeight: 'bold',
                  todayTextColor: '#25a519',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  selectedDayBackgroundColor: '#25a519',
                  selectedDayTextColor: '#fff',
                  arrowColor: '#000000',
                }}
                markedDates={{
                  [selectedDate]: { selected: true, marked: true, dotColor: '#25a519' },
                }}
                onDayPress={handleDayPress}
                firstDay={1}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.locationButton} onPress={handleGetLocation}>
              <Text style={styles.buttonText}>UBICACIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.buttonText}>BUSCAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.listWrapper}>
          <ScrollView
            contentContainerStyle={styles.listContentContainer}>
            <SectionList
              sections={listData}
              renderItem={({ item }) => renderItem({ item })}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>{title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
          </ScrollView>
        </View>
      </View>
      {isLoading && <LoadingOverlay />}
      <ToastContainer 
        position="top-right"
      />
    </View>
  );
};

export default HomeScreen;
