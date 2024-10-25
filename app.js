const home = document.querySelector('.below-top');
const about = document.querySelector('.about_me');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

//Instant Scroll View Functionality
const links = document.querySelectorAll(".right a");
console.log(links);

links.forEach(link => link.addEventListener("click",function(event){
    event.preventDefault();
    const linkType = event.target.getAttribute("data-link");
    if(linkType == "home"){
        home.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
    }else if(linkType == "project"){
        projects.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
    }else if(linkType == "about"){
        about.scrollIntoView({
            behavior:"smooth",
            block:"end"
        })
    }else{
        contact.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
    }
}))

//Text Animation
function breakTheText(){
    var paraTag = document.querySelector('.below-top p')
    var pContent = paraTag.textContent;

    var splittedText = pContent.split("");
    console.log(splittedText);

    var clutter = ""

    splittedText.forEach(function(e){
        clutter = clutter + `<span>${e}</span>`;
    })

    paraTag.innerHTML = clutter;
}

breakTheText()

gsap.from("p span",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.1
})




















