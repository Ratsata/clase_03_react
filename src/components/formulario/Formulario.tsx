
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('')

    const handlerOnChange = (event: any) => {
        setTarea(event.target.value)
    }

    const handlerOnClick = () => {
        
    }

    return (
        <div className="card-footer text-center">
            <div className="row">
                <div className="col-10">
                    <input className="form-control" type="text" placeholder="Nueva Tarea" aria-label="Nueva tarea"
                        value={tarea} onChange={handlerOnChange} />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={handlerOnClick}>Agregar</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Formulario