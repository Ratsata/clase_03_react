import styles from './Inicio.module.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div>
            <div className="card-header">
                Listado de tareas
            </div>
            <div className={"card-body " + styles.maxHeigh}>
                <p className="card-text">
                    <div className="container">
                        <div className="row">
                            <div className="d-grid gap-2">
                                <Link to="/task" id="btnAgregar" className="btn btn-primary btn-lg">Ingresar al listado de tareas</Link>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
            <div className="card-footer text-muted">
                By: Sebastían Vega.-
            </div>
        </div>
    )
}

export default Inicio