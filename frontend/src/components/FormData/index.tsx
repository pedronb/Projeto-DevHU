import './style.css'
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

function FormData() {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
      axios.post("http://localhost:8080/users", e)
      .then(res => res.data)
      console.log(e);
    }

    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className="form">
                <div className="form-group-name">
                    <p>Nome completo</p>
                    <input className="form-control" type="text" placeholder="Nome completo" {...register("name")}/>
                </div>
                <div className="form-group-birth">
                    <p>Data de nascimento</p>
                    <input className="form-control-date" type="text" placeholder="dia/mês/ano" {...register("birthDate")}/>
                </div>
                <button type="submit">Salvar</button> 
            </div>
        </form>
    )
  }
  
  export default FormData