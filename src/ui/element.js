import { Button,Container,Main ,Aside,Loading,Dialog,Alert,Collapse,CollapseItem,Select,Option,Icon,Form ,FormItem,Input} from 'element-ui';
export default {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Container)
        Vue.use(Main)
        Vue.use(Aside)
        Vue.use(Loading)
        Vue.use(Dialog)
        Vue.use(Alert)
        Vue.use(Collapse)
        Vue.use(CollapseItem)
        Vue.use(Option)
        Vue.use(Select)
        Vue.use(Icon)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
    }
}