import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Card, Alert } from "react-bootstrap";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { db, auth } from "../../../components/firebase/Firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //   const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [value, setValue] = React.useState("recipient");
  const classes = useStyles();
  //    const [value, setValue] = React.useState("recipient");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(firstNameRef.current);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((result) => {
          console.log(result.user.uid);
          db.collection("users")
            .doc(result.user.uid)
            .set({
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              uid: result.user.uid,
              displayName:
                firstNameRef.current.value + " " + lastNameRef.current.value,
              type: value,
            });
        });

      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  console.log(emailRef)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                ref={firstNameRef}
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
                ref={lastNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                ref={emailRef}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                ref={passwordRef}
                type="password"
                id="password"
                // autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ConfirmPassword"
                label="Confirm Password"
                ref={passwordConfirmRef}
                type="password"
                id="ConfirmPassword"
                // autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} justify="center">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="recipient"
                  control={<Radio />}
                  label="Register as Recipient"
                />
                <FormControlLabel
                  value="certifier"
                  control={<Radio />}
                  label="Register as Certifier"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Form>
        <Grid container justify="center">
          <Grid item>
            Already have an account? <Link to="/login">Log In</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
