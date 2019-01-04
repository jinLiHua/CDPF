var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');//证号
var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
// var changeR16 = getParam('changeR16');//1:R16否
var noSchoolCausation = getParam('noSchoolCausation');//R15---G11
var R14val = getParam('R14val');//R14---G10
var isFarmer = false;
if(residenceType == 1){
    isFarmer = true;
}
var dataG = {
    isSub:true,
    id:'',
    isFarmer:isFarmer,
    disabilityCard:disabilityCard,
    ageNum:age,
    featureA:featureA,
    featureA1:featureA1,
    featureA2:featureA2,
    featureA3:featureA3,
    featureA4:featureA4,
    featureA5:featureA5,
    featureA6:featureA6,
    //残疾人特征
    showF1:false,
    showF2:false,
    showF3:false,
    showF4:false,
    showF5:false,
    showF6:false,
    ifG1p:false,
    nation:'',
    ifG2p:false,
    G2:true,
    politicalStatus:'',
    ifG3p:false,
    familyPopulation:'',
    ifG4p:false,
    ress:'',
    ifG5p:false,
    G5:true,
    leftBehindChildren:'',
    ifG6p:false,
    feaPop:false,
    disabilityGrade:'',
    disabilityType:'',
    featureOne:'',
    featureTwo:'',
    featureThree:'',
    featureFour:'',
    featureFive:'',
    featureSix:'',
    ifG7p:false,
    houseNeed: 0,//目前住房需求
    ifG8p:false,
    countryHouseNeed: 0,//农村住房需求
    ifG9p:false,
    incomePerHead:'',//上年度人均可支配收入
    ifG10p:false,
    scholarship:'',//动态更新年度内是否享受过助学金
    ifG11p:false,
    educationalNeeds: 0,//教育需求
    ifG12p:false,
    professionalCertificate: '',//是否获得职业资格证书
    ifG13p:false,
    professionalCertificateType: 0,//职业资格证书类型
    showG13:false,
    isShowG13:false,
    isDrive:false,
    G13A:[],
    G13AName:[],
    professionalCertificateTypeA:professionalCertificateTypeA,
    driveTypeA:driveTypeA,
    driveType: '',//驾驶证类型
    ifG14p:false,
    businessType:'',//创办实体情况
    businessTypeA:businessTypeA,
    showG14:false,
    ifG15p:false,
    socialSecurityNeed: '',//目前有哪些社会保障需求
    showG15:false,
    G15input:'',
    socialSecurityNeedA:socialSecurityNeedA,
    G15A : [],
    G15NameA : [],
    isSG16:true,
    disabledChildRecure: '',//残疾儿童康复项目救助
    ifG16p:false,
    showG16:false,
    disabledChildRecureA:disabledChildRecureA,
    G16A:[],
    G16NameA:[],
    G16input:'',
    ifG17p:false,
    getLegalService:'',//动态更新年度内是否获得过法律服务
    ifG18p:false,
    legalServiceNeeds: '',//目前你有哪些法律服务需求
    legalServiceNeedsA:legalServiceNeedsA,
    G18A:[],
    G18NameA:[],
    G18input:'',
    showG18:false,
    ifG19p:false,
    G19A:G19A,
    cultureA:cultureA,
    cultureA2:cultureA2,
    cultureA6:cultureA6,
    culture: '',//文化
    sports:'',//体育
    sportsA:sportsA,
    G19A1:[],
    G19A12:[],
    isSG191:false,
    isSG192:false,
    G19check:false,
    G19input:'',
    G19As:[],
    G19AsName:[],
    G19Ac:[],
    G19AcName:[],
    literatureA:[],
    boondoggleA:[],
    literature:'',//文艺
    boondoggle:'',//手工品制作
    height:'',//身高
    showG19:false,
    cultureSportsNeedsA:cultureSportsNeedsA,
    ifG20p:false,
    cultureSportsNeeds:'',//目前文体需求
    G20input:'',
    showG20:false,
    G20A:[],
    G20AName:[],
    //redpoint
    ifHeightp:false,
    isG11Show:false,
    isG10Show:false

};
if(noSchoolCausation !=0){
	dataG.isG11Show = true
}else{
	dataG.isG11Show = false
}
if(R14val == 1){
	dataG.isG10Show = true
}else{
	dataG.isG10Show = false
}
	

