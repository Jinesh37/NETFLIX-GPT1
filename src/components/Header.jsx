import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import{useEffect} from "react";
import{useDispatch} from "react-redux";
import{addUser,removeUser} from "../utils/userSlice";
import {onAuthStateChanged}  from "firebase/auth"
import{LOGO} from "../utils/constant";
import{PROFILELOGO} from "../utils/constant";

const Header = () => {
const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(user){
            //sign in && sign up
            const{uid,email,displayName,photoUrl}=user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoUrl}));
            navigate("/browse")
        }
        else{
            //sign out
             dispatch(removeUser());
             navigate("/");
             
        }
    });
    // Unsubscribe when component unmounts
   return ()=>unsubscribe();
  },[])

  return (
    <div className="absolute h-16 flex justify-between  w-screen  px-5 py-2 bg-gradient-to-b from-black z-10 ">
      <img
        className="w-44 "
        src={LOGO}
        alt="NETFLIX"
      />
      {/* if I have user then please this portion og image and sign out button */}
      {user && (
        <div className="mt-2 flex">
          <img
            class="w-8 h-8"
            alt="usericon"
            src={PROFILELOGO}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white  mb-8"
          >
            (Sign Out){user?.displayName}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5-TeuWtZ0i5ynkaypdhEPm4zVI4kykuqdQ&usqp=CAU
// user?.photoUrl
// logo after login part
