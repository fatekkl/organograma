import Colaborador from '../Card'
import './Time.css'


const Time = (props) => {

    const css = {backgroundColor: props.cor2}

    const css2 = {borderColor: props.cor1}

    return (
      (props.colaboradores.length > 0) ? <section className='Time' style={css}>
            <h3 style={css2}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador cor3={props.cor1} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''

    )

}

export default Time