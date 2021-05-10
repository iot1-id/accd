import React, {useState}from "react";
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
import { auth, db } from "../../components/firebase/Firebase";
import DateFnsUtils from "@date-io/date-fns";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, useHistory } from "react-router-dom";
import classes from  "./home.module.css";
// import bg from "../../assets/"

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
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

export default function Enroll() {
  const classes = useStyles();
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  const [projectName, setProjectName] = useState("");
  const [link, setLink] = useState("")
  const history = useHistory(); 

  const [domain, setDomain] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleDateChange1 = (date) => {
    setSelectedEndDate(date);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adawdhahwjd")
    if (auth){
        db.collection("users").doc(auth.currentUser.uid).set(
          {
            projectName: projectName,
            domain: domain,
            projectStartDate: selectedStartDate,
            projectEndDate: selectedEndDate,
            articleLink: link,
            paymentStatus: "none"
          },
          { merge: true }
        ).then(history.push("/pricing"))
    }   
    else{
        alert("Not authorized")
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
                label="Project Name"
                autoFocus
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </Grid>
            <Grid container justify="space-around" style={{ marginTop: "3%" }}>
              <Select
                value={domain}
                  onChange={(e)=>{setDomain(e.target.value)}}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Select Your field of work
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Project Start Date"
                  value={selectedStartDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Project End Date"
                  value={selectedEndDate}
                  onChange={handleDateChange1}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Article Link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Apply For certification
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
