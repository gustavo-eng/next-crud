import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"
0
export default function Home() {
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>( 'tabela') // sera carregado a compoonent tabela ou form, mas por padrao sera a tabela 
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio()) // cria  um nobo cliente com as mesmas propriedades 

  const clientes = [
    new Cliente('Ana', 21, `1`),
    new Cliente('Gu', 22, `2`),
    new Cliente('Rafaela', 24, `3`),
    
  ]


  function clienteSelecionado( cliente: Cliente) {
    console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido( cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(cliente: Cliente) {
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










