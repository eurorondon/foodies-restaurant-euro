import React from "react";
import Img from "../../assets/pizza.png";
import Img2 from "../../assets/salad.png";
import Img3 from "../../assets/biryani3.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Biryani",
    description:
      "Sumérgete en la exquisitez del mar con nuestro Risotto de Mariscos al Pesto de Albahaca. Cada bocado es una sinfonía de sabores del océano, mientras los camarones, calamares y mejillones se mezclan armoniosamente con el arroz cremoso. La frescura de nuestro pesto de albahaca eleva este plato a una experiencia culinaria única y fresca.",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken kari",
    description:
      "Para los amantes de la carne, presentamos nuestro Filete Mignon con Salsa de Trufa y Puré de Papa al Queso Azul. La jugosidad del filete se combina con la intensidad de la salsa de trufa, creando una explosión de sabores en cada bocado. Acompañado por un puré de papa suave y enriquecido con queso azul, este plato es una indulgencia sublime que cautivará tu paladar.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Si buscas una opción más ligera pero llena de frescura, nuestra Ensalada de Quinoa con Aguacate y Vinagreta de Mango es la elección perfecta. La quinoa, preparada a la perfección, se mezcla con aguacate cremoso y se adereza con una vinagreta refrescante de mango. Cada bocado es una explosión de texturas y sabores saludables, ideal para aquellos que buscan una opción nutritiva y deliciosa.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Nuestros Servicios
            </p>
            <h1 className="text-3xl font-bold">Servicios</h1>
            <p className=" text-sm md:text-lg text-gray-400">
              Descubre cómo nuestra dedicación a los productos frescos eleva
              cada experiencia culinaria.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px] mb-5">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 "
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm md:text-lgz   line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
