import InputBox from "./InputBox";
import "./Form.sass"
import PopUp from "./PopUp";
import {useState} from "react";

export default function Form() {
    const [showPopup, setShowPopup] = useState(false)

    const labels = {
        nick: 'https://kovcheg.apeha.ru/i/registration/nick.png',
        email: 'https://kovcheg.apeha.ru/i/registration/email.png',
        password: 'https://kovcheg.apeha.ru/i/registration/pass.png',
        password2: 'https://kovcheg.apeha.ru/i/registration/pass2.png',
    }

    return <div className="registration-form">
        <img src="https://kovcheg.apeha.ru/i/registration/top_img_reg.png"/>
        <div className="text-center m-2">
            <strong className="d-block m-2">Зарегистрироваться с помощью:</strong>
            <a href="user_add_1_soc_1.html"><img src="https://kovcheg.apeha.ru/i/vk.png"/></a>&nbsp;
            <a href="user_add_1_soc_4.html"><img src="https://kovcheg.apeha.ru/i/ok.png"/></a>&nbsp;
        </div>


        {Object.keys(labels).map(k => <div key={k} className="mb-3">
            <div className="m-auto w-75">
                <InputBox>
                    <img src={labels[k]}/>
                    <input/>
                </InputBox>
            </div>

        </div>)}

        <div className="d-flex justify-content-around">
            <strong>Пол:</strong>
            <div>
                <input type="radio" name="sex"/> Мужской
                <input type="radio" name="sex"/> Женский
            </div>
        </div>
        <strong className="d-block text-center pointer" onClick={() => setShowPopup(!showPopup)}><u>Дополнительные параметры</u></strong>
        {showPopup && <PopUp/>}
        <strong className="d-block my-5 text-center">
            <input type="checkbox"/> Принимаю условия лицензионного соглашения <a href="https://kovcheg.apeha.ru/licence.htm" target="_blank">(Читать в новом
            окне)</a>
        </strong>

        <div className="d-flex justify-content-center">
            <div className="button pointer" onClick={()=>alert('TODO: Registration ')}>
                <div className="button_left"></div>
                <div className="button_middle">
                    OK
                </div>
                <div className="button_right"></div>
            </div>
        </div>
    </div>
}