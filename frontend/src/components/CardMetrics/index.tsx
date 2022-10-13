import heart from '../../assets/images/heart.svg'
import arterial from '../../assets/images/pressao-arterial.svg'
import './style.css'

function CardMetrics() {
    return(
        <div className="card-metrics">
            <div className="hours-radio">
                <input type="radio" id="h-2" name="hour2" value="hour-2" />
                <label htmlFor="h-2">02:00</label>
            </div>
            <div className="hours-radio">
                <input type="radio" id="h-6" name="hour6" value="hour-6" />
                <label htmlFor="h-6">06:00</label>
            </div>
            <div className="hours-radio">
                <input type="radio" id="h-10" name="hour10" value="hour-10" />
                <label htmlFor="h-10">10:00</label> 
            </div>
            <div className="hours-radio">
                <input type="radio" id="h-14" name="hour14" value="hour-14" />
                <label htmlFor="h-14">14:00</label>
            </div>
            <div className="hours-radio">
                <input type="radio" id="h-18" name="hour18" value="hour-18" />
                <label htmlFor="h-18">18:00</label>
            </div>
            <div className="hours-radio">
                <input type="radio" id="h-22" name="hour22" value="hour-22" />
                <label htmlFor="h-22">22:00</label>
            </div>
                            
            <div className="bpm-art-container">
                <div className="frame-bpm">
                    <div className="group-bpm-1">
                        <img src={heart} alt="heart" />
                        <label>BPM</label>
                    </div>
                    <div className="input-bpm">
                        <input className="form-input-bpm" type="number" />
                    </div>
                </div>
                <div className="frame-arterial">
                    <div className="group-art-1">
                        <img src={arterial} alt="heart" />
                        <label>PRESSÃO ARTERIAL</label>
                    </div>
                    <div className="input-art">
                        <input className="form-input-p" type="number" />
                        <input className="form-input-a" type="number" />
                    </div>
                </div>
            </div>
            <button type="submit">Próximo</button>
        </div>
    )
  }
  
  export default CardMetrics