import '../styles/popover.css'



export default function Popover(){
    return(
        <div className="container">
            <div className="container__title">
                <p>Adicionado com Sucesso</p>
            </div>
                <div className="container--popover">
                    <p className='container--sale'>Oferta Cheddar Bacon</p>
                    <p className='container--text'>Ingredientes</p>
                    <ul className='container--list'>
                        <li className='container--list--item'>1 Carne 250gr</li>
                        <li className='container--list--item'>2 Queijo Cheddar</li>
                        <li className='container--list--item'>1 Bacon</li>
                        <li className='container--list--item'>Molho Especial</li>
                    </ul>
                </div>
        </div>
    )
}