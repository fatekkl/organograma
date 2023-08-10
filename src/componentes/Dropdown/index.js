import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className='Dropdown'>
            <label>{props.label}</label>
            <select onChange={evento => props.AoMudar(evento.target.value)} value={props.valor}required={props.obg}>
                <option value=''></option>
                {props.itens.map(item => <option  key={item}>{item}</option>)}
            </select>

        </div>
    )
}

export default Dropdown