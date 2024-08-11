import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  image: string;
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
  if (error) return <div className="text-6xl m-auto">Error: {error}</div>;

  return (
    <div
      className={`mt-4  p-0 sm:p-1 lg:p-2 xl:p-3 2xl:p-5 ${
        isVisible
          ? " w-full sm:w-full lg:w-5/6 xl:w-5/6 2xl:w-5/6"
          : " w-full"
      }`}
    >
      <div
        className={`${
          isVisible
            ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-5"
            : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-1 "
        }`}
      >
        {products.map((e, index) => (
          <div key={index} className="text-center p-1">
            <img className="h-24 sm:h-40 lg:h-44  w-3/5  m-auto" src={e.image} alt={e.title} />
            <h3 className="truncate">{e.title}</h3>
            <p className="text-xs truncate">
              <a href="/signin" className="underline">
                Sign in{" "}
              </a>{" "}
              or create an account to see pricing
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
