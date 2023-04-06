
import deliverize from '../assets/deliverize.png'
import arrow_left from '../assets/arrow_left.png'
import user from '../assets/user.png'
import '../styles/header.css'

export default function Header() {
  return (
    <div className='header' >
      <div className='header__logo'>
        <img src={arrow_left} alt='arrow'/>
        <img src={deliverize} alt='Logo'/>
        <div>
          <select className='header__selected' name="" id="">
            <option value=""></option>
          </select>
          <input className='header__search' type="search" />
        </div>
        <img src={user} alt='user'/>
      </div>

    </div>
  );
}

 
 