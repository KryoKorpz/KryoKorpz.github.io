import { useState } from 'preact/hooks';
import { narratorDefault } from '../aiConfigs/textGenConfig.ts';
import { GenProps } from '../aiConfigs/aiConfig.ts';

export default function TextGen(props: GenProps) {
  const [promptInput, setPromptInput] = useState('');
  const [narratorInput, setNarratorInput] = useState('');
  const [story, setStory] = useState('');
  const [promptInputBoolean, setPromptInputBoolean] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('/api/cloudFlare', {
      method: 'POST',
      body: JSON.stringify({
        model: props.model,
        input: {
          messages: [
            {
              role: 'system',
              content: narratorInput || narratorDefault,
            },
            {
              role: 'user',
              content: promptInput,
            },
          ],
        },
      }),
    });
    const { result } = await response.json();

    return setStory(result.response);
  };
  const onChangeHandlerPrompt = (event: any) => {
    setPromptInputBoolean(true);
    setPromptInput(event.target.value);
  };
  const onChangeHandlerNarrator = (event: any) => {
    setNarratorInput(event.target.value);
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
          <h2>Narrator</h2>
          <textarea
            class='mt-0 block border-3 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0 w-1/2'
            rows={5}
            value={narratorInput}
            onChange={onChangeHandlerNarrator}
          >
          </textarea>
          <button
            disabled={!promptInputBoolean}
            type='submit'
            class='rounded-md border-2 w-24 m-3'
          >
            Submit
          </button>
        </form>
        <a href='/textGen'>
          <button class='rounded-md border-2 w-24 m-3'>
            Return to Model Select
          </button>
        </a>
      </div>
      <div>
        <p>{story}</p>
      </div>
    </div>
  );
}
