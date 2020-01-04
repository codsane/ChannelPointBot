// ==UserScript==
// @name         ChannelPointBot
// @namespace    http://github.com/codsane/ChannelPointBot
// @version      1.0
// @description  Automatically click Twitch channel point bonuses
// @author       codsane
// @match        *://*.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=www.twitch.tv
// @grant        none
// @run-at       document-end
// @require https://code.jquery.com/jquery-3.4.1.min.js 
// ==/UserScript==

console.log('[ChannelPointBot] Loaded');

function checkForBonus() {
    var bonus_presence = $('div.claimable-bonus__icon');
	if (bonus_presence.length) {
        console.log('Presence of claimable bonus (div.claimable-bonus__icon) detected!');

        var bonus_button = bonus_presence.parents('button');
        // console.log(bonus_button);

        console.log('Randomly waiting before click...');
        var delay = (Math.floor(Math.random() * 1000)) + 100;
        console.log(`Sleeping for ${delay}ms...`)
        setTimeout(function() { bonus_button.click() }, delay);
    }
}

setInterval(checkForBonus, 500);