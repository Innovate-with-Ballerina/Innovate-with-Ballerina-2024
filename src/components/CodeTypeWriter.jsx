import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const CodeTypewriter = () => {
  const code = `
    import ballerina/http;
    import ballerinax/googleapis.sheets;

    configurable string githubPAT = ?;
    configurable string repository = "ballerina-platform/ballerina-lang";
    configurable string sheetsAccessToken = ?;
    configurable string spreadSheetId = ?;
    configurable string sheetName = "pull-requests";

    type PR record {
        string url;
        string title;
        string state;
        string created_at;
        string updated_at;
    }`;

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      <Typewriter
        words={[code]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default CodeTypewriter;