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



