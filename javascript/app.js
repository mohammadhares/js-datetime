const timezones = [
    {
        "id": 1,
        "country": "Andorra",
        "timezone": "Europe/Andorra"
    },
    {
        "id": 2,
        "country": "UAE (Dubai)",
        "timezone": "Asia/Dubai"
    },
    {
        "id": 3,
        "country": "Afghanistan (Kabul)",
        "timezone": "Asia/Kabul"
    },
    {
        "id": 4,
        "country": "Albania (Tirane)",
        "timezone": "Europe/Tirane"
    },
    {
        "id": 5,
        "country": "Armenia (Yerevan)",
        "timezone": "Asia/Yerevan"
    },
    {
        "id": 6,
        "country": "Antarctica (Casey)",
        "timezone": "Antarctica/Casey"
    },
    {
        "id": 7,
        "country": "Antarctica (Davis)",
        "timezone": "Antarctica/Davis"
    },
    {
        "id": 8,
        "country": "Antarctica (DumontDUrville)",
        "timezone": "Antarctica/DumontDUrville"
    },
    {
        "id": 9,
        "country": "Antarctica (Mawson)",
        "timezone": "Antarctica/Mawson"
    },
    {
        "id": 10,
        "country": "Antarctica (Palmer)",
        "timezone": "Antarctica/Palmer"
    },
    {
        "id": 11,
        "country": "Antarctica (Rothera)",
        "timezone": "Antarctica/Rothera"
    },
    {
        "id": 12,
        "country": "Antarctica (Syowa)",
        "timezone": "Antarctica/Syowa"
    },
    {
        "id": 13,
        "country": "Antarctica (Troll)",
        "timezone": "Antarctica/Troll"
    },
    {
        "id": 14,
        "country": "Antarctica (Vostok)",
        "timezone": "Antarctica/Vostok"
    },
    {
        "id": 15,
        "country": "Argentina (Buenos Aires)",
        "timezone": "America/Argentina/Buenos_Aires"
    },
    {
        "id": 16,
        "country": "Argentina (Cordoba)",
        "timezone": "America/Argentina/Cordoba"
    },
    {
        "id": 17,
        "country": "Argentina (Salta)",
        "timezone": "America/Argentina/Salta"
    },
    {
        "id": 18,
        "country": "Argentina (Jujuy)",
        "timezone": "America/Argentina/Jujuy"
    },
    {
        "id": 19,
        "country": "Argentina (Tucuman)",
        "timezone": "America/Argentina/Tucuman"
    },
    {
        "id": 20,
        "country": "Argentina (Catamarca)",
        "timezone": "America/Argentina/Catamarca"
    },
    {
        "id": 21,
        "country": "Argentina (La Rioja)",
        "timezone": "America/Argentina/La_Rioja"
    },
    {
        "id": 22,
        "country": "Argentina (San Juan)",
        "timezone": "America/Argentina/San_Juan"
    },
    {
        "id": 23,
        "country": "Argentina (Mendoza)",
        "timezone": "America/Argentina/Mendoza"
    },
    {
        "id": 24,
        "country": "Argentina (San Luis)",
        "timezone": "America/Argentina/San_Luis"
    },
    {
        "id": 25,
        "country": "Argentina (Rio Gallegos)",
        "timezone": "America/Argentina/Rio_Gallegos"
    },
    {
        "id": 26,
        "country": "Argentina (Ushuaia)",
        "timezone": "America/Argentina/Ushuaia"
    },
    {
        "id": 27,
        "country": "American Samoa (Pago Pago)",
        "timezone": "Pacific/Pago_Pago"
    },
    {
        "id": 28,
        "country": "Austria (Vienna)",
        "timezone": "Europe/Vienna"
    },
    {
        "id": 29,
        "country": "Australia (Lord Howe)",
        "timezone": "Australia/Lord_Howe"
    },
    {
        "id": 30,
        "country": "Antarctica (Macquarie)",
        "timezone": "Antarctica/Macquarie"
    },
    {
        "id": 31,
        "country": "Australia (Hobart)",
        "timezone": "Australia/Hobart"
    },
    {
        "id": 32,
        "country": "Australia (Currie)",
        "timezone": "Australia/Currie"
    },
    {
        "id": 33,
        "country": "Australia (Melbourne)",
        "timezone": "Australia/Melbourne"
    },
    {
        "id": 34,
        "country": "Australia (Sydney)",
        "timezone": "Australia/Sydney"
    },
    {
        "id": 35,
        "country": "Australia (Broken Hill)",
        "timezone": "Australia/Broken_Hill"
    },
    {
        "id": 36,
        "country": "Australia (Brisbane)",
        "timezone": "Australia/Brisbane"
    },
    {
        "id": 37,
        "country": "Australia (Lindeman)",
        "timezone": "Australia/Lindeman"
    },
    {
        "id": 38,
        "country": "Australia (Adelaide)",
        "timezone": "Australia/Adelaide"
    },
    {
        "id": 39,
        "country": "Australia (Darwin)",
        "timezone": "Australia/Darwin"
    },
    {
        "id": 40,
        "country": "Australia (Perth)",
        "timezone": "Australia/Perth"
    },
    {
        "id": 41,
        "country": "Australia (Eucla)",
        "timezone": "Australia/Eucla"
    },
    {
        "id": 42,
        "country": "Azerbaijan (Baku)",
        "timezone": "Asia/Baku"
    },
    {
        "id": 43,
        "country": "Barbados",
        "timezone": "America/Barbados"
    },
    {
        "id": 44,
        "country": "Bangladesh (Dhaka)",
        "timezone": "Asia/Dhaka"
    },
    {
        "id": 45,
        "country": "Belgium (Brussels)",
        "timezone": "Europe/Brussels"
    },
    {
        "id": 46,
        "country": "Bulgaria (Sofia)",
        "timezone": "Europe/Sofia"
    },
    {
        "id": 47,
        "country": "Bermuda",
        "timezone": "Atlantic/Bermuda"
    },
    {
        "id": 48,
        "country": "Brunei",
        "timezone": "Asia/Brunei"
    },
    {
        "id": 49,
        "country": "Bolivia (La Paz)",
        "timezone": "America/La_Paz"
    },
    {
        "id": 50,
        "country": "Brazil (Noronha)",
        "timezone": "America/Noronha"
    },
    {
        "id": 51,
        "country": "Brazil (Belem)",
        "timezone": "America/Belem"
    },
    {
        "id": 52,
        "country": "Brazil (Fortaleza)",
        "timezone": "America/Fortaleza"
    },
    {
        "id": 53,
        "country": "Brazil (Recife)",
        "timezone": "America/Recife"
    },
    {
        "id": 54,
        "country": "Brazil (Araguaina)",
        "timezone": "America/Araguaina"
    },
    {
        "id": 55,
        "country": "Brazil (Maceio)",
        "timezone": "America/Maceio"
    },
    {
        "id": 56,
        "country": "Brazil (Bahia)",
        "timezone": "America/Bahia"
    },
    {
        "id": 57,
        "country": "Brazil (Sao Paulo)",
        "timezone": "America/Sao_Paulo"
    },
    {
        "id": 58,
        "country": "Brazil (Campo Grande)",
        "timezone": "America/Campo_Grande"
    },
    {
        "id": 59,
        "country": "Brazil (Cuiaba)",
        "timezone": "America/Cuiaba"
    },
    {
        "id": 60,
        "country": "Brazil (Santarem)",
        "timezone": "America/Santarem"
    },
    {
        "id": 61,
        "country": "Brazil (Porto Velho)",
        "timezone": "America/Porto_Velho"
    },
    {
        "id": 62,
        "country": "Brazil (Boa Vista)",
        "timezone": "America/Boa_Vista"
    },
    {
        "id": 63,
        "country": "Brazil (Manaus)",
        "timezone": "America/Manaus"
    },
    {
        "id": 64,
        "country": "Brazil (Eirunepe)",
        "timezone": "America/Eirunepe"
    },
    {
        "id": 65,
        "country": "Brazil (Rio Branco)",
        "timezone": "America/Rio_Branco"
    },
    {
        "id": 66,
        "country": "Bahamas (Nassau)",
        "timezone": "America/Nassau"
    },
    {
        "id": 67,
        "country": "Bhutan (Thimphu)",
        "timezone": "Asia/Thimphu"
    },
    {
        "id": 68,
        "country": "Belarus (Minsk)",
        "timezone": "Europe/Minsk"
    },
    {
        "id": 69,
        "country": "Belize",
        "timezone": "America/Belize"
    },
    {
        "id": 70,
        "country": "Canada (St Johns)",
        "timezone": "America/St_Johns"
    },
    {
        "id": 71,
        "country": "Canada (Halifax)",
        "timezone": "America/Halifax"
    },
    {
        "id": 72,
        "country": "Canada (Glace Bay)",
        "timezone": "America/Glace_Bay"
    },
    {
        "id": 73,
        "country": "Canada (Moncton)",
        "timezone": "America/Moncton"
    },
    {
        "id": 74,
        "country": "Canada (Goose Bay)",
        "timezone": "America/Goose_Bay"
    },
    {
        "id": 75,
        "country": "Canada (Blanc-Sablon)",
        "timezone": "America/Blanc-Sablon"
    },
    {
        "id": 76,
        "country": "Canada (Toronto)",
        "timezone": "America/Toronto"
    },
    {
        "id": 77,
        "country": "Canada (Nipigon)",
        "timezone": "America/Nipigon"
    },
    {
        "id": 78,
        "country": "Canada (Thunder Bay)",
        "timezone": "America/Thunder_Bay"
    },
    {
        "id": 79,
        "country": "Canada (Iqaluit)",
        "timezone": "America/Iqaluit"
    },
    {
        "id": 80,
        "country": "Canada (Pangnirtung)",
        "timezone": "America/Pangnirtung"
    },
    {
        "id": 81,
        "country": "Canada (Atikokan)",
        "timezone": "America/Atikokan"
    },
    {
        "id": 82,
        "country": "Canada (Winnipeg)",
        "timezone": "America/Winnipeg"
    },
    {
        "id": 83,
        "country": "Canada (Rainy River)",
        "timezone": "America/Rainy_River"
    },
    {
        "id": 84,
        "country": "Canada (Resolute)",
        "timezone": "America/Resolute"
    },
    {
        "id": 85,
        "country": "Canada (Rankin Inlet)",
        "timezone": "America/Rankin_Inlet"
    },
    {
        "id": 86,
        "country": "Canada (Regina)",
        "timezone": "America/Regina"
    },
    {
        "id": 87,
        "country": "Canada (Swift Current)",
        "timezone": "America/Swift_Current"
    },
    {
        "id": 88,
        "country": "Canada (Edmonton)",
        "timezone": "America/Edmonton"
    },
    {
        "id": 89,
        "country": "Canada (Cambridge Bay)",
        "timezone": "America/Cambridge_Bay"
    },
    {
        "id": 90,
        "country": "Canada (Yellowknife)",
        "timezone": "America/Yellowknife"
    },
    {
        "id": 91,
        "country": "Canada (Inuvik)",
        "timezone": "America/Inuvik"
    },
    {
        "id": 92,
        "country": "Canada (Creston)",
        "timezone": "America/Creston"
    },
    {
        "id": 93,
        "country": "Canada (Dawson Creek)",
        "timezone": "America/Dawson_Creek"
    },
    {
        "id": 94,
        "country": "Canada (Fort Nelson)",
        "timezone": "America/Fort_Nelson"
    },
    {
        "id": 95,
        "country": "Canada (Vancouver)",
        "timezone": "America/Vancouver"
    },
    {
        "id": 96,
        "country": "Canada (Whitehorse)",
        "timezone": "America/Whitehorse"
    },
    {
        "id": 97,
        "country": "Canada (Dawson)",
        "timezone": "America/Dawson"
    },
    {
        "id": 98,
        "country": "Cocos (Cocos)",
        "timezone": "Indian/Cocos"
    },
    {
        "id": 99,
        "country": "Switzerland (Zurich)",
        "timezone": "Europe/Zurich"
    },
    {
        "id": 100,
        "country": "Chile (Santiago)",
        "timezone": "America/Santiago"
    },
    {
        "id": 101,
        "country": "China (Shanghai)",
        "timezone": "Asia/Shanghai"
    },
    {
        "id": 102,
        "country": "China (Beijing)",
        "timezone": "Asia/Shanghai"
    },
    {
        "id": 103,
        "country": "China (Chongqing)",
        "timezone": "Asia/Chongqing"
    },
    {
        "id": 104,
        "country": "China (Harbin)",
        "timezone": "Asia/Harbin"
    },
    {
        "id": 105,
        "country": "China (Hong Kong)",
        "timezone": "Asia/Hong_Kong"
    },
    {
        "id": 106,
        "country": "China (Macau)",
        "timezone": "Asia/Macau"
    },
    {
        "id": 107,
        "country": "Colombia (Bogota)",
        "timezone": "America/Bogota"
    },
    {
        "id": 108,
        "country": "Costa Rica (San Jose)",
        "timezone": "America/Costa_Rica"
    },
    {
        "id": 109,
        "country": "Cuba (Havana)",
        "timezone": "America/Havana"
    },
    {
        "id": 110,
        "country": "Cyprus (Nicosia)",
        "timezone": "Asia/Nicosia"
    },
    {
        "id": 111,
        "country": "Czech Republic (Prague)",
        "timezone": "Europe/Prague"
    },
    {
        "id": 112,
        "country": "Denmark (Copenhagen)",
        "timezone": "Europe/Copenhagen"
    },
    {
        "id": 113,
        "country": "Dominica",
        "timezone": "America/Dominica"
    },
    {
        "id": 114,
        "country": "Dominican Republic (Santo Domingo)",
        "timezone": "America/Santo_Domingo"
    },
    {
        "id": 115,
        "country": "Ecuador (Quito)",
        "timezone": "America/Guayaquil"
    },
    {
        "id": 116,
        "country": "Egypt (Cairo)",
        "timezone": "Africa/Cairo"
    },
    {
        "id": 117,
        "country": "El Salvador",
        "timezone": "America/El_Salvador"
    },
    {
        "id": 118,
        "country": "Equatorial Guinea (Malabo)",
        "timezone": "Africa/Malabo"
    },
    {
        "id": 119,
        "country": "Estonia (Tallinn)",
        "timezone": "Europe/Tallinn"
    },
    {
        "id": 120,
        "country": "Eswatini (Mbabane)",
        "timezone": "Africa/Mbabane"
    },
    {
        "id": 121,
        "country": "Fiji (Suva)",
        "timezone": "Pacific/Fiji"
    },
    {
        "id": 122,
        "country": "Finland (Helsinki)",
        "timezone": "Europe/Helsinki"
    },
    {
        "id": 123,
        "country": "France (Paris)",
        "timezone": "Europe/Paris"
    },
    {
        "id": 124,
        "country": "Gabon (Libreville)",
        "timezone": "Africa/Libreville"
    },
    {
        "id": 125,
        "country": "Gambia (Banjul)",
        "timezone": "Africa/Banjul"
    },
    {
        "id": 126,
        "country": "Georgia (Tbilisi)",
        "timezone": "Asia/Tbilisi"
    },
    {
        "id": 127,
        "country": "Germany (Berlin)",
        "timezone": "Europe/Berlin"
    },
    {
        "id": 128,
        "country": "Ghana (Accra)",
        "timezone": "Africa/Accra"
    },
    {
        "id": 129,
        "country": "Greece (Athens)",
        "timezone": "Europe/Athens"
    },
    {
        "id": 130,
        "country": "Greenland (Godthab)",
        "timezone": "America/Nuuk"
    },
    {
        "id": 131,
        "country": "Grenada",
        "timezone": "America/Grenada"
    },
    {
        "id": 132,
        "country": "Guam (Guam)",
        "timezone": "Pacific/Guam"
    },
    {
        "id": 133,
        "country": "Guatemala (Guatemala City)",
        "timezone": "America/Guatemala"
    },
    {
        "id": 134,
        "country": "Guyana (Georgetown)",
        "timezone": "America/Guyana"
    },
    {
        "id": 135,
        "country": "Honduras (Tegucigalpa)",
        "timezone": "America/Tegucigalpa"
    },
    {
        "id": 136,
        "country": "Hungary (Budapest)",
        "timezone": "Europe/Budapest"
    },
    {
        "id": 137,
        "country": "Iceland (Reykjavik)",
        "timezone": "Atlantic/Reykjavik"
    },
    {
        "id": 138,
        "country": "India (Delhi)",
        "timezone": "Asia/Kolkata"
    },
    {
        "id": 139,
        "country": "Indonesia (Jakarta)",
        "timezone": "Asia/Jakarta"
    },
    {
        "id": 140,
        "country": "Indonesia (Bali)",
        "timezone": "Asia/Makassar"
    },
    {
        "id": 141,
        "country": "Indonesia (Makassar)",
        "timezone": "Asia/Makassar"
    },
    {
        "id": 142,
        "country": "Indonesia (Jayapura)",
        "timezone": "Asia/Jayapura"
    },
    {
        "id": 143,
        "country": "Iran (Tehran)",
        "timezone": "Asia/Tehran"
    },
    {
        "id": 144,
        "country": "Iraq (Baghdad)",
        "timezone": "Asia/Baghdad"
    },
    {
        "id": 145,
        "country": "Ireland (Dublin)",
        "timezone": "Europe/Dublin"
    },
    {
        "id": 146,
        "country": "Israel (Jerusalem)",
        "timezone": "Asia/Jerusalem"
    },
    {
        "id": 147,
        "country": "Italy (Rome)",
        "timezone": "Europe/Rome"
    },
    {
        "id": 148,
        "country": "Jamaica",
        "timezone": "America/Jamaica"
    },
    {
        "id": 149,
        "country": "Japan (Tokyo)",
        "timezone": "Asia/Tokyo"
    },
    {
        "id": 150,
        "country": "Kazakhstan (Almaty)",
        "timezone": "Asia/Almaty"
    },
    {
        "id": 151,
        "country": "Kazakhstan (Astana)",
        "timezone": "Asia/Qyzylorda"
    },
    {
        "id": 152,
        "country": "Kazakhstan (Oral)",
        "timezone": "Asia/Oral"
    },
    {
        "id": 153,
        "country": "Kenya (Nairobi)",
        "timezone": "Africa/Nairobi"
    },
    {
        "id": 154,
        "country": "Kiribati (Phoenix Islands)",
        "timezone": "Pacific/Funafuti"
    },
    {
        "id": 155,
        "country": "Kiribati (Line Islands)",
        "timezone": "Pacific/Kiritimati"
    },
    {
        "id": 156,
        "country": "Kuwait (Kuwait City)",
        "timezone": "Asia/Kuwait"
    },
    {
        "id": 157,
        "country": "Kyrgyzstan (Bishkek)",
        "timezone": "Asia/Bishkek"
    },
    {
        "id": 158,
        "country": "Latvia (Riga)",
        "timezone": "Europe/Riga"
    },
    {
        "id": 159,
        "country": "Lebanon (Beirut)",
        "timezone": "Asia/Beirut"
    },
    {
        "id": 160,
        "country": "Lesotho (Maseru)",
        "timezone": "Africa/Maseru"
    },
    {
        "id": 161,
        "country": "Liberia (Monrovia)",
        "timezone": "Africa/Monrovia"
    },
    {
        "id": 162,
        "country": "Libya (Tripoli)",
        "timezone": "Africa/Tripoli"
    },
    {
        "id": 163,
        "country": "Lithuania (Vilnius)",
        "timezone": "Europe/Vilnius"
    },
    {
        "id": 164,
        "country": "Luxembourg",
        "timezone": "Europe/Luxembourg"
    },
    {
        "id": 165,
        "country": "Malaysia (Kuala Lumpur)",
        "timezone": "Asia/Kuala_Lumpur"
    },
    {
        "id": 166,
        "country": "Malawi (Lilongwe)",
        "timezone": "Africa/Blantyre"
    },
    {
        "id": 167,
        "country": "Maldives (Malé)",
        "timezone": "Indian/Maldives"
    },
    {
        "id": 168,
        "country": "Mali (Bamako)",
        "timezone": "Africa/Bamako"
    },
    {
        "id": 169,
        "country": "Malta",
        "timezone": "Europe/Malta"
    },
    {
        "id": 170,
        "country": "Marshall Islands (Majuro)",
        "timezone": "Pacific/Majuro"
    },
    {
        "id": 171,
        "country": "Mauritania (Nouakchott)",
        "timezone": "Africa/Nouakchott"
    },
    {
        "id": 172,
        "country": "Mauritius (Port Louis)",
        "timezone": "Indian/Mauritius"
    },
    {
        "id": 173,
        "country": "Mexico (Chihuahua)",
        "timezone": "America/Chihuahua"
    },
    {
        "id": 174,
        "country": "Mexico (Mazatlan)",
        "timezone": "America/Mazatlan"
    },
    {
        "id": 175,
        "country": "Mexico (Hermosillo)",
        "timezone": "America/Hermosillo"
    },
    {
        "id": 176,
        "country": "Mexico (Mexico City)",
        "timezone": "America/Mexico_City"
    },
    {
        "id": 177,
        "country": "Mexico (Monterrey)",
        "timezone": "America/Monterrey"
    },
    {
        "id": 178,
        "country": "Mexico (Cancun)",
        "timezone": "America/Cancun"
    },
    {
        "id": 179,
        "country": "Micronesia (Chuuk)",
        "timezone": "Pacific/Chuuk"
    },
    {
        "id": 180,
        "country": "Micronesia (Pohnpei)",
        "timezone": "Pacific/Pohnpei"
    },
    {
        "id": 181,
        "country": "Micronesia (Kosrae)",
        "timezone": "Pacific/Kosrae"
    },
    {
        "id": 182,
        "country": "Moldova (Chisinau)",
        "timezone": "Europe/Chisinau"
    },
    {
        "id": 183,
        "country": "Monaco",
        "timezone": "Europe/Monaco"
    },
    {
        "id": 184,
        "country": "Mongolia (Ulaanbaatar)",
        "timezone": "Asia/Ulaanbaatar"
    },
    {
        "id": 185,
        "country": "Montenegro (Podgorica)",
        "timezone": "Europe/Podgorica"
    },
    {
        "id": 186,
        "country": "Morocco (Casablanca)",
        "timezone": "Africa/Casablanca"
    },
    {
        "id": 187,
        "country": "Mozambique (Maputo)",
        "timezone": "Africa/Maputo"
    },
    {
        "id": 188,
        "country": "Myanmar (Yangon)",
        "timezone": "Asia/Yangon"
    },
    {
        "id": 189,
        "country": "Namibia (Windhoek)",
        "timezone": "Africa/Windhoek"
    },
    {
        "id": 190,
        "country": "Nauru",
        "timezone": "Pacific/Nauru"
    },
    {
        "id": 191,
        "country": "Nepal (Kathmandu)",
        "timezone": "Asia/Kathmandu"
    },
    {
        "id": 192,
        "country": "Netherlands (Amsterdam)",
        "timezone": "Europe/Amsterdam"
    },
    {
        "id": 193,
        "country": "New Zealand (Auckland)",
        "timezone": "Pacific/Auckland"
    },
    {
        "id": 194,
        "country": "Nicaragua (Managua)",
        "timezone": "America/Managua"
    },
    {
        "id": 195,
        "country": "Niger (Niamey)",
        "timezone": "Africa/Niamey"
    },
    {
        "id": 196,
        "country": "Nigeria (Lagos)",
        "timezone": "Africa/Lagos"
    },
    {
        "id": 197,
        "country": "North Korea (Pyongyang)",
        "timezone": "Asia/Pyongyang"
    },
    {
        "id": 198,
        "country": "North Macedonia (Skopje)",
        "timezone": "Europe/Skopje"
    },
    {
        "id": 199,
        "country": "Norway (Oslo)",
        "timezone": "Europe/Oslo"
    },
    {
        "id": 200,
        "country": "Oman (Muscat)",
        "timezone": "Asia/Muscat"
    },
    {
        "id": 201,
        "country": "Pakistan (Karachi)",
        "timezone": "Asia/Karachi"
    },
    {
        "id": 202,
        "country": "Palau",
        "timezone": "Pacific/Palau"
    },
    {
        "id": 203,
        "country": "Panama (Panama City)",
        "timezone": "America/Panama"
    },
    {
        "id": 204,
        "country": "Papua New Guinea (Port Moresby)",
        "timezone": "Pacific/Port_Moresby"
    },
    {
        "id": 205,
        "country": "Paraguay (Asuncion)",
        "timezone": "America/Asuncion"
    },
    {
        "id": 206,
        "country": "Peru (Lima)",
        "timezone": "America/Lima"
    },
    {
        "id": 207,
        "country": "Philippines (Manila)",
        "timezone": "Asia/Manila"
    },
    {
        "id": 208,
        "country": "Poland (Warsaw)",
        "timezone": "Europe/Warsaw"
    },
    {
        "id": 209,
        "country": "Portugal (Lisbon)",
        "timezone": "Europe/Lisbon"
    },
    {
        "id": 210,
        "country": "Puerto Rico",
        "timezone": "America/Puerto_Rico"
    },
    {
        "id": 211,
        "country": "Qatar (Doha)",
        "timezone": "Asia/Qatar"
    },
    {
        "id": 212,
        "country": "Romania (Bucharest)",
        "timezone": "Europe/Bucharest"
    },
    {
        "id": 213,
        "country": "Russia (Moscow)",
        "timezone": "Europe/Moscow"
    },
    {
        "id": 214,
        "country": "Rwanda (Kigali)",
        "timezone": "Africa/Kigali"
    },
    {
        "id": 215,
        "country": "Saudi Arabia (Riyadh)",
        "timezone": "Asia/Riyadh"
    },
    {
        "id": 216,
        "country": "Senegal (Dakar)",
        "timezone": "Africa/Dakar"
    },
    {
        "id": 217,
        "country": "Serbia (Belgrade)",
        "timezone": "Europe/Belgrade"
    },
    {
        "id": 218,
        "country": "Singapore (Singapore)",
        "timezone": "Asia/Singapore"
    },
    {
        "id": 219,
        "country": "Slovakia (Bratislava)",
        "timezone": "Europe/Bratislava"
    },
    {
        "id": 220,
        "country": "Slovenia (Ljubljana)",
        "timezone": "Europe/Ljubljana"
    },
    {
        "id": 221,
        "country": "Solomon Islands",
        "timezone": "Pacific/Guadalcanal"
    },
    {
        "id": 222,
        "country": "South Africa (Pretoria)",
        "timezone": "Africa/Johannesburg"
    },
    {
        "id": 223,
        "country": "South Korea (Seoul)",
        "timezone": "Asia/Seoul"
    },
    {
        "id": 224,
        "country": "South Sudan (Juba)",
        "timezone": "Africa/Juba"
    },
    {
        "id": 225,
        "country": "Spain (Madrid)",
        "timezone": "Europe/Madrid"
    },
    {
        "id": 226,
        "country": "Sri Lanka (Colombo)",
        "timezone": "Asia/Colombo"
    },
    {
        "id": 227,
        "country": "Sudan (Khartoum)",
        "timezone": "Africa/Khartoum"
    },
    {
        "id": 228,
        "country": "Sweden (Stockholm)",
        "timezone": "Europe/Stockholm"
    },
    {
        "id": 229,
        "country": "Switzerland (Zurich)",
        "timezone": "Europe/Zurich"
    },
    {
        "id": 230,
        "country": "Taiwan (Taipei)",
        "timezone": "Asia/Taipei"
    },
    {
        "id": 231,
        "country": "Tajikistan (Dushanbe)",
        "timezone": "Asia/Dushanbe"
    },
    {
        "id": 232,
        "country": "Tanzania (Dodoma)",
        "timezone": "Africa/Dodoma"
    },
    {
        "id": 233,
        "country": "Thailand (Bangkok)",
        "timezone": "Asia/Bangkok"
    },
    {
        "id": 234,
        "country": "Togo (Lome)",
        "timezone": "Africa/Lome"
    },
    {
        "id": 235,
        "country": "Tonga (Nuku'alofa)",
        "timezone": "Pacific/Tongatapu"
    },
    {
        "id": 236,
        "country": "Trinidad and Tobago",
        "timezone": "America/Port_of_Spain"
    },
    {
        "id": 237,
        "country": "Tunisia (Tunis)",
        "timezone": "Africa/Tunis"
    },
    {
        "id": 238,
        "country": "Turkey (Istanbul)",
        "timezone": "Europe/Istanbul"
    },
    {
        "id": 239,
        "country": "Turkmenistan (Ashgabat)",
        "timezone": "Asia/Ashgabat"
    },
    {
        "id": 240,
        "country": "Tuvalu",
        "timezone": "Pacific/Funafuti"
    },
    {
        "id": 241,
        "country": "Uganda (Kampala)",
        "timezone": "Africa/Kampala"
    },
    {
        "id": 242,
        "country": "Ukraine (Kyiv)",
        "timezone": "Europe/Kyiv"
    },
    {
        "id": 243,
        "country": "United Arab Emirates (Dubai)",
        "timezone": "Asia/Dubai"
    },
    {
        "id": 244,
        "country": "United Kingdom (London)",
        "timezone": "Europe/London"
    },
    {
        "id": 245,
        "country": "United States (Los Angeles)",
        "timezone": "America/Los_Angeles"
    },
    {
        "id": 246,
        "country": "United States (New York)",
        "timezone": "America/New_York"
    },
    {
        "id": 247,
        "country": "United States (Chicago)",
        "timezone": "America/Chicago"
    },
    {
        "id": 248,
        "country": "Uruguay (Montevideo)",
        "timezone": "America/Montevideo"
    },
    {
        "id": 249,
        "country": "Uzbekistan (Tashkent)",
        "timezone": "Asia/Tashkent"
    },
    {
        "id": 250,
        "country": "Vanuatu (Port Vila)",
        "timezone": "Pacific/Efate"
    },
    {
        "id": 251,
        "country": "Vatican City",
        "timezone": "Europe/Vatican"
    },
    {
        "id": 252,
        "country": "Venezuela (Caracas)",
        "timezone": "America/Caracas"
    },
    {
        "id": 253,
        "country": "Vietnam (Hanoi)",
        "timezone": "Asia/Hanoi"
    },
    {
        "id": 254,
        "country": "Yemen (Sana'a)",
        "timezone": "Asia/Aden"
    },
    {
        "id": 255,
        "country": "Zambia (Lusaka)",
        "timezone": "Africa/Lusaka"
    },
    {
        "id": 256,
        "country": "Zimbabwe (Harare)",
        "timezone": "Africa/Harare"
    }
]

