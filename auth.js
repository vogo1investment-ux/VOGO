import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
}

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";


import {
getFirestore,
doc,
setDoc
}

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyDRAcsC8RUTPtxbMdHjHpYZH2LjaP8jqMM",
  authDomain: "voogo-48569.firebaseapp.com",
  projectId: "voogo-48569",
  storageBucket: "voogo-48569.firebasestorage.app",
  messagingSenderId: "735597967945",
  appId: "1:735597967945:web:346f2a0506d55f7e651d98"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);



window.signup = async function(){

const email = document.getElementById("signup-email").value;

const password = document.getElementById("signup-password").value;


try{

const userCredential = await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;



await setDoc(doc(db,"users",user.uid),{

email: email,
balance: 250000,
status: "active"

});



alert("Account Created Successfully");

window.location.href = "dashboard.html";

}

catch(error){

alert(error.message);

}

}




window.login = async function(){

const email = document.getElementById("login-email").value;

const password = document.getElementById("login-password").value;


try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login Successful");

window.location.href = "dashboard.html";

}

catch(error){

alert(error.message);

}

}




window.logout = async function(){

try{

await signOut(auth);

window.location.href = "login.html";

}

catch(error){

alert(error.message);

}

}