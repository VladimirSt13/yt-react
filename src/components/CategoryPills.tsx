import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "./Button";

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const TRANSLATE_AMOUNT = 100;

  useEffect(() => {
    if (containerRef === null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;

      if (container === null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  const onClickLeft = () => {
    setTranslate((translate) => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  const onClickRight = () => {
    setTranslate((translate) => {
      if (containerRef === null) {
        return translate;
      }

      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;

      if (newTranslate + width >= edge) {
        return edge - width;
      }

      return newTranslate;
    });
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}>
        {categories.map((category) => (
          <Button
            key={category}
            className="py-1 px-3 rounded-lg whitespace-nowrap transition-colors"
            variant={selectedCategory === category ? "dark" : "default"}
            onClick={() => onSelect(category)}>
            {category}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-20 h-full flex justify-start">
          <Button variant="ghost" size="icon" className="h-full w-auto aspect-square p-1.5" onClick={onClickLeft}>
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-20 h-full flex justify-end">
          <Button variant="ghost" size="icon" className="h-full w-auto aspect-square p-1.5" onClick={onClickRight}>
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};
