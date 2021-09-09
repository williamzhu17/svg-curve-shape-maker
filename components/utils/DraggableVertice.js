import React from "react";

import Draggable from "react-draggable";

import styled from "styled-components";

const CircleVertice = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px;
  padding: 0px;
  clip-path: circle(50% at 50% 50%);
  background-color: black;
  position: absolute;
`;

const DraggableVertice = ({x, y, number, handleDrag}) => {

    const onDrag = (e, data) => {
        handleDrag(e, data, number);
    }

    return (
        <>
            <Draggable
                bounds="parent"
                handle=".handle"
                position={{x: x, y: y}}
                onDrag={(e, data) => onDrag(e, data)}
            >
                <CircleVertice className="handle" />
            </Draggable>
        </>
    );
}

export default DraggableVertice;