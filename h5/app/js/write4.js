/**
 * Created by Think on 2017/12/20.*/
var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');
var countryFamilyHouse = getParam('countryFamilyHouse');//R11 变更R27——5
var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var isFarmer = false;
if(residenceType == 1){
    isFarmer = true
}
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
var isInStudy = getParam('isInStudy');//是否在校学习，是：1，否：0
var go25 = getParam('go25'),isGo25;//是否在校学习，是：1，否：0
var isR1712 = getParam('isR1712');//是：1，否：0
var townFamilyIncome = getParam('townFamilyIncome');//R8 变更R27——1
var noSchoolCausation = getParam('noSchoolCausation');//R15---G11
var R14val = getParam('R14val');//R14---G10

if(go25 == 1){
    isGo25 = true
}else{
    isGo25 = false
}
var socialAssistanceA = [
    {id:1,name:'最低生活保障',isC:false,isIf:true},
    {id:2,name:'特困人员救助供养',isC:false,isIf:true},
    {id:3,name:'医疗救助',isC:false,isIf:true},
    {id:4,name:'其他救助(可多选)',isC:false,isIf:true},
    {id:5,name:'享受住建部门农村危房改造',isC:false,isIf:isFarmer},
    {id:6,name:'无',isC:false,isIf:true}
];

