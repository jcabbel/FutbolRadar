import { API_FOOTBALL_KEY } from '@env';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// export const fetchMatches = async (params) => {
//   const apiUrl = new URL("https://v3.football.api-sports.io/fixtures");
//   Object.keys(params).forEach(key => apiUrl.searchParams.append(key, params[key]));
  
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "v3.football.api-sports.io",
//       "x-apisports-key": API_FOOTBALL_KEY,
//     }
//   };

//   try {
//     const response = await fetch(apiUrl, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     const data = await response.json();
//     return data.response;
//   } catch (error) {
//     console.error('Error fetching matches:', error);
//     throw error;
//   }
// };

// export const addMatches = async (data) => {
//   try {
//     const collectionRef = collection(db, 'primeraDivision');
//     for (const match of data) {
//       const docRef = doc(collectionRef, `match_${match.fixture.id}`);
//       await setDoc(docRef, match);
//     }
//   } catch (error) {
//     console.error('Error adding data:', error);
//     throw error;
//   }
// };
