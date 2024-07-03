'use client';
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function TestClientPage(){

    useEffect(()=>{
        fetch("http://localhost:3000/api/test")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
    },[])

    return (
        <div>
            Check the browser console !!

            <button type="button" onClick={()=>{
                Sentry.metrics.increment("button_click", 1, {
                    tags: { browser: "Firefox", app_version: "1.0.0" },
                });
            }}>
                CLICK ME
            </button>
        </div>
    )
}