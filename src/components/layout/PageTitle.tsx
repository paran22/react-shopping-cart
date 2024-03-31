import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle = React.memo(({ title }: PageTitleProps) => {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="order-section__title">{title}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
});

export default PageTitle;
