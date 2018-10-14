function getdata() { //根据select选项获取数据
    var regioncon;
    var procon;
    var tablist = [];
    for (var j = 0; j < 4; j++) {
        if (productbox[j].checked) {
            procon = productbox[j].value;
            for (var i = 0; i < 4; i++) {
                if (regionbox[i].checked) {
                    regioncon = regionbox[i].value;
                    for (var k = 0; k < sourceData.length; k++) { //？？？原来for还有格式要求嘛
                        if (sourceData[k].region == regioncon && sourceData[k].product == procon) {
                            tablist.push(sourceData[k]);
                        }
                    }
                }
            }
        }
    }
    //  向要返回的数据list中添加符合表单所选项的数据  
    return tablist; // 返回数据
}
