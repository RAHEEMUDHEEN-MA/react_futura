import React from "react";
import "../Styles/Home.css";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="homeBanner">
      <div className="contentetbanner">
        <div>
          <p id="stoppara">
            Stop overpaying for bloated data plans.Start smartphoning{" "}
            <span style={{ color: "rgb(80 244 12)" ,textDecoration:"underline"}}>Smarter.</span>{" "}
          </p>
        </div>
        <div>
          <div class="three-lines">
            <h1>SEE HOW MUCH</h1>
            <h1>YOU'D <span style={{color:"rgb(80 244 12)"}}>SAVE WITH</span> </h1>
            <h1 style={{color:"rgb(80 244 12)"}}>MOBILEX.</h1>
          </div>
        </div>
        <div>
          <div>
            <p id="chancepara">
              Chances are you have no idea how much data you’re  using, and
              you’re <br />probably paying too much for it.  Our Data Forecaster gives
              you a pretty <br /> good idea of how much you’d pay—and save—with
              MobileX.
            </p>
            <Button id="launchBtn">Launch Forecaster</Button>
          </div>
          <div></div>
        </div>
      </div>
      <div className="imgbanner mx-5" >
        <img 
          class="slide-up"
          src="https://www.mymobilex.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0ki11o8czqpd%2F2VoV3N5uay4kXdhaAOansR%2F99c8e431f45f67cbedb5280d527ec1af%2FMobileX_Data_Forecaster_Hero-v2.png&w=384&q=75"
          alt="" height={550}
        />
      </div>
    </div>
  );
}

export default Home;
