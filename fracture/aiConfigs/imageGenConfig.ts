import { WorkerAiGenModel } from './aiConfig.ts';
export const mockResponse = async () => {
  const file = await Deno.readFile(
    './static/ee5fe0b0-8865-11ef-b488-295c63c5711c.png',
  );

  const unitArray = [
    ...new Uint8Array(file),
  ];
  // const imgBlob = new Blob([file]);
  // const imgUrl = URL.createObjectURL(imgBlob);
  // console.log(imgUrl);
  // const imgUrl = URL.createObjectURL([file]);
  // return new Response(unitArray);
  return new Response();
};
export const imageGenModels: WorkerAiGenModel[] = [
  {
    id: '@cf/lykon/dreamshaper-8-lcm',
    label: 'dreamshaper-8-lcm',
    description:
      'Stable Diffusion model that has been fine-tuned to be better at photorealism without sacrificing range.',
  },
  {
    id: '@cf/runwayml/stable-diffusion-v1-5-img2img',
    label: 'stable-diffusion-v1-5-img2img',
    description:
      'Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images. Img2img generate a new image from an input image with Stable Diffusion.',
  },
  {
    id: '@cf/bytedance/stable-diffusion-xl-lightning',
    label: 'stable-diffusion-xl-lightning',
    description:
      'SDXL-Lightning is a lightning-fast text-to-image generation model. It can generate high-quality 1024px images in a few steps.',
  },
  {
    id: '@cf/runwayml/stable-diffusion-v1-5-inpainting',
    label: 'stable-diffusion-v1-5-inpainting',
    description:
      'Stable Diffusion Inpainting is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input, with the extra capability of inpainting the pictures by using a mask.',
  },
];
