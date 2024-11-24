import { Link } from "react-router-dom";


const WritePage = () => {
    return (
      <div className="min-h-screen items-center bg-black text-white">
        <div className="flex">
          You must be logged in to write a post.
          <Link to={"/SignIn"}>
            Login
          </Link>
        </div>
      </div>
    );
  };

  export default WritePage;