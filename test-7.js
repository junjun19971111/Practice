var data = {
  fool: "bar"
}
Object.freeze(data); //使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
var vm = new Vue({
  el: '#app',
  data:data
})
