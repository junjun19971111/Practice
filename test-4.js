var app = new Vue({
  el : '#app',
  data:{
    message: 'hello vue.js'
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    }
  },
  computed:{
    secondMessage:{
      get:function(){
        return this.message.split('').reverse().join('');
      },
      set:function(name){
        this.message = name;
      }
    }
  }
})
