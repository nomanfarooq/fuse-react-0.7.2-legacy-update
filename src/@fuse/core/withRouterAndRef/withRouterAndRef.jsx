import { forwardRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const withRouterAndRef = (WrappedComponent) => {
  const ComponentWithRouter = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    // Create router object similar to React Router v5
    const router = {
      navigate,
      location,
      params,
      // For backward compatibility, you can also provide these:
      history: {
        push: navigate,
        replace: (path) => navigate(path, { replace: true }),
        go: (delta) => navigate(delta),
        goBack: () => navigate(-1),
        goForward: () => navigate(1),
        location,
      },
      match: {
        params,
      },
    };

    return <WrappedComponent {...props} {...router} ref={ref} />;
  });

  // Set display name for debugging
  ComponentWithRouter.displayName = `withRouterAndRef(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithRouter;
};

export default withRouterAndRef;
