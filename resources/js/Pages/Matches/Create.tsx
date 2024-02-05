import {useForm, Head} from "@inertiajs/react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import {FormEvent} from "react";
import {PageProps} from "@/types";
import {Team} from "@/types/team";
import {Tournament} from "@/types/tournament";

export default function Create({ auth, teams, tournaments }: {auth: PageProps, teams: Array<Team>, tournaments: Array<Tournament>}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        tournament_id: 1,
        hosting_team_id: 1,
        receiving_team_id: 1,
        hosting_team_score: 0,
        receiving_team_score: 0,
        description: ''
    })

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(route('matches.store'));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Créer un match" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>

                    <div className={"w-5"}>
                        <InputLabel htmlFor="tournament" value="Tournoi"/>
                        <select
                            className={"mt-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"}
                            name="tournament" id="tournament"
                            onChange={(e) => setData('tournament_id', e.target.value)}>
                            {tournaments.map((tournament, index) => <option key={tournament.id} value={tournament.id}
                                                                selected={index == 0}>{tournament.name}</option>)}
                        </select>
                        <InputError message={errors.tournament_id} className="mt-2"/>
                    </div>

                    <div className="mt-3 flex">
                        <div className="basis-3/4">
                            <InputLabel htmlFor="hosting_team" value="Équipe domicile"/>
                            <select
                                className={"mt-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"}
                                name="hosting_team" id="hosting_team"
                                onChange={(e) => setData('hosting_team_id', e.target.value)}>
                                {teams.map((team, index) => <option key={team.id} value={team.id}
                                                                    selected={index == 0}>{team.name}</option>)}
                            </select>
                            <InputError message={errors.hosting_team_id} className="mt-2"/>
                        </div>
                        <div className="basis-1/4">
                            <InputLabel htmlFor="hosting_team_score" value="Score domicile"/>
                            <TextInput
                                id="hosting_team_score"
                                type="number"
                                name="hosting_team_score"
                                value={data.hosting_team_score}
                                className="mt-2 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('hosting_team_score', e.target.value)}
                            />
                            <InputError message={errors.hosting_team_score} className="mt-2"/>
                        </div>
                    </div>


                    <div className="mt-3 flex">
                        <div className="basis-3/4">
                            <InputLabel htmlFor="receiving_team" value="Équipe visiteur"/>
                            <select
                                className={"mt-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"}
                                name="receiving_team" id="receiving_team"
                                onChange={(e) => setData('receiving_team_id', e.target.value)}>
                                {teams.map((team, index) => <option key={team.id} value={team.id}
                                                                    selected={index == 0}>{team.name}</option>)}
                            </select>
                            <InputError message={errors.receiving_team_id} className="mt-2"/>
                        </div>
                        <div className="basis-1/4">
                            <InputLabel htmlFor="receiving_team_score" value="Score visiteur"/>
                            <TextInput
                                id="receiving_team_score"
                                type="number"
                                name="receiving_team_score"
                                value={data.receiving_team_score}
                                className="mt-2 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('receiving_team_score', e.target.value)}
                            />
                            <InputError message={errors.receiving_team_score} className="mt-2"/>
                        </div>
                    </div>

                    <div className="mt-3">
                        <InputLabel htmlFor="description" value="Description"/>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            className="mt-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm w-full"
                            onChange={(e) => setData('description', e.target.value)}
                        ></textarea>
                        <InputError message={errors.description} className="mt-2"/>
                    </div>


                    <PrimaryButton className="mt-4" disabled={processing}>Créer le match</PrimaryButton>
                </form>
            </div>
        </Layout>
    )
}
