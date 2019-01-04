/**
 * Created by Think on 2017/12/26.
 */
/**
 * Created by Think on 2017/12/20.*/
var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');
var countryFamilyHouse = getParam('countryFamilyHouse');//R11
var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
var isInStudy = getParam('isInStudy');//是否在校学习，是：1，否：0
var changeR16 = getParam('changeR16');//1:R16否
var townFamilyIncome = getParam('townFamilyIncome');//1:R16否
var noSchoolCausation = getParam('noSchoolCausation');// R15---G11 
var R14val = getParam('R14val');// R14--G10

var unFarmer = false;
if(residenceType == 2){
    unFarmer = true;
}

var noJobCausationA = [];
if(isInStudy == 1){
    noJobCausationA = [{id:1,name:'在校学习',isC:false}];
}else{
    noJobCausationA = [
        {id:1,name:'在校学习',isC:false},
        {id:2,name:'退休',isC:false},
        {id:3,name:'无就业意愿',isC:false},
        {id:4,name:'无就业技能',isC:false},
        {id:5,name:'丧失劳动能力',isC:false},
        {id:6,name:'农用土地被征用',isC:false},
        {id:7,name:'其他',isC:false}
    ]
}

var data3 = {
    id:'',
    personalId: '',
    sourceOfIncomeA:sourceOfIncomeA,
    noJobCausationA:noJobCausationA,
    haveJob: '',//是否就业
    disabilityJobType: '',//残疾人就业形式
    disabilityJobTypeA: disabilityJobTypeA,
    sourceOfIncome:'',//未就业主要生活来源
    noJobCausation: '',//未就业主要原因
    unempRegistration: '',//是否进行失业登记
    companyType: '',//企业类型
    helpJobPoorA:helpJobPoorA,
    helpJobPoorOne: '',//动态更新年度内获得的就业扶贫帮扶-1
    helpJobPoorTwo:'',//动态更新年度内获得的就业扶贫帮扶-2
    helpJobPoorThree: 0,//动态更新年度内获得的就业扶贫帮扶-3
    helpJobPoorFour: 0,//动态更新年度内获得的就业扶贫帮扶-4
    helpJobPoorFive:0,//动态更新年度内获得的就业扶贫帮扶-5
    helpJobPoorSix: 0,//动态更新年度内获得的就业扶贫帮扶-6
    jobPoorNeedsOne: '',//目前就业扶贫需求1
    jobPoorNeedsTwo: '',//目前就业扶贫需求2
    jobPoorNeedsThree: '',//目前就业扶贫需求3
    jobPoorNeedsFour: '',//目前就业扶贫需求-4
    jobPoorNeedsFive: '',//目前就业扶贫需求5
    jobPoorNeedsSix: 0,//目前就业扶贫需求6
    jobPoorNeeds1A:jobPoorNeeds1A,
    jobPoorNeeds2A:jobPoorNeeds2A,
    jobPoorNeeds3A:jobPoorNeeds3A,
    jobPoorNeeds4A:jobPoorNeeds4A,
    jobPoorNeeds5A:jobPoorNeeds5A,
    jobPoorNeedsA:jobPoorNeedsA,
    trainType: '',//培训类型
    trainTypeA: trainTypeA,//培训类型
    otherHelp: '',//其他帮扶
    otherHelpA: otherHelpA,//其他帮扶
    quotaSchemeEmployment: '',//按比例就业
    quotaSchemeEmploymentA: quotaSchemeEmploymentA,//按比例就业
    isSub:false,
    goR18:true,
    isFarmerGo18:false,
    showR17:false,
    isQuotaS:false,
    goR20:true,
    goR25:true,
    goR22:true,
    showR20:false,
    isR201:false,
    isR205:false,
    showR21:false,
    isR211:false,
    isR212:false,
    isR213:false,
    isR214:false,
    isR215:false,
    isShowG13:true,
    G13A:[],
    G13AName:[],
    R16check:false,
    R162check:true,
    R17check:false,
    R17A:[],
    R17AName:[],
    R18check:false,
    R19check:false,
    R20check:false,
    R20A:[],
    R20AName:[],
    R21check:false,
    showR18:false,
    showR19:false,
    isEdit:false,
    //redpoint
    ifR16p:false,
    ifR162p:false,
    ifR17p:false,
    ifR18p:false,
    ifR19p:false,
    ifR20p:false,
    ifR21p:false,
    R18input:'',
    R19input:''
};
var w = new Vue({
    el: '#write3',
    data: data3,
    methods:{
        openShowR17:function(){
            this.showR17 = true;
        },
        closeShowR17:function(num){
            this.showR17 = false;
        },
        openShowR18:function(){
            this.showR18 = true;
        },
        closeShowR18:function(num){
            this.showR18 = false;
        },
        openShowR19:function(){
            this.showR19 = true;
        },
        closeShowR19:function(num){
            this.showR19 = false;
        },
        openShowR20:function(){
            this.showR20 = true;
        },
        closeShowR20:function(num){
            this.showR20 = false;
        },
        openShowR21:function(){
            this.showR21 = true;
        },
        closeShowR21:function(num){
            this.showR21 = false;
        },
        choR17:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id,text = arr.name;
            radioLiIsC(ts.disabilityJobTypeA);
            if(id != 1){
                radioLi(dom);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                    ts.disabilityJobType = id;
                }
                ts.isQuotaS = false;
                radioLiIsC(ts.quotaSchemeEmploymentA);
                ts.quotaSchemeEmployment = '';
            }else{
                ts.isQuotaS = true;
                if(ts.quotaSchemeEmployment){
                    arr.isC = true;
                    ts.disabilityJobType = id;
                    dom.addClass('ac');
                }
            }
        },
        choR171:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            radioLi(dom);
            radioLiIsC(ts.quotaSchemeEmploymentA);
            if(dom.hasClass('ac')){
                ts.quotaSchemeEmployment = arr.id;
                arr.isC = true;
                ts.disabilityJobTypeA[0].isC = true;
                ts.disabilityJobType = 1;
            }else{
                ts.quotaSchemeEmployment = '';
                ts.disabilityJobTypeA[0].isC = false;
                ts.disabilityJobType = '';
            }
        },
        choR20:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id,str = '';
            ts.isR205 = false;
            ts.isR201 = false;
            if(id == 6){
                radioLi(dom);
                radioLiIsC(ts.helpJobPoorA);
                if($(dom).hasClass('ac')){
                    arr.isC = true;
                    radioLiIsC(ts.trainTypeA);
                    radioLiIsC(ts.otherHelpA);
                    ts.helpJobPoorSix = id;
                    ts.R20A = [6];
                    ts.R20AName = ['无'];
                    $('#helpJobPoor').val('无');
                    changeTh($('#helpJobPoor'));
                }else{
                    ts.R20A = [];
                    ts.R20AName = [];
                    ts.helpJobPoor = '';
                    $('#helpJobPoor').val('');
                    changeTh($('#helpJobPoor'));
                }
            }else{
                ts.helpJobPoorSix= 0;
                ts.helpJobPoorA[5].isC = false;
                if(id == 1){
                    ts.isR201 = true;
                }else if(id == 5){
                    ts.isR205 = true;
                }else{
                    checkLi(dom);
                    ts.helpJobPoorA[5].isC = false;
                    if(dom.hasClass('ac')){
                        arr.isC = true;
                        if(id==2){
                            ts.helpJobPoorTwo = id
                        }else if(id == 3){
                            ts.helpJobPoorThree = id
                        }else if(id == 4){
                            ts.helpJobPoorFour= id
                        }
                    }else{
                        arr.isC = false;
                        if(id==2){
                            ts.helpJobPoorTwo = ''
                        }else if(id == 3){
                            ts.helpJobPoorThree = 0
                        }else if(id == 4){
                            ts.helpJobPoorFour= 0
                        }
                    }
                    ts.R20A = [];
                    ts.R20AName = [];
                    $.each(ts.helpJobPoorA,function(i,v){
                        if(v.isC){
                            var id = v.id,
                                text = v.name,
                                isPush = true;
                            if(id == 9 && ts.quotaSchemeEmployment == ''){
                                isPush = false;
                            }
                            if(isPush){
                                ts.R20A.push(id);
                                ts.R20AName.push(text);
                            }
                        }
                    });
                }

            }
        },
        choR201:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            checkLi(dom);
            if(dom.hasClass('ac')){
                ts.helpJobPoorA[0].isC = true;
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            var pdA = [];
            $('.R201-li').each(function(i,v){
                if($(v).hasClass('ac')){
                    var id = $(v).attr('data-id');
                    pdA.push(id);
                }
            });
            ts.trainType = pdA.join(',');
        },
        choR205:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            checkLi(dom);
            if(dom.hasClass('ac')){
                ts.helpJobPoorA[4].isC = true;
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            var pdA = [];
            $('.R205-li').each(function(i,v){
                if($(v).hasClass('ac')){
                    var id = $(v).attr('data-id');
                    pdA.push(id);
                }
            });
            ts.otherHelp = pdA.join(',');
        },
        choR21:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            ts.isR211 = false;
            ts.isR212 = false;
            ts.isR213 = false;
            ts.isR214 = false;
            ts.isR215 = false;
            if(id == 6){
                radioLi(dom);
                radioLiIsC(ts.jobPoorNeedsA);
                radioLiIsC(ts.jobPoorNeeds1A);
                radioLiIsC(ts.jobPoorNeeds2A);
                radioLiIsC(ts.jobPoorNeeds3A);
                radioLiIsC(ts.jobPoorNeeds4A);
                radioLiIsC(ts.jobPoorNeeds5A);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                    ts.jobPoorNeedsSix = id;
                }else{
                    ts.jobPoorNeedsSix = 0;
                }
            }else{
                ts.jobPoorNeedsSix = 0;
                ts.jobPoorNeedsA[5].isC = false;
                if(id == 1){
                    ts.isR211 = true;
                }else if(id == 2){
                    ts.isR212 = true;
                }else if(id == 3){
                    ts.isR213 = true;
                }else if(id == 4){
                    ts.isR214 = true;
                }else if(id == 5){
                    ts.isR215 = true;
                }
            }
        },
        choR21c:function(arr,num,event){
            var ts = this,dom = $(event.target),id = arr.id;
            checkLi(dom);
            if(dom.hasClass('ac')){
                arr.isC = true;
                ts.jobPoorNeedsA[5].isC = false;
            }else{
                arr.isC = false;
            }
            if(num == 1){
                var a1 = [];
                $('.show1-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        a1.push($(v).attr('data-id'));
                    }
                });
                ts.jobPoorNeedsOne = a1.join(',');
                if(ts.jobPoorNeedsOne){
                    ts.jobPoorNeedsA[0].isC = true
                }else{
                    ts.jobPoorNeedsA[0].isC = false
                }
            }else if(num == 2){
                var a2 = [];
                $('.show2-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        a2.push($(v).attr('data-id'));
                    }
                });
                ts.jobPoorNeedsTwo = a2.join(',');
                if(ts.jobPoorNeedsTwo){
                    ts.jobPoorNeedsA[1].isC = true
                }else{
                    ts.jobPoorNeedsA[1].isC = false
                }
            }else if(num == 3){
                var a3 = [];
                $('.show3-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        a3.push($(v).attr('data-id'));
                    }
                });
                ts.jobPoorNeedsThree = a3.join(',');
                if(ts.jobPoorNeedsThree){
                    ts.jobPoorNeedsA[2].isC = true
                }else{
                    ts.jobPoorNeedsA[2].isC = false
                }
            }else if(num == 4){
                var a4 = [];
                $('.show4-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        a4.push($(v).attr('data-id'));
                    }
                });
                ts.jobPoorNeedsFour = a4.join(',');
                if(ts.jobPoorNeedsFour){
                    ts.jobPoorNeedsA[3].isC = true
                }else{
                    ts.jobPoorNeedsA[3].isC = false
                }
            }else if(num == 5){
                var a5 = [];
                $('.show5-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        a5.push($(v).attr('data-id'));
                    }
                });
                ts.jobPoorNeedsFive= a5.join(',');
                if(ts.jobPoorNeedsFive){
                    ts.jobPoorNeedsA[4].isC = true
                }else{
                    ts.jobPoorNeedsA[4].isC = false
                }
            }
        },
        choR18:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            radioLi(dom);
            radioLiIsC(ts.sourceOfIncomeA);
            if(dom.hasClass('ac')){
                arr.isC = true;
                ts.sourceOfIncome = id;
                $('#sourceOfIncome').val(arr.name);
                ts.R18input = arr.name;
            }else{
                arr.isC = false;
                ts.sourceOfIncome = '';
                $('#sourceOfIncome').val('');
                ts.R18input = '';
            }
        },
        choR19:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            radioLi(dom);
            radioLiIsC(ts.noJobCausationA);
            ts.noJobCausation = '';
            if(dom.hasClass('ac')){
                arr.isC = true;
                ts.noJobCausation = id;
                $('#noJobCausation').val(arr.name);
                ts.R19input = arr.name;
            }else{
                arr.isC = false;
                ts.noJobCausation = '';
                $('#noJobCausation').val('');
                ts.R19input = '';
            }
        },
        getBackInfo:function(){
            var send = {
                name:'list3',
                type:'appResponse'
                //data:'',
                //status:''
            };
            getDataFromApp(send,this.delBackData);
        },
        delBackData:function(data){
            var ts = this,oldInfo = data.data.old;
            //if(info){
            var info = {},isModify = false;
            if(data.data.modify){
                info = data.data.modify;
                isModify = true;
            }else{
                info = data.data.old;
                isModify = false;
            }
            if(info || oldInfo){
                if(isModify && oldInfo){
                    //数据比较
                    ts.ifR16p = getModify(info.haveJob,oldInfo.haveJob);
                    ts.ifR162p = getModify(info.unempRegistration,oldInfo.unempRegistration);
                    ts.ifR17p = getModify(info.quotaSchemeEmployment,oldInfo.quotaSchemeEmployment) || getModify(info.disabilityJobType,oldInfo.disabilityJobType);
                    ts.ifR18p = getModify(info.sourceOfIncome,oldInfo.sourceOfIncome);
                    ts.ifR19p = getModify(info.noJobCausation,oldInfo.noJobCausation);
                    ts.ifR20p = getModify(info.helpJobPoorOne,oldInfo.helpJobPoorOne)
                        || getModify(info.trainType,oldInfo.trainType)
                        || getModify(info.helpJobPoorTwo,oldInfo.helpJobPoorTwo)
                        || getModify(info.helpJobPoorThree,oldInfo.helpJobPoorThree)
                        || getModify(info.helpJobPoorFour,oldInfo.helpJobPoorFour)
                        || getModify(info.helpJobPoorFive,oldInfo.helpJobPoorFive)
                        || getModify(info.otherHelp,oldInfo.otherHelp)
                        || getModify(info.helpJobPoorSix,oldInfo.helpJobPoorSix);
                    ts.ifR21p = getModify(info.jobPoorNeedsOne,oldInfo.jobPoorNeedsOne)
                        || getModify(info.jobPoorNeedsTwo,oldInfo.jobPoorNeedsTwo)
                        || getModify(info.jobPoorNeedsThree,oldInfo.jobPoorNeedsThree)
                        || getModify(info.jobPoorNeedsFour,oldInfo.jobPoorNeedsFour)
                        || getModify(info.jobPoorNeedsFive,oldInfo.jobPoorNeedsFive)
                        || getModify(info.jobPoorNeedsSix,oldInfo.jobPoorNeedsSix);
                }
                ts.id = info.id;
                ts.personalId = info.personalId;
                ts.isEdit = true;
                ts.haveJob = info.haveJob;//是否就业
                var R16Str = info.haveJob ? trueFalseA[info.haveJob-1] : '';
                $('#haveJob').val(R16Str);
                ts.unempRegistration = info.unempRegistration ? info.unempRegistration : '';//是否进行失业登记
                if(ts.haveJob == 2 && unFarmer){
                    ts.isFarmerGo18 = true;
                }
                if(info.haveJob && info.haveJob!=0){
                    ts.R16check = true;
                }
                if(w.isFarmerGo18){
                    if(!w.unempRegistration || w.unempRegistration == 0){
                        w.R162check = false;
                    }
                }
                ts.disabilityJobType = info.disabilityJobType && info.disabilityJobType!=0 ? info.disabilityJobType:'';//残疾人就业形式
                ts.disabilityJobTypeA = getBackIsC(ts.disabilityJobType,disabilityJobTypeA);
                var R17Str = (info.disabilityJobType&&info.disabilityJobType!=0) ? disabilityJobTypeA[info.disabilityJobType-1].name : '';
                $('#disabilityJobType').val(R17Str);
                changeTh($('#disabilityJobType'));
                ts.quotaSchemeEmployment = info.quotaSchemeEmployment ? info.quotaSchemeEmployment :'';//按比例就业
                ts.quotaSchemeEmploymentA = getBackIsC(info.quotaSchemeEmployment,quotaSchemeEmploymentA);
                ts.sourceOfIncome = info.sourceOfIncome ? info.sourceOfIncome : '';//未就业主要生活来源
                ts.sourceOfIncomeA = getBackIsC(info.sourceOfIncome,sourceOfIncomeA);
                var R18Str = (info.sourceOfIncome && info.sourceOfIncome!=0) ? sourceOfIncomeA[info.sourceOfIncome-1].name : '';
                $('#sourceOfIncome').val(R18Str);
                ts.R18input = R18Str;
                ts.noJobCausation = info.noJobCausation ? info.noJobCausation : '';//未就业主要原因
                ts.noJobCausationA = (info.noJobCausation && info.noJobCausation-1<noJobCausationA.length) ?getBackIsC(info.noJobCausation,noJobCausationA) : noJobCausationA;
                var R19Str = (info.noJobCausation &&info.noJobCausation!=0 && info.noJobCausation-1<noJobCausationA.length) ? noJobCausationA[info.noJobCausation-1].name : '';
                $('#noJobCausation').val(R19Str);
                ts.R19input = R19Str;
                if(ts.noJobCausation && ts.noJobCausation!=0){
                    ts.R19check = true;
                    if(ts.noJobCausation==1){
                        ts.goR25 = false;
                    }
                }else{
                    ts.R19check = false
                }
                var isDelR2021 = true;
                if(ts.haveJob == 2){
                    w.goR20 = true;
                    w.goR18 = false;
                    w.disabilityJobType = '';
                    w.quotaSchemeEmployment = '';
                    ts.R17check = true;
                    if( info.noJobCausation==4 || info.noJobCausation == 6 || info.noJobCausation == 7 ){
                        isDelR2021 = true;
                    }else{
                        isDelR2021 = false;
                    }
                    if(unFarmer){
                        setTimeout(function(){
                            picker($("#unempRegistration"),trueFalseA);//失业登记
                            $('#unempRegistration').on('change',function(){
                                w.unempRegistration = trueFalseA.indexOf( $(this).val())+1;
                            });
                        },0)
                    }
                }else if(ts.haveJob == 1){
                    w.goR20 = false;
                    w.sourceOfIncome = '';
                    w.noJobCausation = '';
                    w.goR18 = true;
                    w.R18check = true;
                    w.R19check = true;
                }
                if(isDelR2021){
                    ts.trainType = info.trainType;//培训类型
                    ts.trainTypeA = getBackIsC(info.trainType,trainTypeA);
                    ts.otherHelp = info.otherHelp;//其他帮扶
                    ts.otherHelpA = getBackIsC(info.otherHelp,otherHelpA);
                    ts.helpJobPoorOne = info.helpJobPoorOne;//动态更新年度内获得的就业扶贫帮扶-1
                    if(info.helpJobPoorOne && info.helpJobPoorOne !=0){
                        ts.helpJobPoorA[0].isC = true;
                    }
                    ts.helpJobPoorTwo = info.helpJobPoorTwo;//动态更新年度内获得的就业扶贫帮扶-2
                    if(info.helpJobPoorTwo && info.helpJobPoorTwo !=0){
                        ts.helpJobPoorA[1].isC = true;
                    }
                    ts.helpJobPoorThree = info.helpJobPoorThree;//动态更新年度内获得的就业扶贫帮扶-3
                    if(info.helpJobPoorThree && info.helpJobPoorThree !=0){
                        ts.helpJobPoorA[2].isC = true;
                    }
                    ts.helpJobPoorFour = info.helpJobPoorFour;//动态更新年度内获得的就业扶贫帮扶-4
                    if(info.helpJobPoorFour && info.helpJobPoorFour !=0){
                        ts.helpJobPoorA[3].isC = true;
                    }
                    ts.helpJobPoorFive = info.helpJobPoorFive;//动态更新年度内获得的就业扶贫帮扶-5
                    if(info.helpJobPoorFive && info.helpJobPoorFive !=0){
                        ts.helpJobPoorA[4].isC = true;
                    }
                    ts.helpJobPoorSix = info.helpJobPoorSix;//动态更新年度内获得的就业扶贫帮扶-6
                    if(info.helpJobPoorSix && info.helpJobPoorSix !=0){
                        ts.helpJobPoorA[5].isC = true;
                    }
                    ts.R20A = [];
                    ts.R20AName = [];
                    $.each(ts.helpJobPoorA,function(i,v){
                        if(v.isC){
                            var id = v.id,
                                text = v.name;
                            ts.R20A.push(id);
                            ts.R20AName.push(text);
                        }
                    });
                    ts.jobPoorNeedsOne = info.jobPoorNeedsOne;//目前就业扶贫需求1
                    if(info.jobPoorNeedsOne){
                        ts.jobPoorNeedsA[0].isC = true;
                        ts.jobPoorNeeds1A = getBackIsC(info.jobPoorNeedsOne,jobPoorNeeds1A);
                    }
                    ts.jobPoorNeedsTwo = info.jobPoorNeedsTwo;//目前就业扶贫需求2
                    if(info.jobPoorNeedsTwo){
                        ts.jobPoorNeedsA[1].isC = true;
                        ts.jobPoorNeeds2A = getBackIsC(info.jobPoorNeedsTwo,jobPoorNeeds2A);
                    }
                    ts.jobPoorNeedsThree = info.jobPoorNeedsThree;//目前就业扶贫需求3
                    if(info.jobPoorNeedsThree){
                        ts.jobPoorNeedsA[2].isC = true;
                        ts.jobPoorNeeds3A = getBackIsC(info.jobPoorNeedsThree,jobPoorNeeds3A);
                    }
                    ts.jobPoorNeedsFour = info.jobPoorNeedsFour;//目前就业扶贫需求-4
                    if(info.jobPoorNeedsFour){
                        ts.jobPoorNeedsA[3].isC = true;
                        ts.jobPoorNeeds4A = getBackIsC(info.jobPoorNeedsFour,jobPoorNeeds4A);
                    }
                    ts.jobPoorNeedsFive = info.jobPoorNeedsFive;//目前就业扶贫需求5
                    if(info.jobPoorNeedsFive){
                        ts.jobPoorNeedsA[4].isC = true;
                        if(info.jobPoorNeedsFive!=5){
                            ts.jobPoorNeeds5A = getBackIsC(info.jobPoorNeedsFive,jobPoorNeeds5A);
                        }
                    }
                    ts.jobPoorNeedsSix = info.jobPoorNeedsSix;//目前就业扶贫需求6
                    if(info.jobPoorNeedsSix){
                        ts.jobPoorNeedsA[5].isC = true;
                    }
                    hasFea();
                }else{
                    ts.R20check = true;
                    ts.R21check = true;
                    ts.goR22 = false;
                    ts.helpJobPoorOne = '';//动态更新年度内获得的就业扶贫帮扶-1
                    ts.helpJobPoorTwo = '';//动态更新年度内获得的就业扶贫帮扶-2
                    ts.helpJobPoorThree =  0;//动态更新年度内获得的就业扶贫帮扶-3
                    ts. helpJobPoorFour =  0;//动态更新年度内获得的就业扶贫帮扶-4
                    ts.helpJobPoorFive = 0;//动态更新年度内获得的就业扶贫帮扶-5
                    ts.helpJobPoorSix =  0;//动态更新年度内获得的就业扶贫帮扶-6
                    ts.jobPoorNeedsOne =  '';//目前就业扶贫需求1
                    ts.jobPoorNeedsTwo =  '';//目前就业扶贫需求2
                    ts.jobPoorNeedsThree =  '';//目前就业扶贫需求3
                    ts.jobPoorNeedsFour =  '';//目前就业扶贫需求-4
                    ts.jobPoorNeedsFive =  '';//目前就业扶贫需求5
                    ts.jobPoorNeedsSix =  0;//目前就业扶贫需求6
                }
                ts.companyType = info.companyType;//企业类型
                //R16.是否就业
                if(changeR16 == 1){
                    w.haveJob = 2;
                    $('#haveJob').val('否').prop('disabled',true);
                    $('#haveJob').parent().addClass('w_isActive');
					$('#haveJob').addClass('w_isActive');
                    ts.goR18 = false;
                    w.disabilityJobType = '';
                    w.quotaSchemeEmployment = '';
                    ts.goR20 = true;
                    ts.R16check = true;
                    ts.R17check = true;
                    ts.R18check = false;
                    ts.R19check = false;
                    if(unFarmer){
                        ts.isFarmerGo18 = true;
                        ts.R162check = false;
                        ts.unempRegistration = '';
                        setTimeout(function(){
                            picker($("#unempRegistration"),trueFalseA);//失业登记
                            $('#unempRegistration').on('change',function(){
                                w.unempRegistration = trueFalseA.indexOf( $(this).val())+1;
                            });
                        },0)
                    }else{
                        ts.isFarmerGo18 = false;
                        ts.unempRegistration = '';
                        ts.R162check = true;
                    }
                    $('#disabilityJobType').val('');
                    changeTh($('#disabilityJobType'));
                    radioLiIsC(w.disabilityJobTypeA);
                    radioLiIsC(w.quotaSchemeEmploymentA);
                    radioLiIsC(w.trainTypeA);
                    radioLiIsC(w.otherHelpA);
                    ts.disabilityJobType = 0;
                    ts.quotaSchemeEmployment = '';
                    ts.trainType = '';
                    ts.otherHelp = '';
                    ts.noJobCausation = '';
                    ts.R18input = '';
                    ts.R19input = '';
                    ts.sourceOfIncome = '';
                    radioLiIsC(w.disabilityJobTypeA);
                    radioLiIsC(w.sourceOfIncomeA);
                    radioLiIsC(w.noJobCausationA);


                }else{
                    $('#haveJob').prop('disabled',false);
                     $('#haveJob').parent().removeClass('w_isActive');
					$('#haveJob').removeClass('w_isActive');
                    picker($("#haveJob"),trueFalseA);//是否就业
                    $('#haveJob').on('change',function(){
                        w.haveJob = trueFalseA.indexOf( $(this).val())+1;
                    });
                }
            }
            ts.$watch('haveJob', function (newValue, oldValue) {
                if(newValue){
                    ts.goR22 = true;
                    ts.R16check = true;
                    ts.R20check = false;
                    ts.R21check = false;
                    clearR2021();
                    if(newValue == 2){//否
                        ts.goR18 = false;
                        w.disabilityJobType = '';
                        w.quotaSchemeEmployment = '';
                        ts.goR20 = true;
                        ts.R17check = true;
                        ts.R18check = false;
                        ts.R19check = false;
                        if(unFarmer){
                            ts.isFarmerGo18 = true;
                            ts.R162check = false;
                            ts.unempRegistration = '';
                            setTimeout(function(){
                                picker($("#unempRegistration"),trueFalseA);//失业登记
                                $('#unempRegistration').on('change',function(){
                                    w.unempRegistration = trueFalseA.indexOf( $(this).val())+1;
                                });
                            },0)
                        }else{
                            ts.isFarmerGo18 = false;
                            ts.unempRegistration = '';
                            ts.R162check = true;
                        }
                        $('#disabilityJobType').val('');
                        changeTh($('#disabilityJobType'));
                        radioLiIsC(w.disabilityJobTypeA);
                        radioLiIsC(w.quotaSchemeEmploymentA);
                        radioLiIsC(w.trainTypeA);
                        radioLiIsC(w.otherHelpA);
                        ts.disabilityJobType = 0;
                        ts.quotaSchemeEmployment = '';
                        ts.trainType = '';
                        ts.otherHelp = '';
                    }else{
                        ts.goR18 = true;
                        ts.goR20 = false;
                        w.sourceOfIncome = '';
                        w.noJobCausation = '';
                        ts.R162check = true;
                        ts.R17check = false;
                        ts.R18check = true;
                        ts.R19check = true;
                        ts.isFarmerGo18 = false;
                        $('#noJobCausation,#sourceOfIncome,#disabilityJobType').val('');
                        ts.noJobCausation = '';
                        ts.R18input = '';
                        ts.R19input = '';
                        ts.sourceOfIncome = '';
                        radioLiIsC(w.disabilityJobTypeA);
                        radioLiIsC(w.sourceOfIncomeA);
                        radioLiIsC(w.noJobCausationA);
                    }
                }else{
                    ts.R16check = false;
                }
                isOkSub()
            });

            //R19.未就业主要原因
            ts.$watch('noJobCausation', function (n, oldValue) {
                if(w.goR20){
                    if(n){
                        ts.R19check = true;
                        ts.goR25 = true;
                        if(n == 1){
                            ts.goR25 = false;
                            ts.goR22 = false;
                            ts.helpJobPoorOne = '';//动态更新年度内获得的就业扶贫帮扶-1
                            ts.helpJobPoorTwo = '';//动态更新年度内获得的就业扶贫帮扶-2
                            ts.helpJobPoorThree =  0;//动态更新年度内获得的就业扶贫帮扶-3
                            ts.helpJobPoorFour =  0;//动态更新年度内获得的就业扶贫帮扶-4
                            ts.helpJobPoorFive = 0;//动态更新年度内获得的就业扶贫帮扶-5
                            ts.helpJobPoorSix =  0;//动态更新年度内获得的就业扶贫帮扶-6
                            ts.jobPoorNeedsOne =  '';//目前就业扶贫需求1
                            ts.jobPoorNeedsTwo =  '';//目前就业扶贫需求2
                            ts.jobPoorNeedsThree =  '';//目前就业扶贫需求3
                            ts.jobPoorNeedsFour =  '';//目前就业扶贫需求-4
                            ts.jobPoorNeedsFive =  '';//目前就业扶贫需求5
                            ts.jobPoorNeedsSix =  0;//目前就业扶贫需求6
                            ts.R20check = true;
                            ts.R21check = true;
                        }else if(n == 2|| n== 3 || n==5){
                            ts.goR22 = false;
                            ts.helpJobPoorOne = '';//动态更新年度内获得的就业扶贫帮扶-1
                            ts.helpJobPoorTwo = '';//动态更新年度内获得的就业扶贫帮扶-2
                            ts.helpJobPoorThree =  0;//动态更新年度内获得的就业扶贫帮扶-3
                            ts. helpJobPoorFour =  0;//动态更新年度内获得的就业扶贫帮扶-4
                            ts.helpJobPoorFive = 0;//动态更新年度内获得的就业扶贫帮扶-5
                            ts.helpJobPoorSix =  0;//动态更新年度内获得的就业扶贫帮扶-6
                            ts.jobPoorNeedsOne =  '';//目前就业扶贫需求1
                            ts.jobPoorNeedsTwo =  '';//目前就业扶贫需求2
                            ts.jobPoorNeedsThree =  '';//目前就业扶贫需求3
                            ts.jobPoorNeedsFour =  '';//目前就业扶贫需求-4
                            ts.jobPoorNeedsFive =  '';//目前就业扶贫需求5
                            ts.jobPoorNeedsSix =  0;//目前就业扶贫需求6
                            ts.R20check = true;
                            ts.R21check = true;
                        }else{
                            ts.goR22 = true;
                            ts.R20check = false;
                            ts.R21check = false;
                        }
                        clearR2021();
                    }else{
                        ts.R19check = false
                    }
                }
                isOkSub()
            });
            setTimeout(function(){
                isOkSub();
            },500);
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            appInit();
        })
    }
});
setTimeout(function(){
    w.getBackInfo();
},1000);

