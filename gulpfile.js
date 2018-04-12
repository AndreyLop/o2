var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify");

// Скрипты проекта

gulp.task('common-js', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// All scripts task start
gulp.task('all-js', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/libs/magnific-popup.js',
		'src/js/useful_functions.js',
		'src/js/common.js',
		'src/js/commercial.js',
		'src/js/day-in-o2.js',
		'src/js/advantages.js',
		'src/js/residence.js',
		'src/js/construction.js',
		'src/js/values.js',
		'src/js/developer.js',
		'src/js/main.js',
		'src/js/news.js',
		'src/js/location.js',
		'src/js/choose-apartment.js'
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// All scripts task end

// commercial page task
gulp.task('js-commercial', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/commercial.js'
	])
	.pipe(concat('commercial.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// commercial page task end

// construction page task
gulp.task('js-construction', function() {
	return gulp.src([
		'src/js/libs/magnific-popup.js',
		'src/js/useful_functions.js',
		'src/js/construction.js'
	])
	.pipe(concat('construction.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// construction page task end

// residence page task
gulp.task('js-residence', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/residence.js'
	])
	.pipe(concat('residence.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// residence page task end

// day-in-o2 start
gulp.task('js-day-in-o2', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/libs/slick.min.js',
		'src/js/day-in-o2.js'
	])
	.pipe(concat('day-in-o2.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// day-in-o2 end

// eco-farm page task
gulp.task('js-eco-farm', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/eco-farm.js'
	])
	.pipe(concat('eco-farm.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// eco-farm page task end

// location page task
gulp.task('js-location', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/location.js'
	])
	.pipe(concat('location.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// location page task end

//choose-apartment page task
gulp.task('js-choose-apartment', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/choose-apartment.js'
	])
	.pipe(concat('choose-apartment.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
//choose-apartment page task end

// developer page task
gulp.task('js-developer', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/useful_functions.js',
		'src/js/developer.js'
	])
	.pipe(concat('developer.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// developer page task end

// advantages page task
gulp.task('js-advantages', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/advantages.js'
	])
	.pipe(concat('advantages.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// advantages page task end

// news page task
gulp.task('js-news', function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/useful_functions.js',
		'src/js/news.js'
	])
	.pipe(concat('news.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// news page task end

// values page task
gulp.task('js-values', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/values.js'
	])
	.pipe(concat('values.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// values page task end

// main page start
gulp.task('js', [
	'common-js', 
	'js-commercial', 
	'js-news', 
	'js-day-in-o2',
	'js-eco-farm',
	'js-advantages',
	'js-residence',
	'js-developer',
	'js-values',
	'js-construction',
	'js-location',
	'js-choose-apartment'], function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/useful_functions.js',
		'src/js/main.js'
		])
	.pipe(concat('main.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// main page end

gulp.task('browser-sync', function() {
	browserSync({
		// proxy: "http://localhost:80/o2/dist",
		proxy: "o2/dist",
    	notify: false // Отключаем уведомления
	});
});

gulp.task('sass', function() {
	return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch(['libs/**/*.js', 'src/**/*.js'], ['js']);
	gulp.watch('dist/**/*.php', browserSync.reload);
	gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'src/*.html',
		'src/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'src/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'src/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'src/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

/*gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});*/

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
