import './Loign.css'

function Loign() {
  return (
    <div className="loign">
      <h1>Loign</h1>
       {/* esquerdo */}
      <div className="left">
        <div className="overlay">
          <h2>Bem-vindo ao nosso sistema de gerenciamento de projetos!</h2>                           
          <p>Gerencie seus projetos com facilidade e eficiência.</p>
        </div>
      </div>

      {/*  direito */}
      <div className="right">
        <div className="login-box">

          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Digite seu login..." />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha..." />
            </div>

            <button type="submit">Entrar</button>

            <a href="#" className="forgot">
              Esqueci minha senha
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Loign