var w = new Vue({
    el: '#writeG',
    data: dataG,
    methods:{
        openShowG20:function(){
            this.showG20 = true;
        },
        closeShowG20:function(num){
            this.showG20 = false;
        },
        choG20:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,num=arr.num;
            ts.G20AName = [];
            ts.G20A = [];
            ts.cultureSportsNeedsA[5].isC = false;
            if(id == 6){
                radioLi(dom);
                radioLiIsC(ts.cultureSportsNeedsA)
            }else{
                checkLi(dom)
            }
            if(hC(dom)){
                arr.isC = true
            }else{
                arr.isC = false
            }
            $.each(ts.cultureSportsNeedsA,function(i,v){
                if(v.isC){
                    ts.G20A.push(v.id);
                    ts.G20AName.push(v.name);
                }
            })
        },
        openShowG19:function(){
            this.showG19 = true;
        },
        closeShowG19:function(num){
            this.showG19 = false;
        },
        choG19:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            ts.isSG191 = true;
            ts.isSG192 = false;
            if(id == 1){
                ts.G19A1 = ts.cultureA
            }else{
                ts.G19A1 = ts.sportsA
            }
        },
        choG191:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,num=arr.num;
            ts.isSG192 = false;
            if(num == 1){
                ts.G19Ac = [];
                ts.G19AcName = [];
            }else{
                ts.G19As = [];
                ts.G19AsName = [];
            }
            if(num == 1){
                ts.G19A1[7].isC = false;
                if(id == 2 || id == 6){
                    ts.isSG192 = true;
                    if(id == 2){
                        ts.G19A12 = ts.cultureA2
                    }else{
                        ts.G19A12 = ts.cultureA6
                    }
                }else{
                    if(id == 8){
                        radioLi(dom);
                        radioLiIsC(ts.G19A1);
                        radioLiIsC(ts.cultureA2);
                        radioLiIsC(ts.cultureA6);
                    }else{
                        checkLi(dom);
                    }
                }
            }else{
                ts.G19A1[8].isC = false;
                if(id == 9){
                    radioLi(dom);
                    radioLiIsC(ts.G19A1);
                }else{
                    checkLi(dom);
                }
            }
            if(hC(dom)){
                arr.isC = true
            }else{
                arr.isC = false;
            }
            $.each(ts.G19A1,function(i,v){
                if(v.isC){
                    if(num == 1){
                        ts.G19Ac.push(v.id);
                        ts.G19AcName.push(v.name);
                    }else{
                        ts.G19As.push(v.id);
                        ts.G19AsName.push(v.name);
                    }

                }
            });
            if(num == 2){
                ts.sports = ts.G19As.join(',')
            }
            getCSStr();
        },
        choG192:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,num=arr.num;
            checkLi(dom);
            if(hC(dom)){
                arr.isC = true
            }else{
                arr.isC = false
            }
            ts.literatureA = [];
            ts.boondoggleA = [];
            $.each(ts.G19A12,function(i,v){
                if(v.isC){
                    if(num == 2){
                        ts.literatureA.push(v.id)
                    }else{
                        ts.boondoggleA.push(v.id)
                    }
                }
            });
            if(num == 2){
                ts.literature = ts.literatureA.join(',')
            }else{
                ts.boondoggle = ts.boondoggleA.join(',')
            }
        },
        openShowG18:function(){
            this.showG18 = true;
        },
        closeShowG18:function(num){
            this.showG18 = false;
        },
        choG18:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, num = arr.num;
            ts.legalServiceNeedsA[5].isC = false;
            ts.G18A = [];
            ts.G18NameA = [];
            if(id == 6){
                radioLi(dom);
                radioLiIsC(ts.legalServiceNeedsA);
                w.legalServiceNeeds = '';
                if(hC(dom)){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
            }else{
                checkLi(dom);
                if(hC(dom)){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
            }
            $.each(ts.legalServiceNeedsA,function(i,v){
                if(v.isC){
                    ts.G18A.push(v.id);
                    ts.G18NameA.push(v.name);
                }
            })
        },
        openShowG16: function () {
            this.showG16 = true;
        },
        closeShowG16: function (num) {
            this.showG16 = false;
        },
        choG16:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, num = arr.num;
            checkLi(dom);
            ts.G16A = [];
            ts.G16NameA = [];
            if(hC(dom)){
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            $('.G16-li').each(function(i,v){
                if(hC($(v))){
                    ts.G16A.push($(v).attr('data-id'));
                    ts.G16NameA.push($(v).text())
                }
            })
        },
        openShowG15:function(){
            this.showG15 = true;
        },
        closeShowG15:function(num){
            this.showG15 = false;
        },
        choG15:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,name=arr.name;
            ts.socialSecurityNeedA[8].isC = false;
            if(id == 9){
                radioLi(dom);
                radioLiIsC(ts.socialSecurityNeedA);
                if(hC(dom)){
                    arr.isC = true;
                    ts.socialSecurityNeed = id;
                }else{
                    arr.isC = false;
                }
            }else{
                checkLi(dom);
                if(hC(dom)){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
            }
            ts.G15A = [];
            ts.G15NameA = [];
            $.each(ts.socialSecurityNeedA,function(i,v){
                if(v.isC){
                    ts.G15A.push(v.id);
                    ts.G15NameA.push(v.name);
                }
            })
        },
        openShowG14:function(){
            this.showG14 = true;
        },
        closeShowG14:function(num){
            this.showG14 = false;
        },
        choG14:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id,str = '';
            if(id == 7){
                radioLi(dom);
                radioLiIsC(ts.businessTypeA);
                if($(dom).hasClass('ac')){
                    arr.isC = true;
                }
                ts.businessType = id;
                str = arr.name;
            }else{
                checkLi(dom);
                ts.businessTypeA[6].isC = false;
                if(dom.hasClass('ac')){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                var busT = [],busText = [];
                $.each(ts.businessTypeA,function(i,v){
                    if(v.isC){
                        busT.push(v.id);
                        busText.push(v.name);
                    }
                });
                ts.businessType = busT.join(',');
                str = busText.join(',');
            }
            $('#businessType').val(str);
            changeTh($('#businessType'));
        },
        openShowG13:function(){
            this.showG13 = true;
        },
        closeShowG13:function(num){
            var ts = this;
            ts.showG13 = false;
            ts.isDrive = false;
        },
        choG13:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            if(id != 9){
                checkLi(dom);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                ts.isDrive = false;
            }else{
                ts.isDrive = true;
            }

            ts.G13A = [];
            ts.G13AName = [];
            $('.showG13-li').each(function(i,v){
                if($(v).hasClass('ac')){
                    var id = $(v).attr('data-id'),
                        text = $(v).text(),
                        isPush = true;
                    if(id == 9 && ts.quotaSchemeEmployment == ''){
                        isPush = false;
                    }
                    if(isPush){
                        ts.G13A.push(id);
                        ts.G13AName.push(text);
                    }
                }
            });
        },
        choG139:function(arr,event){
            var ts = this,dom = $(event.target),id = arr.id;
            checkLi(dom);
            if(dom.hasClass('ac')){
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            var pdA = [];
            $('.showG139-li').each(function(i,v){
                if($(v).hasClass('ac')){
                    var id = $(v).attr('data-id');
                    pdA.push(id);
                }
            });
            ts.driveType = pdA.join(',');
        },
        openFea:function(){
            this.feaPop = true;
        },
        closeFea:function(num){
            this.feaPop = false;
        },
        feaFun:function(num){
            if(num == 1){
                this.showF1 = true;
            }else{
                this.showF1 = false
            }
            if(num == 2){
                this.showF2 = true
            }else{
                this.showF2 = false
            }
            if(num == 3){
                this.showF3 = true
            }else{
                this.showF3 = false
            }
            if(num == 4){
                this.showF4 = true
            }else{
                this.showF4 = false
            }
            if(num == 5){
                this.showF5 = true
            }else{
                this.showF5 = false
            }
            if(num == 6){
                this.showF6 = true
            }else{
                this.showF6 = false
            }
        },
        feaFunC:function(arr,num,event){
            var ts = this;
            var dom = $(event.target);
            if(num == 1){
                radioLi(dom);
                radioLiIsC(ts.featureA1);
                if(dom.hasClass('ac')){
                    ts.featureOne = arr.id;
                    arr.isC = true;
                }else{
                    ts.featureOne = '';
                }
            }
            if(num == 2){
                radioLi(dom);
                radioLiIsC(ts.featureA2);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                    ts.featureTwo = arr.id;
                }else{
                    ts.featureTwo = '';
                }
            }
            if(num == 3){
                radioLi(dom);
                radioLiIsC(ts.featureA3);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                    ts.featureThree = arr.id;
                }else{
                    ts.featureThree = '';
                }
            }
            if(num == 4){
                checkLi(dom);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                var four = [];
                $('.showF4-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        four.push($(v).attr('data-id'));
                    }
                });
                ts.featureFour = four.join(',');
            }
            if(num == 5){
                checkLi(dom);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                var five = [];
                $('.showF5-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        five.push($(v).attr('data-id'));
                    }
                });
                ts.featureFive = five.join(',');
            }
            if(num == 6){
                checkLi(dom);
                if(dom.hasClass('ac')){
                    arr.isC = true;
                }else{
                    arr.isC = false;
                }
                var six = [];
                $('.showF6-li').each(function(i,v){
                    if($(v).hasClass('ac')){
                        six.push($(v).attr('data-id'));
                    }
                });
                ts.featureSix = six.join(',');
            }
        },
        getBackInfo:function(){
            var send = {
                name:'list7',
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
            
            if(isModify){
                //数据比较
                ts.ifG1p = getModify(info.nation,oldInfo.nation);
                ts.ifG2p = getModify(info.politicalStatus,oldInfo.politicalStatus);
                ts.ifG3p = getModify(info.familyPopulation,oldInfo.familyPopulation);
                ts.ifG5p = getModify(info.leftBehindChildren,oldInfo.leftBehindChildren);
                ts.ifG4p = getModify(info.address,oldInfo.address) ;
                ts.ifG6p = getModify(info.featureOne,oldInfo.featureOne)
                    ||getModify(info.featureTwo,oldInfo.featureTwo)
                    ||getModify(info.featureThree,oldInfo.featureThree)
                    ||getModify(info.featureFour,oldInfo.featureFour)
                    ||getModify(info.featureFive,oldInfo.featureFive)
                    ||getModify(info.featureSix,oldInfo.featureSix);
                ts.ifG7p = getModify(info.houseNeed,oldInfo.houseNeed);
                ts.ifG8p = getModify(info.countryHouseNeed,oldInfo.countryHouseNeed);
                ts.ifG9p = getModify(info.incomePerHead,oldInfo.incomePerHead);
                ts.ifG10p = getModify(info.scholarship,oldInfo.scholarship);
                ts.ifG11p = getModify(info.educationalNeeds,oldInfo.educationalNeeds);
                ts.ifG12p = getModify(info.professionalCertificate,oldInfo.professionalCertificate);
                ts.ifG13p = getModify(info.professionalCertificateType,oldInfo.professionalCertificateType);
                ts.ifG14p = getModify(info.businessType,oldInfo.businessType);
                ts.ifG15p = getModify(info.socialSecurityNeed,oldInfo.socialSecurityNeed);
                ts.ifG17p = getModify(info.getLegalService,oldInfo.getLegalService);
                ts.ifG18p = getModify(info.legalServiceNeeds,oldInfo.legalServiceNeeds);
                ts.ifG19p = getModify(info.culture,oldInfo.culture) || getModify(info.sports,oldInfo.sports) ||  getModify(info.literature,oldInfo.literature) ||  getModify(info.boondoggle,oldInfo.boondoggle);
                ts.ifHeightp = getModify(info.height,oldInfo.height);
                ts.ifG20p = getModify(info.cultureSportsNeeds,oldInfo.cultureSportsNeeds);

            }
            ts.nation = info.nation;//民族0
            var G1Str = info.nation ? nationA[nationNumA.indexOf(info.nation)] : '';
            $('#nation').val(G1Str);
            ts.politicalStatus = info.politicalStatus;//政治面貌0
            var G2Str = info.politicalStatus ? politicalStatusA[info.politicalStatus-1] : '';
            $('#politicalStatus').val(G2Str);
            ts.familyPopulation = info.familyPopulation;//家庭人口0
            ts.ress = info.address;//家庭常住地址
            ts.leftBehindChildren = info.leftBehindChildren;//是否留守儿童0
            var G5Str = info.leftBehindChildren ? trueFalseA[info.leftBehindChildren-1] : '';
            $('#leftBehindChildren').val(G5Str);
            if(info.disabilityType && info.disabilityType != 7){
                var s1 = false,s2 = false,s3 = false,s4 = false,s5 = false,s6 = false;
                if(info.disabilityType == 1){
                    s1 = true;
                }
                if(info.disabilityType == 2){
                    s2 = true;
                }
                if(info.disabilityType == 3){
                    s3 = true;
                }
                if(info.disabilityType == 4){
                    s4 = true;
                }
                if(info.disabilityType == 5){
                    s5 = true;
                }
                if(info.disabilityType == 6){
                    s6 = true;
                }
                if(!s1){
                    ts.featureA[0].isF = false;
                    $.each(ts.featureA1,function(i,v){
                        v.isC = false;
                    })
                }
                if(!s2){
                    ts.featureA[1].isF = false;
                    $.each(ts.featureA2,function(i,v){
                        v.isC = false;
                    })
                }
                if(!s3){
                    ts.featureA[2].isF = false;
                    $.each(ts.featureA3,function(i,v){
                        v.isC = false;
                    })
                }
                if(!s4){
                    ts.featureA[3].isF = false;
                    $.each(ts.featureA4,function(i,v){
                        v.isC = false;
                    })
                }
                if(!s5){
                    ts.featureA[4].isF = false;
                    $.each(ts.featureA5,function(i,v){
                        v.isC = false;
                    })
                }
                if(!s6){
                    ts.featureA[5].isF = false;
                    $.each(ts.featureA6,function(i,v){
                        v.isC = false;
                    })
                }
            }
            ts.disabilityGrade = info.disabilityGrade;//残疾等级0
            ts.disabilityType = info.disabilityType;//残疾类型0
            ts.featureOne = info.featureOne;//残疾特征10
            if(ts.featureOne && ts.featureOne!=0){
                ts.featureA[0].isC = true;
                ts.featureA1 = getBackIsC(ts.featureOne,featureA1);
            }
            ts.featureTwo = info.featureTwo;//残疾特征20
            if(ts.featureTwo && ts.featureTwo!=0){
                ts.featureA[1].isC = true;
                ts.featureA2 = getBackIsC(ts.featureTwo,featureA2);
            }
            ts.featureThree = info.featureThree;//残疾特征30
            if(ts.featureThree && ts.featureThree!=0){
                ts.featureA[2].isC = true;
                ts.featureA3 = getBackIsC(ts.featureThree,featureA3);
            }
            ts.featureFour = info.featureFour;//残疾特征4
            if(ts.featureFour && ts.featureFour!=0){
                ts.featureA[3].isC = true;
                ts.featureA4 = getBackIsC(ts.featureFour,featureA4);
            }
            ts.featureFive = info.featureFive;//残疾特征5
            if(ts.featureFive && ts.featureFive!=0){
                ts.featureA[4].isC = true;
                ts.featureA5 = getBackIsC(ts.featureFive,featureA5);
            }
            ts.featureSix = info.featureSix;//残疾特征6
            if(ts.featureSix && ts.featureSix!=0){
                ts.featureA[5].isC = true;
                ts.featureA6 = getBackIsC(ts.featureSix,featureA6);
            }
            hasFea();
            if(!isFarmer){
                ts.houseNeed = info.houseNeed;//目前住房需求
                var G7Str = info.houseNeed ? houseNeedA[info.houseNeed-1] : '';
                $('#houseNeed').val(G7Str);
            }else{
                ts.countryHouseNeed = info.countryHouseNeed;//农村住房需求
                var G8Str = info.countryHouseNeed ? countryHouseNeedA[info.countryHouseNeed-1] : '';
                $('#countryHouseNeed').val(G8Str);
            }
            ts.id = info.id;
            ts.incomePerHead = info.incomePerHead;//上年度人均可支配收入
            ts.scholarship = info.scholarship ? info.scholarship : '';//动态更新年度内是否享受过助学金
            var G10Str = info.scholarship ? trueFalseA[info.scholarship-1] : '';
            $('#scholarship').val(G10Str);
            ts.educationalNeeds = info.educationalNeeds;//教育需求
            var G11Str = info.educationalNeeds ? educationalNeedsA[info.educationalNeeds-1] : '';
            $('#educationalNeeds').val(G11Str);
            ts.professionalCertificate = info.professionalCertificate;//是否获得职业资格证书
            var G12Str = info.professionalCertificate ? trueFalseA[info.professionalCertificate-1] : '';
            $('#professionalCertificate').val(G12Str);
            if(info.professionalCertificate == 1){
                ts.professionalCertificateType =  info.professionalCertificateType || 0;//职业资格证书类型
                ts.professionalCertificateTypeA = getBackIsC(info.professionalCertificateType,professionalCertificateTypeA);
                ts.G13A = [];
                ts.G13AName = [];
                $.each(ts.professionalCertificateTypeA,function(i,v){
                    if(v.isC){
                        ts.G13A.push(v.id);
                        ts.G13AName.push(v.name);
                    }
                });
                ts.driveType = info.driveType;//驾驶证类型
                ts.driveTypeA = getBackIsC(info.driveType,driveTypeA);
                ts.businessType = info.businessType && info.businessType!=0 ? info.businessType:'';//创办实体情况
                ts.businessTypeA = getBackIsC(info.businessType,businessTypeA);
                var cA = [];
                $.each(ts.businessTypeA,function(i,v){
                    if(v.isC){
                        cA.push(v.name);
                    }
                });
                $('#businessType').val(cA.join(','));
                changeTh($('#businessType'));
            };
            /*if(changeR16 == 1){
                $('#businessType').val('');
                changeTh($('#businessType'));
                radioLiIsC(w.businessTypeA);
            }*/
            ts.socialSecurityNeed = info.socialSecurityNeed;//目前有哪些社会保障需求
            ts.socialSecurityNeedA = (info.socialSecurityNeed && info.socialSecurityNeed!=0)? getBackIsC(ts.socialSecurityNeed,socialSecurityNeedA) : socialSecurityNeedA;
            ts.G15A = [];
            ts.G15NameA = [];
            $.each(ts.socialSecurityNeedA,function(i,v){
                if(v.isC){
                    ts.G15A.push(v.id);
                    ts.G15NameA.push(v.name);
                }
            });
            if(ts.isSG16){
                ts.disabledChildRecure=info.disabledChildRecure;//残疾儿童康复项目救助
                ts.disabledChildRecureA = getBackIsC(info.disabledChildRecure,disabledChildRecureA);
                ts.G16A = [];
                ts.G16NameA = [];
                $.each(ts.disabledChildRecureA,function(i,v){
                    if(v.isC){
                        ts.G16A.push(v.id);
                        ts.G16NameA.push(v.name)
                    }
                });
            }
            ts.getLegalService = info.getLegalService && info.getLegalService!=0?info.getLegalService:'';//动态更新年度内是否获得过法律服务
            var G17Str = info.getLegalService ? trueFalseA[info.getLegalService-1] : '';
            $('#getLegalService').val(G17Str);
            ts.legalServiceNeeds = info.legalServiceNeeds;//目前你有哪些法律服务需求
            if(info.legalServiceNeeds){
                ts.legalServiceNeedsA = getBackIsC(info.legalServiceNeeds,legalServiceNeedsA)
            }
            ts.G18A = [];
            ts.G18NameA = [];
            $.each(ts.legalServiceNeedsA,function(i,v){
                if(v.isC){
                    ts.G18A.push(v.id);
                    ts.G18NameA.push(v.name);
                }
            });
            ts.culture = info.culture;//文化
            if(info.culture){
                ts.G19A[0].isC = true;
            }
            ts.cultureA = getBackIsC(info.culture,cultureA);
            ts.sports = info.sports;//体育
            if(info.sports){
                ts.G19A[1].isC = true;
            }
            ts.sportsA = getBackIsC(info.sports,ts.sportsA);
            ts.G19As = [];
            ts.G19AsName = [];
            $.each(ts.sportsA,function(i,v){
                if(v.isC){
                    ts.G19As.push(v.id);
                    ts.G19AsName.push(v.name);
                }
            });
            ts.G19Ac = [];
            ts.G19AcName = [];
            $.each(ts.cultureA,function(i,v){
                if(v.isC){
                    ts.G19Ac.push(v.id);
                    ts.G19AcName.push(v.name);
                }
            });
            ts.height = info.height;//身高
            ts.literature = info.literature ?info.literature : '';//文艺
            if(info.literature){
                ts.cultureA2 = getBackIsC(info.literature,cultureA2)
            }
            ts.boondoggle = info.boondoggle ?info.boondoggle : '';//手工品制作
            if(info.boondoggle){
                ts.cultureA6 = getBackIsC(info.boondoggle,cultureA6)
            }
            ts.cultureSportsNeeds = info.cultureSportsNeeds;//目前文体需求
            ts.cultureSportsNeedsA = getBackIsC(info.cultureSportsNeeds,ts.cultureSportsNeedsA);
            ts.G20A = [];
            ts.G20AName = [];
            $.each(ts.cultureSportsNeedsA,function(i,v){
                if(v.isC){
                    ts.G20A.push(v.id);
                    ts.G20AName.push(v.name);
                }
            });
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            appInit();
            if(this.disabilityCard.length == 20){
                this.disabilityGrade = this.disabilityCard.substring(19,20);
                this.disabilityType = this.disabilityCard.substring(18,19);
                $.each(this.featureA,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA1,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA2,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA3,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA4,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA5,function(i,v){
                    v.isC = false;
                });
                $.each(this.featureA6,function(i,v){
                    v.isC = false;
                });
                this.featureOne = 0;
                this.featureTwo = 0;
                this.featureThree = 0;
                this.featureFour = 0;
                this.featureFive = 0;
                this.featureSix = 0;
                if(this.disabilityType != 7){
                    $.each(this.featureA,function(i,v){
                        v.isF = false;
                    });
                    this.featureA[this.disabilityType-1].isF = true;
                }else{
                    $.each(this.featureA,function(i,v){
                        v.isF = true;
                    });
                }
            }else if(this.disabilityCard.length == 18){
                changeType();
            }

            /*if(!isFarmer){
                picker($("#houseNeed"),houseNeedA);//目前住房需求
                $('#houseNeed').on('change',function(){
                    w.houseNeed = houseNeedA.indexOf( $(this).val())+1;
                });
            }else{
                picker($("#countryHouseNeed"),countryHouseNeedA);//目前住房需求
                $('#countryHouseNeed').on('change',function(){
                    w.countryHouseNeed = countryHouseNeedA.indexOf( $(this).val())+1;
                });
            }*/
        })

    },
});
setTimeout(function () {
    w.getBackInfo()
},500)
if(age<14){
    w.G2 = false;
    w.politicalStatus = 0;
    $('#politicalStatus').val('');
}
if(age>16){
    w.G5 = false;
    w.leftBehindChildren = 0;
    $('#leftBehindChildren').val('');
}
if(age>18){
    w.isSG16 = false;
    w.G16check = true;
}else{
    w.isSG16 = true;
    w.G16check = false;
}
//残疾人类别及特征
function changeType(){
    if(disabilityCard.length == 18){
        var arrNew=[],fo,fi,si,on,tw,th;
        if(w.featureOne == '' || w.featureOne == 0){
            on = 0
        }else{
            on = 1
        }
        if(w.featureTwo == '' || w.featureTwo == 0){
            tw = 0
        }else{
            tw = 2
        }
        if(w.featureThree == '' || w.featureThree == 0){
            th = 0
        }else{
            th = 3
        }
        if(w.featureFour == '' || w.featureFour == 0){
            fo = 0
        }else{
            fo = 4
        }
        if(w.featureFive == '' || w.featureFive == 0){
            fi = 0
        }else{
            fi = 5
        }
        if(w.featureSix == '' || w.featureSix == 0){
            si = 0
        }else{
            si = 6
        }
        var arr=[on,tw,th,fo,fi,si];
        $.each(arr,function(i,v){
            if(v!=0){
                arrNew.push(v);
            }
        });
        if(arrNew.length>1){
            w.disabilityType = 7
        }else{
            w.disabilityType = arrNew[0]
        }
    }
}
//残疾人类别及特征
function hasFea(){
    var arr = ['视力','听力','言语','肢体','智力','精神'];
    var G6T = $('#G6Text');
    G6T.val('');
    if(w.featureOne && w.featureOne!=0){
        G6T.val(G6T.val() + arr[0]+'('+ w.featureA1[w.featureOne-1].name+')' +'、')
    }
    if(w.featureTwo && w.featureTwo!=0){
        G6T.val(G6T.val() + arr[1]+'('+ w.featureA2[w.featureTwo-1].name+')' +'、')
    }
    if(w.featureThree && w.featureThree!=0){
        G6T.val(G6T.val() + arr[2]+'('+ w.featureA3[w.featureThree-1].name+')' +'、')
    }
    if(w.featureFour && w.featureFour!=0){
        G6T.val(G6T.val() + arr[3]+'('+ getStrType(w.featureFour, w.featureA4)+')' +'、')
    }
    if(w.featureFive && w.featureFive!=0){
        G6T.val(G6T.val() + arr[4]+'('+ getStrType(w.featureFive, w.featureA5)+')' +'、')
    }
    if(w.featureSix && w.featureSix!=0){
        G6T.val(G6T.val() + arr[5]+'('+ getStrType(w.featureSix, w.featureA6)+')' +'、')
    }
    var a = G6T.val().split('、').join('、');
    console.log(a)
    G6T.val(a);
    changeTh(G6T);
    changeType();
}
//featureOne
w.$watch('featureOne', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(1)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[0].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[0].isC = false;
    }
    hasFea();
});
//featureTwo
w.$watch('featureTwo', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(2)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[1].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[1].isC = false;
    }
    hasFea();
});
//featureThree
w.$watch('featureThree', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(3)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[2].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[2].isC = false;
    }
    hasFea();
});
//featureFour
w.$watch('featureFour', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(4)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[3].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[3].isC = false;
    }
    hasFea();
});
//featureFive
w.$watch('featureFive', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(5)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[4].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[4].isC = false;
    }
    hasFea();
});
//featureSix
w.$watch('featureSix', function (newValue, oldValue) {
    var dom = $('.featureAOut li:nth-child(6)');
    if(newValue && newValue!=0){
        dom.addClass('ac');
        w.featureA[5].isC = true;
    }else{
        dom.removeClass('ac');
        w.featureA[5].isC = false;
    }
    hasFea();
});
//G12
w.$watch('professionalCertificate', function (newValue, oldValue) {
    if(newValue == 2){
        w.isShowG13 = false;
        w.showG13 = false;
        radioLiIsC(w.professionalCertificateTypeA);
        radioLiIsC(w.driveTypeA);
        w.professionalCertificateType = 0;
        w.driveType = '';
    }else{
        w.isShowG13 = true;
    }
});

