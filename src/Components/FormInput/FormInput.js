const FormInput = ({inputName, ...props}) => {
    return (
        <div className="form-input">
            <label htmlFor={props.nome} > {inputName}: </label>
            <input tupe={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;