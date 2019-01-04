/**
 * Created by Think on 2017/12/20.*/
//select数据
var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');
var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
var isFarmer = false;
if(residenceType == 1){
    isFarmer = true;
}

var data2 = {
    isWelfareHouse:isWelfareHouse,
    id:'',
    townFamilyIncome: 0,//城镇家庭收入情况
    townFamilyHouse: 0,//城镇家庭住房情况
    R14Name:"",
    townFamilyHouseA:townFamilyHouseA,
    townFamilyHouseA2:townFamilyHouseA2,
    homeType:'',//享受住房保障政策的类型
    poorArchivingSituation: 0,//贫困与建档立卡情况
    countryFamilyHouse: 0,//农村家庭住房情况
    personalId:'',//个人id
    showR9:false,
    isSub:false,
    isR92:false,
    isFarmer:isFarmer,
    R8check:false,
    R9check:false,
    R10check:false,
    R11check:false,
    //redpoint
    ifR8p:false,
    ifR9p:false,
    ifR10p:false,
    ifR11p:false,
    // step3
    learnToRead: 0,//是否识字
    educationalBackground:0,//受教育程度
    noSchoolCausation: 0,//未入学主要原因
    commonSchool:'',//普通教育机构
    speclalSchool:'',//特殊教育机构
    isCs:'',
    edulist:[],
    edulist1:edulist1,
    edulist2:edulist2,
    isRead:true,
    showR14:false,
    showR13:false,
    isR131:true,
    isR142:false,
    age614:true,
    R15G11:true,
    R12Check:false,
    R13Check:false,
    R14Check:true,
    R15Check:false,
    isc0:false,
    isc1:false,
    cScA:[false,false,false,false,false,false],
    cScAf:[true,true,true,true,true,true],
    isEdit:false,
    ifR12p:false,
    ifR13p:false,
    ifR14p:false,
    ifR15p:false,
    R8Tip:'',
    R10Tip:'',
    hasInfo:true,
};
var w = new Vue({
    el: '#write1',
    data: data2,
    methods:{
        openShowR9:function(){
            this.showR9 = true;
        },
        closeShowR9:function(num){
            var ts = this;
            if(ts.townFamilyHouse == 2){
            	
                if(ts.homeType){
                    ts.showR9 = false;
                    ts.R9check = true;
                }else{
                    ts.R9check = false;
                    $.toast('请选择享有住房保障政策');
                    setTimeout(function(){
                        $('.picker-modal.picker-columns').addClass('modal-in').show();
                    },2001)
                }
            }else{
                ts.showR9 = false;
            }
                setTimeout(function () {
                    w.isSub =  isOkSub2() && isOkSub3()
                },100)

        },
        tFh:function(a,event){
            var dom = $(event.target),ts = this;
            radioLi(dom);
            radioLiIsC(ts.townFamilyHouseA);
            if(dom.hasClass('ac')){
                ts.townFamilyHouse = a.id;
                a.isC = true;
            }else{
                ts.townFamilyHouse = 0;
            }
            if(a.id == 2){
                ts.isR92 = true
            }else{
                ts.isR92 = false;
                radioLiIsC(ts.townFamilyHouseA2);
                ts.homeType = '';
            }

        },
        tFh2:function(a,event){
            var dom = $(event.target),ts = this;
            checkLi(dom);
            if(dom.hasClass('ac')){
                a.isC = true;
            }else{
                a.isC = false;
            }
            var homeT = [];
            $.each(ts.townFamilyHouseA2,function(i,v){
                if(v.isC){
                    homeT.push(v.id);
                }
            });
            ts.homeType = homeT.join(',');
        },
        getBackInfo:function(){
            var send = {
                name:'list2',
                type:'appResponse',
                citizenId:disabilityCard
            };
            getDataFromApp(send,this.delBackData);
        },
        openShowR14:function(){
            var ts = this;
            ts.showR14 = true;
            if(ts.educationalBackground != 0){
                setTimeout(function(){
                    $('.readSc').eq(ts.educationalBackground-1).show().siblings('li').hide()
                },0)
            }
        },
        closeShowR14:function(num){
            var ts = this;
            if(ts.commonSchool || ts.speclalSchool){
                ts.showR14 = false;
                ts.R14Check = true;
            }else{
                if(ts.isCs == ''){
                    ts.showR14 = false;
                }else{
                    ts.R14Check = false;
                    $.toast('请选择教育机构');
                    setTimeout(function(){
                        $('.picker-modal.picker-columns').addClass('modal-in').show();
                    },2001);
                    ts.showR14 = true;
                }
            }
            setTimeout(function () {
                w.isSub =  isOkSub2() && isOkSub3()
            },100)
        },
        openShowR13:function(){
            var ts = this;
            if(ts.learnToRead == 2){
                ts.edulist = ts.edulist2
            }else{
                ts.edulist = ts.edulist1
            }
            ts.showR13 = true;
        },
        closeShowR13:function(num){
            this.showR13 = false;
        },
        chR13:function(arr,event){
            var dom = $(event.target),ts = this;
            radioLi(dom);
            radioLiIsC(ts.edulist);
            if(dom.hasClass('ac')){
                ts.educationalBackground = arr.id;
                $('#educationalBackground').val(arr.name);
                arr.isC = true;
            }else{
                ts.educationalBackground = 0;
            }

        },
        cSchool:function(type,event){
            var dom = $(event.target),ts = this;
            ts.isR142 = true;
            radioLi(dom);
            ts.cScA = [false,false,false,false,false,false];
            $('#R14').val('');
            ts.isCs = '';
            ts.commonSchool = '';
            ts.speclalSchool = '';
            if(dom.hasClass('ac')){
                ts.isCs = type;
            }
        },
        cSc:function(id,name,event){
        	w.R14Name = name;
            var str = '';
            var dom = $(event.target),ts = this;
            radioLi(dom);
            ts.cScA = [false,false,false,false,false,false];
            if(ts.isCs == 1){
                str = '普通-'+name;
                ts.commonSchool = id;
                ts.speclalSchool = '';
            }else if(ts.isCs == 2){
                str = '特殊-'+name;
                ts.commonSchool = '';
                ts.speclalSchool = parseInt(id)+6
            }
            if(dom.hasClass('ac')){
                ts.cScA[id-1] = !ts.cScA[id-1];
            }
            $('#R14').val(str);
        },
        delBackData:function(data){
            var ts = this,oldInfo = data.data.old,userInfo = data.data.userInfo;
            var info = {},isModify = false;
            if(userInfo){
                var low = userInfo.lowInsurance;
                var str = '';
                if(low){
                    
                    str = '提示：此人在民政厅低保库中存在信息（发放金额：'+low.amountOfPayment+'元，差额救助金额：'+low.amountOfDifferentialRelief+'元，分类施保金额：'+low.classifiedAmountOfInsurance+'元）';
//               	w.townFamilyIncome = townFamilyIncomeA[0]
//                      $('#townFamilyIncome').prop('disabled',true)
                }else{
                    str = '提示：此人在民政厅低保库中暂无信息'
//                  ts.townFamilyIncome = '';
//                      $('#townFamilyIncome').prop('disabled',false)
                    
                }
                ts.R8Tip = str;
                var sign = userInfo.sign;
                var strSign = '';
                if(sign){
                    var sStr = '';
                    if(sign.signFlag == 1 || sign.signFlag == 3 || sign.signFlag == 4){
                        if(sign.signFlag == 1){
                            sStr = '脱贫'
                        }else if(sign.signFlag == 3){
                            sStr = '返贫'
                        }else if(sign.signFlag == 4){
                            sStr = '稳定脱贫'
                        }
                        strSign = '提示：此人在扶贫办建档立卡库中存在信息，贫困状态为【'+sStr+'】';
//                      ts.poorArchivingSituation = poorArchivingSituationA[0];
//                      $('#poorArchivingSituation').prop('disabled',true)
                    }else{
                        strSign = '提示：此人在扶贫办建档立卡库中暂无信息';
//                      ts.poorArchivingSituation = '';
//                      $('#poorArchivingSituation').prop('disabled',false)
                    }
                }else{
                    strSign = '提示：此人在扶贫办建档立卡库中暂无信息';
//                   ts.poorArchivingSituation = '';
//                      $('#poorArchivingSituation').prop('disabled',false)
                }
                ts.R10Tip = strSign;
                ts.hasInfo = true
            }else{
                ts.hasInfo = false
            }

            if(data.data.modify){
                info = data.data.modify;
                isModify = true;
            }else{
                info = data.data.old;
                isModify = false;
            }
          
            if(isModify && oldInfo){
            	
                //数据比较
                ts.ifR8p = getModify(info.townFamilyIncome,oldInfo.townFamilyIncome);
                ts.ifR9p = getModify(info.townFamilyHouse,oldInfo.townFamilyHouse) || getModify(info.homeType,oldInfo.homeType) ;
                ts.ifR10p = getModify(info.poorArchivingSituation,oldInfo.poorArchivingSituation);
                ts.ifR11p = getModify(info.countryFamilyHouse,oldInfo.countryFamilyHouse);
                ts.ifR12p = getModify(info.learnToRead,oldInfo.learnToRead);
                ts.ifR13p = getModify(info.educationalBackground,oldInfo.educationalBackground);
                ts.ifR14p = getModify(info.commonSchool,oldInfo.commonSchool) || getModify(info.speclalSchool,oldInfo.speclalSchool) ;
                ts.ifR15p = getModify(info.noSchoolCausation,oldInfo.noSchoolCausation);
            }
            ts.id = info.id;
            ts.personalId = info.personalId;
            if(isWelfareHouse == 2){
                if(!isFarmer){
                    ts.townFamilyIncome = info.townFamilyIncome;//城镇家庭收入情况
                    var R8Str = info.townFamilyIncome ? townFamilyIncomeA[info.townFamilyIncome-1] : '';
                    $('#townFamilyIncome').val(R8Str);
                    ts.homeType = info.homeType;//享受住房保障政策的类型
                    ts.townFamilyHouseA2 = getBackIsC(ts.homeType,townFamilyHouseA2);
                    var R9strs = '';
                    if(ts.homeType && ts.homeType!=0){
                        R9strs = '('+getStrType(ts.homeType,ts.townFamilyHouseA2)+')';
                    }
                    ts.townFamilyHouse = info.townFamilyHouse;//城镇家庭住房情况
                    var R9Str = info.townFamilyHouse ? townFamilyHouseA[info.townFamilyHouse-1].name : '';
                    if(info.townFamilyHouse){
                        ts.R9check = true
                    }
                    $('#R9').val(R9Str+R9strs);
                    changeTh($('#R9'));
                    ts.townFamilyHouseA = getBackIsC(ts.townFamilyHouse,townFamilyHouseA);
                }else{
                    ts.poorArchivingSituation = info.poorArchivingSituation;//贫困与建档立卡情况
                    var R10Str = info.poorArchivingSituation ? poorArchivingSituationA[info.poorArchivingSituation-1] : '';
                    $('#poorArchivingSituation').val(R10Str);

                    ts.countryFamilyHouse = info.countryFamilyHouse;//农村家庭住房情况
                    var R11Str = info.countryFamilyHouse ? countryFamilyHouseA[info.countryFamilyHouse-1] : '';
                    $('#countryFamilyHouse').val(R11Str);
                }
            }
            ts.isEdit = true;
            ts.personalId = info.personalId;
            ts.learnToRead = info.learnToRead;//是否识字
            var R12Str = info.learnToRead ? trueFalseA[info.learnToRead-1] : '';
            $('#learnToRead').val(R12Str);
            ts.educationalBackground = info.educationalBackground;//受教育程度
            if(ts.learnToRead == 2){
                ts.edulist = edulist2
            }else{
                ts.edulist = edulist1
            }
            ts.edulist = getBackIsC(ts.educationalBackground,ts.edulist);
            var R13Str = info.educationalBackground ? ts.edulist[info.educationalBackground-1].name : '';
            $('#educationalBackground').val(R13Str);
            if(age>15){
                ts.cScAf = [false,false,false,false,false];
            }else{
                ts.cScAf = [true,true,true,true,true];
            }
            ts.commonSchool = info.commonSchool;//普通教育机构
            var R14Str = '';
            if(ts.commonSchool && ts.commonSchool!=0){
                ts.isR142 = true;
                ts.isc0 = true;
                ts.cScAf[ts.commonSchool-1] = true;
                ts.cScA[ts.commonSchool-1] = true;
                R14Str = '普通-'+edulistt[ts.commonSchool-1].name;
            }
            ts.speclalSchool = info.speclalSchool;//特殊教育机构
            if(ts.speclalSchool && ts.speclalSchool!=0){
                ts.isR142 = true;
                ts.isc1 = true;
                ts.cScAf[ts.speclalSchool-7] = true;
                ts.cScA[ts.speclalSchool-7] = true;
                R14Str = '特殊-'+edulistt[ts.speclalSchool-7].name;
            }
            $('#R14').val(R14Str);
            ts.noSchoolCausation = info.noSchoolCausation;//未入学主要原因
            var R15Str = info.noSchoolCausation ? noSchoolCausationA[info.noSchoolCausation-1] : '';
            $('#noSchoolCausation').val(R15Str);
            setTimeout(function(){
                w.isSub =  isOkSub2() && isOkSub3()
            },1000);
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            appInit();
            //this.getBackInfo();
        })

    }
});
setTimeout(function(){
    w.getBackInfo();
},1000);
if(age<15){
    w.isRead = false;
}
if(age<6 || age>14){
    w.age614 = false;
    w.R15G11 = false;
}
//是否能提交
function isOkSub2(){
    var isCheck = false;
        if(w.isFarmer){ //农业
        	w.R8check = true;
        	w.R9check = true;
            if( w.R10check && w.R11check && w.R8check && w.R9check){
                isCheck = true
            }else{
                isCheck = false
            }
            if(w.isWelfareHouse != 2){
            	isCheck = true
            }
        }else{ //非农业
        	w.R10check = true;
        	w.R11check = true;
            if(w.R8check && w.R9check && w.R10check && w.R11check){
                isCheck = true
            }else{
                isCheck = false
            }
             if(w.isWelfareHouse != 2){
            	isCheck = true
            }
        }

    return isCheck;
}
function isOkSub3(){
    var isCheck = false;
    if(!w.isRead && !w.R15G11){
        if(w.R14Check){
            isCheck = true
        }else{
            isCheck = false
        }
    }
    if(w.isRead){
        if(w.R14Check && w.R12Check && w.R13Check){
            isCheck = true
        }else{
            isCheck = false
        }
    }
    if(w.R15G11){
        if(w.R14Check && w.R15Check){
            if($('#noSchoolCausation').val()){
                isCheck = true
            }else{
                isCheck = false;
            }

        }else{
            isCheck = false
        }
    }else{
        if(w.R14Check){
            isCheck = true;
        }
    }
    // if(!w.R15G11){
    // 	isCheck = true
    // }
    return isCheck
}

