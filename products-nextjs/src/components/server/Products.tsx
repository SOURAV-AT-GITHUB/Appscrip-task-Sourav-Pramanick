import React, { useEffect, useState } from "react";
import emptyHeart from "@/assets/empty-heart.svg";
import filledHeart from "../../assets/filled-heart.jpg";
interface Product {
  title: string;
  image: string;
  fav?: boolean;
}
interface ProductsProps {
  isVisible: boolean;
  updateCount: (value: number) => void;
}
async function fetchData(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Products: React.FC<ProductsProps> = ({ isVisible, updateCount }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
        updateCount(data.length);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="text-6xl m-auto">Loading...</div>;
  if (error) return <div className="text-6xl m-auto">Error: {error}, API is down</div>;

  return (
    <div
      className={`mt-4  p-0 sm:p-1 lg:p-2 xl:p-3 2xl:p-5 ${
        isVisible ? " w-full sm:w-full lg:w-5/6 xl:w-5/6 2xl:w-5/6" : " w-full"
      }`}
    >
      <div
        className={`${
          isVisible
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-5"
            : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-1 xl:gap-8"
        }`}
      >
        {products.map((e, index) => (
          <div key={index} className=" p-1">
            <img
              className="h-52 sm:h-56 lg:h-72  w-full   md:w-5/6 lg:w-full min-[450px]:w-4/5  m-auto "
              src={e.image}
              alt={e.title}
            />
            <div className="flex justify-between pl-1 mt-2">
              <div className="w-4/5  truncate text-left">
                <h3 className="truncate font-bold text-xs sm:text-lg">
                  {e.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs  w-fit text-wrap">
                  <a href="/signin" className="underline">
                    Sign in{" "}
                  </a>{" "}
                  or create an account to see pricing
                </p>
              </div>
              <div className="w-1/5 h-full   self-center items-center">
              <img
              className={`${e.fav ? "filled-heart" : "empty-heart"} w-full h-full`}
                onClick={() => {
                  let temp = [...products];
                  temp[index].fav = !temp[index].fav;
                  setProducts(temp)
                }}
                src={e.fav ? "https://i.pinimg.com/564x/fc/59/d3/fc59d37545bd4598ccdeb29fe4cd623b.jpg"  :  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20101%22%3E%3Cpath%20d%3D%22M49.7%2080.9c.3.1.6.2.9.2.3%200%20.6-.1.9-.2C78%2070.1%2086.9%2050.7%2084.1%2036.2c-1.9-9.8-8.9-16.1-17.8-16.1-5%200-10.4%202-15.7%205.9-5.3-4-10.8-6.1-15.8-6.1-8.9%200-15.9%206.4-17.8%2016.2-2.9%2014.7%206.1%2034.2%2032.7%2044.8zM21.6%2037.1c1.4-7.5%206.6-12.3%2013.1-12.3%204.4%200%209.4%202.1%2014.3%206.2.9.7%202.1.7%203%200%204.9-4%209.8-6%2014.2-6%206.5%200%2011.7%204.8%2013.1%2012.2%202.4%2012.4-5.6%2029.2-28.8%2039-23.2-9.8-31.3-26.6-28.9-39.1z%22%2F%3E%3C%2Fsvg%3E" }
                alt="empty-heart"
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
