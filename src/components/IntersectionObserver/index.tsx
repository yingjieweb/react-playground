import React, { useEffect, useRef } from "react";

interface IntersectionObserverProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onObserve?: () => void;
  threshold?: number;
  once?: boolean;
  children: React.ReactNode;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  onObserve,
  threshold = 0.1,
  once = true,
  children,
  ...divProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [onObserve, threshold, once]);

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (once && hasTriggered.current) {
            return;
          }

          onObserve?.();
          hasTriggered.current = true;

          if (once && containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      });
    },
    { threshold }
  );

  return (
    <div ref={containerRef} {...divProps}>
      {children}
    </div>
  );
};

export default IntersectionObserver;
