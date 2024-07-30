import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@env';

//Styles imports
import styles from '../styles/HomeScreenStyles';

// Component imports
import Navbar from '../components/Navbar';
import Slider from '@react-native-community/slider';
import Geolocation from 'react-native-geolocation-service';
import LoadingOverlay from '../components/LoadingOverlay';

// API imports
import { fetchMatches } from '../services/api'; 

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

  const handleGetLocation = () => {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setIsLoading(false);
      },
      (error) => {
        console.log(error.code, error.message);
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = async () => {
    console.log('Buscando en un radio de:', distance, 'kms');
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Lugar seleccionado: ', location);

    setIsLoading(true);
    try {
      const params = {
        // live: 'all',
        // status: 'NS',
        // date: selectedDate,
      };
      const data = await fetchMatches(params);
      setListData(data);
    } catch (error) {
      console.error('Error al obtener los partidos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderItem = ({ item }) => (
    <View style={styles.matchItem}>
      <Text>{item.teams.home.name} vs {item.teams.away.name}</Text>
    </View>
  );

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
        <View style={styles.searchWrapper}>
          <View style={styles.elementsContainer}>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Seleccionar distancia: {distance} km</Text>
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={50}
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
        </View>
        <View style={styles.listWrapper}>
          <FlatList
            data={listData}
            keyExtractor={(item) => item.fixture.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
      {isLoading && <LoadingOverlay />}
    </View>
  );
};

export default HomeScreen;