function getR9Str(){
    var str1 = getStrType(w.townFamilyHouse, w.townFamilyHouseA);
    var str2 = '';
    if(w.homeType){
        str2 = '('+getStrType(w.homeType, w.townFamilyHouseA2)+')';
    }
    $('#R9').val(str1+str2);
    changeTh($('#R9'));
}
//homeType
w.$watch('homeType', function (newValue, oldValue) {
    getR9Str()
});
//R8
w.$watch('townFamilyIncome', function (newValue, oldValue) {
	if(!isFarmer && isWelfareHouse == 2){ //isWelfareHouse 是否在福利院居住  1：是   isFarmer 是否为农业 非农业 true 是
        if(newValue){
            w.R8check = true
        }else{
            w.R8check = false
        }
	}else{
        w.R8check = true
	}
    w.isSub =  isOkSub2() && isOkSub3()

});
//R9
w.$watch('townFamilyHouse', function (newValue, oldValue) {
	if(!isFarmer && isWelfareHouse == 2){
        if(newValue){
            if(newValue == 2){
                if(w.homeType){
                    w.R9check = true
                }else{
                    w.R9check = false
                }
            }else{
                w.R9check = true
            }
            getR9Str()
        }else{
            w.R9check = false
        }
	}else{
        w.R9check = true
	}
    w.isSub =  isOkSub2() && isOkSub3()
});

