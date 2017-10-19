<template>
  <div class="B-brand">
    <div class="main_container">
      <div class="main_content">
        <div class="content">
          <h4 class="title">CRM信息设置</h4>
          <div class="brand_info clearfix">
            <div class="panel-left Site_Info pull-left">
              <p class="panel_title">
                <label></label>站点信息
              </p>
              <form class="form">
                <div class="form-group">
                  <p>站点名称<span class="must">*</span><span>浏览器标签上的站点名称</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>站点LOGO<span class="must">*</span><span>显示在页面左上角（尺寸：240*42 ，格式：jpg/png/bmp）</span></p>
                  <div class="site_logo clearfix">
                    <div class="preview pull-left"></div>
                    <a href="javascript:;" class="file pull-left">选择文件
                      <input type="file" name="site_logo">
                    </a>
                  </div>
                </div>
                <div class="form-group">
                  <p>站点ICON<span class="must">*</span><span>浏览器标签上的站点图标（尺寸：32*32，格式：jpg、png）</span></p>
                  <div class="site_icon clearfix">
                    <div class="preview pull-left"></div>
                    <a href="javascript:;" class="file">选择文件
                      <input type="file" name="site_icon">
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div class="panel-right Compony_Info pull-left">
              <p class="panel_title">
                <label></label>公司信息
              </p>
              <form class="form">
                <div class="form-group">
                  <p>公司名称<span class="must">*</span><span>显示在页面底部</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>公司邮箱<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>公司电话<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>公司地址<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>公司网址<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="">
                </div>
                <div class="form-group">
                  <p>公司域名<span class="must"></span><span>将您域名的CNAME记录指向（bwjdbbr6.bw.lwork.com）</span></p>
                  <div class="company_site clearfix">
                    <input type="text" name="">
                    <a class="check_site">验证</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="operate clearfix">
            <a class="save">保存</a>
            <a class="reset">重置</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  export default {
    name: 'B-brand',
    data () {
      return {}
    },
    created () {
      $self = this
      console.log($self)
    }
  }
</script>
<style scoped>
  @import"../../assets/css/B-brand.css"
</style>
