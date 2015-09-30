!function(n){"use strict";var t=function(n,o){return t["string"==typeof o?"compile":"render"].apply(t,arguments)};t.version="2.0.4",t.openTag="<%",t.closeTag="%>",t.isEscape=!0,t.isCompress=!1,t.parser=null,t.render=function(n,o){var e=t.get(n)||r({id:n,name:"Render Error",message:"No Template"});return e(o)},t.compile=function(n,e){function i(o){try{return new l(o,n)+""}catch(a){return u?r(a)():t.compile(n,e,!0)(o)}}var c=arguments,u=c[2],s="anonymous";"string"!=typeof e&&(u=c[1],e=c[0],n=s);try{var l=a(n,e,u)}catch(w){return w.id=n||e,w.name="Syntax Error",r(w)}return i.prototype=l.prototype,i.toString=function(){return l.toString()},n!==s&&(o[n]=i),i};var o=t.cache={},e=t.helpers=function(){var n=function(t,o){return"string"!=typeof t&&(o=typeof t,"number"===o?t+="":t="function"===o?n(t.call(t)):""),t},o={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},e=function(t){return n(t).replace(/&(?![\w#]+;)|[<>"']/g,function(n){return o[n]})},r=Array.isArray||function(n){return"[object Array]"==={}.toString.call(n)},a=function(n,t){if(r(n))for(var o=0,e=n.length;e>o;o++)t.call(n,n[o],o,n);else for(o in n)t.call(n,n[o],o)};return{$include:t.render,$string:n,$escape:e,$each:a}}();t.helper=function(n,t){e[n]=t},t.onerror=function(t){var o="Template Error\n\n";for(var e in t)o+="<"+e+">\n"+t[e]+"\n\n";n.console&&console.error(o)},t.get=function(e){var r;if(o.hasOwnProperty(e))r=o[e];else if("document"in n){var a=document.getElementById(e);if(a){var i=a.value||a.innerHTML;r=t.compile(e,i.replace(/^\s*|\s*$/g,""))}}return r};var r=function(n){return t.onerror(n),function(){return"{Template Error}"}},a=function(){var n=e.$each,o="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",r=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,a=/[^\w$]+/g,i=new RegExp(["\\b"+o.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),c=/^\d[^,]*|,\d[^,]*/g,u=/^,+|,+$/g,s=function(n){return n.replace(r,"").replace(a,",").replace(i,"").replace(c,"").replace(u,"").split(/^$|,+/)};return function(o,r,a){function i(n){return I+=n.split(/\n/).length-1,t.isCompress&&(n=n.replace(/[\n\r\t\s]+/g," ").replace(/<!--.*?-->/g,"")),n&&(n=L[1]+w(n)+L[2]+"\n"),n}function c(n){var o=I;if(g?n=g(n):a&&(n=n.replace(/\n/g,function(){return I++,"$line="+I+";"})),0===n.indexOf("=")){var r=!/^=[=#]/.test(n);if(n=n.replace(/^=[=#]?|[\s;]*$/g,""),r&&t.isEscape){var i=n.replace(/\s*\([^\)]+\)/,"");e.hasOwnProperty(i)||/^(include|print)$/.test(i)||(n="$escape("+n+")")}else n="$string("+n+")";n=L[1]+n+L[2]}return a&&(n="$line="+o+";"+n),u(n),n+"\n"}function u(t){t=s(t),n(t,function(n){n&&!E.hasOwnProperty(n)&&(l(n),E[n]=!0)})}function l(n){var t;"print"===n?t=U:"include"===n?(h.$include=e.$include,t=y):(t="$data."+n,e.hasOwnProperty(n)&&(h[n]=e[n],t=0===n.indexOf("$")?"$helpers."+n:t+"===undefined?$helpers."+n+":"+t)),$+=n+"="+t+","}function w(n){return"'"+n.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}var d=t.openTag,f=t.closeTag,g=t.parser,p=r,m="",I=1,E={$data:1,$id:1,$helpers:1,$out:1,$line:1},h={},$="var $helpers=this,"+(a?"$line=0,":""),v="".trim,L=v?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],B=v?"$out+=$text;return $text;":"$out.push($text);",U="function($text){"+B+"}",y="function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);"+B+"}";n(p.split(d),function(n){n=n.split(f);var t=n[0],o=n[1];1===n.length?m+=i(t):(m+=c(t),o&&(m+=i(o)))}),p=m,a&&(p="try{"+p+"}catch(e){"+"throw {"+"id:$id,"+"name:'Render Error',"+"message:e.message,"+"line:$line,"+"source:"+w(r)+".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')"+"};"+"}"),p=$+L[0]+p+"return new String("+L[3]+");";try{var x=new Function("$data","$id",p);return x.prototype=h,x}catch(C){throw C.temp="function anonymous($data,$id) {"+p+"}",C}}}();"function"==typeof define?define(function(){return t}):"undefined"!=typeof exports&&(module.exports=t),n.template=t}(this),function(n){n.openTag="{{",n.closeTag="}}",n.parser=function(t){t=t.replace(/^\s/,"");var o=t.split(" "),e=o.shift(),r=o.join(" ");switch(e){case"if":t="if("+r+"){";break;case"else":o="if"===o.shift()?" if("+o.join(" ")+")":"",t="}else"+o+"{";break;case"/if":t="}";break;case"each":var a=o[0]||"$data",i=o[1]||"as",c=o[2]||"$value",u=o[3]||"$index",s=c+","+u;"as"!==i&&(a="[]"),t="$each("+a+",function("+s+"){";break;case"/each":t="});";break;case"echo":t="print("+r+");";break;case"include":t="include("+o.join(",")+");";break;default:n.helpers.hasOwnProperty(e)?t="=#"+e+"("+o.join(",")+");":(t=t.replace(/[\s;]*$/,""),t="="+t)}return t}}(this.template);
