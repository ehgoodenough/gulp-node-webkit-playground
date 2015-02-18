var gulp = require("gulp");

gulp.task("reload", function() {
    if(window && window.location) {
        window.location.reload()
    }
})

gulp.task("default", function() {
	console.log("conglaturations")
})

gulp.task("watch", function() {
	gulp.watch("./source/**/*", ["reload"])
	process.on("uncaughtException", function(exception) {
	    console.log(exception)
	})
})

module.exports.watch = function() {
	gulp.start("watch")
}
