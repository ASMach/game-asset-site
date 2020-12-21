import React from 'react';

import {Navbar, Container} from 'react-bootstrap';

export default function Footer () {
    return (
        <Navbar expand="sm" fixed="bottom" bg="light">
            <Container>
            Copyright 2020 all rights reserved except where otherwise noted.
            <a href="https://www.unity3d.com" target="_blank" rel="noreferrer">Unity</a> is a trademark of Unity Technologies, 
            <a href="https://www.unrealengine.com" target="_blank" rel="noreferrer">Unreal Engine</a> is a trademark of Epic Games.
            </Container>
        </Navbar>
    );
}