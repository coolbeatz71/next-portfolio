import { FormTextArea } from "@/components/shared/form/Form.TextArea";
import { FormTextInput } from "@/components/shared/form/Form.TextInput";
import { SpinnerIcon } from "@/components/shared/icon/Spinner.Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

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
    const { t } = useTranslation();
    const form = useForm<MessageFormData>({
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        resolver: yupResolver(schema)
    });
    const {
        handleSubmit,

        formState: { isSubmitted }
    } = form;

    const onSave = async (formData: MessageFormData) => {
        console.log("isSubmitted", isSubmitted);
        console.log("formData", formData);
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
                    onSubmit={handleSubmit(onSave)}
                    className="pt-6 w-full flex flex-col gap-4"
                >
                    <FormTextInput id="name" type="text" label={t("name")} />
                    <FormTextInput id="email" type="email" label={t("email")} />
                    <FormTextArea id="message" label={t("message")} />

                    <button
                        type="submit"
                        className="cursor-pointer w-[30%] focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded text-sm p-4 dark:bg-indigo-500 dark:hover:bg-indigo-700"
                    >
                        {isSubmitted && <SpinnerIcon />}
                        {t("send_message")}
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}