if(countryFamilyHouse){
	if(countryFamilyHouse != 1){
		socialAssistanceA[4].isIf = false;
		socialAssistanceA[4].name = '';
	}
}
if(residenceType !=1 ){
	if(townFamilyIncome != 1){
		socialAssistanceA[0].isIf = false;
		socialAssistanceA[0].name = "";
	}else if(townFamilyIncome == 1){
		socialAssistanceA[0].isIf = true;
		socialAssistanceA[0].name = "最低生活保障";
	}
}
var data4 = {
    id:'',
    personalId: '',
    chooseR29:{},
    countryFamilyHouse:countryFamilyHouse,//R27选择5、享受住建部门农村危房改造政策，则R11必选1、状况良好
    isGo25:isGo25,
    isFarmer:isFarmer,
    trueFalseA23:trueFalseA23,
    trueFalseA24:trueFalseA24,
    trueFalseA25:trueFalseA25,
    trueFalseA26:trueFalseA26,
    trueFalseA29:trueFalseA29,
    endowmentInsurance:'',//是否参加城乡居民养老保险
    endowmentInsuranceSubsidy: '',//是否享受城乡居民养老保险缴费补贴
    medicalInsurance: '',//是否参加医疗保险
    medicalInsuranceSubsidy: '',//是否享受医疗保险缴费补贴
    supportService: '',//是否享受托养服务
    supportServiceNeeds: 0,//目前托养服务需求
    supportServiceNeedsA:supportServiceNeedsA,
    securityOfSubsistenceA:securityOfSubsistenceA,
    R22input:'',
    securityOfSubsistenceOne: 0,//是否参加职工社会保险1
    securityOfSubsistenceTwo: 0,//是否参加职工社会保险2
    securityOfSubsistenceThree: 0,//是否参加职工社会保险3
    securityOfSubsistenceFour: 0,//是否参加职工社会保险4
    socialAssistanceA:socialAssistanceA,
    soA1Farmer:soA1Farmer,
    soA1UnFarmer:soA1UnFarmer,
    soA4:soA4,
    socialAssistanceOne:0,//动态更新年度内社会救助及住房改善情况-1
    socialAssistanceTwo: 0,//动态更新年度内社会救助及住房改善情况-1
    socialAssistanceThree: 0,//动态更新年度内社会救助及住房改善情况-1
    socialAssistanceFour:0,//动态更新年度内社会救助及住房改善情况-1
    socialAssistanceFive: 0,//动态更新年度内社会救助及住房改善情况-1
    socialAssistanceSix: 0,//动态更新年度内社会救助及住房改善情况-1
    socialWelfareutiSubsidyA:socialWelfareutiSubsidyA,
    syA3:syA3,
    socialWelfareutiSubsidyOne:0,//动态更新年度类社会福利补贴情况-1
    socialWelfareutiSubsidyTwo: 0,//动态更新年度类社会福利补贴情况-1
    socialWelfareutiSubsidyThree: 0,//动态更新年度类社会福利补贴情况-1
    socialWelfareutiSubsidyFour: 0,//动态更新年度类社会福利补贴情况-1
    town: '',//城镇
    rural: '',//农村
    otherSalvation:'',//其他救助
    otherSubsidies: '',//其他补贴
    supportServiceType: '',//托养服务类型
    supportServiceTypeA:supportServiceTypeA,
    isSub:false,
    showR22:false,
    showR27:false,
    isFarmer1:false,
    isFarmer2:false,
    isShowR274:false,
    showR28:false,
    showR29:false,
    showR30:false,
    showR23:false,
    showR24:false,
    showR25:false,
    showR26:false,
    isShowR22:true,
    isShowR23:true,
    isShowR24:true,
    isShowR26:true,
    isShowR29:true,
    isShowR30:true,
    R22check:true,
    R23check:true,
    R24check:true,
    R25check:false,
    R26check:false,
    R23input:'',
    R24input:'',
    R25input:'',
    R26input:'',
    isopen23:true,
    isopen25:true,
    R27check:false,
    R27input:'',
    R28check:false,
    R28input:'',
    isSR283:false,
    R29check:false,
    R30check:false,
    isSR291:false,
    R29input:'',
    R30input:'',
    isEdit:0,
    //redpoint
    ifR22p:false,
    ifR23p:false,
    ifR24p:false,
    ifR25p:false,
    ifR26p:false,
    ifR27p:false,
    ifR28p:false,
    ifR29p:false,
    ifR30p:false
};
var w = new Vue({
    el: '#write4',
    data: data4,
    methods:{
    	
        openShowR22:function(){
            this.showR22 = true;
        },
        closeShowR22:function(num){
            this.showR22 = false;
        },
        openShowR23:function(){
            if(this.isopen23){
                this.showR23 = true;
            }
        },
        closeShowR23:function(num){
            this.showR23 = false;
        },
        openShowR24:function(){
            this.showR24 = true;
        },
        closeShowR24:function(num){
            this.showR24 = false;
        },
        openShowR25:function(){
            if(this.isopen25){
                this.showR25 = true;
            }
        },
        closeShowR25:function(num){
            this.showR25 = false;
        },
        openShowR26:function(){
        	
            this.showR26 = true;
        },
        closeShowR26:function(num){
        	if(w.R26input == '是' && w.R27input.length == 1){
        		w.R27input = '医疗救助、'
        	}
            this.showR26 = false;
        },
        openShowR27:function(){
            this.showR27 = true;
        },
        closeShowR27:function(num){
            this.showR27 = false;
        },
        openShowR28:function(){
            this.showR28 = true;
        },
        closeShowR28:function(num){
            this.showR28 = false;
        },
        openShowR29:function(){
            this.showR29 = true;
        },
        closeShowR29:function(num){
        	if(!w.R29input){
				w.R30input = ''
			}
            this.showR29 = false;
        },
        openShowR30:function(){
            this.showR30 = true;
        },
        closeShowR30:function(num){
            this.showR30 = false;
        },
        choR22:function(arr,event){
            var ts = this,dom =$(event.target),id=arr.id,name=arr.name;
            if(id == 4){
                radioLi(dom);
                radioLiIsC(w.securityOfSubsistenceA);
                if(hC(dom)){
                    arr.isC = true;
                    w.securityOfSubsistenceFour = 4;
                    w.securityOfSubsistenceOne = 0;
                    w.securityOfSubsistenceTwo = 0;
                    w.securityOfSubsistenceThree = 0;
                }else{
                    arr.isC = false;
                    w.securityOfSubsistenceFour = 0;
                }
            }else{
                checkLi(dom);
                w.securityOfSubsistenceA[3].isC=false;
                w.securityOfSubsistenceFour = 0;
                if(hC(dom)){
                    arr.isC = true;
                    if(id == 1){
                        w.securityOfSubsistenceOne = 1;
                    }else if(id ==2){
                        w.securityOfSubsistenceTwo = 2;
                    }else if(id ==3){
                        w.securityOfSubsistenceThree = 3;
                    }
                }else{
                    arr.isC = false;
                    if(id == 1){
                        w.securityOfSubsistenceOne = 0;
                    }else if(id ==2){
                        w.securityOfSubsistenceTwo = 0;
                    }else if(id ==3){
                        w.securityOfSubsistenceThree = 0;
                    }
                }
            }

        },
        choR23:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.trueFalseA23);
            if(hC(dom)){
                ts.endowmentInsurance = id;
                arr.isC = true;
            }else{
                ts.endowmentInsurance = '';
                arr.isC = false;
            }
        },
        choR24:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.trueFalseA24);
            if(hC(dom)){
                ts.endowmentInsuranceSubsidy = id;
                arr.isC = true;
            }else{
                ts.endowmentInsuranceSubsidy = '';
                arr.isC = false;
            }
        },
        choR25:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.trueFalseA25);
            if(hC(dom)){
                ts.medicalInsurance = id;
                arr.isC = true;
            }else{
                ts.medicalInsurance = '';
                arr.isC = false;
            }
        },
        choR26:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.trueFalseA26);
            if(hC(dom)){
                ts.medicalInsuranceSubsidy = id;
                arr.isC = true;
            }else{
                ts.medicalInsuranceSubsidy = '';
                arr.isC = false;
            }
        },
        choR27:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            ts.isShowR274 = false;
            ts.isFarmer1 = false;
            ts.isFarmer2 = false;
            ts.socialAssistanceSix = 0;
            ts.socialAssistanceA[5].isC = false;
            //选择第一项
            if(id == 1){
            	//农业     ts.isFarmer=true
                if(ts.isFarmer){
                	
                    ts.isFarmer1 = true;
                }else{
                	//显示 全额  差额
                    ts.isFarmer2 = true;
                }
                //ts.rural  农村     ts.town 城镇
                if(ts.rural || ts.town){
                    ts.socialAssistanceOne = id;
                }
            }else if(id == 4){
                ts.isShowR274 = true;
                if(ts.otherSalvation){
                    ts.socialAssistanceFour = id;
                }
            }else if(id == 6){
                radioLi(dom);
                radioLiIsC(ts.socialAssistanceA);
                radioLiIsC(ts.soA1Farmer);
                radioLiIsC(ts.soA1UnFarmer);
                radioLiIsC(ts.soA4);
                ts.socialAssistanceOne = '';
                ts.socialAssistanceTwo = '';
                ts.socialAssistanceThree = '';
                ts.socialAssistanceFour = '';
                ts.socialAssistanceFive = '';
                ts.otherSalvation = '';
                ts.rural = '';
                ts.town = '';
                if(hC(dom)){
                    ts.socialAssistanceSix = id;
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
            }else{
                checkLi(dom);
                if(hC(dom)){
                    if(id == 2){
                        ts.socialAssistanceTwo = id;
                    }else if(id == 3){
                        ts.socialAssistanceThree = id;
                    }else if(id == 5){
                        ts.socialAssistanceFive = id;
                    }
                    arr.isC = true;
                }else{
                	arr.isC = false;
                    if(id == 2){
                        ts.socialAssistanceTwo = 0;
                    }else if(id == 3){
                        ts.socialAssistanceThree = 0;
                    }else if(id == 5){
                        ts.socialAssistanceFive = 0;
                    }
                    
                }
            }
               
            if(ts.medicalInsuranceSubsidy == 1 && id == 3){
                setTimeout(function(){
                    ts.socialAssistanceThree = 3;
                    arr.isC = true;
                },0);
            }
        },
        choR271:function(arr,event,num){//num:1是农村数组
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
           
            radioLi(dom);
            
            radioLiIsC(soA1Farmer);
            radioLiIsC(soA1UnFarmer);
            ts.rural = '';
            ts.town = '';
            if(hC(dom)){
                arr.isC = true;
                if(num == 1){
                    ts.rural = id;
                }else if(num == 2){
                    ts.town = id;
                }
            }else{
                arr.isC = false;
            }
        },
        choR274:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            checkLi(dom);
            ts.otherSalvation = '';
            if(hC(dom)){
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            var arrA = [];
            $('.R274-li').each(function(i,v){
                if(hC($(v))){
                    arrA.push($(v).attr('data-id'))
                }
            });
            ts.otherSalvation = arrA.join(',');
        },
        choR28:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            w.socialWelfareutiSubsidyFour = 0;
            w.socialWelfareutiSubsidyA[3].isC = false;
            ts.isSR283 = false;
            if(id == 4){
                radioLi(dom);
                radioLiIsC(w.socialWelfareutiSubsidyA);
                radioLiIsC(ts.syA3);
                ts.otherSubsidies = '';
                ts.socialWelfareutiSubsidyOne = '';
                ts.socialWelfareutiSubsidyTwo = '';
                ts.socialWelfareutiSubsidyThree = '';
                if(hC(dom)){
                    arr.isC = true;
                    w.socialWelfareutiSubsidyFour = 4;
                }
            }else{
                if(id == 3){
                    ts.isSR283 = true;
                    if(ts.otherSubsidies){
                        arr.isC = true;
                        w.socialWelfareutiSubsidyThree = 0;
                    }else{
                        arr.isC = false;
                        w.socialWelfareutiSubsidyThree = 3;
                    }
                }else{
                    checkLi(dom);
                    if(hC(dom)){
                        arr.isC = true;
                        if(id == 1){
                            w.socialWelfareutiSubsidyOne = 1;
                        }
                        if(id == 2){
                            w.socialWelfareutiSubsidyTwo = 2;
                        }
                    }else{
                        arr.isC = false;
                        if(id == 1){
                            w.socialWelfareutiSubsidyOne = 0;
                        }
                        if(id == 2){
                            w.socialWelfareutiSubsidyTwo = 0;
                        }
                    }
                }
            }
        },
        choR283:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            checkLi(dom);
            ts.otherSubsidies = '';
            if(hC(dom)){
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            var arrA = [];
            $('.R283-li').each(function(i,v){
                if(hC($(v))){
                    arrA.push($(v).attr('data-id'))
                }
            });
            ts.otherSubsidies = arrA.join(',');
        },
        choR29:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            ts.chooseR29 = arr;
            ts.isSR291 = false;
            radioLiIsC(ts.trueFalseA29);
            radioLiIsC(ts.supportServiceTypeA);
            ts.supportService = '';
            arr.isC = false;
            if(id == 1){
                ts.isSR291 = true;
                if(hC(dom)){
                    if(ts.supportServiceType){
                        arr.isC = true;
                        ts.supportService = id;
                    }
                }
            }else{
                radioLi(dom);
                if(hC(dom)){
                    arr.isC = true;
                    ts.supportService = id;
                }
            }
        },
        choR291:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.supportServiceTypeA);
            if(hC(dom)){
                ts.supportServiceType = id;
                arr.isC = true;
            }else{
                ts.supportServiceType = '';
            }
        },
        choR30:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            radioLi(dom);
            radioLiIsC(ts.supportServiceNeedsA);
            if(hC(dom)){
                arr.isC = true;
                ts.supportServiceNeeds = id;
            }else{
                arr.isC = false;
                ts.supportServiceNeeds = '';
            }
        },
        getBackInfo:function(){
            var send = {
                name:'list4',
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
                ts.ifR22p = getModify(info.securityOfSubsistenceOne,oldInfo.securityOfSubsistenceOne)
                    ||getModify(info.securityOfSubsistenceTwo,oldInfo.securityOfSubsistenceTwo)
                    ||getModify(info.securityOfSubsistenceThree,oldInfo.securityOfSubsistenceThree)
                    ||getModify(info.securityOfSubsistenceFour,oldInfo.securityOfSubsistenceFour);
                ts.ifR23p = getModify(info.endowmentInsurance,oldInfo.endowmentInsurance);
                ts.ifR24p = getModify(info.endowmentInsuranceSubsidy,oldInfo.endowmentInsuranceSubsidy);
                ts.ifR25p = getModify(info.medicalInsurance,oldInfo.medicalInsurance);
                ts.ifR26p = getModify(info.medicalInsuranceSubsidy,oldInfo.medicalInsuranceSubsidy);
                ts.ifR27p = getModify(info.socialAssistanceOne,oldInfo.socialAssistanceOne)
                    ||getModify(info.rural,oldInfo.rural)
                    ||getModify(info.town,oldInfo.town)
                    ||getModify(info.socialAssistanceTwo,oldInfo.socialAssistanceTwo)
                    ||getModify(info.socialAssistanceThree,oldInfo.socialAssistanceThree)
                    ||getModify(info.socialAssistanceFour,oldInfo.socialAssistanceFour)
                    ||getModify(info.otherSalvation,oldInfo.otherSalvation)
                    ||getModify(info.socialAssistanceFive,oldInfo.socialAssistanceFive)
                    ||getModify(info.socialAssistanceSix,oldInfo.socialAssistanceSix);
                ts.ifR28p = getModify(info.socialWelfareutiSubsidyOne,oldInfo.socialWelfareutiSubsidyOne)
                    ||getModify(info.socialWelfareutiSubsidyThree,oldInfo.socialWelfareutiSubsidyThree)
                    ||getModify(info.socialWelfareutiSubsidyTwo,oldInfo.socialWelfareutiSubsidyTwo)
                    ||getModify(info.otherSubsidies,oldInfo.otherSubsidies)
                    ||getModify(info.socialWelfareutiSubsidyFour,oldInfo.socialWelfareutiSubsidyFour);
                ts.ifR29p = getModify(info.supportService,oldInfo.supportService);
                ts.ifR30p = getModify(info.supportServiceNeeds,oldInfo.supportServiceNeeds);
            }
            if(info && JSON.stringify(info)!='{}'){
                ts.id = info.id;
                ts.personalId = info.personalId;
                if(ts.isShowR22){
                    ts.securityOfSubsistenceOne = info.securityOfSubsistenceOne;//是否参加职工社会保险1
                    if(info.securityOfSubsistenceOne){
                        ts.R22check = true;
                        ts.securityOfSubsistenceA[0].isC = true;
                    }
                    ts.securityOfSubsistenceTwo = info.securityOfSubsistenceTwo;//是否参加职工社会保险2
                    if(info.securityOfSubsistenceTwo){
                        ts.R22check = true;
                        ts.securityOfSubsistenceA[1].isC = true;
                    }
                    ts.securityOfSubsistenceThree = info.securityOfSubsistenceThree;//是否参加职工社会保险3
                    if(info.securityOfSubsistenceThree){
                        ts.R22check = true;
                        ts.securityOfSubsistenceA[2].isC = true;
                    }
                    ts.securityOfSubsistenceFour = info.securityOfSubsistenceFour;//是否参加职工社会保险4
                    if(info.securityOfSubsistenceFour){
                        ts.R22check = true;
                        ts.securityOfSubsistenceA[3].isC = true;
                    }
                    ckR22();
                }
                if(ts.isGo25){
                    w.R22check = true;
                    w.R23check = true;
                    w.R24check = true;
                }
                ts.endowmentInsurance = info.endowmentInsurance;//是否参加城乡居民养老保险
                ts.trueFalseA23 = getBackIsC(info.endowmentInsurance,trueFalseA23);
                ts.R23input = (info.endowmentInsurance && info.endowmentInsurance!=0) ? trueFalseA[info.endowmentInsurance-1] : '';
                if(ts.endowmentInsurance && ts.endowmentInsurance!=0){
                    ts.R23check = true
                }
                ts.endowmentInsuranceSubsidy = info.endowmentInsuranceSubsidy;//是否享受城乡居民养老保险缴费补贴
                ts.trueFalseA24 = getBackIsC(info.endowmentInsurance,trueFalseA24);
                ts.R24input = (info.endowmentInsuranceSubsidy && info.endowmentInsuranceSubsidy!=0) ? trueFalseA[info.endowmentInsuranceSubsidy-1] : '';
                if(ts.endowmentInsuranceSubsidy && ts.endowmentInsuranceSubsidy!=0){
                    ts.R24check = true
                }
                ts.medicalInsurance = info.medicalInsurance;//是否参加医疗保险
                ts.trueFalseA25 = getBackIsC(info.medicalInsurance,trueFalseA25);
                ts.R25input = info.medicalInsurance ? trueFalseA[info.medicalInsurance-1] : '';
                if(ts.medicalInsurance && ts.medicalInsurance!=0){
                    ts.R25check = true
                }
                ts.medicalInsuranceSubsidy = info.medicalInsuranceSubsidy;//是否享受医疗保险缴费补贴
                ts.trueFalseA26 = getBackIsC(info.medicalInsuranceSubsidy,trueFalseA26);
                ts.R26input = info.medicalInsuranceSubsidy ? trueFalseA[info.medicalInsuranceSubsidy-1] : '';
                if(ts.medicalInsuranceSubsidy && ts.medicalInsuranceSubsidy!=0){
                    ts.R26check = true
                }
                ts.socialAssistanceOne = info.socialAssistanceOne;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceOne){
                    ts.socialAssistanceA[0].isC = true;
                }
                ts.socialAssistanceTwo = info.socialAssistanceTwo;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceTwo){
                    ts.socialAssistanceA[1].isC = true;
                }
                ts.socialAssistanceThree = info.socialAssistanceThree;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceThree){
                    ts.socialAssistanceA[2].isC = true;
                }
                ts.socialAssistanceFour = info.socialAssistanceFour;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceFour){
                    ts.socialAssistanceA[3].isC = true;
                }
                ts.socialAssistanceFive = info.socialAssistanceFive;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceFive){
                    ts.socialAssistanceA[4].isC = true;
                }
                ts.socialAssistanceSix = info.socialAssistanceSix;//动态更新年度内社会救助及住房改善情况-1
                if(info.socialAssistanceSix){
                    ts.socialAssistanceA[5].isC = true;
                }
                chR27();
                ts.town = info.town;//城镇
                ts.soA1UnFarmer = getBackIsC(info.town,soA1UnFarmer);
                ts.rural = info.rural;//农村
                ts.soA1Farmer = getBackIsC(info.rural,soA1Farmer);
                ts.otherSalvation = info.otherSalvation;//其他救助
                ts.soA4 = getBackIsC(info.otherSalvation,soA4);

                ts.socialWelfareutiSubsidyOne = info.socialWelfareutiSubsidyOne;//动态更新年度类社会福利补贴情况-1
                if(info.socialWelfareutiSubsidyOne && info.socialWelfareutiSubsidyOne!=0){
                    ts.socialWelfareutiSubsidyA[0].isC = true;
                }
                ts.socialWelfareutiSubsidyTwo = info.socialWelfareutiSubsidyTwo;//动态更新年度类社会福利补贴情况-1
                if(info.socialWelfareutiSubsidyTwo && info.socialWelfareutiSubsidyTwo!=0){
                    ts.socialWelfareutiSubsidyA[1].isC = true;
                }
                ts.socialWelfareutiSubsidyThree = info.socialWelfareutiSubsidyThree;//动态更新年度类社会福利补贴情况-1
                if(info.socialWelfareutiSubsidyThree && info.socialWelfareutiSubsidyThree!=0){
                    ts.socialWelfareutiSubsidyA[2].isC = true;
                }
                ts.socialWelfareutiSubsidyFour = info.socialWelfareutiSubsidyFour;//动态更新年度类社会福利补贴情况-1
                if(info.socialWelfareutiSubsidyFour && info.socialWelfareutiSubsidyFour!=0){
                    ts.socialWelfareutiSubsidyA[3].isC = true;
                }
                chR28();
                ts.otherSubsidies = info.otherSubsidies;//其他补贴
                ts.syA3 = getBackIsC(info.otherSubsidies,syA3);

                ts.supportService = info.supportService;//是否享受托养服务
                ts.trueFalseA29 = getBackIsC(info.supportService,trueFalseA29);
                ts.R29input = info.supportService ? trueFalseA[info.supportService-1] : '';
                ts.supportServiceType = info.supportServiceType;//托养服务类型
                ts.supportServiceTypeA = getBackIsC(info.supportServiceType,supportServiceTypeA);

                ts.supportServiceNeeds = info.supportServiceNeeds;//目前托养服务需求
                ts.supportServiceNeedsA = (info.supportServiceNeeds&&info.supportServiceNeeds!=0) ?getBackIsC(info.supportServiceNeeds,supportServiceNeedsA) : supportServiceNeedsA;
                ts.R30input = (info.supportServiceNeeds&&info.supportServiceNeeds!=0) ? ts.supportServiceNeedsA[info.supportServiceNeeds-1].name : '';
            }else{
                if(ts.isShowR22){
                    ts.R22check = false;
                }
                if(ts.isShowR23){
                    ts.R23check = false;
                }
            }
            ts.$watch('securityOfSubsistenceOne',function(n,o){
                if(n == 1){
                    w.trueFalseA23[0].isIf=false;
                    w.trueFalseA23[1].isC=true;
                    w.R23input = w.trueFalseA23[1].name;
                    w.isopen23 = false;
                    w.endowmentInsurance = 2;
                    w.R23check = true;
                    w.R24check = true;
                }else{
                    back23();
                }
                ckR22()
            });
            ts.$watch('securityOfSubsistenceTwo',function(n,o){
                if(n == 2){
                    w.trueFalseA25[0].isIf=false;
                    w.trueFalseA25[1].isC=true;
                    w.R25input = w.trueFalseA25[1].name;
                    w.isopen25 = false;
                    w.medicalInsurance = 2;
                    w.R25check = true;
                    w.R26check = true;
                }else{
                    back25();
                }
                ckR22()
            });
            ts.$watch('securityOfSubsistenceThree',function(n,o){
                ckR22()
            });
            ts.$watch('securityOfSubsistenceFour',function(n,o){
                if(n == 4){
                    if(isR1712 == 1){
                        var objArea = {
                            name:'normal',
                            type:'alert',
                            data:{
                                content:'集中就业和按比例就业原则上应该参加职工社会保险'
                            }
                        };
                        if(isIos() == 1){
                            getDataFromApp(JSON.stringify(objArea));
                        }else if(isIos() == 2){
                            getDataFromApp(objArea);
                        }
                    }
                    back23();
                    back25()
                }
                ckR22()
            });
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
if(w.isGo25){
    w.isShowR22 = false;
    w.isShowR23 = false;
    w.isShowR24 = false;
}else{
    if(age<16){
        w.isShowR22 = false;
        w.isShowR23 = false;
        w.isShowR24 = false;
    }else if(age>59){
        w.isShowR24 = false;
        w.R22check = false;
        w.R23check = false;
    }else{
        w.R24check = false;
    }
}

