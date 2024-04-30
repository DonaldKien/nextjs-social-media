"use client";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import React, { Fragment } from "react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <Fragment>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit">Sign In</Button>
          </form>
        </NavbarItem>
      </Fragment>
    );
  }

  return authContent;
};

export default HeaderAuth;
