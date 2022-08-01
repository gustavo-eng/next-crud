import { useState } from "react";


export default function useTabelaOuForm() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela') // hook inplementado em formato arrow function 
    const exibirFormulario = () => setVisivel('form') 

    return {
        formularioVisivel: visivel === 'form', //formularioVisivel eh true, se (visivel === 'form') eh verdadeiro 
        tabelaVisivel: visivel === 'tabela',
        exibirFormulario,
        exibirTabela,
    }

}