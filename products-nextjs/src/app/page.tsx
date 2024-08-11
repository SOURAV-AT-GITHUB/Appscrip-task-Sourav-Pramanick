
import ProductSection from "@/components/client/ProductSection";
import React from "react";


export default  function Home() {
  
  return (
    <main className=" w-full mt-8 ">
      <section className=" text-center">
        <h3 className=" text-4xl">DISCOVER OUR PRODUCTS</h3>
        <br />
        <p className="max-w-screen-sm m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          necessitatibus cumque, libero quibusdam sapiente tenetur accusamus
          quod distinctio.
        </p>
      </section>

      <section >
        <ProductSection/>
      </section>
    </main>
  );
}
