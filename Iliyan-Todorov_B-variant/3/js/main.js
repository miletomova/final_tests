$(function () {
    var $title = $('<h1>');
    $('#container').on('mouseenter', 'img', function () {
        var $this = $(this),
            $imageContainer = $('#img-container'),
            $imagePreview = $imageContainer.find('img'),
            currentImageSrc = $this.attr('src'),
            currentImageAlt = $this.attr('alt');

        $imagePreview.css('width', '600px');
        $imagePreview.attr('src', currentImageSrc);
        $imagePreview.attr('alt', currentImageAlt);
        $title.css('font-size', '66px');
        $title.html(currentImageAlt).prependTo($imageContainer);
    });

});