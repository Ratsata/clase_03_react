import { useDispatch, useSelector } from 'react-redux'
import { addTaskAction } from '../../store/modules/task/actions'
import { useState } from 'react';
import { taskSelector } from './../../store/modules/task/selectors';

const Formulario = () => {
    const tasks: any = useSelector(taskSelector)

    const [tarea, setTarea] = useState('')

    const handlerOnChange = (event: any) => {
        setTarea(event.target.value);
    }

    const dispatch = useDispatch()
    const handlerOnClick = (event: any) => {
        if(tarea != ''){
            const task = {
                id: tasks.task.length + 1,
                name: tarea,
                check: false,
            }
            dispatch(addTaskAction(task));
            setTarea('');
        }
    }

    return (
        <div className="card-footer text-center">
            <form>
                <div className="row">
                    <div className="col-10">
                        <input className="form-control" type="text" placeholder="Nueva Tarea" aria-label="Nueva tarea"
                            value={tarea} onChange={handlerOnChange} required />
                    </div>
                    <div className="col-2">
                        <button id="btnAgregar" className="btn btn-primary" onClick={handlerOnClick}>Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario