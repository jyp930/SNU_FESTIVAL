import { GA_TRACKING_KEY } from '@/config';
import ReactGA from 'react-ga';

export function initializeGA() {
  if (GA_TRACKING_KEY) {
    ReactGA.initialize(GA_TRACKING_KEY);
  }
}
