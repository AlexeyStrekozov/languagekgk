let logo = document.querySelector('.header-content'),
    header = document.querySelector('.header-wrap::after');
    

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    logo.style.transform = "translate(0px," + scrolled/3 +"%)";
    header.style.transform = "translate(0px,-" + scrolled/100 +"%)";
});


let forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback.call(null, i, array[i]);
  }
};

