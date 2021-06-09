import Cabecera from './../cabecera/Cabecera';
import Formulario from './../formulario/Formulario';
import Listado from './../listado/Listado';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.padding}>
            <div className={"card card-block " + styles.card}>
                <Cabecera />
                <Listado />
                <Formulario />
            </div>
        </div>
    )
}

export default Card