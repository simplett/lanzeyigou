<template>
  <div>
    <!-- 页面右边登录div -->
    <div class="login">
      <div class="login-img">
        <a href="javascript:;" @click="ShowDiv('MyDiv','fade')" id="Button1">
          <img src="../../public/images/登录.png" alt />
        </a>
      </div>
      <div class="login-img2">
        <a href="javascript:;">
          <img src="../../public/images/收藏夹.png" alt />收藏夹
        </a>
      </div>
    </div>
    <!--弹出层时背景层DIV-->
    <div id="fade" class="black_overlay"></div>
    <div id="MyDiv" class="white_content">
      <div style="text-align: right; cursor: default;"id="move">
        <span style="font-size:16px;" class="closeDiv" @click="CloseDiv('MyDiv','fade')">稍后弹出?</span>
        <div>
          <div class="container" id="container">
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>注册</h1>
                <!-- <div class="social-container">
                                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>-->
                <span>第三方账号注册</span>
                <input
                  class="input"
                  type="text"
                  v-model="uname"
                  value
                  placeholder="用户名  8~12位字母或数字"
                />
                <input class="input" type="email" v-model="email" placeholder="邮箱" />
                <input class="input" type="text" v-model="checking" placeholder="邮箱验证码" />
                <span class="e-check" @click="check">获取验证码</span>
                <input class="input" type="password" v-model="upwd" placeholder="密码  8~10位数字" />
                <button @click="reg">注册</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>登录</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>第三方账号登录</span>
                <input class="input" type="text" v-model="uname" placeholder="邮箱" />
                <input class="input" type="password" v-model="upwd" placeholder="密码" />
                <a href="#">忘记密码？</a>
                <button @click="login">登录</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>欢迎回来！</h1>
                  <p>请您先登录的个人信息，进行操作。</p>
                  <button class="ghost" id="signIn">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>你好朋友！</h1>
                  <p>输入您的个人信息注册成为会员。</p>
                  <button class="ghost" id="signUp">注册</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      uname: "", //自动添加了kwords()来监视kwords的变化
      upwd: "",
      upwd1: "",
      email: "",
      placeholder: "输入搜索关键词",
      code: 0, //注册正则验证时候的状态码
      Status1: "", //注册时服务器返回的状态
      Status2: "", //登录时服务器返回的状态
      checking: "" //邮箱验证时服务器返回的验证码
    };
  },
  methods: {
    // 弹出隐藏层
    ShowDiv(show_div, bg_div) {
      document.getElementById(show_div).style.display = "block";
      document.getElementById(bg_div).style.display = "block";
      var bgdiv = document.getElementById(bg_div);
      bgdiv.style.width = document.body.scrollWidth;
      // bgdiv.style.height = $(document).height();
      $("#" + bg_div).height($(document).height());
    },
    //关闭弹出层
    CloseDiv(show_div, bg_div) {
      document.getElementById(show_div).style.display = "none";
      document.getElementById(bg_div).style.display = "none";
    },
    check() {
      console.log(this.email);
      var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      var email = this.email;
      var url = "Mail";
      var params = { email };
      if (regemail.test(email)) {
        console.log(email);
        this.axios.get(url, { params });
      } else {
        this.code = 2;
      }
      this.code = 0;
    },
    //登录的方法
    login() {
      var uname = this.uname;
      var upwd = this.upwd;
      var url =
        "https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/release/login";
      var params = {
        uname,
        upwd
      };
      this.axios.post(url, params).then(result => {
        this.Status2 = result.data.state;
        if (this.Status2 === 1) {
          console.log(111);
          alert("状态1");
        }
        if (this.Status2 === 4) {
          console.log(444);
          alert("状态4");
        }
        if (this.Status2 === 5) {
          console.log(555);
          alert("状态5");
        }
      });
    },
    //登录与注册切换时的动画
    change() {
      const signUpButton = document.getElementById("signUp");
      const signInButton = document.getElementById("signIn");
      const container = document.getElementById("container");
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    },
    reg() {
      //正则表达式
      var uname = this.uname,
        upwd = this.upwd,
        email = this.email,
        checking = this.checking,
        reguname = /^[a-z1-9]{8,12}$/,
        regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        regchecking = /^\d{6}$/,
        regupwd = /^\d{8,10}$/;
      //用户名是否输入合法
      console.log(uname);
      if (!reguname.test(uname)) {
        this.code = 1; //根据code的状态，使用watch来动态监视在哪一步验证出错，动态的做出调整
        return;
      }
      //邮箱号是否输入合法
      if (!regemail.test(email)) {
        this.code = 2;
        return;
      }
      //密码格式是否合法
      if (!regupwd.test(upwd)) {
        this.code = 3;
        return;
      }
      if (!regchecking.test(checking)) {
        this.code = 4;
        return;
      }
      //验证用户输入的第二次密码是否和第一次一样，第一次已经验证了格式，
      //所以第二次就不用验证了，通过就是格式和内容与第一次密码一致
      //如果不需要输入第二次密码，则不启用
      // if (upwd === this.upwd1) {
      // 	this.code = 4;
      // 	return;
      // }
      var url =
        "https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/release/register";
      var params = {
        uname,
        upwd,
        email,
        checking
      }; //ES6标准，可以简写
      this.axios.post(url, params).then(result => {
        //当status改变的时候，自动触发对应的函数
        this.Status1 = result.data.state;
        console.log(result);
      });
    }
  }, //ES6标准，可以简写
  watch: {
    code() {
      if (this.code == 1) {
        alert("用户名格式有误");
        // this.$router.push("list")
      }
      if (this.code == 2) {
        alert("邮箱格式有误");
      }
      if (this.code == 3) {
        alert("用户密码格式有误");
      }
      if (this.code == 4) {
        alert("验证码有误");
      }
      this.code = 0;
    },
    Status1() {
      // (this.Status1 == 1) ? this.$router.push("list"): alert("失败");T
      if (this.Status1 == 1) {
        console.log("成功");
        this.$router.push("list");
      }
      if (this.Status1 == 2) {
        console.log("用户名占用");
      }
      if (this.Status1 == 3) {
        console.log("邮箱占用");
      }
    },
    Status2() {
      this.Status2 == 1 ? alert("成功") : alert("失败");
    }
  },
  mounted() {
    this.change();
  }
};
</script>

<style scoped>
@import url("../assets/css/index.css");
</style>