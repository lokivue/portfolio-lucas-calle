import './App.css'
import Cabecalho from './components/Cabecalho'
import Inicio from './components/Inicio'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <div className="outfit">
        <Cabecalho />
        <Inicio />
        <SobreMim />
        <Projetos />
        <Contato />
        <Rodape />
      </div>
    </>
  )
}

export default App