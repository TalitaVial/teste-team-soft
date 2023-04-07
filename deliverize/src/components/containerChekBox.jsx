import '../styles/containerCheckBox.css'


export default function ContainerChekBox(){
    return(
        <div className="container__chekBox">
            <form className="container--item">
                <label for="yes">Sim</label>
                <input id='yes' name='yes' type="radio" />
            </form>
            <form className="container--item">
                <label for="no">Não</label>
                <input id='no' name='no' type="radio" /> 
                
            </form>
        </div>
    )
}