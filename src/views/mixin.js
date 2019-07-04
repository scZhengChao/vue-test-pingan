// 抽离出组件中公用的方法和数据 ，非常的灵活和好用,命名冲突时以组件为准，其他情况尽心合并，并且优先执行mixins 里的
export default{
  data(){return {
    like:'ads'
  }},
  methods:{
    do(){
      this.like =' ooooo'
    }
  }
}