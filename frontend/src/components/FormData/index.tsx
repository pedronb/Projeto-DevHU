import './style.css'

function FormData() {
    return(
        <div className="form">
            <div className="form-group-name">
                <p>Nome completo</p>
                <input className="form-control" type="text" />
            </div>
            <div className="form-group-birth">
                <p>Data de nascimento</p>
                <input className="form-control-date" type="text" />
            </div>
            <div className="form-group-date">
                <p>Para qual dia você deseja gerar o gráfico de saúde?</p>
                <input className="form-control-date" type="text" />
            </div>
            <div className="form-group-date">
                <p>Selecione o horário para preencher os dados</p>
            </div>
        </div>
    )
  }
  
  export default FormData