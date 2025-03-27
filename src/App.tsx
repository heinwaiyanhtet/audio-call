import { StreamCall, StreamVideo, StreamVideoClient, User } from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0x1bWluYXJhX1VuZHVsaSIsInVzZXJfaWQiOiJMdW1pbmFyYV9VbmR1bGkiLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTc0MzAwNjI0OSwiZXhwIjoxNzQzNjExMDQ5fQ.-R32BlSjJxZs0iZmbjgR411cuMQMvufcjpS6kOKBfnE';
const userId = 'Luminara_Unduli';
const callId = 'eLmvVULpSnlc';
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