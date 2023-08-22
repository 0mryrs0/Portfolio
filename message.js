
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJirRCz4E1Wtnj83HOf_fIdf9maJBj0zs",
    authDomain: "portfolio-c60c7.firebaseapp.com",
    projectId: "portfolio-c60c7",
    storageBucket: "portfolio-c60c7.appspot.com",
    messagingSenderId: "737496990450",
    appId: "1:737496990450:web:ebebc64499cd23e72c866b",
    databaseURL: "https://portfolio-c60c7-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  set(ref(db, `message/` + document.getElementById('email').value),
  {
    email: document.getElementById(`email`).value,
    message: document.getElementById(`message`).value
  });

  alert("login successfully");

})
