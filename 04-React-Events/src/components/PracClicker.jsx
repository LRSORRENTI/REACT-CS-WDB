

function alertClick(event){
    event.preventDefault();
    console.log('clicked');
    window.alert('clicked');
}

function dontClick(event){
    event.preventDefault();
    console.log('dont click!!');
    window.alert('dont click!!');
}


export default function PracClicker({buttonText, alertMessage}){
 
    return(
        <div>
            <button onClick={() => alert(alertMessage)}>{buttonText}</button>

        </div>
    )
}