import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { schema } from "../schema";

import type { IMessageFormData } from "./types";

const getToastStyle = (background: string) => ({
    background,
    color: "white",
    maxWidth: "40rem",
    borderRadius: "0.35rem"
});

export const toastOptions = {
    duration: 5000,
    removeDelay: 5000,
    position: "bottom-center" as const,
    success: {
        style: getToastStyle("#0e824e")
    },
    error: {
        style: getToastStyle("#be185d")
    }
};

/**
 * Footer message form hook.
 *
 * @description
 * Encapsulates form state, validation, and EmailJS submission logic
 * for the footer contact form. Returns form methods, loading state,
 * a form ref for EmailJS, and the submit handler.
 *
 * @returns Form ref, react-hook-form methods, isLoading flag, and onSave handler
 */
export function useSendEmail() {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<IMessageFormData>({
        defaultValues: { name: "", email: "", message: "" },
        resolver: yupResolver(schema)
    });

    const onSave = useCallback(async () => {
        setIsLoading(true);
        try {
            await emailjs.sendForm(
                String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
                String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
                formRef.current as HTMLFormElement,
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
            );
            form.reset();
            toast.success(t("toast.success"));
        } catch {
            toast.error(t("toast.error"));
        } finally {
            setIsLoading(false);
        }
    }, [t, form]);

    return { form, formRef, isLoading, onSave };
}
