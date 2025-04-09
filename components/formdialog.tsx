"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, formSchemaType } from "@/zod/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type Score = {
  rank: number;
  percentile: number;
  score: number;
};

type ChartData = {
  percentile: number;
  people: number;
};

type FormDialogProps = {
  score: Score;
  setScore: (score: Score) => void;
  setChartData: (data: ChartData[]) => void;
  chartData: ChartData[];
};

function FormDialog({
  score,
  setScore,
  setChartData,
  chartData,
}: FormDialogProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rank: score.rank || undefined,
      percent: score.percentile || undefined,
      score: score.score || undefined,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    setScore({
      rank: data.rank,
      percentile: data.percent,
      score: data.score,
    });

    let temp = [...chartData];
    const index = temp.findIndex((item) => item.percentile === data.percent);
    if (index === -1) {
      temp.push({ percentile: data.percent, people: 1 });
    } else temp[index].people = temp[index].people + 1;
    setChartData(temp);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#132278] text-xs md:text-sm border-2 border-black"
        >
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] [&>button:last-child]:hidden">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            Update scores
            <Image src="/html.png" alt="HTML" height={35} width={35} />
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Rank Input */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm">
              <p className="text-white flex justify-center rounded-full bg-blue-900 w-6 h-6 items-center">
                1
              </p>
              <p>
                Update your <span className="font-bold">Rank</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Input
                type="number"
                {...register("rank", { valueAsNumber: true })}
                className="w-[150px] border-blue-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.rank && (
                <p className="text-red-500 text-xs">{errors.rank.message}</p>
              )}
            </div>
          </div>

          {/* Percentile Input */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm">
              <p className="text-white flex justify-center rounded-full bg-blue-900 w-6 h-6 items-center">
                2
              </p>
              <p>
                Update your <span className="font-bold">Percentile</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Input
                type="number"
                {...register("percent", { valueAsNumber: true })}
                className="w-[150px] border-blue-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.percent && (
                <p className="text-red-500 text-xs">{errors.percent.message}</p>
              )}
            </div>
          </div>

          {/* Score Input */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm">
              <p className="text-white flex justify-center rounded-full bg-blue-900 w-6 h-6 items-center">
                3
              </p>
              <p>
                Update your{" "}
                <span className="font-bold">Current Score (out of 15)</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Input
                type="number"
                {...register("score", { valueAsNumber: true })}
                className="w-[150px] border-blue-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.score && (
                <p className="text-red-500 text-xs">{errors.score.message}</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="mt-4">
            <DialogTrigger asChild>
              <Button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-transparent text-blue-900 border border-blue-900 text-sm"
              >
                Cancel
              </Button>
            </DialogTrigger>
            <Button
              type="submit"
              className="flex items-center bg-blue-900 text-sm"
            >
              Save
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
