
interface BotaoProps {
    cor ?: 'green' | 'blue' |  'gray'
    className?: string
    children: any
    onClick ?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className= {`
            bg-gradient-to-r from-purple-500 to-purple-900
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}








