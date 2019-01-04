/**
 * Created by Think on 2017/12/20.*/
//select数据
//bridge.registerHandler();

var data1 = {
	id: '',
	personalStatusA: personalStatusA,
	areaCode: '520000000000', //行政区划
	areaName: '贵州省', //行政区划名称
	level:0,
	name: '',
	gender: 0,
	genderName: '',
	surveyMethod: 0,
	survey: '入户调查',
	disabilityCard: '',
	perSta: 6, //状态标注
	residenceType: '',
	maritalStatus: '',
	linkmanName: '',
	disabilityGrade: '',
	disabilityType: '',
	phone: '',
	cellphone: '',
	email: '',
	isWelfareHouse: '',
	ageNum: 0,
	gradeNum: 0,
	G2: true,
	grade: true,
	R4: true,
	R5: true,
	addPop: false,
	feaPop: false,
	isSub: false,
	//残疾人特征
	showF1: false,
	showF2: false,
	showF3: false,
	showF4: false,
	showF5: false,
	showF6: false,
	//验证字段判断
	isr1: false,
	issex: false,
	isr2: false,
	isgrade: false,
	istype: false,
	isr3: false,
	isg4: true,
	isr4: false,
	isr5: false,
	isr6: false,
	isr7: false,
	isg5: false,
	//省市县下拉
	area1: [{
		name: '贵州省',
		fname: '贵州省',
		code: '520000000000'
	}],
	area2: [],
	area3: [],
	area4: [],
	area5: [],
	//省市县显示下级
	showArea2: false,
	showArea3: false,
	showArea4: false,
	showArea5: false,
	//状态标注
	sStatus: false,
	statusInput: '正常',
	G4input: '',
	//redpoint
	ifR1p: false,
	ifSexp: false,
	ifR2p: false,
	ifStatusp: false,
	ifGradep: false,
	ifR3p: false,
	ifG4p: false,
	ifR4p: false,
	ifR5p: false,
	ifR6p: false,
	ifR7p: false,
	ifG6p: false,
	isDc: true,
	ifSur: false
};
var statusInputValue = 1;
var w = new Vue({
	el: '#write1',
	data: data1,
	methods: {
		getAgeNum: function() { //获取年龄
			var card = this.disabilityCard;
			if(idCard(card)) {
				this.ageNum = age(card);
				this.isr2 = true;
				if(card.length > 18) {
					this.grade = false;
					$('#grade').val('');
					this.gradeNum = 0;
					this.disabilityGrade = card.substring(19, 20);
					this.disabilityType = card.substring(18, 19);
//					this.personalStatusA[6].isF = false;
//					this.personalStatusA[7].isF = false;
				} else {
					changeType();
					this.grade = true;
//					this.personalStatusA[6] .isF = true;
//					this.personalStatusA[7].isF = true;
				}
			} else {
				this.isr2 = false;
				$.toast("R2输入不正确");
				this.disabilityCard = '';
			}
		},
		openAdd: function() {
			//this.addPop = true;
			var objArea = {
				name: 'area',
				type: 'alert'
			};
			getDataFromApp(objArea, delArea);
		},
		openStatus: function() {
			this.sStatus = true;
		},
		closeStatus: function(num) {
			this.sStatus = false;
		},
		feaFun: function(num) {
			if(num == 1) {
				this.showF1 = true;
			} else {
				this.showF1 = false
			}
			if(num == 2) {
				this.showF2 = true
			} else {
				this.showF2 = false
			}
			if(num == 3) {
				this.showF3 = true
			} else {
				this.showF3 = false
			}
			if(num == 4) {
				this.showF4 = true
			} else {
				this.showF4 = false
			}
			if(num == 5) {
				this.showF5 = true
			} else {
				this.showF5 = false
			}
			if(num == 6) {
				this.showF6 = true
			} else {
				this.showF6 = false
			}
		},
		choStatus: function(arr, event) {
			var ts = this,
				dom = $(event.target),
				id = arr.id;
			radioLi(dom);
			radioLiIsC(ts.personalStatusA);
			if(hC(dom)) {
				arr.isC = true;
				ts.perSta = id;
				ts.statusInput = arr.name;
			} else {
				arr.isC = false;
				ts.perSta = 6;
				ts.statusInput = '正常';
			}
			if(arr.name != '正常') {
				statusInputValue = 0;
			}
		},
		getBackInfo: function() {
			var send = {
				name: 'list1',
				type: 'appResponse'
				//data:'',
				//status:''
			}; 
			getDataFromApp(send, this.delBackData);
		},
		delBackData: function(data) {
			var ts = this,
				oldInfo = data.data.old;
			var info = {},
				isModify = false;
			if(data.data.selfReport) {
				ts.isDc = false;
			}
			if(data.data.modify) {
				info = data.data.modify;
				isModify = true;
			} else {
				info = data.data.old;
				isModify = false;
			}
			//  card  disabilityGrade disabilityType 后有判断 拿到数据后赋值
			var card = info.disabilityCard;
			ts.disabilityGrade = card.substring(19, 20);
			ts.disabilityType = card.substring(18, 19);
			if(isModify) {
				//数据比较
				ts.ifR1p = getModify(info.name, oldInfo.name);
				ts.ifSexp = getModify(info.gender, oldInfo.gender);
				ts.ifR2p = getModify(info.disabilityCard, oldInfo.disabilityCard);
				ts.ifStatusp = getModify(info.perSta, oldInfo.perSta);
				ts.ifSur = getModify(info.surveyMethod, oldInfo.surveyMethod);
				ts.ifGradep = getModify(info.disabilityGrade, oldInfo.disabilityGrade);
				ts.ifR3p = getModify(info.residenceType, oldInfo.residenceType);
				ts.ifG4p = getModify(info.areaName, oldInfo.areaName);
				ts.ifR4p = getModify(info.maritalStatus, oldInfo.maritalStatus);
				ts.ifR5p = getModify(info.linkmanName, oldInfo.linkmanName);
				ts.ifR6p = getModify(info.phone, oldInfo.phone) || getModify(info.cellphone, oldInfo.cellphone) || getModify(info.email, oldInfo.email);
				ts.ifR7p = getModify(info.isWelfareHouse, oldInfo.isWelfareHouse);
			}
			
			ts.id = info.id;
			ts.level = data.data.areaLevel;
			ts.areaCode = info.areaCode; //行政区划
			ts.areaName = info.areaName; //行政区划名称
			$('#city').val(ts.areaName);
			changeTh($('#city'));
			ts.year = info.year; //调查年份
			ts.name = info.name; //姓名
			ts.gender = info.gender; //性别
			var genderNameStr = info.gender ? genderNameA[info.gender - 1] : '';
			$('#genderName').val(genderNameStr);
			ts.genderName = genderNameStr;

		

			ts.citizenId = info.citizenId; //身份证号
			ts.disabilityGrade = info.disabilityGrade; //残疾等级0
			var sGrade = 0;
			if(ts.disabilityCard.length < 20) {
//				personalStatusA[6].isF = true;
//				personalStatusA[7].isF = true;
			}
			if(info.disabilityCard) {
				ts.isr2 = true;
			}
			ts.ageNum = age(info.disabilityCard);
			ts.perSta = info.perSta; //状态标注
			ts.surveyMethod = info.surveyMethod; //调查方式
			ts.survey = surveyMethodA[info.surveyMethod]; //调查方式
			$('#surveyMethod').val(ts.survey);
			ts.personalStatusA = getBackIsC(info.perSta, personalStatusA);
			ts.statusInput = ts.personalStatusA[info.perSta - 1].name;
			//原判断 在标注状态正常时才回显  修改为是否正常都回显
			ts.disabilityCard = info.disabilityCard; //残疾人证号
			if(ts.perSta == 6) {
				if(info.disabilityCard.length > 18) {
					ts.grade = false;
				}
				ts.gradeNum = info.disabilityGrade; //残疾等级0
				if(info.disabilityGrade == 9) {
					sGrade = 5
				} else {
					sGrade = info.disabilityGrade
				}
				var valGrade = info.disabilityGrade ? gradeA[sGrade - 1] : '';

				$('#grade').val(valGrade);

				ts.residenceType = info.residenceType; //户口性质0
				var R3Str = info.residenceType ? residenceTypeA[info.residenceType - 1] : '';
				$('#residenceType').val(R3Str);

				ts.maritalStatus = info.maritalStatus; //婚姻状况0
				var R4Str = info.maritalStatus ? maritalStatusA[maritalStatusNumA.indexOf(info.maritalStatus)] : '';
				$('#maritalStatus').val(R4Str);

				ts.linkmanName = info.linkmanName; //联系人姓名
				ts.phone = info.phone; //固话
				ts.cellphone = info.cellphone; //手机
				ts.email = info.email; //邮箱
				ts.isWelfareHouse = info.isWelfareHouse; //是否在福利院居住0
				var R7Str = info.isWelfareHouse ? trueFalseA[info.isWelfareHouse - 1] : '';
				$('#isWelfareHouse').val(R7Str);
				//disabilityCard
				w.$watch('disabilityCard', function(newValue, oldValue) {
					if(newValue.length == 20) {
						this.grade = false;
						$('#grade').val('');
						this.gradeNum = 0;
//						this.personalStatusA[6].isF = false;
//						this.personalStatusA[7].isF = false;
					} else if(newValue.length == 18) {
						this.grade = true;
						setTimeout(function() {
							picker($("#grade"), gradeA); //残疾人等级
							$('#grade').on('change', function() {
								this.gradeNum = gradeA.indexOf($(this).val()) + 1;
								if(this.gradeNum == 5) {
									this.gradeNum = 9
								}
							});
						}, 0);
//						this.personalStatusA[6].isF = true;
//						this.personalStatusA[7].isF = true;
					}
				});
				setTimeout(function() {
					isOkSub();
				}, 500);
			} else {
				ts.isSub = true;
			}
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			// Code that will run only after the
			// entire view has been rendered
			appInit();
			//this.getBackInfo();
		})

	}
});
setTimeout(function() {
	w.getBackInfo();
}, 1000);

