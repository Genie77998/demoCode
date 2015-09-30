1.运行grunt命令生成发布版本（包括sass编译 图片压缩 js压缩）
2.运行grunt dev 对开发版本进行sass实时编译 
3._file.json文件更改app的值 则表示对当前的文件夹下的App项目进行编译
4.生成的发布版本为根目录下的dist目录


注：首次运行需要安装grunt插件包  在根目录新建_file.json文件
 格式为
 {
    "app":"你的项目路径 例如：'lyq'"
 }
 
 