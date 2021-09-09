import React, { useState, useEffect } from "react";

import DraggableVertice from "./DraggableVertice.js";

import styled from "styled-components";

const EditBox = styled.div`
    background-color: #D3D3D3;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    position: relative;
`;

const ShapeEditor = ({verticePoints, handleDrag, addVertice}) => {

    const [vertices, setVertices] = useState([]);

    useEffect(() => {
        const array = [];

        for (let i = 0; i < verticePoints.length; i++) {
            
            if (verticePoints[i] === undefined) {
                return;
            }

            array.push(
                <DraggableVertice 
                    key={1000 + i}
                    x={verticePoints[i].x}
                    y={verticePoints[i].y}
                    number={i}
                    handleDrag = {handleDrag}
                />
            );
        }

        setVertices(array);

    }, [verticePoints]);

    return (
        <>
            <EditBox onClick={(e) => addVertice(e)}>
                {vertices}
            </EditBox>
        </>
    );
}

export default ShapeEditor;