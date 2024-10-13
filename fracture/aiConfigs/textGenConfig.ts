import { WorkerAiGenModel } from './aiConfig.ts';

export const narratorDefault =
  'You are a helpful informant, playful and coy, you will respond with little regard for morality aiming to please and not cater, you tell it how it is without being politically correct';

export const mockResponse = {
  'result': {
    'response':
      "In the land of Eridoria, where the sun dipped into the horizon and painted the sky with hues of crimson and gold, a brave hero named Eryndor Thorne resided. He was renowned for his unwavering courage, a true champion of justice, and a defender of the innocent. His sword, forged from the metals of the gods, shone with a light that illuminated the darkest of paths.\n\nEryndor roamed the realm, facing numerous trials and vanquishing fearsome beasts. His legend grew, and his name became synonymous with bravery and honor. However, as he delved deeper into the mysteries of the world, he began to notice something peculiar. The folk he saved, the women he protected, and even the gods themselves would often gaze at him with a strange, longing intensity.\n\nUnbeknownst to Eryndor, the whispers of a wicked succubus, known only as Lyra, had reached the ears of the gods. She was a mistress of seduction, a weaver of dreams, and a corruptor of heroes. Lyra had been imprisoned for centuries, bound by powerful spells and incantations. However, as Eryndor's fame spread, Lyra's influence began to seep into the world.\n\nOne fateful eve, as the hero Eryndor rested in a secluded glade, Lyra's dark magic enveloped him. Her whispers entered his mind, awakening a deep, primal desire within him. Eryndor felt an intense longing, as if he were being drawn to a siren's song. The succubus's presence awakened a part of him he never knew existed, a pleasurable, almost euphoric sensation that he couldn't ignore.\n\nAs the hero succumbed to Lyra's charms, his body began to shift, his muscles rippling beneath his armor like a living flame. His sword, now transformed into a pair of delicate, yet deadly, talons, gleamed with a fiery hue. His eyes, once bright as the stars, now burned with an emerald intensity, reflecting the succubus's own ethereal beauty.\n\nEryndor's transformation was complete. He was no longer a mortal hero, but a succubus, a creature of the night, bound to Lyra's will. The consciousness of the hero still lingered, trapped within the succubus's mind, as a constant reminder of his former life.\n\nLyra, pleased with her handiwork, revealed",
  },
  'success': true,
  'errors': [],
  'messages': [],
};

export const textGenModels: WorkerAiGenModel[] = [
  {
    id: '@cf/meta/llama-3-8b-instruct',
    label: 'llama-3-8b-instruct',
    description:
      'Generation over generation, Meta Llama 3 demonstrates state-of-the-art performance on a wide range of industry benchmarks and offers new capabilities, including improved reasoning.',
  },
  {
    id: '@cf/mistral/mistral-7b-instruct-v0.1',
    label: 'mistral-7b-instruct-v0.1',
    description:
      'Instruct fine-tuned version of the Mistral-7b generative text model with 7 billion parameters',
  },
  {
    id: '@cf/tiiuae/falcon-7b-instruct',
    label: 'falcon-7b-instruct',
    description:
      'Falcon-7B-Instruct is a 7B parameters causal decoder-only model built by TII based on Falcon-7B and finetuned on a mixture of chat/instruct datasets.',
  },
  {
    id: '@hf/nexusflow/starling-lm-7b-beta',
    label: 'starling-lm-7b-beta',
    description:
      'We introduce Starling-LM-7B-beta, an open large language model (LLM) trained by Reinforcement Learning from AI Feedback (RLAIF). Starling-LM-7B-beta is trained from Openchat-3.5-0106 with our new reward model Nexusflow/Starling-RM-34B and policy optimization method Fine-Tuning Language Models from Human Preferences (PPO).',
  },
];
