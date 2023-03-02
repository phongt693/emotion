// ==UserScript==
// @name         Shortcut f17 and f33
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://next.voz.vn/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    $(".p-nav-list").append(`
<li>
<div class="p-navEl " data-has-children="true">
<a href="/f/chuyen-tro-linh-tinh.17/" class="p-navEl-link p-navEl-link--splitMenu " data-nav-id="members">F17</a>
</div>
</li>
<li>
<div class="p-navEl " data-has-children="true">
<a href="/f/diem-bao.33/" class="p-navEl-link p-navEl-link--splitMenu " data-nav-id="members">F33</a>
</div>
</li>

`);
})();