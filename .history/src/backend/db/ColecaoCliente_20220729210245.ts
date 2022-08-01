import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    async salvar(cliente: Cliente): Promise<Cliente> {
        return null 
    }

    async excluir(cliente: Cliente): Promise<void> {
        return null
    }
}