//判断是否显示R29 R30
  var grade = disabilityCard.substring(19,20);
    var type = disabilityCard.substring(18,19);
if(disabilityCard.length>18){
    if(age>15 && age<60){
        if(type == 5 || type == 6 || type == 7 || (type == 4 && grade == 1) || (type == 4 && grade == 2)){
            w.isShowR29 = true;
            w.isShowR30 = true;
        }else{
            w.isShowR29 = false;
            w.isShowR30 = false;
        }
    }else{
    	w.isShowR29 = false;
        w.isShowR30 = false;
        $('.R29,.R30').addClass('d-n')
    }
}else if(disabilityCard.length == 18){
	w.isShowR29 = true;
    w.isShowR30 = true;
}else{
	 w.isShowR29 = false;
     w.isShowR30 = false;
}
if(!isFarmer && isWelfareHouse == 2){
    if(townFamilyIncome != 1){
        w.socialAssistanceOne = 0;
        w.socialAssistanceA[0].isIf = false;
    }
}
//R27--1
w.$watch('socialAssistanceOne',function (n,o) {
   //R27--1  
    if(n == 1){
    	//持证
    	if(disabilityCard.length>18){
    		w.socialWelfareutiSubsidyOne = 1;
        	w.socialWelfareutiSubsidyA[0].isC = true;
    	}
        w.socialWelfareutiSubsidyFour = 0;
        w.socialWelfareutiSubsidyA[3].isC = false;
    }
});

