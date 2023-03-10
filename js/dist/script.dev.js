"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    adaptiveHeight: true,
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"> <img src="icons/prev.png"</button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="icons/next.png"</button>',
    responsive: [{
      breakpoint: 480,
      settings: {
        dots: true,
        arrow: false
      }
    }]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active').closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
  $('.catalog-item__links').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
});