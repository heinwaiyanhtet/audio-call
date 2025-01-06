import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"

export const MyLiveButton = () => {
    const call = useCall();
    const {useIsCallLive} = useCallStateHooks();
    const isLive = useIsCallLive()
  return (
    <button className={`live-button ${isLive ? 'live' : ''}`} onClick={async () => {
        if(isLive) {
            await call?.stopLive();
        } else {
            await call?.goLive();
        }
    } } >
        {isLive ? 'Stop Live' : 'Go Live'}
    </button>
  )
}

