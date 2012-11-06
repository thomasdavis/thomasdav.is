var _ = require('underscore');
var fs = require('fs');
var glob = require('glob');
var marked = require('marked');


glob("posts/*.md", {}, function (er, files) {
  _.each(files, function(file) {
    console.log(files)
    var filename = file;
    var outputFilename = file.replace('md', 'html');
    var postTemplate = fs.readFileSync('templates/post.html', 'utf8');
    var post = fs.readFileSync(file, 'utf8');
    var content = marked(post);
    var postPage = _.template(postTemplate, {content: content, file: outputFilename});
    fs.writeFileSync(outputFilename, postPage, 'utf8');
  })
})