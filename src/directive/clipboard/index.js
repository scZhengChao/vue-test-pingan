// Inspired by https://github.com/Inndy/vue-clipboard2

export default {
  bind(el, binding,vnode) {
    el.oninput = function () {
      console.log(vnode.context.list)
    }
  },
}
