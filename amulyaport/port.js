let body = document.querySelector("body");
body.style.transition="1s";
function change(){
    if(body.style.backgroundColor !="black"){
        body.style.backgroundColor="black"
        body.style.color="white"
    }
    else{
        body.style.backgroundColor="white"
        body.style.color="black"
    }
}
