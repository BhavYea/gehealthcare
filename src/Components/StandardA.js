import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { ButtonGroup } from "@material-ui/core";
import ReactLoading from "react-loading";

import { Link, Redirect } from "react-router-dom";

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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

var state = {
  bp: "",
  pr: "",
  fbs: "",
  cr: "",
  tg: "",
  edema: "",
  dep: "",
  cp: "",
  crf: "",
  cva: "",
  wbc: "",
  lymph: "",
  neut: "",
  plt: "",
  ad: "",
  th: "",
  chf: "",
  dlp: "",
  wpp: "",
  sm: "",
  dm: "",
  dysp: "",
  atypical: "",
  nonanginal: "",
  lowTHang: "",
  lvh: "",
  prp: "",
  bbb: "",
  vhd: ""
};

export default function StandardA() {
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
        {/* <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar> */}
        {/* <Typography component="h1" variant="h5">
          Standard A
        </Typography> */}
        <Typography variant="h4" className="mb-3">
          Standard A
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} justify="space-around">
            {/* // ! Blood Form */}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Blood Pressure"
                name="Blood Pressure"
                variant="outlined"
                required
                fullWidth
                id="bp"
                label="Blood Pressure"
                autoFocus
                onChange={e => (state.bp = e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pr"
                label="PR"
                name="pr"
                autoComplete="pr"
                onChange={e => (state.pr = e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fbs"
                label="FBS"
                name="FBS"
                autoComplete="fbs"
                onChange={e => (state.fbs = e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cr"
                label="CR"
                name="cr"
                autoComplete="cr"
                onChange={e => (state.cr = e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tg"
                label="TG"
                name="tg"
                autoComplete="tg"
                onChange={e => (state.tg = e.target.value)}
              />
            </Grid>

            <Grid item xs={1} />
            {/* // ! Edema Form */}
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Edema</FormLabel>
                <RadioGroup
                  aria-label="Edema"
                  name="radios"
                  onChange={e => (state.edema = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! Depression Form */}
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Depression</FormLabel>
                <RadioGroup
                  aria-label="dep"
                  name="radios"
                  onChange={e => (state.dep = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! Chest Pain Form */}
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Chest Pain</FormLabel>
                <RadioGroup
                  defaultValue="Yes"
                  aria-label="Chest Pain"
                  name="radios"
                  onChange={e => (state.cp = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! CRF Form */}
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">CRF</FormLabel>
                <RadioGroup
                  defaultValue="Yes"
                  aria-label="Chest Pain"
                  name="radios"
                  onChange={e => (state.crf = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! CVA Form */}
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">CVA</FormLabel>
                <RadioGroup
                  defaultValue="Yes"
                  aria-label="Chest Pain"
                  name="radios"
                  onChange={e => (state.cva = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={1} />

            {/* // ! Blood cells Form */}
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="wbc"
                label="WBC"
                name="WBC"
                autoComplete="wbc"
                onChange={e => (state.wbc = e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lymph"
                label="Lymph"
                name="Lymph"
                autoComplete="lymph"
                onChange={e => (state.lymph = e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Neut"
                label="Neut"
                name="Neut"
                autoComplete="Neut"
                onChange={e => (state.neut = e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="plt"
                label="PLT"
                name="PLT"
                autoComplete="plt"
                onChange={e => (state.plt = e.target.value)}
              />
            </Grid>

            {[
              ["Airway disease", state.ad],
              ["Thyroid Disease", state.th],
              ["CHF", state.chf],
              ["DLP", state.dlp],
              ["Weak Peripheral Pulse", state.wpp],
              ["Systolic Murmur", state.sm],
              ["Diastolic Murmur", state.dm],
              ["Dyspnea", state.dysp],
              ["Atypical", state.atypical],
              ["Nonanginal", state.nonanginal],
              ["LowTH Ang", state.lowTHang],
              ["LVH", state.lvh]
            ].map((p, i) => (
              <Grid item xs={4} key={p}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">{p}</FormLabel>
                  <RadioGroup
                    defaultValue="Yes"
                    aria-label="Chest Pain"
                    name="radios"
                    // onChange={e => (p[1] = e.target.value)}
                    onChange={e => console.log(state[i])}
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
                <br />
              </Grid>
            ))}

            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Poor R Progression</FormLabel>
                <RadioGroup
                  defaultValue="Yes"
                  aria-label="Chest Pain"
                  name="radios"
                  onChange={e => (state.prp = e.target.value)}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend">BBB</FormLabel>
                <RadioGroup
                  aria-label="bbb"
                  name="radios"
                  onChange={e => (state.bbb = e.target.value)}
                >
                  <FormControlLabel
                    value="LBBB"
                    control={<Radio />}
                    label="LBBB"
                  />
                  <FormControlLabel
                    value="RBBB"
                    control={<Radio />}
                    label="RBBB"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend">VHD</FormLabel>
                <RadioGroup
                  defaultValue="Yes"
                  aria-label="VHD"
                  name="radios"
                  onChange={e => (state.vhd = e.target.value)}
                >
                  <FormControlLabel
                    value="Severe"
                    control={<Radio />}
                    label="Severe"
                  />
                  <FormControlLabel
                    value="Moderate"
                    control={<Radio />}
                    label="Moderate"
                  />
                  <FormControlLabel
                    value="Mild"
                    control={<Radio />}
                    label="Mild"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
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

            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button> */}
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
    </Container>
  );
}
