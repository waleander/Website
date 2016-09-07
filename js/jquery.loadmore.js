/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $(".thumbnails").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".thumbnails:hidden").slice(0, 4).slideDown();
        if ($(".thumbnails:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 350
        }, 1000);
    });
}); 

