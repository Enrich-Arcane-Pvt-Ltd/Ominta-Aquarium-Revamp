import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function AquaticPets() {
  const pets = [
    {
      name: "Siamese Fighting Fish (Betta)",
      image: "/Images/fish2.png",
      description:
        "A vibrant freshwater fish known for its flowing fins and bold personality.",
      price: "$19.99",
    },
    {
      name: "Neon Tetra",
      image: "/Images/fish.jpg",
      description:
        "A small, peaceful schooling fish with dazzling neon blue and red stripes.",
      price: "$7.99",
    },
    {
      name: "Clown Fish",
      image: "/Images/fish3.jpg",
      description:
        "Famous for their symbiotic relationship with sea anemones, these fish are colorful and friendly.",
      price: "$29.99",
    },
    {
      name: "Angelfish",
      image: "/Images/OIP.jpg",
      description:
        "A graceful freshwater species admired for its tall fins and calm temperament.",
      price: "$24.99",
    },
  ];

  return (
    <section className="py-20 bg-light-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-accent-800 mb-12">
          Aquatic Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="group cursor-pointer text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden bg-accent-300 h-[280px] sm:h-[300px] mb-6">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ShoppingCart className="w-12 h-12 text-accent-400" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-accent-800 mb-2 px-2">
                {pet.name}
              </h3>
              <p className="text-sm text-accent-600 mb-4 px-4 leading-relaxed">
                {pet.description}
              </p>
              <p className="text-2xl font-bold text-primary-400">{pet.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
