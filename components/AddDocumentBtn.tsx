"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";



const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter();

    const addDocumentHandler = async () => {
        try {
            const room = await createDocument({ userId, email });

            if(room) router.push(`/documents/${room.id}`);
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <Button type="submit" onClick={addDocumentHandler}
        className="gradient-blue flex gap-1 shadow-md">
            <Image 
                src="/assets/icons/add.svg"
                alt="add"
                width={24}
                height={24}
            />
        <p className="hidden sm:block">
            Create a new document
        </p>
    </Button>
  )
};

export default AddDocumentBtn;