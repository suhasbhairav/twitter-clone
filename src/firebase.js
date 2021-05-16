import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBQ_AiCFb8wapAbLBxNQ8AVcLMJEQMVSuM",
  authDomain: "twitter-clone-c1117.firebaseapp.com",
  projectId: "twitter-clone-c1117",
  storageBucket: "twitter-clone-c1117.appspot.com",
  messagingSenderId: "758863480966",
  appId: "1:758863480966:web:b3a619893a7d191362e907"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


