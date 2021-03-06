$(document).ready(function () {
  $('.catalog__list').on('click','.catalog__item--default',function() {
    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--default')
    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--ordered')
  });

  $('.catalog__list').on('click','.catalog__item--ordered',function() {
    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--ordered')
    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--default')
    $(this).find('.catalog__description--default').show()
    $(this).find('.catalog__description--ordered').hide()
  });

  $('.catalog__list').on('click', '.btn', function() {
    $(this).closest('.catalog__list-item').find('.catalog__item').addClass('catalog__item--ordered')
    $(this).closest('.catalog__list-item').find('.catalog__item').removeClass('catalog__item--default')
    $(this).closest('.catalog__list-item').find('.catalog__weight').css('background-color','')
  })

  $('.catalog__list').on('mouseleave','.catalog__item--ordered',function() {
    $(this).find('.catalog__weight').css('background-color','#e52e7a')
    $(this).find('.catalog__description--default').show()
    $(this).find('.catalog__description--ordered').hide()
  });

  $('.catalog__list').on('mouseenter','.catalog__item--ordered',function() {
    $(this).find('.catalog__description--default').hide()
    $(this).find('.catalog__description--ordered').show()
    $(this).find('.catalog__weight').css('background-color','')
  });
});
