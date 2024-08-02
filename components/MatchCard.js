import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Linking, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg';

const { width } = Dimensions.get('window');

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
};

const MatchCard = ({ homeTeam, awayTeam, date, time, homeLogo, awayLogo, leagueLogo, linkUrl }) => {
  const handleLinkPress = () => {
    if (linkUrl) {
      Linking.openURL(linkUrl);
    }
  };

  return (
    <View style={styles.matchCardContainer}>
      <View style={styles.teamContainer}>
        <Image source={{ uri: homeLogo }} style={styles.teamLogo} />
        <Text style={styles.boldText}>{homeTeam}</Text>
      </View>
      <View style={styles.matchCardDetails}>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
        <Text style={styles.dateText}>{time}</Text>
        <View style={styles.logosContainer}>
          <Image source={{ uri: leagueLogo }} style={styles.leagueLogo} />
          <TouchableOpacity onPress={handleLinkPress}>
          <Image
              source={require('../assets/tickets.png')}
              style={styles.ticketIcon}
            />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.teamContainer}>
        <Image source={{ uri: awayLogo }} style={styles.teamLogo} />
        <Text style={styles.boldText}>{awayTeam}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchCardContainer: {
    flex: 1,
    marginVertical: 5,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    padding: 5,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  teamLogo: {
    width: '80%',
    height: 40,
    resizeMode: 'contain',
    marginBottom: 3,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  matchCardDetails: {
    flex: 4,
    backgroundColor: '#f5f5f5',
    paddingVertical: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  logosContainer: {
    flex: 2,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#faf9f7',
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  leagueLogo: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
    marginRight: 20,
  },
  ticketIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },  
});

export default MatchCard;
