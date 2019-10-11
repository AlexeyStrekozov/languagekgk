let logo = document.querySelector('.header-content'),
    header = document.querySelector('.header-wrap'),
    buttonDetails = document.querySelectorAll('.courses-block-details-click'),
    coursesPopupClose = document.querySelectorAll('.courses-block-popup-content-close'),
    coursesPopup = document.querySelectorAll('.courses-block-popup'),
    buttonDetailsArr = [];

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    logo.style.transform = "translate(0px," + scrolled/3 +"%)";
    header.style.transform = "translate(0px,-" + scrolled/80 +"%)";
});


let forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback.call(null, i, array[i]);
  }
};

for (var i = 0; i < buttonDetails.length; i++){
    buttonDetailsArr.push(buttonDetails[i]);
    buttonDetails[i].addEventListener('click', function(e){
        let index = buttonDetailsArr.indexOf(e.target);
        coursesPopup[index].classList.add('opnePopUP');
        
        coursesPopupClose[index].addEventListener('click', function(){
            coursesPopup[index].classList.remove('opnePopUP');
        });
    });
}