//R10
w.$watch('poorArchivingSituation', function (newValue, oldValue) {
if(isFarmer && isWelfareHouse == 2){ //!isFarmer非农业  isWelfareHouse未居住在福利院

    if(newValue != 0){
        w.R10check = true
    }else{
        w.R10check = false
    }
}else{
    w.R10check = true
}
    w.isSub =  isOkSub2() && isOkSub3()
});
//R11
w.$watch('countryFamilyHouse', function (newValue, oldValue) {
  if(newValue != 0){
        w.R11check = true
    }else{
        w.R11check = false
    }
    w.isSub =  isOkSub2() && isOkSub3()
});
//R12
w.$watch('learnToRead', function (newValue, oldValue) {
    if(!w.isEdit){
        $('#educationalBackground').val('');
        radioLiIsC(w.edulist);
    }
    if(newValue != 0){
        w.R12Check = true
    }else{
        w.R12Check = false
    }
    w.isSub =  isOkSub2() && isOkSub3()
});
//R13
w.$watch('educationalBackground', function (n, oldValue) {
    if(n && n != 0){
        if(!w.isEdit){
            $('#R14').val('');
        }
        w.R13Check = true;
        w.cScAf = [false,false,false,false,false,false];
        if(n == 7){
            w.cScAf[n-2] = true;
        }else{
            w.cScAf[n-1] = true;
        }
        if(n == 1){
            w.isR131 = false;
            w.commonSchool = '';
            w.speclalSchool = '';
        }else{
            w.isR131 = true;
        }
    }else{
        w.R13Check = false;
    }
  
   w.isSub = isOkSub2() && isOkSub3();
});

