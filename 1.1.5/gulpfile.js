var gulp = require('gulp'),
    rename = require('gulp-rename'),
    gulpKmd = require('gulp-kmd')
    kmc = require('gulp-kmc'),
    minify = require('gulp-minify'),
    gulpJoycss =require('gulp-joycss'),
    packageJson = require('./package.json');

kmc.config({
    depFilePath : './build/mods.js',  
    packages : [
        {
            name : 'kg/editor-plugins/' + packageJson.version,
            combine : false,  
            base : './lib'   
        }
    ]
});

gulp.task('kmc', function(cb){
    gulp.src('./lib/**/*.js')
        .pipe(gulpKmd())
        .pipe(kmc.convert({
            deps : 'mods.js',
            define : true
        }))
        .pipe(kmc.combo())
        .pipe(minify())
        .pipe(rename(function(path){
            if(path.basename.indexOf('-min') > -1){
                path.basename = path.basename.replace('-min', '');
            }else{
                path.basename = path.basename + '-debug';
            }
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('buildCss', function(cb){
    gulp.src('assets/*.less')
        .pipe(gulpJoycss({
            layout:'close',
            'editor.less' : {
                imgPath : 'build/assets',
                dest : 'build/assets/editor.css',
                prefixUrl : '/kg/editor-plugins/' + packageJson.version + '/assets'
            },
            'iframe.less' : {
                dest : 'build/assets/iframe.css'
            }
        }))
        .pipe(gulp.dest('build/assets'));
});

gulp.task('buildApi', function(cb){
    var process = require('child_process');
    process.exec('node ./node_modules/yuidocjs/lib/cli.js .', function(){
        cb();
    });
})

gulp.task('server', function () {
    var app = require('express')();
    var fs = require('fs');
    var path = require('path');
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    app.use(serveIndex(process.cwd(), {
        hidden: true,
        view: 'details'
    }));
    app.use('/lib/', function (req, res, next) {
        var filePath = path.resolve(process.cwd(), 'lib', req.path.substring(1));
        var code = fs.readFileSync(filePath, 'utf-8');
        res.set('content-type', 'application/javascript;charset=utf-8');
        res.end('define(function(require,exports,module){' + code + '});');
    });
    app.use(serveStatic(process.cwd()));
    app.listen(8001);
});

gulp.task('default', ['kmc', 'buildCss', 'buildApi']);