import React from 'react'

// bootstrap
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// productos hook
import useProductos from "../hooks/useProductos"
import Container from 'react-bootstrap/Container'

const Productos = () => {

    const productos = useProductos()
    console.log(productos)

    return(
        <Container className="bg-light py-5" fluid>
            <Container>
                <h3 className="wine text-center mb-3">Productos</h3>
                <Row>
                    {productos.map(producto => {
                        return(
                        <Col
                            key={producto.id}
                            sm="12" md="4">
                            <div className="tarjeta">
                                <div className="tarjeta-contenedor-img">
                                   <img className="tarjeta-img" src={producto.imagen} alt="product displayed"/>
                                   <div className="tarjeta-overlay"></div>
                                </div>
                                <div className="tarjeta-cuerpo">
                                    <h5 className="tarjeta-nombre">{producto.nombre}</h5>
                                    <p className="tarjeta-descripcion">{producto.descripcion}</p>
                                    <button className="btn btn-block bg-yellow wine">${producto.precio} - Add to cart</button>
                                </div>
                            </div>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default Productos