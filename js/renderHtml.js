$(document).ready(function () {
    renderGrid();
    
});
var gridParams = {};
var lineIndexArray = [];
var renderGrid = function () {
    var maxTDperTR = 15;
    var maxTR = 15;

    // var strHtml = '<tr><td bgcolor="silver" colspan="7"> Computer:<input type="text" name="comp" size="2" value="0" style="width: 50%;text-align: center;" /></td>';
    // strHtml += '<td bgcolor="silver" colspan="5">Player:<input type="text" name="plyr" size="2" value="0" style="width: 50%;text-align: center;"/></td>';
    // strHtml += '<td bgcolor="silver" colspan="3"><input type="button" value="Reset" onclick="renderGrid();init();" /></td></tr><tr class="spacer"><td style="padding-bottom: 1em;x"></td></tr>';
    var strHtml = "";
    var x = 1;
    var i = 0;
    var boxIndex = 6;
    var lastXValue = x;
    for (var r = 1; r <= maxTR; r++) {
        strHtml += "<tr>"
        if(r % 2 != 0 && x != 1){
            x = lastXValue;
        }
        for (var c = 1; c <= maxTDperTR;) {
            var width = 35;
            var height = 8;
            var imageUrl = '/dots/images/clear.gif';
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
                strHtml += '<td align="center"><input type="radio" name="x' + x + '" onclick="dotClick(' + x + ');" /></td>';
                if(!_.isArray(lineIndexArray[x])){
                    lineIndexArray[x] = []
                }
                if(!_.isArray(lineIndexArray[x+1])){
                    lineIndexArray[x+1] = []
                }
                lineIndexArray[x].push(i);
                lineIndexArray[x+1].push(i);
                x++;
                c++;
                lastXValue = x;
            } else {
                if (c % 2 === 0) {
                    width = 30;
                    height = 30;
                    imageUrl = '/dots/images/clear.gif';
                    eventName = "";
                } else {
                    width = 8;
                    height = 35;
                }
            }
            if (!(c === 16 && r % 2 != 0)) {
                strHtml += '<td align="center"><img alt=""'
                gridParams[i] = {
                    addValueParamsTwo: addValueParamsTwo,
                    addValueParamsOne: addValueParamsOne
                }
                if (r % 2 === 0 && c % 2 != 0) {
                    if(!_.isArray(lineIndexArray[x])){
                        lineIndexArray[x] = []
                    }
                    if(!_.isArray(lineIndexArray[x-8])){
                        lineIndexArray[x-8] = []
                    }
                    lineIndexArray[x].push(i);
                    lineIndexArray[x-8].push(i);
                    x++;                    
                }
                
                //strHtml += eventName + '"';
                strHtml += 'name="i'+ i +'" src="' + imageUrl + '" width="' + width + '" height="' + height + '" /></td>'
                i++;
            }
            c++;
        }
    }
    $("#dotsTable").html(strHtml);
}