function delArea(data) {
	w.level = data.data.areaLevel;
	w.areaCode = data.data.areaCode;
	w.areaName = data.data.areaName;
	$('#city').val(data.data.areaName);
	changeTh($('#city'));
}
//是否能提交
function isOkSub() {
	if(w.isr1 && w.issex && w.isr2 && w.isr3 &&
		w.isr4 && w.isr5 && w.isr6 && w.isr7 && w.isgrade) {  //增加残疾等级提交验证
		w.isSub = true
	} else {
		w.isSub = false
	}
}
//残疾人等级  
w.$watch('gradeNum', function(newValue, oldValue) {
	var card = w.disabilityCard;
	if(card.length == 18) {
		w.disabilityGrade = newValue;
	}
	if(w.grade){
		if(newValue){
			w.isgrade = true;
		}else{
			w.isgrade = false;
		}
	}else{
		w.isgrade = true;
	}
	isOkSub();
});

//姓名
w.$watch('name', function(newValue, oldValue) {
	if(newValue) {
		w.isr1 = true;
	} else {
		w.isr1 = false;
	}
	isOkSub();
});

//性别
w.$watch('gender', function(newValue, oldValue) {
	if(newValue != 0) {
		w.issex = true;
	} else {
		w.issex = false;
	}
	isOkSub();
});

