import './Button.css'

const Button = (props) => {
    return(
        <button className='Botão'>
            {props.texto}
        </button>

    )
}

export default Button