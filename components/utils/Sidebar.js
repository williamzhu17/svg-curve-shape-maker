import React from "react";

import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SidebarBackground = styled.div`
    background-color: gray;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
`;

const Sidebar = ({verticePoints}) => {
    return(
        <>
            <SidebarBackground>
                <Container>
                    <Row>
                        Adjust Your Points
                    </Row>
                    <Row>
                        {verticePoints[0].x}
                    </Row>
                    <Row>
                        {verticePoints[0].y}
                    </Row>
                </Container>
            </SidebarBackground>
        </>
    );
}

export default Sidebar;