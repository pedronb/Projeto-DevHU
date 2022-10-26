import './style.css'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useForm, Resolver } from "react-hook-form";
import axios from 'axios';

// type FormValues = {
//    name: String;
//    birthDate: String;
//   };

// const resolver: Resolver<FormValues> = async (values) => {
//     return {
//       values: values,
//       errors: !values.name
//       ? {
//           name: {
//             type: "required",
//             message: "This is required."
//           }
//         }
//       : {}
//     };
//   };

function FormData() {

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) => {
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