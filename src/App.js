import logo from './logo.svg';
import './app.sass';
//import "bootstrap/dist/css/bootstrap.css"
import Form from "./Form";

function App() {
    return (
        <div className="app">
            <div className="main">
                <div className="bar ornament-top">
                    <div className="ornament-top-left">&nbsp;</div>
                    <div className="ornament-top-center">&nbsp;</div>
                    <div className="ornament-top-right"></div>
                </div>
                <div className="middle-row">
                    <div className="ornament-middle-left">&nbsp;</div>
                    <div className="content">
                        <div><img src="https://kovcheg.apeha.ru/i/registration/left_img_reg.png" alt="left panel"/> </div>
                        <Form/>
                        <div><img src="https://kovcheg.apeha.ru/i/registration/right_img_reg.png" alt="right panel"/> </div>
                        <div></div>
                    </div>
                    <div className="ornament-middle-right">&nbsp;</div>
                </div>


                <div className="bar ornament-bottom">
                    <div className="ornament-bottom-left">&nbsp;</div>
                    <div className="ornament-bottom-center">&nbsp;</div>
                    <div className="ornament-bottom-right"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
