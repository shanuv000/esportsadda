import React, { useEffect } from "react";
import firebase from "./firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const FirebaseOtp = () => {
  //   const [phone, setPhone] = useState([]);
  const getUrl = false;
  const urlSwitch = getUrl
    ? "http://localhost:3000/"
    : "https://www.gurucool.tech";
  // const autho = () => {
    // const items = [];
    const uiConfig = {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: "image",
            size: "normal",
            badge: "bottomleft",
          },
          defaultCountry: "IN",
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // alert("successful");
          return true;
        },
      },
      signInFlow: "popup",
      signInSuccessUrl: {urlSwitch},
    };

    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start("#firebaseui-auth-container", uiConfig);
    // setPhone(items);
  useEffect(() => {
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
    return () => {
      ui.delete();
    };
  }, []);


  return (
    <>
      <div id="firebaseui-auth-container"></div>
    </>
  );
};
export default FirebaseOtp;
//
// Class Based
//
// class FirebaseOtp extends Component {
//   componentDidMount() {
//     const uiConfig = {
//       signInOptions: [
//         {
//           provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//           recaptchaParameters: {
//             type: "image",
//             size: "normal",
//             badge: "bottomleft",
//           },
//           defaultCountry: "IN",
//         },
//       ],
//       callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//           alert("successful");
//           return true;
//         },
//       },
//       signInSuccessUrl: "https://youtube.com",
//     };
//
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     ui.start("#firebaseui-auth-container", uiConfig);
//   }
//   render() {
//     return <div id="firebaseui-auth-container"></div>;
//   }
// }
//
// export default FirebaseOtp;
