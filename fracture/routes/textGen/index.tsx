import ModelSelect from '../../islands/ModelSelect.tsx';
import { textGenModels } from '../../aiConfigs/textGenConfig.ts';
import { imageGenModels } from '../../aiConfigs/imageGenConfig.ts';

export default function TextGenHome() {
  return (
    <main>
      <div>
        <h1>Text Gen Models</h1>
        <ModelSelect models={textGenModels} />
      </div>
      <div>
        <h1>Image Gen Models</h1>
        <ModelSelect models={imageGenModels} />
      </div>
    </main>
  );
}
