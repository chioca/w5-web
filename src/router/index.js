import Vue from "vue";
import Router from "vue-router";

const Login = () => import("@/pages/login");
const HomePage = () => import("@/pages/home");
const Dashboard = () => import("@/pages/dashboard");
const WorkflowHome = () => import("@/pages/workflow/home");
const WorkflowEdit = () => import("@/pages/workflow/edit");
const StatisticsHome = () => import("@/pages/workflow/statistics");
const LogsHome = () => import("@/pages/logs/home");
const AppHome = () => import("@/pages/app/home");
const VariablenHome = () => import("@/pages/variable/home");
const UserHome = () => import("@/pages/user/home");
const SystemHome = () => import("@/pages/system/home");
const TimerHome = () => import("@/pages/timer/home");
const AuditHome = () => import("@/pages/audit/home");
const x403 = () => import("@/pages/403");

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: { requireAuth: false },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { requireAuth: false },
    },
    {
      path: "/workflow",
      name: "WorkflowHome",
      component: WorkflowHome,
      meta: { requireAuth: false },
    },
    {
      path: "/workflow/edit/:uuid",
      name: "WorkflowEdit",
      component: WorkflowEdit,
      meta: { requireAuth: false },
    },
    {
      path: "/workflow/statistics/:uuid",
      name: "StatisticsHome",
      component: StatisticsHome,
      meta: { requireAuth: false },
    },
    {
      path: "/logs",
      name: "LogsHome",
      component: LogsHome,
      meta: { requireAuth: false },
    },
    {
      path: "/app",
      name: "AppHome",
      component: AppHome,
      meta: { requireAuth: false },
    },
    {
      path: "/variablen",
      name: "VariablenHome",
      component: VariablenHome,
      meta: { requireAuth: false },
    },
    {
      path: "/user",
      name: "UserHome",
      component: UserHome,
      meta: { requireAuth: false },
    },
    {
      path: "/system",
      name: "SystemHome",
      component: SystemHome,
      meta: { requireAuth: false },
    },
    {
      path: "/timer",
      name: "TimerHome",
      component: TimerHome,
      meta: { requireAuth: false },
    },
    {
      path: "/audit",
      name: "AuditHome",
      component: AuditHome,
      meta: { requireAuth: false },
    },
    {
      path: "/403",
      name: "403",
      component: x403,
      meta: { requireAuth: false },
    },
  ],
});
