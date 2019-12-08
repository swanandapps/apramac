import firebase from 'firebase/app';
import 'firebase/auth';

import 'firebase/storage';

import 'firebase/firestore';


import firebaseconfig from './firebaseconfig'

const firebaseapp = firebase.initializeApp(firebaseconfig)

export default firebaseapp