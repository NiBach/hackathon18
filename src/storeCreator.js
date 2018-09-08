import { createStore, combineReducers, compose, applyMiddleware  } from 'redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import { reducer as geolocation } from 'react-redux-geolocation';
import thunk from 'redux-thunk';

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// initialize firebase instance with config from console
const firebaseConfig = {
    // your firebase config here
    apiKey: "AIzaSyCwgrNLlZf_p67sTBtBlAm8Bs9fWmNXFQI",
    authDomain: "hackathon-gann.firebaseapp.com",
    databaseURL: "https://hackathon-gann.firebaseio.com",
    projectId: "hackathon-gann",
    storageBucket: "hackathon-gann.appspot.com",
    messagingSenderId: "929600597365"

}

firebase.initializeApp(firebaseConfig)

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true })

// Add BOTH store enhancers when making store creator
const createStoreWithFirebase = compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, rrfConfig)
)(createStore)

// Add firebase and firestore to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    geolocation: geolocation
})

// Create store with reducers and initial state
const initialState = {}

export const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    applyMiddleware(
        thunk
    )
)
