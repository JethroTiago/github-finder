import { UserProps } from "../types/user";

import Search from "../components/Search";

import { useState } from "react";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async(userName: string) => {

      const res = await fetch(`https://api.github.com/users/${userName}`)

    }
    
  return (
  <div>
    <Search />
  </div>
  );
};

export default Home;