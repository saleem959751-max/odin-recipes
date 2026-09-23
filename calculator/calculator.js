var result=document.getElementById("display");
function number(a){
    result.value+=a;

}
function reset(){
    result.value="";
}

function cal(){
    try{
    result.value=eval(result.value)
    }
    catch(error){
        result.value="error"

    }

}
