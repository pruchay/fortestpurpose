import React from "react";

export const SomeDummyPage = () => {
    // https://bdpe-sandbox-survey-web-viewer.azurewebsites.net/gr/3925/61189

    return <div className='w-[1200px]'>
        <pg-embedded-survey
            channel-id="3925"
            country-code="gr"
            survey-id="61189"
            className="flex h-full flex-1"
            width="1200px"
            height="700px"
        >
        </pg-embedded-survey>
    </div>
}