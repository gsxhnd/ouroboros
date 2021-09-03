import gulp from "gulp";
import uglify from "gulp-uglify";
import clean from "gulp-clean";
import ts from "gulp-typescript";

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", function () {
  return gulp.src("./dist/main").pipe(clean());
});

gulp.task("build", () => {
  return (
    tsProject
      .src()
      .pipe(tsProject())
      // .js.pipe(uglify())
      .pipe(gulp.dest("dist/main"))
  );
});
