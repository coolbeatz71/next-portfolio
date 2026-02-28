import { useCallback } from "react";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormTextArea } from "@/shared/ui/form/Form.TextArea";
import { FormTextInput } from "@/shared/ui/form/Form.TextInput";
import { FooterMessageFormHeader } from "./Footer.Message.Form.Header";
import { FooterMessageFormSubmitButton } from "./Footer.Message.Form.Submit.Button";
import { FooterMessageFormToaster } from "./Footer.Message.Form.Toaster";
import { useSendEmail } from "./hooks/useSendEmail";

/**
 * Footer contact message form component.
 *
 * @component
 *
 * @description
 * Renders a contact form with name, email, and message fields validated via yup.
 * On submit it sends the form via EmailJS and shows success or error toast notifications.
 *
 * @returns The footer message form element
 */
export function FooterMessageForm() {
    const { t } = useTranslation();
    const { form, formRef, isLoading, onSave } = useSendEmail();
    const { handleSubmit } = form;
    const onSubmit = useCallback(handleSubmit(onSave), [handleSubmit, onSave]);

    return (
        <div className="flex flex-col items-start gap-2">
            <FooterMessageFormHeader />
            <FormProvider {...form}>
                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="pt-6 px-1 w-full flex flex-col gap-3"
                >
                    <FormTextInput type="text" label={t("name")} name="name" />
                    <FormTextInput type="email" label={t("email")} name="email" />
                    <FormTextArea label={t("message")} name="message" />
                    <FooterMessageFormSubmitButton isLoading={isLoading} />
                </form>
            </FormProvider>
            <FooterMessageFormToaster />
        </div>
    );
}
