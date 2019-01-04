/**
 * Created by Think on 2017/11/21.
 */
(function(){


    var charts=[];
    var colors =['#00B400','#0069F8','#ED1B24','#F15A25','#FF1EA0','#FFB001','#8CDC3F','#AA32A0'];
    var types =['肢体','智力','言语','视力','精神','多重','听力',"未登记"];
    var types1 =["未调查","不完整","已调查"];
    var defaultData = [{"name":"一级","value":0},{"name":"二级","value":0},{"name":"三级","value":0},{"name":"四级","value":0}];
    var types2 =["一级","二级","三级","四级","未评定"];
    var defaultData2 = [{"name":"一级","value":0},{"name":"二级","value":0},{"name":"三级","value":0},{"name":"四级","value":0},{"name":"未评定","value":0}];

    //绑定图表
    for(var i= 1;i<=11;i++){
        charts.push(echarts.init(document.getElementById('chart'+i)))
    };

    option = {
        color:colors,

        tooltip : {
            background:'rgba(0, 0, 0, 0.8)',
            textStyle: {
                color: 'rgba(255, 255, 255, 0.8)'
            },
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:types
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '45%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option1 = {
        color:colors,

        tooltip : {
            background:'rgba(0, 0, 0, 0.8)',
            textStyle: {
                color: 'rgba(255, 255, 255, 0.8)'
            },
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:types1
        },
        series : [
            {
                name: '残疾类别',
                type: 'pie',
                radius : '55%',
                center: ['50%', '45%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]

    };

    option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:['#FF7900','#00A8FF','#FFB001','#6FDC33'],

        legend: {
            orient: 'vertical',
            x : 'center',
            y : 'bottom',
            data:['一级','二级','三级','四级'],
            formatter: "{name} ?人 占比?%"
        },
        series: [
            {
                name:'残疾等级',
                type:'pie',
                radius: ['50%', '70%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'}
                ]
            }
        ]
    };

    option9 = {
        color:['#3AB54A','#F0F0F0'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
            name:'人数',
            type: 'value'
        },
        xAxis: {
            name:'区县名',
            nameRotate:45,
            axisLabel:{
                interval:0,
                rotate:45
            },
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '人数',
                type: 'bar',
                stack: '总量',
                data: [320, 302, 301, 334, 390, 330, 320]
            }/*,
             {
             name: '邮件营销',
             type: 'bar',
             stack: '总量',
             data: [120, 132, 101, 134, 90, 230, 210]
             }*/
        ]
    };





    var data1 = [];

    var objChart1 = {
        name:'disabledCategory',
        type:'statistical'
    };
//  var str = JSON.stringify(obj);
    var objChart2 = {
        name:'disabledLevel',
        type:'statistical'
    };
    var objChart3 = {
        name:'areaPeople',
        type:'statistical'
    };

    var objChart4 = {
        name:'dataStatus',
        type:'statistical'
    };
    var objChart5 = {
        name:'countLevelAll',
        type:'statistical'
    };
    //从app取数据\
    setTimeout(function(){
        getDataFromApp(objChart1,delData1);

        getDataFromApp(objChart2,delData2);
        getDataFromApp(objChart3,delData3);

        getDataFromApp(objChart4,delData4);
        getDataFromApp(objChart5,delData5);
    },200);

    function delData1(data){
        topTwoPic(data.data);
    }

    function delData4(data){
        topTwoPic1(data.data);
    }

    function delData2(data){
        centerPic(data.data);
    }

    function delData5(data){
        topTwoPic2(data);
    }

    function delData3(data){
        var info  = data.data;
        charts[8].clear();
        option9.xAxis.data = info.areas;
        option9.series[0].data = info.areaNum;
        charts[8].setOption(option9);
    }


    function topTwoPic(data) {
        charts[0].clear();
        var sortData =data.type.sort(function (a, b) { return a.value - b.value; });
        option.series[0].data = sortData;
        var tableData = getTableData(sortData);
        $("#total").text(tableData.total);
        charts[0].setOption(option);
        var str ="";
        for(var i=0;i<types.length;i++) {
            var centnum;
            var num;
            if (tableData.total != 0) {
                centnum = tableData[types[i]].centnum;
                num = tableData[types[i]].num;
            } else {
                centnum = "0.00%";
                num = 0;
            }
            if(centnum == 'NaN%'){
                centnum = '12.5%'
            }
            str += "<tr><td class='fi'><div class='d-i mr-10 colors' style='background-color:" + tableData[types[i]].color + " '></div><span>"
                + types[i] + "</span></td><td>" +
                centnum + "</td><td>" +
                num + "</td></tr>";
            $("#table_type").html(str);
        }
    }


    function topTwoPic1(data) {
        charts[9].clear();
        var sortData =data.type.sort(function (a, b) { return a.value - b.value; });
        option1.series[0].data = sortData;

        charts[9].setOption(option1);

    }
    function topTwoPic2(data) {
        charts[10].clear();
        //alert(JSON.stringify(data));
        var showData = {};
        if(data.data && data.data.length>0){
            showData = data.data;
        }else{
            showData = defaultData2;
        }
        var option10 = {
            color:colors,
            tooltip : {
                background:'rgba(0, 0, 0, 0.8)',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:types2
            },
            series : [
                {
                    name: '残疾等级',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '45%'],
                    data:data.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]

        };
        //alert(JSON.stringify(option10));
        charts[10].setOption(option10)
    }





    function centerPic(data){
        for(var i=0;i<types.length;i++){
            option2.title = {text:types[i]+"残疾人数统计图",
                left:'center',padding:[20,2,5,5]};
            if(data[types[i]]){
                option2.series[0].data = data[types[i]];
                option2.legend.formatter = legandFormatter(data[types[i]]);
            }else{
                option2.legend.formatter ="{name}    0人    占比0%";
                option2.series[0].data = defaultData;
            }
            if(i!=types.length-1){
                charts[i+1].clear();
                charts[i+1].setOption(option2);
            }
        }
    }


    function getTableData(data){
        var tabledata ={};
        var tableColors = [];
        var total=0;
        for(var i=0;i<data.length;i++){
            total+=data[i].value;
        }
        for(var i=0;i<data.length;i++){
            for(var j=0;j<types.length;j++){
                if(data[i].name==types[j]){
                    tabledata[types[j]]={
                        "num":data[i].value,
                        "centnum":(data[i].value*100/total).toFixed(2)+"%" || 0,
                        "color":colors[i]
                    }

                }
            }
        }
        tabledata.total=total;
        tabledata.colors = tableColors;
        return tabledata;
    }

    function legandFormatter(data) {
        return function(name){
            var index = 0;
            var num = 0;
            var cent = 0;
            var total = 0;
            data.forEach(function(value,i){
                total+= value.value;
                if(value.name == name){
                    num = value.value;
                }
            });
            if(total!=0&&num!=0) {
                cent = (num *100/total).toFixed(2);
            }
            return name + "    " + num + "人    占比" + cent+"%";
        }
    }


})();

