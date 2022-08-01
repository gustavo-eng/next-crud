import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
0
export default function Home() {

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
  
  function clienteExcluido( cliente: Cliente) {
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


  return (
    <div className=
    {
      ` flex justify-center items-center h-screen bg-gradient-to-b from-gray-400 to-green-700 
      text-black`
    }>
        <Layout titulo="Cadastro Simples">

          {visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" onClick={novoCliente}> 
                   Novo cliente 
                </Botao>
              </div>
              { <Tabela clientes={clientes} 
              
                clienteSelecionado={clienteSelecionado} 
                clienteExcluido = {clienteExcluido}

              ></Tabela> } 
            </>

          ) : (
            <Formulario  cliente={cliente} cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}/>
          )}

        </Layout>
    </div>
  )
}










