import '../styles/buttonToAdd.css'
import ButtonMenu from './buttonMenu'


export default function ButtonToAdd(){
    return(
        <div className='container__btn' >
            <ButtonMenu />
            <button className="container--btnToAdd">Adicionar</button> 
        </div>
    )
}