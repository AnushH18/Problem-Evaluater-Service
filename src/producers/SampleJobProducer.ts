import SampleQueue from "../queues/SampleQueue";

export default async function(name: string, payload:Record<string,unknown>){
    await SampleQueue.add(name, payload);
    console.log("successfully added a job");
    
}   