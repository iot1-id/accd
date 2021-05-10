import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { auth, db, storage } from "../../components/firebase/Firebase";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";
import classes from "./home.module.css";

// import bg from "../../assets/"

// import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.pexels.com/photos/7598248/pexels-photo-7598248.jpeg?cs=srgb&dl=pexels-eva-elijas-7598248.jpg&fm=jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VerificationPage() {
  const classes = useStyles();

  const [projectName, setProjectName] = useState("");
  const [link, setLink] = useState("");
  const history = useHistory();
  const domain = [];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "application/pdf"];

  const setfile = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a Valid document format");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      storage
        .ref("certDocs/")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          if (auth) {
            db.collection("users")
              .doc(auth.currentUser.uid)
              .set(
                {
                  domain: domain,
                  docUrl: url,
                },
                { merge: true }
              )
              .then(history.push("/certstatus"));
          } else {
            alert("Not authorized");
          }
        });
    }
  };

  //   console.log(auth);
  return (
    <Grid
      container
      component="main"
      className={classes.root}
      style={{
        marginLeft: "5%",
        marginTop: "2%",
        maxHeight: "85vh",
        overflowX: "hidden",
      }}
    >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            backgroundColor: "white",
            justifyContent: "center",
            height: "10vh",
          }}
        >
          <h1>hello</h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            // border: "1px solid black",
            // backgroundColor: "white",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <h3>Description</h3>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.btngrad}
            style={{ marginBottom: "13%", justifyContent: "flex-start" }}
          >
            Application Form
          </Typography>
          <form className={classes.form} required>
            <Grid container>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Domain 1"
                autoFocus
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </Grid>

            <Button variant="contained" component="label">
              Upload docs supporting domain
              <input type="file" onChange={setfile} hidden />
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Submit For Verification
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
