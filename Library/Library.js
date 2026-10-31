var book=document.getElementById("outline")
var added=document.getElementById("add")
var remove=document.getElementById("remove")
var outerline=document.getElementById("blackbg")
added.addEventListener("click",function(event){
    event.preventDefault()
book.style.display="block"
 outerline.style.display="block"
})
remove.addEventListener("click",function(event){
    event.preventDefault()
book.style.display="none"
 outerline.style.display="none"

})

var title=document.querySelector(".title")
var author=document.querySelector(".Author")
var suggestion=document.getElementById("suggestion")
var container=document.querySelector(".container")
var adds=document.getElementById("added")
var fit=document.querySelector(".fit")
adds.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div");
    div.setAttribute("class","container")
    div.innerHTML=`<h3>${title.value}</h3>
        <h4>${author.value}</h4>
        <textarea>${suggestion.value}</textarea>
        <button id="delete">delete</button>`
        fit.append(div);
        book.style.display = "none";
        outerline.style.display="none";


})
function deletes(event){
    event.target.parentElement.remove()


}



