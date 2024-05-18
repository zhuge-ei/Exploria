"use client"
import { useState } from "react";
import DiscountList from "../components/DiscountList";
import DiscountForm from "@/components/DiscountForm";

const HomePage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleNewDiscount = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Discount Dashboard</h1>
      <DiscountForm onNewDiscount={handleNewDiscount} />
      <DiscountList />
    </div>
  );
};

export default HomePage;
