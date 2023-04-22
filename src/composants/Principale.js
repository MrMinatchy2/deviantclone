import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Principale() {
  const classes = useStyles();
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState("initial");
  const [state3, setState3] = useState(0);

  const handleClick1 = () => {
    setState1(!state1);
  };

  const handleClick2 = () => {
    setState2(state2 === "initial" ? "clicked" : "initial");
  };

  const handleClick3 = () => {
    setState3(state3 + 1);
  };

  return (
    <Container sx={{backgroundColor: ""}}>
      <Container sx={{}}>

      </Container>

      <Container sx={{}}>
        
      </Container>

      <Container sx={{}}>
        
      </Container>
    </Container>
  );
}

export default Principale;
