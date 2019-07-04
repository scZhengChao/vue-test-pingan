import { Calendar, Badge,LocaleProvider,List ,Icon} from 'ant-design-vue'
export default {
    install: function (Vue) {
        Vue.use(Badge);
        Vue.use(LocaleProvider);
        Vue.use(Calendar);
        Vue.use(List);
        Vue.use(Icon)
    }
}