//G13-G13A
function getG13Str(){
    var str = '',cA = [];
    $.each(w.professionalCertificateTypeA,function(i,v){
        if(v.isC){
            str = v.name;
            if(v.id == 9){
                if(w.driveType && w.driveType!=0){
                    str += '('+getStrType(w.driveType,w.driveTypeA)+')'
                }
            }
            cA.push(str);
        }
    });
    $('#professionalCertificateType').val(cA.join('、'));
    changeTh($('#professionalCertificateType'))
}
w.$watch('G13A', function (newValue, oldValue) {
    if(newValue.length>0){
        w.professionalCertificateType = newValue.join(',');
    }else{
        w.professionalCertificateType = '';
    }
    getG13Str()
});
//G13
w.$watch('professionalCertificateType', function (newValue, oldValue) {
    getG13Str();
});
//G13driveType
w.$watch('driveType', function (newValue, oldValue) {
    if(newValue){
        w.professionalCertificateTypeA[8].isC = true;
        if(w.G13A.indexOf('9') == -1){
            w.G13A.push('9');
            w.G13AName.push('汽车驾驶员');
        }
    }else{
        w.professionalCertificateTypeA[8].isC = false;
        w.G13A.removeByValue('9');
        w.G13AName.removeByValue('汽车驾驶员');
    }
    getG13Str()
});
//G15check
w.$watch('G15A',function(n,o){
    if(n.length>0){
        w.socialSecurityNeed = n.join(',')
    }else{
        w.socialSecurityNeed = '';
    }
});
w.$watch('G15NameA',function(n,o){
    var str = '';
    if(n.length>0){
        str = n.join('、')
    }else{
        str = '';
    }
    w.G15input = str;
    $('#socialSecurityNeed').val(str);
    changeTh($('#socialSecurityNeed'))
});

