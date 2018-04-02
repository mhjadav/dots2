$(document).ready(function () {
    renderGrid();
});

var renderGrid = function(){
    var maxTDperTR = 15;
    var maxTR = 16;

    var strHtml = "";
    var x = 1;
    var i = 0;
    for (var r = 1; r < maxTR; r++) {
        strHtml += "<tr>"
        for (var c = 1; c <= maxTDperTR;) {
            var width = 30;
            var height = 5;
            if (r % 2 != 0) {
                strHtml += '<td align="center"><input type="radio" name="x' + x + '" onclick="convert(' + x + ');" /></td>';
                x++;
                c++;
            } else {
                if (c % 2 === 0) {
                    width = 30;
                    height = 30;
                } else {
                    width = 5;
                    height = 30;
                }
            }
            if (!(c === 16 && r % 2 != 0)) {
                strHtml += '<td align="center"><img alt="" name="i' + i + '" src="images/clear.gif" width="' + width + '" height="' + height + '" /></td>'
                i++;
            }
            c++;
        }
    }
    strHtml += ' <tr class="spacer"><td style="padding-bottom: 1em;x"></td></tr><tr><td bgcolor="silver" colspan="7"> Computer:<input type="text" name="comp" size="2" value="0" style="width: 50%;text-align: center;" /></td>';
    strHtml += '<td bgcolor="silver" colspan="5">Player:<input type="text" name="plyr" size="2" value="0" style="width: 50%;text-align: center;"/></td>';
    strHtml += '<td bgcolor="silver" colspan="3"><input type="button" value="Reset" onclick="renderGrid()" /></td></tr>';
    $("#dotsTable").html(strHtml);
}