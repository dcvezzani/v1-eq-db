
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ward_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('ward_members').insert([
  {
    "headOfHouse_surname": "Serrano",
    "headOfHouse_directoryName": "Gallagher",
    "headOfHouse_preferredName": "Serrano, Gallagher",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 52716486,
    "spouse_surname": "Serrano",
    "spouse_directoryName": "Beatrice",
    "spouse_preferredName": "Serrano, Beatrice",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 45595599,
    "coupleName": "Serrano, Gallagher & Beatrice",
    "phone": "(815) 446-3050",
    "email": "gallagher.serrano@fiberox.info",
    "address": "387 Atkins Avenue, Crayne, Puerto Rico, 8542",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 52716486,
    "householdName": "Serrano",
    "numberOfChildren": 5
  },
  {
    "headOfHouse_surname": "Sharp",
    "headOfHouse_directoryName": "Villarreal",
    "headOfHouse_preferredName": "Sharp, Villarreal",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 62932097,
    "spouse_surname": "Sharp",
    "spouse_directoryName": "Britney",
    "spouse_preferredName": "Sharp, Britney",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 64397051,
    "coupleName": "Sharp, Villarreal & Britney",
    "phone": "(810) 408-3980",
    "email": "villarreal.sharp@genmom.net",
    "address": "520 Albee Square, Siglerville, Kansas, 4309",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 62932097,
    "householdName": "Sharp",
    "numberOfChildren": 5
  },
  {
    "headOfHouse_surname": "Castro",
    "headOfHouse_directoryName": "Marks",
    "headOfHouse_preferredName": "Castro, Marks",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 56309002,
    "spouse_surname": "Castro",
    "spouse_directoryName": "Hannah",
    "spouse_preferredName": "Castro, Hannah",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 22611372,
    "coupleName": "Castro, Marks & Hannah",
    "phone": "(838) 412-2620",
    "email": "marks.castro@portico.com",
    "address": "378 Wythe Avenue, Chapin, New Mexico, 1647",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 56309002,
    "householdName": "Castro",
    "numberOfChildren": 8
  },
  {
    "headOfHouse_surname": "Tyler",
    "headOfHouse_directoryName": "Webb",
    "headOfHouse_preferredName": "Tyler, Webb",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 75325258,
    "spouse_surname": "Tyler",
    "spouse_directoryName": "Alana",
    "spouse_preferredName": "Tyler, Alana",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 43908693,
    "coupleName": "Tyler, Webb & Alana",
    "phone": "(806) 509-3424",
    "email": "webb.tyler@utarian.biz",
    "address": "560 Verona Place, Mooresburg, Arizona, 6782",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 75325258,
    "householdName": "Tyler",
    "numberOfChildren": 2
  },
  {
    "headOfHouse_surname": "Watkins",
    "headOfHouse_directoryName": "Sanchez",
    "headOfHouse_preferredName": "Watkins, Sanchez",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 29580285,
    "spouse_surname": "Watkins",
    "spouse_directoryName": "Charlotte",
    "spouse_preferredName": "Watkins, Charlotte",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 83773224,
    "coupleName": "Watkins, Sanchez & Charlotte",
    "phone": "(998) 577-3883",
    "email": "sanchez.watkins@suremax.ca",
    "address": "365 Evans Street, Vandiver, Pennsylvania, 7287",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 29580285,
    "householdName": "Watkins",
    "numberOfChildren": 2
  },
  {
    "headOfHouse_surname": "Sharpe",
    "headOfHouse_directoryName": "Lester",
    "headOfHouse_preferredName": "Sharpe, Lester",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 26710407,
    "spouse_surname": "Sharpe",
    "spouse_directoryName": "Milagros",
    "spouse_preferredName": "Sharpe, Milagros",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 58373913,
    "coupleName": "Sharpe, Lester & Milagros",
    "phone": "(891) 417-2530",
    "email": "lester.sharpe@digirang.org",
    "address": "886 Lorraine Street, Garfield, Marshall Islands, 2863",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 26710407,
    "householdName": "Sharpe",
    "numberOfChildren": 4
  },
  {
    "headOfHouse_surname": "Buckley",
    "headOfHouse_directoryName": "Harrell",
    "headOfHouse_preferredName": "Buckley, Harrell",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 63016712,
    "spouse_surname": "Buckley",
    "spouse_directoryName": "Eloise",
    "spouse_preferredName": "Buckley, Eloise",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 53278194,
    "coupleName": "Buckley, Harrell & Eloise",
    "phone": "(972) 423-2330",
    "email": "harrell.buckley@canopoly.us",
    "address": "811 Graham Avenue, Lacomb, Federated States Of Micronesia, 6563",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 63016712,
    "householdName": "Buckley",
    "numberOfChildren": 0
  },
  {
    "headOfHouse_surname": "Patton",
    "headOfHouse_directoryName": "Robertson",
    "headOfHouse_preferredName": "Patton, Robertson",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 84137256,
    "spouse_surname": "Patton",
    "spouse_directoryName": "Johanna",
    "spouse_preferredName": "Patton, Johanna",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 25748160,
    "coupleName": "Patton, Robertson & Johanna",
    "phone": "(806) 420-2597",
    "email": "robertson.patton@bullzone.me",
    "address": "480 Elm Avenue, Albany, Rhode Island, 6817",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 84137256,
    "householdName": "Patton",
    "numberOfChildren": 3
  },
  {
    "headOfHouse_surname": "Baker",
    "headOfHouse_directoryName": "Wiggins",
    "headOfHouse_preferredName": "Baker, Wiggins",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 85056044,
    "spouse_surname": "Baker",
    "spouse_directoryName": "Sybil",
    "spouse_preferredName": "Baker, Sybil",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 59644917,
    "coupleName": "Baker, Wiggins & Sybil",
    "phone": "(822) 488-2743",
    "email": "wiggins.baker@bluegrain.co.uk",
    "address": "604 Bills Place, Cutter, Iowa, 9049",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 85056044,
    "householdName": "Baker",
    "numberOfChildren": 8
  }
]);
    });
};

