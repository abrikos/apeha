import "./InputBox.sass"

export default function InputBox(props){

    return <div className="input-box">
        <div className="input-row top" >
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
        <div className="input-row middle" >
            <div className="left"></div>
            <div className="center">
                {props.children}
            </div>
            <div className="right"></div>
        </div>
        <div className="input-row bottom">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
    </div>
}