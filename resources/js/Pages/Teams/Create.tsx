import {useForm, Head} from "@inertiajs/react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import {FormEvent} from "react";
import {PageProps} from "@/types";

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    })

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(route('teams.store'));
    };

    return (
        <Layout user={auth.user}>
            <Head title="Créer une équipe" />

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
                    <PrimaryButton className="mt-4" disabled={processing}>Créer l'équipe</PrimaryButton>
                </form>
            </div>
        </Layout>
    )
}
