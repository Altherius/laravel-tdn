import {PageProps, User} from "@/types";
import {Head} from "@inertiajs/react";
import {Team} from "@/types/team";
import Layout from "@/Layouts/Layout";
import Subtitle from "@/Components/Subtitle";

export default function Index({ auth, teams }: {auth: {user: User}, teams: Array<Team>}) {

    return (
        <Layout
            user={auth.user}
            header={<Subtitle className="text-center">Classement des nations</Subtitle>}
        >
            <Head title="Classement"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className={"w-full table-auto border-separate border-spacing-y-3"}>
                                <thead className={"text-left"}>
                                <tr>
                                    <th>Rang</th>
                                    <th>Pays</th>
                                    <th>Elo</th>
                                </tr>
                                </thead>
                                <tbody>
                                {teams.sort((a, b) => a.rating < b.rating ? 1 : -1)
                                    .map((team, index) =>
                                        <tr key={team.id}>
                                            <td>{index + 1}</td>
                                            <td><a href={route('teams.show', team.id)}>{team.name}</a></td>
                                            <td>{team.rating}</td>
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
