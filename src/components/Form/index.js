import './Form.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu Cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Insira a sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropdownList 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>
                    Criar Botão
                </Button>
            </form>
        </section>
    )
}

export default Form;