import heart from '../../assets/images/heart.svg'
import arterial from '../../assets/images/pressao-arterial.svg'
import './style.css'

import ListMetrics from '../ListMetrics'


import { useForm, Resolver } from "react-hook-form";
import { useState } from 'react';

type FormValues = {
    bpm: number;
    systolicPressure: number;
    diastolicPressure: number;
    moment: String;
  };

const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values,
      errors: !values.bpm
      ? {
          bpm: {
            type: "required",
            message: "This is required."
          }
        }
      : {}
    };
  };

function CardMetrics() {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<FormValues>({
        resolver: resolver
      });

    const [state, setState] = useState<FormValues[]>([]);

    const onSubmit = handleSubmit((data) => setState(state => [...state, data]));

    return(
        <>
        <form onSubmit = {onSubmit} >           
            <div className="card-metrics">
                <div className="hours-radio">
                    <input type="radio" id="h-2" name="hour" value="02:00" {...register("moment")}/>
                    <label htmlFor="h-2">02:00</label>
                </div>
                <div className="hours-radio">
                    <input type="radio" id="h-6" name="hour" value="06:00" {...register("moment")}/>
                    <label htmlFor="h-6">06:00</label>
                </div>
                <div className="hours-radio">
                    <input type="radio" id="h-10" name="hour" value="10:00" {...register("moment")}/>
                    <label htmlFor="h-10">10:00</label> 
                </div>
                <div className="hours-radio">
                    <input type="radio" id="h-14" name="hour" value="14:00" {...register("moment")}/>
                    <label htmlFor="h-14">14:00</label>
                </div>
                <div className="hours-radio">
                    <input type="radio" id="h-18" name="hour" value="18:00" {...register("moment")}/>
                    <label htmlFor="h-18">18:00</label>
                </div>
                <div className="hours-radio">
                    <input type="radio" id="h-22" name="hour" value="22:00" {...register("moment")}/>
                    <label htmlFor="h-22">22:00</label>
                </div>
                                
                <div className="bpm-art-container">
                    <div className="frame-bpm">
                        <div className="group-bpm-1">
                            <img src={heart} alt="heart" />
                            <label>BPM</label>
                        </div>
                        <div className="input-bpm">
                            <input className="form-input-bpm" type="number" {...register("bpm")} />
                            {errors?.bpm && <p>{errors.bpm.message}</p>}
                        </div>
                    </div>
                    <div className="frame-arterial">
                        <div className="group-art-1">
                            <img src={arterial} alt="heart" />
                            <label>PRESSÃO ARTERIAL</label>
                        </div>
                        <div className="input-art">
                            <input className="form-input-p" type="number" {...register("diastolicPressure")}  />
                            <input className="form-input-a" type="number" {...register("systolicPressure")} />
                        </div>
                    </div>
                </div>
                <button type="submit">Próximo</button>           
            </div>
        </form>
        <ListMetrics metrics={state}/>
        </>
    )
  }
  
  export default CardMetrics