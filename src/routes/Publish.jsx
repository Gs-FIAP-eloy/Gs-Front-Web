import useAuthRedirect from "../hook/useAuthRedirect";

const Publish = () => {

  useAuthRedirect();

  return (
    <div>
      <h1>publicar</h1>
    </div>
  )
}

export default Publish
