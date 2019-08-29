import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAUoGFNDZUI3C-6Q9GjnHx2TgyCFJbuy3Q",
  authDomain: "phsv-ba1ad.firebaseapp.com",
  databaseURL: "https://phsv-ba1ad.firebaseio.com",
  projectId: "phsv-ba1ad",
  storageBucket: "phsv-ba1ad.appspot.com",
  messagingSenderId: "913011130299",
  appId: "1:913011130299:web:10891654b36f560d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
const Admin = props => {
  useEffect(() => {
    var shit = db.collection("classes").get();
    console.log(shit);
  }, []);
  return <div>ADMIN STUFF GOES HERE</div>;
};

export default Admin;
