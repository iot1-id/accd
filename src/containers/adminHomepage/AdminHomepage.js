import React from 'react'
import Dashboard from "../dashboard/Dashboard";
import NewRequests from './NewRequests';

export default function AdminHomepage() {
    const topNavOptions = ["users", "certifiers"];
    const navigateTo = ["/users", "/certifiers"];
    return (
      <div>
        <Dashboard
          topNavOptions={topNavOptions}
          navigateTo={navigateTo}
          title="Admin Homepage"
        >
         <NewRequests/>
        </Dashboard>
      </div>
    );
}
