import { ThankYouIcon } from "@/components/icons/thank-you-icon";
import { GRADES } from "./state";

interface Props {
    rating: number;
}

export function ThankYou({ rating }: Props) {
    return (
        <div className="flex flex-col items-center gap-y-8 py-2">
            <ThankYouIcon className="h-26" />

            <div className="bg-grey-900 grid place-items-center rounded-full px-3 py-1">
                <p className="p-0 text-sm text-orange-500">
                    You selected {rating} out of {GRADES.length}
                </p>
            </div>

            <div className="flex flex-col items-center gap-y-2">
                <h2 className="text-2xl">Thank you!</h2>

                <p className="text-grey-500 text-center text-sm">
                    We appreciate you taking the time to give a rating. If you ever need more
                    support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}
