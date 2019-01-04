/**
 * Created by Think on 2017/12/25.
 */
/**
 * Created by Think on 2017/12/20.*/
//select数据
var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');
var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var isFarmer = false;
if(residenceType == 1){
    isFarmer = true
}
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
var isInStudy = getParam('isInStudy');//是否在校学习，是：1，否：0
var noSchoolCausation = getParam('noSchoolCausation');//R15--G11
var R14val = getParam('R14val');//R14--G10

var data5 = {
    id: '',
    personalId: '',
    familyDoctor:'',//个人或家庭是否签订家庭医生服务协议
    otherDisease:'',//除残疾外,过去两周是否患有其他疾病
    treat:'',//过去两周内是否已就诊或治疗
    untreatedCauseA:untreatedCauseA,
    untreatedCauseOne:'',//未就诊或治疗原因1
    untreatedCauseTwo:'',//
    untreatedCauseThree:'',//
    untreatedCauseFour:'',//
    untreatedCauseFive: '',//
    needServiceA:needServiceA,
    needServiceA1:needServiceA1,
    needServiceA2:needServiceA2,
    needServiceA3:needServiceA3,
    needServiceA31:needServiceA31,
    needServiceA32:needServiceA32,
    needServiceA33:needServiceA33,
    needServiceA34:needServiceA34,
    needServiceA35:needServiceA35,
    needServiceA4:needServiceA4,
    needServiceA41:needServiceA41,
    needServiceA42:needServiceA42,
    needServiceA43:needServiceA43,
    needServiceA44:needServiceA44,
    needServiceA45:needServiceA45,
    needServiceA5:needServiceA5,
    needServiceA372:[],
    needServiceA373:[],
    needServiceOne:'',//针对自身残疾，目前是否还需要以下服务
    needServiceTwo: '',//
    needServiceThree: '',//
    needServiceFour: '',//
    needServiceFive: '',//
    needServiceSix: '',//
    notRecoveredCauseA:notRecoveredCauseA,
    notRecoveredCauseOne: '',//未得到康复的原因
    notRecoveredCauseTwo:'',//
    notRecoveredCauseThree: '',//
    notRecoveredCauseFour:'',//
    useServiceA:useServiceA,
    useServiceOne:'',//针对自身残疾，动态更新年度内是否使用过一下服务
    useServiceTwo:'',//
    useServiceThree: '',//
    useServiceFour:'',//
    useServiceFive: '',//
    useServiceSix:'',//
    surgery:'',//手术
    medicinal: '',//药物
    functionVision: '',//功能训练-视力
    functionHearing:'',//功能训练-听力
    functionLimbs: '',//功能训练-肢体
    functionIntelligence:'',//功能训练-智力
    functionSpirit: '',//功能训练-精神
    utensilVision: '',//辅助器具-视力
    utensilHearing:'',//辅助器具-听力
    utensilSpeech:'',//辅助器具-言语
    utensilLimbs: '',//辅助器具-肢体
    utensilIntelligenc:'',//辅助器具-智力
    nurse: '',//护理
    isSub:false,
    showR34:false,
    showR35:false,
    showR36:false,
    showR37:false,
    R31check:false,
    isSR33:true,
    isSR34:true,
    R32check:false,
    R33check:false,
    R34check:false,
    R34input:'',
    R34A:[],
    R34NameA:[],
    R35input:'',
    R35check:false,
    isSR36:true,
    R36check:false,
    R36input:'',
    isS372:false,
    isS373:false,
    R37input:'',
    R37check:false,
    isEdit:false,
    //redpoint
    ifR31p:false,
    ifR32p:false,
    ifR33p:false,
    ifR34p:false,
    ifR35p:false,
    ifR36p:false,
    ifR37p:false,
};
var w = new Vue({
    el: '#write5',
    data: data5,
    methods: {
        openShowR34: function () {
            this.showR34 = true;
        },
        closeShowR34: function (num) {
            this.showR34 = false;
        },
        openShowR35: function () {
            this.showR35 = true;
        },
        closeShowR35: function (num) {
            this.showR35 = false;
        },
        openShowR36: function () {
            this.showR36 = true;
        },
        closeShowR36: function (num) {
            this.showR36 = false;
        },
        openShowR37: function () {
            this.showR37 = true;
        },
        closeShowR37: function (num) {
            this.showR37 = false;
        },
        choR34: function (arr, event) {
            var ts = this, dom = $(event.target), id = arr.id, name = arr.name;
            checkLi(dom);
            if (hC(dom)) {
                arr.isC = true;
                if (id == 1) {
                    ts.untreatedCauseOne = id;
                }
                if (id == 2) {
                    ts.untreatedCauseTwo = id;
                }
                if (id == 3) {
                    ts.untreatedCauseThree = id;
                }
                if (id == 4) {
                    ts.untreatedCauseFour = id;
                }
                if (id == 5) {
                    ts.untreatedCauseFive = id;
                }
            } else {
                arr.isC = false;
                if (id == 1) {
                    ts.untreatedCauseOne = '';
                }
                if (id == 2) {
                    ts.untreatedCauseTwo = '';
                }
                if (id == 3) {
                    ts.untreatedCauseThree = '';
                }
                if (id == 4) {
                    ts.untreatedCauseFour = '';
                }
                if (id == 5) {
                    ts.untreatedCauseFive = '';
                }

            }
            ts.R34NameA = [];
            ts.R34A = [];
            $('.R34-li').each(function (i, v) {
                if (hC($(v))) {
                    ts.R34NameA.push($(v).text())
                }
            })
        },
        choR35: function (arr, event) {
            var ts = this, dom = $(event.target), id = arr.id, name = arr.name;
            ts.useServiceSix = '';
            ts.useServiceA[5].isC = false;
            if (id == 6) {
                radioLi(dom);
                radioLiIsC(ts.useServiceA);
                ts.useServiceOne = '';
                ts.useServiceTwo = '';
                ts.useServiceThree = '';
                ts.useServiceFour = '';
                ts.useServiceFive = '';
                if (hC(dom)) {
                    arr.isC = true;
                    ts.useServiceSix = 6;
                }
            }else {
                checkLi(dom);
                if (hC(dom)) {
                    arr.isC = true;
                    if (id == 1) {
                        ts.useServiceOne = 1;
                    }
                    if (id == 2){
                        ts.useServiceTwo = 2
                    }
                    if (id == 3) {
                        ts.useServiceThree = 3;
                    }
                    if (id == 4) {
                        ts.useServiceFour = 4;
                    }
                    if (id == 5) {
                        ts.useServiceFive = 5;
                    }
                }else{
                    arr.isC = false;
                    if (id == 1) {
                        ts.useServiceOne = '';
                    }
                    if (id == 2){
                        ts.useServiceTwo = '';
                    }
                    if (id == 3) {
                        ts.useServiceThree = '';
                    }
                    if (id == 4) {
                        ts.useServiceFour = '';
                    }
                    if (id == 5) {
                        ts.useServiceFive = '';
                    }
                }
            }

        },
        choR36: function (arr, event) {
            var ts = this, dom = $(event.target), id = arr.id, name = arr.name;
            checkLi(dom);
            if (hC(dom)) {
                arr.isC = true;
                if (id == 1) {
                    ts.notRecoveredCauseOne = 1;
                }
                if (id == 2){
                    ts.notRecoveredCauseTwo = 2
                }
                if (id == 3) {
                    ts.notRecoveredCauseThree = 3;
                }
                if (id == 4) {
                    ts.notRecoveredCauseFour = 4;
                }
            }else{
                arr.isC = false;
                if (id == 1) {
                    ts.notRecoveredCauseOne = '';
                }
                if (id == 2){
                    ts.notRecoveredCauseTwo = '';
                }
                if (id == 3) {
                    ts.notRecoveredCauseThree = '';
                }
                if (id == 4) {
                    ts.notRecoveredCauseFour = '';
                }
            }

        },
        choR37:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, name = arr.name;
            ts.needServiceSix = '';
            ts.needServiceA[5].isC = false;
            w.isS373 = false;
            if(id == 1){
                ts.needServiceA372 = ts.needServiceA1;
            }
            if(id == 2){
                ts.needServiceA372 = ts.needServiceA2;
            }
            if(id == 3){
                ts.needServiceA372 = ts.needServiceA3;
            }
            if(id == 4){
                ts.needServiceA372 = ts.needServiceA4;
            }
            if(id == 5){
                ts.needServiceA372 = ts.needServiceA5;
            }
            if(id == 6){
                w.isS372 = false;
                radioLiIsC(ts.needServiceA);
                radioLiIsC(ts.needServiceA1);
                radioLiIsC(ts.needServiceA2);
                radioLiIsC(ts.needServiceA3);
                radioLiIsC(ts.needServiceA4);
                radioLiIsC(ts.needServiceA5);
                radioLiIsC(ts.needServiceA31);
                radioLiIsC(ts.needServiceA32);
                radioLiIsC(ts.needServiceA33);
                radioLiIsC(ts.needServiceA34);
                radioLiIsC(ts.needServiceA35);
                radioLiIsC(ts.needServiceA41);
                radioLiIsC(ts.needServiceA42);
                radioLiIsC(ts.needServiceA43);
                radioLiIsC(ts.needServiceA44);
                radioLiIsC(ts.needServiceA45);
                radioLi(dom);
                radioLiIsC(ts.needServiceA372);
                radioLiIsC(ts.needServiceA373);
                if(hC(dom)){
                    arr.isC = true;
                    ts.needServiceSix = 6;
                    ts.needServiceOne = '';
                    ts.needServiceTwo = '';
                    ts.needServiceThree = '';
                    ts.needServiceFour = '';
                    ts.needServiceFive = '';
                    ts.surgery = '';
                    ts.nurse = '';
                    ts.medicinal = '';
                    ts.functionHearing = '';
                    ts.functionIntelligence = '';
                    ts.functionLimbs = '';
                    ts.functionSpirit = '';
                    ts.functionVision = '';
                    ts.utensilHearing = '';
                    ts.utensilIntelligenc = '';
                    ts.utensilLimbs = '';
                    ts.utensilSpeech = '';
                    ts.utensilVision = '';
                }
            }else{
                w.isS372 = true;
            }
        },
        choR371:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, num = arr.num;
            if(num == 1 || num == 5 || num == 2){
                ts.isS373 = false;
                checkLi(dom);
                if(hC(dom)){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                var eachDom = $('.R372-li');
                choose15(eachDom,num)
            }else{
                ts.isS373 = true;
                var open = arr.open;
                if(num == 3){
                    if(open == 1){
                        ts.needServiceA373 = ts.needServiceA31;
                    }
                    if(open == 2){
                        ts.needServiceA373 = ts.needServiceA32;
                    }
                    if(open == 3){
                        ts.needServiceA373 = ts.needServiceA33;
                    }
                    if(open == 4){
                        ts.needServiceA373 = ts.needServiceA34;
                    }
                    if(open == 5){
                        ts.needServiceA373 = ts.needServiceA35;
                    }
                }
                if(num == 4){
                    if(open == 1){
                        ts.needServiceA373 = ts.needServiceA41;
                    }
                    if(open == 2){
                        ts.needServiceA373 = ts.needServiceA42;
                    }
                    if(open == 3){
                        ts.needServiceA373 = ts.needServiceA43;
                    }
                    if(open == 4){
                        ts.needServiceA373 = ts.needServiceA44;
                    }
                    if(open == 5){
                        ts.needServiceA373 = ts.needServiceA45;
                    }
                }
            }
        },
        choR372:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, num = arr.num;
            checkLi(dom);
            if(hC(dom)){
                arr.isC = true
            }else{
                arr.isC = false
            }
            var eachDom = $('.R373-li');
            choose15(eachDom,num)
        },

        getBackInfo:function(){
            var send = {
                name:'list5',
                type:'appResponse'
                //data:'',
                //status:''
            };
            getDataFromApp(send,this.delBackData);
        },
        delBackData:function(data){
            var ts = this,oldInfo = data.data.old;
            var info = {},isModify = false;
            if(data.data.modify){
                info = data.data.modify;
                isModify = true;
            }else{
                info = data.data.old;
                isModify = false;
            }
            if(isModify && oldInfo){
                //数据比较
                ts.ifR31p = getModify(info.familyDoctor,oldInfo.familyDoctor);
                ts.ifR32p = getModify(info.otherDisease,oldInfo.otherDisease);
                ts.ifR33p = getModify(info.treat,oldInfo.treat);
                ts.ifR34p = getModify(info.untreatedCauseOne,oldInfo.untreatedCauseOne)
                    ||getModify(info.untreatedCauseTwo,oldInfo.untreatedCauseTwo)
                    ||getModify(info.untreatedCauseThree,oldInfo.untreatedCauseThree)
                    ||getModify(info.untreatedCauseFour,oldInfo.untreatedCauseFour)
                    ||getModify(info.untreatedCauseFive,oldInfo.untreatedCauseFive);
                ts.ifR35p = getModify(info.useServiceOne,oldInfo.useServiceOne)
                    ||getModify(info.useServiceTwo,oldInfo.useServiceTwo)
                    ||getModify(info.useServiceThree,oldInfo.useServiceThree)
                    ||getModify(info.useServiceFour,oldInfo.useServiceFour)
                    ||getModify(info.useServiceFive,oldInfo.useServiceFive)
                    ||getModify(info.useServiceSix,oldInfo.useServiceSix);
                ts.ifR36p = getModify(info.notRecoveredCauseOne,oldInfo.notRecoveredCauseOne)
                    ||getModify(info.notRecoveredCauseTwo,oldInfo.notRecoveredCauseTwo)
                    ||getModify(info.notRecoveredCauseThree,oldInfo.notRecoveredCauseThree)
                    ||getModify(info.notRecoveredCauseFour,oldInfo.notRecoveredCauseFour);
                ts.ifR37p = getModify(info.needServiceOne,oldInfo.needServiceOne)
                    ||getModify(info.surgery,oldInfo.surgery)
                    ||getModify(info.needServiceTwo,oldInfo.needServiceTwo)
                    ||getModify(info.medicinal,oldInfo.medicinal)
                    ||getModify(info.needServiceThree,oldInfo.needServiceThree)
                    ||getModify(info.functionHearing,oldInfo.functionHearing)
                    ||getModify(info.functionVision,oldInfo.functionVision)
                    ||getModify(info.functionLimbs,oldInfo.functionLimbs)
                    ||getModify(info.functionIntelligence,oldInfo.functionIntelligence)
                    ||getModify(info.functionSpirit,oldInfo.functionSpirit)
                    ||getModify(info.needServiceFour,oldInfo.needServiceFour)
                    ||getModify(info.utensilVision,oldInfo.utensilVision)
                    ||getModify(info.utensilHearing,oldInfo.utensilHearing)
                    ||getModify(info.utensilSpeech,oldInfo.utensilSpeech)
                    ||getModify(info.utensilLimbs,oldInfo.utensilLimbs)
                    ||getModify(info.utensilIntelligenc,oldInfo.utensilIntelligenc)
                    ||getModify(info.needServiceFive,oldInfo.needServiceFive)
                    ||getModify(info.nurse,oldInfo.nurse)
                    ||getModify(info.needServiceSix,oldInfo.needServiceSix);
            }
            ts.isEdit = true;
            ts.id = info.id;
            ts.personalId = info.personalId;
            ts.familyDoctor= info.familyDoctor;//个人或家庭是否签订家庭医生服务协议
            var R31Str  = info.familyDoctor ? trueFalseA[info.familyDoctor-1] : '';
            $('#familyDoctor').val(R31Str);

            ts.otherDisease=info.otherDisease;//除残疾外,过去两周是否患有其他疾病
            var R32Str = info.otherDisease ? trueFalseA[info.otherDisease-1] : '';
            $('#otherDisease').val(R32Str);

            ts.treat=info.treat;//过去两周内是否已就诊或治疗
            var R33Str = info.treat ? trueFalseA[info.treat-1] : '';
            $('#treat').val(R33Str);
            ts.untreatedCauseOne=info.untreatedCauseOne;//未就诊或治疗原因1
            if(info.untreatedCauseOne){
                ts.untreatedCauseA[0].isC = true;
            }
            ts.untreatedCauseTwo=info.untreatedCauseTwo;
            if(info.untreatedCauseTwo){
                ts.untreatedCauseA[1].isC = true;
            }
            ts.untreatedCauseThree=info.untreatedCauseThree;
            if(info.untreatedCauseThree){
                ts.untreatedCauseA[2].isC = true;
            }
            ts.untreatedCauseFour=info.untreatedCauseFour;
            if(info.untreatedCauseFour){
                ts.untreatedCauseA[3].isC = true;
            }
            ts.untreatedCauseFive=info.untreatedCauseFive;
            if(info.untreatedCauseFive){
                ts.untreatedCauseA[4].isC = true;
            }
            ts.R34NameA = [];
            ts.R34A = [];
            $.each(untreatedCauseA,function (i, v) {
                if (v.isC) {
                    ts.R34NameA.push(v.name)
                }
            });
            ts.useServiceOne=info.useServiceOne;//针对自身残疾，动态更新年度内是否得到或使用过以下服务
            if(info.useServiceOne){
                ts.useServiceA[0].isC = true;
            }
            ts.useServiceTwo=info.useServiceTwo;
            if(info.useServiceTwo){
                ts.useServiceA[1].isC = true;
            }
            ts.useServiceThree=info.useServiceThree;
            if(info.useServiceThree){
                ts.useServiceA[2].isC = true;
            }
            ts.useServiceFour=info.useServiceFour;
            if(info.useServiceFour){
                ts.useServiceA[3].isC = true;
            }
            ts.useServiceFive=info.useServiceFive;
            if(info.useServiceFive){
                ts.useServiceA[4].isC = true;
            }
            ts.useServiceSix=info.useServiceSix;
            if(info.useServiceSix){
                ts.useServiceA[5].isC = true;
            }
            ckR35();
            if(ts.isSR36){
                ts.notRecoveredCauseOne = info.notRecoveredCauseOne;//未得到康复的原因
                if(info.notRecoveredCauseOne){
                    ts.notRecoveredCauseA[0].isC = true;
                }
                ts.notRecoveredCauseTwo=info.notRecoveredCauseTwo;//
                if(info.notRecoveredCauseTwo){
                    ts.notRecoveredCauseA[1].isC = true;
                }
                ts.notRecoveredCauseThree=info.notRecoveredCauseThree;//
                if(info.notRecoveredCauseThree){
                    ts.notRecoveredCauseA[2].isC = true;
                }
                ts.notRecoveredCauseFour=info.notRecoveredCauseFour;//
                if(info.notRecoveredCauseFour){
                    ts.notRecoveredCauseA[3].isC = true;
                }
                ckR36();
            }else{
                ts.R36check = true;
            }
            ts.needServiceOne=info.needServiceOne;//针对自身残疾，目前是否还需要以下服务
            if(info.needServiceOne){
                ts.needServiceTwo=info.needServiceTwo;//
                ts.needServiceA[0].isC = true;
            }
            if(info.needServiceTwo){
                ts.needServiceA[1].isC = true;
            }
            ts.needServiceThree=info.needServiceThree;//
            if(info.needServiceThree){
                ts.needServiceA[2].isC = true;
            }
            ts.needServiceFour=info.needServiceFour;//
            if(info.needServiceFour){
                ts.needServiceA[3].isC = true;
            }
            ts.needServiceFive=info.needServiceFive;//
            if(info.needServiceFive){
                ts.needServiceA[4].isC = true;
            }
            ts.needServiceSix=info.needServiceSix;//
            if(info.needServiceSix){
                ts.needServiceA[5].isC = true;
            }
            ts.surgery=info.surgery;//手术
            ts.needServiceA1 = getBackIsC(info.surgery,needServiceA1);
            ts.medicinal=info.medicinal;//药物
            ts.needServiceA2 = getBackIsC(info.medicinal,needServiceA2);
            ts.functionVision=info.functionVision;//功能训练-视力
            ts.needServiceA31 = getBackIsC(info.functionVision,needServiceA31);
            ts.functionHearing=info.functionHearing;//功能训练-听力
            ts.needServiceA32 = getBackIsC(info.functionHearing,needServiceA32);
            ts.functionLimbs=info.functionLimbs;//功能训练-肢体
            ts.needServiceA33 = getBackIsC(info.functionLimbs,needServiceA33);
            ts.functionIntelligence=info.functionIntelligence;//功能训练-智力
            ts.needServiceA34 = getBackIsC(info.functionIntelligence,needServiceA34);
            ts.functionSpirit=info.functionSpirit;//功能训练-精神
            ts.needServiceA35 = getBackIsC(info.functionSpirit,needServiceA35);
            ts.utensilVision=info.utensilVision;//辅助器具-视力
            ts.needServiceA41 = getBackIsC(info.utensilVision,needServiceA41);
            ts.utensilHearing=info.utensilHearing;//辅助器具-听力
            ts.needServiceA42 = getBackIsC(info.utensilHearing,needServiceA42);
            ts.utensilSpeech=info.utensilSpeech;//辅助器具-言语
            ts.needServiceA43 = getBackIsC(info.utensilSpeech,needServiceA43);
            ts.utensilLimbs=info.utensilLimbs;//辅助器具-肢体
            ts.needServiceA44 = getBackIsC(info.utensilLimbs,needServiceA44);
            ts.utensilIntelligenc=info.utensilIntelligenc;//辅助器具-智力
            ts.needServiceA45 = getBackIsC(info.utensilIntelligenc,needServiceA45);
            ts.nurse=info.nurse;//护理
            ts.needServiceA5 = getBackIsC(info.nurse,needServiceA5);


            setTimeout(function(){
                isOkSub();
            },500);
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            appInit();
            //this.getBackInfo();
        })
    }
});
setTimeout(function(){
    w.getBackInfo();
},1000);

