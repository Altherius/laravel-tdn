import {useForm, Head} from "@inertiajs/react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import {User} from "@/types";
import {Team} from "@/types/team";
import {FormEvent} from "react";

export default function Create({ auth, team }: {auth: {user: User}, team: Team}) {
    const { data, setData, put, processing, reset, errors } = useForm({
        name: '',
    })

    const submit = (e: FormEvent) => {
        e.preventDefault();
        put(route('teams.update', team.id));
    };

    return (
        <Layout user={auth.user}>
            <Head title={"Éditer " + team.name} />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <InputLabel htmlFor="name" value="Nom de l'équipe" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Éditer l'équipe</PrimaryButton>
                </form>
            </div>
        </Layout>
    )
}
