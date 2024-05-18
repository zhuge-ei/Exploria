"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface DiscountFormProps {
  onNewDiscount: () => void;
}

const DiscountForm: React.FC<DiscountFormProps> = ({ onNewDiscount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/get-discount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    setMessage(
      `Discount Code: ${data.discountCode}, Expires At: ${data.expiresAt}`,
    );
    onNewDiscount();
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-lg font-bold">Generate Discount</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phoneNumber">Phone Number:</Label>
            <Input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white">
            Get Discount
          </Button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </CardContent>
    </Card>
  );
};

export default DiscountForm;
