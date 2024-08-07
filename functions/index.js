const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

exports.fetchFootballData = functions.pubsub.schedule('10 23 7 8 *').timeZone('Europe/Madrid').onRun(async (context) => {
  const apiUrl1 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=140&season=2024';
  const apiUrl2 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=141&season=2024';
  const apiUrl3 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=435&season=2024';
  const apiUrl4 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=436&season=2024';
  const apiUrl5 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=1006&season=2024';
  
  try {
    const [response1, response2, response3, response4, response5] = await Promise.all([
      axios.get(apiUrl1, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl2, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl3, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl4, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl5, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
    ]);

    const data1 = response1.data.response;
    const data2 = response2.data.response;
    const data3 = response3.data.response;
    const data4 = response4.data.response;
    const data5 = response5.data.response;

    const combinedData = [...data1, ...data2, ...data3, ...data4, ...data5];

    const batch = admin.firestore().batch();
    const collectionRef = admin.firestore().collection('matches');
    combinedData.forEach(match => {
      const docRef = collectionRef.doc(`match_${match.fixture.id}`);
      batch.set(docRef, match);
    });
    await batch.commit();

    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