function hasFea(){
    if(w.jobPoorNeedsOne || w.jobPoorNeedsTwo || w.jobPoorNeedsThree || w.jobPoorNeedsFour || w.jobPoorNeedsFive || w.jobPoorNeedsSix){
        w.R21check = true;
    }else{
        w.R21check = false;
    }
    var cA = [];
    $.each(w.jobPoorNeedsA,function(i,v){
        if(v.isC){
            var str = v.name;
            if(v.id == 1){
                if(w.jobPoorNeedsOne && w.jobPoorNeedsOne!=0)
                    str += '('+getStrType(w.jobPoorNeedsOne, w.jobPoorNeeds1A)+')';
            }
            if(v.id == 2){
                if(w.jobPoorNeedsTwo && w.jobPoorNeedsTwo!=0)
                    str += '('+getStrType(w.jobPoorNeedsTwo, w.jobPoorNeeds2A)+')';
            }
            if(v.id == 3){
                if(w.jobPoorNeedsThree && w.jobPoorNeedsThree!=0)
                    str += '('+getStrType(w.jobPoorNeedsThree, w.jobPoorNeeds3A)+')';
            }
            if(v.id == 4){
                if(w.jobPoorNeedsFour && w.jobPoorNeedsFour!=0)
                    str += '('+getStrType(w.jobPoorNeedsFour, w.jobPoorNeeds4A)+')';
            }
            if(v.id == 5){
                if(w.jobPoorNeedsFive && w.jobPoorNeedsFive!=0)
                    str += '('+getStrType(w.jobPoorNeedsFive, w.jobPoorNeeds5A)+')';
            }
            cA.push(str)
        }
    });
    $('#jobPoorNeeds').val(cA.join('、'));
    changeTh($('#jobPoorNeeds'))
}
function isOkSub(){
    if(w.R16check && w.R162check && w.R17check && w.R18check
        && w.R19check && w.R20check && w.R21check){
        w.isSub = true;
    }else{
        w.isSub = false;
    }
}



