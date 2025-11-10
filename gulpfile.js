const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const connect = require('gulp-connect');

// File paths
const paths = {
    src: {
        html: 'src/*.html',
        pages: 'src/pages/**/*.html',
        components: 'src/components/*.html',
        styles: 'src/styles/**/*',
        scripts: 'src/scripts/**/*',
        assets: 'src/assets/**/*',
        images: 'src/images/**/*'
    },
    dist: {
        base: 'dist/',
        pages: 'dist/pages/',
        styles: 'dist/styles/',
        scripts: 'dist/scripts/',
        assets: 'dist/assets/',
        images: 'dist/images/'
    }
};

// HTML processing with includes
gulp.task('html', function() {
    return gulp.src(paths.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            context: {
                // You can add global variables here
                siteName: 'SVASAMM',
                year: new Date().getFullYear()
            }
        }))
        .pipe(gulp.dest(paths.dist.base))
        .pipe(connect.reload());
});

// HTML processing for pages subdirectory
gulp.task('pages', function() {
    return gulp.src(paths.src.pages)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            context: {
                siteName: 'SVASAMM',
                year: new Date().getFullYear()
            }
        }))
        .pipe(gulp.dest(paths.dist.pages))
        .pipe(connect.reload());
});

// Copy styles
gulp.task('styles', function() {
    return gulp.src(paths.src.styles)
        .pipe(gulp.dest(paths.dist.styles))
        .pipe(connect.reload());
});

// Copy scripts
gulp.task('scripts', function() {
    return gulp.src(paths.src.scripts)
        .pipe(gulp.dest(paths.dist.scripts))
        .pipe(connect.reload());
});

// Copy assets
gulp.task('assets', function() {
    return gulp.src(paths.src.assets, { allowEmpty: true })
        .pipe(gulp.dest(paths.dist.assets));
});

gulp.task('images', function() {
    return gulp.src(paths.src.images, {
        allowEmpty: true,
        encoding: false  // This preserves binary files
    })
        .pipe(gulp.dest(paths.dist.images));
});

// Development server
gulp.task('serve', function() {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 3000,
        host: '0.0.0.0'
    });
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch([paths.src.html, paths.src.components], gulp.series('html'));
    gulp.watch([paths.src.pages, paths.src.components], gulp.series('pages'));
    gulp.watch(paths.src.styles, gulp.series('styles'));
    gulp.watch(paths.src.scripts, gulp.series('scripts'));
    gulp.watch(paths.src.assets, gulp.series('assets'));
    gulp.watch(paths.src.images, gulp.series('images'));
});

// Build all assets
gulp.task('build', gulp.parallel('html', 'pages', 'styles', 'scripts', 'assets', 'images'));

// Development workflow
gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));

// Default task
gulp.task('default', gulp.series('build'));