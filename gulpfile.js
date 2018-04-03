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
		'src/js/useful_functions.js',
		'src/js/common.js',
		'src/js/commercial.js',
		'src/js/main.js',
		'src/js/news.js'
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
		'src/js/common.js',
		'src/js/commercial.js'
	])
	.pipe(concat('commercial.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// commercial page task end

// news page task
gulp.task('js-news', function() {
	return gulp.src([
		'src/js/useful_functions.js',
		'src/js/common.js',
		'src/js/news.js'
	])
	.pipe(concat('news.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({stream: true}));
});
// news page task end

// main page start
gulp.task('js', ['common-js', 'js-commercial', 'js-news'], function() {
	return gulp.src([
		'src/js/libs/slick.min.js',
		'src/js/useful_functions.js',
		'src/js/common.js',
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
		//proxy: "http://localhost:80/arsenalhouse/dist",
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
