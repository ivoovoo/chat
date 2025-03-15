import React from "react";
import Top from "./Top";

import "./Welcome.css";
import Box from "./Box";

const Welcome = () => {
  return (
    <div className="welcome">
      <Top />

      <div className="welcome__content">
        <Box icon={"sparkles"} title="Examples" to={"link"}>
          Explain quantum computing in simple terms →
        </Box>
        <Box icon={"star"} title="Capabilities">
          Remembers what user said earlier in the conversation
        </Box>
        <Box icon={"exclamation"} title="Limitations">
          May occasionally generate incorrect information
        </Box>
        <Box to={"link"}>
          Got any creative ideas for a 10 year old’s birthday? →
        </Box>
        <Box>Allows user to provide follow-up corrections</Box>
        <Box>May occasionally produce harmful instructions or biased</Box>
        <Box to={"link"}>
        How do I make an HTTP request in Javascript? →
        </Box>
        <Box>Trained to decline inappropriate requests</Box>
        <Box>Limited knowledge of world and events after 2021</Box>
      </div>
    </div>
  );
};

export default Welcome;
