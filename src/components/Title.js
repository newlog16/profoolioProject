import { BrowserRouter } from "react-router-dom"

function Title() {
    return (
        <BrowserRouter>
            <div className="navBar">
                <div className="navItem">
                    item
                </div>
                <div className="navItem">
                    item
                </div>
                <div className="navItem">
                    item
                </div>
            </div >
        </BrowserRouter>
    );
}

export default Title;