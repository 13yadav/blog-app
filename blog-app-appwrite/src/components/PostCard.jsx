import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#172121] text-[#E5D0CC] rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            className="h-[150px] w-full object-cover rounded-xl"
            alt={title}
          />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
