import Burguer from    '../assets/foto.png'
import '../styles/containerBurguer.css'
import ListMenu from './listMenu'
import ContainerToAdd from './containerToAdd';

export default function ContainerBurguer(){
    return(
        <div className='container'>
            <div className='container__Burguer'>
            <img className='container--imgBurguer' src={Burguer} alt="FotoBurguer" />
            </div>
            <div className='container__description'>
                <div className='container--title'>
                    <h3>Oferta picanha cheddar bacon</h3>
                </div>
                <div className='container__ingredients'>
                    <p>Delicioso hambúrguer de picanha, molho de picanha,
                    cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim,
                    acompanhamento e bebida.</p>
                </div>
                <div className='container--money'>
                    <p className='container--money--sale'>R$31,99</p>
                    <p className='container--money--noSale'>R$34,95</p>
                </div>    
                </div>
                <div className='container__menu'>
                    <ContainerToAdd/>
                    <ListMenu/>
                </div>  
        </div>
    )
}