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
const userId = "67a818e525b4c0eff6ce55a7";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjdhODE4ZTUyNWI0YzBlZmY2Y2U1NWE3IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6MzYwMCwiaWF0IjoxNzQ3NjYwNjQ5LCJleHAiOjE3NDc2NjQyNDl9.0IBdZYWwCJxwS9EGZLH1kVgO2Z2gUdQn4mY92-JAJLs"; 

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

const call = client.call("audio_room", "call-1747660650622");
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
