import { isUserLoggedAndAdmin } from "@/lib/isAdmin";
import {
  // ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function Home() {
  const isAuthorized = await isUserLoggedAndAdmin();
  if (!isAuthorized.loggedIn) {
    return (
      <div className="w-full h-full flex items-center justify-center p-2">
        <header>
          {/* Нэвтрээгүй үед энэ доорх SignOut component харагдана */}
          <SignedOut>
            <SignInButton>
              <button className="p-1 border border-green-200 rounded-md">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonBox: "bg-green-200 border border-2 rounded-md",
                },
              }}
            />
          </SignedIn>
        </header>
      </div>
    );
  } else {
    if (isAuthorized.isAdmin) {
      redirect("/admin");
    } else {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2">
          <header>
            {/* Нэвтрээгүй үед энэ доорх SignOut component харагдана */}
            <SignedOut>
              <SignInButton>
                <button className="p-1 border border-green-200 rounded-md">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonBox: "bg-green-200 border border-2 rounded-md",
                  },
                }}
              />
            </SignedIn>
          </header>
          <p className="text-black">You are not admin</p>
        </div>
      );
    }
  }
}
