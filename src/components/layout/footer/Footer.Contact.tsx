import { FormTextArea } from "@/components/shared/form/Form.TextArea";
import { FormTextInput } from "@/components/shared/form/Form.TextInput";

export default function FooterContact(): JSX.Element {
    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                Let's Connect ✨
            </h3>
            <p className="font-medium text-gray-500 dark:text-gray-400">
                For work collaborations, fan mail, or just a friendly hello,
                don’t hesitate to take the first step—reach out via email or
                connect with me on social media.
            </p>
            <form action="" className="pt-6 w-full flex flex-col gap-4">
                <FormTextInput id="name" type="text" label="Name" />
                <FormTextInput id="email" type="email" label="Email" />
                <FormTextArea id="message" label="Message" />

                <button
                    type="button"
                    className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded text-sm p-4 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
