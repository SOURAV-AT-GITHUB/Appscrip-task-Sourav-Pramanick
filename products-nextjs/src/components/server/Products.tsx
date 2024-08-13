import React, { useEffect, useState } from "react";
import './products.css'
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

  if (loading) return <div className="load-err">Loading...</div>;
  if (error) return <div className="load-err">Error: {error}, API is down</div>;

  return (
    <div
    id={isVisible ? "none": "products-container-no-filters" }
      className="products-container-with-filters"
    >
      <div
      id={isVisible ? "none" : "products-gird-no-filters"}
        className="products-gird-with-filters"
      >
        {products.map((e, index) => (
          <div key={index} className="cards">
            <img
              src={e.image}
              alt={e.title}
            />
            <div className="card-details">
              <div className="card-text ">
                <h3>
                  {e.title}
                </h3>
                <p >
                  <a href="/signin">
                    Sign in{" "}
                  </a>{" "}
                  or create an account to see pricing
                </p>
              </div>
              <div>
              <img
              className={`${e.fav ? "filled-heart" : "empty-heart"}`}
                onClick={() => {
                  let temp = [...products];
                  temp[index].fav = !temp[index].fav;
                  setProducts(temp)
                }}
                src={e.fav ? "https://i.pinimg.com/564x/fc/59/d3/fc59d37545bd4598ccdeb29fe4cd623b.jpg"  :  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20101%22%3E%3Cpath%20d%3D%22M49.7%2080.9c.3.1.6.2.9.2.3%200%20.6-.1.9-.2C78%2070.1%2086.9%2050.7%2084.1%2036.2c-1.9-9.8-8.9-16.1-17.8-16.1-5%200-10.4%202-15.7%205.9-5.3-4-10.8-6.1-15.8-6.1-8.9%200-15.9%206.4-17.8%2016.2-2.9%2014.7%206.1%2034.2%2032.7%2044.8zM21.6%2037.1c1.4-7.5%206.6-12.3%2013.1-12.3%204.4%200%209.4%202.1%2014.3%206.2.9.7%202.1.7%203%200%204.9-4%209.8-6%2014.2-6%206.5%200%2011.7%204.8%2013.1%2012.2%202.4%2012.4-5.6%2029.2-28.8%2039-23.2-9.8-31.3-26.6-28.9-39.1z%22%2F%3E%3C%2Fsvg%3E" }
                alt={e.fav ? "filled-heart" : "empty-heart"}
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
