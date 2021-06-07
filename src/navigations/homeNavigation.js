import Welcome from '../screens/onboarding';
import Login from '../screens/onboarding/login';

export const HomeRoutes = {
  initialRoute: 'Home',
  routes: [
    {
      name: 'Home',
      component: Welcome,
      options: {
        headerShown: false,
        header: null,
      },
    },
    {
      name: 'Login',
      component: Login,
      options: {
        headerShown: false,
        header: null,
      },
    },
  ],
};
