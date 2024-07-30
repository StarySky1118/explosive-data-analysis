const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "dataManage",
  component: Layout,
  redirect: "/dataManage",
  meta: {
    icon: "ep:folder-opened",
    title: "数据管理",
    rank: 1
  },
  children: [
    {
      path: "/dataManage",
      name: "dataManage",
      component: () => import("@/views/data_manage/index.vue"),
      meta: {
        title: "数据管理",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
