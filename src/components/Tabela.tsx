import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'
 // o que espera receber dentro do componente 
interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado 

    function renderizar() {
        return ( 
            <tr> 
                <th className='text-left p-3 text-white'>Codigo</th>
                <th className='text-left p-3  text-white'>Nome </th>
                <th className='text-left p-3 text-white '>Idade </th>
                {exibirAcoes ? <th className=' p-3 text-white'>Action </th> : false}
            </tr>

        )
    }

    
    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0  ? 'bg-green-200' :  'bg-green-100'}`}>
                    <td className='text-left p-3'>{cliente.id}</td>
                    <td className='text-left p-3'>{cliente.nome} </td>
                    <td className='text-left p-3'>{cliente.idade} </td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false }
                </tr>
            )
        } )   
    }
    
    function renderizarAcoes(cliente: Cliente) {
            return (
                <td className={`flex justify-center `}>
                    {props.clienteSelecionado ? (
                        <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center text-blue-800
                        rounded-full p-2
                        hover:bg-green-50
                        `}> 
                            {IconeEdicao} 
                        </button>
                    ) : false}

                    {props.clienteExcluido ? (
                        <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-800
                            rounded-full p-3
                        hover:bg-green-100`}> 
                            {IconeLixo} 
                        </button>
                    ): false}

                </td>
            )
    }
    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`bg-gradient-to-r from-green-600 to-green-900`}>
                {renderizar()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>


        </table> 
    )
}