const contain=document.getElementById("contain");
let row=15;
let column=15;
for(let r=0;row>r;r++){
    for(let c=0;column>c;c++)
    {
        let div=document.createElement("div");
        div.addEventListener("mouseenter",()=>{
            div.classList.toggle("hover")
            /* refresh button */
            let out = document.getElementById("out")
            .addEventListener('click', () => {
                window.location.reload(true);
            })

        })
        contain.appendChild(div);
    }
    
}

