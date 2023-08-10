import './Card.css'

const Colaborador = ({nome , imagem , cargo , cor3}) => {
    return (<div className='colaborador' style={{backgroundColor: cor3}}>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
    )

}

export default Colaborador