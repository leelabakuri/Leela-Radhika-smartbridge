import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function ResolveNow() {
  const [complaints, setComplaints] = useState([
    { id: 1, title: "Road damage near sector 5", status: "Pending" },
    { id: 2, title: "Street lights not working", status: "In Progress" },
  ]);

  const [newComplaint, setNewComplaint] = useState("");

  const addComplaint = () => {
    if (newComplaint.trim() === "") return;
    const newId = complaints.length + 1;
    const newEntry = { id: newId, title: newComplaint, status: "Pending" };
    setComplaints([...complaints, newEntry]);
    setNewComplaint("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          🛠️ ResolveNow - Community Complaint Tracker
        </h1>

        <div className="flex mb-6 gap-2">
          <input
            type="text"
            value={newComplaint}
            onChange={(e) => setNewComplaint(e.target.value)}
            placeholder="Describe your complaint..."
            className="flex-1 border border-gray-300 rounded px-4 py-2"
          />
          <Button onClick={addComplaint}>Submit</Button>
        </div>

        <div className="grid gap-4">
          {complaints.map((complaint) => (
            <Card key={complaint.id}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{complaint.title}</h2>
                <p className="text-sm text-gray-600">Status: {complaint.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
