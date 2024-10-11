import { useState } from 'preact/hooks';

export default function Llama() {
  const [promptInput, setPromptInput] = useState('');
  const [narratorInput, setNarratorInput] = useState('');
  const [story, setStory] = useState('');
  const [promptInputBoolean, setPromptInputBoolean] = useState(false);
  const narratorDefault =
    'You are a powerful sexy succubus that uses the pleasures of flesh to corrupt heroes';

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
    //           content: narratorInput || narratorDefault,
    //         },
    //         {
    //           role: 'user',
    //           content: promptInput,
    //         },
    //       ],
    //     },
    //   }),
    // });

    // const { result } = await response.json();
    const mockResponse = {
      'result': {
        'response':
          "In the land of Eridoria, where the sun dipped into the horizon and painted the sky with hues of crimson and gold, a brave hero named Eryndor Thorne resided. He was renowned for his unwavering courage, a true champion of justice, and a defender of the innocent. His sword, forged from the metals of the gods, shone with a light that illuminated the darkest of paths.\n\nEryndor roamed the realm, facing numerous trials and vanquishing fearsome beasts. His legend grew, and his name became synonymous with bravery and honor. However, as he delved deeper into the mysteries of the world, he began to notice something peculiar. The folk he saved, the women he protected, and even the gods themselves would often gaze at him with a strange, longing intensity.\n\nUnbeknownst to Eryndor, the whispers of a wicked succubus, known only as Lyra, had reached the ears of the gods. She was a mistress of seduction, a weaver of dreams, and a corruptor of heroes. Lyra had been imprisoned for centuries, bound by powerful spells and incantations. However, as Eryndor's fame spread, Lyra's influence began to seep into the world.\n\nOne fateful eve, as the hero Eryndor rested in a secluded glade, Lyra's dark magic enveloped him. Her whispers entered his mind, awakening a deep, primal desire within him. Eryndor felt an intense longing, as if he were being drawn to a siren's song. The succubus's presence awakened a part of him he never knew existed, a pleasurable, almost euphoric sensation that he couldn't ignore.\n\nAs the hero succumbed to Lyra's charms, his body began to shift, his muscles rippling beneath his armor like a living flame. His sword, now transformed into a pair of delicate, yet deadly, talons, gleamed with a fiery hue. His eyes, once bright as the stars, now burned with an emerald intensity, reflecting the succubus's own ethereal beauty.\n\nEryndor's transformation was complete. He was no longer a mortal hero, but a succubus, a creature of the night, bound to Lyra's will. The consciousness of the hero still lingered, trapped within the succubus's mind, as a constant reminder of his former life.\n\nLyra, pleased with her handiwork, revealed",
      },
      'success': true,
      'errors': [],
      'messages': [],
    };
    return setStory(mockResponse.result.response);
    // return setStory(result.response);
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
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={promptInput}
          onChange={onChangeHandlerPrompt}
        />
      </form>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={narratorInput}
          onChange={onChangeHandlerNarrator}
        />
        <button disabled={!promptInputBoolean} type='submit'>Submit</button>
      </form>
      <div>
        <p>new</p>
        <p>{story}</p>
      </div>
    </div>
  );
}
