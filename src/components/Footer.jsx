import instagram from "../assets/img/instagram.png"
import twitter from "../assets/img/twitter.png"
import facebook from "../assets/img/facebook.png"
import github from "../assets/img/github.png"

export default function Footer() {
    return <>
        <img className="width" src={twitter} alt="instagram image" />
        <img className="width" src={facebook} alt="instagram image" />
        <img className="width" src={instagram} alt="instagram image" />
        <img className="width" src={github} alt="instagram image" />
      </>
}