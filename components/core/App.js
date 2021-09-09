import React from "react";

import ShapeEditor from "../utils/ShapeEditor.js";
import Sidebar from "../utils/Sidebar.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <ShapeEditor />
                    </Col>
                    <Col>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;