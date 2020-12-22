import React, {useState} from 'react';

import {Container, Tab, Tabs} from 'react-bootstrap';

import * as eventKeys from '../tabKeys';

export default function Middleware (props) {

    const [key, setKey] = useState('home');

    return (
        <div className="App-body">
            <div className="about">
                <Container>
                <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey={eventKeys.UNITY} title="Unity">
        Predictive Character Seeking
      </Tab>
      <Tab eventKey={eventKeys.UNREAL} title="Unreal">
        Unreal middleware
      </Tab>
    </Tabs>
                </Container>
            </div>
        </div>
    );
}