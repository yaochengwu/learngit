
        function renderform() { // 渲染新的表格
            table.innerHTML = ""; //clear out the table
            var tablist = getdata(); // 根据表单选项获取数据
            var regionnum = 0;
            var row1;
            var row2;
            for (var i = 1; i < 4; i++) {
                if (regionbox[i].checked == true) {
                    regionnum++
                }
            }
            if (regionnum == 1) { //只有一个地址时，第一列是地址
                row1 = "region";
                row2 = "product";
            } else {
                row1 = "product";
                row2 = "region";
            }

            var tabcon = document.createElement("table");
            //输出表头
            var tabtr = document.createElement("tr");
            var th = [row1, row2, "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

            for (var i = 0; i < th.length; i++) {
                var tabhead = document.createElement("th");
                var tabheacon = document.createTextNode(th[i]);
                tabhead.appendChild(tabheacon);
                tabtr.appendChild(tabhead);
            }
            tabcon.appendChild(tabtr); //表头放到tr中

            //搞数据

            for (var i = 0; i < tablist.length; i++) {
                var tabtr = document.createElement("tr"); //行

                var tabdatap = document.createElement("td"); //产品
                var tabdatapro = document.createTextNode(tablist[i].product);
                tabdatap.appendChild(tabdatapro);


                var tabdatar = document.createElement("td"); //位置
                var tabdatareg = document.createTextNode(tablist[i].region);
                tabdatar.appendChild(tabdatareg);

                //塞到行里
                if (regionnum == 1) { //只有一个地址时，第一列是地址
                    // console.log(i);
                    if (i == 0) {
                        tabdatar.rowSpan = tablist.length;
                        tabtr.appendChild(tabdatar); //数据塞入行
                        tabtr.appendChild(tabdatap);
                    } else {
                        tabtr.appendChild(tabdatap); //不需要再加地址信息
                    }

                } else {
                    if (i % regionnum == 0) {
                        tabdatap.rowSpan = regionnum;
                        tabtr.appendChild(tabdatap);
                        tabtr.appendChild(tabdatar);
                    } else {
                        tabtr.appendChild(tabdatar);
                    }


                }


                for (var j = 0; j < 12; j++) {
                    var tabdata = document.createElement("td");
                    var tabdatasale = document.createTextNode(tablist[i].sale[j]);
                    tabdata.appendChild(tabdatasale);
                    tabtr.appendChild(tabdata);
                }


                tabcon.appendChild(tabtr);
            }

            table.appendChild(tabcon); //表格放到div中
        }