//残疾人等级
w.$watch('disabilityGrade', function(newValue, oldValue) {
	if(newValue != '') {
		w.isgrade = true;
	} else {
		if(w.gradeNum){
			w.isgrade = true;
		}else{
			w.isgrade = false;
		}
	}
	isOkSub();
});

//户口性质
w.$watch('residenceType', function(newValue, oldValue) {
	if(newValue) {
		w.isr3 = true;
	} else {
		w.isr3 = false;
	}
	isOkSub();
});

//婚姻状况tr
w.$watch('R4', function(newValue, oldValue) {
	if(newValue) {
		w.isr4 = false;
	} else {
		w.maritalStatus = '';
		w.isr4 = true;
	}
});

//婚姻状况
w.$watch('maritalStatus', function(newValue, oldValue) {
	if(w.R4) {
		if(newValue) {
			w.isr4 = true;
		} else {
			w.isr4 = false;
		}
	}
	isOkSub();
});

//联系人姓名R5 变化   w.isr5  true字体变红 不可提交  
w.$watch('linkmanName', function(newValue, oldValue) {
	var card = w.disabilityCard;
		w.disabilityGrade = card.substring(19, 20);
		w.disabilityType = card.substring(18, 19);
	if(w.R5) {
		if(newValue) {
			w.isr5 = true;
		} else {
			//R5必填时 为空   w.isr5 = false  否则 w.isr5 = true
			if(age(newValue) > 17 && card.length > 18 && (w.disabilityType == 5 || w.disabilityType == 6 )){
				w.isr5 = false
			}else{
				w.isr5 = true
			}
			
		}
	}
	isOkSub();
});

