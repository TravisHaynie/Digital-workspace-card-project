import  profilePic  from "../assets/img/profile-pic2.jpg"
import email from "../assets/img/Icon.png"
import linkdln from "../assets/img/link.png"

export default function Info() {
    return(
        <header className="header">
            <img className="profile-img" src={profilePic} alt="profile picture of a man in a suite in black and gray"/>
            <div className="header-padding center">
                <h1 className="name margin">Travis Haynie</h1>
                <p className="profession margin">Frontend Developer</p>
                <p className="website margin">Travihay.website</p>
                <button className="email-btn btn-padding"><span className="span"><img className="img-size" src={email}></img><a href="mailto:travihay@gmail.com" className="color-black">Email</a></span></button>
                <button className="linkedln-btn btn-padding"><span className="span"><img  className="img-size link-border" src={linkdln}></img><a href="https://www.linkedin.com/in/travis-haynie" className="color-white">LinkedIn</a></span></button>
            </div>
        </header>
    )
    
}