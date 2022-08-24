import { GrLinkedin, GrGithub } from "react-icons/gr";

function Title() {
    return (
        <div className="navBar">
            <a
                href="https://github.com/newlog16"
                className="navItem">
                <GrGithub />
            </a>
            <div className="navItem">
                something random
            </div>
            <a
                href="https://www.linkedin.com/in/danielalvesdearaujo/"
                className="navItem"
            >
                <GrLinkedin />
            </a>
        </div >
    );
}

export default Title;