//R16.是否就业城镇户口填报
w.$watch('unempRegistration', function (newValue, oldValue) {
    if(newValue){
        var R16sStr = newValue ? trueFalseA[newValue-1] : '';
        $('#unempRegistration').val(R16sStr);
        w.R162check = true;
    }else{
        w.R162check = false;
    }
    isOkSub();
});
//R17
w.$watch('disabilityJobType', function (newValue, oldValue) {
    if(w.goR18){
        var text = '';
        if(newValue){
            if(newValue != 1){
                w.R17check = true;
            }else{
                if(w.quotaSchemeEmployment){
                    w.R17check = true;
                }else{
                    w.R17check = false;
                }
            }
        }else{
            if(w.goR18){
                w.R17check = false;
            }
        }
        if(w.R17check){
            if(newValue == 1){
                if(w.quotaSchemeEmployment){
                    text = disabilityJobTypeA[newValue-1].name+'('+quotaSchemeEmploymentA[w.quotaSchemeEmployment-1].name+')'
                }else{
                    text = disabilityJobTypeA[newValue-1].name
                }
            }else{
                text = disabilityJobTypeA[newValue-1].name
            }
        }else{
            text = ''
        }
        $('#disabilityJobType').val(text);
        changeTh($('#disabilityJobType'));
    }
    isOkSub()
});
//R171按比例就业
w.$watch('quotaSchemeEmployment', function (newValue, oldValue) {
    if(w.goR18){
        if(newValue){
            w.R17check = true;
        }else{
            w.R17check = false
        }
    }
    isOkSub()
});
//R18.未就业主要生活来源
w.$watch('sourceOfIncome', function (newValue, oldValue) {
    if(w.goR20){
        if(newValue){
            w.R18check = true;
            if(newValue == 1 && age<45){
                var objArea = {
                    name:'normal',
                    type:'alert',
                    data:{
                        content:'退休金（养老金）原则上应45岁以上填报'
                    }
                };
                if(isIos() == 1){
                    getDataFromApp(JSON.stringify(objArea));
                }else if(isIos() == 2){
                    getDataFromApp(objArea);
                }
            }
        }else{
            w.R18check = false
        }
    }
    isOkSub()
});
//清空R20、R21数据
function clearR2021(){
    radioLiIsC(w.helpJobPoorA);
    radioLiIsC(w.trainTypeA);
    radioLiIsC(w.otherHelpA);
    radioLiIsC(w.jobPoorNeedsA);
    radioLiIsC(w.jobPoorNeeds1A);
    radioLiIsC(w.jobPoorNeeds2A);
    radioLiIsC(w.jobPoorNeeds3A);
    radioLiIsC(w.jobPoorNeeds4A);
    radioLiIsC(w.jobPoorNeeds5A);
    w.helpJobPoorOne= '';//动态更新年度内获得的就业扶贫帮扶-1
    w.helpJobPoorTwo='';//动态更新年度内获得的就业扶贫帮扶-2
    w.helpJobPoorThree=0;//动态更新年度内获得的就业扶贫帮扶-3
    w.helpJobPoorFour=0;//动态更新年度内获得的就业扶贫帮扶-4
    w.helpJobPoorFive=0;//动态更新年度内获得的就业扶贫帮扶-5
    w.helpJobPoorSix= 0;//动态更新年度内获得的就业扶贫帮扶-6
    w.jobPoorNeedsOne= '';//目前就业扶贫需求1
    w.jobPoorNeedsTwo='';//目前就业扶贫需求2
    w.jobPoorNeedsThree= '';//目前就业扶贫需求3
    w.jobPoorNeedsFour= '';//目前就业扶贫需求-4
    w.jobPoorNeedsFive= '';//目前就业扶贫需求5
    w.jobPoorNeedsSix= 0; //目前就业扶贫需求6
    w.trainType = '';
    w.otherHelp = '';
}


