import { useState } from "react";

import { type StateData, type Steps } from "./state";
import { Rating } from "./rating";
import { ThankYou } from "./thank-you";

export function RatingsCard() {
    const [stage, setStage] = useState<Steps>("rate");
    const [data, setData] = useState<StateData>({ grade: 0 });

    const onDataUpdate = (next: Partial<StateData>) => {
        setData((prev) => ({
            ...prev,
            ...next,
        }));

        setStage("final");
    };

    const components: Record<Steps, React.ReactNode> = {
        rate: <Rating onDataUpdate={onDataUpdate} />,
        final: <ThankYou rating={data.grade} />,
    };

    return (
        <div className="bg-card-gradient flex max-w-95 flex-col rounded-3xl px-7 py-8">
            {components[stage]}
        </div>
    );
}
