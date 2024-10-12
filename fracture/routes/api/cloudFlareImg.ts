import type { FreshContext, Handlers } from '$fresh/server.ts';
import { mockResponse } from '../../aiConfigs/imageGenConfig.ts';
import * as uuid from 'jsr:@std/uuid';

const fileLoading = new Map();
async function writeFile(imgId: string, response: Response) {
  if (response.body) {
    Deno.writeFile(`./static/${imgId}.png`, response.body);
    return fileLoading.delete(imgId);
  }
}

export const handler: Handlers = {
  async POST(req, ctx: FreshContext) {
    const { model, inputs } = await req.json();
    if (model === '@cf/runwayml/stable-diffusion-v1-5-img2img') {
      inputs['image'] = [
        ...new Uint8Array(
          await Deno.readFile(
            './static/ee5fe0b0-8865-11ef-b488-295c63c5711c.png',
          ),
        ),
      ];
    }
    if (Deno.env.get('NODE_ENV') === 'development') {
      return Response.json(mockResponse);
    }
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/055de81bd1ed5b4b8b9103ddfe3886a5/ai/run/${model}`,
        {
          headers: {
            Authorization: `Bearer ${Deno.env.get('WORKER_AI_TOKEN')}`,
          },
          method: 'POST',
          body: JSON.stringify(inputs),
        },
      );
      const imgId = uuid.v1.generate();
      fileLoading.set(imgId, writeFile);
      if (fileLoading.has(imgId)) {
        await writeFile(imgId, response);
      }
      return Response.json(imgId);
    } catch (error) {
      throw error as any;
    }
  },
};
