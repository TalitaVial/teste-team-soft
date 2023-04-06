
import '../styles/buttonMenu.css'
import remove from '../assets/remove.png'
import add from    '../assets/add.png'

export default function ButtonMenu(){
    return(
        <div className='btn'>
        <div className='btn__img'>
            <button className='btn__link--remove'><img src={remove} alt="remove" /></button>
        </div>
        2
        <div className='btn__img'>
            <button className='btn__link'><img src={add} alt="add" /></button>
        </div>
        </div>

    )
    
}