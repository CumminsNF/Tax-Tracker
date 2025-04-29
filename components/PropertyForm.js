// components/PropertyForm.js
import { useState } from "react";

export default function PropertyForm({ onSubmit }) {
  const [address, setAddress] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [assessedValues, setAssessedValues] = useState([{ year: "", value: "" }]);

  const handleAddRow = () => {
    setAssessedValues([...assessedValues, { year: "", value: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newValues = [...assessedValues];
    newValues[index][field] = value;
    setAssessedValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, purchasePrice, assessedValues });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <div>
        <label className="block font-medium">Property Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Purchase Price</label>
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Assessed Values</label>
        {assessedValues.map((entry, i) => (
          <div key={i} className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="Year"
              value={entry.year}
              onChange={(e) => handleChange(i, "year", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
            <input
              type="number"
              placeholder="Value"
              value={entry.value}
              onChange={(e) => handleChange(i, "value", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddRow} className="text-blue-600 underline mt-2">
          + Add Another Year
        </button>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
