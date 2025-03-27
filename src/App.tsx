import { StreamCall, StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0FuYWtpbl9Tb2xvIiwidXNlcl9pZCI6IkFuYWtpbl9Tb2xvIiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3NDMwODg4NTYsImV4cCI6MTc0MzY5MzY1Nn0.m3fOYXOmPnnxPp3l9-dOD-scl0fpFGfmnzRx7W5yb9Y';
const userId = 'Anakin_Solo';
const callId = '6zClVdBwcjIV';
// initialize the user object
const user: User = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};


const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('audio_room', callId);
call.join({
  create: true,
  data: {
    members: [
      // { user_id: 'john_smith' }, { user_id: 'jane_doe' }
    ],
    custom: {
      title: 'React Rooms',
      description: 'Talking about React',
    },
  },
});

export default function App() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout/>       
      </StreamCall>
    </StreamVideo>
  );
};