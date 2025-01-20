import { FormTextArea } from "@/components/shared/form/Form.TextArea";
import { FormTextInput } from "@/components/shared/form/Form.TextInput";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { SpinnerIcon } from "../../shared/icon/Spinner.Icon";

const schema = yup.object().shape({
    name: yup.string().required("validation.required"),
    email: yup
        .string()
        .email("validation.invalid_email")
        .required("validation.required"),
    message: yup.string().required("validation.required")
});

export interface MessageFormData {
    name: string;
    email: string;
    message: string;
}

export default function FooterMessageForm(): JSX.Element {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();
    const form = useForm<MessageFormData>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        resolver: yupResolver(schema)
    });
    const { handleSubmit, reset } = form;

    const onSave = async () => {
        setIsLoading(true);
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                formRef.current as HTMLFormElement,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                }
            )
            .then(
                () => {
                    reset();
                    setIsLoading(false);
                    console.log("SUCCESS!", formRef.current);
                },
                (error) => {
                    setIsLoading(false);
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                {t("lets_connect")} ✨
            </h3>
            <p className="font-medium text-gray-500 dark:text-gray-400">
                {t("lets_connect_description")}
            </p>
            <FormProvider {...form}>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSave)}
                    className="pt-6 w-full flex flex-col gap-4"
                >
                    <FormTextInput
                        id="name"
                        type="text"
                        label={t("name")}
                        name="name"
                    />
                    <FormTextInput
                        id="email"
                        type="email"
                        label={t("email")}
                        name="email"
                    />
                    <FormTextArea
                        id="message"
                        label={t("message")}
                        name="message"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 cursor-pointer w-[30%] focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded text-sm p-4 dark:bg-indigo-500 dark:hover:bg-indigo-700"
                    >
                        {isLoading && <SpinnerIcon />}
                        {t("send_message")}
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}
