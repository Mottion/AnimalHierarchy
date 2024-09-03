import React, { useEffect, useState } from "react"
import EmptyHierarchy from "../components/EmptyHierarchy"
import axios from "axios";
import { baseURL } from "../utils/base-url";

const Home: React.FC = () => {
  const [archives, setArchives] = useState<string[]>([]);

  useEffect(() => {
    getArchives()
  }, []);

  const getArchives = async () => {
    const {data}: {data: string[]} = await axios.get(baseURL + "entrypoints/get-archives")
    setArchives(data);
  }


  return archives.length == 0 ? <EmptyHierarchy /> : <EmptyHierarchy />
}

export default Home;