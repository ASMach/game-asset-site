import React, { useState } from "react";

import { Container, Tab, Tabs, Row, Image } from "react-bootstrap";

import * as eventKeys from "../tabKeys";

import predictive_character_seeking_unity_sm from "../Images/Unity/predictive-character-seeking-sm.jpg";
import predictive_character_seeking_unity_lg from "../Images/Unity/predictive-character-seeking-lg.jpg";

export default function Middleware(props) {
  const [key, setKey] = useState("home");

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
              <Container>
                <Row>
                  <a href="https://assetstore.unity.com/packages/tools/ai/predictive-character-seeking-185419">
                    <Image
                      src={predictive_character_seeking_unity_sm}
                      className="d-inline-block align-top"
                      alt="Predictive Character Seeking"
                      rounded
                    />
                  </a>
                </Row>
                <Row>
                  <p>
                    Real-time linear regression to predict where a character
                    will be once beyond an AI character's range of sight. A new
                    angle to NPC seeking scripts.
                  </p>
                </Row>
              </Container>
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
