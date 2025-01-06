import { StreamCall, StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0x1a2VfU2t5d2Fsa2VyIiwidXNlcl9pZCI6Ikx1a2VfU2t5d2Fsa2VyIiwidmFsaWRpdHlfaW5fc2Vjb25kcyI6NjA0ODAwLCJpYXQiOjE3MzYxNTc4OTIsImV4cCI6MTczNjc2MjY5Mn0.gO4k6amSS53lBVL7TkP70uynqqAJScisuNTNx7I8ePY';
const userId = 'Luke_Skywalker';
const callId = 'pRu3P4YnSJT7';
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