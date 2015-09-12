// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.last.fm/ja/user/aqn
// @grant        none
// ==/UserScript==
window.onload = function(){
    jQuery('.text-colour-link').eq(0).after(
        jQuery('<div>Tweet</div>').css(
            {width:'100px',height:'50px','background-color':'skyblue',color:'white','text-align':'center','line-height':'50px','cursor':'pointer'}
        ).on('click',function(){var a = jQuery('.chartlist-ellipsis-wrap').eq(0);var tweet = '';a.find('a').each(function(i,v){ i > 0 ? tweet += ' - ':1;tweet += jQuery(v).text();});window.open('https://twitter.com/intent/tweet?text='+tweet); }))
};