//R37-choose1,5
function choose15(eachDom,num){
    var ar = [];
    eachDom.each(function(i,v){
        if(hC($(v))){
            ar.push($(v).attr('data-id'))
        }
    });
    if(num == 1){
        w.surgery = ar.join(',')
    }
    if(num == 2){
        w.medicinal = ar.join(',')
    }
    if(num == 5){
        w.nurse = ar.join(',')
    }
    if(num == 31){
        w.functionVision = ar.join(',')
    }
    if(num == 32){
        w.functionHearing = ar.join(',')
    }
    if(num == 33){
        w.functionLimbs = ar.join(',')
    }
    if(num == 34){
        w.functionIntelligence = ar.join(',')
    }
    if(num == 35){
        w.functionSpirit = ar.join(',')
    }
    if(num == 41){
        w.utensilVision = ar.join(',')
    }
    if(num == 42){
        w.utensilHearing = ar.join(',')
    }
    if(num == 43){
        w.utensilSpeech = ar.join(',')
    }
    if(num == 44){
        w.utensilLimbs = ar.join(',')
    }
    if(num == 45){
        w.utensilIntelligenc = ar.join(',')
    }
}

function isOkSub(){
    if(!w.isSR34){
        w.R34check = true
    }else if(!w.isSR33){
    	w.R33check = true
    }else if(!w.isSR36){
    	w.R36check = true
    }
    if(w.R31check && w.R32check && w.R33check && w.R34check && w.R35check && w.R36check && w.R37check){
        w.isSub = true;
    }else{
        w.isSub = false;
    }
    
    
}
//R31check
w.$watch('familyDoctor',function(n,o){
    if(n){
        w.R31check = true;
    }else{
        w.R31check = false;
    }
    isOkSub()
});
//R32check
function R34clear(){
    w.isSR34 = false;
    w.R34check = true;
    w.untreatedCauseOne = '';
    w.untreatedCauseTwo = '';
    w.untreatedCauseThree = '';
    w.untreatedCauseFour = '';
    w.untreatedCauseFive = '';
}
w.$watch('otherDisease',function(n,o){
    if(n){
        w.R32check = true;
        if(n == 2){
            w.isSR33 = false;
            w.R33check = true;
            w.treat = '';
            R34clear();
        }else{
            w.isSR33 = true;
            w.isSR34 = true;
            w.R33check = false;
            w.R34check = false;
            setTimeout(function(){
                picker($('#treat'),trueFalseA);
                $('#treat').on('change',function(){
                    w.treat = trueFalseA.indexOf( $(this).val())+1;
                });
            },0)
        }
    }else{
        w.R32check = false
    }
    isOkSub()
});
//R33check
w.$watch('treat',function(n,o){
	    if(!w.isSR33){
	        	 w.R33check = true;
	    }else{
	    	if(n){
	        w.R33check = true;
	        if(n == 1){
	            R34clear();
	        }else{
	            w.isSR34 = true;
	            w.R34check = false;
	        }
	    
	    }else{
	        w.R33check = false
	    }
	    }

		
    isOkSub()
});
//R34check
function ckR24(){
    if(w.untreatedCauseOne || w.untreatedCauseTwo|| w.untreatedCauseThree|| w.untreatedCauseFour|| w.untreatedCauseFive){
        w.R34check = true
    }else{
        w.R34check = false
    }
    isOkSub()
}
w.$watch('R34NameA',function(n,o){
    var str = '';
    if(n){
        str = n.join('、')
    }else{
        str = ''
    }
    w.R34input = str;
});
w.$watch('untreatedCauseOne',function(n,o){
    ckR24()
});
w.$watch('untreatedCauseTwo',function(n,o){
    ckR24()
});
w.$watch('untreatedCauseThree',function(n,o){
    ckR24()
});
w.$watch('untreatedCauseFour',function(n,o){
    ckR24()
});
w.$watch('untreatedCauseFive',function(n,o){
    ckR24()
});
w.$watch('isSR36',function(n,o){
    if(!n){
        w.R36check = true;
        radioLiIsC(w.notRecoveredCauseA);
        w.notRecoveredCauseOne = '';
        w.notRecoveredCauseTwo = '';
        w.notRecoveredCauseThree = '';
        w.notRecoveredCauseFour = '';
    }
});
//R35check
function ckR35(){
    var str = '';
    w.isSR36 = false;
    w.R36check = true;
    if(w.useServiceOne || w.useServiceTwo || w.useServiceThree || w.useServiceFour || w.useServiceFive || w.useServiceSix){
        w.R35check = true;
    }else{
        w.R35check = false;
    }
    if(w.useServiceSix){
        str = '未得到';
        w.isSR36 = true;
        w.R36check = false;
    }else{
        if(w.useServiceOne){
            str += w.useServiceA[0].name+'、';
        }
        if(w.useServiceTwo){
            str += w.useServiceA[1].name+'、';
        }
        if(w.useServiceThree){
            str += w.useServiceA[2].name+'、';
        }
        if(w.useServiceFour){
            str += w.useServiceA[3].name+'、';
        }
        if(w.useServiceFive){
            str += w.useServiceA[4].name+'、';
        }
    }
    var ar = str.split('、');
    ar.removeByValue('');
    str = ar.join('、');
    w.R35input = str;
    $('#useService').val(str);
    changeTh($('#useService'));
    isOkSub()
}
w.$watch('useServiceOne',function(n,o){
    ckR35()
});
w.$watch('useServiceTwo',function(n,o){
    ckR35()
});
w.$watch('useServiceThree',function(n,o){
    ckR35()
});
w.$watch('useServiceFour',function(n,o){
    ckR35()
});
w.$watch('useServiceFive',function(n,o){
    ckR35()
});
w.$watch('useServiceSix',function(n,o){
    ckR35()
});

