import React, { useEffect } from "react";
import {
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";


const apiKey = "fhadftta5n4v";
const userId = "679e5214e163890ef06ead3b";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjdhODE4ZTUyNWI0YzBlZmY2Y2U1NWE3IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6MzYwMCwiaWF0IjoxNzQ3NjYwMTA1LCJleHAiOjE3NDc2NjM3MDV9.J6a7eaYGkktaQIX4uC_yWEL5BwIsNbKzVUDh67gxYW"; 

const user = { id: userId };


const client = new StreamVideoClient({
  apiKey,
  user,
  token,
  options: {
    maxConnectUserRetries: 3,
    onConnectUserError: (err, allErrors) => {
      console.error("Failed to connect user", err, allErrors);
    },
  },
});

const call = client.call("audio_room", "call-1747660106086");
export default function MyApp() {
  useEffect(() => {
    const setupCall = async () => {
      try {
        await call.camera.disable(); 
        await call.join({ create: false });
      } catch (err) {
        console.error("Error setting up call:", err);
      }
    };
    setupCall();
  }, []);

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <SpeakerLayout />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  );
}
