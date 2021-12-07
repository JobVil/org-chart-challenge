export const DEFAULT_EMPLOYEES_DATA = [
  {
    id: "aef8d987-1336-4c4b-a009-3c3c393ec8c2",
    firstName: "Lillie",
    lastName: "Hampton",
    company: "MidFirst Bank",
    email: "lillie.hampton@midfirstbank.com",
    phone: "+1 (963) 541-2442",
    address: "922 Harkness Avenue, Edmund, Indiana, 12399",
    manager: null
  },
  {
    id: "7bd467e7-397e-4886-93e7-f706fea3b00a",
    firstName: "Jean",
    lastName: "Stanley",
    company: "MidFirst Bank",
    email: "jean.stanley@midfirstbank.com",
    phone: "+1 (960) 478-2938",
    address: "520 Ridgecrest Terrace, Diaperville, Massachusetts, 27260",
    manager: "aef8d987-1336-4c4b-a009-3c3c393ec8c2" // Lillie Hampton
  },
  {
    id: "90669cb5-a9f1-4b1c-b3be-9481b4e8fc5c",
    firstName: "Sheree",
    lastName: "Smith",
    company: "MidFirst Bank",
    email: "sheree.smith@midfirstbank.com",
    phone: "+1 (863) 559-3558",
    address: "321 Delevan Street, Coultervillle, American Samoa, 88422",
    manager: "7bd467e7-397e-4886-93e7-f706fea3b00a", // Jean Stanley
  },
  {
    id: "efafaaf7-a7a1-4ab7-a5f9-6d1b4e34398e",
    firstName: "Cannon",
    lastName: "Tanner",
    company: "MidFirst Bank",
    email: "cannon.tanner@midfirstbank.com",
    phone: "+1 (824) 527-3941",
    address: "935 Ovington Court, Walland, Ohio, 63225",
    manager: "7bd467e7-397e-4886-93e7-f706fea3b00a", // Jean Stanley
  },
  {
    id: "60770474-fbdf-4629-bf11-c5d349ab533b",
    firstName: "Sawyer",
    lastName: "Cote",
    company: "MidFirst Bank",
    email: "sawyer.cote@midfirstbank.com",
    phone: "+1 (957) 457-3749",
    address: "677 Canarsie Road, Wikieup, Wyoming, 77477",
    manager: "7bd467e7-397e-4886-93e7-f706fea3b00a", // Jean Stanley
  },
  {
    id: "b245112d-280b-4ced-8bbe-925a43dd51fc",
    firstName: "Wood",
    lastName: "Harrington",
    company: "MidFirst Bank",
    email: "wood.harrington@midfirstbank.com",
    phone: "+1 (838) 473-3909",
    address: "511 Foster Avenue, Gracey, Tennessee, 35617",
    manager: "aef8d987-1336-4c4b-a009-3c3c393ec8c2" // Lillie Hampton
  },
  {
    id: "bc8d58af-76c9-4077-934a-259bd04ef005",
    firstName: "Hill",
    lastName: "Norman",
    company: "MidFirst Bank",
    email: "hill.norman@midfirstbank.com",
    phone: "+1 (959) 515-3033",
    address: "877 Harrison Avenue, Grantville, South Carolina, 20774",
    manager: "b245112d-280b-4ced-8bbe-925a43dd51fc" // Wood Harrington
  },
  {
    id: "7340dba3-3420-48b1-a8e9-cb2ecdb946fd",
    firstName: "Lucinda",
    lastName: "Montoya",
    company: "MidFirst Bank",
    email: "lucinda.montoya@midfirstbank.com",
    phone: "+1 (807) 562-2477",
    address: "413 Norwood Avenue, Brule, Arizona, 71024",
    manager: "b245112d-280b-4ced-8bbe-925a43dd51fc" // Wood Harrington
  },
  {
    id: "27b9f77c-ec75-461d-815c-72c84199d843",
    firstName: "Dollie",
    lastName: "Witt",
    company: "MidFirst Bank",
    email: "dollie.witt@midfirstbank.com",
    phone: "+1 (871) 529-3086",
    address: "716 Lewis Place, Ironton, Idaho, 21424",
    manager: "b245112d-280b-4ced-8bbe-925a43dd51fc" // Wood Harrington
  },
  {
    id: "d58c94c0-d510-4e06-a104-681f6b518d1c",
    firstName: "Janna",
    lastName: "Clemons",
    company: "MidFirst Bank",
    email: "janna.clemons@midfirstbank.com",
    phone: "+1 (864) 422-2567",
    address: "338 Alton Place, Shasta, Montana, 75588",
    manager: "b245112d-280b-4ced-8bbe-925a43dd51fc" // Wood Harrington
  },
  {
    id: "9081da86-c9f2-419e-957f-d8a45b0a3eda",
    firstName: "Mcclure",
    lastName: "Robbins",
    company: "MidFirst Bank",
    email: "mcclure.robbins@midfirstbank.com",
    phone: "+1 (894) 437-2865",
    address: "628 Lorimer Street, Alfarata, North Dakota, 82635",
    manager: "aef8d987-1336-4c4b-a009-3c3c393ec8c2" // Lillie Hampton
  },
  {
    id: "d032ae2d-e762-46e3-b46e-8aca2b76e371",
    firstName: "Schneider",
    lastName: "Santiago",
    company: "MidFirst Bank",
    email: "schneider.santiago@midfirstbank.com",
    phone: "+1 (862) 457-3163",
    address: "904 Halleck Street, Foscoe, South Dakota, 95995",
    manager: "9081da86-c9f2-419e-957f-d8a45b0a3eda" //Mcclure Robbins
  },
  {
    id: "9194f471-07b8-479d-8bc7-8e027ccd85bf",
    firstName: "Rojas",
    lastName: "Harper",
    company: "MidFirst Bank",
    email: "rojas.harper@midfirstbank.com",
    phone: "+1 (912) 422-3529",
    address: "778 Crystal Street, Tecolotito, Hawaii, 87879",
    manager: "9081da86-c9f2-419e-957f-d8a45b0a3eda" //Mcclure Robbins
  },
  {
    id: "4b9cad53-b69d-493e-a710-f876362bec9e",
    firstName: "Garrison",
    lastName: "Conway",
    company: "MidFirst Bank",
    email: "garrison.conway@midfirstbank.com",
    phone: "+1 (958) 536-3915",
    address: "258 Miami Court, Harrodsburg, Louisiana, 72247",
    manager: "9081da86-c9f2-419e-957f-d8a45b0a3eda" //Mcclure Robbins
  },
  {
    id: "8dc4879a-850f-4b03-9afd-e85a54e0b185",
    firstName: "Lucia",
    lastName: "Thompson",
    company: "MidFirst Bank",
    email: "lucia.thompson@midfirstbank.com",
    phone: "+1 (848) 567-3555",
    address: "391 Hinsdale Street, Matthews, Palau, 96204",
    manager: "4b9cad53-b69d-493e-a710-f876362bec9e" // Garrison Conway
  },
  {
    id: "321a0e64-20b8-4e70-b80e-111c533d894e",
    firstName: "Bates",
    lastName: "Sloan",
    company: "MidFirst Bank",
    email: "bates.sloan@midfirstbank.com",
    phone: "+1 (897) 596-2421",
    address: "524 Ocean Avenue, Vivian, Federated States Of Micronesia, 93675",
    manager: "4b9cad53-b69d-493e-a710-f876362bec9e" // Garrison Conway
  },
  {
    id: "0dad9d4d-826c-4a09-84eb-85fa2646b560",
    firstName: "Katie",
    lastName: "Baldwin",
    company: "MidFirst Bank",
    email: "katie.baldwin@midfirstbank.com",
    phone: "+1 (900) 551-2712",
    address: "648 Hamilton Avenue, Dennard, Pennsylvania, 50898",
    manager: "4b9cad53-b69d-493e-a710-f876362bec9e" // Garrison Conway
  },
  {
    id: "3ebcccaa-c252-42a2-92d6-55613c1df623",
    firstName: "Duke",
    lastName: "Shaffer",
    company: "MidFirst Bank",
    email: "duke.shaffer@midfirstbank.com",
    phone: "+1 (984) 526-2112",
    address: "856 River Street, Cataract, Washington, 33898",
    manager: "0dad9d4d-826c-4a09-84eb-85fa2646b560" // Katie Baldwin
  },
  {
    id: "182a0417-1755-42db-a3c6-827308759d99",
    firstName: "Marion",
    lastName: "Mcgee",
    company: "MidFirst Bank",
    email: "marion.mcgee@midfirstbank.com",
    phone: "+1 (911) 456-3972",
    address: "338 Reeve Place, Soham, Kansas, 17895",
    manager: "9081da86-c9f2-419e-957f-d8a45b0a3eda" //Mcclure Robbins
  },
  {
    id: "a078d2f0-e360-421d-a9ab-35710f52a1ca",
    firstName: "Beverly",
    lastName: "Chaney",
    company: "MidFirst Bank",
    email: "beverly.chaney@midfirstbank.com",
    phone: "+1 (953) 529-2166",
    address: "892 Dorchester Road, Lacomb, Maine, 48366",
    manager: "9081da86-c9f2-419e-957f-d8a45b0a3eda" //Mcclure Robbins
  },
  {
    id: "19dd4f91-064f-4e40-a48a-ff0fb2093216",
    firstName: "Monique",
    lastName: "Figueroa",
    company: "MidFirst Bank",
    email: "monique.figueroa@midfirstbank.com",
    phone: "+1 (943) 494-3048",
    address: "955 Dikeman Street, Townsend, Virginia, 26258",
    manager: "aef8d987-1336-4c4b-a009-3c3c393ec8c2" // Lillie Hampton
  },
  {
    id: "c0c3be6f-b4aa-4a22-859d-6d63c9186794",
    firstName: "Kidd",
    lastName: "Simmons",
    company: "MidFirst Bank",
    email: "kidd.simmons@midfirstbank.com",
    phone: "+1 (814) 487-2984",
    address: "559 Hendrix Street, Hartsville/Hartley, Oklahoma, 13385",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "29714eb3-9a53-482c-9d3d-5820dd4f05b2",
    firstName: "Henrietta",
    lastName: "Garner",
    company: "MidFirst Bank",
    email: "henrietta.garner@midfirstbank.com",
    phone: "+1 (823) 496-3103",
    address: "643 Hill Street, Venice, Virgin Islands, 27110",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "de65a9e7-2469-4fa6-b5e3-0b87c21647d8",
    firstName: "Rosetta",
    lastName: "Case",
    company: "MidFirst Bank",
    email: "rosetta.case@midfirstbank.com",
    phone: "+1 (876) 520-2699",
    address: "945 Hornell Loop, Ilchester, Marshall Islands, 68442",
    manager: "29714eb3-9a53-482c-9d3d-5820dd4f05b2" // Henrietta Garner
  },
  {
    id: "49622f47-e819-452f-b5ca-b4fc58a8a7e4",
    firstName: "Juana",
    lastName: "Grant",
    company: "MidFirst Bank",
    email: "juana.grant@midfirstbank.com",
    phone: "+1 (836) 557-3284",
    address: "750 Ross Street, Taycheedah, New Mexico, 60268",
    manager: "29714eb3-9a53-482c-9d3d-5820dd4f05b2" // Henrietta Garner
  },
  {
    id: "18675424-449e-421c-863e-016a7a931abe",
    firstName: "Lottie",
    lastName: "Castillo",
    company: "MidFirst Bank",
    email: "lottie.castillo@midfirstbank.com",
    phone: "+1 (892) 426-3763",
    address: "310 Madoc Avenue, Moscow, Missouri, 59668",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "84a193f5-c8b0-4b52-89c1-860f2d46dca1",
    firstName: "Carey",
    lastName: "Hunter",
    company: "MidFirst Bank",
    email: "carey.hunter@midfirstbank.com",
    phone: "+1 (848) 414-2736",
    address: "822 Fleet Place, Dunbar, Guam, 87170",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "bdc81b8c-eb0d-4c42-9577-281d97ed2101",
    firstName: "Reyes",
    lastName: "Lara",
    company: "MidFirst Bank",
    email: "reyes.lara@midfirstbank.com",
    phone: "+1 (979) 494-2699",
    address: "630 Ridge Boulevard, Brenton, Kentucky, 79442",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "2c3d1c57-7d76-4c67-9ebc-7ae018c948fb",
    firstName: "Hughes",
    lastName: "Martin",
    company: "MidFirst Bank",
    email: "hughes.martin@midfirstbank.com",
    phone: "+1 (920) 572-2090",
    address: "239 Huntington Street, Rehrersburg, North Carolina, 17380",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "669c0af1-50fd-4158-b9e6-d0bfd69c5e2b",
    firstName: "Maritza",
    lastName: "Cooper",
    company: "MidFirst Bank",
    email: "maritza.cooper@midfirstbank.com",
    phone: "+1 (800) 573-3613",
    address: "355 Bryant Street, Thomasville, Illinois, 46309",
    manager: "19dd4f91-064f-4e40-a48a-ff0fb2093216" // Monique Figueroa
  },
  {
    id: "b2cca4e4-8e0d-4f4a-87bb-c81d29dac2d5",
    firstName: "Short",
    lastName: "Hartman",
    company: "MidFirst Bank",
    email: "short.hartman@midfirstbank.com",
    phone: "+1 (949) 481-3806",
    address: "334 Kenmore Terrace, Joes, Vermont, 12904",
    manager: "669c0af1-50fd-4158-b9e6-d0bfd69c5e2b" // Maritza Cooper
  },
  {
    id: "f464bbe5-3052-4899-8db2-0d85898438ac",
    firstName: "Vickie",
    lastName: "Cleveland",
    company: "MidFirst Bank",
    email: "vickie.cleveland@midfirstbank.com",
    phone: "+1 (939) 464-3245",
    address: "512 Perry Terrace, Forbestown, Colorado, 36617",
    manager: "669c0af1-50fd-4158-b9e6-d0bfd69c5e2b" // Maritza Cooper
  },
  {
    id: "b7e9ff1e-0719-468c-8861-9a3a035bc950",
    firstName: "Mathews",
    lastName: "Vasquez",
    company: "MidFirst Bank",
    email: "mathews.vasquez@midfirstbank.com",
    phone: "+1 (971) 485-2649",
    address: "381 Morton Street, Caroline, Wisconsin, 19267",
    manager: "669c0af1-50fd-4158-b9e6-d0bfd69c5e2b" // Maritza Cooper
  },
  {
    id: "b20a1d4e-c3ec-4971-9805-1aa8c22ecd61",
    firstName: "Beach",
    lastName: "Lamb",
    company: "MidFirst Bank",
    email: "beach.lamb@midfirstbank.com",
    phone: "+1 (862) 457-2454",
    address: "171 Veranda Place, Summertown, Northern Mariana Islands, 29791",
    manager: "b7e9ff1e-0719-468c-8861-9a3a035bc950" // Mathews Vasquez
  },
];

export default DEFAULT_EMPLOYEES_DATA;