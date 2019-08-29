import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {

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
