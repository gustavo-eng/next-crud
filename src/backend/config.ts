

import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase




// Erro na versao do package.json 

// arquivo de configuracao do firebase 
 
// import 'firebase/firestore';

// import firebase from "firebase/firebase-firestore"
// import { initializeApp } from 'firebase/app';

// // if(!firebase.apps.length)
// if(!firebase) { // se for 0, vai inicializar , se n tiver app inicializado, vai entrar e inicializar a aplicacao  
//     firebase.initializeApp({ 
//         apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY , 
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     })
// }

// export default firebase;


