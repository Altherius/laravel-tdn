import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import {Team} from "@/types/team";
import Subtitle from "@/Components/Subtitle";
import MainTitle from "@/Components/MainTitle";
import Layout from "@/Layouts/Layout";

export default function Index({ auth, team }: {auth: PageProps, team: Team}) {
    return (
        <Layout
            user={auth.user}
            header={<MainTitle className={"text-center"}>{team.name}</MainTitle>}
        >
            <Head title={team.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row">
                    <div className="bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg basis-1/2 m-2">
                        <Subtitle className={"text-center"}>Derniers matchs</Subtitle>
                    </div>
                    <div className="bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg basis-1/2 m-2">
                        <Subtitle className={"text-center"}>Historique de l'Elo</Subtitle>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
