import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth ,db } from "../../components/firebase/Firebase";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "Direct Certification",
      "Certifiers Not Involved",
      "Only Recognition",
    ],
    buttonText: "Proceed",
    buttonVariant: "outlined",
  },
  {
    title: "Paid",
    subheader: "Most popular",
    price: "200",
    description: [
      "Get Recognition",
      "Reviewing by experts",
      "Valid to show anywhere",
    ],
    buttonText: "Proceed",
    buttonVariant: "contained",
  },
  {
    title: "Pro",
    price: "250",
    description: [
      "Detailed certification",
      "More coverage",

      "Priority Services",
    ],
    buttonText: "Proceed",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  const classes = useStyles();
  // const [paymentPlan, setPaymentPlan] = useState("");
const history = useHistory();
  const handleSubmit = (title) => {
    // console.log(title)
    db.collection("certifications").doc().set(
      { 
        user: auth.currentUser.uid,
        status: "pending approval from admin",
        paymentStatus: "unpaid",
        paymentPlan: title,
        paymentDate: firebase.firestore.FieldValue.serverTimestamp(),
        adminApprovalStatus: false,

      },
      { merge: true }
    );
    history.push("/status")
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          With Our multiple methods to choose from, get Certified now and get on
          your path to success.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  //   action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"

                    onClick={()=>{handleSubmit(tier.title)}}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* End footer */}
    </React.Fragment>
  );
}
