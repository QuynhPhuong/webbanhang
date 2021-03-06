$(function(){

    $(".banner").owlCarousel({
        items: 1,
        singleItem: true,
        nav: false,
        dots: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        lazyLoad: true
    });
    var owl = $(".product-slider");
    owl.owlCarousel({
        items: 4,
        nav : true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 500,
        stopOnHover : false,
        margin:30,
        responsive: {
            0: {
                items: 2,
                margin: 15,
                dots: false,
                nav:true,
            },
            640: {
                items: 4,
                margin: 30,
                dots: false,
                nav:true,
            },
        }
    });
    var owl = $(".product-slider-2");
    owl.owlCarousel({
        items: 3,
        nav : true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 500,
        stopOnHover : false,
        margin:30,
        responsive: {
            0: {
                items: 2,
                margin: 15,
                dots: false,
                nav:true,
            },
            640: {
                items: 3,
                margin: 30,
                dots: false,
                nav:true,
            },
        }
    });
    var owl = $(".news-slider");
    owl.owlCarousel({
        items: 3,
        nav : true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 500,
        stopOnHover : false,
        margin:30,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: false,
                nav:true,
            },
            640: {
                items: 2,
                margin: 15,
                dots: false,
                nav:true,
            },
            700: {
                items: 3,
                margin: 30,
                dots: false,
                nav:true,
            },
        }
    });
    var owl = $(".gallery-slider");
    owl.owlCarousel({
        nav : true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 500,
        stopOnHover : false,
        margin:30,
        responsive: {
            0: {
                items: 2,
                margin: 15,
                dots: false,
            },
            640: {
                items: 4,
                margin: 15,
                dots: false,
            },
            700: {
                items: 5,
                margin: 30,
                dots: false,
            },
        }
    });
    $('form').parsley();

    $('.contact__from-right').submit(function(e) {
        var title_ = $(this).find('input.title').val();
        var content_ = $(this).find('textarea.content').val();
        var email_ = $(this).find('input.email').val();
        var phone_ = $(this).find('input.phone').val();
        var button = $(this).find('button');
        e.preventDefault();
        console.log(email_);
        if ( $(this).parsley().isValid() ) {
            button.text('Đang gửi...');
            $.post('/contactajax', {'name': title_, 'content': content_, 'email' : email_, 'phone': phone_}, function (e) {
                if(e.code == 1) {
                    alert('Cảm ơn bạn đã để lại phản hồi, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
                    location.reload();
                } else if (e.code == 0) {
                    alert('Dữ liệu chưa phù hợp.');
                }
            });
        }
    });

    $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 500,
    });

    $('.navMobile > ul > li > button').click(function() {
        var checkElement = $(this).next().next();
        $('.navMobile > ul li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.navMobile > ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    $('ul.nav2 > li > button').click(function() {
        var checkElement = $(this).next().next();
        $('ul.nav2 li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.nav2 ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    $('ul.categoryProduct > li > button').click(function() {
        var checkElement = $(this).next().next();
        $('ul.categoryProduct li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.categoryProduct ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    $('ul.news__list-category > li > button').click(function() {
        var checkElement = $(this).next().next();
        $('ul.news__list-category li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.news__list-category ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    $('#menuMobile').click(function(){
        $('.navMobile').toggleClass('navMobile__js-open');
    });
    $('.open-sidebar').click(function(){
        $('.productCategory').toggleClass('sidebar__js-open');
        $('.opacity-filter').toggleClass('opacity-filter--true');
        $("i", this).toggleClass("fa-arrow-right fa-arrow-left");
    });
    $('.gallery-slider li').click(function () {
        var img = $(this).attr('img');
        $('#galleryModal .modal-body').empty().append('<figure class="lazy gallery__image" style="background-image: url('+img+')"></figure>');
        $('#galleryModal').modal('show');
    });


});