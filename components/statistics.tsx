"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const Statistics=()=>{
  return (
    <Card className="flex flex-col mt-6">
      <CardHeader className="items-center text-sm font-bold  pb-0">Quick Statistics</CardHeader>
      <CardContent className="flex-1 mt-[-10px] pb-0">
        <div className="flex flex-col sm:flex-row justify-between px-0 sm:px-6 gap-4 sm:gap-0">
          {/* First Stat */}
          <div className="flex items-center">
            <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center bg-zinc-100 border rounded-full mr-2">
              🏆
            </div>
            <div>
              <p className="font-bold">1</p>
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
              <p className="font-bold">85%</p>
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
              <p className="font-bold">12/30</p>
              <p className="text-xs text-zinc-400">CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


export default Statistics