const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

exports.fetchFootballData = functions.pubsub.schedule('45 11 * * 4').timeZone('Europe/Madrid').onRun(async (context) => {

  // URLs de las ligas y competiciones
  const apiUrl1 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=140&season=2024&timezone=Europe/Madrid';
  const apiUrl2 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=141&season=2024&timezone=Europe/Madrid';
  const apiUrl3 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=435&season=2024&timezone=Europe/Madrid';
  const apiUrl4 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=436&season=2024&timezone=Europe/Madrid';
  const apiUrl5 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=1006&season=2024&timezone=Europe/Madrid';
  const apiUrl6 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=875&season=2024&timezone=Europe/Madrid';
  const apiUrl7 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=876&season=2024&timezone=Europe/Madrid';
  const apiUrl8 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=877&season=2024&timezone=Europe/Madrid';
  const apiUrl9 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=878&season=2024&timezone=Europe/Madrid';
  const apiUrl10 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=879&season=2024&timezone=Europe/Madrid';
  const apiUrl11 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=1000&season=2024&timezone=Europe/Madrid';
  const apiUrl31 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=2&season=2024&timezone=Europe/Madrid';
  const apiUrl32 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=3&season=2024&timezone=Europe/Madrid';
  const apiUrl33 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=848&season=2024&timezone=Europe/Madrid';

  try {
    const [response1, response2, response3, response4, response5, response6, response7, response8, response9, response10, response11, response31, response32, response33] = await Promise.all([
      axios.get(apiUrl1, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl2, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl3, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl4, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl5, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl6, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl7, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl8, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl9, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl10, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl11, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl31, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl32, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
      axios.get(apiUrl33, { headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-apisports-key': functions.config().football.api_key } }),
    ]);

    const data1 = response1.data.response;
    const data2 = response2.data.response;
    const data3 = response3.data.response;
    const data4 = response4.data.response;
    const data5 = response5.data.response;
    const data6 = response6.data.response;
    const data7 = response7.data.response;
    const data8 = response8.data.response;
    const data9 = response9.data.response;
    const data10 = response10.data.response;
    const data11 = response11.data.response;
    const data31 = response31.data.response;
    const data32 = response32.data.response;
    const data33 = response33.data.response;

    const combinedData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11, ...data31, ...data32, ...data33];
    const guestData = [...data1];

    const collectionRef = admin.firestore().collection('matches');
    const guestCollectionRef = admin.firestore().collection('matches_guest');

    // Función para eliminar todos los documentos de una colección
    const deleteCollection = async (collection) => {
      const snapshot = await collection.get();
      const batch = admin.firestore().batch();

      snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });

      await batch.commit();
    };

    // Delete all documents
    await deleteCollection(collectionRef);
    await deleteCollection(guestCollectionRef);

    // Add new documents
    const batch = admin.firestore().batch();
    combinedData.forEach(match => {
      const docRef = collectionRef.doc(`match_${match.fixture.id}`);
      batch.set(docRef, match);
    });

    const guestBatch = admin.firestore().batch();
    guestData.forEach(match => {
      const docRef = guestCollectionRef.doc(`match_${match.fixture.id}`);
      guestBatch.set(docRef, match);
    });

    await batch.commit();
    await guestBatch.commit();

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
