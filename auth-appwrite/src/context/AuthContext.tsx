import { getCurrentUser } from '@/lib/appwrite/api'
import { IContextType, IUser } from '@/types/index'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
}

//to know wheather we have a logged in user at all times
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE)

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate();

  //checkAuthUser is to be called whenever page is refreshed for that we need to use useEffect
  const checkAuthUser = async () => {
    try {
      const currentAccount = await getCurrentUser();

      if(currentAccount){ 
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        })

        setIsAuthenticated(true);
        return true;
      }
      return false;
      /*
      //a better and cleaner way to write the above code
      //but in typescript, if getCurrentUser() fails and catch block is executed, it will not return anything which is not allowed in typescript
      const { $id, name, username, email, imageUrl, bio } = await getCurrentUser();

      if($id){
        setUser({ id: $id, name, username, email, imageUrl, bio, })
      }
      */
    }
    catch (error) {
      console.log(error)
      return false;
    }
    finally {
      //to tell that we are done with loading
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(
      //if not signed in navigate the user to the signin page
      localStorage.getItem("cookieFallback") === "[]" ||
      localStorage.getItem("cookieFallback") === null
    ) {
      navigate("/sign-in");
    }
    else {
      checkAuthUser();
    }
  }, [])

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  }

  return (
    // everything inside AuthContext.Provider will have access of User is logged in or not
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

//exporting AuthProvider and AuthContext to be used in the App.tsx
export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);