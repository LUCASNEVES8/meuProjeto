import { useState } from "react";
import "../Contato/Contato.css";

export const Contato = ({categoria}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("Mensagem enviada com sucesso!");
            setNome("");
            setEmail("");
            setMensagem("");
        } catch (error) {
            console.error('Erro ao enviar formulário: ', error);
        }
    }
    return (
        // ... (mantenha os states anteriores)
        <div id={categoria}>
            <div className="contato-texto">
                <h2>Você pode enviar uma mensagem</h2>
                <p>
                    Preencha seu nome, seu e-mail e a mensagem que deseja enviar para mim. <br />
                    Desde já agradeço o seu contato.
                </p>                
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Seu e-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="exemplo@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:</label>
                    {/* Trocado input por textarea para permitir múltiplas linhas */}
                    <textarea
                        id="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required 
                        rows="4"
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}