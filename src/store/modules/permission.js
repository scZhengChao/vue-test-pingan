import { asyncRouterMap, constantRouter } from '@/router'; //导入已有的路由和全部的需要权限的路由
function hasPermission(permissions, route){ //permission 为处理分隔后的路由权限,[home, home/home1.login.login/login1]
  if (route.meta && route.meta.permissions) {  
    const routePermissions = route.meta.permissions   //每个路由里的meta中的permissions数组
    return permissions.some(   //some 循环判断是否有元素符合里面的条件,而不是每个元素
      item=>routePermissions.includes(item)    //some 循环,找到为true,找不到为false
    )
  } else {
    return true
  }
}
// 递归过滤异步路由表,返回符合用户角色权限的路由表
function filterAsyncRouter(routes, permission) {  //所有需要权限的路由,和后端返回的权限的列表数组最多二级
  const res = []
  const newPermissions = [];
  permissions.forEach(permission => {
    newPermissions.push(permission)
    var permissionArray = permission.split('/');
    var modulePemission = permissionArray.shift()
    if (!newPermissions.includes(modulePemission)) {  //includes 的用法,不用循环了很好用,找到数组中的一项
      newPermissions.push(modulePemission)
    }
  })
  routes.forEach(route => {
    const tmp = {
      ...route
    }
    if (hasPermission(newPermissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children,newPermissions)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routers: asyncRouterMap,
    addRouters:[]
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = asyncRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { permissions } = data
        const accessedRouters = filterAsyncRouter(asyncRouterMap, permissions)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}
export default permission