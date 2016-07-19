var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify=require('gulp-browserify');
var ugly=require('gulp-uglify');
var gulpif=require('gulp-if');
var sass=require('gulp-sass')

var env=process.env.NODE_ENV || 'development';

gulp.task('jade',function(){
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/development'))
})

gulp.task('js',function(){
    return gulp.src('src/js/main.js')
        .pipe(browserify({debug:env ==='development'}))
        .pipe(gulpif(env==='production',ugly()))
        .pipe(gulp.dest('build/development/js'))
})

gulp.task('sass',function(){
    return gulp.src('src/sass/main.sass')
        .pipe(sass({sourceComments:'map'}))
        .pipe(gulp.dest('build/development/css'))
})