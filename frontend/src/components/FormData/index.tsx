import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormData() {
    return(
        <div className="form">
            <div className="form-group-name">
                <p>Nome completo</p>
                <input className="form-control" type="text" />
            </div>
            <div className="form-group-birth">
                <p>Data de nascimento</p>
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="form-control-date"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="form-group-date">
                <p>Para qual dia você deseja gerar o gráfico de saúde?</p>
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="form-control-date"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="form-group-date">
                <p>Selecione o horário para preencher os dados</p>
            </div>
        </div>
    )
  }
  
  export default FormData