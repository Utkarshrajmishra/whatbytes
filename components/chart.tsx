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
import { useState, useEffect } from "react";

// const TOTAL_QUESTIONS = 20;
// const CORRECT_ANSWERS = 5;
// const PERCENTAGE = (CORRECT_ANSWERS / TOTAL_QUESTIONS) * 100;

function PieChart({ score }: { score: number }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const PERCENTAGE = (score / 15) * 100;
    setPercent(PERCENTAGE);
  }, [score]);

  const chartData = [
    {
      browser: "safari",
      visitors: percent,
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

  return (
    <Card className="flex flex-col h-fit">
      <CardHeader className="items-center pb-0">
        <div className="flex justify-between">
          <p className="text-sm font-bold">Question Analysis</p>
          <p className="text-blue-600 font-bold text-sm">
            {score}/{15}
          </p>
        </div>

        <CardDescription>
          <span className="font-bold">
            You scored {score} questions correct out of 15.
          </span>{" "}
          {percent === 100
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
            endAngle={(score / 15) * 360}
            innerRadius={63}
            outerRadius={115}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className={`first:fill-blue-100 last:fill-background`}
              polarRadius={[74, 55]}
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

export default PieChart;
