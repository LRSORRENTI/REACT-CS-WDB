import './Button.css'

function Button({clickFunc, label="Click"}){
    return <button onClick={clickFunc} className='Button'>{label}</button>
}

export default Button;