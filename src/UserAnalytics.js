import { useEffect } from 'react';
import { useLocation } from 'react-router';
import ReactGA from 'react-ga';

function UserAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);

  return null;
}
export default UserAnalytics;
