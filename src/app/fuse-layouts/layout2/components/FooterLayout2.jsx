import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout2(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx('relative z-20 shadow-md', props.className)}
        color="default"
        sx={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="container min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto">
          {/* <Typography>Footer</Typography> */}
          <div className="flex flex-col flex-grow flex-shrink-0 items-center justify-center">
            <img className="h-32 md:h-48" src="assets/images/logos/dms_logo.png" alt="DMS Logo"/>
            <Typography className="text-tiny md:text-xs">All Rights Reserved &copy; 2021</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);
