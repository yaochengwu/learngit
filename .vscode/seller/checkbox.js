function allclick(checkbox) { //全选
    if (checkbox[0].checked == true) {
        for (i = 1; i < 4; i++) {
            if (checkbox[i].checked == false) {
                checkbox[i].checked = true;

            }
        }
    }
    if (checkbox[0].checked == false) {
        var j = 0;
        for (i = 1; i < 4; i++) {
            if (checkbox[i].checked == true) {
                j++
            }
        }
        if (j == 3) {
            checkbox[0].checked = true;
        }
    }
}

function singleclick(checkbox, targetbox) { //单选
    var j = 0;
    for (i = 1; i < 4; i++) {
        if (checkbox[i].checked == true) {
            j++
        }
    }
    if (j == 3) {
        checkbox[0].checked = true;
    }
    if (j < 3) {
        checkbox[0].checked = false; //是否勾选全选
    }
    if (j == 0) {
        targetbox.checked = true; //必须选一个
    }
}
