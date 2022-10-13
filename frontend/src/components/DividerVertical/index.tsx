import logo from '../../assets/images/logo.svg'
import image from '../../assets/images/image1.svg'

function DividerVertical() {
    return(
        <section>
            <div className="divider-vertical-container">
                <div className="logo-header">
                    <img src={logo} alt="Clever" />
                    <h2>Clever</h2>
                </div>       
                <h1>Relatórios de saúde em gráficos</h1>
                <div className="sub-header">
                    <p>Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura.</p>
                </div>
                <div className="mark-group">
                    <img src={image} alt="image1" />
                </div>
            </div>
        </section>
    )
  }
  
  export default DividerVertical