# Sample With Custom

The best jQuery plugin ever.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/samples-of-arukoh/jquery.sample-with-custom/master/dist/jquery.sample-with-custom.min.js
[max]: https://raw.github.com/samples-of-arukoh/jquery.sample-with-custom/master/dist/jquery.sample-with-custom.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.sample-with-custom.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation

```
$ sudo apt-get install nodejs npm
$ sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
$ node -v
v0.10.25
$ npm -v
1.3.10
$ sudo npm install -g grunt-cli grunt-init
$ mkdir ~/.grunt-init/
$ git clone -b custom https://github.com/arukoh/grunt-init-jquery.git ~/.grunt-init/jquery-custom
$ mkdir -p /path/to/jquery.sample-with-custom
$ cd /path/to/jquery.sample-with-custom/
$ grunt-init jquery-custom
Running "init:jquery-custom" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"jquery-custom" template notes:
Project name should not contain "jquery" or "js" and should be a unique ID not
already in use at plugins.jquery.com. Project title should be a human-readable
title, and doesn't need to contain the word "jQuery", although it may. For
example, a plugin titled "Awesome Plugin" might have the name "awesome-plugin".

For more information, please see the following documentation:

Naming Your Plugin      http://plugins.jquery.com/docs/names/
Publishing Your Plugin  http://plugins.jquery.com/docs/publish/
Package Manifest        http://plugins.jquery.com/docs/package-manifest/

Please answer the following:
[?] Project name (sample-with-custom) 
[?] Project title (Sample With Custom) 
[?] Description (The best jQuery plugin ever.) 
[?] Version (0.1.0) 
[?] Project git repository (git://github.com/samples-of-arukoh/jquery.sample-with-custom.git) 
[?] Project homepage (https://github.com/samples-of-arukoh/jquery.sample-with-custom) 
[?] Project issues tracker (https://github.com/samples-of-arukoh/jquery.sample-with-custom/issues) 
[?] Licenses (MIT) 
[?] Author name (arukoh) 
[?] Author email () 
[?] Author url (none) 
[?] Required jQuery version (*) 
[?] Do you need to make any changes to the above before continuing? (y/N) 

Writing .gitignore...OK
Writing .jshintrc...OK
Writing CONTRIBUTING.md...OK
Writing Gruntfile.js...OK
Writing README.md...OK
Writing libs/jquery-loader.js...OK
Writing libs/jquery/jquery.js...OK
Writing libs/qunit/qunit.css...OK
Writing libs/qunit/qunit.js...OK
Writing src/.jshintrc...OK
Writing src/jquery.sample-with-custom.js...OK
Writing test/.jshintrc...OK
Writing test/sample-with-custom.html...OK
Writing test/sample-with-custom_test.js...OK
Writing LICENSE-MIT...OK
Writing package.json...OK
Writing sample-with-custom.jquery.json...OK

Initialized from template "jquery-custom".
You should now install project dependencies with npm install. After that, you
may execute project tasks with grunt. For more information about installing
and configuring Grunt, please see the Getting Started guide:

http://gruntjs.com/getting-started

Done, without errors.
$ npm install
$ grunt
Running "jshint:gruntfile" (jshint) task
>> 1 file lint free.

Running "jshint:src" (jshint) task
>> 1 file lint free.

Running "jshint:test" (jshint) task
>> 1 file lint free.

Running "qunit:files" (qunit) task
Testing test/sample-with-custom.html .......OK
>> 8 assertions passed (43ms)

Running "clean:files" (clean) task

Running "concat:dist" (concat) task
File "dist/jquery.sample-with-custom.js" created.

Running "uglify:dist" (uglify) task
File "dist/jquery.sample-with-custom.min.js" created.

Done, without errors.
```

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
