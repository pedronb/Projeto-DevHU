import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function FormData() {

    const [birthDate, setBirthDate] = useState(new Date);
    const [metricsDate, setMetricsDate] = useState(new Date());

    return(
        <div className="form">
            <div className="form-group-name">
                <p>Nome completo</p>
                <input className="form-control" type="text" />
            </div>
            <div className="form-group-birth">
                <p>Data de nascimento</p>
                <DatePicker
                    selected={birthDate}
                    onChange={(date: Date) => setBirthDate(date)}
                    className="form-control-date"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="form-group-date">
                <p>Para qual dia você deseja gerar o gráfico de saúde?</p>
                <DatePicker
                    selected={metricsDate}
                    onChange={(date: Date) => setMetricsDate(date)}
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