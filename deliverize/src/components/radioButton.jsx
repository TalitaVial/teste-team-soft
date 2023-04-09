export default function RadioButton(props) {
  return (
    <label htmlFor={`radio${props.label}`}>
      <span>{props.label}</span>
      <input
        key={props.value}
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
