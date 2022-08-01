// arquivo de configuracao do firebase 
 
import 'firebase/firestore';

import firebase from "firebase" 


if(!firebase.apps.length) { // se for 0, vai inicializar , se n tiver app inicializado, vai entrar e inicializar a aplicacao  
    firebase.initializeApp({ 
        apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY , 
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase;
