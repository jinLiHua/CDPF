/**
 * Created by Think on 2018/1/3.
 */
var d1 = {},
	d2 = {},
	d3 = {},
	d4 = {},
	d5 = {},
	d6 = {},
	d7 = {},
	d8 = {},
	d9 = {},
	dG = {};
//获取参数 type == 'zibao' 
var type = getParam('type');
var dataDetail = {
	is3569: true,
	is4: true,
	is8: true,
	is3: true,
	is5: true,
	is6: true,
	zibao: false,
	zibaoId: '',
	list1: {
		name: '',
		gender: '暂无',
		grade: true,
		disabilityCard: '暂无',
		perSta: '暂无',
		gradeNum: '暂无',
		surveyMethod: '暂无',
		G2: true,
		residenceType: '暂无',
		areaName: '暂无',
		R4: true,
		isR4: true,
		maritalStatus: '暂无',
		R5: true,
		linkmanName: '暂无',
		phone: '暂无',
		cellphone: '暂无',
		email: '暂无',
		isWelfareHouse: '暂无',
		G5: true,
		if1p: false,
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
		ifR62p: false,
		ifR63p: false,
		ifR7p: false,
		ifsur: false,
	},
	list2: {
		isFarmer: true,
		townFamilyIncome: '暂无',
		townFamilyHouse: '暂无',
		poorArchivingSituation: '暂无',
		countryFamilyHouse: '暂无',
		if2p: false,
		ifR8p: false,
		ifR9p: false,
		ifR10p: false,
		ifR11p: false,
		ifG9p: false
	},
	list3: {
		isRead: true,
		learnToRead: '暂无',
		educationalBackground: '暂无',
		isR131: true,
		age614: true,
		noSchoolCausation: '暂无',
		school: '暂无',
		if3p: false,
		ifR12p: false,
		ifR13p: false,
		ifR14p: false,
		ifR15p: false,

	},
	list4: {
		isShowG13: true,
		haveJob: '暂无',
		isFarmerGo18: false,
		unempRegistration: '暂无',
		goR18: false,
		disabilityJobType: '暂无',
		goR20: true,
		sourceOfIncome: '暂无',
		noJobCausation: '暂无',
		goR22: false,
		helpJobPoor: '暂无',
		jobPoorNeeds: '暂无',
		if4p: false,
		ifR16p: false,
		ifR162p: false,
		ifR17p: false,
		ifR18p: false,
		ifR19p: false,
		ifR20p: false,
		ifR21p: false
	},
	list5: {
		goR25: false,
		isShowR22: true,
		securityOfSubsistence: '暂无',
		isShowR23: true,
		endowmentInsurance: '暂无',
		isShowR24: true,
		endowmentInsuranceSubsidy: '暂无',
		medicalInsurance: '暂无',
		isShowR26: true,
		medicalInsuranceSubsidy: '暂无',
		socialAssistance: '暂无',
		socialWelfareutiSubsidy: '暂无',
		isShowR29: true,
		supportServiceNeeds: '暂无',
		isShowR30: true,
		supportServiceType: '暂无',
		supportService: '暂无',
		if5p: false,
		ifR22p: false,
		ifR23p: false,
		ifR24p: false,
		ifR25p: false,
		ifR26p: false,
		ifR27p: false,
		ifR28p: false,
		ifR29p: false,
		ifR30p: false
	},
	list6: {
		familyDoctor: '暂无',
		otherDisease: '暂无',
		isSR33: true,
		treat: '暂无',
		isSR34: true,
		untreatedCause: '暂无',
		useService: '暂无',
		isSR36: true,
		notRecoveredCause: '暂无',
		needService: '暂无',
		isSG16: true,
		if6p: false,
		ifR31p: false,
		ifR32p: false,
		ifR33p: false,
		ifR34p: false,
		ifR35p: false,
		ifR36p: false,
		ifR37p: false,
	},
	list7: {
		barrierFreeModification: '暂无',
		barrierFreeModificationNeeds: '暂无',
		if7p: false,
		ifR38p: false,
		ifR39p: false
	},
	list8: {
		jionCultureSports: '暂无',
		isSR41: true,
		notJionCultureSportsCause: '暂无',
		if8p: false,
		ifR40p: false,
		ifR41p: false,
	},
	list9: {
		householdRegisterName: '暂无',
		idCard: '暂无',
		declarant: '暂无',
		infoAcquisitionMan: '暂无',
		submitDate: '暂无',
		note: '暂无',
		ift: false,
		ift1: false,
		ift2: false,
		ift3: false,
		ift4: false,
		ift5: false,
		ift6: false
	},
	listG: {
		nation: '暂无',
		ifG1p: false,
		ifGp: false,
		politicalStatus: '暂无',
		ifG2p: false,
		ifG3p: false,
		familyPopulation: '暂无',
		ifG4p: false,
		address: '暂无',
		ifG5p: false,
		leftBehindChildren: '暂无',
		ifG6p: false,
		feathName: '暂无',
		ifG7p: false,
		houseNeed: '暂无',
		ifG8p: false,
		countryHouseNeed: '暂无',
		incomePerHead: '暂无',
		ifG10p: false,
		scholarship: '暂无',
		ifG11p: false,
		educationalNeeds: '暂无',
		ifG12p: false,
		professionalCertificate: '暂无',
		isShowG13: true,
		ifG13p: false,
		professionalCertificateType: '暂无',
		ifG14p: false,
		businessType: '暂无',
		ifG15p: false,
		socialSecurityNeed: '暂无',
		ifG16p: false,
		disabledChildRecure: '暂无',
		ifG17p: false,
		getLegalService: '暂无',
		ifG18p: false,
		legalServiceNeeds: '暂无',
		ifG19p: false,
		like: '暂无',
		ifHeightp: false,
		height: '暂无',
		ifG20p: false,
		cultureSportsNeeds: '暂无',

	},
	listImage: {
		imgUrl1: '',
		imgUrl2: '',
		imgUrl3: '',
		dImg1: 0,
		dImg2: 0,
		dImg3: 0
	}
};
//自报列表  审核通过按钮显示
if(type == 'zibao') {
	dataDetail.zibao = true;
}
var w = new Vue({
	el: '#detail',
	data: dataDetail,
	methods: {
		openTable: function(event) {
			var dom = $(event.target);
			dom.parents('.list').find('.l-r-table').toggle().toggleClass('ifShow');
			dom.parents('.list').find('.icon').toggleClass('icon-up');
			if(dom.parents('.list').find('.l-r-table').hasClass('ifShow')) {
				dom.parents('.list').find('.text-to').text('收起')
			} else {
				dom.parents('.list').find('.text-to').text('展开')
			}
		},
		dPhoto: function(num) {
			var send = {
				name: 'photo',
				type: 'enterFull'
				// data:''
				//status:''
			};
			var exitSend = {
				name: 'photo',
				type: 'exitFull'
			}
			if(num == 1) {
				this.listImage.dImg1 = 1;
				getDataFromApp(send, '');
			} else if(num == -1) {
				this.listImage.dImg1 = 0;
				getDataFromApp(exitSend, '');
			} else if(num == 2) {
				this.listImage.dImg2 = 1;
				getDataFromApp(send, '');
			} else if(num == -2) {
				this.listImage.dImg2 = 0;
				getDataFromApp(exitSend, '');
			} else if(num == 3) {
				this.listImage.dImg3 = 1;
				getDataFromApp(send, '');
			} else if(num == -3) {
				this.listImage.dImg3 = 0;
				getDataFromApp(exitSend, '');
			}
		},
		//审核通过
		vertifiled: function() {
			var send = {
				name: 'zibao',
				type: 'check',
				data: {
					id: this.zibaoId
				}

			};
			messageHtmlHandler(send, this.getvertifiled)
		},
		getvertifiled: function(data) {
			this.zibao = false;
		},
		getAppData: function() {
			var send = {
				name: 'all',
				type: 'appResponse'
			};
			getDataFromApp(send, this.getAllData);
		},
		getAllData: function(data) {
			this.zibaoId = data.data.old.personal.id;
			var all = {},
				isModify = false,
				imgArry;
			if(data.data.modify && JSON.stringify(data.data.modify) != "{}") {
				all = data.data.modify;
				isModify = true;
			} else {
				all = data.data.old;
				isModify = false;
			}
			var oldAll = data.data.old;
			d1 = all.personal;
			d2 = all.economyHouseEdu;
			d3 = all.jobandhelppoor;
			d4 = all.socialsecurity;
			d5 = all.treatmentrecure;
			d6 = all.legalAccessCulSportSubinfo;
			dG = all.additionalQuestions;
			this.delData(d1, d2, d3, d4, d5, d6, dG, oldAll, isModify)
		},
		delData: function(d1, d2, d3, d4, d5, d6, dG, oldAll, isModify) {
			var old1 = {},
				old2 = {},
				old3 = {},
				old4 = {},
				old5 = {},
				old6 = {},
				old7 = {},
				old8 = {},
				old9 = {},
				oldG = {};
			if(isModify) {
				old1 = oldAll.personal;
				old2 = oldAll.economyHouseEdu;
				old3 = oldAll.jobandhelppoor;
				old4 = oldAll.socialsecurity;
				old5 = oldAll.treatmentrecure;
				old6 = oldAll.legalAccessCulSportSubinfo;
				oldG = oldAll.additionalQuestions;
			}
			var ageNum = age(d1.disabilityCard),
				_t = this;
			if(d6) {
				if(d6.image && d6.image.length > 0) {
					imgArry = d6.image.split(',');
					for(var i in imgArry) {
						if(i == 0) {
							_t.listImage.imgUrl1 = imgArry[0]
						} else if(i == 1) {
							_t.listImage.imgUrl2 = imgArry[1]
						} else if(i == 2) {
							_t.listImage.imgUrl3 = imgArry[2]
						}
					}
				}
			}
			if(d1.isWelfareHouse == 1) {
				_t.is3569 = false;
				_t.is4 = false;
				_t.is8 = false;
			}
			if(ageNum < 16 || ageNum > 59) {
				_t.is4 = false;
			}
			if(ageNum < 6) {
				_t.is8 = false;
			}
			//write1
			//var grade = true,G2 = true,isR4 = true,isR5 = true;
			if(d1.disabilityCard.length > 18) {
				_t.list1.grade = false;
			}
			if(ageNum < 16) {
				_t.list1.G2 = false
			}
			if(ageNum < 20) {
				_t.list1.isR4 = false
			}
			if(ageNum > 17) {
				_t.list1.R5 = false
			}
			if(ageNum > 16) {
				_t.list1.G5 = false
			}

			function getFeature() {
				var str = '',
					feaA = [];
				if(dG.featureOne != 0) {
					feaA.push(featureAs[0].name + '(' + featureA1[dG.featureOne - 1].name + ')')
				}
				if(dG.featureTwo != 0) {
					feaA.push(featureAs[1].name + '(' + featureA2[dG.featureTwo - 1].name + ')')
				}
				if(dG.featureThree != 0) {
					feaA.push(featureAs[2].name + '(' + featureA3[dG.featureThree - 1].name + ')')
				}
				if(dG.featureFour != 0) {
					feaA.push(featureAs[3].name + '(' + getStrType(dG.featureFour, featureA4) + ')')
				}
				if(dG.featureFive != 0) {
					feaA.push(featureAs[4].name + '(' + getStrType(dG.featureFive, featureA5) + ')')
				}
				if(dG.featureSix != 0) {
					feaA.push(featureAs[5].name + '(' + getStrType(dG.featureSix, featureA6) + ')')
				}
				str = feaA.join('、');
				return str
			}
			_t.list1.name = d1.name || '暂无';
			_t.list1.gender = d1.gender ? genderNameA[d1.gender - 1] : '暂无';
			_t.list1.surveyMethod = surveyMethodA[d1.surveyMethod] || '入户调查';
			_t.list1.disabilityCard = d1.disabilityCard || '暂无';
			_t.list1.perSta = d1.perSta ? personalStatusA[d1.perSta - 1].name : '暂无';
			var sGrade = 0;
			if(d1.disabilityGrade == 9) {
				sGrade = 5
			} else {
				sGrade = d1.disabilityGrade
			}
			_t.list1.gradeNum = d1.disabilityGrade ? gradeA[sGrade - 1] : '暂无';
			_t.list1.residenceType = d1.residenceType ? residenceTypeA[d1.residenceType - 1] : '暂无';
			_t.list1.areaName = d1.areaName || '暂无';
			_t.list1.maritalStatus = d1.maritalStatus ? maritalStatusA[maritalStatusNumA.indexOf(d1.maritalStatus)] : '暂无';
			_t.list1.linkmanName = d1.linkmanName || '暂无';
			_t.list1.phone = d1.phone || '暂无';
			_t.list1.cellphone = d1.cellphone || '暂无';
			_t.list1.email = d1.email || '暂无';
			_t.list1.isWelfareHouse = d1.isWelfareHouse ? trueFalseA[d1.isWelfareHouse - 1] : '暂无';

			if(isModify) {
				if(old1) {
					//数据比较
					_t.list1.ifR1p = getModify(d1.name, old1.name);
					_t.list1.ifSexp = getModify(d1.gender, old1.gender);
					_t.list1.ifR2p = getModify(d1.disabilityCard, old1.disabilityCard);
					_t.list1.ifsur = getModify(d1.surveyMethod, old1.surveyMethod);
					_t.list1.ifStatusp = getModify(d1.perSta, old1.perSta);
					_t.list1.ifGradep = getModify(d1.disabilityGrade, old1.disabilityGrade);
					_t.list1.ifR3p = getModify(d1.residenceType, old1.residenceType);
					_t.list1.ifG4p = getModify(d1.areaName, old1.areaName);
					_t.list1.ifR4p = getModify(d1.maritalStatus, old1.maritalStatus);
					_t.list1.ifR5p = getModify(d1.linkmanName, old1.linkmanName);
					_t.list1.ifR6p = getModify(d1.phone, old1.phone);
					_t.list1.ifR62p = getModify(d1.cellphone, old1.cellphone);
					_t.list1.ifR63p = getModify(d1.email, old1.email);
					_t.list1.ifR7p = getModify(d1.isWelfareHouse, old1.isWelfareHouse);
					if(_t.list1.ifR1p || _t.list1.ifSexp || _t.list1.ifR2p || _t.list1.ifStatusp || _t.list1.ifGradep ||
						_t.list1.ifR3p || _t.list1.ifG4p || _t.list1.ifR4p || _t.list1.ifR5p || _t.list1.ifR6p || _t.list1.ifR62p ||
						_t.list1.ifR63p || _t.list1.ifR7p) {
						_t.list1.if1p = true
					}
				}

			}

			if(d1.perSta == 6) {
				//write2
				//var isFarmer = true;
				if(_t.is3569) {
					if(d2) {
						function townFamilyHouse() {
							var str = '',
								strTotal = '';
							if(d2.townFamilyHouse == 2) {
								str = '(' + getStrType(d2.homeType, townFamilyHouseA2) + ')'
							}
							strTotal = townFamilyHouseA[d2.townFamilyHouse - 1].name + str;
							return strTotal
						}
						if(d1.residenceType != 1) {
							_t.list2.isFarmer = false;
							_t.list2.townFamilyIncome = d2.townFamilyIncome ? townFamilyIncomeA[d2.townFamilyIncome - 1] : '暂无';
							_t.list2.townFamilyHouse = townFamilyHouse() || '暂无';
						} else {
							_t.list2.poorArchivingSituation = d2.poorArchivingSituation ? poorArchivingSituationA[d2.poorArchivingSituation - 1] : '暂无';
							_t.list2.countryFamilyHouse = d2.countryFamilyHouse ? countryFamilyHouseA[d2.countryFamilyHouse - 1] : '暂无';
						}
						if(isModify) {
							if(old2) {
								//数据比较
								_t.list2.ifR8p = getModify(d2.townFamilyIncome, old2.townFamilyIncome);
								_t.list2.ifR9p = getModify(d2.townFamilyHouse, old2.townFamilyHouse) || getModify(d2.homeType, old2.homeType);
								_t.list2.ifR10p = getModify(d2.poorArchivingSituation, old2.poorArchivingSituation);
								_t.list2.ifR11p = getModify(d2.countryFamilyHouse, old2.countryFamilyHouse);
								if(_t.list2.ifR8p || _t.list2.ifR9p || _t.list2.ifR10p || _t.list2.ifR11p) {
									_t.list2.if2p = true
								}
							}

						}

					}
				}

				//write3
				//var isRead = true,isR131 = true,age614 = true;
				if(_t.is3) {
					if(d2) {
						var school = '';
						if(d2.speclalSchool && d2.speclalSchool != 0) {
							school = '特殊教育机构-' + edulistt[d2.speclalSchool - 7].name
						}
						if(d2.commonSchool && d2.commonSchool != 0) {
							school = '普通教育机构-' + edulistt[d2.commonSchool - 1].name
						}
						if(ageNum < 15) {
							_t.list3.isRead = false;
						}
						if(d2.educationalBackground == 1) {
							_t.list3.isR131 = false
						}
						if(ageNum < 6 || ageNum > 14) {
							_t.list3.age614 = false
						}
						_t.list3.learnToRead = (d2.learnToRead > 0) ? trueFalseA[d2.learnToRead - 1] : '暂无';
						_t.list3.educationalBackground = (d2.educationalBackground > 0) ? edulist1[d2.educationalBackground - 1].name : '暂无';
						_t.list3.noSchoolCausation = (d2.noSchoolCausation > 0) ? noSchoolCausationA[d2.noSchoolCausation - 1] : '暂无';
						_t.list3.school = school || '暂无';

						if(isModify) {
							//数据比较
							if(old2) {
								_t.list3.ifR12p = getModify(d2.learnToRead, old2.learnToRead);
								_t.list3.ifR13p = getModify(d2.educationalBackground, old2.educationalBackground);
								_t.list3.ifR14p = getModify(d2.commonSchool, old2.commonSchool) || getModify(d2.speclalSchool, old2.speclalSchool);
								_t.list3.ifR15p = getModify(d2.noSchoolCausation, old2.noSchoolCausation);
								if(_t.list3.ifR12p || _t.list3.ifR13p || _t.list3.ifR14p || _t.list3.ifR15p) {
									_t.list3.if3p = true
								}
							}
						}

					}
				}

				//write4
				// var isShowG13 = true,isFarmerGo18 = false,goR18 = false,goR20 = true,goR22 = false;
				if(_t.is4) {
					if(d3) {
						if(d3.haveJob == 2) {
							_t.list4.goR18 = false;
							_t.list4.goR20 = true;
							if(!_t.list2.isFarmer) {
								_t.list4.isFarmerGo18 = true;
							}
						} else {
							_t.list4.goR18 = true;
							_t.list4.goR20 = false;
						}
						if(d3.haveJob && d3.noJobCausation != 1 && d3.noJobCausation != 2 && d3.noJobCausation != 3 && d3.noJobCausation != 5) {
							_t.list4.goR22 = true
						}

						function helpJobPoor() {
							var str = '',
								helpA = [];
							if(d3.helpJobPoorOne != 0) {
								var dtr = '';
								if(d3.trainType && d3.trainType.length > 0) {
									dtr = '(' + getStrType(d3.trainType, trainTypeA) + ')'
								}
								helpA.push(helpJobPoorA[0].name + dtr)
							}
							if(d3.helpJobPoorTwo != 0) {
								helpA.push(helpJobPoorA[1].name)
							}
							if(d3.helpJobPoorThree != 0) {
								helpA.push(helpJobPoorA[2].name)
							}
							if(d3.helpJobPoorFour != 0) {
								helpA.push(helpJobPoorA[3].name)
							}
							if(d3.helpJobPoorFive != 0) {
								var ftr = '';
								if(d3.otherHelp && d3.otherHelp.length > 0) {
									ftr = '(' + getStrType(d3.otherHelp, otherHelpA) + ')'
								}
								helpA.push(helpJobPoorA[4].name + ftr)
							}
							if(d3.helpJobPoorSix != 0) {
								helpA.push(helpJobPoorA[5].name)
							}
							str = helpA.join('、');
							return str
						}

						function jobPoorNeeds() {
							var str = '',
								jobA = [];
							if(d3.jobPoorNeedsOne != 0) {
								var dtr1 = '';
								if(d3.jobPoorNeedsOne && d3.jobPoorNeedsOne.length > 0) {
									dtr1 = '(' + getStrType(d3.jobPoorNeedsOne, jobPoorNeeds1A) + ')'
								}
								jobA.push(jobPoorNeedsA[0].name + dtr1)
							}
							if(d3.jobPoorNeedsTwo != 0) {
								var dtr2 = '';
								if(d3.jobPoorNeedsTwo && d3.jobPoorNeedsTwo.length > 0) {
									dtr2 = '(' + getStrType(d3.jobPoorNeedsTwo, jobPoorNeeds2A) + ')'
								}
								jobA.push(jobPoorNeedsA[1].name + dtr2)
							}
							if(d3.jobPoorNeedsThree != 0) {
								var dtr3 = '';
								if(d3.jobPoorNeedsThree && d3.jobPoorNeedsThree.length > 0) {
									dtr3 = '(' + getStrType(d3.jobPoorNeedsThree, jobPoorNeeds3A) + ')'
								}
								jobA.push(jobPoorNeedsA[2].name + dtr3)
							}
							if(d3.jobPoorNeedsFour != 0) {
								var dtr4 = '';
								if(d3.jobPoorNeedsFour && d3.jobPoorNeedsFour.length > 0) {
									dtr4 = '(' + getStrType(d3.jobPoorNeedsFour, jobPoorNeeds4A) + ')'
								}
								jobA.push(jobPoorNeedsA[3].name + dtr4)
							}
							if(d3.jobPoorNeedsFive != 0) {
								var dtr5 = '';
								if(d3.jobPoorNeedsFive != 5) {
									if(d3.jobPoorNeedsFive && d3.jobPoorNeedsFive.length > 0) {
										dtr5 = '(' + getStrType(d3.jobPoorNeedsFive, jobPoorNeeds5A) + ')'
									}
								}
								jobA.push(jobPoorNeedsA[4].name + dtr5)
							}
							if(d3.jobPoorNeedsSix != 0) {
								jobA.push(jobPoorNeedsA[5].name)
							}
							str = jobA.join('、');
							return str
						}

						function disabilityJobType(v, arr) {
							var str = '',
								pA = [],
								sA = [];
							pA.push(v.toString());
							if(pA.indexOf('1') != -1) {
								var dtr = '';
								if(d3.quotaSchemeEmployment) {
									dtr = '(' + quotaSchemeEmploymentA[d3.quotaSchemeEmployment - 1].name + ')'
								}
								sA.push(arr[0].name + dtr)
							}
							if(pA.indexOf('2') != -1) {
								sA.push(arr[1].name)
							}
							if(pA.indexOf('3') != -1) {
								sA.push(arr[2].name)
							}
							if(pA.indexOf('4') != -1) {
								sA.push(arr[3].name)
							}
							if(pA.indexOf('5') != -1) {
								sA.push(arr[4].name)
							}
							if(pA.indexOf('6') != -1) {
								sA.push(arr[5].name)
							}
							if(pA.indexOf('7') != -1) {
								sA.push(arr[6].name)
							}
							str = sA.join('、');
							return str
						}
						_t.list4.haveJob = d3.haveJob ? trueFalseA[d3.haveJob - 1] : '暂无';
						_t.list4.unempRegistration = d3.unempRegistration ? trueFalseA[d3.unempRegistration - 1] : '暂无';
						_t.list4.disabilityJobType = disabilityJobType(d3.disabilityJobType, disabilityJobTypeA) || '暂无';
						_t.list4.sourceOfIncome = getStrType(d3.sourceOfIncome, sourceOfIncomeA) || '暂无';
						_t.list4.noJobCausation = getStrType(d3.noJobCausation, noJobCausationAs) || '暂无';
						_t.list4.helpJobPoor = helpJobPoor() || '暂无';
						_t.list4.jobPoorNeeds = jobPoorNeeds() || '暂无';
						if(isModify) {
							if(old3) {
								//数据比较
								_t.list4.ifR16p = getModify(d3.haveJob, old3.haveJob);
								_t.list4.ifR162p = getModify(d3.unempRegistration, old3.unempRegistration);
								_t.list4.ifR17p = getModify(d3.quotaSchemeEmployment, old3.quotaSchemeEmployment) || getModify(d3.disabilityJobType, old3.disabilityJobType);
								_t.list4.ifR18p = getModify(d3.sourceOfIncome, old3.sourceOfIncome);
								_t.list4.ifR19p = getModify(d3.noJobCausation, old3.noJobCausation);
								_t.list4.ifR20p = getModify(d3.helpJobPoorOne, old3.helpJobPoorOne) ||
									getModify(d3.trainType, old3.trainType) ||
									getModify(d3.helpJobPoorTwo, old3.helpJobPoorTwo) ||
									getModify(d3.helpJobPoorThree, old3.helpJobPoorThree) ||
									getModify(d3.helpJobPoorFour, old3.helpJobPoorFour) ||
									getModify(d3.helpJobPoorFive, old3.helpJobPoorFive) ||
									getModify(d3.otherHelp, old3.otherHelp) ||
									getModify(d3.helpJobPoorSix, old3.helpJobPoorSix);
								_t.list4.ifR21p = getModify(d3.jobPoorNeedsOne, old3.jobPoorNeedsOne) ||
									getModify(d3.jobPoorNeedsTwo, old3.jobPoorNeedsTwo) ||
									getModify(d3.jobPoorNeedsThree, old3.jobPoorNeedsThree) ||
									getModify(d3.jobPoorNeedsFour, old3.jobPoorNeedsFour) ||
									getModify(d3.jobPoorNeedsFive, old3.jobPoorNeedsFive) ||
									getModify(d3.jobPoorNeedsSix, old3.jobPoorNeedsSix);
								if(_t.list4.ifR16p || _t.list4.ifR162p || _t.list4.ifR17p ||
									_t.list4.ifR18p || _t.list4.ifR19p || _t.list4.ifR20p || _t.list4.ifR21p) {
									_t.list4.if4p = true
								}
							}

						}

					}
				}

				//write5
				// var isShowR22 = true,goR25 = true,isShowR24 = true,isShowR26 = true,isShowR29 = true,isShowR30 = true;
				if(_t.is5) {
					if(d4) {
						if(_t.is4) {
							if(d4.noJobCausation && d4.noJobCausation == 1) {
								_t.list5.goR25 = true
							}
						}
						if(_t.list5.goR25 || ageNum < 16) {
							_t.list5.isShowR22 = false;
							_t.list5.isShowR23 = false;
							_t.list5.isShowR24 = false;
						}
						if(ageNum > 59) {
							_t.list5.isShowR24 = false;
						}
						if(d4.medicalInsurance == 2) {
							_t.list5.isShowR26 = false
						}
						if(ageNum < 16 || ageNum > 59) {
							_t.list5.isShowR29 = false;
							_t.list5.isShowR30 = false;
						}
						if(d4.supportService == 1) {
							_t.list5.isShowR30 = false;
						}

						function socialAssistance() {
							var str = '',
								socialA = [];
							if(d4.socialAssistanceOne != 0) {
								var str1 = '';
								if(d4.rural) {
									str1 = '(' + getStrType(d4.rural, soA1Farmer) + ')'
								}
								if(d4.town) {
									str1 = '(' + getStrType(d4.town, soA1UnFarmer) + ')'
								}
								socialA.push(socialAssistanceAs[0].name + str1)
							}
							if(d4.socialAssistanceTwo != 0) {
								socialA.push(socialAssistanceAs[1].name)
							}
							if(d4.socialAssistanceThree != 0) {
								socialA.push(socialAssistanceAs[2].name)
							}
							if(d4.socialAssistanceFour != 0) {
								var str4 = '';
								if(d4.otherSalvation) {
									str4 = '(' + getStrType(d4.otherSalvation, soA4) + ')'
								}
								//socialA.push(socialAssistanceAs[3].name +str4)
								socialA.push('其他救助' + str4)
							}
							if(d4.socialAssistanceFive != 0) {
								socialA.push(socialAssistanceAs[4].name)
							}
							if(d4.socialAssistanceSix != 0) {
								socialA.push(socialAssistanceAs[5].name)
							}
							str = socialA.join('、');
							return str
						}

						function socialWelfareutiSubsidy() {
							var str = '',
								socialA = [];
							if(d4.socialWelfareutiSubsidyOne != 0) {
								socialA.push(socialWelfareutiSubsidyA[0].name)
							}
							if(d4.socialWelfareutiSubsidyTwo != 0) {
								socialA.push(socialWelfareutiSubsidyA[1].name)
							}
							if(d4.socialWelfareutiSubsidyThree != 0) {
								//socialA.push(socialWelfareutiSubsidyA[2].name+'('+getStrType(d4.otherSubsidies,syA3)+')')
								socialA.push('其他福利补贴(' + getStrType(d4.otherSubsidies, syA3) + ')')
							}
							if(d4.socialWelfareutiSubsidyFour != 0) {
								socialA.push(socialWelfareutiSubsidyA[3].name)
							}
							str = socialA.join('、');
							return str
						}

						function securityOfSubsistence() {
							var str = '',
								socialA = [];
							if(d4.securityOfSubsistenceOne != 0) {
								socialA.push(securityOfSubsistenceA[0].name)
							}
							if(d4.securityOfSubsistenceTwo != 0) {
								socialA.push(securityOfSubsistenceA[1].name)
							}
							if(d4.securityOfSubsistenceThree != 0) {
								socialA.push(securityOfSubsistenceA[2].name)
							}
							if(d4.securityOfSubsistenceFour != 0) {
								socialA.push(securityOfSubsistenceA[3].name)
							}
							str = socialA.join('、');
							return str
						}

						function supportServiceNeeds() {
							var str = '';
							if(d4.supportService != 0) {
								if(d4.supportService && d4.supportService == 1) {
									str = '(' + supportServiceTypeA[d4.supportServiceType - 1].name + ')'
								}
								return trueFalseA[d4.supportService - 1] + str
							} else {
								return str
							}
						}
						_t.list5.securityOfSubsistence = securityOfSubsistence() || '暂无';
						_t.list5.endowmentInsurance = d4.endowmentInsurance ? trueFalseA[d4.endowmentInsurance - 1] : '暂无';
						if(d4.endowmentInsurance == 2) {
							_t.list5.isShowR24 = false;
						}
						_t.list5.endowmentInsuranceSubsidy = (d4.endowmentInsuranceSubsidy && d4.endowmentInsuranceSubsidy != 0) ? trueFalseA[d4.endowmentInsuranceSubsidy - 1] : '暂无';
						_t.list5.medicalInsurance = d4.medicalInsurance ? trueFalseA[d4.medicalInsurance - 1] : '暂无';
						_t.list5.medicalInsuranceSubsidy = d4.medicalInsuranceSubsidy ? trueFalseA[d4.medicalInsuranceSubsidy - 1] : '暂无';
						_t.list5.socialAssistance = socialAssistance() || '暂无';
						_t.list5.socialWelfareutiSubsidy = socialWelfareutiSubsidy() || '暂无';
						if(_t.list5.isShowR29) {
							_t.list5.supportServiceNeeds = (d4.supportService && d4.supportService != 0) ? supportServiceNeeds() : '暂无';
						}
						if(_t.list5.isShowR30) {
							_t.list5.supportServiceType = (d4.supportServiceNeeds && d4.supportServiceNeeds != 0) ? supportServiceNeedsA[d4.supportServiceNeeds - 1].name : '暂无';
						}
						_t.list5.supportService = d4.supportService ? trueFalseA[d4.supportService - 1] : '暂无';

						if(isModify) {
							if(old4) {
								//数据比较
								_t.list5.ifR22p = getModify(d4.securityOfSubsistenceOne, old4.securityOfSubsistenceOne) ||
									getModify(d4.securityOfSubsistenceTwo, old4.securityOfSubsistenceTwo) ||
									getModify(d4.securityOfSubsistenceThree, old4.securityOfSubsistenceThree) ||
									getModify(d4.securityOfSubsistenceFour, old4.securityOfSubsistenceFour);
								_t.list5.ifR23p = getModify(d4.endowmentInsurance, old4.endowmentInsurance);
								_t.list5.ifR24p = getModify(d4.endowmentInsuranceSubsidy, old4.endowmentInsuranceSubsidy);
								_t.list5.ifR25p = getModify(d4.medicalInsurance, old4.medicalInsurance);
								_t.list5.ifR26p = getModify(d4.medicalInsuranceSubsidy, old4.medicalInsuranceSubsidy);
								_t.list5.ifR27p = getModify(d4.socialAssistanceOne, old4.socialAssistanceOne) ||
									getModify(d4.rural, old4.rural) ||
									getModify(d4.town, old4.town) ||
									getModify(d4.socialAssistanceTwo, old4.socialAssistanceTwo) ||
									getModify(d4.socialAssistanceThree, old4.socialAssistanceThree) ||
									getModify(d4.socialAssistanceFour, old4.socialAssistanceFour) ||
									getModify(d4.otherSalvation, old4.otherSalvation) ||
									getModify(d4.socialAssistanceFive, old4.socialAssistanceFive) ||
									getModify(d4.socialAssistanceSix, old4.socialAssistanceSix);
								_t.list5.ifR28p = getModify(d4.socialWelfareutiSubsidyOne, old4.socialWelfareutiSubsidyOne) ||
									getModify(d4.socialWelfareutiSubsidyThree, old4.socialWelfareutiSubsidyThree) ||
									getModify(d4.socialWelfareutiSubsidyTwo, old4.socialWelfareutiSubsidyTwo) ||
									getModify(d4.otherSubsidies, old4.otherSubsidies) ||
									getModify(d4.socialWelfareutiSubsidyFour, old4.socialWelfareutiSubsidyFour);
								_t.list5.ifR29p = getModify(d4.supportService, old4.supportService);
								_t.list5.ifR30p = getModify(d4.supportServiceNeeds, old4.supportServiceNeeds);
								if(_t.list5.ifR22p || _t.list5.ifR23p || _t.list5.ifR24p || _t.list5.ifR25p || _t.list5.ifR26p || _t.list5.ifR27p || _t.list5.ifR28p ||
									_t.list5.ifR29p || _t.list5.ifR30p) {
									_t.list5.if5p = true
								}
							}

						}

					}
				}
				//write6
				//var isSR33 = true,isSR34 = true,isSR36 = true,isSG16 = true;
				if(_t.is6) {
					if(d5) {
						if(d5.otherDisease == 2) {
							_t.list6.isSR33 = false;
							_t.list6.isSR34 = false
						}
						if(_t.list6.isSR33 && d5.treat == 1) {
							_t.list6.isSR34 = false
						}

						function untreatedCause() {
							var str = '',
								untreatA = [];
							if(d5.untreatedCauseOne != 0) {
								untreatA.push(untreatedCauseA[0].name)
							}
							if(d5.untreatedCauseTwo != 0) {
								untreatA.push(untreatedCauseA[1].name)
							}
							if(d5.untreatedCauseThree != 0) {
								untreatA.push(untreatedCauseA[2].name)
							}
							if(d5.untreatedCauseFour != 0) {
								untreatA.push(untreatedCauseA[3].name)
							}
							if(d5.untreatedCauseFive != 0) {
								untreatA.push(untreatedCauseA[4].name)
							}
							str = untreatA.join('、');
							return str
						}

						function useService() {
							var str = '',
								useA = [];
							if(d5.useServiceOne != 0) {
								useA.push(useServiceA[0].name)
							}
							if(d5.useServiceTwo != 0) {
								useA.push(useServiceA[1].name)
							}
							if(d5.useServiceThree != 0) {
								useA.push(useServiceA[2].name)
							}
							if(d5.useServiceFour != 0) {
								useA.push(useServiceA[3].name)
							}
							if(d5.useServiceFive != 0) {
								useA.push(useServiceA[4].name)
							}
							if(d5.useServiceSix != 0) {
								useA.push(useServiceA[5].name)
							}
							str = useA.join('、');
							return str
						}

						function notRecoveredCause() {
							var str = '',
								useA = [];
							if(d5.notRecoveredCauseOne != 0) {
								useA.push(notRecoveredCauseA[0].name)
							}
							if(d5.notRecoveredCauseTwo != 0) {
								useA.push(notRecoveredCauseA[1].name)
							}
							if(d5.notRecoveredCauseThree != 0) {
								useA.push(notRecoveredCauseA[2].name)
							}
							if(d5.notRecoveredCauseFour != 0) {
								useA.push(notRecoveredCauseA[3].name)
							}
							str = useA.join('、');
							return str
						}

						function needService() {
							var str = '',
								useA = [];
							if(d5.needServiceOne != 0) {
								useA.push(needServiceA[0].name + '(' + getStrType(d5.surgery, needServiceA1) + ')')
							}
							if(d5.needServiceTwo != 0) {
								useA.push(needServiceA[1].name + '(' + getStrType(d5.medicinal, needServiceA2) + ')')
							}
							if(d5.needServiceThree != 0) {
								var str3 = '',
									sA = [];
								if(d5.functionVision) {
									sA.push(needServiceA3[0].name)
								}
								if(d5.functionHearing) {
									sA.push(needServiceA3[1].name)
								}
								if(d5.functionLimbs) {
									sA.push(needServiceA3[2].name)
								}
								if(d5.functionIntelligence) {
									sA.push(needServiceA3[3].name)
								}
								if(d5.functionSpirit) {
									sA.push(needServiceA3[4].name)
								}
								useA.push(needServiceA[2].name + '(' + sA.join(',') + ')')
							}
							if(d5.needServiceFour != 0) {
								var str4 = '',
									sA4 = [];
								if(d5.utensilVision) {
									sA4.push(needServiceA4[0].name)
								}
								if(d5.utensilHearing) {
									sA4.push(needServiceA4[1].name)
								}
								if(d5.utensilSpeech) {
									sA4.push(needServiceA4[2].name)
								}
								if(d5.utensilLimbs) {
									sA4.push(needServiceA4[3].name)
								}
								if(d5.utensilIntelligenc) {
									sA4.push(needServiceA4[4].name)
								}
								useA.push(needServiceA[3].name + '(' + sA4.join(',') + ')')
							}
							if(d5.needServiceFive != 0) {
								useA.push(needServiceA[4].name + '(' + getStrType(d5.nurse, needServiceA5) + ')')
							}
							if(d5.needServiceSix != 0) {
								useA.push(needServiceA[5].name)
							}
							str = useA.join('、');
							return str
						}
						if(d5.useServiceSix != 6) {
							_t.list6.isSR36 = false
						}
						if(ageNum > 18) {
							_t.list6.isSG16 = false;
						}
						_t.list6.familyDoctor = d5.familyDoctor ? trueFalseA[d5.familyDoctor - 1] : '暂无';
						_t.list6.otherDisease = d5.otherDisease ? trueFalseA[d5.otherDisease - 1] : '暂无';
						_t.list6.treat = d5.treat ? trueFalseA[d5.treat - 1] : '暂无';
						_t.list6.untreatedCause = untreatedCause() || '暂无';
						_t.list6.useService = useService() || '暂无';
						_t.list6.notRecoveredCause = notRecoveredCause() || '暂无';
						_t.list6.needService = needService() || '暂无';

						if(isModify) {
							if(old5) {
								//数据比较
								_t.list6.ifR31p = getModify(d5.familyDoctor, old5.familyDoctor);
								_t.list6.ifR32p = getModify(d5.otherDisease, old5.otherDisease);
								_t.list6.ifR33p = getModify(d5.treat, old5.treat);
								_t.list6.ifR34p = getModify(d5.untreatedCauseOne, old5.untreatedCauseOne) ||
									getModify(d5.untreatedCauseTwo, old5.untreatedCauseTwo) ||
									getModify(d5.untreatedCauseThree, old5.untreatedCauseThree) ||
									getModify(d5.untreatedCauseFour, old5.untreatedCauseFour) ||
									getModify(d5.untreatedCauseFive, old5.untreatedCauseFive);
								_t.list6.ifR35p = getModify(d5.useServiceOne, old5.useServiceOne) ||
									getModify(d5.useServiceTwo, old5.useServiceTwo) ||
									getModify(d5.useServiceThree, old5.useServiceThree) ||
									getModify(d5.useServiceFour, old5.useServiceFour) ||
									getModify(d5.useServiceFive, old5.useServiceFive) ||
									getModify(d5.useServiceSix, old5.useServiceSix);
								_t.list6.ifR36p = getModify(d5.notRecoveredCauseOne, old5.notRecoveredCauseOne) ||
									getModify(d5.notRecoveredCauseTwo, old5.notRecoveredCauseTwo) ||
									getModify(d5.notRecoveredCauseThree, old5.notRecoveredCauseThree) ||
									getModify(d5.notRecoveredCauseFour, old5.notRecoveredCauseFour);
								_t.list6.ifR37p = getModify(d5.needServiceOne, old5.needServiceOne) ||
									getModify(d5.surgery, old5.surgery) ||
									getModify(d5.needServiceTwo, old5.needServiceTwo) ||
									getModify(d5.medicinal, old5.medicinal) ||
									getModify(d5.needServiceThree, old5.needServiceThree) ||
									getModify(d5.functionHearing, old5.functionHearing) ||
									getModify(d5.functionVision, old5.functionVision) ||
									getModify(d5.functionLimbs, old5.functionLimbs) ||
									getModify(d5.functionIntelligence, old5.functionIntelligence) ||
									getModify(d5.functionSpirit, old5.functionSpirit) ||
									getModify(d5.needServiceFour, old5.needServiceFour) ||
									getModify(d5.utensilVision, old5.utensilVision) ||
									getModify(d5.utensilHearing, old5.utensilHearing) ||
									getModify(d5.utensilSpeech, old5.utensilSpeech) ||
									getModify(d5.utensilLimbs, old5.utensilLimbs) ||
									getModify(d5.utensilIntelligenc, old5.utensilIntelligenc) ||
									getModify(d5.needServiceFive, old5.needServiceFive) ||
									getModify(d5.nurse, old5.nurse) ||
									getModify(d5.needServiceSix, old5.needServiceSix);
								if(_t.list6.ifR31p || _t.list6.ifR32p || _t.list6.ifR33p || _t.list6.ifR34p || _t.list6.ifR35p || _t.list6.ifR36p || _t.list6.ifR37p) {
									_t.list6.if6p = true
								}
							}

						}

					}
				}
				//write7
				if(_t.is3569) {
					if(d6) {
						if(isModify) {
							if(old6) {
								_t.list7.ifR38p = getModify(d6.barrierFreeModification, old6.barrierFreeModification);
								_t.list7.ifR39p = getModify(d6.barrierFreeModificationNeedsOne, old6.barrierFreeModificationNeedsOne) ||
									getModify(d6.barrierFreeModificationNeedsTwo, old6.barrierFreeModificationNeedsTwo) ||
									getModify(d6.barrierFreeModificationNeedsThree, old6.barrierFreeModificationNeedsThree) ||
									getModify(d6.barrierFreeModificationNeedsFour, old6.barrierFreeModificationNeedsFour) ||
									getModify(d6.barrierFreeModificationNeedsFive, old6.barrierFreeModificationNeedsFive) ||
									getModify(d6.barrierFreeModificationNeedsSix, old6.barrierFreeModificationNeedsSix) ||
									getModify(d6.barrierFreeModificationNeedsSeven, old6.barrierFreeModificationNeedsSeven) ||
									getModify(d6.barrierFreeModificationNeedsEight, old6.barrierFreeModificationNeedsEight) ||
									getModify(d6.barrierFreeModificationNeedsNine, old6.barrierFreeModificationNeedsNine);
								if(_t.list7.ifR38p || _t.list7.ifR39p) {
									_t.list7.if8p = true
								}
							}

						}

						function barrierFreeModificationNeeds() {
							var str = '',
								useA = [];
							if(d6.barrierFreeModificationNeedsOne) {
								useA.push(barrierFreeModificationNeedsA[0].name)
							}
							if(d6.barrierFreeModificationNeedsTwo) {
								useA.push(barrierFreeModificationNeedsA[1].name)
							}
							if(d6.barrierFreeModificationNeedsThree) {
								useA.push(barrierFreeModificationNeedsA[2].name)
							}
							if(d6.barrierFreeModificationNeedsFour) {
								useA.push(barrierFreeModificationNeedsA[3].name)
							}
							if(d6.barrierFreeModificationNeedsFive) {
								useA.push(barrierFreeModificationNeedsA[4].name)
							}
							if(d6.barrierFreeModificationNeedsSix) {
								useA.push(barrierFreeModificationNeedsA[5].name)
							}
							if(d6.barrierFreeModificationNeedsSeven) {
								useA.push(barrierFreeModificationNeedsA[6].name)
							}
							if(d6.barrierFreeModificationNeedsEight) {
								useA.push(barrierFreeModificationNeedsA[7].name)
							}
							if(d6.barrierFreeModificationNeedsNine) {
								useA.push(barrierFreeModificationNeedsA[8].name)
							}
							str = useA.join('、');
							return str
						}
						_t.list7.barrierFreeModification = d6.barrierFreeModification ? trueFalseA[d6.barrierFreeModification - 1] : '暂无';
						_t.list7.barrierFreeModificationNeeds = barrierFreeModificationNeeds() || '暂无';
					}
				}
				//write8
				//var isSR41 = true;
				if(_t.is8) {
					if(d6) {
						if(isModify) {
							if(old6) {
								//数据比较
								_t.list8.ifR40p = getModify(d6.jionCultureSports, old6.jionCultureSports);
								_t.list8.ifR41p = getModify(d6.notJionCultureSportsCause, old6.notJionCultureSportsCause);
								if(_t.list8.ifR40p || _t.list8.ifR41p) {
									_t.list8.if8p = true
								}
							}

						}

						if(d6.jionCultureSports == 1) {
							_t.list8.isSR41 = false
						}

						function notJionCultureSportsCause() {
							var str = '',
								useA = [];
							if(d6.notJionCultureSportsCauseOne && d6.notJionCultureSportsCauseOne != 0) {
								useA.push(notJionCultureSportsCauseA[0].name)
							}
							if(d6.notJionCultureSportsCauseTwo && d6.notJionCultureSportsCauseTwo != 0) {
								useA.push(notJionCultureSportsCauseA[1].name)
							}
							if(d6.notJionCultureSportsCauseThree && d6.notJionCultureSportsCauseThree != 0) {
								useA.push(notJionCultureSportsCauseA[2].name)
							}
							if(d6.notJionCultureSportsCauseFour && d6.notJionCultureSportsCauseFour != 0) {
								useA.push(notJionCultureSportsCauseA[3].name)
							}
							str = useA.join('、');
							return str
						}
						_t.list8.jionCultureSports = d6.jionCultureSports ? trueFalseA[d6.jionCultureSports - 1] : '暂无';
						_t.list8.notJionCultureSportsCause = notJionCultureSportsCause() || '暂无';
					}
				}
				//writeG
				//var isSR41 = true;
				if(_t.is3569) {
					if(dG && JSON.stringify(dG) != '{}') {
						_t.listG.nation = dG.nation ? nationA[nationNumA.indexOf(dG.nation)] : '暂无';
						_t.listG.politicalStatus = dG.politicalStatus ? politicalStatusA[dG.politicalStatus - 1] : '暂无';
						_t.listG.familyPopulation = dG.familyPopulation || '暂无';
						//						_t.listG.familyPopulation = parseInt(dG.familyPopulation) || '暂无';
						_t.listG.address = dG.address || '暂无';
						_t.listG.leftBehindChildren = dG.leftBehindChildren ? trueFalseA[dG.leftBehindChildren - 1] : '暂无';
						_t.listG.feathName = getFeature() || '暂无';
						if(d1.residenceType != 1) {
							_t.listG.houseNeed = dG.houseNeed ? houseNeedA[dG.houseNeed - 1] : '暂无';
						} else {
							_t.listG.countryHouseNeed = dG.countryHouseNeed ? countryHouseNeedA[dG.countryHouseNeed - 1] : '暂无';
						}
						_t.listG.incomePerHead = dG.incomePerHead || '暂无';
						_t.listG.scholarship = (dG.scholarship && dG.scholarship != 0) ? trueFalseA[dG.scholarship - 1] : '暂无';
						_t.listG.educationalNeeds = (dG.educationalNeeds > 0) ? educationalNeedsA[dG.educationalNeeds - 1] : '暂无';
						_t.listG.professionalCertificate = dG.professionalCertificate ? trueFalseA[dG.professionalCertificate - 1] : '暂无';
						if(dG.professionalCertificate == 2) {
							_t.listG.isShowG13 = false
						}

						function professionalCertificateType(v, arr) {
							var str = '',
								pA = [],
								sA = [];
							if(v && v.length > 0) {
								pA = v.split(',')
							}
							if(pA.indexOf('1') != -1) {
								sA.push(arr[0].name)
							}
							if(pA.indexOf('2') != -1) {
								sA.push(arr[1].name)
							}
							if(pA.indexOf('3') != -1) {
								sA.push(arr[2].name)
							}
							if(pA.indexOf('4') != -1) {
								sA.push(arr[3].name)
							}
							if(pA.indexOf('5') != -1) {
								sA.push(arr[4].name)
							}
							if(pA.indexOf('6') != -1) {
								sA.push(arr[5].name)
							}
							if(pA.indexOf('7') != -1) {
								sA.push(arr[6].name)
							}
							if(pA.indexOf('8') != -1) {
								sA.push(arr[7].name)
							}
							if(pA.indexOf('9') != -1) {
								var dtr = '';
								if(dG.driveType && dG.driveType.length > 0) {
									dtr = '(' + getStrType(dG.driveType, driveTypeA) + ')'
								}
								sA.push(arr[8].name + dtr)
							}
							if(pA.indexOf('10') != -1) {
								sA.push(arr[9].name)
							}
							str = sA.join('、');
							return str
						}
						_t.listG.professionalCertificateType = professionalCertificateType(dG.professionalCertificateType, professionalCertificateTypeA) || '暂无';
						_t.listG.businessType = getStrType(dG.businessType, businessTypeA) || '暂无';
						_t.listG.socialSecurityNeed = getStrType(dG.socialSecurityNeed, socialSecurityNeedA) || '暂无';
						_t.listG.disabledChildRecure = getStrType(dG.disabledChildRecure, disabledChildRecureA) || '暂无';
						_t.listG.getLegalService = dG.getLegalService ? trueFalseA[dG.getLegalService - 1] : '暂无';
						_t.listG.legalServiceNeeds = getStrType(dG.legalServiceNeeds, legalServiceNeedsA) || '暂无';
						var like1 = '',
							like2 = '';
						if(dG.culture) {
							var cA = dG.culture.split(','),
								showA = [];
							$.each(cA, function(i, v) {
								var str = cultureA[v - 1].name;
								if(v == 2) {
									str += '(' + getStrType(dG.literature, cultureA2) + ')';
								}
								if(v == 6) {
									str += '(' + getStrType(dG.boondoggle, cultureA6) + ')';
								}
								showA.push(str);
							});
							like1 = '文化：' + showA.join('、') + ';';
						}
						if(dG.sports) {
							like2 = '体育：' + getStrType(dG.sports, sportsA) + '、'
						}
						_t.listG.like = like1 + like2 || '暂无';
						_t.listG.height = dG.height || '暂无';
						_t.listG.cultureSportsNeeds = getStrType(dG.cultureSportsNeeds, cultureSportsNeedsA) || '暂无';

						if(isModify) {
							if(oldG) {
								//数据比较
								_t.listG.ifG1p = getModify(dG.nation, oldG.nation);
								_t.listG.ifG2p = getModify(dG.politicalStatus, oldG.politicalStatus);
								_t.listG.ifG3p = getModify(dG.familyPopulation, oldG.familyPopulation);
								// _t.listG.ifG3p = getModify(parseInt(dG.familyPopulation),parseInt(oldG.familyPopulation));
								_t.listG.ifG4p = getModify(dG.address, oldG.address);
								_t.listG.ifG5p = getModify(dG.leftBehindChildren, oldG.leftBehindChildren);
								_t.listG.ifG6p = getModify(dG.featureOne, oldG.featureOne) ||
									getModify(dG.featureTwo, oldG.featureTwo) ||
									getModify(dG.featureThree, oldG.featureThree) ||
									getModify(dG.featureFour, oldG.featureFour) ||
									getModify(dG.featureFive, oldG.featureFive) ||
									getModify(dG.featureSix, oldG.featureSix);
								_t.listG.ifG7p = getModify(dG.houseNeed, oldG.houseNeed);
								_t.listG.ifG8p = getModify(dG.countryHouseNeed, oldG.countryHouseNeed);
								_t.listG.ifG9p = getModify(dG.incomePerHead, oldG.incomePerHead);
								_t.listG.ifG10p = getModify(dG.scholarship, oldG.scholarship);
								_t.listG.ifG11p = getModify(dG.educationalNeeds, oldG.educationalNeeds);
								_t.listG.ifG12p = getModify(dG.professionalCertificate, oldG.professionalCertificate);
								_t.listG.ifG13p = getModify(dG.professionalCertificateType, oldG.professionalCertificateType);
								_t.listG.ifG14p = getModify(dG.businessType, oldG.businessType);
								_t.listG.ifG15p = getModify(dG.socialSecurityNeed, oldG.socialSecurityNeed);
								_t.listG.ifG16p = getModify(dG.disabledChildRecure, oldG.disabledChildRecure);
								_t.listG.ifG17p = getModify(dG.getLegalService, oldG.getLegalService);
								_t.listG.ifG18p = getModify(dG.legalServiceNeeds, oldG.legalServiceNeeds);
								_t.listG.ifG19p = getModify(dG.culture, oldG.culture) || getModify(dG.sports, oldG.sports) || getModify(dG.literature, oldG.literature) || getModify(dG.boondoggle, oldG.boondoggle);
								_t.listG.ifHeightp = getModify(dG.height, oldG.height);
								_t.listG.ifG20p = getModify(dG.cultureSportsNeeds, oldG.cultureSportsNeeds);

								if(_t.listG.ifG1p || _t.listG.ifG2p || _t.listG.ifG3p || _t.listG.ifG4p || _t.listG.ifG5p || _t.listG.ifG6p || _t.listG.ifG7p ||
									_t.listG.ifG8p || _t.listG.ifG9p || _t.listG.ifG10p || _t.listG.ifG11p || _t.listG.ifG12p || _t.listG.ifG13p || _t.listG.ifG14p ||
									_t.listG.ifG15p || _t.listG.ifG16p || _t.listG.ifG17p || _t.listG.ifG18p || _t.listG.ifG19p || _t.listG.ifHeightp || _t.listG.ifG20p) {
									_t.listG.ifGp = true
								}
							}

						}
					}

				}
			} else {
				_t.is3569 = false;
				_t.is3 = false;
				_t.is4 = false;
				_t.is5 = false;
				_t.is6 = false;
				_t.is3569 = false;
				_t.is8 = false;
			}
			//write9
			if(d6) {

				_t.list9.householdRegisterName = d6.householdRegisterName || '暂无';
				_t.list9.idCard = d6.idCard || '暂无';
				_t.list9.declarant = d6.declarant || '暂无';
				_t.list9.infoAcquisitionMan = d6.infoAcquisitionMan || '暂无';
				_t.list9.submitDate = d6.submitDate || '暂无';
				_t.list9.note = d6.note || '暂无';

				if(isModify) {
					//数据比较
					if(old6) {
						_t.list9.ift1 = getModify(d6.householdRegisterName, old6.householdRegisterName);
						_t.list9.ift2 = getModify(d6.idCard, old6.idCard);
						_t.list9.ift3 = getModify(d6.declarant, old6.declarant);
						_t.list9.ift4 = getModify(d6.infoAcquisitionMan, old6.infoAcquisitionMan);
						_t.list9.ift5 = getModify(d6.submitDate, old6.submitDate);
						_t.list9.ift6 = getModify(d6.note, old6.note);
						if(_t.list9.ift1 || _t.list9.ift2 || _t.list9.ift3 || _t.list9.ift4 || _t.list9.ift5 || _t.list9.ift6) {
							_t.list9.ift1 = true
						}
					}

				}
			}
			setTimeout(function() {
				$('span').each(function() {
					var text = $(this).text();
					if(text == '暂无') {
						$(this).css('color', '#00c701')
					}
				})
			}, 1000);
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			// Code that will run only after the
			// entire view has been rendered
			appInit();
			//this.getAppData();
		})

	}
});
setTimeout(function() {
	w.getAppData();

}, 1000);

//tips
$('body').on('click', '.tips', function() {
	var code = $(this).attr('data-code');
	tips(code)
});

function getParam(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for(var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable) {
			return pair[1];
		}
	}
	return(false);
}
//have a try
/*function gotoTop(){
    $('#detail').scrollTop(0);
}

function load (){

    document.getElementById('detail').addEventListener('touchstart',touch, true);
    document.getElementById('detail').addEventListener('touchmove',touch, true);
    document.getElementById('detail').addEventListener('touchend',touch, true);

    function touch (event){
        var event = event || window.event;

        var oInp = document.getElementById("inp");

        switch(event.type){
            case "touchstart":
                break;
            case "touchend":
                oInp.innerHTML =$('#detail').scrollTop();
                break;
            case "touchmove":
                break;
        }

    }
}
window.addEventListener('load',load, false);*/