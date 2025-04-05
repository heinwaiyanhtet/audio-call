import { StreamCall, StreamVideo, StreamVideoClient} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NoZXdiYWNjYSIsInVzZXJfaWQiOiJDaGV3YmFjY2EiLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTc0Mzg2NjAzMCwiZXhwIjoxNzQ0NDcwODMwfQ.nTn-utnU66M8cSAM_hNfOFIyuo-mGLl8rLjQ3LrDtjM';
const userId = 'Chewbacca';
const callId = 'Hno81lPnObro';
// initialize the user object
const user = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });

const call = client.call('audio_room', callId);
call.join({
  create: true,
  members: [{ user_id: 'john_smith' }, { user_id: 'jane_doe' }],
  member_permissions: ['send_audio', 'send_video'],
  data: {
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
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
};