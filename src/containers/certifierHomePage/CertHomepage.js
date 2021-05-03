import React from 'react'
import Dashboard from "../dashboard/Dashboard";


export default function CertHomepage() {
    const topNavOptions = ["check status", "projects"];
    const navigateTo = ["/status", "/projects"];
    return (
      <div>
        <Dashboard
          topNavOptions={topNavOptions}
          navigateTo={navigateTo}
          title="Certifier Homepage"
        >
          landing page
        </Dashboard>
      </div>
    );
}
