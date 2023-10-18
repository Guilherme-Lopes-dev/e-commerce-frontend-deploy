import { createApi } from "@reduxjs/toolkit/query/react";

const products2 = [
  {
      id: 1,
      name: "iPhone 12 Pro",
      desc: 'Tela de 6.5", 256GB',
      price: 5999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1665351848/onlineshop/iphone-12-pro-max-produto-700x700_uoegha.webp"
  },
  {
      id: 2,
      name: "iPhone 12",
      desc: 'Tela de 6.2", 128GB',
      price: 4599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1665351848/onlineshop/imagem-padrao-fundo-transparente-quadrado-700x700_t0jvgy.webp"
  },
  {
      id: 3,
      name: "iPhone XR",
      desc: 'Tela de 6.1", 128GB',
      price: 3599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1665351852/onlineshop/iphone-xr-produto_rkupwl.webp"

  },
  {
      id: 4,
      name: "Galaxy S22",
      desc: 'Tela de 6.8", 256GB',
      price: 3999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666628466/onlineshop/s22_wp7ih9.webp"

  },
  {
      id: 5,
      name: "Motorola Edge",
      desc: 'Tela de 6.5", 256GB',
      price: 2599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666628465/onlineshop/edge39_jcqd32.png"
  },
  {
      id: 6,
      name: "Xiaomi Mi 11",
      desc: 'Tela de 6.55", 128GB',
      price: 2199,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666628464/onlineshop/mi12_q3ltud.webp"
  },
  {
      id: 7,
      name: "Xiaomi Mi 10",
      desc: 'Tela de 6.55", 128GB',
      price: 1899,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666629848/onlineshop/mi10_zp4jqf.png"
  },
  {
      id: 8,
      name: "Xiaomi Mi 12",
      desc: 'Tela de 6.55", 128GB',
      price: 2999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666628464/onlineshop/mi12_q3ltud.webp"
  },
  {
      id: 9,
      name: "Notebook Philco",
      desc: 'Tela de 14", i5 6° Geração, 8GB RAM, SSD 240GB',
      price: 2599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/notebook-philco_ky2jjn.png"
  },
  {
      id: 10,
      name: "Notebook Acer",
      desc: 'Tela de 17", i7 7° Geração, 16GB RAM, SSD 980GB',
      price: 4599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/notebook-gamer-acer-nitro-5-intel-core-i7-10750h-geforce-gtx-1650-8gb-ram-512gb-ssd-15-6-ips-fhd-win-11-home-preto-an515-55-79x0_1645045438_original-removebg-preview_mg6ght.png"
  },
  {
      id: 11,
      name: 'MacBook Pro 14"',
      desc: "CPU de 8 núcleos, 16GB RAM, SSD de 512 GB",
      price: 11999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/G03-removebg-preview_vkvzwm.png"
  },
  {
      id: 12,
      name: 'MacBook Pro 13"',
      desc: "CPU de 8 núcleos, 8GB RAM, SSD de 256 GB",
      price: 8999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/kisspng-macbook-pro-13-inch-laptop-macbook-air-display-table-5b19b9d373c2a6.1851984215284126274742-removebg-preview_hchh30.png"
  },
  {
      id: 13,
      name: 'MacBook Pro 17"',
      desc: "CPU de 16 núcleos, 32GB RAM, SSD de 1TB",
      price: 19999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626799/onlineshop/kisspng-macbook-pro-laptop-macbook-air-apple-macbook-pro-5b0e29474f14a0.3556253915276547273239-removebg-preview_rh4qe3.png"
  },
  {
      id: 14,
      name: "Lenovo V14 ",
      desc: 'Tela 14", i5 11° Geração, 8GB RAM, SSD de 128 GB ',
      price: 3199,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626799/onlineshop/lenovo_v-series_n7yznx.webp"
  },
  {
      id: 15,
      name: "ACER Notebook Gamer Nitro 5",
      desc: 'i7 8° geração, 16GB, 1TB SSD',
      price: 5999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/notebook-gamer-png-Fotos-png-gratis-removebg-preview_ynqbxj.png"
  },
  {
      id: 16,
      name: "Dell Inspiron",
      desc: 'i5 6° geração, 8GB, 512GB SSD',
      price: 2199,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666626800/onlineshop/kisspng-laptop-dell-inspiron-intel-core-notebook-5ad2a6e2e66d72.9797479415237547229438-removebg-preview_run3pg.png"
  },
  {
      id: 17,
      name: "Mouse Redragon",
      desc: "12.000 DPI",
      price: 199,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666632408/onlineshop/78-780545_mouse-redragon-cobra-m711-hd-png-download-removebg-preview_fb2oco.png"
  },
  {
      id: 18,
      name: "Mouse Logitech",
      desc: "16.000 DPI",
      price: 599,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666632711/onlineshop/g502-lightspeed-gallery-1_mletqh.png"
  },
  {
      id: 19,
      name: "Fone Logitech",
      desc: "7.1 Surround, Bluetooth",
      price: 999,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666630741/onlineshop/71xNjrzG69L._AC_SL1500_-removebg-preview_rvojvy.png"
  },
  {
      id: 20,
      name: "Mousepad RGB",
      desc: "Dimensões 300x200x2",
      price: 99,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666630740/onlineshop/51tUuGl-qkL._AC_SL1500_-removebg-preview_cywijs.png"
  }, {
      id: 21,
      name: "Mouse Razer",
      desc: "16.000 DPI",
      price: 359,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666632556/onlineshop/download-removebg-preview_zbmvgy.png"
  },
  {
      id: 22,
      name: "Fone Redragon",
      desc: "7.1 Surround",
      price: 499,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666630740/onlineshop/61D0neZIgNL._AC_SL1200_-removebg-preview_nh9hlh.png"
  },
  {
      id: 23,
      name: "Mousepad Custom",
      desc: "Dimensões 300x200x2",
      price: 129,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666630741/onlineshop/71zN4wNJxyL._AC_SL1500_-removebg-preview_tpy4vn.png"
  },
  {
      id: 24,
      name: "Fone JBL",
      desc: "7.1 Surround",
      price: 899,
      image: "https://res.cloudinary.com/dstkk44dx/image/upload/v1666630740/onlineshop/chrome_gH4SH5hvRV-removebg-preview_oocmw9.png"
  },

]


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: () => {
    // Retorne os dados diretamente do arquivo importado
    return { data: products2 };
  },
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
