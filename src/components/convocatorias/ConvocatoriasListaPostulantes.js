import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';
import axios from "axios/index";
import BaseContainer from "../BaseContainer";
import Cursos from "../Cursos";
import ConvocatoriaNuevo from "./ConvocatoriasNuevo";
import registroPostulante from "./registroPostulante";
import linkConvocatoria from "./linkConvocatoria";
import ConvocatoriasPostulantePerfil from "./ConvocatoriasPostulantePerfil";
import API from '../../api.js';

class ConvocatoriasListaPostulantes extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            fecha_limite: '',
            postulantes: []
        }
    }

    componentWillMount() {
        this.search();
    }

    search() {
        API.get('convocatoria/convocatoria/detalle', {
            params: {
                id: this.props.match.params.id_convocatoria
            }
        }).then(response => {
            this.setState(response.data[0]);
        })
    }

    labelPostulacion(estado) {
        switch (estado) {
            case 'Aceptado':
                return <span className="label label-success"> Aceptado </span>;
            case 'Rechazado':
                return <span className="label label-danger"> Rechazado </span>;
            case 'Pendiente':
                return <span className="label label-warning"> Pendiente </span>;
        }
    }

    render() {
        return (
            <div>
                <Route exact path={ `${this.props.match.path}` } render={ () =>
                    <BaseContainer>
                        <div className="panel wrapper-md col-lg-offset-1 col-lg-10 col-md-12 col-sm-12">
                            <div className="panel-heading">
                                <h2> { this.state.nombre } </h2>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-offset-0 col-md-4">
                                    <h5> Fecha límite de Postulación: </h5>
                                    <h5> Cantidad de postulantes: </h5>
                                    <h5> Cantidad de postulantes aceptados: </h5>
                                    <h5></h5>
                                </div>
                                <div className="col-md-5">
                                    <h5> { this.state.fecha_limite } </h5>
                                    <h5> { this.state.cantidad_postulantes } </h5>
                                    <h5> { this.state.cantidad_postulantes_aceptados } </h5>
                                    <h5></h5>
                                </div>

                                <Link className="btn btn-default pull-right" to={ `${this.props.history.location.pathname}/link` }> URL </Link>

                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th className="v-middle col-md-4"> Nombre</th>
                                        <th className="v-middle col-md-4 text-center"> Fecha Postulacion</th>
                                        <th className="v-middle col-md-4 text-center"> Estado</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.postulantes.map(item => {
                                            return (
                                                <tr key={item.codigo}>
                                                    <td className="v-middle">
                                                        <Link to={`${this.props.history.location.pathname}/postulante/${item.codigo}`} className="block text-primary">{item.nombre}</Link>
                                                    </td>
                                                    <td className="v-middle text-center">
                                                        <span className="block"> { item.fecha_postulacion } </span>
                                                    </td>
                                                    <td className="v-middle text-center">
                                                        { this.labelPostulacion(item.estado_postulacion) }
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </BaseContainer>
                }/>
                <Route path={ `${this.props.match.path}/postulante/:id` } component={ ConvocatoriasPostulantePerfil }/>
                <Route path={ `${this.props.match.path}/link` } component={ linkConvocatoria }/>
            </div>
        );
    }

}

export default ConvocatoriasListaPostulantes;