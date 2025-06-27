// import createGenerateClassName from '@mui/styles/createGenerateClassName';
// import jssPreset from '@mui/styles/jssPreset';
// import { create } from 'jss';
// import jssExtend from 'jss-plugin-extend';
// import rtl from 'jss-rtl';
import Provider from 'react-redux/es/components/Provider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StyledEngineProvider } from '@mui/material/styles';
//App
import AppContext from './AppContext';
import routes from './fuse-configs/routesConfigWeb';
import store from './store';
import baseConfigService from 'app/services/baseConfigService';
import baseConfig from 'app/services/baseConfigService/baseConfigService';
//Socket
import SocketContext from 'app/SocketContext';
import socketService from 'app/services/socketService';

//Cookie
import { CookiesProvider } from 'react-cookie';

//Logger
import logger from 'app/utils/config/loggerConfig';

const withAppProviders = ( Component ) => {
  return function WithProviders ( props ) {
    return (<AppContext.Provider
      value={{routes, baseConfigService, baseConfig, logger}}>
      <CookiesProvider defaultSetOptions={{path: '/'}}>
        <SocketContext.Provider value={{socketService}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Provider store={store}>
              <StyledEngineProvider injectFirst>
                {props && <Component {...props} />}
              </StyledEngineProvider>
            </Provider>
          </LocalizationProvider>
        </SocketContext.Provider>
      </CookiesProvider>
    </AppContext.Provider>);
  };
};
export default withAppProviders;
