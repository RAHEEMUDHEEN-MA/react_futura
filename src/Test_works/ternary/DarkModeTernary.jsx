import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import "./Darkmode.css";

function DarkModeTernary() {
  const [light, Setdark] = useState(false);
  const [nutral, setred] = useState(true);
  return (
    <div>
      {/* // lightmode//// */}
      {light ? (
        <div id="LM_screen">
          {" "}
          <Card style={{ width: "18rem" }} id="light_card">
            <Card.Img
              variant="top"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87320.jpg"
            />
            <Card.Body style={nutral ? { color: "" } : { color: "red" }}>
              <Card.Title>{light ? "Light Mode" : "Dark Mode"}</Card.Title>
              <Card.Text>
                theme of the card will be in <b>Light</b> mode !
              </Card.Text>
              <div
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Button variant="primary" onClick={() => Setdark(!light)}>
                  {light ? "Dark mode" : "light mode"}
                </Button>
                <Button
                  style={{ width: "80px" }}
                  variant="primary"
                  onClick={() => setred(!nutral)}
                >
                  {nutral ? "red" : "reset"}
                </Button>
              </div>
            </Card.Body>
          </Card>{" "}
        </div>
      ) : (
        // darkmode//////
        <div id="DM_screen">
          <Card style={{ width: "18rem" }} id="dark_card">
            <Card.Img
              variant="top"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87320.jpg"
            />
            <Card.Body style={nutral ? { color: "" } : { color: "red" }}>
              <Card.Title>{light ? "Light Mode" : "Dark Mode"}</Card.Title>
              <Card.Text>
                theme of the card will be in <b>dark</b> mode !
              </Card.Text>
              <div
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Button variant="primary" onClick={() => Setdark(!light)}>
                  {light ? "dark mode" : "Light mode"}
                </Button>
                <Button
                  style={{ width: "80px" }}
                  variant="primary"
                  onClick={() => setred(!nutral)}
                >
                  {nutral ? "red" : "reset"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default DarkModeTernary;
