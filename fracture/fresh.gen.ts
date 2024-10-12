// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from './routes/_404.tsx';
import * as $_app from './routes/_app.tsx';
import * as $api_cloudFlare from './routes/api/cloudFlare.ts';
import * as $api_cloudFlareImg from './routes/api/cloudFlareImg.ts';
import * as $api_joke from './routes/api/joke.ts';
import * as $greet_name_ from './routes/greet/[name].tsx';
import * as $index from './routes/index.tsx';
import * as $textGen_model_ from './routes/textGen/[model].tsx';
import * as $textGen_index from './routes/textGen/index.tsx';
import * as $Counter from './islands/Counter.tsx';
import * as $ImageGen from './islands/ImageGen.tsx';
import * as $ModelSelect from './islands/ModelSelect.tsx';
import * as $TextGen from './islands/TextGen.tsx';
import * as $image from './islands/image.tsx';
import type { Manifest } from '$fresh/server.ts';

const manifest = {
  routes: {
    './routes/_404.tsx': $_404,
    './routes/_app.tsx': $_app,
    './routes/api/cloudFlare.ts': $api_cloudFlare,
    './routes/api/cloudFlareImg.ts': $api_cloudFlareImg,
    './routes/api/joke.ts': $api_joke,
    './routes/greet/[name].tsx': $greet_name_,
    './routes/index.tsx': $index,
    './routes/textGen/[model].tsx': $textGen_model_,
    './routes/textGen/index.tsx': $textGen_index,
  },
  islands: {
    './islands/Counter.tsx': $Counter,
    './islands/ImageGen.tsx': $ImageGen,
    './islands/ModelSelect.tsx': $ModelSelect,
    './islands/TextGen.tsx': $TextGen,
    './islands/image.tsx': $image,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
