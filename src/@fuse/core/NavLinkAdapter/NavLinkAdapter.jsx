import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkAdapter = forwardRef((props, ref) => (
  <NavLink ref={ref} {...props} />
));

export default NavLinkAdapter;
