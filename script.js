"use strict";

const DISCORD = {
  username: "Hamikho Genshin Service",
  invite: "https://discord.gg/nuvbwumq",
};

const priceList = {
  "endgame": [
    {
      "category": "Spiral Abyss",
      "services": [
        {
          "name": "VIP Sesuai Jadwal",
          "price": 10000
        },
        {
          "name": "VIP Di Luar Jadwal",
          "price": 15000
        },
        {
          "name": "VVIP / Express",
          "price": 50000
        }
      ]
    },
    {
      "category": "Imaginarium Theater",
      "services": [
        {
          "name": "VIP Sesuai Jadwal",
          "price": 10000
        },
        {
          "name": "VIP Di Luar Jadwal",
          "price": 15000
        },
        {
          "name": "VVIP / Express",
          "price": 50000
        }
      ]
    },
    {
      "category": "Stygian Onslaught",
      "services": [
        {
          "name": "VIP Sesuai Jadwal",
          "price": 10000
        },
        {
          "name": "VIP Di Luar Jadwal",
          "price": 15000
        },
        {
          "name": "VVIP / Express",
          "price": 50000
        }
      ]
    }
  ],
  "events": [
    {
      "name": "Event Besar",
      "price": 30000,
      "reward": "+/-1000 Primogem + Crown"
    },
    {
      "name": "Event Kecil",
      "price": 15000,
      "reward": "+/-420 Primogem"
    }
  ],
  "accountMaintenance": {
    "eptupi": [
      {
        "duration": "1 Hari",
        "price": 3000
      },
      {
        "duration": "3 Hari",
        "price": 9000
      },
      {
        "duration": "7 Hari",
        "price": 21000
      },
      {
        "duration": "30 Hari",
        "price": 90000
      }
    ],
    "vipWhaler": {
      "duration": "30 Hari",
      "price": 200000,
      "features": [
        "Daily Commission",
        "Resin Management",
        "Weekly Boss",
        "Battle Pass Mission",
        "All Events",
        "Spiral Abyss",
        "Imaginarium Theater"
      ]
    }
  },
  "resourceFarming": [
    {
      "name": "Crystal Chunk",
      "pricePerItem": 100
    },
    {
      "name": "Amethyst Lump",
      "pricePerItem": 100
    },
    {
      "name": "Condessence Crystal",
      "pricePerItem": 100
    },
    {
      "name": "Material Ascend Character (Map Lama)",
      "pricePerItem": 100
    },
    {
      "name": "Material Ascend Character (Map Baru)",
      "pricePerItem": 200
    },
    {
      "name": "Crystal Core",
      "pricePerItem": 100
    },
    {
      "name": "Monster Material",
      "pricePerItem": 100
    }
  ],
  "weaponFishing": [
    {
      "weapon": "The Catch",
      "region": "Inazuma",
      "r1": 40000,
      "r5": 75000,
      "refinement": 10000
    },
    {
      "weapon": "End of the Line",
      "region": "Sumeru",
      "r1": 40000,
      "r5": 75000,
      "refinement": 10000
    },
    {
      "weapon": "Fleuve Cendre Ferryman",
      "region": "Fontaine",
      "r1": 40000,
      "r5": 75000,
      "refinement": 10000
    }
  ],
  "exploration": {
    "perPercent": 500
  },
  "regions": [
    {
      "id": "mondstadt",
      "name": "Mondstadt",
      "short": "Mondstadt",
      "accent": "#63d8e5",
      "summary": "Exploration Mondstadt, Dragonspine quest, dan paket Dragonspine.",
      "groups": [
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Starfell Valley",
              "price": 50000,
              "tags": [
                "Explore",
                "Mondstadt"
              ]
            },
            {
              "name": "Brightcrown Mountain",
              "price": 40000,
              "tags": [
                "Explore",
                "Mondstadt"
              ]
            },
            {
              "name": "Windcry Hill",
              "price": 35000,
              "tags": [
                "Explore",
                "Mondstadt"
              ]
            },
            {
              "name": "Windwail Highland",
              "price": 35000,
              "tags": [
                "Explore",
                "Mondstadt"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Explore Mondstadt",
              "price": 150000,
              "tags": [
                "Explore",
                "Package",
                "Mondstadt"
              ]
            },
            {
              "name": "Quest Dragonspine",
              "price": 30000,
              "tags": [
                "Quest",
                "Dragonspine"
              ]
            },
            {
              "name": "Explore Dragonspine",
              "price": 70000,
              "tags": [
                "Explore",
                "Dragonspine"
              ]
            },
            {
              "name": "Mondstadt + Dragonspine",
              "price": 210000,
              "tags": [
                "Explore",
                "Package",
                "Mondstadt",
                "Dragonspine"
              ]
            },
            {
              "name": "Explore + Quest Dragonspine",
              "price": 240000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Dragonspine"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "liyue",
      "name": "Liyue",
      "short": "Liyue",
      "accent": "#e9c982",
      "summary": "Quest prasyarat dan exploration Liyue per area.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Chi dari Masa Lampau",
              "price": 15000,
              "tags": [
                "Quest",
                "Liyue"
              ]
            },
            {
              "name": "Harta Hilang Harta Ditemukan",
              "price": 15000,
              "tags": [
                "Quest",
                "Liyue"
              ]
            },
            {
              "name": "Pohon yang Berdiri Sendiri",
              "price": 5000,
              "tags": [
                "Quest",
                "Liyue"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Minlin",
              "price": 70000,
              "tags": [
                "Explore",
                "Liyue"
              ]
            },
            {
              "name": "Bishui Plain",
              "price": 60000,
              "tags": [
                "Explore",
                "Liyue"
              ]
            },
            {
              "name": "Qiongji Estuary",
              "price": 50000,
              "tags": [
                "Explore",
                "Liyue"
              ]
            },
            {
              "name": "Lisha",
              "price": 40000,
              "tags": [
                "Explore",
                "Liyue"
              ]
            },
            {
              "name": "Sea of Clouds",
              "price": 40000,
              "tags": [
                "Explore",
                "Liyue"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Explore Liyue",
              "price": 250000,
              "tags": [
                "Explore",
                "Package",
                "Liyue"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "chasm",
      "name": "Chasm",
      "short": "Chasm",
      "accent": "#d0965a",
      "summary": "Quest prasyarat, Chasm atas, dan Chasm Underground.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Jurnal Penjelajah Chasm",
              "price": 50000,
              "tags": [
                "Quest",
                "Chasm"
              ]
            },
            {
              "name": "Archon Quest Chapter II Act IV",
              "price": 30000,
              "tags": [
                "Quest",
                "Chasm",
                "Archon Quest"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Chasm Atas",
              "price": 40000,
              "tags": [
                "Explore",
                "Chasm"
              ]
            },
            {
              "name": "Chasm Underground",
              "price": 70000,
              "tags": [
                "Explore",
                "Chasm"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Explore",
              "price": 100000,
              "tags": [
                "Explore",
                "Package",
                "Chasm"
              ]
            },
            {
              "name": "Explore + Quest",
              "price": 180000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Chasm"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "chenyu-vale",
      "name": "Chenyu Vale",
      "short": "Chenyu",
      "accent": "#9ad28b",
      "summary": "Quest prasyarat dan exploration Chenyu Vale.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Berkah Chenyu dari Giok Karam",
              "price": 50000,
              "tags": [
                "Quest",
                "Chenyu Vale"
              ]
            },
            {
              "name": "Sepanjang Wangshang Kenangan",
              "price": 20000,
              "tags": [
                "Quest",
                "Chenyu Vale"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Chenyu Vale Upper Vale",
              "price": 75000,
              "tags": [
                "Explore",
                "Chenyu Vale"
              ]
            },
            {
              "name": "Chenyu Vale Southern Mountain",
              "price": 75000,
              "tags": [
                "Explore",
                "Chenyu Vale"
              ]
            },
            {
              "name": "Mt. Laixin",
              "price": 15000,
              "tags": [
                "Explore",
                "Chenyu Vale"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Explore",
              "price": 150000,
              "tags": [
                "Explore",
                "Package",
                "Chenyu Vale"
              ]
            },
            {
              "name": "Explore + Quest",
              "price": 220000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Chenyu Vale"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "inazuma",
      "name": "Inazuma",
      "short": "Inazuma",
      "accent": "#b579ff",
      "summary": "Quest prasyarat, exploration enam pulau, dan paket Inazuma.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Ritual Pemurnian Sacred Sakura",
              "price": 50000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Kisah Tatara",
              "price": 15000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Warisan Orobashi",
              "price": 30000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Pemburu Badai Seirai",
              "price": 25000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Harta Karun Seirai",
              "price": 5000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Dasar Pemandian Bulan",
              "price": 20000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            },
            {
              "name": "Perjalanan Melalui Kabut",
              "price": 60000,
              "tags": [
                "Quest",
                "Inazuma"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Narukami Island",
              "price": 70000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            },
            {
              "name": "Kannazuka",
              "price": 70000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            },
            {
              "name": "Yashiori Island",
              "price": 70000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            },
            {
              "name": "Watatsumi Island",
              "price": 70000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            },
            {
              "name": "Seirai Island",
              "price": 70000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            },
            {
              "name": "Tsurumi Island",
              "price": 80000,
              "tags": [
                "Explore",
                "Inazuma"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest",
              "price": 205000,
              "tags": [
                "Quest",
                "Package",
                "Inazuma"
              ]
            },
            {
              "name": "Full Explore",
              "price": 430000,
              "tags": [
                "Explore",
                "Package",
                "Inazuma"
              ]
            },
            {
              "name": "Explore + Quest",
              "price": 620000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Inazuma"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "enkanomiya",
      "name": "Enkanomiya",
      "short": "Enkanomiya",
      "accent": "#7db9ff",
      "summary": "Quest buka map, quest prasyarat explore, dan paket Enkanomiya.",
      "groups": [
        {
          "name": "Quest Buka Map",
          "type": "quest",
          "services": [
            {
              "name": "Dasar Pemandian Bulan",
              "price": 20000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            },
            {
              "name": "Aliran Air Yang Tenang",
              "price": 20000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            },
            {
              "name": "Dari Senja Hingga Fajar di Byakuyakoku",
              "price": 30000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            }
          ]
        },
        {
          "name": "Quest Prasyarat Explore",
          "type": "quest",
          "services": [
            {
              "name": "Koleksi Naga dan Ular",
              "price": 30000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            },
            {
              "name": "Rahasia Erebos",
              "price": 15000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            },
            {
              "name": "Pemakan Lotus",
              "price": 10000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            },
            {
              "name": "Nyanyian Duka Hyperion",
              "price": 15000,
              "tags": [
                "Quest",
                "Enkanomiya"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Explore Enkanomiya",
              "price": 80000,
              "tags": [
                "Explore",
                "Package",
                "Enkanomiya"
              ]
            },
            {
              "name": "Quest + Explore",
              "price": 200000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Enkanomiya"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sumeru-forest",
      "name": "Sumeru Forest",
      "short": "Forest",
      "accent": "#75d984",
      "summary": "Aranyaka, 76 Aranara, dan exploration area forest.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Aranyaka + 76 Aranara",
              "price": 250000,
              "tags": [
                "Quest",
                "Aranyaka",
                "Sumeru Forest"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Ashavan Realm",
              "price": 80000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Ardravi Valley",
              "price": 70000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Lokapala Jungle",
              "price": 60000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Avidya Forest",
              "price": 50000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Vissudha Field",
              "price": 50000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Vanarana",
              "price": 30000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Lost Nursery",
              "price": 20000,
              "tags": [
                "Explore",
                "Sumeru Forest"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest",
              "price": 250000,
              "tags": [
                "Quest",
                "Package",
                "Sumeru Forest",
                "Aranyaka"
              ]
            },
            {
              "name": "Full Explore",
              "price": 360000,
              "tags": [
                "Explore",
                "Package",
                "Sumeru Forest"
              ]
            },
            {
              "name": "Explore + Quest",
              "price": 600000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Sumeru Forest"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "aranyaka-detail",
      "name": "Detail Aranyaka",
      "short": "Aranyaka",
      "accent": "#74d56b",
      "summary": "Detail harga Aranyaka part 1-4, final chapter, dan 76 Aranara.",
      "groups": [
        {
          "name": "Aranyaka Part 1",
          "type": "quest",
          "services": [
            {
              "name": "Pertemuan di Hutan",
              "price": 25000,
              "tags": [
                "Quest",
                "Aranyaka"
              ]
            }
          ]
        },
        {
          "name": "Aranyaka Part 2",
          "type": "quest",
          "services": [
            {
              "name": "Kebul Bibi di Dalam Mimpi, Dunia Aranara, Impian Kuliner, Agnihotra Sutra, Varuna Gatha, Vimana Agama, 3 Buah Vasoma, Festival Utsava, Anak Anak Hutan",
              "price": 80000,
              "tags": [
                "Quest",
                "Aranyaka"
              ]
            }
          ]
        },
        {
          "name": "Aranyaka Part 3",
          "type": "quest",
          "services": [
            {
              "name": "Taman Impian Yang Hilang",
              "price": 50000,
              "tags": [
                "Quest",
                "Aranyaka"
              ]
            }
          ]
        },
        {
          "name": "Aranyaka Part 4",
          "type": "quest",
          "services": [
            {
              "name": "Halo Terima Kasih + Sampai Jumpa",
              "price": 20000,
              "tags": [
                "Quest",
                "Aranyaka"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest Aranyaka 1-4",
              "price": 160000,
              "tags": [
                "Quest",
                "Package",
                "Aranyaka"
              ]
            }
          ]
        },
        {
          "name": "Final Chapter",
          "type": "quest",
          "services": [
            {
              "name": "Chapter I",
              "price": 5000,
              "tags": [
                "Quest",
                "Aranyaka",
                "Final Chapter"
              ]
            },
            {
              "name": "Chapter II",
              "price": 20000,
              "tags": [
                "Quest",
                "Aranyaka",
                "Final Chapter"
              ]
            },
            {
              "name": "Chapter IV",
              "price": 30000,
              "tags": [
                "Quest",
                "Aranyaka",
                "Final Chapter"
              ]
            },
            {
              "name": "Chapter V",
              "price": 15000,
              "tags": [
                "Quest",
                "Aranyaka",
                "Final Chapter"
              ]
            }
          ]
        },
        {
          "name": "Paket Final",
          "type": "package",
          "services": [
            {
              "name": "Semua Final Chapter",
              "price": 60000,
              "tags": [
                "Quest",
                "Package",
                "Aranyaka",
                "Final Chapter"
              ]
            },
            {
              "name": "Cari 76 Aranara",
              "price": 60000,
              "tags": [
                "Quest",
                "Aranyaka",
                "76 Aranara"
              ]
            },
            {
              "name": "Full Aranyaka + 76 Aranara",
              "price": 250000,
              "tags": [
                "Quest",
                "Package",
                "Aranyaka",
                "76 Aranara"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sumeru-desert",
      "name": "Sumeru Desert",
      "short": "Desert",
      "accent": "#d6b56f",
      "summary": "Quest prasyarat dan exploration seluruh area desert.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Mimpi Emas",
              "price": 70000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Bukti Ganda",
              "price": 30000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Dilema Afratu",
              "price": 15000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Lagu Berkabung Bilqis",
              "price": 60000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Tadla si Elang Pemburu",
              "price": 15000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Kiamat yang Telah Berlalu",
              "price": 15000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Khvarena Baik dan Buruk",
              "price": 80000,
              "tags": [
                "Quest",
                "Sumeru Desert"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Land of Lower Setekh",
              "price": 70000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Land of Upper Setekh",
              "price": 60000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Hypostyle Desert",
              "price": 80000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Desert of Hadramaveth",
              "price": 100000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Gavireh Lajavard",
              "price": 70000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Realm of Farakhkert",
              "price": 70000,
              "tags": [
                "Explore",
                "Sumeru Desert"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest",
              "price": 285000,
              "tags": [
                "Quest",
                "Package",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Full Explore",
              "price": 450000,
              "tags": [
                "Explore",
                "Package",
                "Sumeru Desert"
              ]
            },
            {
              "name": "Explore + Quest",
              "price": 700000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Sumeru Desert"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "fontaine",
      "name": "Fontaine",
      "short": "Fontaine",
      "accent": "#48bff4",
      "summary": "Questline Fontaine dan exploration seluruh region Fontaine.",
      "groups": [
        {
          "name": "Quest (Beryl, Court, Belleau)",
          "type": "quest",
          "services": [
            {
              "name": "Petualangan Narzissenkreuz",
              "price": 70000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Warna-Warna Kuno",
              "price": 60000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Jejak Pasang Laut",
              "price": 30000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Kitab Kebenaran Samudra",
              "price": 20000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Subtotal Beryl, Court, Belleau",
              "price": 180000,
              "tags": [
                "Quest",
                "Package",
                "Fontaine"
              ]
            }
          ]
        },
        {
          "name": "Quest (Liffey & Research Institute)",
          "type": "quest",
          "services": [
            {
              "name": "Komedi Yang Belum Selesai",
              "price": 80000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Institut Penelitian Fontaine",
              "price": 40000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Menuju Keganjilan",
              "price": 20000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Cahaya Pengkhianatan Dasar Laut",
              "price": 15000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Subtotal Liffey & Research Institute",
              "price": 155000,
              "tags": [
                "Quest",
                "Package",
                "Fontaine"
              ]
            }
          ]
        },
        {
          "name": "Quest (Morte & Liffey)",
          "type": "quest",
          "services": [
            {
              "name": "Peri Dari Erinnyes",
              "price": 30000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Jejak Narcissus",
              "price": 70000,
              "tags": [
                "Quest",
                "Fontaine"
              ]
            },
            {
              "name": "Subtotal Morte & Liffey",
              "price": 100000,
              "tags": [
                "Quest",
                "Package",
                "Fontaine"
              ]
            }
          ]
        },
        {
          "name": "Quest (Nostoi & Sea of Bygone)",
          "type": "quest",
          "services": [
            {
              "name": "Tahanan Dalam Belenggu",
              "price": 50000,
              "tags": [
                "Quest",
                "Fontaine",
                "Sea of Bygone Eras"
              ]
            }
          ]
        },
        {
          "name": "Paket Quest",
          "type": "package",
          "services": [
            {
              "name": "Full Quest Fontaine",
              "price": 450000,
              "tags": [
                "Quest",
                "Package",
                "Fontaine"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Beryl Region",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Belleau Region",
              "price": 40000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Court of Fontaine",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Liffey Region",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Fontaine Research Institute",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Erinnyes Forest",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Morte Region",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Nostoi Region",
              "price": 40000,
              "tags": [
                "Explore",
                "Fontaine"
              ]
            },
            {
              "name": "Sea of Bygone Eras",
              "price": 70000,
              "tags": [
                "Explore",
                "Fontaine",
                "Sea of Bygone Eras"
              ]
            }
          ]
        },
        {
          "name": "Paket Explore",
          "type": "package",
          "services": [
            {
              "name": "Full Explore Fontaine",
              "price": 550000,
              "tags": [
                "Explore",
                "Package",
                "Fontaine"
              ]
            },
            {
              "name": "Quest + Explore Fontaine",
              "price": 1000000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Fontaine"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "natlan-5-0",
      "name": "Natlan 5.0",
      "short": "Natlan 5.0",
      "accent": "#ff8a4c",
      "summary": "Quest prasyarat dan exploration Natlan versi 5.0.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Antara Janji dan Lupa",
              "price": 35000,
              "tags": [
                "Quest",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Bayangan Gunung",
              "price": 40000,
              "tags": [
                "Quest",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Kisah Mencari Mimpi di Tengah Api",
              "price": 35000,
              "tags": [
                "Quest",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Memancing Masalah",
              "price": 10000,
              "tags": [
                "Quest",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Kembalikan Malam Pada Sang Malam",
              "price": 10000,
              "tags": [
                "Quest",
                "Natlan 5.0"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Tequemecan Valley",
              "price": 60000,
              "tags": [
                "Explore",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Coatepec Mountain",
              "price": 60000,
              "tags": [
                "Explore",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Basin of Unnumbered Flames",
              "price": 60000,
              "tags": [
                "Explore",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Toyac Springs",
              "price": 60000,
              "tags": [
                "Explore",
                "Natlan 5.0"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest",
              "price": 120000,
              "tags": [
                "Quest",
                "Package",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Full Explore",
              "price": 200000,
              "tags": [
                "Explore",
                "Package",
                "Natlan 5.0"
              ]
            },
            {
              "name": "Quest + Explore",
              "price": 300000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Natlan 5.0"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "natlan-5-2",
      "name": "Natlan 5.2",
      "short": "Natlan 5.2",
      "accent": "#ff9b62",
      "summary": "Quest prasyarat dan exploration Natlan versi 5.2.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Kota Yang Terkubur Oleh Abu",
              "price": 50000,
              "tags": [
                "Quest",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Misteri Bulu Mengapung di Tepi Pantai",
              "price": 15000,
              "tags": [
                "Quest",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Buka Jantungmu Untukku",
              "price": 15000,
              "tags": [
                "Quest",
                "Natlan 5.2"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Tezcatepetonco Range",
              "price": 60000,
              "tags": [
                "Explore",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Quahuacan Cliff",
              "price": 40000,
              "tags": [
                "Explore",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Ochkanatlan",
              "price": 70000,
              "tags": [
                "Explore",
                "Natlan 5.2"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Full Quest",
              "price": 70000,
              "tags": [
                "Quest",
                "Package",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Full Explore",
              "price": 150000,
              "tags": [
                "Explore",
                "Package",
                "Natlan 5.2"
              ]
            },
            {
              "name": "Quest + Explore",
              "price": 200000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Natlan 5.2"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "natlan-5-5",
      "name": "Natlan 5.5",
      "short": "Natlan 5.5",
      "accent": "#ff7048",
      "summary": "Quest prasyarat dan exploration Natlan versi 5.5.",
      "groups": [
        {
          "name": "Quest Prasyarat",
          "type": "quest",
          "services": [
            {
              "name": "Jalan Menuju Puncak Berkobar",
              "price": 10000,
              "tags": [
                "Quest",
                "Natlan 5.5"
              ]
            },
            {
              "name": "Penyair Kota Yang Hancur",
              "price": 50000,
              "tags": [
                "Quest",
                "Natlan 5.5"
              ]
            },
            {
              "name": "Akhir dari Kembalinya Bara Api",
              "price": 10000,
              "tags": [
                "Quest",
                "Natlan 5.5"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Atocpan",
              "price": 75000,
              "tags": [
                "Explore",
                "Natlan 5.5"
              ]
            },
            {
              "name": "Ancient Sacred Mountain",
              "price": 75000,
              "tags": [
                "Explore",
                "Natlan 5.5",
                "Ancient Sacred Mountain"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Quest + Explore",
              "price": 220000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Natlan 5.5"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "nodkrai-6-0",
      "name": "Nodkrai 6.0",
      "short": "Nodkrai 6.0",
      "accent": "#aab8ff",
      "summary": "Quest dan exploration Nodkrai 6.0 untuk Hiisi Island, Lempo Isle, dan Paha Isle.",
      "groups": [
        {
          "name": "Hiisi Island - Quest",
          "type": "quest",
          "services": [
            {
              "name": "Kisah Gerbang Batu",
              "price": 5000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            },
            {
              "name": "Cermin, Labirin, dan Sang Tsar",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            },
            {
              "name": "Demi Sebuah Pulau Yang Hijau",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            },
            {
              "name": "Hadiah Fatamorgana",
              "price": 5000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            },
            {
              "name": "Gema Masa Lalu Yang Tak Terselesaikan",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            }
          ]
        },
        {
          "name": "Hiisi Island - Paket",
          "type": "package",
          "services": [
            {
              "name": "Hiisi Island Explore",
              "price": 50000,
              "tags": [
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            },
            {
              "name": "Hiisi Island Quest + Explore",
              "price": 80000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Hiisi Island"
              ]
            }
          ]
        },
        {
          "name": "Lempo Isle - Quest",
          "type": "quest",
          "services": [
            {
              "name": "Kecemasan Pergantian Karir",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Teman Lembah Moley",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Tim Teliti atau Tim Intuisi",
              "price": 15000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Hati Pemberita Rahasia",
              "price": 20000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Bisikan di Bawah Ombak",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Warna Kekosongan",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Kekuatan Penelitian",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            }
          ]
        },
        {
          "name": "Lempo Isle - Paket",
          "type": "package",
          "services": [
            {
              "name": "Lempo Isle Explore",
              "price": 80000,
              "tags": [
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            },
            {
              "name": "Lempo Isle Quest + Explore",
              "price": 150000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Lempo Isle"
              ]
            }
          ]
        },
        {
          "name": "Paha Isle - Quest",
          "type": "quest",
          "services": [
            {
              "name": "Anak Tukang Sepatu Tapi Tidak Pakai Sepatu",
              "price": 20000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Paha Isle"
              ]
            },
            {
              "name": "Janji Terbang ke Langit",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Paha Isle"
              ]
            },
            {
              "name": "Prioritas Utama",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.0",
                "Paha Isle"
              ]
            }
          ]
        },
        {
          "name": "Paha Isle - Paket",
          "type": "package",
          "services": [
            {
              "name": "Paha Isle Explore",
              "price": 50000,
              "tags": [
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Paha Isle"
              ]
            },
            {
              "name": "Paha Isle Quest + Explore",
              "price": 80000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Nodkrai 6.0",
                "Paha Isle"
              ]
            }
          ]
        },
        {
          "name": "Full Nodkrai 6.0",
          "type": "package",
          "services": [
            {
              "name": "Semua Area",
              "price": 300000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Nodkrai 6.0"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "nodkrai-6-3",
      "name": "Nodkrai 6.3",
      "short": "Nodkrai 6.3",
      "accent": "#8fa0ff",
      "summary": "Quest dan exploration Nodkrai 6.3.",
      "groups": [
        {
          "name": "Quest",
          "type": "quest",
          "services": [
            {
              "name": "Gelombang Tiupan Angin",
              "price": 5000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Menara Terbalik",
              "price": 15000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Saat Lagu Perang Digemakan",
              "price": 15000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Malam Terakhir Cahaya Pertama",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Gema Lagu Yang Diasingkan",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Silsilah Gagak",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Kembali ke Tangan Pemilik Sebenarnya",
              "price": 15000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Menghukum Pendosa Dengan Dosa",
              "price": 10000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Dengungan Roh Para Pahlawan",
              "price": 5000,
              "tags": [
                "Quest",
                "Nodkrai 6.3"
              ]
            }
          ]
        },
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Voidsea Outlook",
              "price": 60000,
              "tags": [
                "Explore",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Wavechaser Plain",
              "price": 60000,
              "tags": [
                "Explore",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Ashveil Peak",
              "price": 60000,
              "tags": [
                "Explore",
                "Nodkrai 6.3"
              ]
            }
          ]
        },
        {
          "name": "Paket",
          "type": "package",
          "services": [
            {
              "name": "Total Quest",
              "price": 95000,
              "tags": [
                "Quest",
                "Package",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Total Explore",
              "price": 180000,
              "tags": [
                "Explore",
                "Package",
                "Nodkrai 6.3"
              ]
            },
            {
              "name": "Full Quest + Explore",
              "price": 275000,
              "tags": [
                "Quest",
                "Explore",
                "Package",
                "Nodkrai 6.3"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "temple-of-space",
      "name": "Temple of Space",
      "short": "Temple",
      "accent": "#9dc0ff",
      "summary": "Quest dan exploration Temple of Space.",
      "groups": [
        {
          "name": "Explore",
          "type": "explore",
          "services": [
            {
              "name": "Temple of Space Explore",
              "price": 60000,
              "tags": [
                "Explore",
                "Temple of Space"
              ]
            }
          ]
        },
        {
          "name": "Quest",
          "type": "quest",
          "services": [
            {
              "name": "Temple of Space Quest",
              "price": 70000,
              "tags": [
                "Quest",
                "Temple of Space"
              ]
            }
          ]
        }
      ]
    }
  ]
};

function rupiah(value) {
  return `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeService(id, name, description, price, tags = []) {
  return { id, name, description, price, tags };
}

function regionById(id) {
  return priceList.regions.find((region) => region.id === id);
}

function serviceDescription(region, group) {
  return `${group.name} — ${region.summary}`;
}

function servicesFromRegions(regionIds, filter = () => true) {
  return regionIds.flatMap((regionId) => {
    const region = regionById(regionId);
    if (!region) return [];

    return region.groups.flatMap((group) =>
      group.services
        .filter((service) => filter(service, group, region))
        .map((service) =>
          makeService(
            `${region.id}-${slug(group.name)}-${slug(service.name)}`,
            `${region.name} - ${service.name}`,
            serviceDescription(region, group),
            rupiah(service.price),
            [region.name, group.name, ...(service.tags || [])],
          ),
        ),
    );
  });
}

function servicesByTag(tag, regionIds = priceList.regions.map((region) => region.id)) {
  return servicesFromRegions(regionIds, (service) => service.tags && service.tags.includes(tag));
}

function buildCategories() {
  const allRegionIds = priceList.regions.map((region) => region.id);
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
        [group.category, "Endgame"],
      ),
    ),
  );

  const eventServices = priceList.events.map((event) =>
    makeService(
      `event-${slug(event.name)}`,
      event.name,
      `Reward estimasi: ${event.reward}.`,
      rupiah(event.price),
      ["Event", event.reward],
    ),
  );

  const maintenanceServices = [
    ...priceList.accountMaintenance.eptupi.map((service) =>
      makeService(
        `eptupi-${slug(service.duration)}`,
        `EPTUPI - ${service.duration}`,
        "Account maintenance ringan untuk daily routine sesuai durasi.",
        rupiah(service.price),
        ["EPTUPI", service.duration],
      ),
    ),
    makeService(
      "vip-whaler-30-hari",
      "VIP Whaler - 30 Hari",
      priceList.accountMaintenance.vipWhaler.features.join(", "),
      rupiah(priceList.accountMaintenance.vipWhaler.price),
      ["VIP Whaler", priceList.accountMaintenance.vipWhaler.duration],
    ),
  ];

  const farmingServices = priceList.resourceFarming.map((item) =>
    makeService(
      `farm-${slug(item.name)}`,
      item.name,
      "Resource farming per item sesuai jumlah yang dipesan.",
      `${rupiah(item.pricePerItem)} / item`,
      ["Farming"],
    ),
  );

  const fishingServices = priceList.weaponFishing.map((weapon) =>
    makeService(
      `fishing-${slug(weapon.weapon)}`,
      weapon.weapon,
      `${weapon.region} fishing weapon service. R1, R5, atau refinement dapat dipilih saat order.`,
      `R1 ${rupiah(weapon.r1)} | R5 ${rupiah(weapon.r5)} | Refinement ${rupiah(weapon.refinement)}`,
      [weapon.region, "Fishing"],
    ),
  );

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
          ["Explore"],
        ),
        ...servicesByTag("Explore", allRegionIds),
      ],
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

const categories = buildCategories();

const regionCards = [
  {
    "name": "Mondstadt",
    "subtitle": "The City of Freedom",
    "image": "assets/regions/mondstadt.webp",
    "emblem": "assets/emblems/mondstadt-emblem.webp",
    "accent": "#63d8e5",
    "target": "mondstadt-services",
    "highlights": [
      "Starfell Rp 50.000",
      "Full Explore Rp 150.000",
      "Dragonspine Rp 70.000"
    ]
  },
  {
    "name": "Liyue",
    "subtitle": "The Harbor of Contracts",
    "image": "assets/regions/liyue.webp",
    "emblem": "assets/emblems/liyue-emblem.webp",
    "accent": "#e9c982",
    "target": "liyue-services",
    "highlights": [
      "Full Explore Rp 250.000",
      "Minlin Rp 70.000",
      "Quest mulai Rp 5.000"
    ]
  },
  {
    "name": "Chenyu Vale",
    "subtitle": "Liyue Mountain Valley",
    "image": "assets/regions/liyue.webp",
    "emblem": "assets/emblems/liyue-emblem.webp",
    "accent": "#9ad28b",
    "target": "chenyu-vale-services",
    "highlights": [
      "Full Explore Rp 150.000",
      "Quest + Explore Rp 220.000",
      "Mt. Laixin Rp 15.000"
    ]
  },
  {
    "name": "Inazuma",
    "subtitle": "The Land of Eternity",
    "image": "assets/regions/inazuma.webp",
    "emblem": "assets/emblems/inazuma-emblem.webp",
    "accent": "#b579ff",
    "target": "inazuma-services",
    "highlights": [
      "Full Quest Rp 205.000",
      "Full Explore Rp 430.000",
      "Bundle Rp 620.000"
    ]
  },
  {
    "name": "Sumeru",
    "subtitle": "Forest and Desert",
    "image": "assets/regions/sumeru.webp",
    "emblem": "assets/emblems/sumeru-emblem.webp",
    "accent": "#75d984",
    "target": "sumeru-services",
    "highlights": [
      "Forest Rp 360.000",
      "Desert Rp 450.000",
      "Quest + Explore"
    ]
  },
  {
    "name": "Fontaine",
    "subtitle": "The Nation of Justice",
    "image": "assets/regions/fontaine.webp",
    "emblem": "assets/emblems/fontaine-emblem.webp",
    "accent": "#48bff4",
    "target": "fontaine-services",
    "highlights": [
      "Full Quest Rp 450.000",
      "Full Explore Rp 550.000",
      "Bundle Rp 1.000.000"
    ]
  },
  {
    "name": "Natlan",
    "subtitle": "The Land of Pyro",
    "image": "assets/regions/natlan.webp",
    "emblem": "assets/emblems/natlan-emblem.webp",
    "accent": "#ff8a4c",
    "target": "natlan-services",
    "highlights": [
      "5.0 Rp 300.000",
      "5.2 Rp 200.000",
      "5.5 Rp 220.000"
    ]
  },
  {
    "name": "Chasm",
    "subtitle": "Surface and Depths",
    "image": "assets/regions/chasm.webp",
    "emblem": "assets/emblems/chasm-emblem.webp",
    "accent": "#d0965a",
    "target": "chasm-services",
    "highlights": [
      "Explore Rp 100.000",
      "Quest + Explore Rp 180.000",
      "Underground Rp 70.000"
    ]
  },
  {
    "name": "Enkanomiya",
    "subtitle": "Evernight Realm",
    "image": "assets/regions/enkanomiya.webp",
    "emblem": "assets/emblems/enkanomiya-emblem.webp",
    "accent": "#7db9ff",
    "target": "enkanomiya-services",
    "highlights": [
      "Explore Rp 80.000",
      "Quest + Explore Rp 200.000",
      "Puzzle route"
    ]
  },
  {
    "name": "Dragonspine",
    "subtitle": "Snow-Covered Mountain",
    "image": "assets/regions/dragonspine.webp",
    "emblem": "assets/emblems/dragonspine-emblem.webp",
    "accent": "#9ed8ff",
    "target": "mondstadt-services",
    "query": "Dragonspine",
    "highlights": [
      "Quest Rp 30.000",
      "Explore Rp 70.000",
      "Quest + Explore Rp 240.000"
    ]
  },
  {
    "name": "Sea of Bygone Eras",
    "subtitle": "Ancient Fontaine Sea",
    "image": "assets/regions/sea-of-bygone-eras.webp",
    "emblem": "assets/emblems/sea-of-bygone-eras-emblem.webp",
    "accent": "#6bd7ff",
    "target": "fontaine-services",
    "query": "Sea of Bygone Eras",
    "highlights": [
      "Explore Rp 70.000",
      "Quest Fontaine",
      "Nostoi Region"
    ]
  },
  {
    "name": "Ancient Sacred Mountain",
    "subtitle": "Natlan Sacred Area",
    "image": "assets/regions/ancient-sacred-mountain.webp",
    "emblem": "assets/emblems/ancient-sacred-mountain-emblem.webp",
    "accent": "#ff9b62",
    "target": "natlan-services",
    "query": "Ancient Sacred Mountain",
    "highlights": [
      "Explore Rp 75.000",
      "Natlan 5.5",
      "Quest + Explore"
    ]
  },
  {
    "name": "Temple of Space",
    "subtitle": "Nod-Krai Area",
    "image": "assets/regions/temple-of-space.webp",
    "emblem": "assets/emblems/temple-of-space-emblem.webp",
    "accent": "#9dc0ff",
    "target": "temple-of-space-services",
    "query": "Temple of Space",
    "highlights": [
      "Explore Rp 60.000",
      "Quest Rp 70.000",
      "Nod-Krai area"
    ]
  },
  {
    "name": "Nod-Krai",
    "subtitle": "Moonlit Frontier",
    "image": "assets/regions/nod-krai.webp",
    "emblem": "assets/emblems/nod-krai-emblem.webp",
    "accent": "#aab8ff",
    "target": "nodkrai-services",
    "query": "Nodkrai",
    "highlights": [
      "6.0 Rp 300.000",
      "6.3 Rp 275.000",
      "Quest + Explore"
    ]
  }
];

const faqs = [
  {
    question: "Is account login required?",
    answer: "Yes.",
  },
  {
    question: "How long does completion take?",
    answer: "Depends on service complexity.",
  },
  {
    question: "Is account safety guaranteed?",
    answer: "Customer privacy and account security are prioritized.",
  },
];

const testimonials = [
  {
    name: "AetherMain",
    role: "Exploration order",
    review:
      "Progress exploration rapi, harga jelas, dan update order gampang dipantau lewat Discord.",
  },
  {
    name: "LumineSky",
    role: "VIP Whaler",
    review:
      "Maintenance bulanan sangat membantu. Daily, resin, weekly boss, dan event aman semua.",
  },
  {
    name: "RaidenCore",
    role: "Endgame clear",
    review:
      "Spiral Abyss selesai sesuai jadwal. Komunikasi jelas sebelum akun mulai dikerjakan.",
  },
  {
    name: "HydroTraveler",
    role: "Fontaine package",
    review:
      "Fontaine quest dan exploration dibereskan sesuai request. Worth it untuk yang sibuk.",
  },
  {
    name: "KazuRoute",
    role: "Resource farming",
    review:
      "Material farming cepat dan jumlah item sesuai pesanan. Format order-nya simpel.",
  },
  {
    name: "NaraBranch",
    role: "Sumeru quest",
    review:
      "Paket Sumeru forest membantu banget untuk quest panjang dan eksplorasi yang tertinggal.",
  },
];

const state = {
  activeCategory: "all",
  query: "",
  selectedService: null,
};

const elements = {
  filterRow: document.querySelector("#filterRow"),
  catalogList: document.querySelector("#catalogList"),
  serviceSearch: document.querySelector("#serviceSearch"),
  resultCount: document.querySelector("#resultCount"),
  regionGrid: document.querySelector("#regionGrid"),
  endgameGrid: document.querySelector("#endgameGrid"),
  faqList: document.querySelector("#faqList"),
  testimonialGrid: document.querySelector("#testimonialGrid"),
  menuToggle: document.querySelector("#menuToggle"),
  navMenu: document.querySelector("#navMenu"),
  backToTop: document.querySelector("#backToTop"),
  selectedService: document.querySelector("#selectedService"),
  orderMessage: document.querySelector("#orderMessage"),
  copyOrderButton: document.querySelector("#copyOrderButton"),
  copyStatus: document.querySelector("#copyStatus"),
  discordUsername: document.querySelector("#discordUsername"),
  discordInvite: document.querySelector("#discordInvite"),
  discordLink: document.querySelector("#discordLink"),
};

let revealObserver;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function getTotalServices() {
  return categories.reduce((total, category) => total + category.services.length, 0);
}

function getServiceKey(categoryId, serviceId) {
  return `${categoryId}::${serviceId}`;
}

function findService(categoryId, serviceId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category) return null;
  const service = category.services.find((item) => item.id === serviceId);
  if (!service) return null;
  return { category, service };
}

function serviceMatches(category, service) {
  const text = [
    category.name,
    category.short,
    service.name,
    service.description,
    service.price,
    ...(service.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  const matchesQuery = !state.query || text.includes(state.query);
  const matchesCategory = state.activeCategory === "all" || state.activeCategory === category.id;
  return matchesQuery && matchesCategory;
}

function renderFilters() {
  const filters = [
    { id: "all", label: "All Services" },
    ...categories.map((category) => ({ id: category.id, label: category.short })),
  ];

  elements.filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button
          class="filter-button${filter.id === state.activeCategory ? " is-active" : ""}"
          type="button"
          data-filter="${escapeHtml(filter.id)}"
        >
          ${escapeHtml(filter.label)}
        </button>
      `,
    )
    .join("");
}

function renderRegionCards() {
  elements.regionGrid.innerHTML = regionCards
    .map(
      (region) => `
        <button
          class="region-card reveal"
          type="button"
          style="--accent: ${region.accent}"
          data-region-target="${escapeHtml(region.target)}"
          data-region-query="${escapeHtml(region.query || "")}"
        >
          <span class="region-image">
            <img src="${escapeHtml(region.image)}" alt="" loading="lazy" />
          </span>
          <span class="region-content">
            <span class="region-symbol" aria-hidden="true">
              <img src="${escapeHtml(region.emblem)}" alt="" />
            </span>
            <strong>${escapeHtml(region.name)}</strong>
            <span>${escapeHtml(region.subtitle)}</span>
            <span class="region-highlights">
              ${region.highlights.map((highlight) => `<small>${escapeHtml(highlight)}</small>`).join("")}
            </span>
            <em>View Services</em>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderCatalog() {
  let visibleServices = 0;

  const renderedSections = categories
    .map((category) => {
      const services = category.services.filter((service) => serviceMatches(category, service));
      if (!services.length) return "";
      visibleServices += services.length;

      return `
        <article class="category-section reveal" style="--accent: ${category.accent}" id="${category.id}">
          <div class="category-header">
            <div>
              <h3>${escapeHtml(category.name)}</h3>
              <p>${escapeHtml(category.summary)}</p>
            </div>
            <span class="category-badge">${services.length} services</span>
          </div>
          <div class="service-grid">
            ${services
              .map(
                (service) => `
                  <article class="service-card">
                    <h4>${escapeHtml(service.name)}</h4>
                    <p>${escapeHtml(service.description)}</p>
                    ${
                      service.tags && service.tags.length
                        ? `<div class="service-tags">${service.tags
                            .slice(0, 3)
                            .map((tag) => `<span>${escapeHtml(tag)}</span>`)
                            .join("")}</div>`
                        : ""
                    }
                    <div class="service-bottom">
                      <span class="price">${escapeHtml(service.price)}</span>
                      <button
                        class="order-button"
                        type="button"
                        data-order="${escapeHtml(getServiceKey(category.id, service.id))}"
                      >
                        Order
                      </button>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");

  elements.catalogList.innerHTML =
    renderedSections ||
    `<div class="empty-state reveal">
      <strong>No services found.</strong>
      <span>Try another search or category.</span>
      <button class="filter-button" type="button" data-clear-search>Clear search</button>
    </div>`;

  const total = getTotalServices();
  elements.resultCount.textContent = `Showing ${visibleServices} of ${total} services`;
  observeReveals(elements.catalogList);
}

function renderEndgame() {
  elements.endgameGrid.innerHTML = priceList.endgame
    .map((group) => {
      const category = categories.find((item) => item.id === "endgame-services");
      const serviceRows = group.services
        .map((service) => {
          const serviceId = `endgame-${slug(group.category)}-${slug(service.name)}`;
          return `
            <li>
              <span>${escapeHtml(service.name)}</span>
              <strong>${escapeHtml(rupiah(service.price))}</strong>
              <button class="order-button" type="button" data-order="${escapeHtml(getServiceKey(category.id, serviceId))}">
                Order
              </button>
            </li>
          `;
        })
        .join("");

      return `
        <article class="endgame-card reveal" style="--accent: ${category.accent}">
          <span>Endgame</span>
          <h3>${escapeHtml(group.category)}</h3>
          <p>VIP sesuai jadwal, VIP di luar jadwal, dan VVIP / Express.</p>
          <ul class="tier-list">${serviceRows}</ul>
        </article>
      `;
    })
    .join("");
}

function renderFaq() {
  elements.faqList.innerHTML = faqs
    .map(
      (faq, index) => `
        <article class="faq-item${index === 0 ? " is-open" : ""}">
          <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
            <span>Q: ${escapeHtml(faq.question)}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 15.4-6.3-6.3 1.4-1.4 4.9 4.9 4.9-4.9 1.4 1.4-6.3 6.3Z" />
            </svg>
          </button>
          <div class="faq-answer">
            <div>
              <p>A: ${escapeHtml(faq.answer)}</p>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTestimonials() {
  elements.testimonialGrid.innerHTML = testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card reveal">
          <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote>${escapeHtml(testimonial.review)}</blockquote>
          <div class="reviewer">
            <span class="reviewer-mark" aria-hidden="true">${escapeHtml(testimonial.name.slice(0, 1))}</span>
            <div>
              <strong>${escapeHtml(testimonial.name)}</strong>
              <span>${escapeHtml(testimonial.role)}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function getDefaultOrderMessage() {
  return [
    "Halo Hamikho, saya mau order Genshin Impact service.",
    "",
    "Service:",
    "Server:",
    "UID:",
    "Jadwal pengerjaan:",
    "Catatan:",
  ].join("\n");
}

function getOrderMessage(category, service) {
  return [
    "Halo Hamikho, saya mau order Genshin Impact service.",
    "",
    `Service: ${service.name}`,
    `Category: ${category.name}`,
    `Harga: ${service.price}`,
    "Server:",
    "UID:",
    "Jadwal pengerjaan:",
    "Catatan:",
  ].join("\n");
}

function selectService(category, service) {
  state.selectedService = { category, service };
  elements.selectedService.innerHTML = `
    <span>${escapeHtml(category.name)}</span>
    <strong>${escapeHtml(service.name)} - ${escapeHtml(service.price)}</strong>
  `;
  elements.orderMessage.value = getOrderMessage(category, service);
  elements.copyStatus.textContent = "";
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToServices() {
  document.querySelector("#services").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(helper);
  return copied;
}

async function copyOrderMessage() {
  const value = elements.orderMessage.value.trim();
  if (!value) return;

  try {
    await copyText(value);
    elements.copyStatus.textContent = "Order message copied.";
  } catch {
    elements.copyStatus.textContent = "Copy failed. Select the message manually.";
  }
}

async function copyContactValue(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  try {
    await copyText(target.textContent.trim());
    elements.copyStatus.textContent = "Discord contact copied.";
  } catch {
    elements.copyStatus.textContent = "Copy failed. Select the contact manually.";
  }
}

function setDiscordContact() {
  elements.discordUsername.textContent = DISCORD.username;
  elements.discordInvite.textContent = DISCORD.invite;
  elements.discordLink.href = DISCORD.invite;
  elements.discordLink.target = "_blank";
  elements.discordLink.rel = "noopener noreferrer";
}

function observeReveals(root = document) {
  if (!revealObserver) return;
  root.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 80px 0px" },
  );

  observeReveals(document);
}

function closeMobileMenu() {
  elements.navMenu.classList.remove("is-open");
  elements.menuToggle.classList.remove("is-open");
  elements.menuToggle.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.navMenu.classList.toggle("is-open");
    elements.menuToggle.classList.toggle("is-open", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  elements.navMenu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

function setupCatalogEvents() {
  elements.filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.activeCategory = button.dataset.filter;
    renderFilters();
    renderCatalog();
    scrollToServices();
  });

  elements.serviceSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderCatalog();
  });

  document.addEventListener("click", (event) => {
    const regionCard = event.target.closest("[data-region-target]");
    if (regionCard) {
      state.activeCategory = regionCard.dataset.regionTarget || "all";
      state.query = (regionCard.dataset.regionQuery || "").trim().toLowerCase();
      elements.serviceSearch.value = regionCard.dataset.regionQuery || "";
      renderFilters();
      renderCatalog();
      scrollToServices();
      return;
    }

    const clearSearchButton = event.target.closest("[data-clear-search]");
    if (clearSearchButton) {
      state.query = "";
      elements.serviceSearch.value = "";
      renderCatalog();
      return;
    }

    const orderButton = event.target.closest("[data-order]");
    if (!orderButton) return;
    const [categoryId, serviceId] = orderButton.dataset.order.split("::");
    const match = findService(categoryId, serviceId);
    if (!match) return;
    selectService(match.category, match.service);
  });
}

function setupFaqEvents() {
  elements.faqList.addEventListener("click", (event) => {
    const question = event.target.closest(".faq-question");
    if (!question) return;
    const item = question.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    question.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupFloatingButtons() {
  window.addEventListener(
    "scroll",
    () => {
      elements.backToTop.classList.toggle("is-visible", window.scrollY > 620);
    },
    { passive: true },
  );

  elements.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupCopyEvents() {
  elements.copyOrderButton.addEventListener("click", copyOrderMessage);

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-target]");
    if (!copyButton) return;
    copyContactValue(copyButton.dataset.copyTarget);
  });
}

function init() {
  setDiscordContact();
  elements.orderMessage.value = getDefaultOrderMessage();
  setupRevealObserver();
  setupNavigation();
  setupCatalogEvents();
  setupFaqEvents();
  setupFloatingButtons();
  setupCopyEvents();
  renderFilters();
  renderRegionCards();
  renderCatalog();
  renderEndgame();
  renderFaq();
  renderTestimonials();
  observeReveals(document);
}

document.addEventListener("DOMContentLoaded", init);
