import React, { useState, useEffect } from "react";
import classes from "./home.module.css";
import { Card } from "react-bootstrap";

import firebase from "firebase";
import { db } from "../../components/firebase/Firebase";

export default function CertStatus() {
  const [status, setStatus] = useState("");
  useEffect(() => {
    db.collection("certifications")
      .doc()
      .get()
      .then((result) => {
        console.log(result);
        setStatus("");
      });
  }, []);

  return (
    <div>
      <Card className={classes.items}>
        <Card.Header>
          <h3 className="text-center mb-4">Status</h3>
        </Card.Header>
        <Card.Body>
          <h4>{status}</h4>
        </Card.Body>
      </Card>
    </div>
  );
}
