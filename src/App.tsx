import { StreamCall, StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NhcHRhaW5fUmV4IiwidXNlcl9pZCI6IkNhcHRhaW5fUmV4IiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3NDMwODcwNDIsImV4cCI6MTc0MzY5MTg0Mn0.cN0digMf_-Dyqb0amMbA7Xz2iuUAXsXi8oA6VJNtm9Q';
const userId = 'Captain_Rex';
const callId = '47TKFoL07tnR';
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
    members: [{ user_id: 'john_smith' }, { user_id: 'jane_doe' }],
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