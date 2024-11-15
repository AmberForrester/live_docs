import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: Request) {
    const clerkUser = await currentUser();

    //console.log(request);

    if(!clerkUser) redirect("/sign-in");

    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

  // Get the current user from database
  const user = {
    id,
    info: {
        id,
        name: `${firstName} ${lastName}`,
        email: emailAddresses[0].emailAddress,
        avatar: imageUrl,
        color: getUserColor(id),
    }
  }

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds: [],
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}