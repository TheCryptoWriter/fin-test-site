var html = "";
$.ajax({
    // the number in the url is the id for the blog
    url: "https://www.googleapis.com/blogger/v3/blogs/7065707193793375312/posts?fetchImages=true&maxResults=3&alt=JSON&key=AIzaSyDQ_Tq-zxovjrEMMxTULkQVBHqvzPW-rGg",
    dataType: "json",
    success: (data) => {
        $.each(data.items, (_index, value) => {
                html += "<li class='media'><figure class='d-flex'><img style='width:64px;height:64px;' src=" + value.images[0].url + "></figure><a href='" + value.url + "'>" + value.title + "</a></li>";
            }), // end each method
            $("#posts").html(html);
    }, // end ajax options
});
// end ajax and ready methods

$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        var $logo = $('#NavbarLogo');
        var $navbarNav = $('.navbar-nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.hasClass('scrolled')) $logo.attr('src', '/Content/fincompliance2021/images/logos/logo2.png')
        else($logo.attr('src', '/Content/fincompliance2021/images/logos/logo.png'));
        if ($nav.hasClass('scrolled')) $navbarNav.addClass('bg-white')
        else($navbarNav.removeClass('bg-white'));
    });

});

window.onload = function() {
    var t;
    window.jQuery ? (t = jQuery)(".counter").each(function() {
        var n = t(this),
            o = n.text();
        n.text("");
        var e = n.data("duration");
        if (void 0 !== n.data("easing")) var a = n.data("easing");
        else a = "swing";
        t({
            countNum: n.text()
        }).animate({
            countNum: o
        }, {
            duration: e,
            easing: a,
            step: function() {
                n.text(Math.floor(this.countNum))
            },
            complete: function() {
                n.text(this.countNum)
            }
        })
    }) : console.error("Error: jQuery is not loaded - counter.js")
};

/*
$.get('/includes/footer.html', function (response) {
    console.log("footer");
    $('#include-footer').html(response);
});

$.get('/includes/header.html', function (response) {
    console.log(header);
    $('#include-header').html(response);
});
*/
$(".more-info").click(function (event) {
  event.preventDefault();
  this.blur(); // Manually remove focus from clicked link.
  $.get(this.target, function (target) {
    $(html).appendTo("body").modal();
  });
  var target;
  if (target) {
    target.appendTo("body");
    target = null;
  } else {
    target = $(".modal").detach();
  }
});
$('#loginAjax').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#manual-ajax').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#checkoutFirm').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#checkoutVendor').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#checkoutPaidFirm').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#checkoutPaidVendor').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});
$('#checkoutStudent').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});

$('#checkoutPortal').click(function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.
    $.get(this.href, function(html) {
        $(html).appendTo('body').modal();
    });
    var html;
    if (html) {
        html.appendTo('body');
        html = null;
    } else {
        html = $('.modal').detach()
    };
});



$('#Overview').on('load', function(event) {
    event.preventDefault();
    this.blur(); // Manually remove focus from clicked link.

    $.get(this.href, function(html) {

        $(html).appendTo('body').modal();
    });
    var html;
    setTimeout(function() {
            if (html) {
                html.appendTo('body');
                html = null;
            } else {
                html = $('.modal').detach()
            };
        },
        5000)
});





$('.owl-carousel').owlCarousel({
    loop: true,
    items: 2,
    margin: 10,
    center: true,
    responsiveClass: true,
    padding: 20,
    autoplay: true,
    autoplaySpeed: 700
})