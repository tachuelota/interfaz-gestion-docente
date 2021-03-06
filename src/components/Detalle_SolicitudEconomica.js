import React from 'react';
import {Grid, Row, Button, Glyphicon, Col,Panel,ListGroup,ListGroupItem} from 'react-bootstrap';
import BaseContainer from "./BaseContainer";

class Detalle_SolicitudEconomica extends React.Component {

    render() {
        console.log('Renderizando tabla');
        console.log(JSON.stringify(this.props, null, 2));
        return(
            <BaseContainer>
                <div className="panel col-lg-offset-2 col-lg-8 col-md-12 col-sm-12">
                    <Row className="back-bar">
                        <Col md={12}>
                            <Button onClick={this.props.volverLista}><Glyphicon glyph="arrow-left"/></Button>
                        </Col>
                    </Row>
                <Grid>
                    <Row>
                        <Col md={8}>
                            <h2>Detalle de solicitud economica</h2>
                        </Col>
                        <Row className="back-bar">
                        </Row>
                    </Row>
                </Grid>
                <Row>
                    <Col md={10}>
                        <panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3"> Informacion Principal: </Panel.Title>
                            </Panel.Heading>
                            <ListGroup>
                                <ListGroupItem> <Grid> <Row> <Col md={2}> Titulo Paper: </Col> <Col md={4}> {this.props.titulo} </Col> </Row> </Grid> </ListGroupItem>
                                <ListGroupItem> <Grid> <Row> <Col md={2}> Motivo: </Col> <Col md={4}> {this.props.motivo} </Col> </Row> </Grid> </ListGroupItem>
                                <ListGroupItem> <Grid> <Row> <Col md={2}> Monto: </Col> <Col md={4}> { this.props.monto_otorgado} </Col> </Row> </Grid> </ListGroupItem>
                                <ListGroupItem> <Grid> <Row> <Col md={2}> Fecha de registro: </Col> <Col md={4}>  { this.props.fecha_solicitud} </Col> </Row> </Grid> </ListGroupItem>
                                <ListGroupItem> <Grid> <Row> <Col md={2}> Estado:  </Col> <Col md={4} > { this.props.estado }  </Col> </Row> </Grid> </ListGroupItem>
                            </ListGroup>
                        </panel>
                    </Col>
                    <Col md={10}>
                        <panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3"> Descarga de Paper: </Panel.Title>
                            </Panel.Heading>
                            </panel>
                    </Col>
                </Row>
            </div>
            </BaseContainer>
        );
    }
}

export default Detalle_SolicitudEconomica;