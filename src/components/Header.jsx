import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant";
import { PROFILELOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptShowValue = useSelector((store) => store?.gpt?.showGptSearch);
  // console.log(user);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in && sign up
        const { uid, email, displayName, photoUrl } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoUrl,
          })
        );
        navigate("/browse");
      } else {
        //sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch,navigate]);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute h-16 flex md:justify-between md:flex-row flex-col  w-screen  px-5 py-2 bg-gradient-to-b from-black z-10 bg-black  sm:bg-blue-900 md:bg-green-900">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="NETFLIX" />
      {/* if I have user then please this portion og image and sign out button */}
      {user && (
        <div className="mt-2 flex justify-between ">
          {gptShowValue && (
            <select
              className="p-4 bg-gray-900 text-white m-2 rounded-lg "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 md:px-4 bg-purple-800 rounded-lg   mx-2 md:mx-4  my-2 md:my-0 text-white"
            onClick={handleGptSearchClick}
          >
            {!gptShowValue ? "GPT SEARCH" : "HOMEPAGE"}
          </button>
          <div className="flex items-center">
            <img class="w-8 h-8" alt="usericon" src={PROFILELOGO} />
            <button
              onClick={handleSignOut}
              className="font-bold text-white md:-mt-5 md:ml-3 "
            >
              (Sign Out){user?.displayName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5-TeuWtZ0i5ynkaypdhEPm4zVI4kykuqdQ&usqp=CAU
// user?.photoUrl
// logo after login part



// https://netflix-gpt15.netlify.app