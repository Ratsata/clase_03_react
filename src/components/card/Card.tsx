import styles from './Card.module.css';
import Cabecera from './../cabecera/Cabecera';
import Formulario from './../formulario/Formulario';
import Listado from './../listado/Listado';
import Inicio from '../inicio/Inicio';
import NotFound from './../not-found/NotFound';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

const Card = () => {
    return (
        <div className={styles.padding}>
            <div className={"card card-block " + styles.card}>
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/task" exact>
                        <Cabecera />
                        <Listado />
                        <Formulario />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Card