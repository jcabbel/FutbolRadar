import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f7',
  },
  navbarWrapper: {
    width: '100%',
    height: 70,
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

  // Map styles
  mapWrapper: {
    flex: 2,
    height: '100%'
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },

  // Filters styles

  searchWrapper: {
    flex: 1,
    backgroundColor: '#faf9f7',
  },
  searchContentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
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

  // List styles
  listWrapper: {
    flex: 1,
    height: '45%',
    alignSelf: 'top',
  },
  listContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
    padding: 10,
  },
  sectionHeader: {
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  matchCardContainer: {
    width: '100%',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
