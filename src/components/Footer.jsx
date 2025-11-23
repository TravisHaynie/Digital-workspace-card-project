import instagram from "../assets/img/instagram.png"
import twitter from "../assets/img/twitter.png"
import facebook from "../assets/img/facebook.png"
import github from "../assets/img/github.png"

export default function Footer() {
    return <>
        <a href="https://github.com/TravisHaynie"><img className="width" src={twitter} alt="twitter image" /></a>
        <a href="https://www.facebook.com/tchaynie"><img className="width" src={facebook} alt="facebook image" /></a>
        <a href="https://www.instagram.com/travishaynie/"><img className="width" src={instagram} alt="instagram image" /></a>
        <a href="https://github.com/TravisHaynie"><img className="width" src={github} alt="github image" /></a>
      </>
}