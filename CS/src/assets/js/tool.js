export function loginHandle (res) {
  if (res.body.code === 10000) {
    let result = res.body
    if (result.code === 20000) {
      this.$message({
        message: '请登录',
        type: 'error',
        duration: '2000'
      })
      localStorage.removeItem('username')
      this.$router.push('/login')
      throw res
    } else {
      return res
    }
  } else {
    throw res
  }
}
export function errorRequestHandle (res) {
  let result = res.body
  if (result.code !== 10000) {
    this.$message({
      message: result.result,
      type: 'error',
      duration: '2000'
    })
    this.init()
  }
}
export function errorMsg (res) {
  let result = res.body
  if (result.code !== 10000) {
    this.$message({
      message: result.result,
      type: 'error',
      duration: '2000'
    })
  }
}
