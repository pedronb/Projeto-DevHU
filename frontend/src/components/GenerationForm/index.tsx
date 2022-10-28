import axios from 'axios';
import './style.css'

type FormValues = {
    bpm: number;
    systolicPressure: number;
    diastolicPressure: number;
    moment: String;
  };

interface Props {
    metrics: FormValues[]
  }

function GenerationForm({ metrics } : Props) {

    function saveMetric() {
        const metric = metrics.map((metric, index) =>
            axios.post("http://localhost:8080/metrics", metric)
            .then(res => res.data))
        return metric
    }

    return(
        <form onSubmit={saveMetric}>
            <div className="btn-form">
                <button type="submit">Gerar diário de saúde</button>
            </div>
        </form>
    )
  }

export default GenerationForm