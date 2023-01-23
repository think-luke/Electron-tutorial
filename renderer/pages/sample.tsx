import Link from "next/link";

const sample = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Welcome to sample page</p>
      <Link href="/home">
        <a>Go Home</a>
      </Link>
    </div>
  );
};

export default sample;