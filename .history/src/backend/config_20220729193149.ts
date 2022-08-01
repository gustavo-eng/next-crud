// arquivo de configuracao do firebase 

import firebase from "firebase"; 
import 'firebase/firestore';



if(!firebase.apps.length) { // se for 0, vai inicializar 
    firebase.initializeApp({ 
        apiKey:  process.env. , 
        authDomain: process.env. ,
        projectId: process.env. ,
    })
}

