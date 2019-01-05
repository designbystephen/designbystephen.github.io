var WebFontConfig = {
    google: {
        families: ['Source Sans Pro:300,400,700']
    },
    timeout: 2000
};

function async(script, d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = script;
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
};

// async load scripts
async('https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js', document);

// trigger animations with slight delay so catches the users eye
function defer() {
    setTimeout(function() {
        if (imgCount >= images.length) {
            // wait for images to be loaded
            animate();
        } else {
            // recurse and try again
            defer();
        }
    }, 64);
};

// animate content
function animate() {
    document.getElementById('page-header').className += ' animated--slide';
    document.getElementById('page-content').className += ' animated--fade';
    document.getElementById('page-footer').className += ' animated--fade';
};

defer();
