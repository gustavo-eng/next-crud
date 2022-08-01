import { FirebaseApp } from "firebase/app";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
    
    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }       
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options) {

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