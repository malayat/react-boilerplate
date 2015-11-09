var gulp = require('gulp')
var connect = require('gulp-connect') //Runs a local dev server
var open = require('gulp-open') //Open a URL in a web browser
var concat = require('gulp-concat') //Concatenates files
var browserify = require('browserify') // Transforms React JSX to JS and ES6 to ES5
var babelify = require('babelify') // Transforms React JSX to JS and ES6 to ES5
var source = require('vinyl-source-stream') // Use conventional text streams with Gulp
var htmlMinifier = require('gulp-html-minifier') //Minify HTML
var uglify = require('gulp-uglify') //Uglify javascript
var buffer = require('vinyl-buffer')

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/js/**/*.jsx',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
		img: 'node_modules/bootstrap/dist/fonts/**.*',
		dist: './dist',
		mainJs: './src/js/index.jsx'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('js', function() {
  browserify({
    entries: './src/js/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .on('error', console.error.bind(console))
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(config.paths.dist + '/scripts'))
  .pipe(connect.reload())
});

gulp.task('html', function() {
  return gulp.src(config.paths.html)
        .pipe(htmlMinifier({collapseWhitespace: true}))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('icons', function() {
	gulp.src(config.paths.img)
		.pipe(gulp.dest(config.paths.dist + '/fonts'))
});

gulp.task('watch', function() {
  gulp.watch(config.paths.js, ['js'])
  gulp.watch(config.paths.html, ['html'])
})

gulp.task('build', ['html', 'js', 'css', 'icons'])

gulp.task('default', ['html', 'js', 'css', 'icons', 'open', 'watch'])
