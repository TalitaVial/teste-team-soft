export default function RadioButton(props) {
  return (
    <label for={`radio${props.label}`}>
      <span>{props.label}</span>
      <input
        id={`radio${props.label}`}
        name="radio"
        type="radio"
        value={props.value}
      />
      <div className="custom--radio">
        <span></span>
      </div>
    </label>
  );
}
