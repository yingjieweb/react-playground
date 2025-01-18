interface PageSlideItemProps {
  isScrolling: boolean;
  children: React.ReactNode;
  className: string;
}

export const PageSlideItem = (props: PageSlideItemProps) => {
  const { isScrolling, children, className } = props;

  return (
    <div className={className} style={{ opacity: isScrolling ? 0 : 1 }}>
      {children}
    </div>
  );
};
