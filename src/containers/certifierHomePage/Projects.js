import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Row, Col, Modal, ModalBody } from "reactstrap";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { auth, db } from "../../components/firebase/Firebase";

// import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Projects() {
  // const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [status, setStatus] = useState("Inactive");
  const [id, setId] = useState("");
  const [groupName, setGroupName] = useState("");

  // const smsRef = db.collection("sms-groups");
  var time = new Date().getMonth();
 
  const changeName = (id) => {
    console.log(id);
    try {
      console.log(id);
      db.collection("sms-groups").doc(id).set(
        {
          groupName: groupName,
        },
        { merge: true }
      );
    } catch (e) {
      console.error(e);
    }
    setToggle(false);
  };

  useEffect(() => {
    db.collection("certifications").onSnapshot((querySnapshot) => {
      const isCollectionEmpty = querySnapshot.docs.length === 0;
      if (!isCollectionEmpty) {
        const List = querySnapshot.docs.map((doc) => {
         
          return doc.data();
        });

        // console.log(List);
        setList([...List]);
      }
    });
  }, []);

  // console.log(smsList);

  const classes = useStyles();
  return (
    <div>
      
      <Card className="items">
        <Card.Header>
          <h3 className="text-center mb-4">Projects</h3>
        </Card.Header>
        <Card.Body>
          <div className={classes.root}>
          
            {list.map((data, i) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Group: {i + 1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div class="table">
                    <div class="table-content">
                      <div class="table-row">
                        <div class="table-title">Group Name</div>
                        <div class="table-data">
                          {/* {data.groupName ? data.groupName : i + 1} */}
                          {/* {console.log(data.refId)} */}

                          {/* <IconButton onClick={() => setToggle(true)}>
                            <Edit fontSize="small" />
                          </IconButton> */}
                          {/* <SimpleModal /> */}
                          {/* { toggle &&<SimpleModal/> } */}
                          <Row>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder={data.groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                style={{ maxWidth: "80%" }}
                              />
                              {/* {bid} */}
                            </Col>
                            <Col>
                              <button
                                className="btn-grad3"
                                onClick={() => changeName(data.refId)}
                                // {{data.Bid > bid ? onClick={bidding} : onClick={ setError("Cannot bid higher than the current bid") }}}
                              >
                                Change
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      {/* <div class="table-row">
                        <div class="table-title">Status</div>
                        <div class="table-data">
                          {data.status} */}
                      {/* {membersList[i] === 50 ? "Active" : "Inactive"} */}
                      {/* </div>
                      </div> */}
                      {data.status === "Active" ? (
                        <div class="table-row">
                          <div class="table-title">Group Started:</div>
                          <div class="table-data">
                           
                          </div>
                        </div>
                      ) : (
                        <div class="table-row">
                          <div class="table-title">Status:</div>
                          <div class="table-data">Inactive</div>
                        </div>
                      )}
                      <div class="table-row">
                        <div class="table-title">Members</div>
                        <div class="table-data">{membersList[i]}</div>
                      </div>
                      <div class="table-row">
                        <div class="table-title">Referral Id:</div>
                        <div class="table-data">{data.refId}</div>
                      </div>
                      <div class="table-row">
                        <div class="table-title">Interval</div>
                        <div class="table-data">{data.interval}</div>
                      </div>
                      <div class="table-row">
                        <div class="table-title">Amount</div>
                        <div class="table-data">{data.amount}</div>
                      </div>
                      <div class="table-row">
                        <div class="table-title">Total Period</div>
                        <div class="table-data">{data.duration}</div>
                      </div>
                      {/* {if (data.type==="bidding"){

                      }} */}
                      <div class="table-row">
                        <div class="table-title">Type</div>
                        <div class="table-data">{data.type}</div>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
