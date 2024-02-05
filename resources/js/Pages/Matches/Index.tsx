import {PageProps, User} from "@/types";
import {Head} from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Subtitle from "@/Components/Subtitle";
import {Match} from "@/types/match";

export default function Index({ auth, matches }: {auth: {user: User}, matches: Array<Match>}) {

    console.log(matches)

    return (
        <Layout
            user={auth.user}
            header={<Subtitle className="text-center">Derniers matchs</Subtitle>}
        >
            <Head title="Derniers matchs"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className={"w-full table-auto border-separate border-spacing-y-3"}>
                                <thead className={"text-left"}>
                                <tr>
                                    <th>Match</th>
                                    <th>Tournoi</th>
                                    <th>Résultat</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {matches.map((match) =>
                                        <tr key={match.id}>
                                            <td><a href={route('matches.show', match.id)}>{match.hosting_team.name} - {match.receiving_team.name}</a></td>
                                            <td><a href={route('tournaments.show', match.tournament.id)}>{match.tournament.name}</a></td>
                                            <td>{match.hosting_team_score} - {match.receiving_team_score}</td>
                                            <td>{match.description || <i>Aucune description</i>}</td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