let favoriteTimeZones = []

let is12Hour = true

const timeZoneList = document.getElementById('timezone-list')
const favoriteTimeZonesList = document.getElementById('favorite-timezones');

function getCurrentDateTime(timezone) {
    const date = new Date().toLocaleString("en-US", {
        timeZone: timezone,
        hour12: is12Hour,
    })

    return date
}

function toggleTimeFormat(isChecked){
    is12Hour = isChecked
    loadFavoriteTimeZoneList()
}

function updateCurrentDateTime(elementId, timezone){
    const currentDateTime = getCurrentDateTime(timezone)
    document.getElementById(elementId).textContent = currentDateTime
}

function loadTimeZoneList(list){
    timeZoneList.innerHTML = ''
    list.forEach(item => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td> ${item.id}</td>
            <td> ${item.country}</td>
            <td> ${item.timezone}</td>
            <td> 
             ${isExistTimeZone(item.id) ? `<span> Exist</span>` : `
                <button class="add-btn" onclick="addFavorite(${item.id})">Add</button>
             `}
            </td>
        `
        timeZoneList.appendChild(row)
    })
}

function searchTimeZone(searchText){
    const filteredList = timezones.filter((item) => {
        return item.country.toLowerCase().includes(searchText.toLowerCase())
    })

    loadTimeZoneList(filteredList)
}

function addFavorite(id){
    const item = timezones.find(item => item.id === id)
    favoriteTimeZones.push(item)
    loadFavoriteTimeZoneList()
    loadTimeZoneList(timezones)
}

function removeFavorite(id){
    const index = favoriteTimeZones.findIndex(item => item.id === id)
    favoriteTimeZones.splice(index, 1)
    loadFavoriteTimeZoneList()
    loadTimeZoneList(timezones)
}

function loadFavoriteTimeZoneList(){
    favoriteTimeZonesList.innerHTML = ''
    if(favoriteTimeZones.length === 0){
        const row = document.createElement('li')
        row.innerHTML = '<div class="text-center">No Favorite Time Zones</div>'
        favoriteTimeZonesList.appendChild(row)
    }else{
        favoriteTimeZones.forEach(item => {
            const row = document.createElement('li')
            row.innerHTML = `
                ${item.country} <span id="time-${item.id}">${getCurrentDateTime(item.timezone)}</span>
                <button class="remove-btn" onclick="removeFavorite(${item.id})">Remove </button>
            `
            favoriteTimeZonesList.appendChild(row)
        })
    }
}

function isExistTimeZone(id){
    const result = favoriteTimeZones.some((fav) => {
        return fav.id === id
    })
    return result
}

function updateFavoriteDateTime(){
    favoriteTimeZones.forEach((item, index) => {
        updateCurrentDateTime(`time-${index}`, item.timezone)
    })
}

setInterval(() => {
    updateCurrentDateTime('current-datetime', Intl.DateTimeFormat().resolvedOptions().timeZone)
    updateFavoriteDateTime()
}, 1000);

updateCurrentDateTime('current-datetime', Intl.DateTimeFormat().resolvedOptions().timeZone)
loadTimeZoneList(timezones)
loadFavoriteTimeZoneList()

