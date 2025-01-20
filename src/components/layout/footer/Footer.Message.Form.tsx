import { FormTextArea } from "@/components/shared/form/Form.TextArea";
import { FormTextInput } from "@/components/shared/form/Form.TextInput";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import toast, { Toaster } from "react-hot-toast";
import { FormHeader } from "./Footer.Message.Form.Header";
import { FormSubmitButton } from "./Footer.Message.Form.SubmiButton";

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
            toast.success("Your message has been sent successfully! 🎉");
        } catch (error: unknown) {
            toast.error("Failed to send message. Please try again later! 😞");
            console.log("FAILED...", (error as EmailJSResponseStatus).text);
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
                    className="pt-6 w-full flex flex-col gap-4"
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
                    duration: 500000,
                    removeDelay: 500000,
                    position: "bottom-center",
                    success: {
                        style: {
                            color: "white",
                            background: "#0f766e",
                            maxWidth: "30rem",
                            borderRadius: "0.35rem"
                        }
                    },
                    error: {
                        style: {
                            color: "white",
                            background: "#be185d",
                            maxWidth: "30rem"
                        }
                    }
                }}
            />
        </div>
    );
}
