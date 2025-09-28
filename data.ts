type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Oriental sausage",
    desc: "  A delightful plate of grilled sausage links sautéed with vibrant red and green bell peppers. This dish offers a rich, savory flavor perfect for a hearty meal.",
    img: "/temporary/p22.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Kofta",
    desc: "Flavorful minced meat kebabs, seasoned and perfectly grilled. They are served on a bed of fresh parsley, providing a delicious and aromatic experience.",
    img: "/temporary/p33.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "stuffed intestines",
    desc: "A classic Egyptian delicacy of spiced rice and meat stuffed into lamb casings. These are then deep-fried to a golden crisp, offering a rich and crunchy texture.",
    img: "/temporary/p44.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Lamp Chops",
    desc: "Tender lamb chops, grilled to perfection to lock in their rich, juicy flavor. They are served over a bed of fresh greens, offering a delicious and savory experience.",
    img: "/temporary/p55.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "stuffed pigeon",
    desc: "A classic dish of whole pigeons expertly stuffed with spiced rice and herbs. The birds are cooked until the skin is golden and crispy, creating a memorable and flavorful meal.",
    img: "/temporary/p66.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "grilled chicken",
    desc: "A perfectly grilled half-chicken with a crispy skin and tender, juicy meat. This timeless favorite is seasoned to highlight its natural flavor, making it a simple yet delicious choice.",
    img: "/temporary/p77.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const Grilled: Products = [
  {
    id: 1,
    title: "Oriental Sausage",
    desc: " A delightful plate of grilled sausage links sautéed with vibrant red and green bell peppers. This dish offers a rich, savory flavor perfect for a hearty meal.",
    img: "/temporary/p22.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Kofta ",
    desc: "Flavorful minced meat kebabs, seasoned and perfectly grilled. They are served on a bed of fresh parsley, providing a delicious and aromatic experience.",
    img: "/temporary/p33.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Stuffed intestines",
    desc: "A classic Egyptian delicacy of spiced rice and meat stuffed into lamb casings. These are then deep-fried to a golden crisp, offering a rich and crunchy texture.",
    img: "/temporary/p44.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Lamb chops",
    desc: "Tender lamb chops, grilled to perfection to lock in their rich, juicy flavor. They are served over a bed of fresh greens, offering a delicious and savory experience.",
    img: "/temporary/p55.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Stuffed pigeon",
    desc: "A classic dish of whole pigeons expertly stuffed with spiced rice and herbs. The birds are cooked until the skin is golden and crispy, creating a memorable and flavorful meal.",
    img: "/temporary/p66.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Grilled chicken",
    desc: "A perfectly grilled half-chicken with a crispy skin and tender, juicy meat. This timeless favorite is seasoned to highlight its natural flavor, making it a simple yet delicious choice.",
    img: "/temporary/p77.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Oriental Sausage",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p22.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "Grilled",
    title: "Grilled Meats",
    desc: "Juicy kebabs, kofta, lamb chops, and steak grilled to perfection.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "Grilled",
    title: "Grilled Chicken",
    desc: "Charcoal-grilled chicken, crispy wings, and marinated shish tawook.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "Grilled",
    title: "Sides & Appetizers",
    desc: "Fresh bread, crispy fries, oriental salads, and grilled veggies.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
export const products = [...featuredProducts, ...Grilled];
