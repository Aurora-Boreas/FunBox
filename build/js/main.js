'use strict';

var itemHandler = function (e) {
  if ( e.type == 'click' || e.keyCode == 0 || e.keyCode == 32 || e.keyCode == 13) {
    var classlist = this.classList;
    var disabled = classlist.contains('catalog__item--denied');

    if (!disabled) {
      classlist.toggle('catalog__item--ordered');
      classlist.toggle('catalog__item--default');
    }
  }
}

var clickHandler = function (e) {
  e.preventDefault();
  var classlist = this.parentNode.parentNode.querySelector('.catalog__item').classList;
  var disabled = classlist.contains('catalog__item--denied');

  if (!disabled) {
    classlist.toggle('catalog__item--ordered');
    classlist.toggle('catalog__item--default');
  }
}

var items = document.querySelectorAll('.catalog__list-item .catalog__item');
var itemsLinks = document.querySelectorAll('.catalog__list-item .btn-buy');
var eventList = ['click', 'keydown'];

items.forEach(function (item) {
  eventList.forEach(function (eventName) {
    item.addEventListener(eventName, itemHandler);
  });
});

itemsLinks.forEach(function (item) {
  item.addEventListener('click', clickHandler);
});



//npm run build
//});
//(function() {
//
//
//
//  var itElem = document.querySelector(".catalog__list-item");
//  var item = itElem.querySelectorAll(".default");
//  debugger;
//  itElem.addEventListener("click", function (evt) {
//	evt.preventDefault();
//
////    console.log(item["0"].className);
//    for (var i=0 ; i< item.length; i++) {
//      console.log(item[i].classList[1]);
//
//      if (item[i].classList[1] == "default")  {
//        item[i].classList.remove("default");
//        item[i].classList.add("ordered");
//      }
////      else if (item[i].classList[1] == "ordered")  {
////        item[i].classList.remove("ordered");
////        item[i].classList.add("default");
////      }
//    }
////    if (item.classList.contains("default") == true ) {
////      item.classList.remove("default");
////      item.classList.add("ordered");
////    }
////	elseif (item.classList.contains("ordered") == true ) {
////      item.classList.remove("ordered");
////      item.classList.add("default");
////    }
//
//});
//
//})();
//  function onclick(event) {
//  var el = this.getElementsByTagName('A')[0];
//  el.style.display = (el.style.display == 'none') ? '' : 'none'
//}


//  elems.onclick = function() {
//    elem.childNodes[1].className = (elem.childNodes[1].className == 'catalog__item--ordered') ? '' : 'catalog__item--ordered'
//  }

//  elem.addEventListener("onclick", function changeFrame(){
//   if (elem.childNodes[1].className == '.catalog__item catalog__item--default');
//     elem.childNodes[1].className.toggle('.catalog__item catalog__item--ordered');
//  });




//$(document).ready(function () {
//  $('.catalog__list').on('click','.catalog__item--default',function() {
//    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--default')
//    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--ordered')
//  });
//
//  $('.catalog__list').on('click','.catalog__item--ordered',function() {
//    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--ordered')
//    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--default')
//    $(this).find('.catalog__description--default').show()
//    $(this).find('.catalog__description--ordered').hide()
//  });
//
//  $('.catalog__list').on('click', '.btn', function() {
//    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--ordered')
//    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--default')
//    $(this).closest('.catalog__list-item').find('.catalog__weight').css('background-color','')
//  })
//
//  $('.catalog__list').on('mouseleave','.catalog__item--ordered',function() {
//    $(this).find('.catalog__weight').css('background-color','#e52e7a')
//    $(this).find('.catalog__description--default').show()
//    $(this).find('.catalog__description--ordered').hide()
//  });
//
//  $('.catalog__list').on('mouseenter','.catalog__item--ordered',function() {
//    $(this).find('.catalog__description--default').hide()
//    $(this).find('.catalog__description--ordered').show()
//    $(this).find('.catalog__weight').css('background-color','')
//  });
//});

