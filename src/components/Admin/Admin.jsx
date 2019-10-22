import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const classesDocId = "3v2sxduWqPDtjnHjoCQa";

var firebaseConfig = {
  apiKey: process.env.GATSBY_firebaseAPIKey,
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
  // const defaultSchedule = {
  //   "1": {
  //     name: "Monday",
  //     schedule: []
  //   },
  //   "2": {
  //     name: "Tuesday",
  //     schedule: []
  //   },
  //   "3": {
  //     name: "Wednesday",
  //     schedule: []
  //   },
  //   "4": {
  //     name: "Thursday",
  //     schedule: []
  //   },
  //   "5": {
  //     name: "Friday",
  //     schedule: []
  //   },
  //   "6": {
  //     name: "Saturday",
  //     schedule: []
  //   },
  //   "7": {
  //     name: "Sunday",
  //     schedule: []
  //   }
  // };

  const [classTypes, setClassTypes] = useState();
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    db.collection("classes")
      .doc(classesDocId)
      .get()
      .then(r => {
        if (r.exists) {
          setClassTypes(r.data());
        }
      });
  }, []);
  useEffect(() => {
    db.collection("schedule")
      .get()
      .then(r => {
        let tempSchedule = schedule;
        r.forEach(doc => {
          let item = {
            id: doc.id,
            name: doc.data().name,
            classes: []
          };
          db.collection(`/schedule/${doc.id}/classes`)
            .get()
            .then(fu => {
              if (fu.empty) {
                return;
              }
              fu.docs.forEach(f => {
                item.classes.push(f.data());
              });
            });
          tempSchedule.push(item);
          setSchedule(tempSchedule);
        });
      });
  }, []);
  const renderSchedule = () => {
    if (!schedule) {
      return;
    }
    return schedule.map((v, i) => {
      return (
        <li key={i}>
          Day: {v.name} {() => renderClasses(v)}
        </li>
      );
    });
  };
  const renderClasses = classDay => {
    if (!classDay.classes) {
      return <span>no class</span>;
    }
    return classDay.classes.map((v, i) => {
      return (
        <span key={i}>
          {v.name}: {v.timeStart} - {v.timeEnd}
        </span>
      );
    });
  };
  return (
    <div>
      <ul>{renderSchedule()}</ul>
    </div>
  );
};

export default Admin;
