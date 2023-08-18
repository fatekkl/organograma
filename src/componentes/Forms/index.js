import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextCamp from '../TextCamp'
import './Forms.css'
import Footer from '../Footer'


const Forms = (props) => {
    const [nome , SetNome] = useState('')
    const [cargo , SetCargo] = useState('')
    const [imagem , SetImagem] = useState('')
    const [time , SetTime] = useState('')

    const AoSalvar = (evento) => {
        evento.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        SetNome('')
        SetCargo('')
        SetImagem('')
        SetTime('')
    }
    

    

    return (
        <section className='Formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o Card do Colaborador</h2>
            
            <TextCamp valor={nome} AoMudar={valor => SetNome(valor)} obg={true} label="Nome" placeholder='Insira seu Nome'/>
            <TextCamp valor={cargo} AoMudar={valor => SetCargo(valor) }obg={true} label="Cargo" placeholder='Insira seu Cargo'/>
            <TextCamp valor={imagem} AoMudar={valor => SetImagem(valor)}obg={true} label="Imagem" placeholder='insira o endereço da sua imagem'/>
            <Dropdown valor={time} AoMudar={valor => SetTime(valor)}obg={true} label="Times" itens={props.times}/>
            <Button texto='Criar Card'/>
            </form>
        </section>
      
    )

}

export default Forms