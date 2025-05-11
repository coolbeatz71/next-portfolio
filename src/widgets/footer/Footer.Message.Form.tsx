import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FormTextArea } from "@/shared/ui/form/Form.TextArea";
import { FormTextInput } from "@/shared/ui/form/Form.TextInput";
import { FormHeader } from "./Footer.Message.Form.Header";
import { FormSubmitButton } from "./Footer.Message.Form.Submit.Button";

const schema = yup.object().shape({
    name: yup.string().required("validation.required"),
    email: yup
        .string()
        .email("validation.invalid_email")
        .required("validation.required"),
    message: yup.string().required("validation.required")
});

const getToastStyle = (background: string) => ({
    background,
    color: "white",
    maxWidth: "40rem",
    borderRadius: "0.35rem"
});

export interface MessageFormData {
    name: string;
    email: string;
    message: string;
}

export function FooterMessageForm() {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
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

        try {
            await emailjs.sendForm(
                String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
                String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
                formRef.current as HTMLFormElement,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                }
            );
            reset();
            toast.success(t("toast.success"));
        } catch (error) {
            toast.error(t("toast.error"));
            console.log("FAILED...", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-start gap-2">
            <FormHeader />
            <FormProvider {...form}>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSave)}
                    className="pt-6 px-1 w-full flex flex-col gap-3"
                >
                    <FormTextInput type="text" label={t("name")} name="name" />
                    <FormTextInput
                        type="email"
                        label={t("email")}
                        name="email"
                    />
                    <FormTextArea label={t("message")} name="message" />
                    <FormSubmitButton isLoading={isLoading} />
                </form>
            </FormProvider>
            <Toaster
                toastOptions={{
                    duration: 5000,
                    removeDelay: 5000,
                    position: "bottom-center",
                    success: {
                        style: getToastStyle("#0e824e")
                    },
                    error: {
                        style: getToastStyle("#be185d")
                    }
                }}
            />
        </div>
    );
}
