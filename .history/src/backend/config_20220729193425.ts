// arquivo de configuracao do firebase 

import firebase from "firebase"; 
import 'firebase/firestore';



if(!firebase.apps.length) { // se for 0, vai inicializar 
    firebase.initializeApp({ 
        apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY , 
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}
