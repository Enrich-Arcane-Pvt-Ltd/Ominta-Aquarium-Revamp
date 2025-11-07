import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function AquaticPets() {
  return (
    <div className="py-4 bg-light-100 min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-accent-800 mb-8 mt-28">
          Aquatic Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
         
          <div className="group cursor-pointer text-center hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg mb-6 bg-accent-300 h-[300px]  " >
              <Image
                src="/images/fish2.png"
                alt="Siamese Fighting Fish, Red"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ShoppingCart className="w-[50px] h-[50px] text-accent-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-accent-800 mb-2">
              Siamese Fighting Fish, Red
            </h3>
            <p className="text-sm text-accent-600 mb-4 max-w-xs mx-auto">
              mmmmmmmmmmmmmmmmmmmm.
            </p>
            <p className="text-2xl font-bold text-primary-400">$19.99</p>
          </div>

          
          <div className="group cursor-pointer text-center hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg mb-6 bg-accent-300 h-[300px]">
              <Image
                src="/images/fish.jpg"
                alt="Siamese Fighting Fish, White"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ShoppingCart className="w-[50px] h-[50px] text-accent-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-accent-800 mb-2">
              Siamese Fighting Fish, White
            </h3>
            <p className="text-sm text-accent-600 mb-4 max-w-xs mx-auto">
              uuuuuuuuuuufffffffffffffcccccccck
            </p>
            <p className="text-2xl font-bold text-primary-400">$24.99</p>
          </div>

          
          <div className="group cursor-pointer text-center hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg mb-6 bg-accent-300 h-[300px]">
              <Image
                src="/images/fish3.jpg"
                alt="Siamese Fighting Fish, Purple"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ShoppingCart className="w-[50px] h-[50px] text-accent-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-accent-800 mb-2">
              Siamese Fighting Fish, Purple
            </h3>
            <p className="text-sm text-accent-600 mb-4 max-w-xs mx-auto">
              jyfgyuujhgfjhfjuyghfhgfhtdfghrtdtrd.
            </p>
            <p className="text-2xl font-bold text-primary-400">$22.99</p>
          </div>

          
          <div className="group cursor-pointer text-center hover:shadow-xl">
            <div className="relative overflow-hidden rounded-lg mb-6 bg-accent-300 h-[300px]">
              <Image
                src="/images/OIP.jpg"
                alt="Crowntail Betta Fish"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ShoppingCart className="w-[50px] h-[50px] text-accent-400" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-accent-800 mb-2">
              Crowntail Betta Fish
            </h3>
            <p className="text-sm text-accent-600 mb-4 max-w-xs mx-auto">
              jhgbuyfgjhgjhfgufyhtfytdytdydrdrs.
            </p>
            <p className="text-2xl font-bold text-primary-400">$22.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
