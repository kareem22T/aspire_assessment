$(function () {
    $('aside .fa-close').on('click', function () {
        $('aside').removeClass('animate__animated animate__fadeInLeft').fadeOut()
        $('.hide-content').fadeToggle()
    })

    $('header .fa-bars').on('click', function() {
        $('aside').addClass('animate__animated animate__fadeInLeft').fadeToggle('fast')
        $('.hide-content').fadeToggle()
    })

    $('.Characteristics').on('click', function () {
        $(this).find('ul').slideToggle()
        $(this).find('.arrow-d').toggleClass('fa-chevron-up')
        $(this).find('.arrow-d').toggleClass('fa-chevron-down')
    })

    $('.add-one').on('click', function(e) {
        e.preventDefault();

        $('.hide-content').fadeToggle()
        $('.add-pop-up').fadeToggle().css('display', 'flex')
    })

    $('.add-pop-up .fa-x').on('click', function(e) {
        e.preventDefault();

        $('.hide-content').fadeToggle()
        $('.add-pop-up').fadeToggle()
    })

    $('.controls .fa-edit').on('click', function (e) {
        e.preventDefault()

        $('.hide-content').fadeToggle()
        $('.edit-pop-up').fadeToggle().css('display', 'flex')
        $('.edit-pop-up input').val($(this).parents('tr').find('td:first-child').text())
    })

        $('.edit-pop-up .fa-x').on('click', function(e) {
        e.preventDefault();

        $('.hide-content').fadeToggle()
        $('.edit-pop-up').fadeToggle()
    })

    $('.prevent').on('click', function(e) {
        e.preventDefault()
    })
    $('.profile').on('click', function (e) {
        e.preventDefault()
        $("header .more").fadeToggle()
    })
})