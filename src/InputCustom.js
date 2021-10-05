import "./InputCustom.sass"

export default function InputCustom(props){
    const labels ={
        nick:'https://kovcheg.apeha.ru/i/registration/nick.png',
    }

    return <div className="input-custom">
        <div className="row top" >
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
        <div className="row middle" >
            <div className="left"></div>
            <div className="center"  id={props.name}>zsss</div>
            <div className="right"></div>
        </div>
        <div className="row bottom">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
    </div>
}