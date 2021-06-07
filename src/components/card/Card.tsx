import { useState } from 'react';
import Cabecera from './../cabecera/Cabecera';
import Formulario from './../formulario/Formulario';
import Listado from './../listado/Listado';


const Card = () => {

    const [cantidadTareas, setCantidadTareas] = useState('4 restantes');
    const [tareas, setTareas] = useState<any>({});

    return (
        <div>
            <div className="card card-block">
                <Cabecera />
                <Listado />
                <Formulario />
            </div>
        </div>
    )
}

export default Card