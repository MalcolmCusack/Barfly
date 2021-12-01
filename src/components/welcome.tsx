import logoWhite from "../BarflyLogoWhite.png";
import Menu from "./menu/Menu";

const Welcome = () => {
    return (
        <div>
            <img src={logoWhite} className="App-logo" alt="logo" />
            

            <div style={{ border: "1px solid black" }}>
                <Menu />
            </div>
        </div>
    );
};

export default Welcome;