//R36check
function ckR36(){
    var str = '';
    if(w.notRecoveredCauseOne || w.notRecoveredCauseTwo || w.notRecoveredCauseThree || w.notRecoveredCauseFour){
        w.R36check = true;
    }else{
        w.R36check = false;
    }
    if(w.notRecoveredCauseOne){
        str += w.notRecoveredCauseA[0].name+'、';
    }
    if(w.notRecoveredCauseTwo){
        str += w.notRecoveredCauseA[1].name+'、';
    }
    if(w.notRecoveredCauseThree){
        str += w.notRecoveredCauseA[2].name+'、';
    }
    if(w.notRecoveredCauseFour){
        str += w.notRecoveredCauseA[3].name+'、';
    }
    var ar = str.split('、');
    ar.removeByValue('');
    str = ar.join('、');
    w.R36input = str;
    $('#notRecoveredCause').val(str);
    changeTh($('#notRecoveredCause'));
    isOkSub()
}
w.$watch('notRecoveredCauseOne',function(n,o){
    ckR36()
});
w.$watch('notRecoveredCauseTwo',function(n,o){
    ckR36()
});
w.$watch('notRecoveredCauseThree',function(n,o){
    ckR36()
});
w.$watch('notRecoveredCauseFour',function(n,o){
    ckR36()
});

