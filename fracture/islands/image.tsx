import { useEffect, useState } from 'preact/hooks';

interface ImageProps {
  src: string;
}

export default function Image(props: ImageProps) {
  const [imgSrc, setImgSrc] = useState('');
  // useEffect(() => {
  //   return setImgSrc(props.src);
  // }, [props.src]);
  console.log(props.src);
  return (
    <>
      <img
        src={props.src}
        alt={'AI no worky'}
      />
    </>
  );
}