w.$watch('socialAssistanceTwo',function (n,o) {
    if(n == 2){
        w.socialWelfareutiSubsidyTwo = 2;
        w.socialWelfareutiSubsidyA[1].isC = true;
        w.socialWelfareutiSubsidyFour = 0;
        w.socialWelfareutiSubsidyA[3].isC = false;
    }else{
        w.socialAssistanceTwo = 0;
        w.socialAssistanceA[1].isC = false;
    }
});
//R28--1
w.$watch('socialWelfareutiSubsidyOne',function (n,o) {
	
    if(n == 0){
        if(w.socialAssistanceOne == 1){
        	//持证
        	if(disabilityCard.length>18){
        		 w.socialWelfareutiSubsidyOne = 1;
            	w.socialWelfareutiSubsidyA[0].isC = true;
        	}
            w.socialWelfareutiSubsidyFour = 0;
            w.socialWelfareutiSubsidyA[3].isC = false;
        }
    }
});
w.$watch('socialWelfareutiSubsidyTwo',function (n,o) {
    if(n == 0){
        if(w.socialAssistanceTwo == 2){
            w.socialWelfareutiSubsidyTwo = 2;
            w.socialWelfareutiSubsidyA[1].isC = true;
            w.socialWelfareutiSubsidyFour = 0;
            w.socialWelfareutiSubsidyA[3].isC = false;
        }
    }
});



