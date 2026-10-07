import { priceList } from './pricing.js';
import { regions } from './regions.js';
import { makeService, slug, rupiah } from '../utils/helpers.js';

export function regionById(id) {
  return regions.find((region) => region.id === id);
}

export function serviceDescription(region, group) {
  return `${group.name} - ${region.summary}`;
}

export function servicesFromRegions(regionIds, filter = () => true) {
  return regionIds.flatMap((regionId) => {
    const region = regionById(regionId);
    if (!region) return [];

    return region.groups.flatMap((group) =>
      group.services
        .filter((service) => filter(service, group, region))
        .map((service) => {
          // Buang duplikasi tag (misal ada dua tag "Explore")
          const rawTags = [region.name, group.name, ...(service.tags || [])];
          const uniqueTags = [...new Set(rawTags)];

          return makeService(
            `${region.id}-${slug(group.name)}-${slug(service.name)}`,
            `${region.name} - ${service.name}`,
            "", // Dikosongkan agar tidak terlalu panjang
            rupiah(service.price),
            uniqueTags
          );
        })
    );
  });
}

export function servicesByTag(tag, regionIds = regions.map((region) => region.id)) {
  return servicesFromRegions(regionIds, (service) => service.tags && service.tags.includes(tag));
}

export function buildCategories() {
  const allRegionIds = regions.map((region) => region.id);
  const sumeruIds = ["sumeru-forest", "aranyaka-detail", "sumeru-desert"];
  const natlanIds = ["natlan-5-0", "natlan-5-2", "natlan-5-5"];
  const nodkraiIds = ["nodkrai-6-0", "nodkrai-6-3"];

  const endgameServices = priceList.endgame.flatMap((group) =>
    group.services.map((service) =>
      makeService(
        `endgame-${slug(group.category)}-${slug(service.name)}`,
        `${group.category} - ${service.name}`,
        `Clear ${group.category} dengan tier service ${service.name}.`,
        rupiah(service.price),
        [group.category, "Endgame"]
      )
    )
  );

  const eventServices = priceList.events.map((event) =>
    makeService(
      `event-${slug(event.name)}`,
      event.name,
      `Reward estimasi: ${event.reward}.`,
      rupiah(event.price),
      ["Event", event.reward]
    )
  );

  const maintenanceServices = [
    ...priceList.accountMaintenance.eptupi.map((service) =>
      makeService(
        `eptupi-${slug(service.duration)}`,
        `EPTUPI - ${service.duration}`,
        "Account maintenance ringan untuk daily routine sesuai durasi.",
        rupiah(service.price),
        ["EPTUPI", service.duration]
      )
    ),
    makeService(
      "vip-whaler-30-hari",
      "VIP Whaler - 30 Hari",
      priceList.accountMaintenance.vipWhaler.features.join(", "),
      rupiah(priceList.accountMaintenance.vipWhaler.price),
      ["VIP Whaler", priceList.accountMaintenance.vipWhaler.duration]
    ),
  ];

  const farmingServices = priceList.resourceFarming.map((item) =>
    makeService(
      `farm-${slug(item.name)}`,
      item.name,
      "Resource farming per item sesuai jumlah yang dipesan.",
      `${rupiah(item.pricePerItem)} / item`,
      ["Farming"]
    )
  );

  const fishingServices = priceList.weaponFishing.map((weapon) =>
    makeService(
      `fishing-${slug(weapon.weapon)}`,
      weapon.weapon,
      `${weapon.region} fishing weapon service. R1, R5, atau refinement dapat dipilih saat order.`,
      `R1 ${rupiah(weapon.r1)} | R5 ${rupiah(weapon.r5)} | Refinement ${rupiah(weapon.refinement)}`,
      [weapon.region, "Fishing"]
    )
  );

  const oculusServices = priceList.oculusServices.map((service) =>
    makeService(
      `oculus-${slug(service.name)}`,
      service.name,
      `Oculus collection package. ${service.note}`,
      rupiah(service.price),
      ["Oculus", "Exploration", "Collection"]
    )
  );

  const characterAscendServices = priceList.characterAscend.map((service) =>
    makeService(
      `character-ascend-${slug(service.name)}`,
      `Ascend Character - ${service.name}`,
      "Character ascend service sesuai tier level terbaru.",
      `${rupiah(service.price)}${service.unit ? ` ${service.unit}` : ""}`,
      ["Ascend Character", "Character", "Progression"]
    )
  );

  const weaponAscendServices = priceList.weaponAscend.map((service) =>
    makeService(
      `weapon-ascend-${slug(service.name)}`,
      `Ascend Weapon - ${service.name}`,
      "Weapon ascend service sesuai tier level terbaru.",
      `${rupiah(service.price)}${service.unit ? ` ${service.unit}` : ""}`,
      ["Ascend Weapon", "Weapon", "Progression"]
    )
  );

  const talentServices = priceList.talentServices.map((service) =>
    makeService(
      `talent-${slug(service.name)}`,
      `Talent - ${service.name}`,
      "Talent upgrade service sesuai level atau paket terbaru.",
      rupiah(service.price),
      ["Talent", "Crown", "Progression"]
    )
  );

  const progressionServices = [
    ...characterAscendServices,
    ...weaponAscendServices,
    ...talentServices,
  ];

  return [
    {
      id: "archon-world-quest",
      name: "Archon Quest & World Quest",
      short: "Quests",
      accent: "#d7b16b",
      summary: "Daftar quest, quest prasyarat, dan paket quest berdasarkan region.",
      services: servicesByTag("Quest", allRegionIds),
    },
    {
      id: "exploration-services",
      name: "Exploration Services",
      short: "Exploration",
      accent: "#3fd0e5",
      summary: "Progress exploration per persen, area explore, dan full exploration region.",
      services: [
        makeService(
          "exploration-per-percent",
          "Exploration per 1%",
          "Harga fleksibel untuk menaikkan progress exploration berdasarkan persentase.",
          `${rupiah(priceList.exploration.perPercent)} / 1%`,
          ["Explore"]
        ),
        ...servicesByTag("Explore", allRegionIds),
      ],
    },
    {
      id: "oculus-services",
      name: "Oculus Services",
      short: "Oculus",
      accent: "#6bd7ff",
      summary: "Oculus collection package 10 atau 20 Oculus, dengan catatan quest pembuka area.",
      services: oculusServices,
    },
    {
      id: "ascend-talent-services",
      name: "Ascend & Talent Services",
      short: "Ascend",
      accent: "#f1c87a",
      summary: "Ascend character, ascend weapon, talent level, paket talent, dan triple crown.",
      services: progressionServices,
    },
    {
      id: "aranyaka-quest",
      name: "Aranyaka Quest",
      short: "Aranyaka",
      accent: "#74d56b",
      summary: "Detail Aranyaka part 1-4, final chapter, 76 Aranara, dan paket lengkap.",
      services: servicesByTag("Aranyaka", ["sumeru-forest", "aranyaka-detail"]),
    },
    {
      id: "fontaine-services",
      name: "Fontaine Services",
      short: "Fontaine",
      accent: "#48bff4",
      summary: "Questline Fontaine, exploration per area, dan paket lengkap Fontaine.",
      services: servicesFromRegions(["fontaine"]),
    },
    {
      id: "natlan-services",
      name: "Natlan Services",
      short: "Natlan",
      accent: "#ff8a4c",
      summary: "Natlan package per versi map: 5.0, 5.2, dan 5.5.",
      services: servicesFromRegions(natlanIds),
    },
    {
      id: "nodkrai-services",
      name: "Nod-Krai Services",
      short: "Nod-Krai",
      accent: "#aab8ff",
      summary: "Nodkrai 6.0 dan 6.3, termasuk quest, explore, dan paket area.",
      services: servicesFromRegions(nodkraiIds),
    },
    {
      id: "temple-of-space-services",
      name: "Temple of Space",
      short: "Temple",
      accent: "#9dc0ff",
      summary: "Temple of Space quest dan exploration.",
      services: servicesFromRegions(["temple-of-space"]),
    },
    {
      id: "frostmoon-services",
      name: "Frostmoon Services",
      short: "Frostmoon",
      accent: "#b8d7ff",
      summary: "Full Package Frost Moon: quest prasyarat + eksplorasi Act I - Act III.",
      services: servicesFromRegions(["frostmoon"]),
    },
    {
      id: "chasm-services",
      name: "Chasm Services",
      short: "Chasm",
      accent: "#d0965a",
      summary: "Chasm quest prasyarat, exploration atas, underground, dan paket.",
      services: servicesFromRegions(["chasm"]),
    },
    {
      id: "chenyu-vale-services",
      name: "Chenyu Vale Services",
      short: "Chenyu",
      accent: "#9ad28b",
      summary: "Chenyu Vale quest prasyarat, exploration area, dan paket.",
      services: servicesFromRegions(["chenyu-vale"]),
    },
    {
      id: "enkanomiya-services",
      name: "Enkanomiya Services",
      short: "Enkanomiya",
      accent: "#7db9ff",
      summary: "Enkanomiya quest buka map, quest prasyarat explore, dan paket.",
      services: servicesFromRegions(["enkanomiya"]),
    },
    {
      id: "sumeru-services",
      name: "Sumeru Services",
      short: "Sumeru",
      accent: "#75d984",
      summary: "Sumeru Forest, Detail Aranyaka, dan Sumeru Desert.",
      services: servicesFromRegions(sumeruIds),
    },
    {
      id: "inazuma-services",
      name: "Inazuma Services",
      short: "Inazuma",
      accent: "#b579ff",
      summary: "Inazuma quest prasyarat, exploration pulau, dan paket lengkap.",
      services: servicesFromRegions(["inazuma"]),
    },
    {
      id: "liyue-services",
      name: "Liyue Services",
      short: "Liyue",
      accent: "#e9c982",
      summary: "Liyue quest prasyarat, exploration area, dan full explore.",
      services: servicesFromRegions(["liyue"]),
    },
    {
      id: "mondstadt-services",
      name: "Mondstadt Services",
      short: "Mondstadt",
      accent: "#63d8e5",
      summary: "Mondstadt exploration, Dragonspine quest, dan paket Dragonspine.",
      services: servicesFromRegions(["mondstadt"]),
    },
    {
      id: "endgame-services",
      name: "Endgame Services",
      short: "Endgame",
      accent: "#b993ff",
      summary: "Spiral Abyss, Imaginarium Theater, dan Stygian Onslaught.",
      services: endgameServices,
    },
    {
      id: "resource-farming",
      name: "Resource Farming",
      short: "Farming",
      accent: "#7ee3a1",
      summary: "Material farming per item untuk ore, core, dan monster material.",
      services: farmingServices,
    },
    {
      id: "fishing-weapon-services",
      name: "Fishing Weapon Services",
      short: "Fishing",
      accent: "#5fc4ff",
      summary: "The Catch, End of the Line, dan Fleuve Cendre Ferryman.",
      services: fishingServices,
    },
    {
      id: "event-services",
      name: "Event Services",
      short: "Events",
      accent: "#ffca6e",
      summary: "Event besar dan event kecil berdasarkan estimasi reward.",
      services: eventServices,
    },
    {
      id: "account-maintenance",
      name: "Account Maintenance",
      short: "Maintenance",
      accent: "#ff7c94",
      summary: "EPTUPI harian dan VIP Whaler monthly package.",
      services: maintenanceServices,
    },
  ];
}
