/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/

define("js/utils/handle_iframe_binding",["jquery"],function(e){var t=function(t){var r=null;r="undefined"==typeof t?e("iframe, embed"):"undefined"!=typeof t.nodeName?e(t).find("iframe, embed"):t.$("iframe, embed"),n(r)},n=function(t){t.each(function(){if("IFRAME"===e(this).prop("tagName")){var t=e(this).attr("src");if(t){var n="wmode=transparent";if(-1!==t.indexOf("?")){var r=t.split("?");if(-1===r[1].search("wmode=transparent")){var i=r[1],o=r[0];e(this).attr("src",o+"?"+n+"&"+i)}}else 0!==t.lastIndexOf("javascript:",0)&&e(this).attr("src",t+"?"+n)}}else e(this).attr("wmode","transparent")})},r=function(t){if(t){var r=null,i=document.createElement("div");e(i).html(t),r=e(i).find("iframe, embed"),r.length>0&&(n(r),t=e(i).html())}return t};return{iframeBinding:t,iframeBindingHtml:r}}),define("js/utils/templates",["jquery","underscore"],function(e,t){var n=function(n){var r="#"+n+"-tpl",i=e(r).text();return i||console.error("Failed to load "+n+" template"),t.template(i)};return{loadTemplate:n}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define("underscore.string",[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.s=e()}}(function(){var e;return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t){var n=e("./trim"),r=e("./decapitalize");t.exports=function(e,t){return e=n(e).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),t===!0?r(e):e}},{"./decapitalize":10,"./trim":65}],2:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e);var r=t?e.slice(1).toLowerCase():e.slice(1);return e.charAt(0).toUpperCase()+r}},{"./helper/makeString":20}],3:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return n(e).split("")}},{"./helper/makeString":20}],4:[function(e,t){t.exports=function(e,t){return null==e?[]:(e=String(e),t=~~t,t>0?e.match(new RegExp(".{1,"+t+"}","g")):[e])}},{}],5:[function(e,t){var n=e("./capitalize"),r=e("./camelize"),i=e("./helper/makeString");t.exports=function(e){return e=i(e),n(r(e.replace(/[\W_]/g," ")).replace(/\s/g,""))}},{"./camelize":1,"./capitalize":2,"./helper/makeString":20}],6:[function(e,t){var n=e("./trim");t.exports=function(e){return n(e).replace(/\s\s+/g," ")}},{"./trim":65}],7:[function(e,t){var n=e("./helper/makeString"),r="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",i="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";r+=r.toUpperCase(),i+=i.toUpperCase(),i=i.split(""),r+="ß",i.push("ss"),t.exports=function(e){return n(e).replace(/.{1}/g,function(e){var t=r.indexOf(e);return-1===t?e:i[t]})}},{"./helper/makeString":20}],8:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){return e=n(e),t=n(t),0===e.length||0===t.length?0:e.split(t).length-1}},{"./helper/makeString":20}],9:[function(e,t){var n=e("./trim");t.exports=function(e){return n(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},{"./trim":65}],10:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return e=n(e),e.charAt(0).toLowerCase()+e.slice(1)}},{"./helper/makeString":20}],11:[function(e,t){function n(e){for(var t=e.match(/^[\s\\t]*/gm),n=t[0].length,r=1;r<t.length;r++)n=Math.min(t[r].length,n);return n}var r=e("./helper/makeString");t.exports=function(e,t){e=r(e);var i,o=n(e);return 0===o?e:(i="string"==typeof t?new RegExp("^"+t,"gm"):new RegExp("^[ \\t]{"+o+"}","gm"),e.replace(i,""))}},{"./helper/makeString":20}],12:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/toPositive");t.exports=function(e,t,i){return e=n(e),t=""+t,i="undefined"==typeof i?e.length-t.length:Math.min(r(i),e.length)-t.length,i>=0&&e.indexOf(t,i)===i}},{"./helper/makeString":20,"./helper/toPositive":22}],13:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/escapeChars"),i="[";for(var o in r)i+=o;i+="]";var a=new RegExp(i,"g");t.exports=function(e){return n(e).replace(a,function(e){return"&"+r[e]+";"})}},{"./helper/escapeChars":17,"./helper/makeString":20}],14:[function(e,t){t.exports=function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse|join|map|wrap)$/)&&(e[t]=this[t]);return e}},{}],15:[function(e,t){var n=e("./makeString");t.exports=function(e,t){return e=n(e),0===e.length?"":e.slice(0,-1)+String.fromCharCode(e.charCodeAt(e.length-1)+t)}},{"./makeString":20}],16:[function(e,t){var n=e("./escapeRegExp");t.exports=function(e){return null==e?"\\s":e.source?e.source:"["+n(e)+"]"}},{"./escapeRegExp":18}],17:[function(e,t){var n={"¢":"cent","£":"pound","¥":"yen","€":"euro","©":"copy","®":"reg","<":"lt",">":"gt",'"':"quot","&":"amp","'":"#39"};t.exports=n},{}],18:[function(e,t){var n=e("./makeString");t.exports=function(e){return n(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}},{"./makeString":20}],19:[function(e,t){var n={nbsp:" ",cent:"¢",pound:"£",yen:"¥",euro:"€",copy:"©",reg:"®",lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};t.exports=n},{}],20:[function(e,t){t.exports=function(e){return null==e?"":""+e}},{}],21:[function(e,t){t.exports=function(e,t){if(1>t)return"";for(var n="";t>0;)1&t&&(n+=e),t>>=1,e+=e;return n}},{}],22:[function(e,t){t.exports=function(e){return 0>e?0:+e||0}},{}],23:[function(e,t){var n=e("./capitalize"),r=e("./underscored"),i=e("./trim");t.exports=function(e){return n(i(r(e).replace(/_id$/,"").replace(/_/g," ")))}},{"./capitalize":2,"./trim":65,"./underscored":67}],24:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){return""===t?!0:-1!==n(e).indexOf(t)}},{"./helper/makeString":20}],25:[function(e,t){function n(e){return this instanceof n?void(this._wrapped=e):new n(e)}function r(e,t){"function"==typeof t&&(n.prototype[e]=function(){var e=[this._wrapped].concat(Array.prototype.slice.call(arguments)),r=t.apply(null,e);return"string"==typeof r?new n(r):r})}function i(e){r(e,function(t){var n=Array.prototype.slice.call(arguments,1);return String.prototype[e].apply(t,n)})}n.VERSION="3.3.4",n.isBlank=e("./isBlank"),n.stripTags=e("./stripTags"),n.capitalize=e("./capitalize"),n.decapitalize=e("./decapitalize"),n.chop=e("./chop"),n.trim=e("./trim"),n.clean=e("./clean"),n.cleanDiacritics=e("./cleanDiacritics"),n.count=e("./count"),n.chars=e("./chars"),n.swapCase=e("./swapCase"),n.escapeHTML=e("./escapeHTML"),n.unescapeHTML=e("./unescapeHTML"),n.splice=e("./splice"),n.insert=e("./insert"),n.replaceAll=e("./replaceAll"),n.include=e("./include"),n.join=e("./join"),n.lines=e("./lines"),n.dedent=e("./dedent"),n.reverse=e("./reverse"),n.startsWith=e("./startsWith"),n.endsWith=e("./endsWith"),n.pred=e("./pred"),n.succ=e("./succ"),n.titleize=e("./titleize"),n.camelize=e("./camelize"),n.underscored=e("./underscored"),n.dasherize=e("./dasherize"),n.classify=e("./classify"),n.humanize=e("./humanize"),n.ltrim=e("./ltrim"),n.rtrim=e("./rtrim"),n.truncate=e("./truncate"),n.prune=e("./prune"),n.words=e("./words"),n.pad=e("./pad"),n.lpad=e("./lpad"),n.rpad=e("./rpad"),n.lrpad=e("./lrpad"),n.sprintf=e("./sprintf"),n.vsprintf=e("./vsprintf"),n.toNumber=e("./toNumber"),n.numberFormat=e("./numberFormat"),n.strRight=e("./strRight"),n.strRightBack=e("./strRightBack"),n.strLeft=e("./strLeft"),n.strLeftBack=e("./strLeftBack"),n.toSentence=e("./toSentence"),n.toSentenceSerial=e("./toSentenceSerial"),n.slugify=e("./slugify"),n.surround=e("./surround"),n.quote=e("./quote"),n.unquote=e("./unquote"),n.repeat=e("./repeat"),n.naturalCmp=e("./naturalCmp"),n.levenshtein=e("./levenshtein"),n.toBoolean=e("./toBoolean"),n.exports=e("./exports"),n.escapeRegExp=e("./helper/escapeRegExp"),n.wrap=e("./wrap"),n.map=e("./map"),n.strip=n.trim,n.lstrip=n.ltrim,n.rstrip=n.rtrim,n.center=n.lrpad,n.rjust=n.lpad,n.ljust=n.rpad,n.contains=n.include,n.q=n.quote,n.toBool=n.toBoolean,n.camelcase=n.camelize,n.mapChars=n.map,n.prototype={value:function(){return this._wrapped}};for(var o in n)r(o,n[o]);r("tap",function(e,t){return t(e)});var a=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var s in a)i(a[s]);t.exports=n},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":18,"./humanize":23,"./include":24,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./map":34,"./naturalCmp":35,"./numberFormat":38,"./pad":39,"./pred":40,"./prune":41,"./quote":42,"./repeat":43,"./replaceAll":44,"./reverse":45,"./rpad":46,"./rtrim":47,"./slugify":48,"./splice":49,"./sprintf":50,"./startsWith":51,"./strLeft":52,"./strLeftBack":53,"./strRight":54,"./strRightBack":55,"./stripTags":56,"./succ":57,"./surround":58,"./swapCase":59,"./titleize":60,"./toBoolean":61,"./toNumber":62,"./toSentence":63,"./toSentenceSerial":64,"./trim":65,"./truncate":66,"./underscored":67,"./unescapeHTML":68,"./unquote":69,"./vsprintf":70,"./words":71,"./wrap":72}],26:[function(e,t){var n=e("./splice");t.exports=function(e,t,r){return n(e,t,0,r)}},{"./splice":49}],27:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return/^\s*$/.test(n(e))}},{"./helper/makeString":20}],28:[function(e,t){var n=e("./helper/makeString"),r=[].slice;t.exports=function(){var e=r.call(arguments),t=e.shift();return e.join(n(t))}},{"./helper/makeString":20}],29:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){if(e=n(e),t=n(t),e===t)return 0;if(!e||!t)return Math.max(e.length,t.length);for(var r=new Array(t.length+1),i=0;i<r.length;++i)r[i]=i;for(i=0;i<e.length;++i){for(var o=i+1,a=0;a<t.length;++a){var s=o;o=r[a]+(e.charAt(i)===t.charAt(a)?0:1);var c=s+1;o>c&&(o=c),c=r[a+1]+1,o>c&&(o=c),r[a]=s}r[a]=o}return o}},{"./helper/makeString":20}],30:[function(e,t){t.exports=function(e){return null==e?[]:String(e).split(/\r\n?|\n/)}},{}],31:[function(e,t){var n=e("./pad");t.exports=function(e,t,r){return n(e,t,r)}},{"./pad":39}],32:[function(e,t){var n=e("./pad");t.exports=function(e,t,r){return n(e,t,r,"both")}},{"./pad":39}],33:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/defaultToWhiteSpace"),i=String.prototype.trimLeft;t.exports=function(e,t){return e=n(e),!t&&i?i.call(e):(t=r(t),e.replace(new RegExp("^"+t+"+"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],34:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){return e=n(e),0===e.length||"function"!=typeof t?e:e.replace(/./g,t)}},{"./helper/makeString":20}],35:[function(e,t){t.exports=function(e,t){if(e==t)return 0;if(!e)return-1;if(!t)return 1;for(var n=/(\.\d+|\d+|\D+)/g,r=String(e).match(n),i=String(t).match(n),o=Math.min(r.length,i.length),a=0;o>a;a++){var s=r[a],c=i[a];if(s!==c){var l=+s,u=+c;return l===l&&u===u?l>u?1:-1:c>s?-1:1}}return r.length!=i.length?r.length-i.length:t>e?-1:1}},{}],36:[function(t,n,r){!function(t){function n(){var e=arguments[0],t=n.cache;return t[e]&&t.hasOwnProperty(e)||(t[e]=n.parse(e)),n.format.call(null,t[e],arguments)}function i(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,t){return Array(t+1).join(e)}var a={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};n.format=function(e,t){var r,s,c,l,u,p,f,d=1,h=e.length,m="",g=[],v=!0,y="";for(s=0;h>s;s++)if(m=i(e[s]),"string"===m)g[g.length]=e[s];else if("array"===m){if(l=e[s],l[2])for(r=t[d],c=0;c<l[2].length;c++){if(!r.hasOwnProperty(l[2][c]))throw new Error(n("[sprintf] property '%s' does not exist",l[2][c]));r=r[l[2][c]]}else r=l[1]?t[l[1]]:t[d++];if("function"==i(r)&&(r=r()),a.not_string.test(l[8])&&a.not_json.test(l[8])&&"number"!=i(r)&&isNaN(r))throw new TypeError(n("[sprintf] expecting number but found %s",i(r)));switch(a.number.test(l[8])&&(v=r>=0),l[8]){case"b":r=r.toString(2);break;case"c":r=String.fromCharCode(r);break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,l[6]?parseInt(l[6]):0);break;case"e":r=l[7]?r.toExponential(l[7]):r.toExponential();break;case"f":r=l[7]?parseFloat(r).toFixed(l[7]):parseFloat(r);break;case"g":r=l[7]?parseFloat(r).toPrecision(l[7]):parseFloat(r);break;case"o":r=r.toString(8);break;case"s":r=(r=String(r))&&l[7]?r.substring(0,l[7]):r;break;case"u":r>>>=0;break;case"x":r=r.toString(16);break;case"X":r=r.toString(16).toUpperCase()}a.json.test(l[8])?g[g.length]=r:(!a.number.test(l[8])||v&&!l[3]?y="":(y=v?"+":"-",r=r.toString().replace(a.sign,"")),p=l[4]?"0"===l[4]?"0":l[4].charAt(1):" ",f=l[6]-(y+r).length,u=l[6]?f>0?o(p,f):"":"",g[g.length]=l[5]?y+r+u:"0"===p?y+u+r:u+y+r)}return g.join("")},n.cache={},n.parse=function(e){for(var t=e,n=[],r=[],i=0;t;){if(null!==(n=a.text.exec(t)))r[r.length]=n[0];else if(null!==(n=a.modulo.exec(t)))r[r.length]="%";else{if(null===(n=a.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var o=[],s=n[2],c=[];if(null===(c=a.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o[o.length]=c[1];""!==(s=s.substring(c[0].length));)if(null!==(c=a.key_access.exec(s)))o[o.length]=c[1];else{if(null===(c=a.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");o[o.length]=c[1]}n[2]=o}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r[r.length]=n}t=t.substring(n[0].length)}return r};var s=function(e,t,r){return r=(t||[]).slice(0),r.splice(0,0,e),n.apply(null,r)};"undefined"!=typeof r?(r.sprintf=n,r.vsprintf=s):(t.sprintf=n,t.vsprintf=s,"function"==typeof e&&e.amd&&e(function(){return{sprintf:n,vsprintf:s}}))}("undefined"==typeof window?this:window)},{}],37:[function(e,t){(function(e){function n(e,t){function n(){if(!i){if(r("throwDeprecation"))throw new Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(r("noDeprecation"))return e;var i=!1;return n}function r(t){try{if(!e.localStorage)return!1}catch(n){return!1}var r=e.localStorage[t];return null==r?!1:"true"===String(r).toLowerCase()}t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],38:[function(e,t){t.exports=function(e,t,n,r){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),r="string"==typeof r?r:",";var i=e.split("."),o=i[0],a=i[1]?(n||".")+i[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+a}},{}],39:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/strRepeat");t.exports=function(e,t,i,o){e=n(e),t=~~t;var a=0;switch(i?i.length>1&&(i=i.charAt(0)):i=" ",o){case"right":return a=t-e.length,e+r(i,a);case"both":return a=t-e.length,r(i,Math.ceil(a/2))+e+r(i,Math.floor(a/2));default:return a=t-e.length,r(i,a)+e}}},{"./helper/makeString":20,"./helper/strRepeat":21}],40:[function(e,t){var n=e("./helper/adjacent");t.exports=function(e){return n(e,-1)}},{"./helper/adjacent":15}],41:[function(e,t){var n=e("./helper/makeString"),r=e("./rtrim");t.exports=function(e,t,i){if(e=n(e),t=~~t,i=null!=i?String(i):"...",e.length<=t)return e;var o=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},a=e.slice(0,t+1).replace(/.(?=\W*\w*$)/g,o);return a=a.slice(a.length-2).match(/\w\w/)?a.replace(/\s*\S+$/,""):r(a.slice(0,a.length-1)),(a+i).length>e.length?e:e.slice(0,a.length)+i}},{"./helper/makeString":20,"./rtrim":47}],42:[function(e,t){var n=e("./surround");t.exports=function(e,t){return n(e,t||'"')}},{"./surround":58}],43:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/strRepeat");t.exports=function i(e,t,o){if(e=n(e),t=~~t,null==o)return r(e,t);for(var i=[];t>0;i[--t]=e);return i.join(o)}},{"./helper/makeString":20,"./helper/strRepeat":21}],44:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t,r,i){var o=i===!0?"gi":"g",a=new RegExp(t,o);return n(e).replace(a,r)}},{"./helper/makeString":20}],45:[function(e,t){var n=e("./chars");t.exports=function(e){return n(e).reverse().join("")}},{"./chars":3}],46:[function(e,t){var n=e("./pad");t.exports=function(e,t,r){return n(e,t,r,"right")}},{"./pad":39}],47:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/defaultToWhiteSpace"),i=String.prototype.trimRight;t.exports=function(e,t){return e=n(e),!t&&i?i.call(e):(t=r(t),e.replace(new RegExp(t+"+$"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],48:[function(e,t){var n=e("./trim"),r=e("./dasherize"),i=e("./cleanDiacritics");t.exports=function(e){return n(r(i(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},{"./cleanDiacritics":7,"./dasherize":9,"./trim":65}],49:[function(e,t){var n=e("./chars");t.exports=function(e,t,r,i){var o=n(e);return o.splice(~~t,~~r,i),o.join("")}},{"./chars":3}],50:[function(e,t){var n=e("util-deprecate");t.exports=n(e("sprintf-js").sprintf,"sprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],51:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/toPositive");t.exports=function(e,t,i){return e=n(e),t=""+t,i=null==i?0:Math.min(r(i),e.length),e.lastIndexOf(t,i)===i}},{"./helper/makeString":20,"./helper/toPositive":22}],52:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e),t=n(t);var r=t?e.indexOf(t):-1;return~r?e.slice(0,r):e}},{"./helper/makeString":20}],53:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e),t=n(t);var r=e.lastIndexOf(t);return~r?e.slice(0,r):e}},{"./helper/makeString":20}],54:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e),t=n(t);var r=t?e.indexOf(t):-1;return~r?e.slice(r+t.length,e.length):e}},{"./helper/makeString":20}],55:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e),t=n(t);var r=t?e.lastIndexOf(t):-1;return~r?e.slice(r+t.length,e.length):e}},{"./helper/makeString":20}],56:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return n(e).replace(/<\/?[^>]+>/g,"")}},{"./helper/makeString":20}],57:[function(e,t){var n=e("./helper/adjacent");t.exports=function(e){return n(e,1)}},{"./helper/adjacent":15}],58:[function(e,t){t.exports=function(e,t){return[t,e,t].join("")}},{}],59:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return n(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})}},{"./helper/makeString":20}],60:[function(e,t){var n=e("./helper/makeString");t.exports=function(e){return n(e).toLowerCase().replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()})}},{"./helper/makeString":20}],61:[function(e,t){function n(e,t){var n,r,i=e.toLowerCase();for(t=[].concat(t),n=0;n<t.length;n+=1)if(r=t[n]){if(r.test&&r.test(e))return!0;if(r.toLowerCase()===i)return!0}}var r=e("./trim");t.exports=function(e,t,i){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=r(e),n(e,t||["true","1"])?!0:n(e,i||["false","0"])?!1:void 0)}},{"./trim":65}],62:[function(e,t){t.exports=function(e,t){if(null==e)return 0;var n=Math.pow(10,isFinite(t)?t:0);return Math.round(e*n)/n}},{}],63:[function(e,t){var n=e("./rtrim");t.exports=function(e,t,r,i){t=t||", ",r=r||" and ";var o=e.slice(),a=o.pop();return e.length>2&&i&&(r=n(t)+r),o.length?o.join(t)+r+a:a}},{"./rtrim":47}],64:[function(e,t){var n=e("./toSentence");t.exports=function(e,t,r){return n(e,t,r,!0)}},{"./toSentence":63}],65:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/defaultToWhiteSpace"),i=String.prototype.trim;t.exports=function(e,t){return e=n(e),!t&&i?i.call(e):(t=r(t),e.replace(new RegExp("^"+t+"+|"+t+"+$","g"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],66:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t,r){return e=n(e),r=r||"...",t=~~t,e.length>t?e.slice(0,t)+r:e}},{"./helper/makeString":20}],67:[function(e,t){var n=e("./trim");t.exports=function(e){return n(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()}},{"./trim":65}],68:[function(e,t){var n=e("./helper/makeString"),r=e("./helper/htmlEntities");t.exports=function(e){return n(e).replace(/\&([^;]+);/g,function(e,t){var n;return t in r?r[t]:(n=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(n[1],16)):(n=t.match(/^#(\d+)$/))?String.fromCharCode(~~n[1]):e})}},{"./helper/htmlEntities":19,"./helper/makeString":20}],69:[function(e,t){t.exports=function(e,t){return t=t||'"',e[0]===t&&e[e.length-1]===t?e.slice(1,e.length-1):e}},{}],70:[function(e,t){var n=e("util-deprecate");t.exports=n(e("sprintf-js").vsprintf,"vsprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],71:[function(e,t){var n=e("./isBlank"),r=e("./trim");t.exports=function(e,t){return n(e)?[]:r(e,t).split(t||/\s+/)}},{"./isBlank":27,"./trim":65}],72:[function(e,t){var n=e("./helper/makeString");t.exports=function(e,t){e=n(e),t=t||{};var r,i=t.width||75,o=t.seperator||"\n",a=t.cut||!1,s=t.preserveSpaces||!1,c=t.trailingSpaces||!1;if(0>=i)return e;if(a){var l=0;for(r="";l<e.length;)l%i==0&&l>0&&(r+=o),r+=e.charAt(l),l++;if(c)for(;l%i>0;)r+=" ",l++;return r}var u=e.split(" "),p=0;for(r="";u.length>0;){if(1+u[0].length+p>i&&p>0){if(s)r+=" ",p++;else if(c)for(;i>p;)r+=" ",p++;r+=o,p=0}p>0&&(r+=" ",p++),r+=u[0],p+=u[0].length,u.shift()}if(c)for(;i>p;)r+=" ",p++;return r}},{"./helper/makeString":20}]},{},[25])(25)}),define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!common/templates/components/system-feedback.underscore",[],function(){return'<div class="wrapper wrapper-<%= type %> wrapper-<%= type %>-<%= intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%= type %>-status<% } %>"\n     id="<%= type %>-<%= intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%= type %>-<%= intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%= type %>-<%= intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%= type %> <%= intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog"} %>\n      <i class="feedback-symbol fa fa-<%= iconClass[intent] %>"></i>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%= type %>-<%= intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%= type %>-<%= intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%= actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <button class="action-secondary <%= secondary.class %>"><%- secondary.text %></button>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%= type %>-close">\n      <i class="icon fa fa-times-circle"></i>\n      <span class="label">close <%= type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n'}),function(e){e("common/js/components/views/feedback",["jquery","underscore","underscore.string","backbone","text!common/templates/components/system-feedback.underscore"],function(e,t,n,r,i){var o=["a[href]:not([tabindex='-1'])","area[href]:not([tabindex='-1'])","input:not([disabled]):not([tabindex='-1'])","select:not([disabled]):not([tabindex='-1'])","textarea:not([disabled]):not([tabindex='-1'])","button:not([disabled]):not([tabindex='-1'])","iframe:not([tabindex='-1'])","[tabindex]:not([tabindex='-1'])","[contentEditable=true]:not([tabindex='-1'])"],a=r.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0,outFocusElement:null},initialize:function(){if(!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!t.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},inFocus:function(){this.options.outFocusElement=this.options.outFocusElement||document.activeElement,this.$(".wrapper").first().focus();var e=this.$(o.join());return e.on("keydown",function(t){9===t.which&&t.shiftKey&&t.target===e.first()[0]?(t.preventDefault(),e.last().focus()):9!==t.which||t.shiftKey||t.target!==e.last()[0]||(t.preventDefault(),e.first().focus())}),this},outFocus:function(){this.$(o.join()).off("keydown");return this.options.outFocusElement&&this.options.outFocusElement.focus(),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=a["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),this.$el.html(t.template(i)(this.options)),a["active_"+this.options.type]=this,this},primaryClick:function(e){var t,n;t=this.options.actions,t&&(n=t.primary,n&&(n.preventDefault!==!1&&e.preventDefault(),n.click&&n.click.call(e.target,this,e)))},secondaryClick:function(e){var n,r,i,o;n=this.options.actions,n&&(r=n.secondary,r&&(o=0,e&&e.target&&(o=t.indexOf(this.$(".action-secondary"),e.target)),i=r[o],i.preventDefault!==!1&&e.preventDefault(),i.click&&i.click.call(e.target,this,e)))}});return a})}.call(this,define||RequireJS.define),function(e){e("common/js/components/views/feedback_notification",["jquery","underscore","underscore.string","common/js/components/views/feedback"],function(e,t,n,r){var i,o,a=r.extend({options:e.extend({},r.prototype.options,{type:"notification",closeIcon:!1})});i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=a.extend({options:e.extend({},a.prototype.options,{intent:t})}),a[i(t)]=n});var s=a.Mini.prototype.options;return s.minShown=1250,s.closeIcon=!1,a})}.call(this,define||RequireJS.define),function(e){e("common/js/components/views/feedback_prompt",["jquery","underscore","underscore.string","common/js/components/views/feedback"],function(e,t,n,r){var i,o,a=r.extend({options:e.extend({},r.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),r.prototype.render.apply(this,arguments)},show:function(){return r.prototype.show.apply(this,arguments),this.inFocus()},hide:function(){return r.prototype.hide.apply(this,arguments),this.outFocus()}});return i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=a.extend({options:e.extend({},a.prototype.options,{intent:t})}),a[i(t)]=n}),a})}.call(this,define||RequireJS.define),function(e,t){e("common/js/components/utils/view_utils",["jquery","underscore","gettext","common/js/components/views/feedback_notification","common/js/components/views/feedback_prompt"],function(e,n,r,i,o){var a,s,c,l,u,p,f,d,h,m,g,v,y,w,x,k,b,S,j,C=65;return a=function(e,t){t||(t="collapsed"),e.closest(".expand-collapse").toggleClass("expand collapse"),e.closest(".is-collapsible, .window").toggleClass(t),e.closest(".is-collapsible").children("article").slideToggle()},s=function(){e(".ui-loading").show()},c=function(){e(".ui-loading").hide()},l=function(e,t,n,i,a){return new o.Warning({title:e,message:t,actions:{primary:{text:n,click:function(e){e.hide(),i()}},secondary:{text:r("Cancel"),click:function(e){return a&&a(),e.hide()}}}}).show()},u=function(e,t){var n;return n=new i.Mini({title:r(e)}),n.show(),t().done(function(){n.hide()})},p=function(t){return function(n){var r=this;f(e(n.currentTarget),function(){return r[t].apply(r,[n])})}},f=function(e,t){return e.addClass("is-disabled").attr("aria-disabled",!0),t().always(function(){e.removeClass("is-disabled").attr("aria-disabled",!1)})},w=function(t){return function(n){n.preventDefault(),e.ajax({url:e(this).data("dismiss-link"),type:"DELETE",success:t})}},m=function(t){e("html, body").animate({scrollTop:t},500)},d=function(t){var n=t.offset().top;return n-e(window).scrollTop()},h=function(e,t){var n=e.offset().top,r=n-t;m(r)},g=function(e){window.location=e},v=function(){window.location.reload()},y=function(e,t){var r,i=e.changedAttributes();if(!i)return!1;for(r=0;r<t.length;r++)if(n.has(i,t[r]))return!0;return!1},x=function(e){return 0===e.length?r("Required field."):""},k=function(e,t){var n=x(e);if(n)return n;if(t){if(/\s/g.test(e))return r("Please do not use any spaces in this field.")}else if(e!==encodeURIComponent(e)||e.match(/[!'()*]/))return r("Please do not use any spaces or special characters in this field.");return""},b=function(t){var r=n.reduce(t,function(t,n){return t+e(n).val().length},0);return C>=r},S=function(t,r,i,o){b(i)?e(t.errorWrapper).removeClass(r.shown).addClass(r.hiding):(e(t.errorWrapper).addClass(r.shown).removeClass(r.hiding),e(t.errorMessage).html("<p>"+n.template(o)({limit:C})+"</p>"),e(t.save).addClass(r.disabled))},j=function(n){var r=e.Deferred();return t([n],function(){r.resolve()},function(){r.reject()}),r.promise()},{toggleExpandCollapse:a,showLoadingIndicator:s,hideLoadingIndicator:c,confirmThenRunOperation:l,runOperationShowingMessage:u,withDisabledElement:p,disableElementWhileRunning:f,deleteNotificationHandler:w,setScrollTop:m,getScrollOffset:d,setScrollOffset:h,redirect:g,reload:v,hasChangedAttributes:y,validateRequiredField:x,validateURLItemEncoding:k,validateTotalKeyLength:b,checkTotalKeyLengthViolations:S,loadJavaScript:j}})}.call(this,define||RequireJS.define,require||RequireJS.require),define("js/views/baseview",["jquery","underscore","backbone","gettext","js/utils/handle_iframe_binding","js/utils/templates","common/js/components/utils/view_utils"],function(e,t,n,r,i,o,a){var s=n.View.extend({events:{"click .ui-toggle-expansion":"toggleExpandCollapse"},options:{collapsedClass:"collapsed"},constructor:function(){t.bindAll(this,"beforeRender","render","afterRender");
var e=this;this.render=t.wrap(this.render,function(t,n){return e.beforeRender(),t(n),e.afterRender(),e}),n.View.prototype.constructor.apply(this,arguments)},beforeRender:function(){},render:function(){return this},afterRender:function(){i.iframeBinding(this)},toggleExpandCollapse:function(t){var n=e(t.target);t.stopPropagation(),t.preventDefault(),a.toggleExpandCollapse(n,this.options.collapsedClass)},loadTemplate:function(e){return o.loadTemplate(e)}});return s}),define("js/views/manage_users_and_roles",["jquery","underscore","gettext","js/views/baseview","common/js/components/views/feedback_prompt","common/js/components/utils/view_utils"],function(e,t,n,r,i,o){function a(t){return new i.Error({title:t.invalidEmail.title,message:t.invalidEmail.message,actions:{primary:{text:t.invalidEmail.primaryAction,click:function(t){t.hide(),e("#user-email-input").focus()}}}})}function s(n,r,o){return new i.Warning({title:n.alreadyMember.title,message:t.template(n.alreadyMember.messageTpl,{interpolate:/\{(.+?)}/g})({email:r,container:o}),actions:{primary:{text:n.alreadyMember.primaryAction,click:function(t){t.hide(),e("#user-email-input").focus()}}}})}function c(e,t,n,r){return new i.Error({title:t,message:n,actions:{primary:{text:e.defaults.confirmation,click:function(e){e.hide(),r()}}}})}function l(t){return e(t).closest("li[data-email]").data("email")}var u={defaults:{confirmation:n("Ok"),changeRoleError:n("There was an error changing the user's role"),unknown:n("Unknown")},errors:{addUser:n("Error adding user"),deleteUser:n("Error removing user")},invalidEmail:{title:n("A valid email address is required"),message:n("You must enter a valid email address in order to add a new team member"),primaryAction:n("Return and add email address")},alreadyMember:{title:n("Already a member"),messageTpl:n("{email} is already on the {container} team. Recheck the email address if you want to add a new member."),primaryAction:n("Return to team listing")},deleteUser:{title:n("Are you sure?"),messageTpl:n("Are you sure you want to restrict {email} access to “{container}”?"),primaryAction:n("Delete"),secondaryAction:n("Cancel")}},p=r.extend({events:function(){for(var e={"click .create-user-button":"addUserHandler","submit #create-user-form":"createUserFormSubmit","click .action-cancel":"cancelEditHandler",keyup:"keyUpHandler","click .remove-user":"removeUserHandler"},n={},r=this,i=0;i<r.roles.length;i++){var o=r.roles[i].key,a="click .user-actions .make-"+o;!function(e){n[a]=function(t){r.handleRoleButtonClick(t.target,e)}}(o)}return t.extend(e,n)},initialize:function(e){r.prototype.initialize.call(this),this.containerName=e.containerName,this.tplUserURL=e.tplUserURL,this.roles=e.roles,this.users=e.users,this.allow_actions=e.allow_actions,this.current_user_id=e.current_user_id,this.initial_role=this.roles[0],this.admin_role=this.roles[this.roles.length-1];var t=e.messages_modifier||function(e){return e};this.messages=t(u),this.$userEmailInput=this.$el.find("#user-email-input"),this.$createUserButton=this.$el.find(".create-user-button"),this.$createUserFormWrapper=this.$el.find(".wrapper-create-user"),this.$cancelButton=this.$el.find(".action-cancel"),this.$userList=this.$el.find("#user-list")},render:function(){this.$userList.empty();for(var e=this.loadTemplate("team-member"),n=t.object(t.pluck(this.roles,"key"),t.pluck(this.roles,"name")),r=this.getAdminRoleCount(),i={format:function(e,n){return t.template(e,{interpolate:/\{(.+?)}/g})(n)}},o=0;o<this.users.length;o++){var a=this.users[o],s=this.current_user_id==a.id,c={user:a,actions:this.getPossibleRoleChangesForRole(a.role,r),roles:n,allow_delete:!(a.role===this.admin_role.key&&1===r),allow_actions:this.allow_actions,is_current_user:s,viewHelpers:i};this.$userList.append(e(c))}},getAdminRoleCount:function(){var e=this;return t.filter(this.users,function(t){return t.role===e.admin_role.key}).length},getPossibleRoleChangesForRole:function(e,n){var r=[],i=t.map(this.roles,function(e){return e.key});if(e===this.admin_role.key&&1===n)r.push({notoggle:!0});else for(var o=t.indexOf(i,e),a=this.roles.length-1;a>=0;a--){var s=this.roles[a];1===Math.abs(o-a)&&r.push({to_role:s.key,label:o>a?this.roles[o].name:s.name,direction:o>a?"remove":"add"})}return r},checkEmail:function(e){var n=t.map(this.users,function(e){return e.email});return e?t.contains(n,e)?{valid:!1,msg:s(this.messages,e,this.containerName)}:{valid:!0}:{valid:!1,msg:a(this.messages)}},changeRole:function(t,n,r){var i=this,a=this.tplUserURL.replace("@@EMAIL@@",t),s=r.errMessage||this.messages.defaults.changeRoleError,l=r.onSuccess||function(){o.reload()},u=r.onError||function(){};e.ajax({url:a,type:n?"POST":"DELETE",dataType:"json",contentType:"application/json",data:JSON.stringify({role:n}),success:l,error:function(e){var t,n;try{t=JSON.parse(e.responseText).error||i.messages.defaults.unknown}catch(r){t=i.messages.defaults.unknown}n=c(i.messages,s,t,u),n.show()}})},handleRoleButtonClick:function(e,t){this.changeRole(l(e),t,{})},addUserHandler:function(e){e.preventDefault(),this.$createUserButton.toggleClass("is-disabled").attr("aria-disabled",this.$createUserButton.hasClass("is-disabled")),this.$createUserFormWrapper.toggleClass("is-shown"),this.$userEmailInput.focus()},cancelEditHandler:function(e){e.preventDefault(),this.$createUserButton.toggleClass("is-disabled").attr("aria-disabled",this.$createUserButton.hasClass("is-disabled")),this.$createUserFormWrapper.toggleClass("is-shown"),this.$userEmailInput.val("")},createUserFormSubmit:function(e){e.preventDefault();var t=this,n=this.$userEmailInput.val().trim(),r=this.checkEmail(n);return r.valid?void this.changeRole(n,this.initial_role.key,{errMessage:this.messages.errors.addUser,onError:function(){t.$userEmailInput.focus()}}):void r.msg.show()},keyUpHandler:function(e){e.which===jQuery.ui.keyCode.ESCAPE&&this.$createUserFormWrapper.is(".is-shown")&&this.$cancelButton.click()},removeUserHandler:function(e){e.preventDefault();var n=this,r=l(e.target),o=new i.Warning({title:n.messages.deleteUser.title,message:t.template(n.messages.deleteUser.messageTpl,{interpolate:/\{(.+?)}/g})({email:r,container:n.containerName}),actions:{primary:{text:n.messages.deleteUser.primaryAction,click:function(e){e.hide(),n.changeRole(r,null,{errMessage:n.messages.errors.deleteUser})}},secondary:{text:n.messages.deleteUser.secondaryAction,click:function(e){e.hide()}}}});o.show()}});return p}),define("js/factories/manage_users",["underscore","gettext","js/views/manage_users_and_roles"],function(e,t,n){return function(r,i,o,a,s){function c(n){var r=e.extend({},n);return r.alreadyMember.title=t("Already a course team member"),r.deleteUser.messageTpl=t("Are you sure you want to delete {email} from the course team for “{container}”?"),r}var l=[{key:"staff",name:t("Staff")},{key:"instructor",name:t("Admin")}],u={el:$("#content"),containerName:r,tplUserURL:o,roles:l,users:i,messages_modifier:c,current_user_id:a,allow_actions:s},p=new n(u);p.render()}});