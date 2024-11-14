import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <div className="text-3xl text-center font-semibold" >
      <h1 className=" flex text-3xl bg-green-500 m-4 h-20 items-center rounded-2xl justify-center">Home of Recipes</h1>
    </div>
    <div className=" flex justify-center gap-3 p-5">
      <Button className="bg-sky-500"> <Link href="https://code-clause-internship-recipe-book-qmpw-d38kmf2wp.vercel.app/createrecipe" >Create recipes</Link> </Button>
      <Button className="bg-sky-500"><Link href="https://code-clause-internship-recipe-book-qmpw-d38kmf2wp.vercel.app/recipes">Learn new cooking tricks</Link></Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-5">
      <div className="relative w-full h-64">
      <Image objectFit="cover" layout="fill" src="/abhinavcoca.jpg"/>
      </div>
      <div className="relative w-full h-64">
      <Image objectFit="cover" layout="fill" src="/assets/pexels-h-nh-nguy-n-1719815172-27953852.jpg"/>
      </div>
      <div className="relative w-full h-64">
      <Image objectFit="cover" layout="fill" src="/assets/pexels-janetrangdoan-1099680.jpg"/>
      </div>
      <div className="relative w-full h-64">
        <Image objectFit="cover" layout="fill" src="/assets/pexels-polina-tankilevitch-4518843.jpg"/>
      </div>
      <div className="relative w-full h-64">
      <Image objectFit="cover" layout="fill" src="/assets/pexels-suzyhazelwood-2966196.jpg"/>
      </div>
      <div className="relative w-full h-64">
      <Image objectFit="cover" layout="fill" src="/assets/pexels-valeriya-1860204.jpg"/>
      </div>
    </div>
   </div> 
  
  );
}
export const revalidate = 60;
