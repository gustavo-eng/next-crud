
import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
// import useTabelaOuForm from "./useTabelaOuForm" ;

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

  
    const [visivel, setVisivel] = useState<'tabela' | 'form'>( 'tabela') // sera carregado a compoonent tabela ou form, mas por padrao sera a tabela 
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio()) // cria  um nobo cliente com as mesmas propriedades 
    const [clientes, setClientes] = useState<Cliente[]>([]) // cria  um nobo cliente com as mesmas propriedades 
  
    useEffect(() => { //altera o estado na inicializacao do componente 
    }, [])
    
    function clienteSelecionado( cliente: Cliente) {
      console.log(cliente.nome)
      setCliente(cliente)
      setVisivel('form')
    }
    
  async  function clienteExcluido( cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
      console.log(cliente.nome)
  
    }
    
    function obterTodos() {
      
      repo.obterTodos.then(clientes => {
          setClientes(clientes)
          setVisivel('tabela')
      })
    } 
  
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      console.log(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio)
      setVisivel('form')
    }

}