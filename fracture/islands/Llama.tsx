import { useEffect, useState } from "preact/hooks";
import { run } from "../routes/api/llama.ts";


export default function Llama() {
const [story, setStory] = useState("")
console.log('this is on fire')
    const fetchStory = async () => {
       const data =  await run("@cf/meta/llama-3-8b-instruct", {
            messages: [
                {
                    role: "system",
                    content: "You are a friendly assistant that helps write stories",
                },
                {
                    role: "user",
                    content: "Write a short story about a llama that goes on a journey to find an orange cloud ",
                },
            ],
        })
    setStory(data)
    }
    fetchStory().catch(console.error)

    return (
        <div>
            <p>yellow stone</p>
            <p>{story}</p>
        </div>
    );
}