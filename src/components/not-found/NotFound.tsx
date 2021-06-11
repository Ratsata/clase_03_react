import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="error-template m-5">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Página no encontrada, presione el botón a continuación para volver.
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg"> <span className="fa fa-home" />
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound