import "jsr:@std/dotenv/load";

export async function run(model: any, input: any) {
    console.log('Run Forest')
    const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/055de81bd1ed5b4b8b9103ddfe3886a5/ai/run/${model}`,
        {
            headers: { Authorization: `Bearer ${Deno.env.get("WorkerAIToken")}` },
            method: "POST",
            body: JSON.stringify(input),
        }
    );

    console.log(response)
    const result = await response.json();
    console.log(result)
    return result;
}