//G16check
w.$watch('G16A',function(n,o){
    var str = '';
    if(n.length>0){
        w.disabledChildRecure = n.join(',');
        str = w.G16NameA.join('、');
        var ar = str.split('、');
        ar.removeByValue('');
        str = ar.join('、');
    }
    w.G16input = str;
    $('#disabledChildRecure').val(str);
    changeTh($('#disabledChildRecure'))
});
//G18check
w.$watch('G18A',function(n,o){
    var str  = '';
    if(n.length>0){
        w.legalServiceNeeds = n.join(',');
        str = w.G18NameA.join('、');
    }
    var ar = str.split('、');
    ar.removeByValue('');
    str = ar.join('、');
    w.G18input = str;
    $('#legalServiceNeeds').val(str);
    changeTh($('#legalServiceNeeds'))
});
w.$watch('culture',function(n,o){
    if(n){
        w.G19A[0].isC = true;
    }else{
        w.G19A[0].isC = false;
    }
});
w.$watch('sports',function(n,o){
    if(n){
        w.G19A[1].isC = true;
    }else{
        w.G19A[1].isC = false;
    }
});
w.$watch('height',function(n,o){
    if(n){
        if(isNaN(n)){
            w.height = ''
        }
    }
});
function getCSStr(){
    var G19strC = '';
    if(w.G19AcName && w.G19AcName.length>0){
        var cA = [];
        $.each(w.cultureA,function(i,v){
            if(v.isC){
                var strC = v.name;
                if(v.id == 2){
                    if(w.literature && w.literature!=0){
                        strC+='('+getStrType(w.literature, w.cultureA2) +')';
                    }
                }
                if(v.id == 6){
                    if(w.boondoggle && w.boondoggle!=0){
                        strC+='('+getStrType(w.boondoggle, w.cultureA6) +')';
                    }
                }
                cA.push(strC);
            }
        });
        G19strC = '文化：'+cA.join('、')+';'
    }
    var G19strS = '';
    if(w.G19AsName && w.G19AsName.length>0){
        var cS = [];
        $.each(w.sportsA,function(i,v){
            if(v.isC){
                var strC = v.name;
                cS.push(strC);
            }
        });
        G19strS = '体育：'+cS.join('、')+';'
    }
    w.G19input = G19strC+G19strS;
    $('#like').val(G19strC+G19strS);
    changeTh($('#like'));
}
//G19check
w.$watch('literature',function(n,o){
    if(n){
        if(w.G19Ac.indexOf(2) == -1){
            w.G19Ac.push(2);
            w.G19AcName.push('文艺');
        }
        w.cultureA[1].isC = true
    }else{
        w.cultureA[1].isC = false;
        w.G19Ac.splice(w.G19Ac.indexOf(2),1);
        w.G19AcName.splice(w.G19Ac.indexOf('文艺'),1)
    }
    getCSStr()
});
w.$watch('boondoggle',function(n,o){
    if(n){
        if(w.G19Ac.indexOf(6) == -1){
            w.G19Ac.push(6);
            w.G19AcName.push('手工艺品制作');
        }
        w.cultureA[5].isC = true
    }else{
        w.cultureA[5].isC = false;
        w.G19Ac.splice(w.G19Ac.indexOf('6'),1);
        w.G19AcName.splice(w.G19Ac.indexOf('手工艺品制作'),1)
    }
    getCSStr()
});
w.$watch('G19Ac',function(n,o){
    if(n.length>0){
        w.culture = n.join(',')
    }else{
        w.culture = '';
    }
    getCSStr()
});
//G20check
w.$watch('G20A',function(n,o){
    w.cultureSportsNeeds = n.join(',');
    w.G20input = w.G20AName.join('、');
    $('#cultureSportsNeeds').val(w.G20AName.join('、'));
    changeTh($('#cultureSportsNeeds'));
});

