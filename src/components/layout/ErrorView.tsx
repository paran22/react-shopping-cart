import { P, match } from 'ts-pattern';

interface ErrorViewProps {
  error?: Error;
}

export default function ErrorView({ error }: ErrorViewProps) {
  const errorMessage = match(error)
    .with(P.nonNullable, ({ message }) => message)
    .otherwise(() => '에러가 발생했어요😭');
  return (
    <div className="flex items-center justify-center h-full">
      {errorMessage}
    </div>
  );
}
