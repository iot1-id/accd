import React from 'react'
import Dashboard from "../dashboard/Dashboard";

export default function Homepage() {
     const topNavOptions = ["check status", "get certificates"];
     const navigateTo = ["/userstatus", "/certificates"];
    return (
      <div>
        <Dashboard
          topNavOptions={topNavOptions}
          navigateTo={navigateTo}
          title="User Homepage"
        >
          landing page
        </Dashboard>
      </div>
    );
}