//R37check
function chR373(){
    var isCh3 = false;
    $.each(w.needServiceA3,function(i,v){
        if(v.isC){
            isCh3 = true;
        }
    });
    if(isCh3){
        w.needServiceThree = 3;
        w.needServiceA[2].isC = true;
    }else{
        w.needServiceThree = '';
        w.needServiceA[2].isC = false;
    }
    ckR37()
}
function chR374(){
    var isCh4 = false;
    $.each(w.needServiceA4,function(i,v){
        if(v.isC){
            isCh4 = true;
        }
    });
    if(isCh4){
        w.needServiceFour = 4;
        w.needServiceA[3].isC = true;
    }else{
        w.needServiceFour = '';
        w.needServiceA[3].isC = false;
    }
    ckR37()
}
function ckR37(){
    if(w.needServiceOne || w.needServiceTwo || w.needServiceThree || w.needServiceFour || w.needServiceFive || w.needServiceSix){
        w.R37check = true;
    }else{
        w.R37check = false
    }
    var cA = [];
    $.each(w.needServiceA,function(i,v){
        if(v.isC){
            var str = v.name;
            /*            surgery:w.surgery || '',//手术
                            medicinal:w.medicinal || '',//药物
                            functionVision:w.functionVision || '',//功能训练-视力
                            functionHearing:w.functionHearing || '',//功能训练-听力
                            functionLimbs:w.functionLimbs || '',//功能训练-肢体
                            functionIntelligence:w.functionIntelligence || '',//功能训练-智力
                            functionSpirit:w.functionSpirit || '',//功能训练-精神
                            utensilVision:w.utensilVision || '',//辅助器具-视力
                            utensilHearing:w.utensilHearing || '',//辅助器具-听力
                            utensilSpeech:w.utensilSpeech || '',//辅助器具-言语
                            utensilLimbs:w.utensilLimbs || '',//辅助器具-肢体
                            utensilIntelligenc:w.utensilIntelligenc || '',//辅助器具-智力
                            nurse:w.nurse || ''//护理*/
            if(v.id == 1){
                if(w.surgery && w.surgery!=0)
                    str += '('+getStrType(w.surgery, w.needServiceA1)+')';
            }
            if(v.id == 2){
                if(w.medicinal && w.medicinal!=0)
                    str += '('+getStrType(w.medicinal, w.needServiceA2)+')';
            }
            if(v.id == 3){
                if(w.needServiceThree && w.needServiceThree!=0){
                    var str3 = '';
                    $.each(w.needServiceA3,function(i,v){
                        if(v.isC){
                            str3 = v.name;
                            if(v.id == 1){
                                if(w.functionVision && w.functionVision!=0){
                                    str3+='('+getStrType(w.functionVision, w.needServiceA31)+')'
                                }
                            }
                            if(v.id == 2){
                                if(w.functionHearing && w.functionHearing!=0){
                                    str3+='('+getStrType(w.functionHearing, w.needServiceA32)+')'
                                }
                            }
                            if(v.id == 3){
                                if(w.functionLimbs && w.functionLimbs!=0){
                                    str3+='('+getStrType(w.functionLimbs, w.needServiceA33)+')'
                                }
                            }
                            if(v.id == 4){
                                if(w.functionIntelligence && w.functionIntelligence!=0){
                                    str3+='('+getStrType(w.functionIntelligence, w.needServiceA34)+')'
                                }
                            }
                            if(v.id == 5){
                                if(w.functionSpirit && w.functionSpirit!=0){
                                    str3+='('+getStrType(w.functionSpirit, w.needServiceA35)+')'
                                }
                            }
                        }
                    });
                    str += '['+str3+']';
                }
            }
            if(v.id == 4){
                if(w.needServiceFour && w.needServiceFour!=0){
                    var str4 = '';
                    $.each(w.needServiceA4,function(i,v){
                        if(v.isC){
                            str4 = v.name;
                            if(v.id == 1){
                                if(w.utensilVision && w.utensilVision!=0){
                                    str4+='('+getStrType(w.utensilVision, w.needServiceA41)+')'
                                }
                            }
                            if(v.id == 2){
                                if(w.utensilHearing && w.utensilHearing!=0){
                                    str4+='('+getStrType(w.utensilHearing, w.needServiceA42)+')'
                                }
                            }
                            if(v.id == 3){
                                if(w.utensilSpeech && w.utensilSpeech!=0){
                                    str4+='('+getStrType(w.utensilSpeech, w.needServiceA43)+')'
                                }
                            }
                            if(v.id == 4){
                                if(w.utensilLimbs && w.utensilLimbs!=0){
                                    str4+='('+getStrType(w.utensilLimbs, w.needServiceA44)+')'
                                }
                            }
                            if(v.id == 5){
                                if(w.utensilIntelligenc && w.utensilIntelligenc!=0){
                                    str4+='('+getStrType(w.utensilIntelligenc, w.needServiceA45)+')'
                                }
                            }
                        }
                    });
                    str += '['+str4+']';
                }
            }
            if(v.id == 5){
                if(w.nurse && w.nurse!=0)
                    str += '('+getStrType(w.nurse, w.needServiceA5)+')';
            }
            cA.push(str)
        }
    });
    w.R37input = cA.join('、');
    $('#needService').val(cA.join('、'));
    changeTh($('#needService'));
    isOkSub()
}
w.$watch('surgery',function(n,o){
    if(n){
        w.needServiceA[0].isC = true;
        w.needServiceOne = 1;
    }else{
        w.needServiceA[0].isC = false;
        w.needServiceOne = '';
    }
    ckR37()
});//1
w.$watch('nurse',function(n,o){
    if(n){
        w.needServiceA[4].isC = true;
        w.needServiceFive = 5;
    }else{
        w.needServiceA[4].isC = false;
        w.needServiceFive = '';
    }
    ckR37()
});//5
w.$watch('medicinal',function(n,o){
    if(n){
        w.needServiceA[1].isC = true;
        w.needServiceTwo = 2;
    }else{
        w.needServiceA[1].isC = false;
        w.needServiceTwo = '';
    }
    ckR37()
});//2
w.$watch('functionVision',function(n,o){//3-1
    if(n){
        w.needServiceA3[0].isC = true;
    }else{
        w.needServiceA3[0].isC = false;
    }
    chR373()
});
w.$watch('functionHearing',function(n,o){//3-2
    if(n){
        w.needServiceA3[1].isC = true;
    }else{
        w.needServiceA3[1].isC = false;
    }
    chR373()
});
w.$watch('functionLimbs',function(n,o){//3-3
    if(n){
        w.needServiceA3[2].isC = true;
    }else{
        w.needServiceA3[2].isC = false;
    }
    chR373()
});
w.$watch('functionIntelligence',function(n,o){//3-4
    if(n){
        w.needServiceA3[3].isC = true;
    }else{
        w.needServiceA3[3].isC = false;
    }
    chR373()
});
w.$watch('functionSpirit',function(n,o){//3-5
    if(n){
        w.needServiceA3[4].isC = true;
    }else{
        w.needServiceA3[4].isC = false;
    }
    chR373()
});
w.$watch('utensilVision',function(n,o){//4-1
    if(n){
        w.needServiceA4[0].isC = true;
    }else{
        w.needServiceA4[0].isC = false;
    }
    chR374()
});
w.$watch('utensilHearing',function(n,o){//4-2
    if(n){
        w.needServiceA4[1].isC = true;
    }else{
        w.needServiceA4[1].isC = false;
    }
    chR374()
});
w.$watch('utensilSpeech',function(n,o){//4-3
    if(n){
        w.needServiceA4[2].isC = true;
    }else{
        w.needServiceA4[2].isC = false;
    }
    chR374()
});
w.$watch('utensilLimbs',function(n,o){//4-4
    if(n){
        w.needServiceA4[3].isC = true;
    }else{
        w.needServiceA4[3].isC = false;
    }
    chR374()
});
w.$watch('utensilIntelligenc',function(n,o){//4-5
    if(n){
        w.needServiceA4[4].isC = true;
    }else{
        w.needServiceA4[4].isC = false;
    }
    chR374()
});
w.$watch('needServiceOne',function(n,o){
    ckR37()
});
w.$watch('needServiceTwo',function(n,o){
    ckR37()
});
w.$watch('needServiceThree',function(n,o){
    ckR37()
});
w.$watch('needServiceFour',function(n,o){
    ckR37()
});
w.$watch('needServiceFive',function(n,o){
    ckR37()
});
w.$watch('needServiceSix',function(n,o){
    ckR37()
});





