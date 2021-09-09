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

const DraggableVertice = () => {
    return (
        <>
            <Draggable
                bounds="parent"
                handle=".handle"
            >
                <CircleVertice className="handle" />
            </Draggable>
        </>
    );
}

export default DraggableVertice;