import './Listagem.css'

function Listagem() {
  return (
    <div className="listagem">
      <h1>Listagem</h1>
           <table border="1">
            <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>Senha</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>
            <tr>
                <td>Isabella</td>
                <td>isa.123@gmail.com</td>
                <td>26532a</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

                  <tr>
                <td>Luiz</td>
                <td>luizinho1@gmail.com</td>
                <td>202665b</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

                <tr>
                <td>Pedro</td>
                <td>Pedro.19@gmail.com</td>
                <td>25149c</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
                <tr>
                <td>Laura</td>
                <td>laurao22@gmail.com</td>
                <td>85485d</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
        </table>
        </div>


      
    
  )
}

export default Listagem
