import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.query.projectId);
  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
};

export default ProjectPage;
