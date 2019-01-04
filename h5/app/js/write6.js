/**
 * Created by Think on 2017/12/25.
 */
//select数据
var age = getParam('age');//年龄
var disabilityCard = getParam('disabilityCard');
var statusInput = getParam('statusInput')?getParam('statusInput'):1;

var residenceType = getParam('residenceType');//农业非农业，农业：1，非农业：2
var from = getParam('from');//
var perSta = getParam('perSta');//
var noSchoolCausation = getParam('noSchoolCausation');//R15---G11
var R14val = getParam('R14val');//R14---G10

var isFarmer = false;
if(residenceType == 1){
    isFarmer = true
}
var isWelfareHouse = getParam('isWelfareHouse');//是否在福利院居住，是：1，否：2
var isInStudy = getParam('isInStudy');//是否在校学习，是：1，否：0
function underTen(num){
    var a;
    if(num.toString().length == 1){
        a = '0'+num
    }else{
        a = num
    }
    return a
}
var today = new Date().getFullYear()+'-'+underTen(parseInt(new Date().getMonth()+1))+'-'+underTen(new Date().getDate());

var data6 = {
    isWelfareHouse:isWelfareHouse,
    id: '',
    statusInput:statusInput,
    personalId: '',
    barrierFreeModification:'',//动态更新年度内你家是否进行过无障碍改造
    barrierFreeModificationNeedsA:barrierFreeModificationNeedsA,
    barrierFreeModificationNeedsOne:'',//目前你家有哪些无障碍改造需求
    barrierFreeModificationNeedsTwo:'',//
    barrierFreeModificationNeedsThree: '',//
    barrierFreeModificationNeedsFour:'',//
    barrierFreeModificationNeedsFive: '',//
    barrierFreeModificationNeedsSix: '',//
    barrierFreeModificationNeedsSeven: '',//
    barrierFreeModificationNeedsEight:'',//
    barrierFreeModificationNeedsNine: '',//
    isSub:false,
    showR39:false,
    R38check:false,
    R39input:'',
    R39check:false,
    isEdit:false,
    //redpoint
    ifR38p:false,
    ifR39p:false,
    // step8
    jionCultureSports:'',//动态更新年度类是否经常参加村(社区)组织的文化体育活动
    notJionCultureSportsCauseA:notJionCultureSportsCauseA,
    notJionCultureSportsCauseOne:'',//不能参加文化体育活动的原因
    notJionCultureSportsCauseTwo: '',//
    notJionCultureSportsCauseThree:'',//
    notJionCultureSportsCauseFour:'',//
    showR41:false,
    R40check:false,
    isSR41:true,
    R41check:false,
    R41A:[],
    R41AName:[],
    R41input:'',
    ifR40p:false,
    ifR41p:false,
    // step9
    householdRegisterName: '',//户主姓名
    idCard:'',//身份证号
    declarant:'',//申报人
    infoAcquisitionMan: '',//信息采集员
    submitDate:today,//报出日期
    note:'',//调查备注
    isS1:false, //户主姓名
    isS2:false, //身份证号
    isS3:false, //申报人
    isS4:false,
    isS5:true,
    isSs1:true,
    isSs2:true,
    //redpoint
    ift1:false,
    ift2:false,
    ift3:false,
    ift4:false,
    ift5:false,
    ift6:false,
    imgArr:[],
    imgUrl1:'',
    imgUrl2:'',
    imgUrl3:'',
    allImage:"",
    dImg3:0,
    dImg2:0,
    dImg1:0,
    size:0
};
if(perSta != 6 && perSta){
	data6.isS1 = true;
	data6.isS2 = true;
	data6.isS3 = true;
}
var w = new Vue({
    el: '#write6',
    data: data6,
    methods:{
        getName:function(){
            var send = {
                name:'',
                type:'getName'
                //data:'',
                //status:''
            };
            if(isIos() == 1){
                getDataFromApp(JSON.stringify(send),this.delNAme);
            }else if(isIos() == 2){
                getDataFromApp(send,this.delNAme);
            }
        },
        //相关照片选取
        getPic:function(type){
        	for(var i =0;i<this.imgArr.length;i++){
        		if(!this.imgArr[i]){
        			this.size = this.size -1;
        		}
        	}
        	var count = 0;
        	var send = {
                name:'photo',
                type:'takePhoto',
                data:{size:this.size}
          };
        	getDataFromApp(send,this.getPhoto);
        },
        
        //从app获取图片文件url数组
        getPhoto:function(data){
        	var imgUrl = data.data;

        	for(var i = 0; i< imgUrl.length;i++){
        		this.imgArr.push(imgUrl[i]);
        	}
			if(this.imgArr.length >= 0){
				this.imgUrl1 = this.imgArr[0];
			}
			if(this.imgArr.length >= 1){
				this.imgUrl2 = this.imgArr[1];
			}
			if(this.imgArr.length >= 2){
				this.imgUrl3 = this.imgArr[2];
			}
		
			this.size = this.imgArr.length;
        },
        
           dPhoto:function(num){
           		  var send = {
	                name:'photo',
	                type:'enterFull'
           		};
	           var exitSend = {
	           	 name:'photo',
	             type:'exitFull'
	           }
	        	if(num == 1){
	        		this.dImg1 = 1;
	        		getDataFromApp(send,'');
	        	}else if(num == -1){
	        		this.dImg1 = 0;
	        		getDataFromApp(exitSend,'');
	        	}else if(num == 2){
	        		this.dImg2 = 1;
	        		getDataFromApp(send,'');
	        	}else if(num == -2){
	        		this.dImg2 = 0;
	        		getDataFromApp(exitSend,'');
	        	}else if(num == 3){
	        		this.dImg3 = 1;
	        		getDataFromApp(send,'');
	        	}else if(num == -3){
	        		this.dImg3 = 0;
	        		getDataFromApp(exitSend,'');
	        	}
	        },	
	        
	        //删除图片处理
        delatedPic:function(type){
        	if(type == 1){
        		this.imgUrl1 = '';
				this.imgArr.splice(0,1);
        	}else if(type == 2){
        		this.imgArr.splice(type-1,1);
        		this.imgUrl2 = '';
        	}else if(type == 3){
        		this.imgUrl3 = '';
				this.imgArr.splice(type-1,1);
        	}
        	
        	if(this.imgArr.length >= 0){
				this.imgUrl1 = this.imgArr[0];
			}
			if(this.imgArr.length >= 1){
				this.imgUrl2 = this.imgArr[1];
			}
			if(this.imgArr.length >= 2){
				this.imgUrl3 = this.imgArr[2];
			}
        	this.size = this.imgArr.length;
        },
        delNAme:function(data){
            this.infoAcquisitionMan = data.data.name;
        },
        openShowR41:function(){
            this.showR41 = true;
        },
        closeShowR41:function(num){
            this.showR41 = false;
        },
        choR41:function(arr,event){
            var ts = this,dom=$(event.target),id=arr.id,num=arr.num;
            checkLi(dom);
            ts.R41A = [];
            ts.R41AName = [];
            if(hC(dom)){
                arr.isC = true;
            }else{
                arr.isC = false;
            }
            $.each(ts.notJionCultureSportsCauseA,function(i,v){
                if(v.isC){
                    ts.R41A.push(v.id);
                    ts.R41AName.push(v.name);
                }
            })
        },
        openShowR39:function(){
            this.showR39 = true;
        },
        closeShowR39:function(num){
            this.showR39 = false;
        },
        choR39:function(arr,event){
            var ts = this, dom = $(event.target), id = arr.id, num = arr.num;
            ts.barrierFreeModificationNeedsA[8].isC = false;
            ts.barrierFreeModificationNeedsNine = '';
            if(id == 9){
                radioLi(dom);
                radioLiIsC(ts.barrierFreeModificationNeedsA);
                if(hC(dom)){
                    arr.isC = true;
                    ts.barrierFreeModificationNeedsNine = id;
                    ts.barrierFreeModificationNeedsOne = '';
                    ts.barrierFreeModificationNeedsTwo = '';
                    ts.barrierFreeModificationNeedsThree = '';
                    ts.barrierFreeModificationNeedsFour = '';
                    ts.barrierFreeModificationNeedsFive = '';
                    ts.barrierFreeModificationNeedsSix = '';
                    ts.barrierFreeModificationNeedsSeven = '';
                    ts.barrierFreeModificationNeedsEight = '';
                }else{
                    arr.isC = false;
                    ts.barrierFreeModificationNeedsNine = '';
                }
            }else{
                checkLi(dom);
                if(hC(dom)){
                    arr.isC = true;
                    if(id == 1){
                        ts.barrierFreeModificationNeedsOne = id;
                    }
                    if(id == 2){
                        ts.barrierFreeModificationNeedsTwo = id;
                    }
                    if(id == 3){
                        ts.barrierFreeModificationNeedsThree = id;
                    }
                    if(id == 4){
                        ts.barrierFreeModificationNeedsFour = id;
                    }
                    if(id == 5){
                        ts.barrierFreeModificationNeedsFive = id;
                    }
                    if(id == 6){
                        ts.barrierFreeModificationNeedsSix = id;
                    }
                    if(id == 7){
                        ts.barrierFreeModificationNeedsSeven = id;
                    }
                    if(id == 8){
                        ts.barrierFreeModificationNeedsEight = id;
                    }
                }else{
                    arr.isC = false;
                    if(id == 1){
                        ts.barrierFreeModificationNeedsOne = '';
                    }
                    if(id == 2){
                        ts.barrierFreeModificationNeedsTwo = '';
                    }
                    if(id == 3){
                        ts.barrierFreeModificationNeedsThree = '';
                    }
                    if(id == 4){
                        ts.barrierFreeModificationNeedsFour = '';
                    }
                    if(id == 5){
                        ts.barrierFreeModificationNeedsFive = '';
                    }
                    if(id == 6){
                        ts.barrierFreeModificationNeedsSix = '';
                    }
                    if(id == 7){
                        ts.barrierFreeModificationNeedsSeven = '';
                    }
                    if(id == 8){
                        ts.barrierFreeModificationNeedsEight = '';
                    }
                }
            }
        },
        getBackInfo:function(){
            var send = {
                name:'list6',
                type:'appResponse'
                //data:'',
                //status:''
            };
            	getDataFromApp(send,this.delBackData);
        },
        delBackData:function(data){
            isWel();
            var ts = this,oldInfo = data.data.old, imgArry;
            var info = {},isModify = false;
            if(data.data.modify){
                info = data.data.modify;
                isModify = true;
            }else{
                info = data.data.old;
                isModify = false;
            }
   			ts.personalId = info.personalId;
            ts.id = info.id;
            if(info.image){
            	imgArry = info.image.split(',');
            	ts.imgArr = imgArry.filter(function(item){
            		return item;
            	});
            	ts.size = ts.imgArr.length;
            	for(var i=0; i< ts.imgArr.length;i++){
	            	if(i == 0){
	            		ts.imgUrl1 = ts.imgArr[0]
	            	}else if(i == 1){
	            		ts.imgUrl2 = ts.imgArr[1]
	            	}else if(i == 2){
	            		ts.imgUrl3 = ts.imgArr[2]
	            	}
            	}
            }
            
            if(isModify && oldInfo){
                ts.ifR38p = getModify(info.barrierFreeModification,oldInfo.barrierFreeModification);
                ts.ifR39p = getModify(info.barrierFreeModificationNeedsOne,oldInfo.barrierFreeModificationNeedsOne)
                    ||getModify(info.barrierFreeModificationNeedsTwo,oldInfo.barrierFreeModificationNeedsTwo)
                    ||getModify(info.barrierFreeModificationNeedsThree,oldInfo.barrierFreeModificationNeedsThree)
                    ||getModify(info.barrierFreeModificationNeedsFour,oldInfo.barrierFreeModificationNeedsFour)
                    ||getModify(info.barrierFreeModificationNeedsFive,oldInfo.barrierFreeModificationNeedsFive)
                    ||getModify(info.barrierFreeModificationNeedsSix,oldInfo.barrierFreeModificationNeedsSix)
                    ||getModify(info.barrierFreeModificationNeedsSeven,oldInfo.barrierFreeModificationNeedsSeven)
                    ||getModify(info.barrierFreeModificationNeedsEight,oldInfo.barrierFreeModificationNeedsEight)
                    ||getModify(info.barrierFreeModificationNeedsNine,oldInfo.barrierFreeModificationNeedsNine);
                ts.ifR40p = getModify(info.jionCultureSports,oldInfo.jionCultureSports);
                ts.ifR41p = getModify(info.notJionCultureSportsCause,oldInfo.notJionCultureSportsCause);
                ts.ift1 = getModify(info.householdRegisterName,oldInfo.householdRegisterName);
                ts.ift2 = getModify(info.idCard,oldInfo.idCard);
                ts.ift3 = getModify(info.declarant,oldInfo.declarant);
                ts.ift4 = getModify(info.infoAcquisitionMan,oldInfo.infoAcquisitionMan);
                ts.ift5 = getModify(info.submitDate,oldInfo.submitDate);
                ts.ift6 = getModify(info.note,oldInfo.note);
            }
            ts.isEdit = true;
         
            if(isWelfareHouse == 2 && from != 1){
                ts.barrierFreeModification = info.barrierFreeModification;//动态更新年度内你家是否进行过无障碍改造
                var R38Str = info.barrierFreeModification ? trueFalseA[info.barrierFreeModification-1] : '';
                $('#barrierFreeModification').val(R38Str);
                ts.barrierFreeModificationNeedsOne = info.barrierFreeModificationNeedsOne;//目前你家有哪些无障碍改造需求
                ts.barrierFreeModificationNeedsTwo = info.barrierFreeModificationNeedsTwo;
                ts.barrierFreeModificationNeedsThree = info.barrierFreeModificationNeedsThree;
                ts.barrierFreeModificationNeedsFour = info.barrierFreeModificationNeedsFour;
                ts.barrierFreeModificationNeedsFive = info.barrierFreeModificationNeedsFive;
                ts.barrierFreeModificationNeedsSix = info.barrierFreeModificationNeedsSix;
                ts.barrierFreeModificationNeedsSeven = info.barrierFreeModificationNeedsSeven;
                ts.barrierFreeModificationNeedsEight = info.barrierFreeModificationNeedsEight;
                ts.barrierFreeModificationNeedsNine = info.barrierFreeModificationNeedsNine;
                ckR39();
                ts.jionCultureSports = info.jionCultureSports;//动态更新年度类是否经常参加村(社区)组织的文化体育活动
                var jionCStr = info.jionCultureSports ? trueFalseA[info.jionCultureSports-1] : '';
                $('#jionCultureSports').val(jionCStr);
                ts.notJionCultureSportsCauseOne = info.notJionCultureSportsCauseOne;//不能参加文化体育活动的原因
                if(info.notJionCultureSportsCauseOne){
                    ts.notJionCultureSportsCauseA[0].isC = true;
                }
                ts.notJionCultureSportsCauseTwo = info.notJionCultureSportsCauseTwo;
                if(info.notJionCultureSportsCauseTwo){
                    ts.notJionCultureSportsCauseA[1].isC = true;
                }
                ts.notJionCultureSportsCauseThree = info.notJionCultureSportsCauseThree;
                if(info.notJionCultureSportsCauseThree){
                    ts.notJionCultureSportsCauseA[2].isC = true;
                }
                ts.notJionCultureSportsCauseFour = info.notJionCultureSportsCauseFour;
                if(info.notJionCultureSportsCauseFour){
                    ts.notJionCultureSportsCauseA[3].isC = true;
                }
                ts.R41A = [];
                ts.R41AName = [];
                $.each(ts.notJionCultureSportsCauseA,function(i,v){
                    if(v.isC){
                        ts.R41A.push(v.id);
                        ts.R41AName.push(v.name);
                    }
                });
            }
// 			ts.id = info.id;
            ts.householdRegisterName = info.householdRegisterName;
            ts.idCard = info.idCard;
            ts.declarant = info.declarant;
            ts.infoAcquisitionMan = info.infoAcquisitionMan;
            ts.submitDate = info.submitDate ? info.submitDate:today;
            ts.note = info.note ? info.note:'';
            setTimeout(function(){
                w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
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
    w.getName();
    w.getBackInfo();
},1000);
function isWel(){
	if(perSta == 6){
		//isWelfareHouse  是否居住在福利院  2 否      residenceType  2 非农业
		if(isWelfareHouse == 2 && residenceType == 2 ){
        w.isS1 = false;
        w.isS2 = false;
    }else{
        if(isWelfareHouse == 1){
            w.isSs2 = false;
            w.isSs1 = false;
            w.isS1 = true;
            w.isS2 = true;
        }
    }
	}
    
}
isWel();
if(from == 1){
    w.isS1 = true;
    w.isS2 = true;
}
function isOkSub7(){
    var isCheck = false;
    if(isWelfareHouse == 1 ||  from == 1){
        isCheck = true
    }else{
        if(w.R38check && w.R39check){
            isCheck = true;
        }else{
            isCheck= false;
        }
    }
    return isCheck;
}
function isOkSub8(){
    var isCheck = false;
    if(isWelfareHouse == 1 ||  from == 1){
        isCheck = true;
    }
    else{
        if(w.R40check && w.R41check){
            isCheck = true;
        }else{
            isCheck = false;
        }
    }
    return isCheck;
}
function isOkSub9(){
    var isCheck = false;
    if(w.isS1 && w.isS2 && w.isS3 && w.isS4 && w.isS5){
        isCheck = true;
    }else{
        isCheck = false;
    }
    return isCheck;
}
//R38check
w.$watch('barrierFreeModification',function(n,o){
    if(n){
        w.R38check = true
    }else{
        w.R38check = false;
    }
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
});
//R39check
function ckR39(){
    var str = '';
    if(w.barrierFreeModificationNeedsOne || w.barrierFreeModificationNeedsTwo || w.barrierFreeModificationNeedsThree || w.barrierFreeModificationNeedsFour || w.barrierFreeModificationNeedsFive
        || w.barrierFreeModificationNeedsSix|| w.barrierFreeModificationNeedsSeven|| w.barrierFreeModificationNeedsEight|| w.barrierFreeModificationNeedsNine){
        w.R39check = true
    }else{
        w.R39check = false
    }
    if(w.barrierFreeModificationNeedsNine){
        str = w.barrierFreeModificationNeedsA[8].name
    }else{
        if(w.barrierFreeModificationNeedsOne){
            str +=  w.barrierFreeModificationNeedsA[0].name+'、'
        }
        if(w.barrierFreeModificationNeedsTwo){
            str +=  w.barrierFreeModificationNeedsA[1].name+'、'
        }
        if(w.barrierFreeModificationNeedsThree){
            str +=  w.barrierFreeModificationNeedsA[2].name+'、'
        }
        if(w.barrierFreeModificationNeedsFour){
            str +=  w.barrierFreeModificationNeedsA[3].name+'、'
        }
        if(w.barrierFreeModificationNeedsFive){
            str +=  w.barrierFreeModificationNeedsA[4].name+'、'
        }
        if(w.barrierFreeModificationNeedsSix){
            str +=  w.barrierFreeModificationNeedsA[5].name+'、'
        }
        if(w.barrierFreeModificationNeedsSeven){
            str +=  w.barrierFreeModificationNeedsA[6].name+'、'
        }
        if(w.barrierFreeModificationNeedsEight){
            str +=  w.barrierFreeModificationNeedsA[7].name+'、'
        }
    }
    var ar = str.split('、');
    ar.removeByValue('');
    str = ar.join('、');
    w.R39input = str;
    $('#barrierFreeModificationNeeds').val(str);
    changeTh($('#barrierFreeModificationNeeds'));
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
}
w.$watch('barrierFreeModificationNeedsOne',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsTwo',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsThree',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsFour',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsFive',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsSix',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsSeven',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsEight',function(n,o){
    ckR39()
});
w.$watch('barrierFreeModificationNeedsNine',function(n,o){
    ckR39()
});
//R40check
w.$watch('jionCultureSports',function(n,o){
    w.R40check = false;
    w.isSR41 = true;
    w.R41check = false;
    if(n){
        w.R40check = true;
        if(n == 1){
            w.isSR41 = false;
            radioLiIsC(w.notJionCultureSportsCauseA);
            w.notJionCultureSportsCauseOne = '';//不能参加文化体育活动的原因
            w.notJionCultureSportsCauseTwo= '';//
            w.notJionCultureSportsCauseThree = '';//
            w.notJionCultureSportsCauseFour = '';//
            w.R41input = '';
            w.R41check = true;
        }
    }
    
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9();
});
//R41check
function ckR41(){
    if(w.notJionCultureSportsCauseOne||w.notJionCultureSportsCauseTwo||w.notJionCultureSportsCauseThree||w.notJionCultureSportsCauseFour){
        w.R41check = true
    }else{
        w.R41check = false
    }
    if(!w.isSR41){
        w.R41check=true;
    }
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
}
w.$watch('R41A',function(n,o){
    if(n.indexOf(1) == -1){
        w.notJionCultureSportsCauseOne = '';
    }else{
        w.notJionCultureSportsCauseOne = 1;
    }
    if(n.indexOf(2) == -1){
        w.notJionCultureSportsCauseTwo = '';
    }else{
        w.notJionCultureSportsCauseTwo = 2;
    }
    if(n.indexOf(3) == -1){
        w.notJionCultureSportsCauseThree = '';
    }else{
        w.notJionCultureSportsCauseThree = 3;
    }
    if(n.indexOf(4) == -1){
        w.notJionCultureSportsCauseFour = '';
    }else{
        w.notJionCultureSportsCauseFour = 4;
    }
    w.R41input = w.R41AName.join('、');
    $('#notJionCultureSportsCause').val(w.R41AName.join('、'));
    changeTh($('#notJionCultureSportsCause'));
});
w.$watch('notJionCultureSportsCauseOne',function(n,o){
    ckR41()
});
w.$watch('notJionCultureSportsCauseTwo',function(n,o){
    ckR41()
});
w.$watch('notJionCultureSportsCauseThree',function(n,o){
    ckR41()
});
w.$watch('notJionCultureSportsCauseFour',function(n,o){
    ckR41()
});

picker($('#jionCultureSports'),trueFalseA);
$('#jionCultureSports').on('change',function(){
    w.jionCultureSports = trueFalseA.indexOf( $(this).val())+1;
});


picker($('#barrierFreeModification'),trueFalseA);
$('#barrierFreeModification').on('change',function(){
    w.barrierFreeModification = trueFalseA.indexOf( $(this).val())+1;
});

//户主姓名
w.$watch('householdRegisterName',function(n,o){
	if(perSta == 6 || perSta == null){
		if(n){
        	w.isS1 = true;
	        if(n == '集体户口'){
	            w.isS2 = true;
	        }else{
	            w.isS2 = false;
	        }
	    }else{
	        w.isS1 = false;
	        isWel();
	    }
	}else{
		w.isS1 = true;
		w.isS2 = true;
	}
	 

   
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
});

//身份证号
w.$watch('idCard',function(n,o){
	if(perSta == 6 || perSta == null){
    	if(n){
	        if(n.length==18){
	            if(idCard(n)){
	                w.isS2 = true
	            }else{
	                w.isS2 = false;
	                w.idCard = '';
	            }
	        }else{
	            w.isS2 = false;
	        }
	    }else{
	        w.isS2 = false;
	        isWel();
	    }
	}else{
		w.isS2 = true
	}
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
});
//申报人
w.$watch('declarant',function(n,o){
	if(perSta == 6 || perSta == null){
		if(n){
        	w.isS3 = true
	    }else{
	        w.isS3 = false
	    }
	}else{
		w.isS3 = true
	}
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
});
//信息采集员
w.$watch('infoAcquisitionMan',function(n,o){
    if(n){
        w.isS4 = true
    }else{
        w.isS4 = false
    }
    w.isSub = isOkSub7() && isOkSub8() && isOkSub9()
});


$("#submitDate").calendar({
    monthNames:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
    monthNamesShort:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
    dayNames:['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort:['日', '一', '二', '三', '四', '五', '六']
});


//点击提交
$('.fix-btn').on('click',function(){
	if(w.imgUrl1){
		w.allImage += (w.imgUrl1 )
	}
	if(w.imgUrl2){
		w.allImage += ( ',' +w.imgUrl2 )
	}
	if(w.imgUrl3){
		w.allImage += ( ',' +w.imgUrl3 );
	}

    if(!w.isSub) return $.toast('填写不完整！');
    
    var send = {
        id: w.id,
        personalId: w.personalId,
        barrierFreeModification:w.barrierFreeModification || '',//动态更新年度内你家是否进行过无障碍改造
        barrierFreeModificationNeedsOne:w.barrierFreeModificationNeedsOne || '',//目前你家有哪些无障碍改造需求
        barrierFreeModificationNeedsTwo:w.barrierFreeModificationNeedsTwo || '',//
        barrierFreeModificationNeedsThree:w.barrierFreeModificationNeedsThree || '',//
        barrierFreeModificationNeedsFour:w.barrierFreeModificationNeedsFour || '',//
        barrierFreeModificationNeedsFive:w.barrierFreeModificationNeedsFive || '',//
        barrierFreeModificationNeedsSix:w.barrierFreeModificationNeedsSix || '',//
        barrierFreeModificationNeedsSeven:w.barrierFreeModificationNeedsSeven || '',//
        barrierFreeModificationNeedsEight:w.barrierFreeModificationNeedsEight || '',//
        barrierFreeModificationNeedsNine:w.barrierFreeModificationNeedsNine || '',//
        jionCultureSports: w.jionCultureSports || '',//动态更新年度类是否经常参加村(社区)组织的文化体育活动
        notJionCultureSportsCauseOne: w.notJionCultureSportsCauseOne || '',//不能参加文化体育活动的原因
        notJionCultureSportsCauseTwo: w.notJionCultureSportsCauseTwo || '',//
        notJionCultureSportsCauseThree: w.notJionCultureSportsCauseThree || '',//
        notJionCultureSportsCauseFour: w.notJionCultureSportsCauseFour || '',//
        householdRegisterName: w.householdRegisterName || '',//户主姓名
        idCard:w.idCard || '',//身份证号
        declarant:w.declarant || '',//申报人
        infoAcquisitionMan:w.infoAcquisitionMan || '',//信息采集员
        note:w.note || '',//调查备注
        image:w.allImage,
        submitDate:$('#submitDate').val() || ''//报出日期，
       
    };
    var obj = {
        name:'list6',
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
    window.location.href='writeG.html?age='+ age+'&R14val='+ R14val+'&noSchoolCausation='+ noSchoolCausation+'&residenceType='+ residenceType+'&isWelfareHouse='+ isWelfareHouse+'&from=6&disabilityCard='+disabilityCard
}
//tips
$('body').on('click','.tips',function () {
    var code = $(this).attr('data-code');
    tips(code)
});

