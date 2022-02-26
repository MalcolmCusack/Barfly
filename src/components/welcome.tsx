import logoWhite from "../BarflyLogoWhite.png";
//import Menu from "./menu/Menu";
import Bar from "./bars/ViewBars"

const Welcome = () => {
    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            

            <div>
                <Bar/>
            </div>
        </div>
    );
};

export default Welcome;
