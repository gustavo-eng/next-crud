import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    
    conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }       
        }
    }

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