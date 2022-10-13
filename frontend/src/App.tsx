import DividerVertical from "./components/DividerVertical"
import Heading from "./components/Heading"
import FormData from "./components/FormData"
import CardMetrics from "./components/CardMetrics"
import GenerationForm from "./components/GenerationForm"

function App() {
  return(
    <>
      <DividerVertical />
      <main>
        <section>
                <div className="main-container">
                  <div className="form-register">
                    <Heading />
                    <FormData />
                    <CardMetrics />
                    <GenerationForm />
                  </div>
                </div>
        </section>
      </main>

    </>    
  )
}

export default App
