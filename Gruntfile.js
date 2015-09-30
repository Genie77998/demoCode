module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);
    grunt.file.defaultEncoding = 'utf-8';
    var config = {
        filePath: {
            cwd: 'lyq/App/',  //开发目录名
            dest: 'dev/'  //压缩目录名
        },
        version: new Date().toString()
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: config,
        imagemin: { // 压缩图片
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.cwd%>', //路劲
                    src: '**/*.{jpeg,jpg,png,gif}', //文件
                    dest: '<%=config.filePath.dest%>' //输出路劲
                }]
            }
        },
        uglify: { //压缩js
            //文件头部输出信息
            my_target: {
                options: {
                    report: "gzip", //输出压缩率，可选的值有 false(不输出信息)，gzip min
                    banner: '/*\n @info: <%= pkg.name %> \n @version: <%= config.version %> \n*/\n',
                    ASCIIOnly: true,
                    beautify: false,
                    mangle: {
                        except: ["require"] //如果是多个可以使用 ["require","exports","module","jQuery"]
                    },
                    preserveComments: 'false', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer: '\n/* @Author <%= pkg.author %> @time of last unpdate:<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */', //添加footer
                    compress: {
                        global_defs: {
                            "DEBUG": false,
                            PROD: true
                        },
                        dead_code: true,
                        pure_funcs: ['console.log'] //["console.log","console.time","console.timeEnd","console.info"]//去除语句
                    }
                },
                files: [{
                    /*
						expand: true,//相对路径
						cwd: '<%=pkg.filePath.js.default%>',//路劲
						src: '<%=pkg.filePath.js.src%>',//文件
						dest: '<%=pkg.filePath.js.output%>',//输出路劲
						ext: '<%=pkg.filePath.js.ext%>'//后缀
					*/
                    expand: true,
                    cwd: '<%=config.filePath.cwd%>',
                    src: '**/*.js',
                    dest: '<%=config.filePath.dest%>'
                }]
            }
        },
        cssmin: {//压缩css文件
            dist: {
                options: {
                    report: 'gzip'
                },
                files: [{
                    expand: true, //相对路径
                    cwd: '<%=config.filePath.cwd%>', //路劲
                    src: '**/*.css', //文件
                    dest: '<%=config.filePath.dest%>' //输出路劲
                }]
            }
        },
        watch : {//监听sass
            scss: {
                files: ['<%=config.filePath.cwd%>/**/*.scss'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            dev: {//编译开发版本css
                options: {                     
                    sourcemap: 'none',
                    style: 'expanded',
                    noCache : true,
                    lineNumbers : true
                },
                files: [{
                    expand: true,
                    cwd: '<%=config.filePath.cwd%>/sass',
                    src: ['*.scss'],
                    dest: '<%=config.filePath.cwd%>/css',
                    ext: '.css'
                }]
            },
            build: { //编译压缩版本css
                options: {                     
                    sourcemap: 'none',
                    style: 'compressed',
                    noCache : true,
                    lineNumbers : false
                },
                files: [{
                    expand: true,
                    cwd: '<%=config.filePath.cwd%>/sass',
                    src: ['*.scss'],
                    dest: '<%=config.filePath.cwd%>/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            defaults: {//复制文件
                expand: true,
                cwd: '<%=config.filePath.cwd%>/',
                src: ['**'],
                dest: '<%=config.filePath.dest%>'
            }
        },
        clean: {
            dev: { //清除发布版本目录
                src: '<%=config.filePath.dest%>'
            },
            clear : { //清除发布版本sass目录文件
                src : '<%=config.filePath.dest%>/sass'
            }
        }
    });

    grunt.registerTask('default', ['clean:dev','copy','sass:build','uglify', 'imagemin', 'cssmin','clean:clear']); //生成发布版本
    grunt.registerTask('dev', ['clean:dev','sass:dev','watch']);  //清除发布的目录  编译开发版本css  监听sass文件变化实时编译
};
