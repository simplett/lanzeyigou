import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	userinfo: {
		uname: "admin",
		token: localStorage.getItem("token"),
	},
	SearchContent: "手机",
	uid: "",
	say_uid: "",
	guanzhu: "",
	shoucan: "",
	shoucanlist: [],
	productlist: [{
			"codelist": [
				101,
				102,
				103,
				104,
				105,
				106
			],
			"name": [
				"炫酷电脑", "手机一族", "相机拍摄", "智能穿戴", "电脑周边", "网络设备"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"
			],
			"divstyle": "linear-gradient(45deg, #c4e4ff, #91ccff)"
		},
		{
			"codelist": [
				201,
				202,
				203,
				204,
				205,
				206
			],
			"name": [
				"运动器材", "户外运动", "健身塑形", "球类包陪", "小众运动", "运动鞋"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"
			],
			"divstyle": "linear-gradient(45deg, #f4c9ff, #ff9eee)"
		},
		{
			"codelist": [
				301,
				302,
				303,
				304,
				305,
				306
			],
			"name": [
				"运动风格", "休闲风格", "商务风格", "百搭风格", "街头风格", "简约风格"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"
			],
			"divstyle": "#ffd0dc"
		},
		{
			"codelist": [
				401,
				402,
				403,
				404,
				405,
				406
			],
			"name": [
				"新潮搭配", "服饰配饰", "首饰手表", "珠宝一类", "眼睛一族", "各种包包"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"
			],
			"divstyle": "#ffd0dc"
		},
		{
			"codelist": [
				501,
				502,
				503,
				504,
				505,
				506
			],
			"name": [
				"厨卫电器", "小家电", "环境电器", "大家电", "温控电气", "其他电器"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"
			],
			"divstyle": "#ffd0dc"
		},
		{
			"codelist": [
				601,
				602,
				603,
				604,
				605,
				606
			],
			"name": [
				"宠物玩具", "宠物零食", "喂食器", "宠物", "宠物药品", "宠物之家"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"
			],
			"divstyle": "#ffd0dc"
		},
		{
			"codelist": [
				701,
				702,
				703,
				704,
				705,
				706
			],
			"name": [
				"文具教具", "餐饮用具", "厨房用品", "床上用品", "家居日用", "其他日用"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"
			],
			"divstyle": "#ffe0cd"
		},
		{
			"codelist": [
				801,
				802,
				803,
				804,
				805,
				806
			],
			"name": [
				"国际名著", "工具用书", "课本教材", "科普类书", "小说大全", "100本必读"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"
			],
			"divstyle": "#ffe0cd"
		},
		{
			"codelist": [
				901,
				902,
				903,
				904,
				905,
				906
			],
			"name": [
				"化妆彩妆", "护理护肤", "口红卖场", "美容美颜", "香水一类", "滋生面膜"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"
			],
			"divstyle": "#ffe0cd"
		},
		{
			"codelist": [
				1001,
				1002,
				1003,
				1004,
				1005,
				1006
			],
			"name": [
				"计生用品", "外用理疗", "传统滋补", "保健品", "养生药品", "养生食物"
			],
			"imgurl": [
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png",
				"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"
			],
			"divstyle": "#ffe0cd"
		}
	],
	code: 0,
	summsg: {
		"00": [
			["2019-05-45", "2019-05-45"],
			[{
					"user": "you",
					"msg": "616516311111111111111111111111111111111111111111111111111111111"
				},
				{
					"user": "you",
					"msg": "616516311111111111111111111111111111111111111111111111111111111"
				}
			], "00" ["2019-05-45"],
			[{
				"user": "me",
				"msg": "616516"
			}], "00"
		]
	}
}
console.log(state.userinfo,"这是初始时候检查本地的token");
const mutations = {
	INIT_SUMMSG(state,uid)
	{
		if (state.summsg[uid] == undefined) {
			state.summsg[uid] = [
				[]
			];
			// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", item[0], item[1], item[2], item);
			state.summsg[uid][0] = [];
			// console.log("&&&&&&&&&&&&&&&&&&&&&", summessage[this.uid][0]);
			state.summsg[uid][1] = [];
			state.summsg[uid][2] = '';
			state.summsg[uid][0].push("111111");
			state.summsg[uid][1].push({
				"user": "me",
				"msg": "hello"
			});
			state.summsg[uid][2] = uid;
		}
	},
	SEND_MSG(state, data, uid) {
		if (state.summsg[uid] == undefined) {
			state.summsg[uid] = [
				[]
			];
			// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", item[0], item[1], item[2], item);
			state.summsg[uid][0] = [];
			// console.log("&&&&&&&&&&&&&&&&&&&&&", summessage[this.uid][0]);
			state.summsg[uid][1] = [];
			state.summsg[uid][2] = '';
			state.summsg[uid][0].push("111111");
			state.summsg[uid][1].push({
				"user": "me",
				"msg": data
			});
			state.summsg[uid][2] = uid;
		} else {
			state.summsg[uid][0].push("111111");
			state.summsg[uid][1].push({
				"user": "me",
				"msg": data
			});
			state.summsg[uid][2] = uid;
			console.log("发送一次")
		}
		console.log("发消息函数被触发")
	},
	SAVE_SUMMSH(state, data) {
		var msg = data;
		var summessage = {};
		if (msg) {
			console.log("收到的聊天消息", msg);
			summessage = msg.reduce(
				(prev, elem) => {
					console.log(JSON.parse(elem.message));
					var mymsg = JSON.parse(elem.message);
					if (prev[mymsg.suid] === undefined) {
						prev[mymsg.suid] = [
							[]
						];
						prev[mymsg.suid][0] = [];
						prev[mymsg.suid][1] = [];
						prev[mymsg.suid][2] = '';
						prev[mymsg.suid][0].unshift(mymsg.time);
						prev[mymsg.suid][1].unshift({
							"user": "you",
							"msg": mymsg.message
						})
						prev[mymsg.suid][2] = mymsg.suid;
						// this.totime = prev[mymsg.suid][0][(prev[mymsg.suid][0]).length - 1].substr(11, 8);
						// this.tomsg = prev[mymsg.suid][1][(prev[mymsg.suid][1]).length - 1][msg];
					} else {
						prev[mymsg.suid][0].unshift(mymsg.time);
						prev[mymsg.suid][1].unshift({
							"user": "you",
							"msg": mymsg.message
						})
						// this.totime = prev[mymsg.suid][0][(prev[mymsg.suid][0]).length - 1].substr(11, 8);
						// this.tomsg = prev[mymsg.suid][1][(prev[mymsg.suid][1]).length - 1].msg;
						console.log(this.tomsg);
					}
					return prev;
				}, {}
			);
			for (var item in summessage) {
				if (state.summsg[item] == undefined) {
					state.summsg[item] = [
						[]
					];
					console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", item[0], item[1], item[2], item);
					state.summsg[item][0] = [];
					console.log("&&&&&&&&&&&&&&&&&&&&&", summessage[item][0]);
					state.summsg[item][1] = [];
					state.summsg[item][2] = '';
					state.summsg[item][0] = [...summessage[item][0]]
					state.summsg[item][1] = [...summessage[item][1]]
					state.summsg[item][2] = summessage[item][2];
				} else {
					state.summsg[item][0] = [...state.summsg[item][0], ...summessage[item][0]]
					state.summsg[item][1] = [...state.summsg[item][1], ...summessage[item][1]]
					state.summsg[item][2] = summessage[item][2];
				}
			}
			console.log(state.summsg, "###################这是state.summsg############################");
			console.log("聊天函数被触发")
		}
	},
	SAVE_GUANZHU(state, data) {
		//把用户信息存入本地存储
		localStorage.setItem("guanzhu", data);

		let guanzhu = localStorage.getItem("guanzhu");
		state.guanzhu = guanzhu;

		console.log("guanzhu函数被触发");
		console.log(state.guanzhu)
	},
	SAVE_SHOUCAN(state, data) {
		//把用户信息存入本地存储
		localStorage.setItem("shoucan", JSON.stringify(data));

		let shoucan = localStorage.getItem("shoucan");
		state.shoucan = shoucan;
		console.log("shoucan函数被触发");
		console.log(state.shoucan)
	},
	SAVE_SHOUCANLIST(state, data) {
		//把用户信息存入本地存储
		if (Array.isArray(data)) {
			for (var item of data) {
				if (state.shoucanlist.indexOf(item) == -1) {
					state.shoucanlist.push(item);
					console.log("数据没有重复");
				}
			}
		} else {
			if (state.shoucanlist.indexOf(item) == -1) {
				state.shoucanlist.push(data)
			}
		}
		let shoucanlist = state.shoucanlist;
		// var c=localStorage.getItem("shoucanlist");
		// c=c+","+shoucanlist;
		localStorage.setItem("shoucanlist", shoucanlist);
		console.log("shoucanlist函数被触发");
		console.log(state.shoucanlist)
	},
	SAVE_SHOUCANINIT(state, data) {
		//把用户信息存入本地存储
		localStorage.setItem("shoucan", data);

		let shoucan = localStorage.getItem("shoucan");
		state.shoucan = shoucan;
		console.log("shoucan函数被触发");
		console.log(state.shoucan)
	},
	SAVE_USERINFO(state, data) {
		//把用户信息存入本地存储
		localStorage.setItem("token", data);

		let localusertoken = localStorage.getItem("token");
		state.userinfo.token = localusertoken;

		console.log("name函数被触发");
		console.log(state.userinfo.token)
	},
	SAVE_PRODUCTLIST(state, data) {
		state.productlist = data;
		console.log("productlist函数被触发");
		console.log(state.productlist);
	},
	SAVE_CODE(state, data) {
		state.code = data;
		console.log("code函数被触发");
		console.log(state.code);
	},
	SAVE_SEARCHCONTENT(state, data) {
		state.SearchContent = data;
		console.log("searchcontent函数被触发");
		console.log(state.SearchContent);
	},
	SAVE_uid(state, data) {
		state.uid = data;
		console.log("uid函数被触发");
		console.log(state.uid);
	},
	SAVE_sayuid(state, data) {
		state.say_uid = data;
		console.log("say_uid函数被触发");
		console.log(state.say_uid);
	}
}
export default new Vuex.Store({
	state,
	mutations
})
