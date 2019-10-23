/*
 *  Copyright 2019 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  Created by: Michal Wielinski
 
 *
 */

var gulp = require('gulp'),
debug = require('gulp-debug'),
cleanDest = require('gulp-clean-dest'),
log = require('gulp-util').log,
gutil = require('gulp-util'),
es = require('event-stream'),
appRoot = require('app-root-path'),
path = require('path'),
path = require('path'),
git = require('gulp-git');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('clone-documents', done => {
    git.clone('git@git.corp.adobe.com:AdobeDocs/testingrepo-developer.en.git',{cwd: "../"},function(err){
        if (err){
            console.log('clone-documents error', err);
            done();
        }else{
            done();
        }
    });
})

gulp.task('checkout-master', done => {
  git.checkout('master', function (err) {
    if (err){
        console.log('checking out master error',err);
        throw err;
        done();
    }
    else {
        console.log('checking out master',err);
        done();
    }
  });
});

gulp.task('pull-new-documents', done => {
    git.pull('origin', 'master',{cwd: "../testingrepo-developer.en/"},function(err,stdout){
        if (err){
            console.log('pulling new documents error',err);
            done();
        }else{
            console.log('pulling new documents',stdout);
            done();
        }
    });
})

gulp.task('pull-kirby-documents', done => {
    git.pull('origin', 'master',function(err){
        if (err){
            console.log('pull-kirby-documents error',err);
            done();
        }else{
            console.log('pull-kirby-documents done');
            done();
        }
    });
})


gulp.task('move-developer', function() {
    return gulp.src('../testingrepo-developer.en/developer/**/*.{png,gif,jpg,md,PNG,GIF,JPG,MD}')
    .pipe(debug())
    .pipe(cleanDest('developer'))
    .pipe(gulp.dest('developer'));
});

gulp.task('move-help', function() {
    return gulp.src('../testingrepo-developer.en/help/**/*.{png,gif,jpg,md,PNG,GIF,JPG,MD}')
    .pipe(debug())
    .pipe(cleanDest('help'))
    .pipe(gulp.dest('help'));
});


gulp.task('add-developer-documents', function() {
    return gulp.src('./developer/*')
    .pipe(git.add())
})

gulp.task('add-help-documents', function() {
    return gulp.src('./help/*')
    .pipe(git.add())
})


gulp.task('commit-documents', function() {
    return gulp.src('.')
      .pipe(git.commit('auto import ' + (new Date).toISOString()));
});

gulp.task('push-new-documents', done => {
    git.push('origin', 'master',function(err,stdout){
        if (err){
            console.log('pushing new documents error',err);
            done();
        }else{
            console.log('pushing new documents',stdout);
            done();
        }
    });
});


gulp.task('docsImport',gulp.series('clone-documents','pull-new-documents','checkout-master','pull-kirby-documents','move-developer', 'move-help', 'add-developer-documents', 'add-help-documents','commit-documents','push-new-documents', function(done) {
    console.log('docsImport...');
    /* move in the files
     * https://git.corp.adobe.com/AdobeDocs/testingrepo-developer.en
     */
    done();
}))







