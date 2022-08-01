import { FirebaseApp } from "firebase/app";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";
import { doc, Firestore, FirestoreSettings } from "firebase/firestore";
import 'firebase/firebase-database'
require('firebase/firestore')

export default class ColecaoCliente implements ClienteRepositorio {
    
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }       
        }, 
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot , options: firebase.firestore.SnapshotOptions) { // recebendo dados do firebase e retorna um obj cliente
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id) // id gerado pelo proprio firebase 
        }
    }
 // transformando classe para objeto
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente   
        } else {
            const docRef = await this.colecao.add(cliente)
            await docRef.get()
            return doc.data()
        }
        return null 
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query =  await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    colecao() {
        return firebase
                .firestore.collection('clientes')
                .withConverter(this.#conversor)
    }
}