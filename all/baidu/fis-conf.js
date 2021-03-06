fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});
fis.match('*.[js,jpg,png,css]', {
    useHash: true
});
fis.match('*.js', { optimizer: fis.plugin('uglify-js') });
fis.match('*.css', { useSprite: true, optimizer: fis.plugin('clean-css') });
fis.match('*.png', { optimizer: fis.plugin('png-compressor') });