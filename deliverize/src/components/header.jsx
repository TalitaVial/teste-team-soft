
import deliverize from '../assets/deliverize.png'
import arrow_left from '../assets/arrow_left.png'
// import user from '../assets/user.png'
// import shopping from '../assets/shopping.png'
import '../styles/header.css'

export default function Header() {
  return (
    <div className='header' >
   
      <div className='header__logo'>
        <img src={arrow_left} alt='arrow'/>
        <img src={deliverize} alt='Logo'/>
        </div>
          {/* <select className='header__selected' name="" id="">
            <option value=""></option>
          </select>
          <input className='header__search' type="search" />
        <div className='header__login'>
        <div className='header--user'>
          <img src={user} alt='user'/>
          <p className='header--text'>Entrar</p>
        </div>
        <div className='header--user'>
          <img src={shopping} alt='shopping'/>
          <p className='header--text'>Carrinho</p>
        </div>
 
        </div> */}

    </div>
  );
}

 
 