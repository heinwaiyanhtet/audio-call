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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc5ZDdlMDI1Yzg5MDAyYjNhOTg4MDQ5IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6MzYwMCwiaWF0IjoxNzQzODcwMjYzLCJleHAiOjE3NDM4NzM4NjN9.DVyPuDUGzMD0yOQrpKb1x163FJ1m95kd_rXKRVtWokc";
const user = 
{ 
    id: userId
};

const client = new StreamVideoClient(
  { apiKey, user, token,
    options: {
      maxConnectUserRetries: 3,
      onConnectUserError: (err, allErrors) => {

        console.error("Failed to connect user", err, allErrors);
     
      },
    },    

   }
);
const call = client.call("audio_room", "my-first-call");
await call.camera.disable(); 
call.join(
    { create: true });

export default function MyApp  ()  {
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
};













