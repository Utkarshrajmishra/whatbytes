"use client"
import { ProgressDemo } from "@/components/progressbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PieChart from "@/components/chart";
import { ComponentChart } from "@/components/linechart";
import { useState } from "react";

export default function Home() {
  const [score,setScore]=useState({
    rank: 1,
    percentile:30,
    score:10
  })

  const [chartData, setChartData] = useState([
    { percentile: 0, people: 2 },
    { percentile: 10, people: 4 },
    { percentile: 21, people: 8 },
    { percentile: 25, people: 16 },
    { percentile: 50, people: 12 },
    { percentile: 75, people: 9 },
    { percentile: 100, people: 3 },
  ]);
  return (
    <section className="py-4 md:py-6 h-[calc(100vh-64px)] overflow-x-scroll px-4 md:pl-12 w-full">
      <p className="text-zinc-500">Skill Test</p>

      <main className="flex flex-col lg:flex-row gap-4 md:gap-[34px] mt-4 md:mt-6">
        {/* Left Column */}
        <section className="w-full lg:w-auto">
          {/* HTML Card */}
          <div className="border rounded-xl shadow h-auto md:h-24 flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center p-3 md:p-4 w-full lg:w-[580px]">
            <Image
              alt="HTML Icon"
              src={"/html.png"}
              width={40}
              height={40}
              className="md:w-[50px] md:h-[50px]"
            />
            <div className="flex flex-col md:flex-row w-full gap-2 md:gap-1">
              <div className="text-sm flex-1">
                <p className="font-bold">Hyper Text Markup Language</p>
                <p className="text-zinc-600 text-xs md:text-sm">
                  Question: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
              <div className="self-start md:self-center">
                <Button className="bg-[#132278] text-xs md:text-sm border border-black">
                  Update
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="border rounded-xl shadow mt-4 md:mt-6 w-full lg:w-[580px] p-3 md:p-4">
            <p className="font-bold text-sm mb-2">Quick Statistics</p>
            <div className="flex flex-col sm:flex-row justify-between px-0 sm:px-6 gap-4 sm:gap-0">
              {/* First Stat */}
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center bg-zinc-100 border rounded-full mr-2">
                  🏆
                </div>
                <div>
                  <p className="font-bold">{score.rank}</p>
                  <p className="text-xs text-zinc-400">YOUR RANK</p>
                </div>
                {/* Divider - hidden on mobile */}
                <div className="h-12 w-px bg-zinc-200 ml-4 hidden sm:block" />
              </div>

              {/* Second Stat */}
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center bg-zinc-100 border rounded-full mr-2">
                  📊
                </div>
                <div>
                  <p className="font-bold">{score.percentile}%</p>
                  <p className="text-xs text-zinc-400">PERCENTILE</p>
                </div>
                <div className="h-12 w-px bg-zinc-200 ml-4 hidden sm:block" />
              </div>

              {/* Third Stat */}
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center bg-zinc-100 border rounded-full mr-2">
                  ⏱️
                </div>
                <div>
                  <p className="font-bold">{score.score}/15</p>
                  <p className="text-xs text-zinc-400">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <ComponentChart data={chartData} current={score.percentile}/>
        </section>

        {/* Right Column */}
        <div className="w-full lg:w-auto lg:flex-1 pr-0 md:pr-6">
          {/* Syllabus Analysis */}
          <section className="w-full border rounded-xl shadow p-3 md:p-6">
            <p className="text-sm font-bold">Syllabus Wise Analysis</p>
            <ProgressDemo
              title="HTML Tools, Forms, History"
              color="[&>*]:bg-blue-500"
              bgColor="bg-blue-100"
              totalProgress={80}
              textColor="text-blue-500"
            />
            <ProgressDemo
              title="Tags & References in HTML"
              color="[&>*]:bg-orange-500"
              bgColor="bg-orange-100"
              totalProgress={60}
              textColor="text-orange-500"
            />
            <ProgressDemo
              title="Tables & CSS Basics"
              color="[&>*]:bg-red-500"
              bgColor="bg-red-100"
              totalProgress={24}
              textColor="text-red-500"
            />
            <ProgressDemo
              title="HTML Practice & Projects"
              color="[&>*]:bg-green-500"
              bgColor="bg-green-100"
              totalProgress={96}
              textColor="text-green-500"
            />
          </section>

          {/* Question Analysis */}
          <div className="mt-4">
            <PieChart  score={score.score}/>
          </div>
        </div>
      </main>
    </section>
  );
}
