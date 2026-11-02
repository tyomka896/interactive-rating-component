import { useState } from "react";

import { StarIcon } from "@/components/icons/star-icon";
import { type StateData, type Grade, GRADES } from "./state";

interface Props {
    onDataUpdate(next: Partial<StateData>): void;
}

export function Rating({ onDataUpdate }: Props) {
    const [selected, setSelected] = useState<Grade | undefined>(undefined);

    const onSubmit = () => {
        onDataUpdate({ grade: selected });
    };

    const grades = Array.from(GRADES).map((el) => (
        <li key={el}>
            <button
                type="button"
                className={
                    "hover:text-grey-900 size-12 rounded-full font-bold transition-colors duration-100" +
                    (selected === el
                        ? " text-grey-900 bg-white"
                        : " bg-grey-900 text-grey-500 hover:bg-orange-500")
                }
                onClick={() => setSelected(el)}
            >
                {el}
            </button>
        </li>
    ));

    return (
        <div className="flex flex-col gap-y-8">
            <div className="bg-grey-900 grid size-12 place-items-center rounded-full">
                <StarIcon className="h-3.5" />
            </div>

            <div className="flex flex-col gap-y-2">
                <h2 className="text-2xl">How did we do?</h2>

                <p className="text-grey-500 text-sm">
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                </p>
            </div>

            <ul className="flex flex-row flex-wrap justify-between gap-2">{grades}</ul>

            <button
                type="button"
                className="text-grey-900 rounded-full bg-orange-500 py-2.5 font-bold uppercase transition-colors duration-100 hover:bg-white"
                onClick={onSubmit}
            >
                Submit
            </button>
        </div>
    );
}
