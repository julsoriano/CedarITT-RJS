import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Dashboard from "@material-ui/icons/Dashboard";

import ChartistPage from "components/TrackMED/Charts/ChartistTMHooks.jsx";
import Location from 'components/TrackMED/Location.jsx'; 
import Owner from 'components/TrackMED/Owner.jsx'; 
import Status from 'components/TrackMED/Status.jsx'; 

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/chartsTM",
    name: "TM Charts",
    icon: Dashboard,
    component: ChartistPage,
  },
  {
    path: "/location",
    name: "Location",
    icon: "content_paste",
    component: Location,
  },
  {
    path: "/owner",
    name: "Owner",
    icon: "content_paste",
    component: Owner,
  },
  {
    path: "/Status",
    name: "Status",
    icon: "content_paste",
    component: Status,
  },
];

export default dashboardRoutes;
