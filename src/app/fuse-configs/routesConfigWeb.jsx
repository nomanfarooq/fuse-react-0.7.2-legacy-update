import FuseUtils from '@fuse/utils';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import { Navigate } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';

const routeConfigs = [
    LoginConfig,
    RegisterConfig,
];

const routes = [
    // if you want to make whole app auth protected by default change defaultAuth for example:
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
    // The individual route configs which has auth option won't be overridden.
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    {
        path: '/',
        exact: true,
        component: () => <Navigate to="/login" />,
    },
    {
        path: '/loading',
        exact: true,
        component: () => <FuseLoading />,
    },
    {
        component: () => <Navigate to="/404" />,
    },
];

export default routes;
