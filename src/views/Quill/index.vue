<template>
    <div class="edit_container">
        <div class="edit-title">
            <draggable
            class="list-group"
            tag="ul"
            v-model="list"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
          >
            <transition-group type="transition" name="flip-list">
              <li
                :class="{'list-group-item':true,'isActive':element.order==activeOrder}"
                v-for="(element,index) in list"
                :key="element.order"
                v-editor
                @click='choseActive(element.order)'
              >
             
                {{ element.name }}
              </li>
            </transition-group>
          </draggable>
        </div>
            <quill-editor 
                v-model="content" 
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
            >
            </quill-editor>
       
        <!-- <div id="toolbar">
            <span class="ql-formats">
                <select class="ql-font"></select>
                <select class="ql-size"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
            </span>
            <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-header" value="1"></button>
                <button class="ql-header" value="2"></button>
                <button class="ql-blockquote"></button>
                <button class="ql-code-block"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
                <button class="ql-indent" value="-1"></button>
                <button class="ql-indent" value="+1"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-direction" value="rtl"></button>
                <select class="ql-align"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-link"></button>
                <button class="ql-image"></button>
                <button class="ql-video"></button>
                <button class="ql-formula"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-clean"></button>
            </span>
        </div> -->
         
    </div>
</template>
<style > 
  .edit_container{
    display: flex;
  }
   .quill-editor{
       flex: 1;
   }
   .edit-title{
       width: 200px;
       margin-right: 10px;
       border: 1px solid #DFDFDF;
   }
 
   .flip-list-move {
        transition: transform 0.5s;
    }
    .list-group-item {
        cursor: move;
        text-align: left;
        text-indent: 10px;
        line-height: 30px;
        height: 30px;
        font-weight: bolder;
        font-size: 12px;
        border-bottom: 1px solid #DFDFDF;
        color: #612529;
    }
    .list-group {
        min-height: 20px;
        
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
    .isActive{
        background: #409EFF!important;
    }

</style>
<script>
      import draggable from 'vuedraggable'
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.bubble.css'
    import { ImageDrop } from 'quill-image-drop-module';
    // import Video from './video.js'; // 插入h5 video视频
    // import { ImageResize } from 'quill-image-resize-module';
    // Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/imageDrop', ImageDrop);
    // Quill.register(Video, true);  // 注册video


    const toolOptions = [
        ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
        ['blockquote', 'code-block'],     //引用，代码块
        ['clean'],    //清除字体样式
        // [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],     //列表
        [{ 'size': ['small', false, 'large', 'huge'] }],  // 用户自定义下拉
        [{ 'script': 'sub' }, { 'script': 'super' }],   // 上下标
        [{ 'indent': '-1' }, { 'indent': '+1' }],     // 缩进
        [{ 'direction': 'rtl' }],             // 文本下划线
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
        [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
        [{ 'font': [] }],     //字体
        [{ 'align': [] }],    //对齐方式
        ['link','image', 'video']  ,  //上传图片、上传视频
        // ['sourceEditor'] //新添加的工具
    ]
    export default {
        name: 'App',
        components: {
            draggable,
        },
        directives:{
            editor:{
                inserted:function(element){
                    
                    let fneditor = function(e){
                     
                        if(e.target.className.indexOf('list-group-item') == -1) return
                        var oldhtml = element.innerHTML.trim();
                        
                        //创建新的input元素
                        var newobj = document.createElement('input');
                        //为新增元素添加类型
                        newobj.type = 'text';
                        //为新增元素添加value值
                        newobj.value = oldhtml;
                      
                        //为新增元素添加光标离开事件
                        newobj.onblur = function() {
                            //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
                            element.innerHTML = this.value == '' ? oldhtml : this.value;
                            //当触发时设置父节点的双击事件为ShowElement
                            element.addEventListener('dblclick',fneditor)
                        }
                        //设置该标签的子节点为空
                        element.innerHTML = '';
                        //添加该标签的子节点，input对象
                        element.appendChild(newobj);
                    
                        //设置获得光标
                        newobj.focus();

                        //设置父节点的双击事件为空
                        element.removeEventListener("dblclick", fneditor);
                    }
                    element.addEventListener('dblclick',fneditor,true)
                }
            } 
        },
        data() {
            return {
                activeOrder:1,
                list:[
                        {
                            "name": "for",
                            "order": 4,
                            "content":'for'

                        },
                        {
                            "name": "draggable",
                            "order": 2,
                            "content":'draggable'
                        },
                        {
                            "name": "vue.js 2.0",
                            "order": 5,
                            "content":'vue.js 2.0'
                        },
                        {
                            "name": "based",
                            "order": 6,
                            "content":'based'
                        },
                        {
                            "name": "on",
                            "order": 7,
                            "content":'on'
                        },
                        {
                            "name": "component",
                            "order": 3,
                            "content":'component'
                        },
                        {
                            "name": "vue.draggable",
                            "order": 1,
                            "content":'vue.draggable'
                        },
                        {
                            "name": "Sortablejs",
                            "order": 8,
                            "content":'Sortablejs'
                        }
                    ],
                isDragging:null,
                // content: ``,
                editorOption: {
                    theme: 'snow',
                    // debug: 'info',
                    placeholder: 'Compose an epic...',
                    readOnly: true,
                    modules: {
                        toolbar: {
                            // container:'#toolbar',
                            container:toolOptions,
                            handlers:{
                                // 'link':function(value){
                                //     if (value) {
                                //         console.log(value)
                                //         var href = prompt('Enter the URL');
                                //         this.quill.format('link', href);
                                //     } else {
                                //         this.quill.format('link', false);
                                //     }

                                // }
                                shadeBox:null,
                                // sourceEditor: function(){     //添加工具方法
                                //     alert('我新添加的工具方法');
                                // }
                            }
                        },
                        imageDrop: true
                      
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            },
            content:{
                get() {
                  let item =  this.list.find(item=>item.order === this.activeOrder)
                    return item && item.content
                },
                set(value) {
                    console.log(value)
                   let index = this.list.findIndex(item=>item.order === this.activeOrder)
                   if(index !== -1){
                       this.list[index].content = value
                   }
                }
            }
        },
        mounted(){

            
            // this.initButton();
            // 自定义 或者 更改原有的功能  或者在初始化时 写在handler里面
            // var toolbar = this.editor.getModule('toolbar');
            // toolbar.addHandler('image', this.showImageUI);
        },
        methods: {
            choseActive(data){
                this.activeOrder = data
            },
            register(q){ 
                //注册标签(因为在富文本编辑器中是没有div,table等标签的，需要自己去注册自己需要的标签)
                class div extends q.import('blots/block/embed') {}
                class table extends q.import('blots/block/embed') {}
                class tr extends q.import('blots/block/embed') {}
                class td extends q.import('blots/block/embed') {}
                div.blotName =div.tagName='div';
                table.blotName =table.tagName='table';
                tr.blotName =tr.tagName='tr';
                td.blotName =td.tagName='td';
                q.register(div);
                q.register(table);
                q.register(tr);
                q.register(td);
            },
            initButton(){      //在使用的页面中初始化按钮样式
                // 这里纯粹是js操作css  不太好； 尽可能提前的写好css样式
                const sourceEditorButton = document.querySelector('.ql-sourceEditor');
                sourceEditorButton.style.cssText = "width:80px; border:1px solid #ccc; border-radius:5px;";
                sourceEditorButton.innerText="源码编辑";
            },
            showImageUI(value){
           
            },
            onEditorReady(editor) { // 准备编辑器
            },
            onEditorBlur() { }, // 失去焦点事件
            onEditorFocus(val, editor) { // 获得焦点事件
                // console.log(val); // 富文本获得焦点时的内容
                // editor.enable(false); // 在获取焦点的时候禁用
            },
            onEditorChange() { // 内容改变事件
                console.log(this.content)
            }, 
            saveHtml: function (event) { // 保存
                alert(this.content);
            },
            insertImgClick(e) {
                if (e.target.className.indexOf('icon-pic') != -1) {
                    document.getElementById('insert_image').click();
                } else if (e.target.className.indexOf('icon-video') != -1) {
                    document.getElementById('insert_video').click();
                }
            },
            fileInsert(e) {
                var oFile = e.target.files[0];
                if (typeof (oFile) === 'undefined') {
                    return;
                }
                let sExtensionName = oFile.name.substring(oFile.name.lastIndexOf('.') + 1).toLowerCase();   // 文件扩展名
                let sfileType = ''; // 上传文件类型
                if (e.target.id == 'insert_image') {
                    sfileType = 'image'
                    if (sExtensionName !== 'png' && sExtensionName !== 'jpg' && sExtensionName !== 'jpeg') {
                        alert('不支持该类型图片');
                        return;
                    }
                }
                if (e.target.id == 'insert_video') {
                    sfileType = 'video';
                    if (sExtensionName !== 'mp4' && sExtensionName !== 'avi' && sExtensionName !== 'mov') {
                        alert('不支持该类型视频');
                        return;
                    }
                    let maxSize = 100 * 1024 * 1024;    // 100MB
                    if (oFile.size > maxSize) {
                        alert('上传视频大小不能超过100MB');
                        return;
                    }
                }
                var reader = new FileReader();
                reader.readAsDataURL(oFile);
                reader.onloadend = () => {
                    let formData = new FormData(); // 通过formdata上传
                    formData.append('file', oFile);
                    let sUrl = '';
                    if (sfileType == 'image') {
                        sUrl = 'Pic';
                    }
                    if (sfileType == 'video') {
                        sUrl = 'Vie';
                    }
                    var url = this.api_config + '/dealerIndex/upload' + sUrl + '.htm';
                    this.axios.post(url, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    }).then((res) => {
                        this.editor.insertEmbed(this.editor.selection.savedRange.index, sfileType, res.data.data);  // 这个方法用来手动插入dom到编辑器里
                        let isAndroid = this.$is_android(); // 判断是ios还是android
                        if (isAndroid) {
                            $('video').removeAttr('controls');
                            $('video').attr('x5-video-player-type', 'h5');
                        }
                        this.editor.setSelection(this.editor.selection.savedRange.index + 1);  // 这个方法可以获取光标位置
                    }).catch((response) => {
                        console.log('失败', response);
                    })
                }
            },
        }
    }
</script>
