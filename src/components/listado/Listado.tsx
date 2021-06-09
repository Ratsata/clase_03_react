import { useSelector, useDispatch } from 'react-redux';
import { taskSelector } from './../../store/modules/task/selectors';
import { updateTaskAction, removeTaskAction } from './../../store/modules/task/actions';
import styles from './Listado.module.css';

const Listado = () => {
    const tasks: any = useSelector(taskSelector)

    const dispatch = useDispatch()
    const handlerOnClickCheck = (event: any) =>{
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

    return (
        <div className="card-body">
            <p className="card-text">
                <div className="container">
                    {tasks.task.map((task: any, index: number) => (
                        <div className={"row " + styles.fila}>
                            <div className="col-1">
                                <button className="btn btn-danger btn-sm rounded" title="Eliminar" onClick={handlerOnClickRemove}
                                    data-id={task.id}><i className="fa fa-trash" data-id={task.id}></i></button>
                            </div>
                            <div className="col-9">
                                <label className="form-check-label">
                                    {task.name}
                                </label>
                            </div>
                            <div className="col-2">
                                <input className="form-check-input" type="checkbox" value={task.id} checked={task.check}
                                    onClick={handlerOnClickCheck} key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </p>
        </div>
    )
}

export default Listado