import React, { useState } from "react";

const About = () => {
  // usestate is used to setMystyle Dark mode to Light Mode, it acts as a function, mystyle is acts as variable
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  //button usestate is used to change the text of the buttom while we toggle between dark mode and lighgt mode

  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText("Disable Dark Mode");
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>

      {/* onclick of below button togglestyle funtion will be called in that check the given conditions and toggles between dark mode and light mode. btntext is a variable in the form of text which is used to show to or indicate to toggle between view modes  */}
      <button className="btn-outerline btn-primary my-3" onClick={toggleStyle}>
        {btntext}
      </button>
      <div className="container"></div>
    </div>
  );
};

export default About;
