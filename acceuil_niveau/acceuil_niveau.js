const accordion = document.getElementsByClassName("contentDropPreCycle");


for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
};


document.getElementById("contentDrop").addEventListener("click", function(){
    document.querySelector(".flecheDown").style.display = "none";
    document.querySelector(".flecheUp").style.display = "block";
    document.querySelector(".preCycle").style.height = "470px"
    document.querySelector(".contentPreCycle").style.height = "96px";
})

document.getElementById("contentDrop").addEventListener("mouseleave", function(){
    document.querySelector(".flecheDown").style.display = "block";
    document.querySelector(".flecheUp").style.display = "none";
})

document.querySelector(".contenuRadio").addEventListener("click", function(){
    document.querySelector(".preCycle").style.height = "340px";
    document.querySelector(".contentPreCycle").style.height = "0px";
})

document.querySelector(".contenuRadioI").addEventListener("click", function(){
    document.querySelector(".preCycle").style.height = "340px";
    document.querySelector(".contentPreCycle").style.height = "0px";
})

document.querySelector(".contenuRadioII").addEventListener("click", function(){
    document.querySelector(".preCycle").style.height = "340px";
    document.querySelector(".contentPreCycle").style.height = "0px";
})

document.querySelector(".terminalRadio").addEventListener("click", function(){
    document.querySelector(".contentSpecific").style.height = "0px";
})

document.querySelector(".terminalRadioI").addEventListener("click", function(){
    document.querySelector(".contentSpecific").style.height = "0px";
})

document.getElementById("terminalRadioI").addEventListener("click", function(){
    document.querySelector(".contentSpecific").style.height = "0px";
})

document.querySelector(".contentTerminal").addEventListener("click", function(){
    document.querySelector(".contentSpecific").style.height = "96px";
})

const accordionTerminal = document.getElementsByClassName("linkTerminal");

for(i = 0; i < accordionTerminal.length; i++){
    accordionTerminal[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
    
};

document.getElementById("contentTerminal").addEventListener("click", function (){
    document.querySelector(".flecheDownI").style.display = "none";
    document.querySelector(".flecheUpI").style.display = "block";
})

document.getElementById("contentTerminal").addEventListener("mouseleave", function(){
    document.querySelector(".flecheDownI").style.display = "block";
    document.querySelector(".flecheUpI").style.display = "none";
})