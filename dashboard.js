import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
getAuth,
onAuthStateChanged
}

from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";


import {
getFirestore,
doc,
getDoc
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



onAuthStateChanged(auth, async(user)=>{

if(user){

const docRef = doc(db,"users",user.uid);

const docSnap = await getDoc(docRef);


if(docSnap.exists()){

const data = docSnap.data();

document.getElementById("balance").innerHTML =
"₦" + data.balance.toLocaleString();

}

}

});