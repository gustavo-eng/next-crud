import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useClientes from "../hooks/useCliente"

export default function Home() {

  const { clienteSelecionado, salvarCliente, clienteExcluido, novoCliente, cliente}  = useClientes()  

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










