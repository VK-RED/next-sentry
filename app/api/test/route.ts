import * as Sentry from "@sentry/nextjs";


export async function GET(req:Request){
    Sentry.metrics.set("user_view", "jane");
    console.log("Hit the Test endPoint");
    return Response.json({message:"Returing a sample message from the test endpoint !!"});
}