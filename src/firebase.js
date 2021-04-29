import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCRLyWeoX1Z_7Frd6ZgZ9uoUph6vgSkKxY',
  authDomain: 'disneyplaus-clone.firebaseapp.com',
  projectId: 'disneyplaus-clone',
  storageBucket: 'disneyplaus-clone.appspot.com',
  messagingSenderId: '200572472932',
  appId: '1:200572472932:web:b7b660c925f3247b571971',
  measurementId: 'G-ZPK1X3LW94'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
