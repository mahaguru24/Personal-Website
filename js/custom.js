/**
 * Created by guru on 8/7/17.
 */
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    } else {
        $(target).text('G');
        setTimeout(function () { showText(target, message, 1, interval); }, interval);
    }
}

$(function () {

    showText("#homeHeading", "GURUPRASAD MULAY", 0, 200);

});