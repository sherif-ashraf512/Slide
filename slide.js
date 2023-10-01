let sliderimgs = Array.from(document.querySelectorAll(".container img"));

let slidesCount = sliderimgs.length;
let currentSlide = 1;

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
let pagination = document.createElement("ul");
pagination.setAttribute("id","pagination-ul");

for (let i=1 ; i<=slidesCount ; i++){
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    pagination.appendChild(paginationItem);
}
let paginationBullets = Array.from(pagination.children);//Array from li 
for (let i = 0 ; i < paginationBullets.length ; i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
document.getElementById("indicator").appendChild(pagination);
theChecker();
function nextSlide(){
    if (nextButton.classList.contains("disabeld")){
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
}


function prevSlide(){
    if (prevButton.classList.contains("disabeld")){
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
}

function theChecker(){
    removeActive();

    document.getElementById("slide-number").textContent = "Slide #" + currentSlide + ' of ' + slidesCount;
    sliderimgs[currentSlide - 1].classList.add("active");
    pagination.children[currentSlide - 1].classList.add("active");

    if (currentSlide == 1){
        prevButton.classList.add("disabeld");
    }else {
        prevButton.classList.remove("disabeld");
    }

    if (currentSlide == slidesCount){
        nextButton.classList.add("disabeld");
    } else {
        nextButton.classList.remove("disabeld");
    }
}

function removeActive(){
    sliderimgs.forEach(function(img){
        img.classList.remove("active");
    });
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove("active");
    });
}
