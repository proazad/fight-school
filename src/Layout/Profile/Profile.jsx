import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-neutral">
      <div className="container mx-auto">
        <div className="w-5/12 mx-auto border p-5 flex flex-col justify-center items-center">
          <img src={user.photoURL} className="w-32 rounded-md" alt="" />
        <h2 className="text-2xl my-5 text-white">{user.displayName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
