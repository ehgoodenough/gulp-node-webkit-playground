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
            "build:scripts"
        ])
    })
})

gulp.task("build:scripts", function() {
    browserify("./source/index.js").bundle()
        .pipe(vinyl_source("index.js"))
        .pipe(gulp.dest("./build"))
})

gulp.task("watch", function() {
    gulp.watch("./source/**/*.js", ["build:scripts"])
})

gulp.task("reload", function() {
    if(window && window.location) {
        window.location.reload()
    }
})
