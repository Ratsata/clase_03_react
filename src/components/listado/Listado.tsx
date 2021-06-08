import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { taskSelector } from './../../store/modules/task/selectors';
import { updateTaskAction } from './../../store/modules/task/actions';

const Listado = () => {
    const tasks: any = useSelector(taskSelector)

    const dispatch = useDispatch()
    const handlerOnClick = (event: any) =>{
        const task = {
            id: event.target.value,
            check: event.target.checked,
        }
        dispatch(updateTaskAction(task))
    }

    // useEffect(() => {
    //     const task = {
    //         id: 0,
    //         check: true,
    //     }
    //     dispatch(updateTaskAction(task))
    // }, [])

    return (
        <div className="card-body">
            <p className="card-text">
                <div className="container">
                    {JSON.stringify(tasks)}
                    {tasks.tasks.map((task: any, index: number) => (
                        <div className="row">
                            <div className="col-10">
                                <label className="form-check-label">
                                    {task.name}
                                    {index}
                                </label>
                            </div>
                            <div className="col-2">
                                <input className="form-check-input" type="checkbox" value={index} checked={task.check} 
                                    onClick={handlerOnClick} key={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </p>
        </div>
    )
}

export default Listado