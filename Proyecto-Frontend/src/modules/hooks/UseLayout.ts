
export function useLayout(pathname: string){
    const routes = [{
        path:'/',
        name:'Home'
    },{
        path:'/category',
        name:'Category'
    },
     {
        path: '/archive',
        name: 'Archive'
     },
    {
        path:'/course',
        name:'Course'
    },
    {
        path:'/note',
        name:'Note'
    },
    
    {
        path:'/user',
        name:'User'
    }
        
    ];

    const route = routes.find(r => r.path === pathname);
    const title = route
        ? route.name
        : "Home";
    return {
        title,
        routes
    };

}