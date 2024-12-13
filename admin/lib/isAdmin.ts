"use server";

import "server-only";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export async function checkAdmin() {
  const user = await currentUser();
  const publicMetadata = user?.publicMetadata;
  if (publicMetadata) {
    const { role } = publicMetadata;
    if (role === "admin") {
      return;
    } else {
      redirect("/");
    }
  } else {
    redirect("/");
  }
}

export async function isUserLoggedAndAdmin() {
  const user = await currentUser();
  const userId = user?.id;
  const publicMetadata = user?.publicMetadata;
  const isAdmin = publicMetadata?.role === "admin";
  if (userId) {
    if (isAdmin) {
      return {
        loggedIn: true,
        isAdmin: true,
      };
    } else {
      return {
        loggedIn: true,
        isAdmin: false,
      };
    }
  }
  return {
    loggedIn: false,
    isAdmin: false,
  };
}