picker($('#familyDoctor'),trueFalseA);
$('#familyDoctor').on('change',function(){
    w.familyDoctor = trueFalseA.indexOf( $(this).val())+1;
});

picker($('#otherDisease'),trueFalseA);
$('#otherDisease').on('change',function(){
    w.otherDisease = trueFalseA.indexOf( $(this).val())+1;
});




//点击提交
$('.fix-btn').on('click',function(){
    if(!w.isSub) return $.toast('填写不完整！');
    var send = {
        id: w.id,
        personalId: w.personalId,
        familyDoctor: w.familyDoctor || '',//个人或家庭是否签订家庭医生服务协议
        otherDisease:w.otherDisease || '',//除残疾外,过去两周是否患有其他疾病
        treat:w.treat || '',//过去两周内是否已就诊或治疗
        untreatedCauseOne:w.untreatedCauseOne || '',//未就诊或治疗原因1
        untreatedCauseTwo:w.untreatedCauseTwo || '',//
        untreatedCauseThree:w.untreatedCauseThree || '',//
        untreatedCauseFour:w.untreatedCauseFour || '',//
        untreatedCauseFive:w.untreatedCauseFive || '',//
        needServiceOne:w.needServiceOne || '',//针对自身残疾，目前是否还需要以下服务
        needServiceTwo:w.needServiceTwo || '',//
        needServiceThree:w.needServiceThree || '',//
        needServiceFour:w.needServiceFour || '',//
        needServiceFive:w.needServiceFive || '',//
        needServiceSix:w.needServiceSix || '',//
        notRecoveredCauseOne:w.notRecoveredCauseOne || '',//未得到康复的原因
        notRecoveredCauseTwo:w.notRecoveredCauseTwo || '',//
        notRecoveredCauseThree:w.notRecoveredCauseThree || '',//
        notRecoveredCauseFour:w.notRecoveredCauseFour || '',//
        useServiceOne:w.useServiceOne || '',//针对自身残疾，动态更新年度内是否使用过一下服务
        useServiceTwo:w.useServiceTwo || '',//
        useServiceThree:w.useServiceThree || '',//
        useServiceFour:w.useServiceFour || '',//
        useServiceFive:w.useServiceFive || '',//
        useServiceSix:w.useServiceSix || '',//
        surgery:w.surgery || '',//手术
        medicinal:w.medicinal || '',//药物
        functionVision:w.functionVision || '',//功能训练-视力
        functionHearing:w.functionHearing || '',//功能训练-听力
        functionLimbs:w.functionLimbs || '',//功能训练-肢体
        functionIntelligence:w.functionIntelligence || '',//功能训练-智力
        functionSpirit:w.functionSpirit || '',//功能训练-精神
        utensilVision:w.utensilVision || '',//辅助器具-视力
        utensilHearing:w.utensilHearing || '',//辅助器具-听力
        utensilSpeech:w.utensilSpeech || '',//辅助器具-言语
        utensilLimbs:w.utensilLimbs || '',//辅助器具-肢体
        utensilIntelligenc:w.utensilIntelligenc || '',//辅助器具-智力
        nurse:w.nurse || ''//护理
    };
    var obj = {
        name:'list5',
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
    window.location.href='write6.html?age='+ age+'&R14val='+ R14val+'&noSchoolCausation='+ noSchoolCausation+'&residenceType='+ residenceType+'&isWelfareHouse='+ isWelfareHouse+'&from=5&disabilityCard='+disabilityCard
}

//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});

