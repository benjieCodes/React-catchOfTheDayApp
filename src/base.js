import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcsCnA_PTmC0W8uniVamQzKeDEAJrelk0",
  authDomain: "react-catch-of-the-day-db.firebaseapp.com",
  databaseURL: "https://react-catch-of-the-day-db.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is the named export
export { firebaseApp };

// This is the default export
export default base;
