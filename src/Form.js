import InputCustom from "./InputCustom";
import "./Form.sass"

export default function Form(){
    return <div className="registration-form">
        <img src="https://kovcheg.apeha.ru/i/registration/top_img_reg.png"/>

        <InputCustom name="nick"/>
    </div>
}