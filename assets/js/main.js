$(function() {
    // animation for the site
    enterAnime()
    function enterAnime() {
        $('.hero').css('visibility', 'visible').addClass('animate__animated animate__flipInX');

        setTimeout(() => {
            $('.hero .text h1').addClass('animate__animated animate__bounceInLeft').fadeIn('slow');
            setTimeout(() => {
                $('.hero .text p').addClass('animate__animated animate__bounceInLeft').fadeIn('slow');
            }, 200);
        }, 300);

        if ($(window).scrollTop() >= ($('.solutions').offset().top - $(window).height() / 2)) {
            $('.solutions p').css('visibility', 'visible').addClass('animate__animated animate__fadeInRightBig');
            setTimeout(() => {
                $('.solutions h1').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                $('.solutions a').css('visibility', 'visible').addClass('animate__animated animate__bounceInUp');
            }, 500);
        }

        if ($(window).scrollTop() >= ($('.statistics .container >div').offset().top / 5)) {
            setTimeout(() => {
                // first child
                $('.statistics .container >div:first-child').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                setTimeout(() => {
                    $('.statistics .container >div:first-child .img').css('visibility', 'visible').addClass('animate__animated animate__backInDown');
                }, 500);

                if (parseInt($('.statistics .container >div:nth-child(1) h1 span').text()) == 0)
                    setTimeout(() => {
                        let x1 = 0;
                        let inc1 = window.setInterval(() => {
                            $('.statistics .container >div:first-child h1 span').text(x1++)
                                if (x1 > 700)
                                    window.clearInterval(inc1);
                        }, 3);
                    }, 700);


                // second child
                setTimeout(() => {
                    $('.statistics .container >div:nth-child(2)').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                    setTimeout(() => {
                        $('.statistics .container >div:nth-child(2) .img').css('visibility', 'visible').addClass('animate__animated animate__backInDown');
                    }, 500);

                    if (parseInt($('.statistics .container >div:nth-child(2) h1 span').text()) == 0)
                        setTimeout(() => {
                            let x2 = 0;
                            let inc2 = window.setInterval(() => {
                                $('.statistics .container >div:nth-child(2) h1 span').text(x2)
                                x2 += 500
                                    if (x2 > 350000)
                                        window.clearInterval(inc2);
                            }, 3);
                        }, 700);
                }, 800);


                // last child
                setTimeout(() => {
                    $('.statistics .container >div:last-child').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                    setTimeout(() => {
                        $('.statistics .container >div:last-child .img').css('visibility', 'visible').addClass('animate__animated animate__backInDown');
                    }, 500);

                    if (parseInt($('.statistics .container >div:nth-child(3) h1 span').text()) == 0)
                        setTimeout(() => {
                        let x3 = 0;
                        let inc3 = window.setInterval(() => {
                            $('.statistics .container >div:nth-child(3) h1 span').text(x3++)
                                if (x3 > 15)
                                    window.clearInterval(inc3);
                        }, 50);
                    }, 700);

                }, 2000);

            }, 700);
        }

        if ($(window).scrollTop() >= ($('.serve .container >div').offset().top / 2)) {
            setTimeout(() => {
                $('.serve >h1').css('visibility', 'visible').addClass('animate__animated animate__bounceInLeft');

                setTimeout(() => {
                    $('.serve .container >div:first-child').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(1) .img').css('visibility', 'visible').addClass('animate__animated animate__backInLeft');
                    }, 500);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(1) p').css('visibility', 'visible').addClass('animate__animated animate__bounceInLeft');
                    }, 700);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(1) h1').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                        $('.serve .container >div:nth-child(1) a').css('visibility', 'visible').addClass('animate__animated animate__bounceInUp');
                    }, 900);

                }, 500);

                setTimeout(() => {
                    $('.serve .container >div:nth-child(2)').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(2) .img').css('visibility', 'visible').addClass('animate__animated animate__backInLeft');
                    }, 500);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(2) p').css('visibility', 'visible').addClass('animate__animated animate__bounceInLeft');
                    }, 700);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(2) h1').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                        $('.serve .container >div:nth-child(2) a').css('visibility', 'visible').addClass('animate__animated animate__bounceInUp');
                    }, 900);

                }, 1000);

                setTimeout(() => {
                    $('.serve .container >div:nth-child(3)').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(3) .img').css('visibility', 'visible').addClass('animate__animated animate__backInLeft');
                    }, 500);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(3) p').css('visibility', 'visible').addClass('animate__animated animate__bounceInLeft');
                    }, 700);

                    setTimeout(() => {
                        $('.serve .container >div:nth-child(3) h1').css('visibility', 'visible').addClass('animate__animated animate__bounceInDown');
                        $('.serve .container >div:nth-child(3) a').css('visibility', 'visible').addClass('animate__animated animate__bounceInUp');
                    }, 900);


                }, 1500);
            }, 700);
        }



    }
    $(window).on('scroll onload', function() {
        enterAnime()
    })
    // end animation for the site
})