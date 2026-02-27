import imagemDev from "../src/assets/image/pessoa.png"
import iconeGithub from "..//src/assets/image/github.png"
import iconeLinkedIn from "..//src/assets/image/linkdin.png"

function App() {
  
  return(
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao meu portifílio.
        </p>
        <p>
          Meu nome é <span>Lucas</span> e sou um desenvolvedor web
        </p>
        <div id="redes-sociais">
          <a href="#">
            <img src={iconeGithub} alt="" srcSet="" />
          </a>
          <a href="#">
            <img src={iconeLinkedIn} alt="" srcSet="" />
          </a>
        </div>
        <a href="#sobreMim">
          <button>Conheça mais sobre mim</button>
        </a>
      </section>
      <section>
        <img id="imagemDev" src={imagemDev} />
      </section>
      </main>
  )
}
export default App