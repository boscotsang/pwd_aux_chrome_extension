(function () {
    function receiveMessage(request, sender, sendResponse) {
        if (request.CompletePassword) {
            var data = request.CompletePassword;
            var pwd_input = $("[type='password']");
            var s = $.md5(data.domain + data.password + data.salt);
            var pwd = "";
            for (var i = 0; i < 16; i++) {
                var code = Math.floor(parseInt(s.substr(i * 2, 2), 16) / 256 * 75 + 48);
                pwd += String.fromCharCode(code);
            }
            if (pwd.endsWith(' ')) pwd = pwd.substr(0, 15) + '/';
            pwd_input.val(pwd);
        }
    }
    chrome.runtime.onMessage.addListener(receiveMessage);
})();
