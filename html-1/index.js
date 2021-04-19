const clk = document.getElementById('clk');
clk.addEventListener('click', ()=>{
    document.getElementById('modal').style.display = "block";
});

document.getElementsByClassName('close')[0].addEventListener('click', ()=>{
    console.log("Working");
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event)=>{
    if(event.target === document.getElementById('modal')){
        document.getElementById('modal').style.display = "none";
    }
}