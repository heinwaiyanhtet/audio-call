import { StreamCall, StreamVideo, StreamVideoClient} from '@stream-io/video-react-sdk';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import { MyUILayout } from './components/MyUILayout';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0dlbmVyYWxfR3JpZXZvdXMiLCJ1c2VyX2lkIjoiR2VuZXJhbF9Hcmlldm91cyIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQzNDM4NDM5LCJleHAiOjE3NDQwNDMyMzl9.pQP6_1Bu39esGSWfF1aO5te0Gcc4Mqm1svmeixvoNdc';
const userId = 'General_Grievous';
const callId = 'D7UlHG2F7CcE';
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
  data: {
    // members: [ { user_id: 'john_smith' }, { user_id: 'jane_doe' } ],
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
        {/** We will introduce the <MyUILayout /> component later */}
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
};