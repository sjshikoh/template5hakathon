import Carosel from "@/components/carosel";
import Image from "next/image";
import Button from '@/components/button';
import Titlebar from "@/components/Titlebar";
import Card from "@/components/card";

export default function Home() {
  return (
   <div>
     
   <Carosel />
   <Button />
   <Titlebar />
   {/* <Card /> */}
   </div>
  );
}
