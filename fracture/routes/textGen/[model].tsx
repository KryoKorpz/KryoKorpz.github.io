import TextGen from '../../islands/TextGen.tsx';
import { PageProps } from '$fresh/server.ts';
import { imageGenModels } from '../../aiConfigs/imageGenConfig.ts';
import ImageGen from '../../islands/ImageGen.tsx';
import { memo } from 'preact/compat';

export default function TextGenPage(props: PageProps) {
  const modelParam = decodeURIComponent(props.params.model);
  const isImageGenModel = imageGenModels.some((model) =>
    model.id === modelParam
  );
  const MemoImageGen = memo(
    ImageGen,
    (prevProps: PageProps, nextProps: PageProps) => {
      return props.params.model === props.params.model;
    },
  );
  const MemoTextGen = memo(
    TextGen,
    (prevProps: PageProps, nextProps: PageProps) => {
      return props.params.model === props.params.model;
    },
  );
  return (
    <main>
      {isImageGenModel
        ? <MemoImageGen model={modelParam} />
        : <MemoTextGen model={modelParam} />}
    </main>
  );
}