//固话
w.$watch('phone', function(newValue, oldValue) {
	if(phone(newValue)) {
		w.isr6 = true;
	} else {
		if(!w.cellphone)
			w.isr6 = false;
	}
	isOkSub();
});
$('#phone').on('change', function() {
	if(!phone($(this).val())) {
		w.phone = '';
		$.toast('固话格式不正确')
	}
});

//手机
w.$watch('cellphone', function(newValue, oldValue) {
	if(mobile(newValue)) {
		w.isr6 = true;
	} else {
		if(!w.phone)
			w.isr6 = false;
	}
	isOkSub();
});
$('#cellphone').on('change', function() {
	if(!mobile($(this).val())) {
		w.cellphone = '';
		$.toast('手机格式不正确')
	}
});

//邮箱
$('#email').on('change', function() {
	if(!email($(this).val())) {
		w.email = '';
		$.toast('邮箱格式不正确')
	}
});
//是否在敬(养)老院、福利院、荣军院等居住
w.$watch('isWelfareHouse', function(newValue, oldValue) {
	if(newValue) {
		w.isr7 = true;
	} else {
		w.isr7 = false;
	}
	isOkSub();
});

//身份证号判断R5是否显示 隐藏  是否必填 ----------------------------J 2018-08-03
w.$watch('disabilityCard', function(newValue, oldValue) {
	if(age(newValue) > 17) {
		var card = w.disabilityCard;
		w.disabilityGrade = card.substring(19, 20);
		w.disabilityType = card.substring(18, 19);
		if(card.length > 18) {
			if(w.disabilityType == 5 || w.disabilityType == 6 ) {
				//R5必填
					w.R5 = true;
					if(!w.linkmanName){
						w.isr5 = false;
					}
			}else if(w.disabilityType == 7){
				//R5非必填
				w.R5 = true;
				w.isr5 = true;
			}else {
				//R5 隐藏
				w.R5 = false;
				w.isr5 = true;
				w.linkmanName = '';
			}
		} else {
			//R5非必填
			w.R5 = true;
			w.isr5 = true;
		}
	} 
//	是否持证 残疾等级选项是否显示
	if(newValue.length > 18) {
		w.grade = false;
		w.isgrade = true;
	}else{
		w.grade = true;
		if(w.gradeNum){
			w.isgrade = true;
		}else{
			w.isgrade = false;
		}
	}
	isOkSub();
});
//身份证号判断R5是否显示 隐藏  是否必填 ----------------------------J 2018-08-03
//年龄变化的隐藏出现-------------------------------J 2018-08-03
w.$watch('ageNum', function(newValue, oldValue) {
	if(newValue < 20) {
		w.R4 = false;
		w.maritalStatus = 0;
		$('#maritalStatus').val('');
	}
	isOkSub();
});
//----------------------------------------------J 2018-08-03

//状态标注
w.$watch('perSta', function(n, o) {
	if(n) {
		if(n != 6) {
			w.isSub = true;
			$('tr:not(.not-tr)').hide();
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').prop('disabled', true).prop('readonly', true);
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').parent().addClass('w_isActive');
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').addClass('w_isActive');

		} else {
			$('tr:not(.not-tr)').show();
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').prop('disabled', false).prop('readonly', false);
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').parent().removeClass('w_isActive');
			$('.dis.not-tr input,.dis.not-tr select,.dis.not-tr textarea,.sfzh input').removeClass('w_isActive');
			// 修改残疾等级
			isOkSub();
		}
	}
});

picker($("#genderName"), genderNameA); //性别
$('#genderName').on('change', function() {
	w.genderName = $(this).val();
	w.gender = genderNameA.indexOf(w.genderName) + 1;
});

