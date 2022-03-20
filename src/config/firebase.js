import { initializeApp } from "firebase/app";
const firebaseConfing = ()=>{
      const firebaseConfig = {
            apiKey: "AIzaSyCLPv_0OD28irbXx8efWvki-_JeESAmdss",
            authDomain: "everyones-app.firebaseapp.com",
            projectId: "everyones-app",
            storageBucket: "everyones-app.appspot.com",
            messagingSenderId: "306538008803",
            appId: "1:306538008803:web:b811d3ae527ff300e375d6",
            measurementId: "G-M2205GSL72"
      };
      const app = initializeApp(firebaseConfig);
}     

export default firebaseConfing