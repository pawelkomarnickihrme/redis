"use client";
import axios from "axios";
import Link from "next/link";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const comment = async () => {
    const { data } = await axios.post("/api/comment", {
      text: "hellow",
      tags: ["Typescript"],
    });
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-8 items-start">
      <Link href="/comments" prefetch={false}>
        See commenets
      </Link>
      <button onClick={comment}>make comment</button>
    </div>
  );
};

export default Home;
