const database = 'k5-cluster';
const collection = 'organization';

use(database);

db.createCollection(collection);

db.organization.insertMany([
  {
    name: "World Wide Fund for Nature (WWF)",
    website: "WWF Philippines",
    description: "WWF is a globally recognized organization working to conserve nature and reduce humanity’s ecological footprint. In the Philippines, WWF is actively involved in marine and forest conservation, sustainable fisheries, and climate action."
  },
  {
    name: "Waves for Water",
    website: "Waves for Water",
    description: "Waves for Water focuses on providing clean water solutions to communities in need. Access to clean water is vital for human survival, and it’s intrinsically linked to climate change, making this organization’s work even more crucial."
  },
  {
    name: "Greenpeace Philippines",
    website: "Greenpeace Philippines",
    description: "Greenpeace is renowned for its advocacy in environmental protection and climate action. Join their campaigns and movements to help safeguard the planet and promote sustainable practices."
  },
  {
    name: "Rare",
    website: "Rare Philippines",
    description: "Rare is a conservation organization that empowers local communities to protect their natural resources and biodiversity. Their work helps build resilience against climate change impacts."
  },
  {
    name: "Mother Earth Foundation",
    website: "Mother Earth Foundation",
    description: "Focusing on waste management and sustainable living, this organization contributes to reducing greenhouse gas emissions by promoting recycling and responsible waste disposal."
  },
  {
    name: "Philippines Biodiversity Conservation Foundation",
    website: "PBCFI",
    description: "PBCFI works tirelessly to protect the rich biodiversity of the Philippines. Conservation of biodiversity is essential for climate resilience and adaptation."
  },
  {
    name: "Marine Wildlife Watch of the Philippines",
    website: "Marine Wildlife Watch of the Philippines",
    description: "Dedicated to marine conservation, this organization plays a crucial role in preserving the marine ecosystems that are particularly vulnerable to climate change."
  },
  {
    name: "The Climate Reality Project Philippines",
    website: "Climate Reality Project Philippines",
    description: "Aligned with former Vice President Al Gore’s initiative, this organization educates and mobilizes individuals to take action on climate change."
  },
  {
    name: "Forest Foundation Philippines",
    website: "Forest Foundation Philippines",
    description: "Forest conservation is an integral part of climate change mitigation. This organization focuses on protecting and rehabilitating the country’s forests."
  },
  {
    name: "Wavefarers",
    website: "Wavefarers",
    description: "Wavefarers is a community-driven organization passionate about protecting the oceans. Their initiatives support coastal communities and marine conservation efforts."
  },
  {
    name: "Haribon Foundation",
    website: "Haribon Foundation",
    description: "Haribon is one of the oldest and most respected environmental organizations in the country. It works to conserve biodiversity, restore ecosystems, and empower communities through research, education, and advocacy."
  },
  {
    name: "SolarSolutions",
    website: "SolarSolutions",
    description: "SolarSolutions is a social enterprise that provides solar energy solutions to off-grid communities. By harnessing renewable energy, they help reduce carbon emissions and improve the quality of life of rural Filipinos."
  },
  {
    name: "Climate Change Network for Community-based Initiatives",
    website: "CCNCI",
    description: "CCNCI is a network of grassroots organizations that implement community-based climate change adaptation and mitigation projects. They also advocate for climate justice and human rights."
  },
  {
    name: "Philippine Movement for Climate Justice",
    website: "PMCJ",
    description: "PMCJ is a coalition of civil society groups that campaigns for climate justice and accountability. They challenge the fossil fuel industry, demand climate finance, and promote people’s alternatives to the climate crisis."
  },
  {
    name: "Youth Strike 4 Climate Philippines",
    website: "Youth Strike 4 Climate Philippines",
    description: "Youth Strike 4 Climate Philippines is a youth-led movement that organizes mass actions to demand urgent and ambitious climate action from the government and other stakeholders. They are part of the global Fridays for Future movement inspired by Greta Thunberg."
  }
]);
