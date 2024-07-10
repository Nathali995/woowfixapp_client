import Home from '../views/Home';
import Automobile from '../views/Automobile';
import Bookings from '../views/Bookings';
import Profile from '../views/Profile';
import Map from '../views/Map';

export const TabScreens = [
  {
    name: 'home',
    component: Home,
    asIcon: true,
    options: {
      title: 'Inicio',
      icon: 'HomeIcon',
      tabBarAllowFontScaling: false,
      unmountOnBlur: true,
      headerShown: true,
    },
    showIconHeaderLeft: false,
    showIconHeaderRight: true,
  },
  {
    name: 'automobile',
    component: Automobile,
    asIcon: true,
    options: {
      title: 'Mi auto',
      icon: 'CarIcon',
      hiddenBack: false,
      tabBarAllowFontScaling: false,
      unmountOnBlur: true,
      headerShown: true,
    },
    showIconHeaderLeft: true,
    showIconHeaderRight: true,
  },
  {
    name: 'bookings',
    component: Bookings,
    asIcon: true,
    options:{
        title: 'Reservas',
        icon: 'BookingsIcon',
        headerShown: true, 
        tabBarAllowFontScaling: false,
        unmountOnBlur: true,
        hiddenBack: false,
    },
    showIconHeaderLeft: true,
    showIconHeaderRight: true,
  },
  {
    name: 'profile',
    component: Profile,
    asIcon: true,
    options: {
        title: 'Cuenta',
        icon: 'ProfileIcon',
        headerShown: true,
        tabBarAllowFontScaling: false,
        unmountOnBlur: true, 
        hiddenBack: false,
    },
    showIconHeaderLeft: true,
    showIconHeaderRight: false,
  },
  {
    name: 'map',
    component: Map,
    asIcon: true,
    options: {
        title: 'Mapa',
        icon: 'MapIcon',
        headerShown: true,
        tabBarAllowFontScaling: false,
        unmountOnBlur: true, 
        hiddenBack: false,
    },
    showIconHeaderLeft: true,
    showIconHeaderRight: false,
  },
];