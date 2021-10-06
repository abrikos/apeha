import "./PopUp.sass"
import InputBox from "./InputBox";

export default function PopUp() {
    return <div className="popup-wrap">
        <div className="popup">
        <div className="d-flex">
            <img src="/images/left_top_corner.png"/>
            <img src="/images/top_middle.png"/>
            <img src="/images/right_top_corner.png"/>
        </div>
        <div className="d-flex">
            <img src="/images/left_middle.png"/>
            <div className="popup-content">
                <strong className="d-block text-center">Дата рождения</strong>
                <div className="d-flex justify-content-around">
                    <InputBox><select>
                        <option>День</option>
                        <option>1</option>
                        <option>2</option>
                        <option>...</option>
                    </select></InputBox>
                    <InputBox><select>
                        <option>Месяц</option>
                        <option>Январь</option>
                        <option>Февраль</option>
                        <option>...</option>
                    </select></InputBox>
                    <InputBox><select>
                        <option>Год</option>
                        <option>1940</option>
                        <option>1941</option>
                        <option>1942</option>
                        <option>...</option>
                    </select></InputBox>
                </div>

                <strong className="d-block text-center">Выберите расу</strong>
                <div className="w-25 m-auto">
                    <InputBox><select>
                        <option>Человек</option>
                    </select></InputBox>
                </div>
                <div className="text-center">
                    <strong>Внимание!</strong> В дальнейшем менять нельзя
                    <strong className="d-block">Выберите дизайн игры:</strong>
                    <input type="radio"/> Улучшенный
                </div>
                <strong className="d-block">Внимание!</strong>
                <i>Улучшенный дизайн рекомендован для обладателей
                    19-ти дюймовых мониторов и больше</i>
            </div>
            <img src="/images/right_middle.png"/>
        </div>
        <div className="d-flex">
            <img src="/images/left_bottom_corner.png"/>
            <img src="/images/bottom_middle.png"/>
            <img src="/images/bottom_right_corner.png"/>
        </div>
        </div>
    </div>
}