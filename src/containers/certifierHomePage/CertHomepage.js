import React from 'react'
import Dashboard from "../dashboard/Dashboard";
import VerificationPage from "./VerificationPage";


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
          <VerificationPage />
        </Dashboard>
      </div>
    );
}
