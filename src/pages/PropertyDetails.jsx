import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../assets/Data";
import MainHeader from "../components/MainHeader";
import { DetailsButton } from "../components/Buttons";
import { PropertyCard } from "../components/PropertyCard";

export const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <>
        <nav>
          <MainHeader />
        </nav>
        <div className="text-5xl text-red-400">Property not found!</div>
      </>
    );
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const relatedProperties = properties
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  const shuffledRelatedProperties = shuffleArray(relatedProperties);

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="mx-[5vw] md:mx-[10vw] pb-[50px]">
        <section className="flex flex-col gap-[30px] pb-[50px]">
          {" "}
          <div className=" flex flex-col gap-[20px] lg:flex-row">
            <div className="w-full lg:w-3/4">
              <h1 className="text-[28px] md:text-[36px] lg:text-[46px] font-medium">
                {property.name}
              </h1>
              <p className="text-[14px] md:text-[16px] opacity-90">
                {property.description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between lg:flex-col w-full lg:w-1/4">
              <div className=" py-[10px]">
                <p className="font-medium text-[18px]">Area</p>
                <span className="opacity-90 text-[14px]">{property.area}</span>
              </div>
              <div className="w-full h-[1px] md:w-[1px] md:h-[80px] lg:h-[1px] lg:w-[100%] -bg--body opacity-20"></div>
              <div className=" py-[10px]">
                <p className="font-medium text-[18px]">Bedrooms</p>
                <span className="opacity-90 text-[14px]">
                  {property.bedrooms}
                </span>
              </div>
              <div className="w-full h-[1px] md:w-[1px] md:h-[80px] lg:h-[1px] lg:w-[100%] -bg--body opacity-20"></div>
              <div className=" py-[10px]">
                <p className="font-medium text-[18px]">Bathrooms</p>
                <span className="opacity-90 text-[14px]">
                  {property.bathrooms}
                </span>
              </div>
              <div className="w-full h-[1px] md:w-[1px] md:h-[80px] lg:h-[1px] lg:w-[100%] -bg--body opacity-20"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="relative">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-[350px] md:w-full md:min-h-[350px] mmd:min-h-[450px] lg:min-h-[650px] object-cover"
              />
              <p className="absolute top-0 right-0 -bg--background w-fit py-1 px-2">
                {property.price}
              </p>
            </div>
            <div className="relative flex flex-col gap-[40px] ">
              <div className="flex flex-col gap-[15px] w-full lg:w-3/4">
                <h2 className="text-[26px] ">Overview</h2>
                <p className="text-[16px] leading-7">{property.overview}</p>
              </div>

              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[26px] md:text-[30px] font-medium">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-y-5 md:grid-cols-3">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-3 ">
                      <img src={amenity.icon} />
                      <p className="text-[13px] md:text-[16px] opacity-90">
                        {amenity.name}
                      </p>
                    </li>
                  ))}
                </div>
              </div>
              <div className="relative border p-5 flex flex-col gap-3 md:p-8 lg:absolute top-0 right-0">
                <span className="flex gap-2 items-center">
                  <img src="/public/6710e123436f6b69a0b2d086_ic-name.svg" />
                  <p>Bessie Cooper</p>
                </span>
                <span className="flex gap-2 items-center">
                  <img src="/public/6710e12644bfb065caaf0105_ic-email.svg" />
                  <p>hello@bessie-cooper.com</p>
                </span>
                <span className="flex gap-2 items-center">
                  <img src="/public/6710e123e3c4d399b424e7dd_ic-phone.svg" />
                  <p>+(303) 555-0105</p>
                </span>
                <span className="flex gap-2 items-center">
                  <img src="/public/6710e123ec104a5c2afa4f09_ic-address.svg" />
                  <p>New Jersey, USA</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <DetailsButton />
          </div>
        </section>
        <section>
          <div>
            <div className="flex gap-[10px] items-center border-b py-2">
              <img
                src="/670df50b1b9142294387b0b9_ic-title.svg"
                width={20}
                alt="New Arrivals"
              />
              <h2 className="text-[16px] text--body">RELATED</h2>
            </div>

            <h2 className="mt-6 text-[30px] ">Related Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 place-content-between md:gap-5">
              {shuffledRelatedProperties.map((related) => (
                <PropertyCard
                  to={`/property/${related.id}`}
                  key={related.id}
                  src={related.image}
                  name={related.name}
                  location={related.location}
                  price={related.price}
                  availability={related.availability}
                  id={related.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
