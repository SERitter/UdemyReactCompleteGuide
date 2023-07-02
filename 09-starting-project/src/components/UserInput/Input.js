const Input = (props) => {
    return (
        <p>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} />
        </p>
    )
}
export default Input;