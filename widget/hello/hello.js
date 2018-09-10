/**
 * @require hello.less
 */
module.exports = function() {
  let tpl = __inline('./hello.html')
  let context = { title: "My New Post", body: "This is my first post!" }
  let html = tpl(context)
  return html
}