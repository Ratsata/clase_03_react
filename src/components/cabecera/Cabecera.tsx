import { useState } from 'react';

const Cabecera = () => {

    const [cantidadTareas, setCantidadTareas] = useState('4');
    const [cantidadTareasRestantes, setCantidadTareasRestantes] = useState('4');
    const [tareas, setTareas] = useState<any>({});

    return (
        <div className="card-header">
            Lista de tareas
            <div className="row">
                <div className="col-3 border-end">
                    <h5 className="card-title">{cantidadTareas} Tareas</h5>
                </div>
                <div className="col-3">
                    <h5 className="card-title">{cantidadTareasRestantes} Restantes</h5>
                </div>
            </div>
        </div>
    )
}

export default Cabecera