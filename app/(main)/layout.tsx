import { PropsWithChildren } from 'react';
import ClearMetaCrOnLeave from './ClearMetaCrOnLeave';

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <ClearMetaCrOnLeave />
      {children}
    </div>
  );
}
