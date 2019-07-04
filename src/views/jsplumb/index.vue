<template>
  <div>
    <div class="flowChart">
      <ul class="tools">
        <li @click.stop="addNodes(1)" class="Square" ></li>
        <li @click.stop="addNodes(2)" class="diamond"></li>
        <li @click.stop="addNodes(3)" class="circular"></li>
      </ul>
      <div id="diagramContainer" ref="contain" >
        <!-- <div id="item_left" class="item"></div>
        <div id="item_right" class="item" ></div> -->
           <ul class="menu" ref="menu">
              <li @click="del">删除</li>
          </ul>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name:'jsplumb',
  data(){return{
    common:{
        endpoint: "Dot",
        connector: 'Flowchart',
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        _paintStyle: {
          fill: 'black',
          outlineStroke: 'gray',
          strokeWidth: 1,
          radius: 3
        },
        get paintStyle() {
          return this._paintStyle;
        },
        set paintStyle(value) {
          this._paintStyle=value;
        },
        hoverPaintStyle: {
          outlineStroke: 'red',
          fill:'red'
        },
        connectorStyle: {
          outlineStroke: 'black',
          strokeWidth: 1
        },
        connectorHoverStyle: {
          outlineStroke:'red'
        },
        ConnectionOverlays: [
                [ "Arrow", { location: 1 } ],
                [ "Label", {
                    location: 0.5,
                    label: "hehe",
                    id: "label",
                    cssClass: "aLabel"
                }]
            ],
      },
      activeNode:''
  }},
  mounted() {
    this.init()
    document.addEventListener('click',()=>{
      this.$refs.menu.style.display = 'none'
    },false)
  
  },
  methods:{
    init(){
        var that = this
        jsPlumb.ready(function () {
        jsPlumb.setContainer(that.$refs.contain)
      
        jsPlumb.importDefaults({
          ConnectionOverlays: [
              ["Arrow", { location: 0.5, id: "arrow", length: 10, foldback: 0, width: 10 }],
          ]
        })
        jsPlumb.bind('dblclick', function (conn, originalEvent) {
            jsPlumb.deleteConnection(conn)
        })
      // for(let i = 0 ;i<item.length;i++){
      //   item[i].oncontextmenu = function(eve){
      //     var e = eve || window.event
      //     e.returnValue = false || e.preventDefault();
      //     this.$refs.menu.style.display = 'block'
      //     this.$refs.menu.style.top = e.pageY + 'PX'
      //     this.$refs.menu.style.left = e.pageX + 'PX'
      //   }
      // }
      })
    },
    addNodes(id){
      var node = document.createElement('div')
      if(id == 1){
        node.className = 'Square'
      }else if(id==2){
        node.className = 'diamond'
      }else if(id ==3){
        node.className = 'circular'
      }
      node.style.cssText='left:0;top:0;position:absolute;margin:0;padding:0;overflow-y:auto';
      this.$refs.contain.appendChild(node)

      let direction = ['Top','Bottom','Left','Right']
      for(let i = 0 ; i < direction.length;i++){
        jsPlumb.addEndpoint(node, {
          anchor: direction[i],
          
        }, this.common)
      }
      jsPlumb.draggable(node,{
        containment:'parent',
      })
      node.oncontextmenu =(eve)=>{
          var e = eve || window.event
          e.returnValue = false || e.preventDefault();
          this.$refs.menu.style.display = 'block'
          this.$refs.menu.style.top = e.clientY  + 'PX'
          this.$refs.menu.style.left = e.clientX -120 + 'PX'
          this.activeNode = node
      }
      node.ondblclick = ()=>{
        if(node.children.length != 0){
          node.innerHTML = null
        }
        let input = document.createElement('input')
        input.value = node.innerHTML
        node.innerHTML = null
        node.appendChild(input)
        input.focus()
        input.onblur=function(){
          node.innerHTML = input.value
          // input.outerHTML =''
        }
      }
    },
    del(){
      jsPlumb.remove(this.activeNode)
    },
  }
}
</script>
<style> 
*{
  margin: 0;
  padding: 0;
}
li {list-style: none}
.flowChart{
  height: 500px;
  margin: 20px;
  border: 1px solid gray;
  overflow: hidden;
}
.tools{
  width: 120px;
  height: 100%;
  border-right: 1px solid black;
  float: left;
}
.Square{
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    overflow: hidden;
    margin:14px 0 0 28px;
    line-height: 60px;
}
.diamond{
    width: 100px;
    height: 60px;
    border: 1px solid gray;
    margin:20px 0 0 10px ;
    overflow:hidden;
    line-height: 60px;
}
.circular{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid gray;
  margin: 10px auto;
}
.menu{
  border: 1px solid gray;
  position: absolute;
  text-align: center;
  display: none
}
.menu li:hover{
  background: gray;
  cursor: pointer;
}
.menu>li{
  padding: 4px;
  border-bottom: 1px solid gray;
}
.menu>li:last-of-type{
  border-bottom: none;
}
    #diagramContainer {
      overflow:hidden;
      height: 100%;
      position: relative;
    }
    .item {
      position: absolute;
      height: 80px;
      width: 80px;
      border: 1px solid blue;
    }
</style>