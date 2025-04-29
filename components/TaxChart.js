// components/TaxChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function TaxChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="p-4 bg-white mt-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Assessed Value Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0070f3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
