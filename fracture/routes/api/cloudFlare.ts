import type { FreshContext, Handlers } from '$fresh/server.ts';
import { mockResponse } from '../../aiConfigs/textGenConfig.ts';

export const handler: Handlers = {
  async POST(req, ctx: FreshContext) {
    const { model, input } = await req.json();
    console.log({ model });
    input['image'] = await Deno.readFile('./images/mars.png');
    console.log(input);
    if (Deno.env.get('NODE_ENV') === 'development') {
      console.log('development');
      return Response.json(mockResponse);
    }
    console.log('production');
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/055de81bd1ed5b4b8b9103ddfe3886a5/ai/run/${model}`,
      {
        headers: { Authorization: `Bearer ${Deno.env.get('WORKER_AI_TOKEN')}` },
        method: 'POST',
        body: JSON.stringify(input),
      },
    );
    return response;
  },
};
