"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Chart data
const chartData = [
  { percentile: 0, people: 2 },
  { percentile: 10, people: 4 },
  { percentile: 21, people: 8 },
  { percentile: 25, people: 16 },
  { percentile: 50, people: 12 },
  { percentile: 75, people: 9 },
  { percentile: 100, people: 3 },
];

type ChartData = {
  percentile: number;
  people: number;
};

type ChartDataProps = {
  data: ChartData[];
  current: number;
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-white p-2 shadow-sm text-sm">
        <div className=" text-sm">{label}</div>
        <div className="text-sm text-[#c084fc]">
          numberOfStudent: {payload[0].value}
        </div>
      </div>
    );
  }
  return null;
};

export function ComponentChart({ data, current }: ChartDataProps) {
  return (
    <Card className="mt-4">
      <CardHeader className="flex justify-between">
        <div className="flex  flex-col gap-2">
          <CardTitle className="text-sm flex justify-between">
            Comparison Graph
          </CardTitle>

          <CardDescription className="text-sm">
            <span className="font-bold text-neutral-600">
              You scored 30% percentile{" "}
            </span>{" "}
            which is lower than the <br />
            average percentile 72% of all the engineers who took this assessment
          </CardDescription>
        </div>
        <div className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center bg-zinc-50 border rounded-full mr-2">
          📈
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] mt-[-20px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 30, right: 20, left: 10, bottom: 10 }} // increased top
            >
              <XAxis
                dataKey="percentile"
                type="number"
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(value) => `${value}%`}
                tickMargin={8}
                axisLine
                tickLine={false}
                allowDataOverflow={false}
                color="#000000"
                fontSize="0.89rem"
                padding={{ left: 10, right: 10 }}
              />

              <Tooltip content={<CustomTooltip />} />

              <ReferenceLine
                x={current}
                stroke="#7c3aed"
                strokeDasharray="3 3"
                label={{
                  value: "Your Data",
                  position: "insideTop",
                  fill: "#a1a1aa",
                  fontSize: 14,
                  color: "#71717a",
                  textAnchor: "middle",
                }}
              />

              <Line
                type="monotone"
                dataKey="people"
                stroke="#7c3aed"
                strokeWidth={1}
                dot={{ fill: "#7c3aed" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