function isOkSub(){
	//是否必填
var grade = disabilityCard.substring(19,20);
var type = disabilityCard.substring(18,19);
if(w.isShowR29 && (type == 5 || type == 6 || (type == 4 && grade == 1) ||(type == 4 && grade == 2))){
	if(!w.R29input){
		w.R29check = false;	
	}else if(w.R29input.indexOf('否') != -1 && !w.R30input){
		w.R30check = false;
	}else if(w.R29input.indexOf('否') != -1 && w.R30input){
		w.R30check = true;
	}else{
		w.R30check = true;
	}
	
}else{
	w.R29check = true;	
	w.R30check = true;
}

    if(w.R22check && w.R23check && w.R24check && w.R25check && w.R26check && w.R27check && w.R28check
        && w.R29check && w.R30check){
        w.isSub = true;
    }else{
        w.isSub = false;
    }
}
//R22check
function back23(){
    w.trueFalseA23[0].isIf=true;
    w.trueFalseA23[1].isC=false;
    w.trueFalseA23[0].isC=false;
    w.R23input = '';
    w.isopen23 = true;
    w.endowmentInsurance = '';
    back24()
}
function back25(){
    w.trueFalseA25[0].isIf=true;
    w.trueFalseA25[1].isC=false;
    w.trueFalseA25[0].isC=false;
    w.R25input = '';
    w.isopen25 = true;
    w.medicalInsurance = '';
    back26()
}
function ckR22(){
    if(w.securityOfSubsistenceOne != 0 || w.securityOfSubsistenceTwo != 0 || w.securityOfSubsistenceThree != 0 || w.securityOfSubsistenceFour != 0){
        w.R22check = true
    }else{
        w.R22check = false
    }
    delR22input();
    isOkSub();
}
function delR22input(){
    var cA = [];
    $.each(w.securityOfSubsistenceA,function(i,v){
        if(v.isC){
            cA.push(v.name);
        }
    });
    w.R22input = cA.join('、');
    $('#securityOfSubsistence').val(cA.join('、'));
    changeTh($('#securityOfSubsistence'));
}

