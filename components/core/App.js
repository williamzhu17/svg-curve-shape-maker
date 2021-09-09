import React, { useState } from "react";

import ShapeEditor from "../utils/ShapeEditor.js";
import Sidebar from "../utils/Sidebar.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {

    const [verticePoints, setVerticePoints] = useState([
        {
            "x": 10, 
            "y": 0,
        }
    ]);

    const handleDrag = (event, data, number) => {

        const newVerticePoints = [];
        
        for (let i = 0; i < verticePoints.length; i++) {
            if (i === number) {
                newVerticePoints.push({
                    "x": data.x,
                    "y": data.y,
                });
            } else {
                newVerticePoints.push(
                    verticePoints[i]
                );
            }
        }

        setVerticePoints(newVerticePoints);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <ShapeEditor verticePoints={verticePoints} handleDrag={handleDrag} />
                    </Col>
                    <Col>
                        <Sidebar verticePoints={verticePoints} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;