const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
admin.initializeApp();

exports.fetchFootballData = functions.pubsub.schedule('20 23 * * 6').timeZone('Europe/Madrid').onRun(async (context) => {

  //Primera Division
  const apiUrl1 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=140&season=2024&timezone=Europe/Madrid';
  //Segunda Division
  const apiUrl2 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=141&season=2024&timezone=Europe/Madrid';
  //Primera RFEF
  const apiUrl3 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=435&season=2024&timezone=Europe/Madrid';
  const apiUrl4 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=436&season=2024&timezone=Europe/Madrid';
  const apiUrl5 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=1006&season=2024&timezone=Europe/Madrid';
  //Segunda RFEF
  const apiUrl6 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=875&season=2024&timezone=Europe/Madrid';
  const apiUrl7 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=876&season=2024&timezone=Europe/Madrid';
  const apiUrl8 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=877&season=2024&timezone=Europe/Madrid';
  const apiUrl9 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=878&season=2024&timezone=Europe/Madrid';
  const apiUrl10 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=879&season=2024&timezone=Europe/Madrid';
  const apiUrl11 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=1000&season=2024&timezone=Europe/Madrid';
  //Tercera RFEF
  const apiUrl12 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=439&season=2024&timezone=Europe/Madrid';
  const apiUrl13 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=440&season=2024&timezone=Europe/Madrid';
  const apiUrl14 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=441&season=2024&timezone=Europe/Madrid';
  const apiUrl15 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=442&season=2024&timezone=Europe/Madrid';
  const apiUrl16 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=443&season=2024&timezone=Europe/Madrid';
  const apiUrl17 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=444&season=2024&timezone=Europe/Madrid';
  const apiUrl18 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=445&season=2024&timezone=Europe/Madrid';
  const apiUrl19 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=446&season=2024&timezone=Europe/Madrid';
  const apiUrl20 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=447&season=2024&timezone=Europe/Madrid';
  const apiUrl21 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=448&season=2024&timezone=Europe/Madrid';
  const apiUrl22 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=449&season=2024&timezone=Europe/Madrid';
  const apiUrl23 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=450&season=2024&timezone=Europe/Madrid';
  const apiUrl24 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=451&season=2024&timezone=Europe/Madrid';
  const apiUrl25 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=452&season=2024&timezone=Europe/Madrid';
  const apiUrl26 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=453&season=2024&timezone=Europe/Madrid';
  const apiUrl27 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=454&season=2024&timezone=Europe/Madrid';
  const apiUrl28 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=455&season=2024&timezone=Europe/Madrid';
  const apiUrl29 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=456&season=2024&timezone=Europe/Madrid';
  const apiUrl30 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=977&season=2024&timezone=Europe/Madrid';
  //Champions League
  const apiUrl31 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=2&season=2024&timezone=Europe/Madrid';
  //Europa League
  const apiUrl32 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=3&season=2024&timezone=Europe/Madrid';
  //Conference League
  const apiUrl33 = 'https://v3.football.api-sports.io/fixtures?status=NS&league=848&season=2024&timezone=Europe/Madrid';

  
  try {
    const [response1, response2, response3, response4, response5, response6, response7, response8, response9, response10, response11, response12, response13, response14
      , response15, response16, response17, response18, response19, response20, response21, response22, response23, response24, response25, response26, response27, response28
      , response29, response30, response31, response32, response33] = await Promise.all([
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
      axios.get(apiUrl6, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl7, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl8, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl9, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl10, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl11, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl12, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl13, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl14, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl15, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl16, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl17, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl18, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl19, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl20, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl21, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl22, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl23, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl24, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl25, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl26, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl27, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl28, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl29, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl30, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl31, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl32, {
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-apisports-key': functions.config().football.api_key
        }
      }),
      axios.get(apiUrl33, {
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
    const data6 = response6.data.response;
    const data7 = response7.data.response;
    const data8 = response8.data.response;
    const data9 = response9.data.response;
    const data10 = response10.data.response;
    const data11 = response11.data.response;
    const data12 = response12.data.response;
    const data13 = response13.data.response;
    const data14 = response14.data.response;
    const data15 = response15.data.response;
    const data16 = response16.data.response;
    const data17 = response17.data.response;
    const data18 = response18.data.response;
    const data19 = response19.data.response;
    const data20 = response20.data.response;
    const data21 = response21.data.response;
    const data22 = response22.data.response;
    const data23 = response23.data.response;
    const data24 = response24.data.response;
    const data25 = response25.data.response;
    const data26 = response26.data.response;
    const data27 = response27.data.response;
    const data28 = response28.data.response;
    const data29 = response29.data.response;
    const data30 = response30.data.response;
    const data31 = response31.data.response;
    const data32 = response32.data.response;
    const data33 = response33.data.response;


    const combinedData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8, ...data9, ...data10, ...data11, ...data12, ...data13, ...data14
      , ...data15, ...data16, ...data17, ...data18, ...data19, ...data20, ...data21, ...data22, ...data23, ...data24, ...data25, ...data26, ...data27, ...data28, ...data29
      , ...data30, ...data31, ...data32, ...data33
    ];

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
