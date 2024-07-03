import * as Sentry from "@sentry/nextjs";


let user = 0;

export async function GET(req:Request){
    Sentry.metrics.set("user_view", `${++user}`,{tags:{"doneBy":`${user}`}});
    console.log("Hit the Test endPoint");
    return Response.json({message:"Returing a sample message from the test endpoint with the user set to :"+user});
}