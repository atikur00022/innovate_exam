import Image from "next/image";

import React from 'react';
import Index from "@/pages";
import AllCategories from "@/pages/AllCategories";

const Home = () => {
  return (
      <div>
          <Index/>
          <AllCategories/>
      </div>
  );
};

export default Home;