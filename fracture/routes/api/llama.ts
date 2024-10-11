import type { FreshContext, Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
  async POST(req, ctx: FreshContext) {
    const { model, input } = await req.json();
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/055de81bd1ed5b4b8b9103ddfe3886a5/ai/run/${model}`,
      {
        headers: { Authorization: `Bearer ${Deno.env.get('WorkerAIToken')}` },
        method: 'POST',
        body: JSON.stringify(input),
      },
    );
    return response;
  },
};
