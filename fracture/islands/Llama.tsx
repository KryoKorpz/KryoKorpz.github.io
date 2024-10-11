import type { FreshContext, Handlers } from '$fresh/server.ts';
import { useEffect, useState } from 'preact/hooks';
import { createContext } from 'preact';

const LlamaContext = createContext('llama');
export default function Llama() {
  const [promptInput, setPromptInput] = useState('');
  const [story, setStory] = useState('');
  const onSubmit = async (event: any) => {
    console.log('onsbumit Response');

    event.preventDefault();
    // const response = await fetch('/api/llama', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     model: '@cf/meta/llama-3-8b-instruct',
    //     input: {
    //       messages: [
    //         {
    //           role: 'system',
    //           content: 'You are a succubus who is trying to corrupt the world',
    //         },
    //         {
    //           role: 'user',
    //           content: promptInput,
    //         },
    //       ],
    //     },
    //   }),
    // });
    // console.log('pre Response');
    // console.log(response);
    // const { result } = await response.json();
    const mockResponse = {
      'result': {
        'response':
          'The memories. It was a time when mortals still dared to trifle with the forces of darkness. I had been dwelling in the city of Ashkirk, where my whispered promises of power and pleasure had already begun to corrupt the hearts of many.\n\nOne brave fool, a young warrior named Eryndor Thorne, had grown suspicious of my influence. He had witnessed the strange occurrences that followed my presence: the unexplained fires, the eerie whispers in the night, and the inexplicable covetousness that seemed to spread like a plague.\n\nEryndor had gathered a small band of companions, each with their own reasons for resisting my corruption. There was Lyra, a skilled huntress with a warrior\'s spirit; Arin, a scholar who had studied the ancient tomes of forbidden knowledge; and Jax, a mysterious sorcerer with a talent for weaving powerful spells.\n\nI had been toying with them, using my charms to lure them deeper into the shadows. I had whispered sweet nothings in their ears, promised them untold power and glory, and even appeared to them in visions, tempting them with promises of immortality.\n\nBut Eryndor was not so easily swayed. He had a spark within him, a flame of righteousness that refused to be extinguished. As we faced each other in the crumbling ruins of an ancient temple, I could sense his determination.\n\n"You are a servant of the darkness," Eryndor declared, his voice firm and unyielding. "And I will not let you cast your shadow over this city."\n\nI laughed, the sound echoing off the stone walls. "You are no match for me, mortal," I sneered. "I have the power to manipulate the very fabric of reality."\n\nEryndor smiled, his eyes glinting with defiance. "I may not know the secrets of the universe, but I know this: that you are not a god, and that your power is not infinite. And I will not back down."\n\nWith a wave of his hand, Eryndor summoned a blast of holy energy that sent me stumbling backward. My powers, fueled by the darkness, were no match for the pure however, and I was forced to retreat.\n\nAs I vanished into the shadows, I could feel my influence begin to wane. The whispers in the night grew silent, the fires that had burned with malevolent intent dying out, and the covetousness that had spread like a plague began to recede.\n\nIn that',
      },
      'success': true,
      'errors': [],
      'messages': [],
    };
    return setStory(mockResponse.result.response);
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
