// ==UserScript==
// @name         ComandoAdblockRemover
// @namespace    http://comando.la/
// @version      v1
// @description  remove adblock blocker
// @author       NX
// @match        https://comando.la/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elems1 = document.getElementById('adb');
    elems1.remove();
})();
