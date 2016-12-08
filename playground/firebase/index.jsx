import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC8CIX5y9IRLZnWzg8BLCm0utuw2igKo2Q",
    authDomain: "meadtodoapp.firebaseapp.com",
    databaseURL: "https://meadtodoapp.firebaseio.com",
    storageBucket: "meadtodoapp.appspot.com",
    messagingSenderId: "78396651113"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    appName: 'TodoApp'
})