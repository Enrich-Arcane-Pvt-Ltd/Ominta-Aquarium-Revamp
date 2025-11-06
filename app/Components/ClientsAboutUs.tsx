import Image from "next/image";

export default function ClientsAboutUs() {
  return (
    <section className="py-8 bg-light-100">
      <div className="max-w-6xl mx-auto px-4 ">
       
        <h2 className="text-center text-4xl font-bold text-accent-900 mb-10 pt-12 pb-10">
          Clients About Us
        </h2>

       
<div className="flex flex-col md:flex-row items-center justify-center gap-3 mr-24">
  <Image src="/images/fish.jpg"
    alt="Fish 1"
    width={465}
    height={230}
    className="w-[465px] h-[230px] object-cover"/>
  <p className="text-gray-700 italic text-center md:text-left flex items-center justify-center w-[275px] h-[230px] bg-light-100 rounded-lg p-2 mr-20 ">
    “AquaPro has been completely reliable. Ill forever be grateful for
    their excellent service.”
  </p>
</div>

       
        <div className="flex flex-col md:flex-row items-center justify-center  flex-wrap">
          <p className="text-gray-700 italic text-center md:text-left flex items-center justify-center w-[235px] h-[235px] bg-light-100 rounded-lg p-2 ">
            “I would not hesitate to recommend you and your team.”
          </p>
          <Image  src="/images/fish3.jpg"
            alt="Fish 2"
            width={235}
            height={235}
            className=" w-[235px] h-[235px] object-cover" />
          <Image src="/images/fish2.png"
            alt="Fish 3"
            width={235}
            height={235}
            className=" w-[235px] h-[235px] object-cover" />
          <Image src="/images/a70701.png"
            alt="Fish 4"
            width={235}
            height={235}
            className=" w-[235px] h-[235px] object-cover" />
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mr-3">
          <p className="text-accent-700 italic text-center md:text-right flex items-center justify-center w-[235px] h-[235px] bg-light-100 rounded-lg p-2 order-2">
            “They made it look so easy, were professional and very knowledgeable.”
          </p>
          <Image src="/images/Fishaquariums.jpg"
            alt="Aquarium"
            width={235}
            height={235}
            className=" w-[235px] h-[235px] object-cover order-1 md:order-2 mb-20"  />
        </div>
      </div>
    </section>
  );
}
