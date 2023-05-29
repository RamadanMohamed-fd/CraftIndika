const menuItemsData = [
    {
      id: 1,
      title: "Home",
      url: "/",
      subMenuItems:[
        {
          id: 231,
          title: "Subproduct 1",
          url: "/products/product3/subproduct1",
          subMenuItems: null,
          depth: 2,
        },
        {
          id: 232,
          title: "Subproduct 2",
          url: "/products/product3/subproduct2",
          depth: 2,
          subMenuItems: null
        },
        {
          id: 232,
          title: "Subproduct 2",
          url: "/products/product3/subproduct2",
          depth: 2,
          subMenuItems: null
        }
      ],
      depth: 1
    },
    {
      id: 2,
      title: "Products",
      url: "/products",
      depth: 0,
      subMenuItems: [
        {
          id: 21,
          title: "Product 1",
          url: "/products/product1",
          subMenuItems: null,
          depth: 1
        },
        {
          id: 22,
          title: "Product 2",
          url: "/products/product2",
          subMenuItems: null,
          depth: 1
        },
        {
          id: 23,
          title: "Product 3",
          url: "/products/product3",
          depth: 1,
          subMenuItems: null
        }
      ]
    },
    {
      id: 3,
      title: "About",
      url: "/about",
      subMenuItems: null,
      depth: 0
    },
    {
      id: 4,
      title: "Contact",
      url: "/about",
      subMenuItems: null,
      depth: 0
    },
    {
      id: 5,
      title: "Disclaimner",
      url: "/about",
      subMenuItems: null,
      depth: 0
    }
  ];
  
  export default menuItemsData;
  