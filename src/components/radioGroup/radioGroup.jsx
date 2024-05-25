import "./radioGroup.css";
import RadioButton from "../radioButton/radioButton";

export default function RadioGroup(props) {
  return (
    <div className="container__chekBox">
      <form className="container--item">
        {props.options.map((option, i) => (
          <RadioButton key={i} {...option} />
        ))}
      </form>
    </div>
  );
}
