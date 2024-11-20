// src/pages/PropertyDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../assets/Data"; // Ensure this path is correct
import MainHeader from "../components/MainHeader";

export const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL parameters
  const property = properties.find((p) => p.id === parseInt(id)); // Find the property by ID

  console.log("ID:", id); // Log the ID for debugging
  console.log("Property:", property); // Log the found property for debugging

  if (!property) {
    return (
      <>
        <nav>
          <MainHeader />
        </nav>
        <div className="text-5xl text-red-400">Property not found!</div>
      </>
    ); // Handle case where property is not found
  }

  // Get related properties (excluding the current property)
  const relatedProperties = properties.filter((p) => p.id !== property.id);

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{property.name}</h1>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover mb-4"
          />
          <p className="text-lg">{property.description}</p>
          <p className="font-bold text-xl">{property.price}</p>
          <p className="text-md">Location: {property.location}</p>
          <p className="text-md">Availability: {property.availability}</p>

          <h2 className="mt-6 text-xl font-semibold">Related Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {relatedProperties.map((related) => (
              <div
                key={related.id}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{related.name}</h3>
                  <Link
                    to={`/property/${related.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
          >
            Back to Properties
          </Link>
        </div>
      </main>
    </>
  );
};
