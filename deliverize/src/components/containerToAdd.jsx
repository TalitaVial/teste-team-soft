import '../styles/containerToAdd.css'

export default function ContainerToAdd(){
    return(
        <div className="container__ToAdd">
            <p className='container__text'>Adicionar Ingredientes</p>
            <p className='container__text--limit'>Até 8 ingredientes.</p>
        </div>
    )
}