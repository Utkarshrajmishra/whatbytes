"use client";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const TOTAL_QUESTIONS = 20;
const CORRECT_ANSWERS = 5;
const PERCENTAGE = (CORRECT_ANSWERS / TOTAL_QUESTIONS) * 100;

const chartData = [
  {
    browser: "safari",
    visitors: PERCENTAGE,
    fill: "#0ea5e9",
    background: "#ef4444", 
  },
];

const chartConfig = {
  visitors: {
    label: "Percentage",
  },
  safari: {
    label: "Score",
    color: "#0ea5e9",
  },
} satisfies ChartConfig;

export function PieChart() {
  return (
    <Card className="flex flex-col h-fit">
      <CardHeader className="items-center pb-0">
        <div className="flex justify-between">
          <p className="text-sm font-bold">Question Analysis</p>
          <p className="text-blue-600 font-bold text-sm">
            {CORRECT_ANSWERS}/{TOTAL_QUESTIONS}
          </p>
        </div>

        <CardDescription>
          <span className="font-bold">
            You scored {CORRECT_ANSWERS} questions correct out of{" "}
            {TOTAL_QUESTIONS}.
          </span>{" "}
          {PERCENTAGE >= 70
            ? "Great job! Keep it up!"
            : "However it still needs some improvements"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 mt-[-25px] pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={240}
            innerRadius={60}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[65, 55]}
            />
            <RadialBar
              dataKey="visitors"
              background={{ fill: "#ef4444" }}
              cornerRadius={0}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          🎯
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
