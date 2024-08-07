// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const axios = require('axios');
// admin.initializeApp();

// exports.fetchFootballData = functions.pubsub.schedule('30 13 31 * *').timeZone('Europe/Madrid').onRun(async (context) => {
//   const apiUrl = 'https://v3.football.api-sports.io/fixtures?status=NS&league=140&season=2024';
//   try {
//     const response = await axios.get(apiUrl, {
//       headers: {
//         'x-rapidapi-host': 'v3.football.api-sports.io',
//         'x-apisports-key': functions.config().football.api_key
//       }
//     });
//     const data = response.data;
//     await admin.firestore().collection('monthlyData').doc('primeraDivision').set(data);
//     console.log('Data fetched and stored successfully.');
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// });
