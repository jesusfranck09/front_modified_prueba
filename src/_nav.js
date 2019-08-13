  export default {
    items: [
      {
        title: true,
        name: 'Verificación',
        wrapper: {           
          element: '',       
          attributes: {className: "my-class", style: { fontFamily: "Arial" },color:"primary", id: "my-id"}       
          },
        class: ''             
      },
      {
        name: 'Correos ok',
         url: '/correos',
      },
      {
        name: 'Correos Rebotados',
        url: '/correosNone',
      },{
        name: 'Correos Bad',
        url: '/correosBad'
      }, 
      {
        title: true,
        name: 'Componentes',
  
      },
    
      {
        name: 'componente',
        // url: '/buttons',
        // icon: 'icon-cursor',
        children: [
          {
            name: 'opcion1',
            // url: '/buttons/buttons',
            // icon: 'icon-cursor',
          },
          {
            name: 'opcion2',
            // url: '/buttons/button-dropdowns',
            // icon: 'icon-cursor',
          },
          {
            name: 'opcion3',
            // url: '/buttons/button-groups',
            // icon: 'icon-cursor',
          },
          {
            name: 'opcion4',
            // url: '/buttons/brand-buttons',
          
          },
        ],
      },
      {
        name: 'componente2',
        // url: '/charts',
        
      },
      {
        name: 'opcion1',
        // url: '/icons',
      
        children: [
          {
            name: 'opcion2',
            // url: '/icons/coreui-icons',
          
            badge: {
              variant: 'info',
            
            },
          },
          {
            name: 'opcion3',
            // url: '/icons/flags',
            // icon: 'icon-star',
          },
          {
            name: 'opcion4',
            // url: '/icons/font-awesome',
            // icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7',
            },
          },
          {
            name: 'opcion5',
            // url: '/icons/simple-line-icons',
            // icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Avisos',
        // url: '/notifications',
        // icon: 'icon-bell',
        // children: [
        //   {
        //     name: 'Alerts',
        //     // url: '/notifications/alerts',
        //     // icon: 'icon-bell',
        //   },
        //   {
        //     name: 'Badges',
        //     // url: '/notifications/badges',
        //     // icon: 'icon-bell',
        //   },
        //   {
        //     name: 'Modals',
        //     // url: '/notifications/modals',
        //     // icon: 'icon-bell',
        //   },
        // ],
      },
      // {
      //   name: 'Widgets',
      //   url: '/widgets',
      //   // icon: 'icon-calculator',
      //   badge: {
      //     variant: 'info',
      //     // text: 'NEW',
      //   },
      // },
      {
        divider: true,
      },
      {
        title: true,
        name: 'Extras',
      },
      {
        name: 'Paginas',
        // url: '/pages',
        // icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/login',
            // icon: 'icon-star',
          },
          {
            name: 'Registro',
            url: '/register',
            // icon: 'icon-star',
          },
          // {
          //   name: 'Error 404',
          //   url: '/404',
          //   // icon: 'icon-star',
          // },
          // {
          //   name: 'Error 500',
          //   url: '/500',
          //   // icon: 'icon-star',
          // },
        ],
      },
      {
        name: 'Eliminar',
        url: '/dashboard',
        // icon: 'icon-ban',
        attributes: { disabled: true },
      },
  
    ],
  };
