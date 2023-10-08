import "../../styles/components/InfoSectionNPCPage.scss";
import profilePic from "../../images/Profile_pic.jpg";
import { useState, useEffect } from "react";

function InfoSectionNPCUser(props) {

//States
const [signAction, setSignAction] = useState("");

//Effect
useEffect(() => {
    props.change({action: signAction});
  }, [signAction]);

//Functions
function onSign(ev) {
    const action = ev.target.id;
    
    if (action == "accept") {
        setSignAction("accepted");
      } else if (action == "decline") {
        setSignAction("declined");
      } 
}


if (signAction == "declined") {
    return (
        <section>
            <div className="infoSection">
                <article className="infoSection_prof--wrapper">
                    <div className="infoSection_prof">
                        <div className="infoSection_prof_img--wrapper"><img className="infoSection_prof_img" src={profilePic}/></div>
                        <h1 className="infoSection_prof_name">John Lawy</h1>
                    </div>
                    <div className="infoSection_prof_info">
                        <p className="infoSection_prof_text">
                            <span className="bold">Hi everyone!</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="infoSection_prof_text">
                            <span className="bold">Know me</span>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </article>
                <article>
                </article>
            </div>
            <article className="infoSection_videos">
            </article>
            <article className="infoSection_topics">
                <div>
                    <div>
                        <img />
                    </div>
                </div>
            </article>
        </section>
    );
}
else if (signAction == "accepted") {
    return (
        <section>
            <div className="infoSection">
                <article className="infoSection_prof--wrapper">
                    <div className="infoSection_prof">
                        <div className="infoSection_prof_img--wrapper"><img className="infoSection_prof_img" src={profilePic}/></div>
                        <h1 className="infoSection_prof_name">John Lawy</h1>
                    </div>
                    <div className="infoSection_prof_info">
                        <p className="infoSection_prof_text">
                            <span className="bold">Hi everyone!</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="infoSection_prof_text">
                            <span className="bold">Know me</span>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </article>
                <article>
                    <div className="infoSection_messages_box">
                        <h2 className="infoSection_messages_title">Request accepted!</h2>
                        <h2 className="infoSection_messages_title">Lily Emmet will be notified to join the stream.</h2>
                        <h2 className="infoSection_messages_info">Take your time to get ready before starting</h2>
                        <h2 className="infoSection_messages_info">Remember your stream data:</h2>
                        <h2 className="infoSection_messages_info">Price: {props.requestInfo.payment ? props.requestInfo.payment : ""}</h2>
                        <h2 className="infoSection_messages_info">Experience: {props.requestInfo.experience}</h2>
                        <button type="button" className="infoSection_form--button" onClick={onSign}>Start Stream</button>
                    </div>
                </article>
            </div>
            <article className="infoSection_videos">
            </article>
            <article className="infoSection_topics">
                <div>
                    <div>
                        <img />
                    </div>
                </div>
            </article>
        </section>
      );
} 
else if (props.requestReceived == false) {
    return (
        <section>
            <div className="infoSection">
                <article className="infoSection_prof--wrapper">
                    <div className="infoSection_prof">
                        <div className="infoSection_prof_img--wrapper"><img className="infoSection_prof_img" src={profilePic}/></div>
                        <h1 className="infoSection_prof_name">John Lawy</h1>
                    </div>
                    <div className="infoSection_prof_info">
                        <p className="infoSection_prof_text">
                            <span className="bold">Hi everyone!</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="infoSection_prof_text">
                            <span className="bold">Know me</span>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </article>
                <article>
                </article>
            </div>
            <article className="infoSection_videos">
            </article>
            <article className="infoSection_topics">
                <div>
                    <div>
                        <img />
                    </div>
                </div>
            </article>
        </section>
      );
} else if (props.requestReceived == true) {
    return (
        <section>
            <div className="infoSection">
                <article className="infoSection_prof--wrapper">
                    <div className="infoSection_prof">
                        <div className="infoSection_prof_img--wrapper"><img className="infoSection_prof_img" src={profilePic}/></div>
                        <h1 className="infoSection_prof_name">John Lawy</h1>
                    </div>
                    <div className="infoSection_prof_info">
                        <p className="infoSection_prof_text">
                            <span className="bold">Hi everyone!</span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="infoSection_prof_text">
                            <span className="bold">Know me</span>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </article>
                <article>
                    <div className="infoSection_messages_box">
                        <h2 className="infoSection_messages_title">New request</h2>
                        <h2 className="infoSection_messages_info">Time: {props.requestInfo.time}</h2>
                        <h2 className="infoSection_messages_info">Price: {props.requestInfo.payment ? props.requestInfo.payment : ""}</h2>
                        <h2 className="infoSection_messages_info">Experience: {props.requestInfo.experience}</h2>
                        <button type="button" id="accept" className="infoSection_form--button" onClick={onSign}>Accept</button>
                        <button type="button" id="decline" className="infoSection_form--button" onClick={onSign}>Decline</button>
                    </div>
                </article>
            </div>
            <article className="infoSection_videos">
            </article>
            <article className="infoSection_topics">
                <div>
                    <div>
                        <img />
                    </div>
                </div>
            </article>
        </section>
      );
} 
}

export default InfoSectionNPCUser;