function hasR20(){
    if(w.helpJobPoorOne || w.helpJobPoorTwo || w.helpJobPoorThree || w.helpJobPoorFour || w.helpJobPoorFive || w.helpJobPoorSix){
        w.R20check = true;
    }else{
        w.R20check = false;
    }
    getR20input();
    isOkSub();
}
function getR20input(){
    var cA = [];
    $.each(w.helpJobPoorA,function(i,v){
        if(v.isC){
            var str = v.name;
            if(v.id == 1){
                if(w.trainType && w.trainType!=0){
                    str += '('+getStrType(w.trainType, w.trainTypeA)+')'
                }
            }
            if(v.id == 5){
                if(w.otherHelp && w.otherHelp!=0){
                    str += '('+getStrType(w.otherHelp, w.otherHelpA)+')'
                }
            }
            cA.push(str);
        }
    });
    $('#helpJobPoor').val(cA.join('、'));
    changeTh($('#helpJobPoor'));
}
//R201 trainType
w.$watch('trainType', function (newValue, oldValue) {
    if(newValue){
        w.helpJobPoorA[0].isC = true;
        w.helpJobPoorOne = 1;
    }else{
        w.helpJobPoorA[0].isC = false;
    }
    hasR20()
});
//R205 otherHelp
w.$watch('otherHelp', function (newValue, oldValue) {
    if(newValue){
        w.helpJobPoorA[4].isC = true;
        w.helpJobPoorFive = 5;
    }else{
        w.helpJobPoorA[4].isC = false;
    }
    hasR20()
});

