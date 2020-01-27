import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDm_MGNbAs4UDeUMOK92bajy4qZam05f8U",
  authDomain: "catch-of-the-day-carlos-3c8f8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-carlos-3c8f8.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// named export
export {firebaseApp};

// this is a default export
export default base;