import ButtonMenu from './buttonMenu'
import '../styles/listMenu.css'

export default function ListMenu(){
    return(
        <div>
            <div className='card'>
                <div className='card__item'>
                    <p className='card--title'>Queijo cheddar</p>
                    <p className='card--money'>+ R$4,99</p>
            </div>
            <ButtonMenu/>
            
        </div>
            <div className='card__line'></div>
        </div>
        
    )
}