//R23check
function back24(){
    w.R24input = '';
    w.endowmentInsuranceSubsidy = '';
    radioLiIsC(w.trueFalseA24)
}
w.$watch('endowmentInsurance',function(n,o){
    if(w.isShowR23){
        if(n && n!='' && n!=0){
            w.R23check = true;
            if(n == 2){
                w.isShowR24 = false;
                w.R23input = '否';
                w.R24check = true;
                back24()
            }else{
                if(!w.isGo25 && age>15 &&age<60){
                    w.isShowR24 = true;
                    w.R24check = false;
                }
                w.R23input = '是';
            }
        }else{
            if(age>16){
                w.R23check = false;
            }
            if(!w.isGo25 && age>15 &&age<60){
                w.isShowR24 = true;
            }
            back24()
        }
    }
    isOkSub()
});
//R24check
w.$watch('endowmentInsuranceSubsidy',function(n,o){
    if(w.isShowR24){
        if(n!=''){
            w.R24check = true;
            if(n == 2){
                w.R24input = '否';
            }else{
                w.R24input = '是';
            }
        }else{
            w.R24check = false;
            back24()
        }
    }
    isOkSub()
});
//R25check
function back26(){
    w.R26input = '';
    w.medicalInsuranceSubsidy = '';
    radioLiIsC(w.trueFalseA26)
}
w.$watch('medicalInsurance',function(n,o){
    if(n!=''){
        w.R25check = true;
        if(n == 2){
            w.isShowR26 = false;
            w.R25input = '否';
            w.R26check = true;
            back26()
        }else{
            w.isShowR26 = true;
            w.R25input = '是';
            w.R26check = false;
        }
    }else{
        w.R25check = false;
        w.isShowR26 = true;
        back26()
    }
    isOkSub()
});
//R26check
w.$watch('medicalInsuranceSubsidy',function(n,o){
    if(w.isShowR26){
        if(n!=''){
            w.R26check = true;
            if(n == 2){
                w.R26input = '否';
//              w.socialAssistanceThree = '';
//              w.socialAssistanceA[2].isC = false;
                w.socialAssistanceA[5].isIf = true;
//              w.R27input = '';
//              $('#socialAssistance').val('');
                changeTh($('#socialAssistance'))
            }else{
                w.R26input = '是';
                w.socialAssistanceThree = 3;
                w.socialAssistanceA[2].isC = true;
                w.socialAssistanceA[5].isIf = false;
            }
        }else{
            w.R26check = false;
            back26()
        }
    }

    isOkSub()
});
//R27check
function chR27(){
    if(w.socialAssistanceOne!=0 || w.socialAssistanceTwo!=0 || w.socialAssistanceThree!=0 || w.socialAssistanceFour!=0 || w.socialAssistanceFive!=0 || w.socialAssistanceSix!=0){
        w.R27check = true
    }else{
        w.R27check = false
    }
    var str = '';
    if(w.socialAssistanceSix == 6){
        str = socialAssistanceA[5].name;
    }else{
        if(w.socialAssistanceOne == 1){
            var so1 = '';
            if(w.rural && w.rural!=0){
                so1 = '('+getStrType(w.rural, w.soA1Farmer)+')'
            }
            if(w.town && w.town!=0){
                so1 = '('+getStrType(w.town, w.soA1UnFarmer)+')'
            }
            if(socialAssistanceA[0].name){
        		str +=socialAssistanceA[0].name+so1+'、';
        	}
            
        }
        if(w.socialAssistanceTwo == 2){
        	if(socialAssistanceA[1].name){
        		str +=socialAssistanceA[1].name+'、';
        	}
            
        }
        if(w.socialAssistanceThree == 3){
        	if(socialAssistanceA[2].name){
        		 str +=socialAssistanceA[2].name+'、';
        	}
           
        }
        if(w.socialAssistanceFour == 4){
            var so4 = '';
            if(w.otherSalvation && w.otherSalvation!=0){
                so4 = '('+getStrType(w.otherSalvation, w.soA4)+')'
            }
            if(so4){
            	 str +='其他救助'+so4+'、';
            }
           
        }
        if(w.socialAssistanceFive== 5){
        	if(socialAssistanceA[4].name){
        		str +=socialAssistanceA[4].name+'、';
        	}
        	
        }
    }
    w.R27input = str;
    $('#socialAssistance').val(str);
    changeTh($('#socialAssistance'));
}
function cR27Sub(){
    chR27();
    isOkSub()
}
function chR27one(){
    w.socialAssistanceOne = 1;
    w.socialAssistanceA[0].isC = true;
}
function dischR27one(){
    w.socialAssistanceOne = 0;
    w.socialAssistanceA[0].isC = false;
}
w.$watch('rural',function(n,o){
    if(n && n!=0){
        chR27one()
    }else{
        dischR27one()
    }
    cR27Sub()
});
w.$watch('town',function(n,o){
    if(n && n!=0){
        chR27one()
    }else{
        dischR27one()
    }
    cR27Sub()
});
w.$watch('otherSalvation',function(n,o){
    if(n){
        w.socialAssistanceFour = 4;
        w.socialAssistanceA[3].isC = true;
    }else{
        w.socialAssistanceFour = 0;
        w.socialAssistanceA[3].isC = false;
    }
    cR27Sub()
});
w.$watch('socialAssistanceOne',function(n,o){
    cR27Sub()
});
w.$watch('socialAssistanceTwo',function(n,o){
    cR27Sub()
});
w.$watch('socialAssistanceThree',function(n,o){
    cR27Sub()
});
w.$watch('socialAssistanceFour',function(n,o){
    cR27Sub()
});
w.$watch('socialAssistanceFive',function(n,o){
    cR27Sub()
});
w.$watch('socialAssistanceSix',function(n,o){
    cR27Sub()
});
//R28check
function chR28(){
    if(w.socialWelfareutiSubsidyOne!=0 || w.socialWelfareutiSubsidyTwo!=0 || w.socialWelfareutiSubsidyThree!=0 || w.socialWelfareutiSubsidyFour!=0){
        w.R28check = true
    }else{
        w.R28check = false
    }
    var cA = [];
    $.each(w.socialWelfareutiSubsidyA,function(i,v){
        var str = '';
        if(v.isC){
            str = v.name;
            if(v.id == 3){
                if(w.otherSubsidies && w.otherSubsidies!=0){
                    str ='其他福利补贴('+getStrType(w.otherSubsidies, w.syA3)+')'
                }
            }
            	cA.push(str);
        }
    });
    w.R28input = cA.join('、');
    $('#socialWelfareutiSubsidy').val(cA.join('、'));
    changeTh($('#socialWelfareutiSubsidy'))
}
function cR28Sub(){

    chR28();
    isOkSub()
}
w.$watch('otherSubsidies',function(n,o){
    if(n){
        w.socialWelfareutiSubsidyThree = 3;
        w.socialWelfareutiSubsidyA[2].isC = true;
    }else{
        w.socialWelfareutiSubsidyThree = 0;
        w.socialWelfareutiSubsidyA[2].isC = false;
    }
    chR28()
});
w.$watch('socialWelfareutiSubsidyOne',function(n,o){
    cR28Sub()
});
w.$watch('socialWelfareutiSubsidyTwo',function(n,o){
    cR28Sub()
});
w.$watch('socialWelfareutiSubsidyThree',function(n,o){
    cR28Sub()
});
w.$watch('socialWelfareutiSubsidyFour',function(n,o){
    if(n == 4){
        if(w.socialAssistanceTwo == 2 || w.socialAssistanceOne == 1){
            w.socialWelfareutiSubsidyFour = 0;
            w.socialWelfareutiSubsidyA[3].isC = false;
        }
    }
    cR28Sub()
});



