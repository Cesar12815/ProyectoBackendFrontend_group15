
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

    const title = pathname === "/"
        ? "Welcome"
        : pathname === "/category"
        ? "Category"
        : pathname === "/address"
        ? "Address"
        : pathname === "/inventory"
        ? "Inventory"
        : pathname === "/notification"
        ? "Notification"
        : pathname === "/order"
        ? "Order"
        : pathname === "/order-item"
        ? "Order Item"
        : pathname === "/product"
        ? "Product"
        : "User";
        return{
           title, routes
        }
}