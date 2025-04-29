// pages/index.js
import { useState } from "react";
import PropertyForm from "../components/PropertyForm";
import TaxChart from "../components/TaxChart";

export default function Home() {
  const [propertyData, setPropertyData] = useState(null);

  const handleFormSubmit = (data) => {
    const parsedData = data.assessedValues.map((entry) => ({
      year: entry.year,
      value: Number(entry.value),
    }));
    setPropertyData(parsedData);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Tax Tracker</h1>
      <PropertyForm onSubmit={handleFormSubmit} />
      <TaxChart data={propertyData} />
    </main>
  );
}

  