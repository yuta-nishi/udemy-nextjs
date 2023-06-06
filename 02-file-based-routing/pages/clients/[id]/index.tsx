import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