picker($("#nation"),nationA);//民族
$('#nation').on('change',function(){
    var num = nationA.indexOf($(this).val());
    w.nation = nationNumA[num];
});

if(w.G2){
    picker($("#politicalStatus"),politicalStatusA);//政治面貌
    $('#politicalStatus').on('change',function(){
        w.politicalStatus= politicalStatusA.indexOf($(this).val())+1;
    });
}

setTimeout(function(){
    if(w.G5){
        picker($("#leftBehindChildren"),trueFalseA);//是否留守儿童
        $('#leftBehindChildren').on('change',function(){
            w.leftBehindChildren= trueFalseA.indexOf($(this).val())+1;
        });
    }
    if(w.isFarmer){
        picker($("#countryHouseNeed"),countryHouseNeedA);//目前住房需求
        $('#countryHouseNeed').on('change',function(){
            w.countryHouseNeed = countryHouseNeedA.indexOf( $(this).val())+1;
        });
    }else{
        picker($("#houseNeed"),houseNeedA);//目前住房需求
        $('#houseNeed').on('change',function(){
            w.houseNeed = houseNeedA.indexOf( $(this).val())+1;
        });
    }
    picker($("#scholarship"),trueFalseA);//助（奖）学金
    $('#scholarship').on('change',function(){
        w.scholarship = trueFalseA.indexOf( $(this).val())+1;
    });
    picker($("#educationalNeeds"),educationalNeedsA);//教育需求
    $('#educationalNeeds').on('change',function(){
        w.educationalNeeds = educationalNeedsA.indexOf( $(this).val())+1;
    });
    picker($("#professionalCertificate"),trueFalseA);//职业资格证书
    $('#professionalCertificate').on('change',function(){
        w.professionalCertificate = trueFalseA.indexOf( $(this).val())+1;
        if(w.professionalCertificate == 2){
            w.showG13 = true;
        }
    });
},0);
picker($('#getLegalService'),trueFalseA);
$('#getLegalService').on('change',function(){
    w.getLegalService = trueFalseA.indexOf( $(this).val())+1;
});
//点击提交
$('.fix-btn').on('click',function(){
	if(w.familyPopulation){
		if(w.familyPopulation%1 == 0){
		
		}else{
			return $.toast('人口必须输入整数！')
		}
	}
	
    if(!w.isSub) return $.toast('填写不完整！');
    var send = {
        id: w.id || '',//行政区划
        nation: w.nation || 0,//民族0
        politicalStatus: w.politicalStatus || 0,//政治面貌0
        familyPopulation: w.familyPopulation || '',//家庭人口0
        address: w.ress || '',//家庭常住地址
        leftBehindChildren: w.leftBehindChildren || 0,//是否留守儿童0
        disabilityGrade: w.disabilityGrade || 0,//残疾等级0
        disabilityType: w.disabilityType || 0,//残疾类型0
        featureOne: w.featureOne || 0,//残疾特征10
        featureTwo: w.featureTwo || 0,//残疾特征20
        featureThree: w.featureThree || 0,//残疾特征30
        featureFour: w.featureFour || 0,//残疾特征4
        featureFive: w.featureFive || 0,//残疾特征5
        featureSix: w.featureSix || 0,//残疾特征6
        houseNeed:w.houseNeed || 0,//目前住房需求
        countryHouseNeed:w.countryHouseNeed || 0,//农村住房需求
        incomePerHead:w.incomePerHead || '',//上年度人均可支配收入
        scholarship:w.scholarship || '',//动态更新年度内是否享受过助学金
        educationalNeeds:w.educationalNeeds || 0,//教育需求
        professionalCertificate: w.professionalCertificate || '',//是否获得职业资格证书
        professionalCertificateType:w.professionalCertificateType || 0,//职业资格证书类型
        driveType:w.driveType || '',//驾驶证类型
        businessType:w.businessType || '',//创办实体情况
        socialSecurityNeed:w.socialSecurityNeed || '',//目前有哪些社会保障需求
        disabledChildRecure:w.disabledChildRecure || '',//残疾儿童康复项目救助
        getLegalService: w.getLegalService || '',//动态更新年度内是否获得过法律服务
        legalServiceNeeds:w.legalServiceNeeds || '',//目前你有哪些法律服务需求
        culture: w.culture || '',//文化
        literature: w.literature || '',//文艺
        boondoggle: w.boondoggle || '',//手工品制作
        height: w.height || '',//身高
        sports: w.sports || '',//体育
        cultureSportsNeeds: w.cultureSportsNeeds || '',//目前文体需求

    };
    var obj = {
        name:'list7',
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
    //window.location.href='write4.html?age='+ age+'&residenceType='+ residenceType
}
//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});
