import { profilePic } from "src/assets/img/profile-pic2.jpg"

export default function Info() {
    return(
        <header>
            <img src={profilePic} alt="profile picture of a man in a suite in black and gray"/>
            <h1>Travis Haynie</h1>
            <p>Frontend Developer</p>
            <p>Travihay.website</p>
            <div>
                <button>Email</button>
                <button>Linkedln</button>
            </div>
        </header>
    )
    
}