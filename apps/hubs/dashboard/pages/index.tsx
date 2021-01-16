import React from 'react';
import Link from 'next/link';
import { PageFormAddress, urls } from '../core/urls';

export function Index() {
  return (
    <>
      <h1>Hello From Dashboard</h1>
      <Link href={urls.get(PageFormAddress)}>Register information</Link>
    </>
  );
}

export default Index;