if(w.isDc) {
	setTimeout(function() {
		picker($("#surveyMethod"), surveyMethodA); //调查方式
		$('#surveyMethod').on('change', function() {
			w.survey = $(this).val();
			w.surveyMethod = surveyMethodA.indexOf(w.survey);
		});
	}, 2000)
}
picker($("#grade"), gradeA); //残疾人等级
$('body').on('change','#grade',function(){  //修改 原方法未执行
	w.gradeNum = gradeA.indexOf($(this).val()) + 1;
	if(w.gradeNum == 5) {
		w.gradeNum = 9
	}
})
picker($("#residenceType"), residenceTypeA); //户口性质
$('#residenceType').on('change', function() {
	w.residenceType = residenceTypeA.indexOf($(this).val()) + 1;
});

picker($("#maritalStatus"), maritalStatusA); //婚姻状况
$('#maritalStatus').on('change', function() {
	var num = maritalStatusA.indexOf($(this).val());
	w.maritalStatus = maritalStatusNumA[num];
});

picker($("#isWelfareHouse"), trueFalseA); //是否在养老院
$('#isWelfareHouse').on('change', function() {
	w.isWelfareHouse = trueFalseA.indexOf($(this).val()) + 1;
});

//点击提交
$('.fix-btn').on('click', function() {
	if(w.perSta == 6 && !w.disabilityCard) {
		return $.toast('请输入残疾人证号/身份证号！');
	}else if(w.perSta == 6 && w.disabilityCard.length == 18 && !w.gradeNum){
		return $.toast('请选择残疾人等级！');
	}
	if(w.level != 5 && w.perSta == 6){
		return $.toast('地区选择不完整！');
	}
	if(!w.isSub) return $.toast('填写不完整！');
	var disabilityGrade = '';
	var disabilityType = '';
	if(w.disabilityCard.length > 18) {
		disabilityGrade = w.disabilityCard.substring(19, 20);
		disabilityType = w.disabilityCard.substring(18, 19);
	} else {
		disabilityGrade = w.gradeNum;
	}
	var send = {
		id: w.id || '',
		areaCode: w.areaCode || '', //行政区划
		areaName: w.areaName || '', //行政区划名称
		year: new Date().getFullYear() || '', //调查年份
		name: w.name || '', //姓名
		age: w.ageNum || '', //年龄
		gender: w.gender || '', //性别
		surveyMethod: w.surveyMethod || '', //调查方式
		disabilityCard: w.disabilityCard || '', //残疾人证号
		citizenId: w.disabilityCard.substring(0, 18) || '', //身份证号
		disabilityGrade: disabilityGrade,
		disabilityType: disabilityType,
		perSta: w.perSta || 6, //状态标注
		residenceType: w.residenceType || 0, //户口性质0
		maritalStatus: w.maritalStatus || 0, //婚姻状况0
		linkmanName: w.linkmanName || '', //联系人姓名
		phone: w.phone || '', //固话
		cellphone: w.cellphone || '', //手机
		email: w.email || '', //邮箱
		isWelfareHouse: w.isWelfareHouse || 0, //是否在福利院居住0
	};
	if(w.perSta != 6) {
		//标注状态 不正常
		send.residenceType = 0; //户口性质 false
		send.maritalStatus = 0; //婚姻状况 false
		send.linkmanName = ''; //联系人姓名 false
		send.phone = ''; //固话 false
		send.cellphone = ''; //联系人电话  false
		send.email = ''; //邮箱 false
		send.isWelfareHouse = 0; //是否在福利院居住
	}
	var obj = {
		name: 'list1',
		type: 'h5Upload',
		data: send,
		status: ''
	};
	var str = JSON.stringify(obj);
	if(isIos() == 1) {
		messageHtmlHandler(str, goto)
	} else if(isIos() == 2) {
		messageHtmlHandler(obj, goto)
	}
});
function goto() {
	if(w.perSta == 6) {
		window.location.href = 'write2.html?age=' + w.ageNum + '&residenceType=' + w.residenceType + '&isWelfareHouse=' + w.isWelfareHouse + '&from=1&disabilityCard=' + w.disabilityCard;
	} else {
		window.location.href = 'write6.html?age=' + w.ageNum + '&residenceType=' + w.residenceType + '&isWelfareHouse=' + w.isWelfareHouse + '&from=1&disabilityCard=' + w.disabilityCard + '&perSta=' + w.perSta + '&statusInput=' + statusInputValue;
	}

}

//tips
$('body').on('click', '.tips', function() {
	var code = $(this).attr('data-code');
	tips(code)
});