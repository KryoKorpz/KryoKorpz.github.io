import { WorkerAiGenModel } from '../aiConfigs/aiConfig.ts';
import { useState } from 'preact/hooks';

interface ModelSelectProps {
  models: WorkerAiGenModel[];
}

export default function ModelSelect(props: ModelSelectProps) {
  const { models } = props;
  const [selectedModel, setSelectedModel] = useState<WorkerAiGenModel>();
  function onChange(event: any) {
    event.preventDefault();
    const [targetModel] = models.filter((
      model,
    ) => (event.target.value === model.id));

    setSelectedModel(targetModel);
  }
  return (
    <div>
      <form
        className='max-w-sm mx-auto'
        action={`/textGen/${encodeURIComponent(selectedModel?.id || '')}`}
      >
        <select
          id='genModels'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={onChange}
        >
          <option selected>Select a Model</option>
          {models.map((model) => (
            <option value={model.id}>
              {model.label}
            </option>
          ))}
        </select>
        {selectedModel && <p>{selectedModel.description}</p>}
        <button
          type='submit'
          className='rounded-md border-2 w-24 m-3'
        >
          Load Model
        </button>
      </form>
    </div>
  );
}
