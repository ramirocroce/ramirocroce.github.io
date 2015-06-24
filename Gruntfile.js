module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        less: { 
            dev: { 
                options: { 
                    compress: false
                }, 
                files: { 
                    "ramiro.css": "dev/less/main.less" 
                } 
            } 
        },

        // copy: {
        //     images: {
        //        expand: true,
        //        cwd: 'dev/assets/img',
        //        src: ['**/*.{png,jpg,gif,svg}'],
        //        dest: 'compiled/img'
        //     },
        // },

         concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['javascripts/custom.js'],
            dest: 'js/ramiro.js',
          },
        },

        imagemin: {
         images: {
              files: [{
                  expand: true,
                  cwd: 'dev/assets/img',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'img'
              }],
              options: {
                cache: false
            },
          },
        },

        watch: {
          scripts: {
            files: "less/*.less",
            tasks: ['less'],
            options: {
              spawn: false,
            },
          },
        },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['less', 'imagemin','concat']);
 // grunt.registerTask('prod',['less','imagemin']);



};