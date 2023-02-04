import { useRouter } from "next/router";

const ClientPage = () => {
  console.log(useRouter().query);

  return (
    <div>
      <h1>Client Page</h1>
    </div>
  );
};

export default ClientPage;
