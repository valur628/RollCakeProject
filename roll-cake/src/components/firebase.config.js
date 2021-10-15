import firebase from "firebase";
var firebaseConfig = {
  DB_SoftIndex: 0,
  DB_SoftID: "steam/apps/1093910",
  DB_SoftName: "Tales of the Black Forest",
  DB_DevName: "Not Dev",
  DB_UpdateTime: "2021-10-11T08:16:44.942Z",
  DB_Currency: "KRW",
  DB_RegCost: 440000,
  DB_DisCost: 132000,
  DB_DisRate: 7000,
  DB_ProductAddress:
    "https://store.steampowered.com/app/1093910/Tales_of_the_Black_Forest",
  DB_Platform: "Steam",
  DB_BigPicture:
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1093910/header.jpg",
  DB_SmallPicture:
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1093910/capsule_231x87.jpg",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
