import logo from './logo.svg';
import './app.sass';
import "bootstrap/dist/css/bootstrap.css"

function App() {
    return (
        <div className="app">
            <div className="main">
                <div className="bar ornament-top">
                    <div className="ornament-top-left">&nbsp;</div>
                    <div className="ornament-top-center">&nbsp;</div>
                    <div className="ornament-top-right"></div>
                </div>
                <img src="https://kovcheg.apeha.ru/i/registration/top_img_reg.png"/>

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
