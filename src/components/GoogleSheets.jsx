import { useState, useEffect } from "react";

const GoogleSheets = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLUPLnCISEbneLcAABbqoVLmZerL9YwoAMNVYoAVIMSPrtRE8nHWJR251vhUC3frq0S2oWgsy1TagX/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers="
          width="100%"
          height="600px"
          frameBorder="0"
          title="Google Sheets"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleSheets;
