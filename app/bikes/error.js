'use client';

export default function RootError({ error }) {
  return (
    <div>
      <p>Something went wrong.</p>
      <p>{error.message}</p>
    </div>
  );
}
