"use client";

import SignInButton from "@/components/auth/signInButton";
import { useEffect, useState } from "react";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  useSession,
} from "next-auth/react";
import { signOut } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";


const Page = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProviders = async () => {
      const data = await getProviders();
      setProviders(data);
    };

    if (session) {
      signOut();
    } else {
      fetchProviders();
    }
  }, [, session]);

  return (
    <section className="bg-white p-6 rounded-3xl py-12 shadow-md flex flex-col gap-3 ">

      <p className="logo">WeTravel.</p>
      <h1 className="text-3xl font-poppins font-bold">Share your <br />  travelling ideas.</h1>
      <p className="text-sm text-neutral-400 mb-5">Join WeTravel and begin sharing your ideas with the world. </p>


      {providers ? (
        Object.values(providers).map((provider) => (
          <SignInButton key={provider.id} providerId={provider.id} />
        ))
      ) : (
        <button className="normalButton w-full opacity-70">Loading...</button>
      )}


    </section>
  );
};

export default Page;
