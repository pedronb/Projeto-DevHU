import "./style.css"
import editar from "../../assets/images/pencil-line.svg"
import excluir from "../../assets/images/delete-bin-7-line.svg"

function ListMetrics() {
    return(
        <div className="list-metrics-container">
            <table>
                <tbody>
                <tr>
                    <td>Hora: 02:00</td>
                    <td>BPM: 72</td>
                    <td>PRESSAO ARTERIAL: 120/80</td>
                    <td><img src={editar} alt="editar" /></td>
                    <td><img src={excluir} alt="excluir" /></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
  }
  
  export default ListMetrics