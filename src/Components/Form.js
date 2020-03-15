import React from "react";
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

import { Link } from "react-router-dom";

// const LinkComponent = props => {
//   return <Link {...props} />;
// };

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

export default function SignUp() {
  const classes = useStyles();
  // const [sex, setValue] = React.useState("female");

  var state = {
    first_name: "",
    last_name: "",
    age: "",
    sex: "",
    smoking_habits: "",
    obesity: "",
    weight: "",
    height: ""
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("====================================");
    console.log(
      "Form Data to dump in your stupid stupid pickle file which will be done by Abhisht (hopefully)"
    );
    console.log(JSON.stringify(state));
    console.log("====================================");
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          CAD Detection Program
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e => {
                  state.first_name = e.target.value;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => {
                  state.last_name = e.target.value;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={e => {
                  state.age = e.target.value;
                }}
              />
            </Grid>
            {/* // ! Sex Form */}
            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup
                  // defaultValue="female"
                  aria-label="gender"
                  name="radios"
                  // value={sex}
                  onChange={e => {
                    state.sex = e.target.value;
                  }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! Smoking Form */}
            <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Smoking Habits</FormLabel>
                <RadioGroup
                  // defaultValue="current_smoker"
                  aria-label="smoker"
                  name="radios"
                  onChange={e => {
                    state.smoking_habits = e.target.value;
                  }}
                >
                  <FormControlLabel
                    value="current_smoker"
                    control={<Radio />}
                    label="I currently smoke"
                  />
                  <FormControlLabel
                    value="ex_smoker"
                    control={<Radio />}
                    label="I am an ex-smoker"
                  />
                  <FormControlLabel
                    value="not_smoker"
                    control={<Radio />}
                    label="I don't smoke"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* // ! Obseity Form */}
            <Grid item xs={3}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Obesity</FormLabel>
                <RadioGroup
                  // defaultValue="Yes"
                  aria-label="obesity"
                  name="radios"
                  onChange={e => {
                    state.obesity = e.target.value;
                  }}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                  <FormControlLabel value="N" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="weight"
                name="weight"
                variant="outlined"
                required
                fullWidth
                id="weight"
                label="Weight"
                autoFocus
                onChange={e => {
                  state.weight = e.target.value;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="height"
                name="height"
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                autoFocus
                onChange={e => {
                  state.height = e.target.value;
                }}
              />
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
            <Grid container justify="center">
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                <Button component={Link} to="/standarda">
                  Standard A
                </Button>
                <Button component={Link} to="/standardb">
                  Standard B
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              label="Submit"
              size="small"
            >
              Dummy Submit button
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
