import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { SnackbarProvider } from 'notistack';

// App core
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import withAppProviders from './withAppProviders';
import { Auth } from './auth';

// Store
import { selectCurrLangDir } from 'app/store/i18nSlice';

const emotionCacheOptions = {
  rtl: {
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
    prepend: true,
  },
  ltr: {
    key: "muiltr",
    stylisPlugins: [],
    prepend: true,
  },
};

const App = () => {
  const langDirection = useSelector(selectCurrLangDir);
  
  return (
      <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
        <Auth>
            <BrowserRouter>
              <FuseAuthorization>
                <FuseTheme>
                  <SnackbarProvider
                      maxSnack={5}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      classes={{
                        containerRoot:
                            "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
                      }}
                  >
                    <FuseLayout />
                  </SnackbarProvider>
                </FuseTheme>
              </FuseAuthorization>
            </BrowserRouter>
        </Auth>
      </CacheProvider>
  );
};

export default withAppProviders(App);
