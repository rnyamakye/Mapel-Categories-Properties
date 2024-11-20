// src/pages/PropertiesByCategories.jsx
import React from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { PropertyCard } from "../components/PropertyCard"; // Ensure this is imported
import { properties } from "../assets/Data"; // Ensure this path is correct

export const PropertiesByCategories = () => {
  const { category } = useParams(); // Get the selected category from URL parameters

  // Filter properties based on the selected category
  const filteredProperties = properties.filter(
    (property) => property.category === category // Assuming each property has a 'category' field
  );

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main>
        <div className="flex gap-[10px] items-center">
          <img
            src="/670df50b1b9142294387b0b9_ic-title.svg" // Corrected image path
            width={20}
            alt="Categories"
          />
          <h2 className="text-[15px] text--body">CATEGORIES</h2>{" "}
          {/* Fixed typo */}
        </div>

        <div className="flex flex-col items-center gap-[20px] mt-4">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                src={property.image}
                name={property.name}
                location={property.location}
                price={property.price}
                availability={property.availability}
              />
            ))
          ) : (
            <p>No properties found in this category.</p> // Message for no results
          )}
        </div>
      </main>
    </>
  );
};

export default PropertiesByCategories;
