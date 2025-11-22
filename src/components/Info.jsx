import  profilePic  from "../assets/img/profile-pic2.jpg"

export default function Info() {
    return(
        <header className="header">
            <img className="profile-img" src={profilePic} alt="profile picture of a man in a suite in black and gray"/>
            <div className="header-padding center">
                <h1 className="name margin">Travis Haynie</h1>
                <p className="profession margin">Frontend Developer</p>
                <p className="website margin margin-top-btm">Travihay.website</p>
                <button className="email-btn btn-padding">Email</button>
                <button className="linkedln-btn btn-padding">Linkedln</button>
            </div>
        </header>
    )
    
}