<template>
  <div class="applylive_view">
    <div class="steps">
      <h4>申请真实账户<span>操作流程</span></h4>
      <img src="../../assets/images/step1.png" v-if="step1==true">
      <img src="../../assets/images/step2.png" v-if="step2==true">
      <img src="../../assets/images/step3.png" v-if="step3==true">
    </div>
    <div class="content">
      <div class="step1" v-if="step1==true">
        <h4>第一步<span>基本资料填写</span></h4>
        <form>
          <div class="form-group clearfix">
            <label class="label-control pull-left">姓名<span class="must">*</span></label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">邮箱<span class="must">*</span></label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">手机<span class="must">*</span></label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">社交通讯</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">出生地</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">备注</label>
            <textarea class="pull-left"></textarea>
          </div>
          <div class="operstes clearfix">
            <a class="btn prev" @click="prev()">返回</a>
            <a class="btn next" @click="next()">下一步</a>
          </div>
        </form>
      </div>
      <div class="step2" v-if="step2==true">
        <h4>第二步<span>补充个人信息</span></h4>
        <form>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资经验</label>
            <div class="checkList pull-left">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="股票"></el-checkbox>
                <el-checkbox label="债券"></el-checkbox>
                <el-checkbox label="期货"></el-checkbox>
                <el-checkbox label="期权"></el-checkbox>
                <el-checkbox label="外汇"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资年数</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资目的</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">开户银行</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">银行所在地</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">银行卡号码</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">备注</label>
            <textarea class="pull-left"></textarea>
          </div>
          <div class="operstes clearfix">
            <a class="btn prev" @click="prev()">上一步</a>
            <a class="btn next" @click="next()">下一步</a>
          </div>
        </form>
      </div>
      <div class="step3" v-if="step3==true">
        <h4>第三步<span>上传身份证明</span></h4>
        <form>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资经验</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资年数</label>
            <input class="input-control pull-left" type="text">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">投资目的</label>
            <ul class="imgs idcards pull-left clearfix">
              <li>
                <div class="preview pull-left"></div>
                <div class="upload clearfix">
                  <label class="pull-left">身份证明A</label>
                  <a href="javascript:;" class="file pull-right">选择文件
                    <input type="file" id="platform_logo" name="platform_logo" @change="onFileChange">
                  </a>
                </div>
              </li>
              <li>
                <div class="preview pull-left"></div>
                <div class="upload clearfix">
                  <label class="pull-left">身份证明B</label>
                  <a href="javascript:;" class="file pull-right">选择文件
                    <input type="file" id="platform_logo" name="platform_logo" @change="onFileChange">
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">开户银行</label>
            <ul class="imgs address pull-left clearfix">
              <li>
                <div class="preview pull-left"></div>
                <div class="upload clearfix">
                  <label class="pull-left">地址证明A</label>
                  <a href="javascript:;" class="file pull-right">选择文件
                    <input type="file" id="platform_logo" name="platform_logo" @change="onFileChange">
                  </a>
                </div>
              </li>
              <li>
                <div class="preview pull-left"></div>
                <div class="upload clearfix">
                  <label class="pull-left">地址证明</label>
                  <a href="javascript:;" class="file pull-right">选择文件
                    <input type="file" id="platform_logo" name="platform_logo" @change="onFileChange">
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="operstes clearfix">
            <a class="btn prev" @click="prev()">上一步</a>
            <a class="btn next" @click="next()">提交</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
let $self = ''
export default {
  name: 'applylive',
  data () {
    return {
      step1: true,
      step2: false,
      step3: false,
      step: 1,
      checkList: []
    }
  },
  created () {
    $self = this
  },
  'methods': {
    'next': function () {
      if ($self.step === 1) {
        $self.step1 = false
        $self.step2 = true
        $self.step3 = false
        $self.step = 2
        return false
      }
      if ($self.step === 2) {
        $self.step1 = false
        $self.step2 = false
        $self.step3 = true
        $self.step = 3
        return false
      }
      if ($self.step === 3) {
        $self.$router.push('/openaccount/accountconfirm')
        return false
      }
    },
    'prev': function () {
      if ($self.step === 1) {
        $self.$router.go(-1)
        return false
      }
      if ($self.step === 2) {
        $self.step1 = true
        $self.step2 = false
        $self.step3 = false
        $self.step = 1
        return false
      }
      if ($self.step === 3) {
        $self.step1 = false
        $self.step2 = true
        $self.step3 = false
        $self.step = 2
        return false
      }
    },
    'onFileChange': function (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0], e.target.id)
    },
    'createImage': function (file, id) {
      let reader = new FileReader()
      reader.onload = (e) => {
        let params = e.target.result
        let aa = document.getElementById(id).value.toLowerCase().split('.')
        let $type = aa[aa.length - 1]
        if ($type === 'png' || $type === ' jpeg ' || $type === 'jpg' || $type === 'gif' || $type === 'ico') {
          let imagSize = document.getElementById('platform_logo').files[0].size
          if (imagSize < 1024 * 1024 * 5) {
            $self.$http.post('/support-center/common/upload-img',
              params,
              {
                headers: {
                  'Content-Type': 'application/json',
                  'charset': 'utf-8'
                },
                emulateJSON: true
              }).then((res) => {
                if (res.body.code === 10000) {
                  $self.platformInfo.platformLogo = res.body.result
                } else {
                  // toast(res.body.msg, 2000, 'error')
                }
              }, (error) => {
                console.log('error', error)
              })
            return true
          } else {
            // toast('请选择小于5M的图片', 2000, 'error')
          }
        } else {
          // toast('请选择格式为*.png、*.jpeg、*.jpg、*.gif、*.ico 的图片', 2000, 'error')
        }
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/openaccount.scss'
</style>
