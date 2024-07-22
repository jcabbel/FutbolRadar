import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@env';
import Navbar from '../components/Navbar';
import Slider from '@react-native-community/slider';
import Geolocation from 'react-native-geolocation-service';
import LoadingOverlay from '../components/loadingOverlay';  

const HomeScreen = () => {
  const [distance, setDistance] = useState(0);
  const [location, setLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
  const [screenDimensions, setScreenDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const [listData, setListData] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ]);

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
    setIsLoading(true); // Mostrar indicador de carga
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setIsLoading(false); // Ocultar indicador de carga
        console.log('Current location:', position);
      },
      (error) => {
        console.log(error.code, error.message);
        setIsLoading(false); // Ocultar indicador de carga en caso de error
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleSearch = () => {
    console.log('Buscando en un radio de:', distance, 'kms');
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Lugar seleccionado: ', location);
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
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
                minimumTrackTintColor="#99FF33"
                maximumTrackTintColor="#25a519"
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
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      {isLoading && <LoadingOverlay />} {/* Mostrar overlay de carga */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f7',
  },
  navbarWrapper: {
    width: '100%',
    height: 70, // Altura del Navbar
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 70, 
  },
  mapWrapper: {
    width: '50%',
    height: '100%',
  },
  searchWrapper: {
    width: '25%',
    height: '100%',
    backgroundColor: '#faf9f7',
    justifyContent: 'flex-top',
    alignItems: 'center',
  },
  listWrapper: {
    width: '25%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  elementsContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  calendarContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  calendar: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchButton: {
    width: '45%',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#25a519',
    alignItems: 'center',
  },
  locationButton: {
    width: '45%',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ff7f50',
    alignItems: 'center',
  },
  buttonText: {
    color: '#faf9f7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
  },
});

export default HomeScreen;
