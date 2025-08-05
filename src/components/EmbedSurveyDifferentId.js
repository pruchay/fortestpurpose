import React from "react";

export const EmbedSurveyDifferentId = () => {
    return <div className='w-[1200px]'>
        <pg-embedded-survey
            channel-id="3925"
            country-code="gr"
            survey-id="61453"
            className="flex h-full flex-1"
            width="1200px"
            height="780px"
        >
        </pg-embedded-survey>
    </div>
}