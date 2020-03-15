import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Slider from "@material-ui/core/Slider";
import { FormControl, FormLabel, RadioGroup, Radio } from "@material-ui/core";

const LinkComponent = props => {
  return <Link {...props} />;
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const cp = [
  {
    value: 0,
    label: "  No Pain"
  },
  {
    value: 1,
    label: "Typical Angina"
  },
  {
    value: 2,
    label: "Atypical Angina"
  },
  {
    value: 3,
    label: "Non-anginal Pain"
  },
  {
    value: 4,
    label: "Asymptomatic"
  }
];

const restecg = [
  {
    value: 0,
    label: "Normal"
  },
  {
    value: 1,
    label: "ST-T Wave"
  },
  {
    value: 2,
    label: "LVH"
  }
];

const thal = [
  {
    value: 0,
    label: "Normal"
  },
  {
    value: 1,
    label: "Fixed Defect"
  },
  {
    value: 2,
    label: "Reversible Defect"
  }
];

var state = {
  chol: "",
  fbs: "",
  cp: "",
  restecg: "",
  ca: "",
  thal: "",
  exang: "",
  slope: "",
  thalach: "",
  oldpeak: ""
};

export default function StandardB() {
  const classes = useStyles();
  const [sub, setSub] = useState(false);
  const [loadElement, setLoad] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("====================================");
    console.log(
      "Form Data to dump in your stupid stupid pickle file which will be done by Abhisht (hopefully)"
    );
    console.log(JSON.stringify(state));
    console.log("====================================");
    setSub(true);
  };

  useEffect(() => {
    if (sub == true) {
      setLoad(
        <Button
          component={Link}
          to="./result"
          color="primary"
          variant="contained"
        >
          Results
        </Button>
      );
    }
  }, [sub]);

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h4" className="mb-3">
          Standard B
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="chol"
                label="Cholesterol"
                name="chol"
                autoComplete="chol"
                onChange={e => {
                  state.chol = e.target.value;
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fbs"
                label="Fasting Blood Sugar"
                name="fbs"
                autoComplete="fbs"
                onChange={e => {
                  state.fbs = e.target.value;
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bp"
                label="Resting Blood Pressure"
                name="bp"
                autoComplete="bp"
              />
            </Grid>

            <Grid container justify="space-evenly">
              <Grid item xs={4}>
                <Typography id="discrete-slider-restrict" gutterBottom>
                  Chest Pain
                </Typography>
                <Slider
                  defaultValue={1}
                  //   valueLabelFormat={valueLabelFormat}
                  //   getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-restrict"
                  max={4}
                  step={null}
                  valueLabelDisplay="auto"
                  marks={cp}
                  onChange={(e, val) => {
                    state.cp = val;
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="discrete-slider-restrict" gutterBottom>
                  Resting ECG
                </Typography>
                <Slider
                  defaultValue={0}
                  //   valueLabelFormat={valueLabelFormat}
                  //   getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-restrict"
                  max={2}
                  step={null}
                  valueLabelDisplay="auto"
                  marks={restecg}
                  onChange={(e, val) => {
                    state.restecg = val;
                  }}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-evenly">
              <Grid item xs={4}>
                <br />
                <br />
                <Typography id="discrete-slider-restrict" gutterBottom>
                  Number of Major Vessels
                </Typography>
                <Slider
                  defaultValue={0}
                  //   valueLabelFormat={valueLabelFormat}
                  //   getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-restrict"
                  max={3}
                  step={1}
                  valueLabelDisplay="auto"
                  marks={true}
                  onChange={(e, val) => {
                    state.ca = val;
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <br />
                <br />
                <Typography id="discrete-slider-restrict" gutterBottom>
                  Thal
                </Typography>
                <Slider
                  defaultValue={0}
                  //   valueLabelFormat={valueLabelFormat}
                  //   getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-restrict"
                  max={2}
                  step={1}
                  valueLabelDisplay="auto"
                  marks={thal}
                  onChange={(e, val) => {
                    state.thal = val;
                  }}
                />
              </Grid>
            </Grid>

            <Grid container justify="space-evenly">
              <Grid item xs={6}>
                <Grid container direction="column">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Exercise Induced Angina
                    </FormLabel>
                    <RadioGroup
                      aria-label="exang"
                      name="radios"
                      onChange={e => {
                        state.exang = e.target.value;
                      }}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                  <br />
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Slope of Peak Exercise ST Segment
                    </FormLabel>
                    <RadioGroup
                      defaultValue="1"
                      aria-label="slope"
                      name="radios"
                      onChange={e => {
                        state.slope = e.target.value;
                      }}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Upsloping"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="Flat"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="Downsloping"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column">
                  <br />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="thalach"
                    label="Max Heart Rate"
                    name="thalach"
                    autoComplete="thalach"
                    onChange={e => {
                      state.thalach = e.target.value;
                    }}
                  />
                  <br />
                  <br />
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="oldpeak"
                    label="oldpeak"
                    name="oldpeak"
                    autoComplete="oldpeak"
                    onChange={e => {
                      state.oldpeak = e.target.value;
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="space-evenly">
              <Grid item>
                <Button
                  type="submit"
                  label="submit"
                  variant="contained"
                  color="primary"
                  disabled={sub}
                  // component={Link}
                  // to='/result'
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>{loadElement}</Grid>
            </Grid>
          </Grid>
        </form>
        <br />
        <br />
      </div>
    </Container>
  );
}
