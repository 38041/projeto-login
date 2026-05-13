import './Usuarios.css'

function Usuarios() {
  return (
    <div className="usuarios">
      <h1>Usuarios de Cadastro</h1>

          <form>
            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Digite seu Nome..." />
            </div>

           <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Digite seu Email..." />
            </div>

            <div className="input-group">
              <label>Nova Senha</label>
              <input type="password" placeholder="Digite sua Nova senha..." />
            </div>

            <button type="submit">Cadastrar</button>

  
          </form>
        </div>
      
  )
}

export default Usuarios
