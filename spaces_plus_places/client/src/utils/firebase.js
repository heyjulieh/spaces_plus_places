import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBFLfWmgT8YLJ6P3gXwEj5vaOsA_ge-Brc",
  authDomain: "spaces-plus-places.firebaseapp.com",
  databaseURL: "https://spaces-plus-places.firebaseio.com",
  projectId: "spaces-plus-places",
  storageBucket: "",
  messagingSenderId: "821910390281"
};

// initialize firebase app with config information
firebase.initializeApp(config);

const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, auth };
export { firebaseListToArray };
