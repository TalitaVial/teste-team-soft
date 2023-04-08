import '../styles/containerCheckBox.css'


export default function ContainerChekBox(){
    return(
        <div className="container__chekBox">
            <form className="container--item">
                <label for="radioYes">
                <span>Sim</span>
                <input id='radioYes' name='radio' type="radio" />
                <div className="custom--radio">
                    <span></span>
                </div>
                </label>
            </form>
            <form className="container--item">
                <label for="radioNo">
                <span>Não</span>
                <input id='radioNo' name='radio' type="radio" /> 
                <div className="custom--radio">
                    <span></span>
                </div>
                </label>
            </form>
        </div>
    )
}