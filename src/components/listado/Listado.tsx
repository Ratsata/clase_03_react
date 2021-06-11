import { useSelector, useDispatch } from 'react-redux';
import { taskSelector } from './../../store/modules/task/selectors';
import { searchSelector } from './../../store/modules/search/selectors';
import { updateTaskAction, removeTaskAction } from './../../store/modules/task/actions';
import styles from './Listado.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Listado = () => {
    const [tareas, setTareas] = useState<any>([])
    const tasks: any = useSelector(taskSelector)
    const searchs: any = useSelector(searchSelector)

    const dispatch = useDispatch()
    const handlerOnClickCheck = (event: any) => {
        const task = {
            id: parseInt(event.target.value, 10),
            check: event.target.checked,
        }
        dispatch(updateTaskAction(task));
    }

    const handlerOnClickRemove = (event: any) => {
        const target = event.target;
        dispatch(removeTaskAction(parseInt(target.dataset.id, 10)));
    }

    useEffect(() => {
        if (tasks.task.length > 0) {
            const busqueda = searchs.search;
            var filtrado = tasks.task.filter((t: any) => {
                if (busqueda == '' || t.name.toUpperCase().includes(busqueda.toUpperCase()))
                    return t;
            })
            setTareas(filtrado);
        }
    }, [searchs])

    useEffect(() => {
        setTareas(tasks.task);
    }, [tasks])

    return (
        <div className="card-body">
            <p className="card-text">
                <div className="container">
                    <div className={"list-group " + styles.maxHeight}>
                        {tareas.map((task: any, index: number) => (
                            <label className="list-group-item">
                                <div className="row">
                                    <div className="col-1">
                                        <input className="form-check-input me-1" type="checkbox" value={task.id} checked={task.check}
                                            onClick={handlerOnClickCheck} key={index} />
                                    </div>
                                    <div className="col-10">
                                        {task.name}
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-danger btn-sm rounded" title="Eliminar" onClick={handlerOnClickRemove}
                                            data-id={task.id}><i className="fa fa-trash" data-id={task.id}></i></button>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </p>
        </div>
    )
}

export default Listado