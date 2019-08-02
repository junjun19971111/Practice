Vue.component('item',{
    props:['todo'], //接受todo对象
    template: '<li>{{todo.text}}</li>'
}
)

var app = new Vue({
   el: "#app",
   data:{
     arry:[
       { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
     ]
   }
})
