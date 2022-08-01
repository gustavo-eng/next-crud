import { FirebaseApp } from "firebase/app";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";
import { Firestore, FirestoreSettings } from "firebase/firestore";

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
        return null 
    }

    async excluir(cliente: Cliente): Promise<void> {
        return null
    }

    async obterTodos(): Promise<Cliente[]> {
        return null
    }
}