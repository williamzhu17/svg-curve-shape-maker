import React from "react";

import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SidebarBackground = styled.div`
    background-color: #7440d8;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
`;

const Sidebar = () => {
    return(
        <>
            <SidebarBackground>
                <Container>
                    <Row>
                        Adjust Your Points
                    </Row>
                </Container>
            </SidebarBackground>
        </>
    );
}

export default Sidebar;