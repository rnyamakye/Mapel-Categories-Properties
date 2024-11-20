import MainHeader from "../components/MainHeader";
import { CategoryCard } from "../components/CategoryCard";
import { categories } from "../assets/Data";
const Properties = () => {
  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="mx-[3vw]">
        <div className="flex flex-col gap-[5px] py-[40px]">
          <div className="flex gap-[10px] items-center">
            <img
              src="/public/670df50b1b9142294387b0b9_ic-title.svg"
              width={20}
            />
            <h2 className="text-[15px] -text--body">CATEGORIES</h2>
          </div>
          <div>
            <h1 className="text-[32px] md:font-[38px] font-medium">
              Property Categories
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              src={category.image}
              categoryName={category.name}
              description={category.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Properties;
