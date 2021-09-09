import React from "react";

import DraggableVertice from "./DraggableVertice.js";

import styled from "styled-components";

const EditBox = styled.div`
    background-color: #D3D3D3;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    position: relative;
`;

const ShapeEditor = () => {
    return (
        <>
            <EditBox>
                <DraggableVertice />
            </EditBox>
        </>
    );
}

export default ShapeEditor;