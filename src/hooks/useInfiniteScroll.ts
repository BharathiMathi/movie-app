import { useRef, useCallback } from 'react';
import { StatusEnum } from 'types';

type InfiniteScrollProps = {
  status: StatusEnum;
  totalPages: number;
  pageNo: number;
  setPageNo: (pageNo: number) => void;
};

export const useInfiniteScroll = ({
  status,
  totalPages,
  pageNo,
  setPageNo,
}: InfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastMovieElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (status === StatusEnum.LOADING) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && totalPages > pageNo) {
          setPageNo(pageNo + 1);
        }
        if (pageNo >= totalPages) {
          if (observer.current) observer.current.disconnect();
        }
      });
      if (node) observer.current.observe(node);
    },
    [status, totalPages, pageNo, setPageNo]
  );

  return lastMovieElementRef;
};
