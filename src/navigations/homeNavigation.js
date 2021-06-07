import Welcome from '../screens/onboarding';

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
  ],
};