/*

https://next.json-generator.com

{
headOfHouse_surname: "{{surname()}}", 
headOfHouse_directoryName: "{{firstName('male')}}", 
headOfHouse_preferredName(tags) { return `${this.headOfHouse_surname}, ${this.headOfHouse_directoryName}`; }, 
headOfHouse_gender: "MALE", 
headOfHouse_individualId: "{{integer(20000000, 90000000)}}", 
spouse_surname(tags) { return `${this.headOfHouse_surname}`; }, 
spouse_directoryName: "{{firstName('female')}}", 
spouse_preferredName(tags) { return `${this.spouse_surname}, ${this.spouse_directoryName}`; }, 
spouse_gender: "FEMALE", 
spouse_individualId: "{{integer(20000000, 90000000)}}", 
coupleName(tags) { return `${this.headOfHouse_surname}, ${this.headOfHouse_directoryName} & ${this.spouse_directoryName}`; }, 
phone: "{{phone()}}", 
email(tags) {
  return `${this.headOfHouse_directoryName}.${this.headOfHouse_surname}@${tags.company().toUpperCase()}${tags.domainZone()}`.toLowerCase();
},
address: "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}", 
isProfilePrivate: "{{random(0, 1)}}", 
unitNo: 47170, 
headOfHouseIndividualId(tags) { return parseInt(`${this.headOfHouse_individualId}`); }, 
householdName(tags) { return `${this.headOfHouse_surname}`; }, 
numberOfChildren: "{{integer(0, 8)}}", 
}


[
  {
    "headOfHouse_surname": "Serrano",
    "headOfHouse_directoryName": "Gallagher",
    "headOfHouse_preferredName": "Serrano, Gallagher",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 52716486,
    "spouse_surname": "Serrano",
    "spouse_directoryName": "Beatrice",
    "spouse_preferredName": "Serrano, Beatrice",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 45595599,
    "coupleName": "Serrano, Gallagher & Beatrice",
    "phone": "(815) 446-3050",
    "email": "gallagher.serrano@fiberox.info",
    "address": "387 Atkins Avenue, Crayne, Puerto Rico, 8542",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 52716486,
    "householdName": "Serrano",
    "numberOfChildren": 5
  },
  {
    "headOfHouse_surname": "Sharp",
    "headOfHouse_directoryName": "Villarreal",
    "headOfHouse_preferredName": "Sharp, Villarreal",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 62932097,
    "spouse_surname": "Sharp",
    "spouse_directoryName": "Britney",
    "spouse_preferredName": "Sharp, Britney",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 64397051,
    "coupleName": "Sharp, Villarreal & Britney",
    "phone": "(810) 408-3980",
    "email": "villarreal.sharp@genmom.net",
    "address": "520 Albee Square, Siglerville, Kansas, 4309",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 62932097,
    "householdName": "Sharp",
    "numberOfChildren": 5
  },
  {
    "headOfHouse_surname": "Castro",
    "headOfHouse_directoryName": "Marks",
    "headOfHouse_preferredName": "Castro, Marks",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 56309002,
    "spouse_surname": "Castro",
    "spouse_directoryName": "Hannah",
    "spouse_preferredName": "Castro, Hannah",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 22611372,
    "coupleName": "Castro, Marks & Hannah",
    "phone": "(838) 412-2620",
    "email": "marks.castro@portico.com",
    "address": "378 Wythe Avenue, Chapin, New Mexico, 1647",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 56309002,
    "householdName": "Castro",
    "numberOfChildren": 8
  },
  {
    "headOfHouse_surname": "Tyler",
    "headOfHouse_directoryName": "Webb",
    "headOfHouse_preferredName": "Tyler, Webb",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 75325258,
    "spouse_surname": "Tyler",
    "spouse_directoryName": "Alana",
    "spouse_preferredName": "Tyler, Alana",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 43908693,
    "coupleName": "Tyler, Webb & Alana",
    "phone": "(806) 509-3424",
    "email": "webb.tyler@utarian.biz",
    "address": "560 Verona Place, Mooresburg, Arizona, 6782",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 75325258,
    "householdName": "Tyler",
    "numberOfChildren": 2
  },
  {
    "headOfHouse_surname": "Watkins",
    "headOfHouse_directoryName": "Sanchez",
    "headOfHouse_preferredName": "Watkins, Sanchez",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 29580285,
    "spouse_surname": "Watkins",
    "spouse_directoryName": "Charlotte",
    "spouse_preferredName": "Watkins, Charlotte",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 83773224,
    "coupleName": "Watkins, Sanchez & Charlotte",
    "phone": "(998) 577-3883",
    "email": "sanchez.watkins@suremax.ca",
    "address": "365 Evans Street, Vandiver, Pennsylvania, 7287",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 29580285,
    "householdName": "Watkins",
    "numberOfChildren": 2
  },
  {
    "headOfHouse_surname": "Sharpe",
    "headOfHouse_directoryName": "Lester",
    "headOfHouse_preferredName": "Sharpe, Lester",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 26710407,
    "spouse_surname": "Sharpe",
    "spouse_directoryName": "Milagros",
    "spouse_preferredName": "Sharpe, Milagros",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 58373913,
    "coupleName": "Sharpe, Lester & Milagros",
    "phone": "(891) 417-2530",
    "email": "lester.sharpe@digirang.org",
    "address": "886 Lorraine Street, Garfield, Marshall Islands, 2863",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 26710407,
    "householdName": "Sharpe",
    "numberOfChildren": 4
  },
  {
    "headOfHouse_surname": "Buckley",
    "headOfHouse_directoryName": "Harrell",
    "headOfHouse_preferredName": "Buckley, Harrell",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 63016712,
    "spouse_surname": "Buckley",
    "spouse_directoryName": "Eloise",
    "spouse_preferredName": "Buckley, Eloise",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 53278194,
    "coupleName": "Buckley, Harrell & Eloise",
    "phone": "(972) 423-2330",
    "email": "harrell.buckley@canopoly.us",
    "address": "811 Graham Avenue, Lacomb, Federated States Of Micronesia, 6563",
    "isProfilePrivate": 0,
    "unitNo": 47170,
    "headOfHouseIndividualId": 63016712,
    "householdName": "Buckley",
    "numberOfChildren": 0
  },
  {
    "headOfHouse_surname": "Patton",
    "headOfHouse_directoryName": "Robertson",
    "headOfHouse_preferredName": "Patton, Robertson",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 84137256,
    "spouse_surname": "Patton",
    "spouse_directoryName": "Johanna",
    "spouse_preferredName": "Patton, Johanna",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 25748160,
    "coupleName": "Patton, Robertson & Johanna",
    "phone": "(806) 420-2597",
    "email": "robertson.patton@bullzone.me",
    "address": "480 Elm Avenue, Albany, Rhode Island, 6817",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 84137256,
    "householdName": "Patton",
    "numberOfChildren": 3
  },
  {
    "headOfHouse_surname": "Baker",
    "headOfHouse_directoryName": "Wiggins",
    "headOfHouse_preferredName": "Baker, Wiggins",
    "headOfHouse_gender": "MALE",
    "headOfHouse_individualId": 85056044,
    "spouse_surname": "Baker",
    "spouse_directoryName": "Sybil",
    "spouse_preferredName": "Baker, Sybil",
    "spouse_gender": "FEMALE",
    "spouse_individualId": 59644917,
    "coupleName": "Baker, Wiggins & Sybil",
    "phone": "(822) 488-2743",
    "email": "wiggins.baker@bluegrain.co.uk",
    "address": "604 Bills Place, Cutter, Iowa, 9049",
    "isProfilePrivate": 1,
    "unitNo": 47170,
    "headOfHouseIndividualId": 85056044,
    "householdName": "Baker",
    "numberOfChildren": 8
  }
]

 * */
