import  profilePic  from "../assets/img/profile-pic2.jpg"

export default function Info() {
    return(
        <header className="header">
            <img className="profile-img" src={profilePic} alt="profile picture of a man in a suite in black and gray"/>
            <div className="padding">
                <h1 className="name margin ">Travis Haynie</h1>
                <p className="profession margin">Frontend Developer</p>
                <p className="website margin ">Travihay.website</p>
                <div className="button-container">
                    <button>Email</button>
                    <button>Linkedln</button>
                </div>
            </div>
        </header>
    )
    
}