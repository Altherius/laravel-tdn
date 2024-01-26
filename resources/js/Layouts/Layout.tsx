import {PropsWithChildren, ReactNode} from "react";
import {User} from "@/types";
import Guest from "@/Layouts/GuestLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout";


export default function Layout({ user, header, children }: PropsWithChildren<{ user?: User, header?: ReactNode }>) {
    if (user) {
        return <Authenticated user={user} header={header} >{children}</Authenticated>
    } else {
        return <Guest header={header}>{children}</Guest>
    }
}
