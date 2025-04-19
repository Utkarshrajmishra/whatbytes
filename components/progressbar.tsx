"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo({
  totalProgress,
  title,
  color,
  bgColor,
  textColor,
}: {
  totalProgress: number;
  title: string;
  color: string;
  bgColor: string;
  textColor: string;
}) {
  
  return (
    <section className="w-full">
      <p className="text-sm mt-4 md:mt-6 text-zinc-500">{title}</p>
      <div className="flex text-sm items-center gap-3 md:gap-8">
        <div className="flex-1">
          <Progress
            value={totalProgress}
            className={`mt-2 h-2 ${color} ${bgColor}`}
          />
        </div>
        <p className={`text-sm ${textColor} font-bold whitespace-nowrap`}>
          {totalProgress}%
        </p>
      </div>
    </section>
  );
}