//R29check
function getR29input(){
    var str = '';
    if(w.supportService && w.supportService!=0){
        if(w.supportService == 1){
            var str1 = '';
            if(w.supportServiceType && w.supportServiceType!=0){
                str1 = '('+getStrType(w.supportServiceType, w.supportServiceTypeA)+')'
            }
            str = '是'+str1;
        }
        if(w.supportService == 2){
            str = '否'
        }
    }else{
        str = '';
    }
    w.R29input = str;
}
w.$watch('supportService',function(n,o){
    var str = '';
    if(n){
        w.R29check = true;
        if(n == 1){
            w.isShowR30 = false;
            w.R30check = true;
            w.supportServiceNeeds = '';
            radioLiIsC(w.supportServiceNeedsA);
        }
        if(n == 2 && w.isShowR29){
            w.isShowR30 = true;
            w.R30check = false;
            w.supportServiceType = '';
        }
    }else{
        w.R29check = false;
    }
    getR29input();
    isOkSub();
});
w.$watch('supportServiceType',function(n,o){
    if(n){
        w.trueFalseA29[0].isC = true;
        w.supportService = 1;
    }else{
        w.trueFalseA29[0].isC = false;
    }
});
//R30check
w.$watch('supportServiceNeeds',function(n,o){
    if(n){
        w.R30check = true;
        w.R30input = w.supportServiceNeedsA[n-1].name
    }else{
        w.R30check = false;
        w.R30input = '';
    }
    isOkSub();
});


