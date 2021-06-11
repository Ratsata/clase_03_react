import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskSelector } from './../../store/modules/task/selectors';
import { useEffect } from 'react';
import { searchAction } from './../../store/modules/search/actions';

const Cabecera = () => {
    const [cantidadTareas, setCantidadTareas] = useState(0)
    const [cantidadTareasRestantes, setCantidadTareasRestantes] = useState(0)
    const [busqueda, setBusqueda] = useState('')

    const handlerOnChange = (event: any) => {
        setBusqueda(event.target.value);
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchAction(busqueda));
    }, [busqueda])

    const tasks: any = useSelector(taskSelector)
    useEffect(() => {
        //Seteo de cantidad de elementos en el array
        setCantidadTareas(tasks.task.length);
        //Seteo de cantidad de elementos checkeados
        const taskChecked = tasks.task.filter((task: any) => {
            if (task.check) return task
        });
        setCantidadTareasRestantes(tasks.task.length - taskChecked.length);
        setBusqueda('');
    }, [tasks])

    return (
        <div className="card-header">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Tareas</li>
                </ol>
            </nav>
            Lista de tareas
            <div className="row">
                <div className="col-3 border-end">
                    {cantidadTareas === 1 &&
                        <h5 className="card-title">
                            {cantidadTareas} Tarea
                        </h5>
                    }
                    {cantidadTareas != 1 &&
                        <h5 className="card-title">
                            {cantidadTareas} Tareas
                        </h5>
                    }
                </div>
                <div className="col-3">
                    <h5 className="card-title">{cantidadTareasRestantes} Pendientes</h5>
                </div>
            </div>
            <div className="row">
                <input className="form-control" type="text" placeholder="Buscar" aria-label="Buscar"
                    value={busqueda} onChange={handlerOnChange} />
            </div>
        </div>
    )
}

export default Cabecera