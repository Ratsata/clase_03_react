import { useState } from 'react';
import { useSelector } from 'react-redux';
import { taskSelector } from './../../store/modules/task/selectors';
import { useEffect } from 'react';

const Cabecera = () => {
    const [cantidadTareas, setCantidadTareas] = useState(0)
    const [cantidadTareasRestantes, setCantidadTareasRestantes] = useState(0)

    const tasks: any = useSelector(taskSelector)
    useEffect(()=>{
        //Seteo de cantidad de elementos en el array
        setCantidadTareas(tasks.task.length)
        //Seteo de cantidad de elementos checkeados
        const taskChecked = tasks.task.filter((task: any) => {
            if (task.check) return task
        })
        setCantidadTareasRestantes(tasks.task.length - taskChecked.length)
    }, [tasks])

    return (
        <div className="card-header">
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
        </div>
    )
}

export default Cabecera