$(function () {

    if ($('.ans-opt').is(':checked')) {
        $('.ans-opt:checked').parent().siblings().find('img').css('filter', 'brightness(50%) contrast(200%) grayscale(50%)')
        $('.ans-opt:checked').parent().siblings().find('img').css('opacity', '.8')

        // try 1
        $('.ans-opt:checked').parent().find('.try-1 span').css('background', '#C01E2E')

        // try 2
        if ($('.ans-opt:checked').parent().hasClass('try-2'))
            $('.try-2 .ans-opt:checked').parent().css('borderColor', '#FFC719')

        // try 3
        if ($('.ans-opt:checked').parent().hasClass('try-3')) {
            $('.try-3 .ans-opt:checked').siblings('label').css({
                'background': 'linear-gradient(144deg, rgba(255,207,59,1) 0%, rgba(249,64,83,1) 100%)',
                'color': '#fff',
                'fontWeight': 'bold',
                'boxShadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            })
        }
    }

    $('.ans-opt').on('click', function () {
        $(this).parent().siblings().find('img').css('filter', 'brightness(50%) contrast(200%) grayscale(50%)')
        $(this).parent().siblings().find('img').css('opacity', '.8')


        // $(this).parent().css('filter', 'grayscale(0)')
        $(this).parent().find('img').css('filter', 'none')
        $(this).parent().find('img').css('opacity', '1')

        //try 1
        $(this).parent().siblings().find('.try-1 span').css('background', 'transparent')

        // try 1 
        $(this).parent().find('.try-1 span').css('background', '#C01E2E')

        //try 2
        if ($(this).parent().hasClass('try-2'))
            $(this).parent().siblings().css('borderColor', '#cbcbcb')

        // try 2
        if ($(this).parent().hasClass('try-2'))
            $(this).parent().css('borderColor', '#FFC719')

        // try 3
        if ($(this).parent().hasClass('try-3')) {
            $(this).siblings('label').css({
                'background': 'linear-gradient(144deg, rgba(255,207,59,1) 0%, rgba(249,64,83,1) 100%)',
                'color': '#fff',
                'fontWeight': 'bold',
                'boxShadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            })
            $(this).parent().siblings().find('label').css({
                'background': '#f1eff3',
                'color': '#000',
                'fontWeight': '400',
                'boxShadow': 'none'
            })
        }
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