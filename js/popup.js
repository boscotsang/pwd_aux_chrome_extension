/**
 * Created by tsangbosco on 15/10/21.
 */

(function () {
    var complete_btn = $("#Complete");
    complete_btn.click(function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {CompletePassword: {
            domain: $("#Domain").val(),
            password: $("#Password").val(),
        }}, function(response) {
            });
        });
    });
    var input = $(".pwd-aux-input");
    for (var i=0; i<input.length; i++) {
        input[i].keypress(function(event) {
            if (13 == event.which) {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {CompletePassword: {
                    domain: $("#Domain").val(),
                    password: $("#Password").val(),
                }}, function(response) {
                    });
                });
            }
        });
    }
    var input = $(".pwd-aux-input").keypress(function(event) {
    });
})();

