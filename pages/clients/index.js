import Link from "next/link";
import { useRouter } from "next/router";

const ClientsPage = () => {
  const router = useRouter();
  const clients = [
    {
      id: "gonz",
      name: "gonzales",
    },
    {
      id: "hoss",
      name: "hossam",
    },
  ];
  const goToProject = () => {
    router.push({
      pathname: "/clients/[id]/[projectId]",
      query: {
        id: "gonz",
        projectId: "3",
      },
    });
  };
  return (
    <div>
      <h1>All Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={goToProject}>Go to Project A</button>
    </div>
  );
};

export default ClientsPage;
