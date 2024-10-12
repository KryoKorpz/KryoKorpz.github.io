import TextGen from '../../islands/TextGen.tsx';
import { PageProps } from '$fresh/server.ts';
import { imageGenModels } from '../../aiConfigs/imageGenConfig.ts';
import ImageGen from '../../islands/ImageGen.tsx';

export default function TextGenPage(props: PageProps) {
  const modelParam = decodeURIComponent(props.params.model);

  return (
    <main>
      {imageGenModels.some((model) => model.id === modelParam)
        ? <ImageGen model={modelParam} />
        : <TextGen model={modelParam} />}
    </main>
  );
}
