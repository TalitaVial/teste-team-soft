import "../styles/radioGroup.css";
import RadioButton from "./radioButton";

export default function RadioGroup(props) {
  return (
    <div className="container__chekBox">
      <form className="container--item">
        {props.options.map((option) => (
          <RadioButton {...option} />
        ))}
      </form>
    </div>
  );
}
