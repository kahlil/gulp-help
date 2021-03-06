var gulp = require('../../index.js')(require('gulp'), {aliases: ['h', '?']});

// --------------------------------------------------------------------------------------
// tasks
// --------------------------------------------------------------------------------------

gulp.task('build', 'build assets.', ['sass', 'uglify'], function () {
  console.log('building...');
}, {
  options: {
    'dev': 'Set build type to DEV',
    'ist': 'Set build type to IST',
    'qa': 'Set build type to QA'
  },
  aliases: ['b']
});

gulp.task('sass', 'Compile sass files', function () {
  console.log('sassing...');
});

gulp.task('uglify', 'Uglify js files', function () {
  console.log('uglifying...');
});

gulp.task('lint', 'Lints all server side js', function () {
  console.log('linting...');
});

gulp.task('ci', 'Run all CI verification', ['lint']); // TODO support this here: {aliases: ['continuous', 'CI']}

// Separate task so "watch" can easily be overridden.
gulp.task('ci-watch', false, function () {
  gulp.watch('./lib/**/*.js', ['lint']);
});

gulp.task('watch', 'Watch files and run ci validation on change', ['ci-watch']);

gulp.task('combo', ['ci']);

gulp.task('a-super-long-task-name', ['build']);
gulp.task('a-super-long-task-name-that-is-ignored-and-not-counted-for-margins', false, ['build']);
gulp.task('a-super-long-task-name-2', 'testing', ['build'], function () {
}, {
  options: {
    'a-super-long-options-name-to-test-margin': 'cool description bro, now make me a sammich'
  }
});

gulp.task('version', 'prints the version.', [], function () {
  // ...
}, {
  options: {
    'env=prod': 'description of env, perhaps with available values',
    'key=val': 'description of key & val'
  }
});

gulp.task('do-things', function () {
  console.log('did things');
}, {aliases: ['things', 'the-things']});

gulp.task('i-will-overwrite-the-message', 'ERROR: message not overwritten');
gulp.task('i-will-overwrite-the-message', 'success! message overwritten');

gulp.task('THIS-TASK-SHOULD-NOT-BE-DISPLAYED', function () {}); // perhaps comes from separate library
gulp.task('THIS-TASK-SHOULD-NOT-BE-DISPLAYED', false, function () {});

gulp.task('empty-task', function () {});