//R20
w.$watch('helpJobPoorOne', function (newValue, oldValue) {
    hasR20();
});
//R20
w.$watch('helpJobPoorTwo', function (newValue, oldValue) {
    hasR20();
});
//R20
w.$watch('helpJobPoorThree', function (newValue, oldValue) {
    hasR20();
});
//R20
w.$watch('helpJobPoorFour', function (newValue, oldValue) {
    hasR20();
});
//R20
w.$watch('helpJobPoorFive', function (newValue, oldValue) {
    hasR20();
});
//R20
w.$watch('helpJobPoorSix', function (newValue, oldValue) {
    hasR20();
});
//R21
w.$watch('jobPoorNeedsOne', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});
//R21
w.$watch('jobPoorNeedsTwo', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});
//R21
w.$watch('jobPoorNeedsThree', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});
//R21
w.$watch('jobPoorNeedsFour', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});
//R21
w.$watch('jobPoorNeedsFive', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});
//R21
w.$watch('jobPoorNeedsSix', function (newValue, oldValue) {
    hasFea();
    isOkSub()
});








$('#haveJob').prop('disabled',false);
picker($("#haveJob"),trueFalseA);//是否就业
$('#haveJob').on('change',function(){
    w.haveJob = trueFalseA.indexOf( $(this).val())+1;
});



