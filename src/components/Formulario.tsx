import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from     '../core/Cliente'
import Botao from  './Botao'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (clentes:Cliente) => void
    cancelado ?: () => void 
}




export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null // se nao tiver id seta null como default
    const [nome, setNome] = useState(props.cliente?.nome ?? '') // como valor padrao sera uma string vazia 
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
         <div>
            {id ? (
                <Entrada texto="Codigo" valor={id} className='mb-4' /> 
            ) : false }
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className='mb-4'/> 
            <Entrada texto="Idade" tipo='number' valor={idade} valorMudou={setIdade} /> 
            <div className='mt-3 flex justify-end'>
                <Botao cor="green" className='bg-blue-200 bg-blend-color-burn mr-2 '
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ?  'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" className='bg-red-700 bg-blend-darken' onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
         </div>
    )
} 