//isCs普通特殊教育机构
w.$watch('isCs', function (n, oldValue) {
    if(n == 1){
        w.isc0 = true
    }else{
        w.isc0 = false
    }
    if(n == 2){
        w.isc1 = true
    }else{
        w.isc1 = false
    }
    w.isSub = isOkSub2() && isOkSub3()
});
//commonSchool
function R15G11(){
    if(w.age614){
        if(w.commonSchool || w.speclalSchool){
            w.R15G11 = false;
        }else{
            w.R15G11 = true;
        }
    }else{
        w.R15G11 = false;
    }
}
w.$watch('commonSchool', function (n, oldValue) {
    R15G11();
    w.isSub = isOkSub2() && isOkSub3();
});
w.$watch('speclalSchool', function (n, oldValue) {
    R15G11();
    w.isSub = isOkSub2() && isOkSub3();
});

//R15
w.$watch('noSchoolCausation', function (n, oldValue) {
	if(w.R15G11){
		 if(n!=0){
        w.R15Check = true;
    }else{
        w.R15Check = false;
    }
	}else{
		w.R15Check = true;
	}
     w.isSub = isOkSub2() && isOkSub3();
});

if(w.isRead){
    picker($('#learnToRead'),trueFalseA);//是否识字
    $('#learnToRead').on('change',function(){
        w.learnToRead = trueFalseA.indexOf( $(this).val())+1;
    });
}
w.$watch('R15G11',function (n,o) {
    if(n){
        setTimeout(function () {
            picker($("#noSchoolCausation"),noSchoolCausationA);//未入学主要原因
            $('#noSchoolCausation').on('change',function(){
                w.noSchoolCausation = noSchoolCausationA.indexOf( $(this).val())+1;
            });
        },0)
    }else{
        w.noSchoolCausation = 0
    }
    setTimeout(function () {
        w.isSub =  isOkSub2() && isOkSub3()
    },100)
})
if(w.R15G11){
    setTimeout(function () {
        picker($("#noSchoolCausation"),noSchoolCausationA);//未入学主要原因
        $('#noSchoolCausation').on('change',function(){
            w.noSchoolCausation = noSchoolCausationA.indexOf( $(this).val())+1;
        });
    },0)
}
picker($("#townFamilyIncome"),townFamilyIncomeA);//城镇家庭收入情况
$('#townFamilyIncome').on('change',function(){
    w.townFamilyIncome = townFamilyIncomeA.indexOf( $(this).val())+1;
});

