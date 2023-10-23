import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col py-10">
          <div className="flex flex-row justify-center flex-wrap font-thin gap-5">
            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Rising Sea Levels</h1>
              <p className="text-xl">
                The Philippines is an archipelagic nation with a vast coastline,
                and rising sea levels due to global temperature rise pose a
                significant threat. This can lead to coastal erosion, increased
                salinity in freshwater sources, and the displacement of
                communities in low-lying areas.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Coral Bleaching</h1>
              <p className="text-xl">
                The warming of the oceans can result in coral bleaching in the
                Philippines, which threatens its rich marine biodiversity. Coral
                reefs are crucial for the country's fisheries and tourism
                industry.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Agricultural Impacts</h1>
              <p className="text-xl">
                Prolonged droughts can severely affect agriculture, which is a
                major livelihood for many Filipinos. Water scarcity and reduced
                crop yields can lead to food security issues and economic
                challenges.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Forest Degradation</h1>
              <p className="text-xl">
                Deforestation contributes to the loss of critical forest
                ecosystems in the Philippines. This not only impacts the
                environment but also leads to a loss of habitat for diverse
                species and affects the country's water supply.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Vector-Borne Diseases</h1>
              <p className="text-xl">
                Climate change can alter the distribution of disease vectors
                like mosquitoes, leading to the increased prevalence of diseases
                such as dengue and malaria in different parts of the
                Philippines.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Heat-Related Health Issues</h1>
              <p className="text-xl">
                Rising temperatures can lead to more frequent and severe
                heatwaves, increasing the risk of heat-related illnesses and
                even mortality, especially among vulnerable populations.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Displacement and Vulnerability</h1>
              <p className="text-xl">
                The combined effects of these factors, including intense
                typhoons, can lead to the displacement of communities,
                particularly in hazard-prone areas. It also exacerbates the
                vulnerability of marginalized populations.
              </p>
            </div>

            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">Economic Impacts</h1>
              <p className="text-xl">
                The Philippines' economy is highly dependent on agriculture,
                fisheries, and tourism. Climate change-related disruptions can
                have far-reaching economic consequences, affecting livelihoods
                and overall development.
              </p>
            </div>
            <div className="border border-white w-1/4 p-16">
              <h1 className="text-5xl">And many more</h1>
              <p className="text-xl">
                The Philippines' economy is highly dependent on agriculture,
                fisheries, and tourism. Climate change-related disruptions can
                have far-reaching economic consequences, affecting livelihoods
                and overall development.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
