import {User} from "@/types";
import {Head} from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Subtitle from "@/Components/Subtitle";
import {Tournament} from "@/types/tournament";

export default function Index({ auth, tournaments }: {auth: {user: User}, tournaments: Array<Tournament>}) {

    return (
        <Layout
            user={auth.user}
            header={<Subtitle className="text-center">Liste des tournois</Subtitle>}
        >
            <Head title="Tournois"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className={"w-full table-auto border-separate border-spacing-y-3"}>
                                <thead className={"text-left"}>
                                <tr>
                                    <th>Nom</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tournaments.sort((a, b) => a.begins_at < b.begins_at ? 1 : -1)
                                    .map((tournament) =>
                                        <tr key={tournament.id}>
                                            <td><a href={route('tournaments.show', tournament.id)}>{tournament.name}</a></td>
                                            <td>Du {tournament.begins_at.toString()} au {tournament.ends_at.toString()}</td>
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
