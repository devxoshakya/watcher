import React from "react";
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
// Import the SCSS file
import "./Room.css";



function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}


const RoomPage = () => {
    const {roomId} = useParams();
    const redirectToExternalWebsite = (e) => {
        // Replace the URL below with the external website URL you want to redirect to
        const externalURL = 'https://devxoshakya.github.io/anveshna';
        window.open(externalURL, '_blank');
      };
    const myMeeting = async (element) => {
        const appID = 1624864632;
        const serverSecret = "dd8fad876b16abe1e51d86b94e6ff3f4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,'8363984', randomID(5),randomID(5));
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Personal link',
                url: window.location.protocol + '//' + window.location.host + window.location.pathname +'?roomID='+roomId,
            },],
            scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
            },
    });
    };

    return (
        <div className="room" >
            <img src="../../../images/watcher-logo-main.png" alt="room" onClick={redirectToExternalWebsite}/>
            <div className="zego" ref={myMeeting}/>
        </div>
    );
}

export default RoomPage;