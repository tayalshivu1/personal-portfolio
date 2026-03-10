import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const SocialIconsComponent = () => {
  return (
    <div className="social-icon">
      <a
        href="https://www.linkedin.com/in/shivam-tayal-171a0a150/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={navIcon1} alt="" />
      </a>
      <a
        href="https://www.facebook.com/shivam.tayal.946?mibextid=kFxxJD"
        target="_blank"
        rel="noreferrer"
      >
        <img src={navIcon2} alt="" />
      </a>
      <a
        href="https://www.instagram.com/shivam_tayal__/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={navIcon3} alt="" />
      </a>
    </div>
  );
};
