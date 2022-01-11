import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
// #6 Import doc instead of collection because we want to reference the user document with the tasks
import { onSnapshot, collection, doc } from "firebase/firestore";
import db from "../utils/firebase";
// #6 Import {auth} and {signOut}
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/new.css";

const data = [];

function Dashboard() {
  const [tasks, setTasks] = useState(data);

  const [filterStatus, setFilterStatus] = useState("all");

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  //#7 Create a user state to keep track of userID
  const [user, setUser] = useState({});



  // useEffect(()=>{
  //     const unsub = onSnapshot(collection(db,"tasks"),(snapshot)=>{
  //       let todos = snapshot.docs.map(doc=> ({...doc.data(), id: doc.id}))
  //       const handleFilter = () => {
  //         if(filterStatus === "active") {
  //           console.log("FILTER STATUS IS ACTIVE")
  //           return setFilteredTasks(todos.filter((task)=>task.status === false))
  //         }
  //         else if (filterStatus === "completed") {
  //           console.log("STATUS IS COMPLETED")
  //           // If the filter status is completed I should setFilteredTasks to only the todos that have the status of true
  //           return setFilteredTasks(todos.filter((task)=> task.status === true))
  //         }
  //         else {
  //           console.log("IS ALL")
  //           // If the status is all setFilteredTasks to todos
  //           return setFilteredTasks(todos)
  //         }
  //       }
  //       handleFilter()
  //     })
  //     return unsub
  //   },[tasks,filterStatus])

  // #7 Create a useEffect that now gets the tasks from the user document
  useEffect(() => {
    // Verify a user
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser.uid) {
        console.log(currentUser.uid);
        setUser(currentUser.uid);
      } else {
        console.log("PLEASE SIGN IN");
      }
    });

    onSnapshot(doc(db, "users", `${user}`), (snapshot) => {
      let todos = snapshot
        .data()
        .tasks.map((task, id) => ({ ...task, id: id }));
      const handleFilter = () => {
        if (filterStatus === "active") {
          console.log("FILTER STATUS IS ACTIVE");
          return setFilteredTasks(
            todos.filter((task) => task.status === false)
          );
        } else if (filterStatus === "completed") {
          console.log("STATUS IS COMPLETED");
          // If the filter status is completed I should setFilteredTasks to only the todos that have the status of true
          return setFilteredTasks(todos.filter((task) => task.status === true));
        } else {
          console.log("IS ALL");
          // If the status is all setFilteredTasks to todos
          return setFilteredTasks(todos);
        }
      };
      handleFilter();
    });
  }, [user, tasks, filterStatus]);

  return (
    <>
      <Navbar />
      <div className="header">
        <h3>Dashboard </h3>
      </div>
      <div className="Dashboard">
        {/* <div className="container"> */}
          
          {/* <div className="header"> */}
           
            <div className="title">Crypto Dashboard</div>
          
            {/* <div className="theme">
            <img src="./images/icon-sun.svg" alt="theme" />
          </div> */}
          </div>
          {/* #9 Passdown filteredTasks and userId */}
          <TaskInput
            tasks={tasks}
            setTasks={setTasks}
            userId={user}
            filteredTasks={filteredTasks}
          />

          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
            filteredTasks={filteredTasks}
            setFilteredTasks={setFilteredTasks}
            userId={user}
          />
        {/* </div> */}

        {/* <div className="onClick">
      <h3 onClick={about}>Portfolio</h3>
      <p>/</p>
      <h3 onClick={about}>Profile</h3>
      <p>/</p>
      <h3 onClick={about}>About</h3>
      <p>/</p>
      <h3 onClick={contact}>Contact</h3>
      <p>/</p>
      <h3 onClick={logout}>Logout</h3>
      <p>/</p>
  </div> */}

        <Footer />
      {/* </div> */}
    </>
  );
}

export default Dashboard;
