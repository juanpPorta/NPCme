import Webcam from "react-webcam";
import '../styles/components/Videos.scss';

function WebcamLogics(props) {
    return(<main className="videos">
        <Webcam className="webcam" width={600} height={720} videoConstraints={props.videoConstraints} /><Webcam className="webcam"  width={600} height={720} videoConstraints={props.videoConstraints}/>
    </main>);
}

export default WebcamLogics;