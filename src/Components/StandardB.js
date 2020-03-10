import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Slider from "@material-ui/core/Slider";
import { FormControl, FormLabel, RadioGroup, Radio } from "@material-ui/core";

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

export default function StandardB() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h2" class="mb-3">
          Standard B
        </Typography>
        <form className={classes.form} noValidate>
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
                      defaultValue="Y"
                      aria-label="exang"
                      name="radios"
                    >
                      <FormControlLabel
                        value="Y"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="N"
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
                      aria-label="exang"
                      name="radios"
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
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Grid>
        </form>
        <br />
        <br />
      </div>
    </Container>
  );
}
