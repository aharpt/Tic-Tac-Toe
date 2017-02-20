var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");

gulp.task("sass", function() {
  return gulp.src("./styles.scss")
  .pipe(sass())
  .pipe(gulp.dest("./"));
});

gulp.task("watch", function() {
  gulp.watch("./styles.scss", ["sass"]);
});
