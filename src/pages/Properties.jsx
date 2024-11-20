// src/pages/Properties.jsx
import React from "react";
import MainHeader from "../components/MainHeader";
import { PropertyCard } from "../components/PropertyCard";
import { NextButton } from "../components/Buttons";
import { FAQSection } from "../components/FAQSection";
import { properties } from "../assets/Data";

const Properties = () => {
  // Slice the properties array to get only the first 5 properties
  const displayedProperties = properties.slice(0, 5);

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="flex flex-col items-center font">
        <section className="w-[90%] CategoriesSectionPage-1">
          <div className="flex flex-col gap-[5px] py-[40px]">
            <div className="flex gap-[10px] items-center">
              <img
                src="/670df50b1b9142294387b0b9_ic-title.svg"
                width={25}
                alt="New Arrivals"
              />
              <h2 className="text-[16px] text--body">NEW ARRIVALS</h2>
            </div>
            <div>
              <h1 className="text-[32px] md:font-[38px] font-semibold">
                Latest Properties
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            {displayedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                src={property.image}
                name={property.name}
                location={property.location}
                price={property.price}
                availability={property.availability}
                id={property.id} // Pass the ID correctly if needed
              />
            ))}
          </div>

          <div className="flex justify-end pt-[40px] pb-[50px]">
            <NextButton to={"/properties-page-2"} />
          </div>
        </section>

        <section className="FAQSection w-[90%]">
          <FAQSection />
        </section>
      </main>
    </>
  );
};

export default Properties;