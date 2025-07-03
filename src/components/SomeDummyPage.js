import React from "react";

export const SomeDummyPage = () => {
    return <div className='w-[1200px]'>
        <pg-embedded-survey
            channel-id="3925"
            country-code="gr"
            survey-id="60966"
            className="flex h-full flex-1"
            width="1200px"
            height="780px"
        >
        </pg-embedded-survey>
    </div>
}