//点击提交
$('.fix-btn').on('click',function(){
    if(!w.isSub) return $.toast('填写不完整！');
    var send = {
        id: w.id,
        personalId: w.personalId,
        haveJob:w.haveJob || '',//是否就业
        disabilityJobType:w.disabilityJobType || '',//残疾人就业形式
        sourceOfIncome:w.sourceOfIncome || '',//未就业主要生活来源
        noJobCausation:w.noJobCausation || '',//未就业主要原因
        unempRegistration:w.unempRegistration || '',//是否进行失业登记
        companyType:w.companyType || '',//企业类型
        helpJobPoorOne:w.helpJobPoorOne || '',//动态更新年度内获得的就业扶贫帮扶-1
        helpJobPoorTwo:w.helpJobPoorTwo || '',//动态更新年度内获得的就业扶贫帮扶-2
        helpJobPoorThree:w.helpJobPoorThree || 0,//动态更新年度内获得的就业扶贫帮扶-3
        helpJobPoorFour:w.helpJobPoorFour || 0,//动态更新年度内获得的就业扶贫帮扶-4
        helpJobPoorFive:w.helpJobPoorFive || 0,//动态更新年度内获得的就业扶贫帮扶-5
        helpJobPoorSix:w.helpJobPoorSix || 0,//动态更新年度内获得的就业扶贫帮扶-6
        jobPoorNeedsOne:w.jobPoorNeedsOne || '',//目前就业扶贫需求1
        jobPoorNeedsTwo:w.jobPoorNeedsTwo || '',//目前就业扶贫需求2
        jobPoorNeedsThree:w.jobPoorNeedsThree || '',//目前就业扶贫需求3
        jobPoorNeedsFour:w.jobPoorNeedsFour || '',//目前就业扶贫需求-4
        jobPoorNeedsFive:w.jobPoorNeedsFive || '',//目前就业扶贫需求5
        jobPoorNeedsSix:w.jobPoorNeedsSix || 0,//目前就业扶贫需求6
        trainType:w.trainType || '',//培训类型
        otherHelp:w.otherHelp || '',//其他帮扶
        quotaSchemeEmployment:w.quotaSchemeEmployment || ''//按比例就业
    };
    var obj = {
        name:'list3',
        type:'h5Upload',
        data:send,
        status:''
    };
    var str = JSON.stringify(obj);
    //messageHtmlHandler(str,goto)
    if(isIos() == 1){
        messageHtmlHandler(str,goto)
    }else if(isIos() == 2){
        messageHtmlHandler(obj,goto)
    }

});

function goto(){
    var go25 = 1;
    if(w.goR25){
        go25 = 0
    }
    var s = w.disabilityJobType,sA = [],isR1712 = 0;
    if(s){
        if(s.toString().length>1){
            sA = s.split(',');
        }else{
            sA.push(s.toString())
        }
    }
    if(sA.indexOf('1') != -1|| sA.indexOf('2') != -1 ){
        isR1712 = 1
    }
    
    window.location.href='write4.html?age='+age+'&R14val='+ R14val+'&residenceType='+ residenceType+'&noSchoolCausation='+ noSchoolCausation+'&isWelfareHouse='+ isWelfareHouse+'&go25='+ go25+'&isR1712='+ isR1712+'&from=3&disabilityCard='+disabilityCard+'&changeR16='+ changeR16+'&townFamilyIncome='+townFamilyIncome + '&countryFamilyHouse='+ countryFamilyHouse;
}
//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});

