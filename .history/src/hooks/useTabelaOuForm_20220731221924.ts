import { useState } from "react";


export default function useTabelaOuForm() {

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    return {
        formularioVisivel: visivel === 'form', //formularioVisivel eh true, se (visivel === 'form') eh verdadeiro 
        tabelaVisivel: 
    }

}