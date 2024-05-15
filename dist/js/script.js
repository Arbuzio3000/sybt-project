$('.header__link').click( function() {
    $('.header__link')
        .removeClass('active')
    $(this)
        .addClass('active')
});


$('.promo__btn').hover( function() {
    $(this)
        .addClass('promo__btn_active').siblings().removeClass('promo__btn_active')
});

