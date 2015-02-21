process.on("uncaughtException", function(exception) {
    console.log(exception)
})

var gulp = require("gulp")
var browserify = require("browserify")

var del = require("del")
var vinyl_buffer = require("vinyl-buffer")
var vinyl_source = require("vinyl-source-stream")

gulp.task("default", ["build"])

gulp.task("build", function() {
    del(["./build"], function() {
        gulp.start([
            "build:markup",
            "build:scripts",
            "build:styles"
        ])
    })
})

gulp.task("build:markup", function() {
    gulp.src("./source/index.html")
        .pipe(gulp.dest("./build"))
})

gulp.task("build:scripts", function() {
    browserify("./source/index.js").bundle()
        .pipe(vinyl_source("index.js"))
        .pipe(gulp.dest("./build"))
})

gulp.task("build:styles", function() {
    gulp.src("./source/index.css")
        .pipe(gulp.dest("./build"))
})

gulp.task("reload", function() {
    if(window && window.location) {
        window.location.reload()
    }
})
