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
const userId = "679d7e025c89002b3a988049";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc5ZDdlMDI1Yzg5MDAyYjNhOTg4MDQ5IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6MzYwMCwiaWF0IjoxNzQzODcyNjY0LCJleHAiOjE3NDM4NzYyNjR9.lPYBMIxwURWWWLoqvTfyLaQ4ypkXMOwBplTxWqPk8j0"; 

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

const call = client.call("audio_room", "call-174387266531");

export default function MyApp() {
  useEffect(() => {
    const setupCall = async () => {
      try {
        await call.camera.disable(); // Disable camera before joining
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
