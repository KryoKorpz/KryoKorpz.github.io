import { useEffect, useState } from 'preact/hooks';

interface ImageProps {
  src: string;
}

export default function Image(props: ImageProps) {
  const [imgSrc, setImgSrc] = useState('');
  useEffect(() => {
    return setImgSrc(props.src);
  }, [props.src]);
  return (
    <>
      <img
        src={imgSrc}
        alt={'AI no worky'}
      />
    </>
  );
}
