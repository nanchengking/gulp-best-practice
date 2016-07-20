var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify=require('gulp-browserify');
var ugly=require('gulp-uglify');
var gulpif=require('gulp-if');
var sass=require('gulp-sass')

var env=process.env.NODE_ENV || 'development';
var outputDir='build/development';
gulp.task('jade',function(){
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir))
})

gulp.task('js',function(){
    return gulp.src('src/js/main.js')
        .pipe(browserify({debug:env ==='development'}))
        .pipe(gulpif(env==='production',ugly()))
        .pipe(gulp.dest(outputDir+'/js'))
})

gulp.task('sass',function(){
    var config={}
    if(env==='development'){
        config.sourceComments='map';
    }
    if(env==='production'){
        config.outputStyle='compressed';
    }
    return gulp.src('src/sass/main.sass')
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir+'/css'))
})

gulp.task('watch',function(){
    gulp.watch('src/templates/**/*.jade',['jade']);
    gulp.watch('src/js/**/*.js',['js']);
    gulp.watch('src/sass/**/*.sass',['sass']);

})

gulp.task('default',['js','sass','jade','watch'])