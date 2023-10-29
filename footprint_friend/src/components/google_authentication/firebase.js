import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhdtimJhEZbAPWN7SKfAlEXuFPmbRgQ74",
  authDomain: "footprint-friend.firebaseapp.com",
  projectId: "footprint-friend",
  storageBucket: "footprint-friend.appspot.com",
  messagingSenderId: "772964694564",
  appId: "1:772964694564:web:9bb3e87697ac47c139f6b1",
  measurementId: "G-5RFDE7S2ZJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  provider.setCustomParameters({
    prompt: "select_account",
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};