picker($("#poorArchivingSituation"),poorArchivingSituationA);//贫困与建档立卡情况
$('#poorArchivingSituation').on('change',function(){
    w.poorArchivingSituation = poorArchivingSituationA.indexOf( $(this).val())+1;
});

picker($("#countryFamilyHouse"),countryFamilyHouseA);//家庭住房情况
$('#countryFamilyHouse').on('change',function(){
    w.countryFamilyHouse = countryFamilyHouseA.indexOf( $(this).val())+1;
});

//点击提交
$('.fix-btn').on('click',function(){

    if(!w.isSub) return $.toast('填写不完整！');
    var send = {
        id: w.id,
        personalId: w.personalId,
        townFamilyIncome: w.townFamilyIncome || 0,//城镇家庭收入情况
        townFamilyHouse:w.townFamilyHouse || 0,//城镇家庭住房情况
        homeType:w.homeType || '',//享受住房保障政策的类型
        poorArchivingSituation:w.poorArchivingSituation || 0,//贫困与建档立卡情况
        countryFamilyHouse:w.countryFamilyHouse || 0,//农村家庭住房情况
        learnToRead: w.learnToRead || 0,//是否识字
        educationalBackground:w.educationalBackground || 0,//受教育程度
        noSchoolCausation:w.noSchoolCausation || 0,//未入学主要原因
        commonSchool:w.commonSchool || '',//普通教育机构
        speclalSchool:w.speclalSchool || ''//特殊教育机构
    };
    if(isFarmer){
        send.townFamilyIncome = 0;
        send.homeType = '';
        send.townFamilyHouse = 0;
    }else{
        send.poorArchivingSituation = 0;
        send.countryFamilyHouse = 0;
    }
    if(!w.isRead){
        send.learnToRead = 0;
        send.educationalBackground = 0;
    }
    if(!w.isR131){
        send.commonSchool = '';
        send.speclalSchool = '';
    }
    if(!w.R15G11){
        send.noSchoolCausation = 0;
    }
    var obj = {
        name:'list2',
        type:'h5Upload',
        data:send,
        status:''
    };
    var str = JSON.stringify(obj);
    if(isIos() == 1){
        messageHtmlHandler(str,goto)
    }else if(isIos() == 2){
        messageHtmlHandler(obj,goto)
    }
});
function goto(){
	var R14val = '';
	if(w.R14Name && $('#R14').val()){
		R14val = 1;
	}
    if(age<16 || age>59 || isWelfareHouse == 1){
        window.location.href='write4.html?age='+ age+'&R14val='+ R14val+'&residenceType='+ residenceType+'&isWelfareHouse='+ isWelfareHouse+'&from=2&disabilityCard='+disabilityCard +'&countryFamilyHouse='+w.countryFamilyHouse +'&townFamilyIncome=' + w.townFamilyIncome+'&noSchoolCausation=' + w.noSchoolCausation;
    }else{
        var isInStudy = 0,changeR16 = 0;
        if(w.commonSchool && w.commonSchool!=0){
            isInStudy = 1;
        }
        if(w.speclalSchool && w.speclalSchool!=0){
            isInStudy = 1;
        }
        if(isInStudy == 1 && w.educationalBackground!=0){
            changeR16 = 1;
        }
        window.location.href='write3.html?age='+ age+'&R14val='+ R14val+'&residenceType='+ residenceType+'&isWelfareHouse='+ isWelfareHouse+'&from=2&disabilityCard='+disabilityCard+'&isInStudy='+ isInStudy+'&changeR16='+ changeR16+'&townFamilyIncome='+w.townFamilyIncome+'&countryFamilyHouse='+w.countryFamilyHouse+'&noSchoolCausation=' + w.noSchoolCausation;
    }
}
//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});




