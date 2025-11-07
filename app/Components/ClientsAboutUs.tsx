import Image from "next/image";

export default function ClientsAboutUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-light-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-900 mb-12 lg:mb-16">
          Clients About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          <div className="md:col-span-2">
            <Image
              src="/images/Hero.jpg"
              alt="Fish 1"
              width={465}
              height={230}
              className="w-full h-[230px] object-cover"
            />
          </div>
          <div className="md:col-span-2 bg-white p-6 flex items-center justify-center">
            <p className="text-accent-700 italic text-center text-sm sm:text-base leading-relaxed">
              "Ominta-Aquarium has been completely reliable. I'll forever be
              grateful for their excellent service."
            </p>
          </div>

          <div className="bg-white p-6 flex items-center justify-center">
            <p className="text-accent-700 italic text-center text-sm sm:text-base leading-relaxed">
              "I would not hesitate to recommend you and your team."
            </p>
          </div>
          <Image
            src="/images/About-01.jpg"
            alt="Fish 2"
            width={235}
            height={235}
            className="w-full aspect-square object-cover"
          />
          <Image
            src="/images/fish2.png"
            alt="Fish 3"
            width={235}
            height={235}
            className="w-full aspect-square object-cover"
          />
          <Image
            src="/images/About-05.jpg"
            alt="Fish 4"
            width={235}
            height={235}
            className="w-full aspect-square object-cover"
          />

          <div className="hidden md:block"></div>
          <div className="bg-white p-6 flex items-center justify-center">
            <p className="text-accent-700 italic text-center text-sm sm:text-base leading-relaxed">
              "They made it look so easy, were professional and very
              knowledgeable."
            </p>
          </div>
          <div>
            <Image
              src="/images/About-06.jpg"
              alt="Aquarium"
              width={235}
              height={235}
              className="w-full h-[235px] object-cover"
            />
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
