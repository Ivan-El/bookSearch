import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

export const CardSkeleton = memo(() => {
  return <Skeleton width={220} height={440} border={'12px'} />;
});
