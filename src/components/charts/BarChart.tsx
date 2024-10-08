import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
];

export function BarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}