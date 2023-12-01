'use client'

import SignInButton from "@/components/auth/signInButton"
import { useEffect, useState } from "react"
import { ClientSafeProvider, LiteralUnion, getProviders, useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers/index"

const Page = () => {

    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
    const { data: session } = useSession()

    useEffect(() => {
        const fetchProviders = async () => {
            const data = await getProviders()
            setProviders(data)
        }

        if (session) {
            signOut()
        } else {
            fetchProviders()
        }


    }, [, session])


    return (
        <div>
            {providers ? Object.values(providers).map(provider => (
                <SignInButton key={provider.id} providerId={provider.id} />
            )) :
                <button className="normalButton w-full opacity-70">Loading...</button>
            }
        </div>
    )
}

export default Page



