import "../../styles/components/InfoSectionNPCPage.scss";
import profilePic from "../../images/Profile_pic.jpg";
import { NavLink } from "react-router-dom";

function InfoSectionNPCPage() {
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
                        // onChange={getFormInfo}
                        // value={formInfo.nombre}
                        ></input>
                    </div>
                    <div className="infoSection_form--wrapper" >
                        <label className="infoSection_form--label" htmlFor="amount" hidden>
                        Nombre
                        </label>
                        <input
                        className="infoSection_form--input"
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        // onChange={getFormInfo}
                        // value={formInfo.nombre}
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
                        // onChange={getFormInfo}
                        // value={formInfo.mensaje}
                        ></textarea>
                    </div>
                    <NavLink to="" className="infoSection_form--submit" >Choose me</NavLink>
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
}

export default InfoSectionNPCPage;