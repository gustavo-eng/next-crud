import Titulo from "./Tilulo"

interface LayoutProps { // propriedades esperadas pelo componente
    titulo?: string, 
    children: any

}

// tudo que esta dentro de titulo com o props,se resume tem props.children em (Titulo.tsx)
export default function Layout(props) {
    return (
        <div className={`flex flex-col w-2/3 bg-white text-gray-700 rounded-md`}>
            <Titulo>
                {props.titulo}      
            </Titulo>
            <div className="p-6"> 
                {props.children}
            </div>
        </div>
    )
} 