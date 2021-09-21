import { Button } from "@material-ui/core";
import React from "react";
import "../css/Style.css";

const Orientation = () => {
  return (
    <div className="style-container container" style={{ flex: 1 }}>
      <h1>
        Mobil Uygulamamızı aşağıdaki butona tıklayarak indirebilirsiniz...
      </h1>
      <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40sanamuze/dijidom-mobil-app-1bc6709df45a48649e3f4b59f2754827-signed.apk" target="_blank">
        <Button
          style={{ margin: "5%", width: "150px", backgroundColor: "#F00909", color: "white" }}
        >
          {" "}
          ANDROID{" "}
        </Button>
      </a>
    </div>
  );
};

export default Orientation;