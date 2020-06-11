import React from 'react'

// bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const LeftImageRightText = ({title, paragraph, image}) => {
    return(
        <Container>
            <Row className="my-5">
                <Col sm="12" md="5">
                    <div className="my-auto w-75 mx-auto">
                        {image}
                    </div>
                </Col>
                <Col sm="12" md="7" className="text-center my-auto py-5">
                    <h2 className="wine mb-3">{title}</h2>
                    <p>{paragraph}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftImageRightText