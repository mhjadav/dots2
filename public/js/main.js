(function () {
    var compgo = 0;
    var hit = 0;
    var t1 = 0;
    var t2 = 0;
    var box;
    var occ;

    function init() {
        compgo = 0;
        hit = 0;
        t1 = 0;
        t2 = 0;
        box = new Array(161);
        _.fill(box, 0);
        occ = new Array(161);
        _.fill(occ, 0);
    }
    init()

    function convert(t) {
        go(parseInt(t));
        if (compgo == 1) reply();
    }

    function go(t) {
        if (occ[t] != 1) {
            occ[t] = 1;
            var target = $("[name=i" + t + "]")[0];
            if (compgo == 1) target.src = "/dots/images/blue.gif";
            else target.src = "/dots/images/red.gif";
            gridParams[t];
            if (gridParams[t].addValueParamsOne.length > 0) {
                ad.apply(this, gridParams[t].addValueParamsOne);
            }
            if (gridParams[t].addValueParamsTwo.length > 0) {
                ad.apply(this, gridParams[t].addValueParamsTwo);
            }
            if (compgo == 0 && hit == 0) compgo = 1;
            hit = 0;
        }
    }

    function ad(t, pole) {
        box[t] += pole;
        if (box[t] == 15) {
            var target = $("[name=i" + t + "]")[0];
            if (compgo == 1) {
                target.src = "/dots/images/blue.gif";
                document.f.comp.value++;
                hit = 1;
            } else {
                target.src = "/dots/images/red.gif";
                document.f.plyr.value++;
                hit = 1;
            }
            var computerTotal = parseInt(document.f.comp.value);
            var playerTotal = parseInt(document.f.plyr.value);
            var total = computerTotal + playerTotal;
            if (total >= 49) {
                if (playerTotal > computerTotal) {
                    window.alert("Game Over. \n Score : Computer: " + computerTotal + ", Your: " + playerTotal + " \n You won.")
                } else {
                    window.alert("Game Over. \n Score: Computer: " + computerTotal + ", Your: " + playerTotal + " \n You lost.")
                }
                init();                
                renderGrid();
            }
        }
    }

    function reply() {
        var ok = 0;
        for (t = 1; t < box.length; t++)
            switch (box[t]) {
                case 7:
                    switch (t) {
                        case 8:
                        case 30:
                        case 52:
                        case 74:
                        case 96:
                        case 118:
                        case 140:
                            go(t + 14);
                            break;
                        case 10:
                        case 32:
                        case 54:
                        case 76:
                        case 98:
                        case 120:
                        case 142:
                            go(t + 13);
                            break;
                        case 12:
                        case 34:
                        case 56:
                        case 78:
                        case 100:
                        case 122:
                        case 144:
                            go(t + 12);
                            break;
                        case 14:
                        case 36:
                        case 58:
                        case 80:
                        case 102:
                        case 124:
                        case 146:
                            go(t + 11);
                            break;
                        case 16:
                        case 38:
                        case 60:
                        case 82:
                        case 104:
                        case 126:
                        case 148:
                            go(t + 10);
                            break;
                        case 18:
                        case 40:
                        case 62:
                        case 84:
                        case 106:
                        case 128:
                        case 150:
                            go(t + 9);
                            break;
                        case 20:
                        case 42:
                        case 64:
                        case 86:
                        case 108:
                        case 130:
                        case 152:
                            go(t + 8);
                            break;
                    }
                    ok = 1;
                    break;
                case 11:
                    go(t + 1);
                    ok = 1;
                    break;
                case 13:
                    go(t - 1);
                    ok = 1;
                    break;
                case 14:
                    switch (t) {
                        case 8:
                        case 30:
                        case 52:
                        case 74:
                        case 96:
                        case 118:
                        case 140:
                            go(t - 8);
                            break;
                        case 10:
                        case 32:
                        case 54:
                        case 76:
                        case 98:
                        case 120:
                        case 142:
                            go(t - 9);
                            break;
                        case 12:
                        case 34:
                        case 56:
                        case 78:
                        case 100:
                        case 122:
                        case 144:
                            go(t - 10);
                            break;
                        case 14:
                        case 36:
                        case 58:
                        case 80:
                        case 102:
                        case 124:
                        case 146:
                            go(t - 11);
                            break;
                        case 16:
                        case 38:
                        case 60:
                        case 82:
                        case 104:
                        case 126:
                        case 148:
                            go(t - 12);
                            break;
                        case 18:
                        case 40:
                        case 62:
                        case 84:
                        case 106:
                        case 128:
                        case 150:
                            go(t - 13);
                            break;
                        case 20:
                        case 42:
                        case 64:
                        case 86:
                        case 108:
                        case 130:
                        case 152:
                            go(t - 14);
                            break;
                    }
                    ok = 1;
                    break;
            }
        if (ok == 1) reply();
        else
        if (ok != 1 && hit == 0) reply0();
        else {
            compgo = 0;
            hit = 0;
        }
    }

    function reply0() {
        var i = 0,
            t = Math.round(Math.random() * 112) + 1;
        while (i < 113 && compgo == 1) {
            i++;
            t++;
            if (t > 112) t = 1;
            switch (t) {
                case 1:
                    if (box[8] == 0) {
                        go(0);
                        compgo = 0;
                    }
                    break;
                case 2:
                    if (box[10] == 0) {
                        go(1);
                        compgo = 0;
                    }
                    break;
                case 3:
                    if (box[12] == 0) {
                        go(2);
                        compgo = 0;
                    }
                    break;
                case 4:
                    if (box[14] == 0) {
                        go(3);
                        compgo = 0;
                    }
                    break;
                case 5:
                    if (box[16] == 0) {
                        go(4);
                        compgo = 0;
                    }
                    break;
                case 6:
                    if (box[18] == 0) {
                        go(5);
                        compgo = 0;
                    }
                    break;
                case 7:
                    if (box[20] == 0) {
                        go(6);
                        compgo = 0;
                    }
                    break;
                case 8:
                    if (box[8] == 0) {
                        go(7);
                        compgo = 0;
                    }
                    break;
                case 9:
                    if (box[8] == 0 && box[10] == 0) {
                        go(9);
                        compgo = 0;
                    }
                    break;
                case 10:
                    if (box[10] == 0 && box[12] == 0) {
                        go(11);
                        compgo = 0;
                    }
                    break;
                case 11:
                    if (box[12] == 0 && box[14] == 0) {
                        go(13);
                        compgo = 0;
                    }
                    break;
                case 12:
                    if (box[14] == 0 && box[16] == 0) {
                        go(15);
                        compgo = 0;
                    }
                    break;
                case 13:
                    if (box[16] == 0 && box[18] == 0) {
                        go(17);
                        compgo = 0;
                    }
                    break;
                case 14:
                    if (box[18] == 0 && box[20] == 0) {
                        go(19);
                        compgo = 0;
                    }
                    break;
                case 15:
                    if (box[20] == 0) {
                        go(21);
                        compgo = 0;
                    }
                    break;
                case 16:
                    if (box[8] == 0 && box[30] == 0) {
                        go(22);
                        compgo = 0;
                    }
                    break;
                case 17:
                    if (box[10] == 0 && box[32] == 0) {
                        go(23);
                        compgo = 0;
                    }
                    break;
                case 18:
                    if (box[12] == 0 && box[34] == 0) {
                        go(24);
                        compgo = 0;
                    }
                    break;
                case 19:
                    if (box[14] == 0 && box[36] == 0) {
                        go(25);
                        compgo = 0;
                    }
                    break;
                case 20:
                    if (box[16] == 0 && box[38] == 0) {
                        go(26);
                        compgo = 0;
                    }
                    break;
                case 21:
                    if (box[18] == 0 && box[40] == 0) {
                        go(27);
                        compgo = 0;
                    }
                    break;
                case 22:
                    if (box[20] == 0 && box[42] == 0) {
                        go(28);
                        compgo = 0;
                    }
                    break;
                case 23:
                    if (box[30] == 0) {
                        go(29);
                        compgo = 0;
                    }
                    break;
                case 24:
                    if (box[30] == 0 && box[32] == 0) {
                        go(31);
                        compgo = 0;
                    }
                    break;
                case 25:
                    if (box[32] == 0 && box[34] == 0) {
                        go(33);
                        compgo = 0;
                    }
                    break;
                case 26:
                    if (box[34] == 0 && box[36] == 0) {
                        go(35);
                        compgo = 0;
                    }
                    break;
                case 27:
                    if (box[36] == 0 && box[38] == 0) {
                        go(37);
                        compgo = 0;
                    }
                    break;
                case 28:
                    if (box[38] == 0 && box[40] == 0) {
                        go(39);
                        compgo = 0;
                    }
                    break;
                case 29:
                    if (box[40] == 0 && box[42] == 0) {
                        go(41);
                        compgo = 0;
                    }
                    break;
                case 30:
                    if (box[42] == 0) {
                        go(43);
                        compgo = 0;
                    }
                    break;
                case 31:
                    if (box[30] == 0 && box[52] == 0) {
                        go(44);
                        compgo = 0;
                    }
                    break;
                case 32:
                    if (box[32] == 0 && box[54] == 0) {
                        go(45);
                        compgo = 0;
                    }
                    break;
                case 33:
                    if (box[34] == 0 && box[56] == 0) {
                        go(46);
                        compgo = 0;
                    }
                    break;
                case 34:
                    if (box[36] == 0 && box[58] == 0) {
                        go(47);
                        compgo = 0;
                    }
                    break;
                case 35:
                    if (box[38] == 0 && box[60] == 0) {
                        go(48);
                        compgo = 0;
                    }
                    break;
                case 36:
                    if (box[40] == 0 && box[62] == 0) {
                        go(49);
                        compgo = 0;
                    }
                    break;
                case 37:
                    if (box[42] == 0 && box[64] == 0) {
                        go(50);
                        compgo = 0;
                    }
                    break;
                case 38:
                    if (box[52] == 0) {
                        go(51);
                        compgo = 0;
                    }
                    break;
                case 39:
                    if (box[52] == 0 && box[54] == 0) {
                        go(53);
                        compgo = 0;
                    }
                    break;
                case 40:
                    if (box[54] == 0 && box[56] == 0) {
                        go(55);
                        compgo = 0;
                    }
                    break;
                case 41:
                    if (box[56] == 0 && box[58] == 0) {
                        go(57);
                        compgo = 0;
                    }
                    break;
                case 42:
                    if (box[58] == 0 && box[60] == 0) {
                        go(59);
                        compgo = 0;
                    }
                    break;
                case 43:
                    if (box[60] == 0 && box[62] == 0) {
                        go(61);
                        compgo = 0;
                    }
                    break;
                case 44:
                    if (box[62] == 0 && box[64] == 0) {
                        go(63);
                        compgo = 0;
                    }
                    break;
                case 45:
                    if (box[64] == 0) {
                        go(65);
                        compgo = 0;
                    }
                    break;
                case 46:
                    if (box[52] == 0 && box[74] == 0) {
                        go(66);
                        compgo = 0;
                    }
                    break;
                case 47:
                    if (box[54] == 0 && box[76] == 0) {
                        go(67);
                        compgo = 0;
                    }
                    break;
                case 48:
                    if (box[56] == 0 && box[78] == 0) {
                        go(68);
                        compgo = 0;
                    }
                    break;
                case 49:
                    if (box[58] == 0 && box[80] == 0) {
                        go(69);
                        compgo = 0;
                    }
                    break;
                case 50:
                    if (box[60] == 0 && box[82] == 0) {
                        go(70);
                        compgo = 0;
                    }
                    break;
                case 51:
                    if (box[62] == 0 && box[84] == 0) {
                        go(71);
                        compgo = 0;
                    }
                    break;
                case 52:
                    if (box[64] == 0 && box[86] == 0) {
                        go(72);
                        compgo = 0;
                    }
                    break;
                case 53:
                    if (box[74] == 0) {
                        go(73);
                        compgo = 0;
                    }
                    break;
                case 54:
                    if (box[74] == 0 && box[76] == 0) {
                        go(75);
                        compgo = 0;
                    }
                    break;
                case 55:
                    if (box[76] == 0 && box[78] == 0) {
                        go(77);
                        compgo = 0;
                    }
                    break;
                case 56:
                    if (box[78] == 0 && box[80] == 0) {
                        go(79);
                        compgo = 0;
                    }
                    break;
                case 57:
                    if (box[80] == 0 && box[82] == 0) {
                        go(81);
                        compgo = 0;
                    }
                    break;
                case 58:
                    if (box[82] == 0 && box[84] == 0) {
                        go(83);
                        compgo = 0;
                    }
                    break;
                case 59:
                    if (box[84] == 0 && box[86] == 0) {
                        go(85);
                        compgo = 0;
                    }
                    break;
                case 60:
                    if (box[86] == 0) {
                        go(87);
                        compgo = 0;
                    }
                    break;
                case 61:
                    if (box[74] == 0 && box[96] == 0) {
                        go(88);
                        compgo = 0;
                    }
                    break;
                case 62:
                    if (box[76] == 0 && box[98] == 0) {
                        go(89);
                        compgo = 0;
                    }
                    break;
                case 63:
                    if (box[78] == 0 && box[100] == 0) {
                        go(90);
                        compgo = 0;
                    }
                    break;
                case 64:
                    if (box[80] == 0 && box[102] == 0) {
                        go(91);
                        compgo = 0;
                    }
                    break;
                case 65:
                    if (box[82] == 0 && box[104] == 0) {
                        go(92);
                        compgo = 0;
                    }
                    break;
                case 66:
                    if (box[84] == 0 && box[106] == 0) {
                        go(93);
                        compgo = 0;
                    }
                    break;
                case 67:
                    if (box[86] == 0 && box[108] == 0) {
                        go(94);
                        compgo = 0;
                    }
                    break;
                case 68:
                    if (box[96] == 0) {
                        go(95);
                        compgo = 0;
                    }
                    break;
                case 69:
                    if (box[96] == 0 && box[98] == 0) {
                        go(97);
                        compgo = 0;
                    }
                    break;
                case 70:
                    if (box[98] == 0 && box[100] == 0) {
                        go(99);
                        compgo = 0;
                    }
                    break;
                case 71:
                    if (box[100] == 0 && box[102] == 0) {
                        go(101);
                        compgo = 0;
                    }
                    break;
                case 72:
                    if (box[102] == 0 && box[104] == 0) {
                        go(103);
                        compgo = 0;
                    }
                    break;
                case 73:
                    if (box[104] == 0 && box[106] == 0) {
                        go(105);
                        compgo = 0;
                    }
                    break;
                case 74:
                    if (box[106] == 0 && box[108] == 0) {
                        go(107);
                        compgo = 0;
                    }
                    break;
                case 75:
                    if (box[108] == 0) {
                        go(109);
                        compgo = 0;
                    }
                    break;
                case 76:
                    if (box[96] == 0 && box[118] == 0) {
                        go(110);
                        compgo = 0;
                    }
                    break;
                case 77:
                    if (box[98] == 0 && box[120] == 0) {
                        go(111);
                        compgo = 0;
                    }
                    break;
                case 78:
                    if (box[100] == 0 && box[122] == 0) {
                        go(112);
                        compgo = 0;
                    }
                    break;
                case 79:
                    if (box[102] == 0 && box[124] == 0) {
                        go(113);
                        compgo = 0;
                    }
                    break;
                case 80:
                    if (box[104] == 0 && box[126] == 0) {
                        go(114);
                        compgo = 0;
                    }
                    break;
                case 81:
                    if (box[106] == 0 && box[128] == 0) {
                        go(115);
                        compgo = 0;
                    }
                    break;
                case 82:
                    if (box[108] == 0 && box[130] == 0) {
                        go(116);
                        compgo = 0;
                    }
                    break;
                case 83:
                    if (box[118] == 0) {
                        go(117);
                        compgo = 0;
                    }
                    break;
                case 84:
                    if (box[118] == 0 && box[120] == 0) {
                        go(119);
                        compgo = 0;
                    }
                    break;
                case 85:
                    if (box[120] == 0 && box[34] == 0) {
                        go(121);
                        compgo = 0;
                    }
                    break;
                case 86:
                    if (box[122] == 0 && box[36] == 0) {
                        go(123);
                        compgo = 0;
                    }
                    break;
                case 87:
                    if (box[124] == 0 && box[38] == 0) {
                        go(125);
                        compgo = 0;
                    }
                    break;
                case 88:
                    if (box[126] == 0 && box[40] == 0) {
                        go(127);
                        compgo = 0;
                    }
                    break;
                case 89:
                    if (box[128] == 0 && box[42] == 0) {
                        go(129);
                        compgo = 0;
                    }
                    break;
                case 90:
                    if (box[130] == 0) {
                        go(131);
                        compgo = 0;
                    }
                    break;
                case 91:
                    if (box[118] == 0 && box[140] == 0) {
                        go(132);
                        compgo = 0;
                    }
                    break;
                case 92:
                    if (box[120] == 0 && box[142] == 0) {
                        go(133);
                        compgo = 0;
                    }
                    break;
                case 93:
                    if (box[122] == 0 && box[144] == 0) {
                        go(134);
                        compgo = 0;
                    }
                    break;
                case 94:
                    if (box[124] == 0 && box[146] == 0) {
                        go(135);
                        compgo = 0;
                    }
                    break;
                case 95:
                    if (box[126] == 0 && box[148] == 0) {
                        go(136);
                        compgo = 0;
                    }
                    break;
                case 96:
                    if (box[128] == 0 && box[150] == 0) {
                        go(137);
                        compgo = 0;
                    }
                    break;
                case 97:
                    if (box[130] == 0 && box[152] == 0) {
                        go(138);
                        compgo = 0;
                    }
                    break;
                case 98:
                    if (box[140] == 0) {
                        go(139);
                        compgo = 0;
                    }
                    break;
                case 99:
                    if (box[140] == 0 && box[142] == 0) {
                        go(141);
                        compgo = 0;
                    }
                    break;
                case 100:
                    if (box[142] == 0 && box[144] == 0) {
                        go(143);
                        compgo = 0;
                    }
                    break;
                case 101:
                    if (box[144] == 0 && box[146] == 0) {
                        go(145);
                        compgo = 0;
                    }
                    break;
                case 102:
                    if (box[146] == 0 && box[148] == 0) {
                        go(147);
                        compgo = 0;
                    }
                    break;
                case 103:
                    if (box[148] == 0 && box[150] == 0) {
                        go(149);
                        compgo = 0;
                    }
                    break;
                case 104:
                    if (box[150] == 0 && box[152] == 0) {
                        go(151);
                        compgo = 0;
                    }
                    break;
                case 105:
                    if (box[152] == 0) {
                        go(153);
                        compgo = 0;
                    }
                    break;
                case 106:
                    if (box[140] == 0) {
                        go(154);
                        compgo = 0;
                    }
                    break;
                case 107:
                    if (box[142] == 0) {
                        go(155);
                        compgo = 0;
                    }
                    break;
                case 108:
                    if (box[144] == 0) {
                        go(156);
                        compgo = 0;
                    }
                    break;
                case 109:
                    if (box[146] == 0) {
                        go(157);
                        compgo = 0;
                    }
                    break;
                case 110:
                    if (box[148] == 0) {
                        go(158);
                        compgo = 0;
                    }
                    break;
                case 111:
                    if (box[150] == 0) {
                        go(159);
                        compgo = 0;
                    }
                    break;
                case 112:
                    if (box[152] == 0) {
                        go(160);
                        compgo = 0;
                    }
                    break;
            }
        }
        if (compgo == 1) reply1();
    }

    function reply1() {
        var i = 0,
            t = Math.round(Math.random() * 161) + 1;
        while (i < 161 && compgo == 1) {
            i++;
            t++;
            if (t > 160) t = 1;
            switch (box[t]) {
                case 1:
                case 4:
                    go(t - 1);
                    compgo = 0;
                    break;
                case 2:
                case 8:
                    go(t + 1);
                    compgo = 0;
                    break;
            }
        }
        if (compgo == 1) reply2();
    }

    function reply2() {
        var i = 0,
            t = Math.round(Math.random() * 161) + 1;
        while (i < 161 && compgo == 1) {
            i++;
            t++;
            if (t > 160) t = 1;
            switch (box[t]) {
                case 12:
                case 5:
                    go(t - 1);
                    compgo = 0;
                    break;
                case 3:
                case 9:
                case 10:
                    go(t + 1);
                    compgo = 0;
                    break;
                case 6:
                    switch (t) {
                        case 8:
                        case 30:
                        case 52:
                        case 74:
                        case 96:
                        case 118:
                        case 140:
                            go(t - 8);
                            break;
                        case 10:
                        case 32:
                        case 54:
                        case 76:
                        case 98:
                        case 120:
                        case 142:
                            go(t - 9);
                            break;
                        case 12:
                        case 34:
                        case 56:
                        case 78:
                        case 100:
                        case 122:
                        case 144:
                            go(t - 10);
                            break;
                        case 14:
                        case 36:
                        case 58:
                        case 80:
                        case 102:
                        case 124:
                        case 146:
                            go(t - 11);
                            break;
                        case 16:
                        case 38:
                        case 60:
                        case 82:
                        case 104:
                        case 126:
                        case 148:
                            go(t - 12);
                            break;
                        case 18:
                        case 40:
                        case 62:
                        case 84:
                        case 106:
                        case 128:
                        case 150:
                            go(t - 13);
                            break;
                        case 20:
                        case 42:
                        case 64:
                        case 86:
                        case 108:
                        case 130:
                        case 152:
                            go(t - 14);
                            break;
                    }
                    compgo = 0;
                    break;
            }
        }
    }
    window.convert = convert;
    window.init = init;
})();