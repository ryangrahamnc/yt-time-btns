// ==UserScript==
// @name         yt time btns
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        *://*.youtube.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
(function doIt() {
    var $ = jQuery;
    var $container = $('.ytp-chrome-bottom .ytp-chrome-controls .ytp-left-controls');
    if(!$container.length){
        setTimeout(doIt, 1000);
        return;
    }
    console.log(1111, $container, $container.get())
    var spanCss = {
        display:'inline-block',
        border:'1px solid #eee',
        lineHeight: '20px',
        width: '20px',
        margin: '0 5px',
        textAlign: 'center',
        cursor:'pointer',
    };
    var $div = $('<div>').css({
        display:'inline-block',
        verticalAlign:'top',
    });
    var amts = [-60, -30, -15, -5, 5, 15, 30, 60];
    $.each(amts, (idx, amt)=>{
        var $span = $('<span class="changeAmtBtn">').text(amt).css(spanCss).data('amt', amt);
        $div.append($span);
    });
    $div.on('click', '.changeAmtBtn', function(e){
        var $el = $(this);
        var amt = parseInt($el.data('amt'));
        $('video').get(0).currentTime += amt;
    });
    $container.append($div);
}).call(this);
