var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");

gulp.task("sass", function() {
  return gulp.src("./styles.scss")
  .pipe(sass())
  .pipe(gulp.dest("./"));
});

gulp.task("webserver", function() {
  gulp.src("./")
  .pipe(webserver({
    open: true
  }));
});


gulp.task("watch", function() {
  gulp.watch("./styles.scss", ["sass"]);
});

gulp.task("default", ["watch", "webserver"]);
