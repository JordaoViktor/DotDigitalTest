const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const babel = require('gulp-babel');
const cssimport = require('gulp-cssimport');
const htmlmin = require('gulp-htmlmin');

javaScript = () => {
    return src('src/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(minifyJS())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('public/'))
};

css = () => {
    return src('src/style/*.css')
        .pipe(cssimport())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ extname:'.min.css' }))
        .pipe(dest('public/'))

};
html = () => {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('public/'))
};
images = () => {
    return src('src/assets/*.jpg')
        .pipe(image())
        .pipe(dest('public/'))
};


exports.default = parallel(javaScript, css, images, html);
