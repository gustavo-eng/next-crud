


interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2" >
                {props.texto}
            </label>
            <input onChange={e => props.valorMudou?.(e.target.value)} type= {props.tipo ?? 'text'}  value={props.valor}  readOnly={props.somenteLeitura} 
                className={`border border-green-800 focus:outline-double bg-green-50 rounded-md px-4 py-2`}
            />
        </div>

    )

}

/* 
Formulario e a classe pai e os parametros dessa classa passada para a classe 'filho- Entrada' 
e informada por meio de tipagem na interface e estabelecendo regras de obrigatoriedade 

*/





