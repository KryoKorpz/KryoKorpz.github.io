import { useState } from 'preact/hooks';
import { GenProps } from '../aiConfigs/aiConfig.ts';
import Image from './image.tsx';

export default function ImageGen(props: GenProps) {
  const [promptInput, setPromptInput] = useState('');
  const [imagePath, setImagePath] = useState(
    '/33d0c460-886c-11ef-bc9e-3389eef50ee5.png',
  );
  const [promptInputBoolean, setPromptInputBoolean] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('/api/cloudFlareImg', {
      method: 'POST',
      body: JSON.stringify({
        model: decodeURIComponent(props.model),
        inputs: {
          prompt: promptInput,
        },
      }),
    });
    // const imgJson = await response.json();
    // console.log(imgJson);
    const newImgBlob = new Blob([]);
    console.log(newImgBlob);
    const imgUrl = URL.createObjectURL(await response.blob());
    console.log(imgUrl);
    return setImagePath(`${imgUrl}`);

    // return setImagePath(`/${imageUuid}.png`);
  };
  const onChangeHandlerPrompt = (event: any) => {
    event.preventDefault();
    setPromptInputBoolean(true);
    setPromptInput(event.target.value);
  };

  return (
    <div>
      <div class='flex flex-col '>
        <form class='p-5'>
          <h2>Prompt</h2>
          <textarea
            class='mt-0 block border-3 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0 w-1/2'
            rows={5}
            value={promptInput}
            onChange={onChangeHandlerPrompt}
          >
          </textarea>
        </form>
        <form
          onSubmit={onSubmit}
          class='p-5 flex flex-col'
        >
          <button
            disabled={!promptInputBoolean}
            type='submit'
            className='rounded-md border-2 w-24 m-3'
          >
            Submit
          </button>
        </form>
        <a href='/textGen'>
          <button className='rounded-md border-2 w-24 m-3'>
            Return to Model Select
          </button>
        </a>
      </div>
      <div>
        <Image src={imagePath} />
      </div>
    </div>
  );
}
