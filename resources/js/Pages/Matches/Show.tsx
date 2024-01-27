import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import {Team} from "@/types/team";
import Subtitle from "@/Components/Subtitle";
import MainTitle from "@/Components/MainTitle";
import Layout from "@/Layouts/Layout";
import {Match} from "@/types/match";

export default function Show({ auth, match }: {auth: PageProps, match: Match}) {
    return (
        <Layout
            user={auth.user}
            header={<MainTitle className={"text-center"}>{match.hosting_team.name} - {match.receiving_team.name}</MainTitle>}
        >
            <Head title={match.hosting_team.name + '-' + match.receiving_team.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row">
                    <div className="bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg w-full m-2">
                        <Subtitle className={"text-center"}>Score final : {match.hosting_team_score + ' - ' + match.receiving_team_score}</Subtitle>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
