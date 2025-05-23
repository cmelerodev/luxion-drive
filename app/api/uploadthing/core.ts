import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
    const authData = await auth();
    const { userId } = authData 

    if (!userId) throw new Error("Unauthorizated")
    return {userId}
}
export const ourFileRouter = {
  photo: f({image: {maxFileSize: "4MB", maxFileCount: 1} }).middleware(() => handleAuth()).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
