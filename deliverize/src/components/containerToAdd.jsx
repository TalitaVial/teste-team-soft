import '../styles/containerToAdd.css'

export default function ContainerToAdd({titulo, descricao}){
    return(
        <div className="container__ToAdd">
            <p className='container__text'>{titulo}</p>
            <p className='container__text--limit'>{descricao}</p>
        </div>
    )
}