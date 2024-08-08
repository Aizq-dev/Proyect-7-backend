const seed = {
  autos: [
    { modelo: "M1", precio: 280000, marca: "BMW", año: 1980 },
    { modelo: "M2", precio: 54900, marca: "BMW", año: 2019 },
    { modelo: "M3", precio: 129000, marca: "BMW", año: 2020 },
    { modelo: "M4", precio: 82200, marca: "BMW", año: 2021 },
    { modelo: "passat", precio: 30.0, marca: "VOLKSWAGEN", año: 2016 },
    { modelo: "golf", precio: 40000, marca: "VOLKSWAGEN", año: 2024 },
    { modelo: "308", precio: 35000, marca: "PEUGOT", año: 2022 },
    { modelo: "saxo", precio: 15000, marca: "CITROEN", año: 2021 },
    { modelo: "C3", precio: 20000, marca: "CITROEN", año: 2020 },
    { modelo: "C4", precio: 25000, marca: "CITROEN", año: 2021 },
  ],
  marcas: [
    {
      marca: "BMW",
      grupo: "VAG",
      log: "jkgfjdkjg",
      modelos: ["M1", "M2", "M3", "M4"],
    },
    {
      marca: "VOLKSWAGEN",
      grupo: "VAG",
      log: "sfdkgjjkshg",
      modelos: ["passat", "golf"],
    },
    { marca: "PEUGOT", grupo: "PSA", logo: "dfhjdhf", modelos: ["308"] },
    {
      marca: "CITROEN",
      grupo: "PSA",
      logo:'dhjshkm',
      modelos: [
        "saxo",
       "C3",
       "C4"
      ],
    },
  ],

};

module.exports = seed