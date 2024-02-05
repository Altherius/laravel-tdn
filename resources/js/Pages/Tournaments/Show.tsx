import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import Subtitle from "@/Components/Subtitle";
import MainTitle from "@/Components/MainTitle";
import Layout from "@/Layouts/Layout";
import {Tournament} from "@/types/tournament";

export default function Index({ auth, tournament }: {auth: PageProps, tournament: Tournament}) {
    return (
        <Layout
            user={auth.user}
            header={<MainTitle className={"text-center"}>{tournament.name}</MainTitle>}
        >
            <Head title={tournament.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row">
                    <div className="bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg basis-1/2 m-2">
                        <Subtitle className={"text-center"}>Derniers matchs</Subtitle>
                        <table className={"text-gray-900 dark:text-gray-100 px-3 bg-white dark:bg-gray-700 w-full table-auto border-separate border-spacing-y-3"}>
                            <thead className={"text-left"}>
                            <tr>
                                <th>Nom</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tournament.matches.map((match) =>
                                    <tr key={match.id}>
                                        <td><a href={route('matches.show', match.id)}>{match.hosting_team.name} - {match.receiving_team.name}</a></td>
                                        <td>{match.hosting_team_score} - {match.receiving_team_score}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white dark:bg-gray-700 shadow-sm sm:rounded-lg basis-1/2 m-2">
                        <Subtitle className={"text-center"}>Équipes en lice</Subtitle>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
