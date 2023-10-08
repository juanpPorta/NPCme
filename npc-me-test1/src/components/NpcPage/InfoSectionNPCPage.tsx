import "../../styles/components/InfoSectionNPCPage.scss";
import profilePic from "../../images/Profile_pic.jpg";
import { useState, useEffect } from "react";

function InfoSectionNPCPage(props) {

//States
const [formInfo, setFormInfo] = useState({
    time: "",
    payment: 0,
    experience: ""
  });
const [sent, setSent] = useState(false);

//Effects
 useEffect(() => {
    hash(formInfo);
  }, [sent]);

//Functions

function sendRequest(ev: any) {
    ev.preventDefault();
    setSent(true);
    props.setRequestReceived(true);
    props.setRequestInfo(formInfo);
}

function hash(formInfo) {
    const str = formInfo.experience;
    const value = str.charCodeAt(0);
    console.log("hash");
    console.log(value);
}

function getFormInfo(ev: any) {
    const input = ev.target.name;
    const value = ev.target.value;

    if (input === "time") {
        setFormInfo({ ...formInfo, time: value });
      } else if (input === "payment") {
        setFormInfo({ ...formInfo, payment: value });
      } else if (input === "experience") {
        setFormInfo({ ...formInfo, experience: value });
    }
}

if (props.requestReceived == false) {
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
                <article className="infoSection_form">
                    <form  className="infoSection_form--box">
                        <div className="infoSection_form--wrapper" >
                            <label className="infoSection_form--label" htmlFor="time" hidden>
                            Nombre
                            </label>
                            <input
                            className="infoSection_form--input"
                            type="text"
                            id="time"
                            name="time"
                            placeholder="Time"
                            onChange={getFormInfo}
                            value={formInfo.time}
                            ></input>
                        </div>
                        <div className="infoSection_form--wrapper" >
                            <label className="infoSection_form--label" htmlFor="payment" hidden>
                            Nombre
                            </label>
                            <input
                            className="infoSection_form--input"
                            type="text"
                            id="payment"
                            name="payment"
                            placeholder="Payment"
                            onChange={getFormInfo}
                            value={formInfo.payment}
                            ></input>
                        </div>
                        <div className="infoSection_form--wrapper" >
                            <label  className="infoSection_form--label" htmlFor="experience" hidden>
                              Your experience
                            </label>
                            <textarea
                            className="infoSection_form--input--textarea"
                            id="experience"
                            name="experience"
                            placeholder="Experience"
                            onChange={getFormInfo}
                            value={formInfo.experience}
                            ></textarea>
                        </div>
                        <button type="submit" onClick={sendRequest} className="infoSection_form--submit" >Choose me</button>
                    </form>
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
                    <div className="infoSection_request_sent--wrapper">
                        <h2 className="infoSection_request_sent1">Request sent</h2>
                        <h2 className="infoSection_request_sent2">If John Lawy accepts the contract</h2>
                        <h2 className="infoSection_request_sent3">you'll get a notification in your profile inbox.</h2>
                        <h2 className="infoSection_request_sent4">Good luck and enjoy the experience!</h2>
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

export default InfoSectionNPCPage;