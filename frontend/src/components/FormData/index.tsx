import './style.css'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
   name: String,
   birthDate: String,
   date: String
  };

const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values,
      errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required."
          }
        }
      : {}
    };
  };

function FormData() {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<FormValues>({
        resolver: resolver
      });

    const [state, setState] = useState<FormValues>();
    const onSubmit = handleSubmit((data) => setState(state => [data]));

    return(
        <form onSubmit = {onSubmit}>
            <div className="form">
                <div className="form-group-name">
                    <p>Nome completo</p>
                    <input className="form-control" type="text" placeholder="Nome completo" {...register("name")}/>
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <div className="form-group-birth">
                    <p>Data de nascimento</p>
                    <input className="form-control-date" type="text" placeholder="dd/mm/yyyy" {...register("birthDate")}/>
                    {errors?.birthDate && <p>{errors.birthDate.message}</p>}
                </div>
                <div className="form-group-date">
                    <p>Para qual dia você deseja gerar o gráfico de saúde?</p>
                    <input className="form-control-date" type="text" placeholder="dd/mm/yyyy" {...register("date")}/>
                    {errors?.date && <p>{errors.date.message}</p>}
                </div>
                <button type="submit">Salvar</button> 
                <div className="form-group-date">
                    <p>Selecione o horário para preencher os dados</p>
                </div>
            </div>
        </form>
    )
  }
  
  export default FormData