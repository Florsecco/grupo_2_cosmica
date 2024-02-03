'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products', [
      {
        id:1,
        name: 'Labial nude mate',
        description_short: 'Ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'labial-1.jpg',
        category_id: 4,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:9.99,
        final_price: 9.99,
        discount:0,
        brand_id: 2
      },
      {
        id:2,
        name: 'Delineador en gel azul',
        description_short: 'Liner vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'delineador-1.jpg',
        category_id: 3,
        ingredients:'Blue: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:12,
        final_price: 12,
        discount:0,
        brand_id: 1
      },{
        id:3,
        name: 'Rubor en polvo',
        description_short: 'Rojo vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'rubor-1.jpg',
        category_id: 2,
        ingredients:'Polvo: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15.99,
        final_price:12.8,
        discount:20,
        brand_id: 3
      },{
        id:4,
        name: 'Base en crema',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'base-4.jpg',
        category_id: 1,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:5,
        name: 'Base en polvo',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'base-1.jpg',
        category_id: 1,
        ingredients:'Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:20,
        final_price: 18,
        discount:10,
        brand_id: 1
      },{
        id:6,
        name: 'Rubor en gel coral',
        description_short: 'ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'rubor-2.jpg',
        category_id: 2,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:30,
        final_price: 27,
        discount:10,
        brand_id: 2
      },{
        id:7,
        name: 'Delineador en plumón negro',
        description_short: 'ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'delineador-2.jpg',
        category_id: 3,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:10,
        final_price: 9,
        discount:10,
        brand_id: 1
      },{
        id:8,
        name: 'Labial rojo',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'labial-2.jpg',
        category_id: 4,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:9,
        name: 'Labial nude',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'labial-3.jpg',
        category_id: 4,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:10,
        name: 'Labial gloss transparente',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'labial-4.jpg',
        category_id: 4,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:11,
        name: 'Labial rosa',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'labial-5.jpg',
        category_id: 4,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:12,
        name: 'Base en stick',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'base-5.jpg',
        category_id: 1,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:13,
        name: 'Base en mousse',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'base-6.jpg',
        category_id: 1,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:14,
        name: 'Delineador en plumón marrón',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'delineador-4.jpg',
        category_id: 3,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:15,
        name: 'Delineador en gel marrón',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'delineador-6.jpg',
        category_id: 3,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:16,
        name: 'Rubor iluminador',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'rubor-7.jpg',
        category_id: 2,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      },{
        id:17,
        name: 'Rubor en mousse',
        description_short: 'Base, ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        description_long:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.',
        status:1,
        image: 'rubor-6.jpg',
        category_id: 2,
        ingredients:'Pink: Hydrogenated Polyisobutene, Tridecyl Trimellitate, Polybutene, Pentaerythrityl Tetraisostearate, Phytosteryl/Octyldodecyl Lauroyl Glutamate, Ethylene/Propylene/Styrene Copolymer, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Butylene/Ethylene/Styrene Copolymer, Parfum (Fragrance), Polyglyceryl-2 Triisostearate',
        price:15,
        final_price: 13.5,
        discount:10,
        brand_id: 4
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('products', null, {});
     
  }
};
