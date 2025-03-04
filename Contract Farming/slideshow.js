var slideIndex =1;
showSlides(slideIndex);//Matlab showSlides function mein slideIndex ki value daal do 

//Next/previous controls
//Creating a funciton that takes n as a input
function plusSlides(n){
    showSlides(slideIndex += n); //Iska matlab slideindex ki final value slideIndex+1 ho jaaye gi
}
//Thumbnail Image Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}   
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('myimgs');
    var dots = document.getElementsByClassName('dots');
    if (n > slides.length){slideIndex = 1}
    if (n < 1 ){slideIndex = slides.length}
    for (i=0; i<slides.length; i++){
        slides[i].style.display ='none' ;
    }
    for(i = 0;i< dots.length; i++ ){
        dots[i].className = dots[i].className.replace("active" , "");
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += "active";
}