$(function () {

    if ($('.ans-opt').is(':checked')) {
        $('.ans-opt:checked').parent().siblings().css('filter', 'brightness(50%) contrast(200%) grayscale(50%)')
        $('.ans-opt:checked').parent().siblings().css('opacity', '.8')
    }

    $('.ans-opt').on('click', function () {
        $(this).parent().siblings().css('filter', 'brightness(50%) contrast(200%) grayscale(50%)')
        $(this).parent().siblings().css('opacity', '.8')
        // $(this).parent().css('filter', 'grayscale(0)')
        $(this).parent().css('filter', 'none')
        $(this).parent().css('opacity', '1')
    })

    $('.progress-parent h3 span:last-child').text($('.question').length)
    chooseAns()
    function chooseAns() {
        let answered = 0;
        $('.ans-opt').each(function () {
            // answered = answered == 0 ? 0 : 0
            if ($(this).is(':checked') && $(this).val() != 0) {
                answered += 1;
            }
            $('.progress-parent h3 span:first-child').text(answered)
            $('.answered .progress-bar').attr('aria-valuenow', (answered / $('.question').length) * 100)
            $('.answered .progress-bar').css('width', ((answered / $('.question').length) * 100) + "%")
        })
    }

    $('.ans-opt').on('click', function () {
        chooseAns()
    })


    $('.loader .progress .progress-bar').css('transition', 'all 2s ease-out')
    $('.loader .progress .progress-bar').attr('aria-valuenow', 100)
    $('.loader .progress .progress-bar').css('width', '100%')
    setTimeout(() => {
        $('.loader').fadeOut('slow')
    }, 2000);

})