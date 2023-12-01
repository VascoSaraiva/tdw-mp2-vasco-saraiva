'use client'

import { Menu } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";

const UserItem = () => {

    const { data: session } = useSession()

    return (
        <Menu>
            <Menu.Button className="focus:outline-none flex items-center">
                {session ?
                    <Image className="rounded-full" src={session?.user?.image as string} width={35} height={35} alt="User image" />
                    :
                    <Link href={'/auth'}>
                        <PersonOutlineIcon />
                    </Link>
                }
            </Menu.Button>

            <Menu.Items className="modal">
                {session &&
                    <>
                        <div className="flex gap-2 items-center">
                            <Image
                                className="rounded-full"
                                src={session?.user?.image as string}
                                alt="User image"
                                width={35}
                                height={35}
                            />
                            <h1 className="title">{session?.user?.name}</h1>
                        </div>

                        <Menu.Item>
                            <button onClick={() => signOut()} className="text-rose-500 flex">Sign out -{">"}</button>
                        </Menu.Item>
                    </>
                }

            </Menu.Items>
        </Menu>
    )
}

export default UserItem