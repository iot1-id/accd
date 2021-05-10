import React from 'react'
import Dashboard from "../dashboard/Dashboard";
import Enroll from './Enrollment';

export default function Homepage() {
     const topNavOptions = ["check status", "get certificates"];
     const navigateTo = ["/userstatus", "/user"];
    return (
      <div style={{ overflowX: "hidden" }}>
        <Dashboard
          topNavOptions={topNavOptions}
          navigateTo={navigateTo}
          title="User Homepage"
        >
          <div>
            <Enroll />
          </div>
        </Dashboard>
      </div>
    );
}
