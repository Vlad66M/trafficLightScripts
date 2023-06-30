var isOn = false;

function offAll(){
    document.getElementById('red').style['background-color']='white';
    document.getElementById('yellow').style['background-color']='white';
    document.getElementById('green').style['background-color']='white';
}

document.getElementById('btn').addEventListener('click', () => {
    isOn = !isOn;
    offAll();
    if(isOn){
        document.getElementById('btn').innerText = 'ON';
        document.getElementById('red').style['background-color']='red';
    }
    else{
        document.getElementById('btn').innerText = 'OFF';
    }
});

document.getElementById('red').addEventListener('click', () => {
    if(isOn){
        offAll();
        document.getElementById('red').style['background-color']='red';
    }
});

document.getElementById('yellow').addEventListener('click', () => {
    if(isOn){
        offAll();
        document.getElementById('yellow').style['background-color']='yellow';
    }
});

document.getElementById('green').addEventListener('click', () => {
    if(isOn){
        offAll();
        document.getElementById('green').style['background-color']='green';
    }
});