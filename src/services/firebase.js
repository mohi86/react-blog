import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDpToRO1UD056IRpZ9dwM8VmCpQ-G9exxI",
    authDomain: "react-blog-3e3aa.firebaseapp.com",
    databaseURL: "https://react-blog-3e3aa.firebaseio.com",
    projectId: "react-blog-3e3aa",
    storageBucket: "",
    messagingSenderId: "250954620400"
}
const fire = firebase.initializeApp(config);

export default fire;