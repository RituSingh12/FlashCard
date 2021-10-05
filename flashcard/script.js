document.getElementById("add").addEventListener('click',()=>{
    document.getElementById("textbox").style.display="block";
});

document.getElementById("clear").addEventListener('click',()=>{
    document.getElementById("ansbox").innerHTML="";
});

document.getElementById("save").addEventListener("click",()=>{
    
    let q=document.getElementById("q").value;
    let a=document.getElementById("a").value;

    let box=document.createElement("div");
    box.className="box";

    let line=document.createElement("div");
    line.className="line";
    box.append(line);

    let question=document.createElement("p");
    question.id="question";
    question.innerText=q;
    box.append(question);

    let answer=document.createElement("p");
    answer.id="answer";
    answer.innerText=a;
    box.append(answer);
    answer.style.display="none";

    if(q=="" || a==""){
        console.log("no");
    }
    else{
        document.getElementById("ansbox").append(box);
        box.addEventListener("click",()=>{
            // answer.style.display="block";

            // setTimeout(() => {
            //     answer.style.display="none";
            // }, 5000);

            // or

            if(answer.style.display=="none"){
            answer.style.display="block";
            }
            else{
            answer.style.display="none";
            }
        })

        document.getElementById("q").value="";
        document.getElementById("a").value="";

    }

});

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("textbox").style.display="none";
});
