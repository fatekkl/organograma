import './TextCamp.css'


const TextCamp = (props) => {

    const AoDigitar = (evento) => {
        props.AoMudar(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={AoDigitar} required={props.obg} placeholder={props.placeholder} />

        </div>

    )
}

export default TextCamp