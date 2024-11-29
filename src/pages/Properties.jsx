import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import MainHeader from "../components/MainHeader";
import { PropertyCard } from "../components/PropertyCard";
import { NavButton } from "../components/Buttons";
import { FAQSection } from "../components/FAQSection";
import { properties } from "../assets/Data";

const Properties = () => {
  const { pageNumber } = useParams(); // Get the page number from URL
  const currentPage = parseInt(pageNumber) || 1; // Default to page 1 if not provided
  const itemsPerPage = 6; // Number of properties per page
  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate start index
  const displayedProperties = properties.slice(
    startIndex,
    startIndex + itemsPerPage
  ); // Get properties for current page

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleNavigation = () => {
    if (displayedProperties.length < itemsPerPage) {
      // There are 11 properties so when there's no more properties to display, go back to the previous page
      navigate(`/properties/${currentPage - 1}`);
    } else {
      // Otherwise, go to the next page
      navigate(`/properties/${currentPage + 1}`);
    }
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
  }, [pageNumber]);

  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="flex flex-col items-center font mx-[5vw] lg:mx-[10vw]">
        <section className=" CategoriesSectionPage-1">
          <div className="flex flex-col gap-[5px] py-[40px]">
            <div className="flex gap-[10px] items-center">
              <img
                src="/670df50b1b9142294387b0b9_ic-title.svg"
                width={25}
                alt="New Arrivals"
              />
              <h2 className="text-[16px] -text--body">NEW ARRIVALS</h2>
            </div>
            <div>
              <h1 className="text-[32px] md:font-[38px] lg:text-[48px] font-medium">
                Latest Properties
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3">
            {displayedProperties.map((property) => (
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
            ))}
          </div>

          <div className="flex justify-end pt-[40px] pb-[50px]">
            <NavButton
              onClick={handleNavigation}
              className={`${
                displayedProperties.length < itemsPerPage ? "previous" : "next"
              }`}
            >
              {displayedProperties.length < itemsPerPage ? "Previous" : "Next"}
            </NavButton>
          </div>
        </section>

        <section className="FAQSection">
          <FAQSection />
        </section>
      </main>
    </>
  );
};

export default Properties;
