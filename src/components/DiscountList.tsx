"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
type Discount = [string, string, string, string, boolean];

const DiscountList: React.FC = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      const response = await fetch("/api/get-discounts");
      const data = await response.json();
      setDiscounts(data);
    };
    fetchDiscounts();
  }, []);

  return (
    <Card className="max-w-3xl mx-auto mt-8">
      <CardHeader>
        <h2 className="text-lg font-bold">Generated Discounts</h2>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Phone Number</TableCell>
              <TableCell>Discount Code</TableCell>
              <TableCell>Expiration Date</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discounts.map((discount, index) => (
              <TableRow key={index}>
                <TableCell>{discount[0]}</TableCell>
                <TableCell>{discount[1]}</TableCell>
                <TableCell>{new Date(discount[2]).toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DiscountList;
