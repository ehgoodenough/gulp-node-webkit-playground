var gulp = require("gulp");

gulp.task("reload", function() {
    if(window && window.location) {
        window.location.reload()
    }
})

gulp.watch("source/**/*", ["reload"])
