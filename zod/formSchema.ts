import { z} from "zod";

export const formSchema=z.object({
    rank: z.number().min(1,{message:'Invalid rank'}),
    percent:z.number().min(1,{message:"Invalid percentile"}).max(100,{message:"Invalid percentile"}),
    score:z.number().min(1,{message:"Invalid score"}).max(15,{message:'Invalid score'})
})

export type formSchemaType=z.infer<typeof formSchema>