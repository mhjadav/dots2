$(document).ready(function () {
    renderGrid();
});
var gridParams = {};
var renderGrid = function () {
    var maxTDperTR = 15;
    var maxTR = 15;

    var strHtml = "";
    var x = 1;
    var i = 0;
    var boxIndex = 6;
    for (var r = 1; r <= maxTR; r++) {
        strHtml += "<tr>"
        for (var c = 1; c <= maxTDperTR;) {
            var width = 35;
            var height = 6;
            var imageUrl = 'images/clearline.gif';
            var eventName = "convert(" + i + ");";
            var addValue = '';
            var addValueParamsOne = [];
            var addValueParamsTwo = [];
            if (r % 2 === 0) {
                if(c === 1){
                    addValueParamsOne.push(i+1);
                    addValueParamsOne.push(2);
                }else if(c === 15){
                    boxIndex += 8;
                    addValueParamsOne.push(i-1);
                    addValueParamsOne.push(4);
                } else {
                    if (c % 2 != 0) {
                        addValueParamsOne.push(i-1)
                        addValueParamsOne.push(4);
                        addValueParamsTwo.push(i+1);
                        addValueParamsTwo.push(2);
                    }
                }
            } else if(c != 15){
                if (r === 1){
                    boxIndex += 2;
                    addValueParamsOne.push(boxIndex);
                    addValueParamsOne.push(1);
                }
                else if (r === 15) {
                    boxIndex += 2;
                    addValueParamsOne.push(boxIndex - 22);
                    addValueParamsOne.push(8);
                } else {
                    boxIndex += 2;
                    addValueParamsOne.push(boxIndex - 22)
                    addValueParamsOne.push(8);
                    addValueParamsTwo.push(boxIndex) 
                    addValueParamsTwo.push(1);
                }
            }

            if (r % 2 != 0) {
                strHtml += '<td align="center"><input type="radio" name="x' + x + '" onclick="this.checked=false;" /></td>';
                x++;
                c++;
            } else {
                if (c % 2 === 0) {
                    width = 30;
                    height = 30;
                    imageUrl = 'images/clear.gif';
                    eventName = "";
                } else {
                    width = 8;
                    height = 35;
                }
            }
            if (!(c === 16 && r % 2 != 0)) {
                strHtml += '<td align="center"><img alt="" onclick="'
                // if(addValueParamsOne.length > 0){
                //     strHtml += 'adValue(' + addValueParamsOne.join() + ');';                    
                // }
                // if(addValueParamsTwo.length > 0){
                //     strHtml += 'adValue(' + addValueParamsTwo.join() + ');';                    
                // }
                gridParams[i] = {
                    addValueParamsTwo: addValueParamsTwo,
                    addValueParamsOne: addValueParamsOne
                }
                strHtml += eventName + '"';
                strHtml += ' name="i'+ i +'" src="' + imageUrl + '" width="' + width + '" height="' + height + '" /></td>'
                i++;
            }
            c++;
        }
    }
    strHtml += ' <tr class="spacer"><td style="padding-bottom: 1em;x"></td></tr><tr><td bgcolor="silver" colspan="7"> Computer:<input type="text" name="comp" size="2" value="0" style="width: 50%;text-align: center;" /></td>';
    strHtml += '<td bgcolor="silver" colspan="5">Player:<input type="text" name="plyr" size="2" value="0" style="width: 50%;text-align: center;"/></td>';
    strHtml += '<td bgcolor="silver" colspan="3"><input type="button" value="Reset" onclick="renderGrid();init();" /></td></tr>';
    $("#dotsTable").html(strHtml);
}