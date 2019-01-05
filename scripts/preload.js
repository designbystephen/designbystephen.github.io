var imgCount = 0

var images = [
    'assets/images/painted_avatar-2017-03-13.png',
    'assets/images/brushed_avatar-2017-03-13.png',
    'assets/images/halftone_avatar-2017-03-13.png'
];

function preload(images, onload) {
    images.forEach(function(src){
        var img = new Image();
        if (onload) img.onload = onload;
    
        img.src = src;
    });
};

(function() {
    // preload images
    preload(images, function(){ imgCount++; });
}());
