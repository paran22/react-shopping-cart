import { DotLoader } from 'react-spinners';

export default function LoadingView() {
  return (
    <div className="flex items-center justify-center h-full">
      <DotLoader color="#2ac1bc" />
    </div>
  );
}
