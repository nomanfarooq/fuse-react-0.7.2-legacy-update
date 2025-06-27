import FuseUtils from '@fuse/utils';
import AppContext from 'app/AppContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';

function FuseAuthorization({ children, userRole }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { routes } = useContext(AppContext);
  const [accessGranted, setAccessGranted] = useState(true);
  
  useEffect(() => {
    const { pathname } = location;
    
    /*const matchedRoute = routes.find((route) =>
        matchPath({ path: route.path, end: false }, pathname)
    );*/
    
    // Manual match for React Router v6 (since matchRoutes from react-router-config is gone)
    const matchedRoute = routes.find((route) => pathname.startsWith(route.path));
    
    const hasAccess = matchedRoute
        ? FuseUtils.hasPermission(matchedRoute.auth, userRole)
        : true;
    
    setAccessGranted(hasAccess);
  }, [location, userRole, routes]);
  
  useEffect(() => {
    if (!accessGranted) {
      redirectRoute();
    }
  }, [accessGranted]);
  
  const redirectRoute = () => {
    const { pathname, state } = location;
    const redirectUrl = state?.redirectUrl ?? '/';
    
    if (!userRole || userRole.length === 0) {
      navigate('/login', {
        state: { redirectUrl: pathname },
        replace: true
      });
    } else {
      navigate(redirectUrl, { replace: true });
    }
  };
  
  return accessGranted ? <>{children}</> : null;
}

function mapStateToProps({ auth }) {
  return {
    userRole: auth?.user?.role ?? [],
  };
}

export default connect(mapStateToProps)(FuseAuthorization);
