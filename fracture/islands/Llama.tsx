import { useEffect, useState } from 'preact/hooks';

export default function Llama() {
  const [promptInput, setPromptInput] = useState('');
  const [prompt, setPrompt] = useState<string>('');
  const [story, setStory] = useState('');
  const onSubmit = (event: any) => {
    event.preventDefault();
    setPrompt(promptInput);
  };
  const onChangeHandler = (event: any) => {
    setPromptInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={promptInput}
          onChange={onChangeHandler}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>
        <p>new</p>
        <p>{story}</p>
      </div>
    </div>
  );
}
