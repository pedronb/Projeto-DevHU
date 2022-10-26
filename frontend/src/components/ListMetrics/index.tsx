import "./style.css"
import editar from "../../assets/images/pencil-line.svg"
import excluir from "../../assets/images/delete-bin-7-line.svg"
import { useEffect } from "react";

type FormValues = {
    bpm: number;
    systolicPressure: number;
    diastolicPressure: number;
    moment: String;
  };

interface Props {
    metrics: FormValues[]
  }

function ListMetrics({ metrics }: Props) {

    useEffect(
        () => {
          console.log(metrics);
        },
        [metrics],
      );

    return(
        <div className="list-metrics-container">
            <table>
                <tbody>
                  {metrics.map((metric, index) => (
                <tr data-index={index}>
                  <td>Hora: {metric.moment}</td>
                  <td>BPM: {metric.bpm}</td>
                  <td>PRESSAO ARTERIAL: {metric.systolicPressure} / {metric.diastolicPressure}</td>
                  <td><img src={editar} alt="editar" /></td>
                  <td><img src={excluir} alt="excluir" /></td>
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    )
  }
  
  export default ListMetrics