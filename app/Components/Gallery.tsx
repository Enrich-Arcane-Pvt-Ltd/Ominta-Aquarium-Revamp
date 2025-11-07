import Image from "next/image";

export default function Gallery() {
  return (
    <div className="relative w-full min-h-[700px] bg-[url('/images/a70701.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary-400/80 flex flex-col items-center justify-center">
       
        <h1 className="text-4xl font-bold text-light-100 text-center mb-10">Gallery</h1>

     <div className="max-w-7xl mx-auto px-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 mb-12">

         
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/747435.jpg"
              alt="Fish close-up"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110"  />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Fish Close-up</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg ">
            <Image
              src="/images/Aquarium-Water.jpg"
              alt="Wall aquarium"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110"  />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Wall Aquarium</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/beautiful-tropical-fish.jpg"
              alt="Living room aquarium"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110"  />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Living Room Aquarium</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/747435.jpg"
              alt="Planted aquarium"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110"  />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Planted Aquarium</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/beautiful-tropical-fish.jpg"
              alt="Goldfish tank"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Goldfish Tank</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/images/747435.jpg"
              alt="Discus fish"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale 110" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-light-100 text-lg font-semibold">Discus Fish</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
