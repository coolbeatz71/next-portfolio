import { SpinnerIcon } from "@/components/shared/icon/Spinner.Icon";
import { useTranslation } from "react-i18next";

interface FormSubmitButtonProps {
    isLoading: boolean;
}

export function FormSubmitButton({ isLoading }: FormSubmitButtonProps) {
    const { t } = useTranslation();

    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`
                disabled:cursor-not-allowed disabled:bg-gray-400 w-full md:w-44
                focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4
                focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg
                text-sm p-3 lg:p-4 dark:bg-indigo-500 dark:hover:bg-indigo-700
            `}
        >
            {isLoading && <SpinnerIcon />}
            {t("send_message")}
        </button>
    );
}