//点击提交
$('.fix-btn').on('click',function(){
		if(!socialAssistanceA[4]){
		w.socialAssistanceFive = '';
	}
	if(!socialAssistanceA[0]){
		w.socialAssistanceOne = '';
	}
	
    if(!w.isSub) return $.toast('填写不完整！');
    var send = {
        id: w.id,
        personalId: w.personalId,
        endowmentInsurance: w.endowmentInsurance || '',//是否参加城乡居民养老保险
        endowmentInsuranceSubsidy:w.endowmentInsuranceSubsidy || '',//是否享受城乡居民养老保险缴费补贴
        medicalInsurance:w.medicalInsurance || '',//是否参加医疗保险
        medicalInsuranceSubsidy:w.medicalInsuranceSubsidy || '',//是否享受医疗保险缴费补贴
        supportService:w.supportService || '',//是否享受托养服务
        supportServiceNeeds:w.supportServiceNeeds || 0,//是否享受托养服务
        securityOfSubsistenceOne:w.securityOfSubsistenceOne || 0,//是否参加职工社会保险1
        securityOfSubsistenceTwo:w.securityOfSubsistenceTwo || 0,//是否参加职工社会保险2
        securityOfSubsistenceThree:w.securityOfSubsistenceThree || 0,//是否参加职工社会保险3
        securityOfSubsistenceFour:w.securityOfSubsistenceFour || 0,//是否参加职工社会保险4
        socialAssistanceOne:w.socialAssistanceOne || 0,//动态更新年度内社会救助及住房改善情况-1
        socialAssistanceTwo:w.socialAssistanceTwo || 0,//动态更新年度内社会救助及住房改善情况-1
        socialAssistanceThree:w.socialAssistanceThree || 0,//动态更新年度内社会救助及住房改善情况-1
        socialAssistanceFour:w.socialAssistanceFour || 0,//动态更新年度内社会救助及住房改善情况-1
        socialAssistanceFive:w.socialAssistanceFive || 0,//动态更新年度内社会救助及住房改善情况-1
        socialAssistanceSix:w.socialAssistanceSix || 0,//动态更新年度内社会救助及住房改善情况-1
        socialWelfareutiSubsidyOne:w.socialWelfareutiSubsidyOne || 0,//动态更新年度类社会福利补贴情况-1
        socialWelfareutiSubsidyTwo:w.socialWelfareutiSubsidyTwo || 0,//动态更新年度类社会福利补贴情况-1
        socialWelfareutiSubsidyThree:w.socialWelfareutiSubsidyThree || 0,//动态更新年度类社会福利补贴情况-1
        socialWelfareutiSubsidyFour:w.socialWelfareutiSubsidyFour || 0,//动态更新年度类社会福利补贴情况-1
        town:w.town || '',//城镇
        rural:w.rural || '',//农村
        otherSalvation:w.otherSalvation || '',//其他救助
        otherSubsidies:w.otherSubsidies || '',//其他补贴
        supportServiceType:w.supportServiceType || ''//托养服务类型
    };

    var obj = {
        name:'list4',
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
    window.location.href='write5.html?age='+ age+'&R14val='+ R14val+'&noSchoolCausation='+ noSchoolCausation+'&residenceType='+ residenceType+'&isWelfareHouse='+ isWelfareHouse+'&from=5&disabilityCard='+disabilityCard+'&townFamilyIncome='+townFamilyIncome;
}


//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});


