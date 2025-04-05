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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc5ZDdlMDI1Yzg5MDAyYjNhOTg4MDQ5IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6MzYwMCwiaWF0IjoxNzQzODY4MTM4LCJleHAiOjE3NDM4NzE3Mzh9.DBUDEiW1mKDjDDCikxyyfRpQB8_4R3r_xP36iQ9hTyw";
const user = { id: userId };

const client = new StreamVideoClient(
  { apiKey, user, token,
    options: {
      maxConnectUserRetries: 3,
      onConnectUserError: (err, allErrors) => {
        console.error("Failed to connect user", err, allErrors);
        // handle the connect error, i.e. ask the user to retry
        // later when they have better connection or show an error message
      },
    },    



   }
);
const call = client.call("default", "my-first-call");
call.join({ create: true });

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














// import { MyUILayout } from './components/MyUILayout';

// const apiKey = 'mmhfdzb5evj2';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NoZXdiYWNjYSIsInVzZXJfaWQiOiJDaGV3YmFjY2EiLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTc0Mzg2NjAzMCwiZXhwIjoxNzQ0NDcwODMwfQ.nTn-utnU66M8cSAM_hNfOFIyuo-mGLl8rLjQ3LrDtjM';
// const userId = 'Chewbacca';
// const callId = 'Hno81lPnObro';
// // initialize the user object
// const user = {
//   id: userId,
//   name: 'Oliver',
//   image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
// };

// const client = new StreamVideoClient({ apiKey, user, token });

// const call = client.call('audio_room', callId);
// call.join({
//   create: true,
//   members: [{ user_id: 'john_smith' }, { user_id: 'jane_doe' }],
//   member_permissions: ['send_audio', 'send_video'],
//   data: {
//     custom: {
//       title: 'React Rooms',
//       description: 'Talking about React',
//     },
//   },
// });

// export default function App() {
//   return (
//     <StreamVideo client={client}>
//       <StreamCall call={call}>
//         <MyUILayout />
//       </StreamCall>
//     </StreamVideo>
//   );
// };