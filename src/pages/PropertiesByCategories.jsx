import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../assets/Data";

export const PropertiesByCategories = () => {
  const { category } = useParams();

  const filteredProperties = properties.filter(
    (property) => property.category === category
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="mx-[5vw] lg:mx-[10vw]">
        <div className="flex flex-col gap-[5px] py-[40px]">
          <div className="flex gap-[10px] items-center">
            <img src="/670df50b1b9142294387b0b9_ic-title.svg" width={20} />
            <h2 className="text-[15px] text--body">CATEGORIES</h2>
          </div>
          <div>
            <h1 className="text-[32px] font-medium mt-4">{category}</h1>{" "}
          </div>

          <div className="flex flex-col items-center gap-[20px] mt-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard
                  to={`/property/${property.id}`}
                  key={property.id}
                  src={property.image}
                  name={property.name}
                  location={property.location}
                  price={property.price}
                  availability={property.availability}
                  id={property.id}
                />
              ))
            ) : (
              <p>No properties found in this category.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertiesByCategories;
