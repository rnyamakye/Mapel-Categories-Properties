import { useEffect } from "react";
import MainHeader from "../components/MainHeader";
import { CategoryCard } from "../components/CategoryCard";
import { categories } from "../assets/Data";

const Categories = () => {
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
            <h2 className="text-[15px] -text--body">CATEGORIES</h2>
          </div>
          <div>
            <h1 className="text-[32px] md:font-[38px] font-medium">
              Property Categories
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              src={category.image}
              categoryName={category.name}
              description={category.description}
              category={category.category}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Categories;
