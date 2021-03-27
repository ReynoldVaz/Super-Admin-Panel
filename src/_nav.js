export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      name: 'Car Admins',
      icon: 'Layers',
      children: [
        {
          name: 'Register',
          url: '/elements/Forms',
        },
        {
          name: 'Manage Information',
          url: '/elements/',
        },
        
        {
          name: 'Toggles Activity',
          url: '/elements/',
        },
        
      ],
    },
    {
      name: 'progress',
      icon: 'File',
      children: [
    
      ],
    },
    
    {
      divider: true,
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'Package',
      
    },
  ],
  bottom: [
   
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },
  ],
};
