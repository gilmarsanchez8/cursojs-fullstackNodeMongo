import { response } from 'express';
import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';

const Cita = (props) => {

    if(!props.cita){
        props.history.push('/');
        return null;
    }

    //Eliminar cita
    const eliminarCita = id => {
        clienteAxios.delete(`/pacientes/${id}`)
            .then(respuesta => {
                props.guardarConsultar(true);
                props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            })   
    }

    return ( 
    <Fragment>     
        <h1 className="my-5">Nombre de Cita: {props.cita.nombre}</h1>
        <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                            <div className="d-flex w-100 justify-content-between mb-4">
                                <h3 className="mb-3">{props.cita.nombre}</h3>
                                <small className="fecha-alta">
                                    {props.cita.fecha} - {props.cita.hora}
                                </small>
                            </div>
                            <p className="mb-0">
                                {props.cita.sintomas}
                            </p>
                            <div className="contacto py-3">
                                <p>Dueño: {props.cita.propietario}</p>
                            </div>
                            <div className="d-flex">
                                <button 
                                    type="button" 
                                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                    onClick={() => eliminarCita(props.cita._id)} > 
                                    Eliminar &times;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </Fragment> );
}
 
export default withRouter(Cita);