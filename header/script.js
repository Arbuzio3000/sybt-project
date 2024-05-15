$('.promo__btn').hover( function() {
    $(this)
        .addClass('promo__btn_active').siblings().removeClass('promo__btn_active')
});

