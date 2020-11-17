import React, { useEffect, useState } from 'react';

export function Index() {
  const [message, setMessage] = useState('ssr message');
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('/user');
      const data = await res.json();
      console.log({ data });
    }, 100);
  }, []);
  return <p>Hello World</p>;
}

export default Index;
