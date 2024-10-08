import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { LayoutDashboard, BarChart2, PieChart, LineChart, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: BarChart2, label: 'Bar Chart', href: '/bar-chart' },
  { icon: PieChart, label: 'Pie Chart', href: '/pie-chart' },
  { icon: LineChart, label: 'Line Chart', href: '/line-chart' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-background border-r">
      <ScrollArea className="h-full py-6">
        <h2 className="mb-4 px-7 text-lg font-semibold tracking-tight">
          Analytics Dashboard
        </h2>
        <nav className="space-y-1.5">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center py-2 px-7 text-sm font-medium rounded-lg hover:bg-muted"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </a>
          ))}
        </nav>
        <Separator className="my-4" />
      </ScrollArea>
    </div>
  );
}