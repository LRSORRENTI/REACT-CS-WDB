import '../styles/btn.css'

// function alertClick(event){
//     event.preventDefault();
//     console.log('clicked');
//     window.alert('clicked');
// }

// function dontClick(event){
//     event.preventDefault();
//     console.log('dont click!!');
//     window.alert('dont click!!');
// }


export default function PracClicker({buttonText, alertMessage}){
 const handleClick = () => {
    alert(alertMessage);
 };
    return(
        <div>
            {/* <button className="clkBtn" onClick={() => alert(alertMessage)}>{buttonText}</button> */}
            <button className="clkBtn" onClick={handleClick}>{buttonText}</button>
        </div>
    )
}