import { v4 as uuid } from 'uuid';

export const customers = [
  
    {
      "status": "warning",
      "train_id": 499718003,
      "type": "Bulldozer",
      "location": "5 Esker Street",
      "last_maintained": "11-May-2020"
    },
    {
      "status": "error",
      "train_id": 460803721,
      "type": "Excavator",
      "location": "3282 Vernon Court",
      "last_maintained": "24-Dec-2017"
    },
    {
      "status": "error",
      "train_id": 387990306,
      "type": "Compactor",
      "location": "011 Moose Park",
      "last_maintained": "15-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 728701311,
      "type": "Trencher",
      "location": "12545 Cherokee Court",
      "last_maintained": "03-May-2018"
    },
    {
      "status": "error",
      "train_id": 782659502,
      "type": "Skid-Steer",
      "location": "2141 Valley Edge Road",
      "last_maintained": "02-Aug-2019"
    },
    {
      "status": "error",
      "train_id": 439380412,
      "type": "Bulldozer",
      "location": "56 American Ash Crossing",
      "last_maintained": "27-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 451655724,
      "type": "Dragline",
      "location": "8 Del Sol Terrace",
      "last_maintained": "01-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 21557692,
      "type": "Backhoe",
      "location": "60 Mendota Place",
      "last_maintained": "15-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 638182393,
      "type": "Grader",
      "location": "567 8th Circle",
      "last_maintained": "24-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 988518820,
      "type": "Grader",
      "location": "14 Lunder Avenue",
      "last_maintained": "08-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 354593029,
      "type": "Trencher",
      "location": "60 Dawn Terrace",
      "last_maintained": "26-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 218144235,
      "type": "Compactor",
      "location": "84 Lakewood Gardens Lane",
      "last_maintained": "29-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 312342203,
      "type": "Dump Truck",
      "location": "31 Rowland Circle",
      "last_maintained": "02-Apr-2020"
    },
    {
      "status": "error",
      "train_id": 385689520,
      "type": "Dragline",
      "location": "5284 Butternut Street",
      "last_maintained": "23-May-2021"
    },
    {
      "status": "error",
      "train_id": 535782273,
      "type": "Skid-Steer",
      "location": "1 Washington Road",
      "last_maintained": "29-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 867361836,
      "type": "Backhoe",
      "location": "157 Atwood Crossing",
      "last_maintained": "03-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 814214478,
      "type": "Crawler",
      "location": "1 Duke Parkway",
      "last_maintained": "21-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 624210515,
      "type": "Compactor",
      "location": "8135 Onsgard Alley",
      "last_maintained": "17-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 627392278,
      "type": "Dragline",
      "location": "7056 Anhalt Alley",
      "last_maintained": "29-Nov-2021"
    },
    {
      "status": "error",
      "train_id": 460797940,
      "type": "Backhoe",
      "location": "40265 Westport Plaza",
      "last_maintained": "13-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 382013976,
      "type": "Grader",
      "location": "78570 Summerview Circle",
      "last_maintained": "08-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 799812868,
      "type": "Grader",
      "location": "1085 Debs Alley",
      "last_maintained": "27-Dec-2020"
    },
    {
      "status": "error",
      "train_id": 60688299,
      "type": "Grader",
      "location": "19385 Bobwhite Street",
      "last_maintained": "17-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 275658402,
      "type": "Compactor",
      "location": "7 Elka Hill",
      "last_maintained": "27-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 524796978,
      "type": "Trencher",
      "location": "62 Jenifer Road",
      "last_maintained": "22-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 55968223,
      "type": "Scraper",
      "location": "962 Bunting Point",
      "last_maintained": "17-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 887247584,
      "type": "Dump Truck",
      "location": "5062 Caliangt Place",
      "last_maintained": "29-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 215493458,
      "type": "Excavator",
      "location": "27538 Cascade Parkway",
      "last_maintained": "21-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 105539696,
      "type": "Crawler",
      "location": "1 Bowman Lane",
      "last_maintained": "06-Mar-2019"
    },
    {
      "status": "success",
      "train_id": 5123046,
      "type": "Dragline",
      "location": "325 Elka Parkway",
      "last_maintained": "29-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 72217212,
      "type": "Excavator",
      "location": "78681 Butterfield Hill",
      "last_maintained": "02-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 867815532,
      "type": "Scraper",
      "location": "5327 Weeping Birch Center",
      "last_maintained": "27-Apr-2020"
    },
    {
      "status": "error",
      "train_id": 638170467,
      "type": "Crawler",
      "location": "944 Thierer Way",
      "last_maintained": "19-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 161786749,
      "type": "Dragline",
      "location": "754 Almo Terrace",
      "last_maintained": "01-Apr-2020"
    },
    {
      "status": "error",
      "train_id": 328047052,
      "type": "Compactor",
      "location": "8485 Farmco Hill",
      "last_maintained": "30-May-2020"
    },
    {
      "status": "error",
      "train_id": 258069077,
      "type": "Excavator",
      "location": "43 Lukken Circle",
      "last_maintained": "16-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 977108643,
      "type": "Backhoe",
      "location": "6347 American Street",
      "last_maintained": "20-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 631824449,
      "type": "Bulldozer",
      "location": "0 Nancy Parkway",
      "last_maintained": "09-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 74127611,
      "type": "Crawler",
      "location": "6239 Killdeer Avenue",
      "last_maintained": "06-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 381034974,
      "type": "Dump Truck",
      "location": "3766 Lerdahl Terrace",
      "last_maintained": "01-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 260010125,
      "type": "Scraper",
      "location": "0 Kim Hill",
      "last_maintained": "10-Jun-2020"
    },
    {
      "status": "green",
      "train_id": 670583169,
      "type": "Compactor",
      "location": "8 Derek Court",
      "last_maintained": "20-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 51000719,
      "type": "Dragline",
      "location": "53884 Grayhawk Road",
      "last_maintained": "28-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 251204837,
      "type": "Dump Truck",
      "location": "963 Northfield Center",
      "last_maintained": "18-May-2021"
    },
    {
      "status": "success",
      "train_id": 79114406,
      "type": "Compactor",
      "location": "9 Kings Court",
      "last_maintained": "06-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 174500487,
      "type": "Backhoe",
      "location": "8 Hazelcrest Plaza",
      "last_maintained": "19-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 296321545,
      "type": "Compactor",
      "location": "99 Eagan Court",
      "last_maintained": "04-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 217941929,
      "type": "Dump Truck",
      "location": "3 Waywood Pass",
      "last_maintained": "20-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 698230753,
      "type": "Skid-Steer",
      "location": "270 Main Plaza",
      "last_maintained": "24-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 532427201,
      "type": "Skid-Steer",
      "location": "8924 Holy Cross Drive",
      "last_maintained": "09-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 208215692,
      "type": "Scraper",
      "location": "04 Fulton Way",
      "last_maintained": "15-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 972243500,
      "type": "Dragline",
      "location": "73 Grover Road",
      "last_maintained": "31-May-2019"
    },
    {
      "status": "error",
      "train_id": 617594623,
      "type": "Excavator",
      "location": "85 Delaware Road",
      "last_maintained": "10-Apr-2021"
    },
    {
      "status": "error",
      "train_id": 296538428,
      "type": "Bulldozer",
      "location": "6002 Grim Parkway",
      "last_maintained": "06-Jan-2020"
    },
    {
      "status": "green",
      "train_id": 41165338,
      "type": "Dump Truck",
      "location": "010 Warner Junction",
      "last_maintained": "03-Aug-2021"
    },
    {
      "status": "error",
      "train_id": 324533260,
      "type": "Dump Truck",
      "location": "4426 Fieldstone Park",
      "last_maintained": "19-Apr-2021"
    },
    {
      "status": "error",
      "train_id": 95723380,
      "type": "Bulldozer",
      "location": "0 Beilfuss Way",
      "last_maintained": "25-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 972772993,
      "type": "Excavator",
      "location": "04 Gulseth Center",
      "last_maintained": "20-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 792135504,
      "type": "Scraper",
      "location": "2 Heffernan Road",
      "last_maintained": "28-May-2019"
    },
    {
      "status": "success",
      "train_id": 964563375,
      "type": "Compactor",
      "location": "2 Crescent Oaks Park",
      "last_maintained": "27-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 834461624,
      "type": "Scraper",
      "location": "5 Grim Avenue",
      "last_maintained": "24-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 359454626,
      "type": "Trencher",
      "location": "05 Tony Lane",
      "last_maintained": "02-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 824436705,
      "type": "Scraper",
      "location": "288 Twin Pines Terrace",
      "last_maintained": "12-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 164264087,
      "type": "Backhoe",
      "location": "5 Melby Center",
      "last_maintained": "26-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 106555737,
      "type": "Scraper",
      "location": "6 Valley Edge Pass",
      "last_maintained": "07-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 667613585,
      "type": "Bulldozer",
      "location": "180 Myrtle Hill",
      "last_maintained": "21-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 795209772,
      "type": "Bulldozer",
      "location": "9 Mifflin Place",
      "last_maintained": "19-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 223557148,
      "type": "Backhoe",
      "location": "310 Blaine Way",
      "last_maintained": "21-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 167180559,
      "type": "Skid-Steer",
      "location": "28 Continental Road",
      "last_maintained": "26-Mar-2018"
    },
    {
      "status": "success",
      "train_id": 665204277,
      "type": "Compactor",
      "location": "280 Anzinger Point",
      "last_maintained": "21-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 876823857,
      "type": "Dragline",
      "location": "1476 Orin Road",
      "last_maintained": "28-Jan-2019"
    },
    {
      "status": "error",
      "train_id": 226945594,
      "type": "Compactor",
      "location": "9676 Hintze Court",
      "last_maintained": "07-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 32412461,
      "type": "Bulldozer",
      "location": "18930 Sachs Road",
      "last_maintained": "01-Feb-2020"
    },
    {
      "status": "success",
      "train_id": 558690466,
      "type": "Trencher",
      "location": "93768 Glacier Hill Center",
      "last_maintained": "20-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 513913834,
      "type": "Skid-Steer",
      "location": "3 Crescent Oaks Center",
      "last_maintained": "10-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 117258054,
      "type": "Scraper",
      "location": "90 Brown Crossing",
      "last_maintained": "04-May-2020"
    },
    {
      "status": "green",
      "train_id": 319917167,
      "type": "Excavator",
      "location": "1399 Elka Road",
      "last_maintained": "30-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 171752434,
      "type": "Crawler",
      "location": "9 Artisan Junction",
      "last_maintained": "03-May-2020"
    },
    {
      "status": "error",
      "train_id": 90152082,
      "type": "Dragline",
      "location": "6306 John Wall Crossing",
      "last_maintained": "05-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 560157792,
      "type": "Skid-Steer",
      "location": "06179 Morningstar Crossing",
      "last_maintained": "15-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 186742046,
      "type": "Crawler",
      "location": "2164 Longview Crossing",
      "last_maintained": "27-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 137903654,
      "type": "Trencher",
      "location": "871 Menomonie Plaza",
      "last_maintained": "21-Feb-2020"
    },
    {
      "status": "success",
      "train_id": 537593675,
      "type": "Scraper",
      "location": "0 Scoville Hill",
      "last_maintained": "01-Nov-2021"
    },
    {
      "status": "error",
      "train_id": 838634140,
      "type": "Excavator",
      "location": "63 Dwight Park",
      "last_maintained": "26-May-2019"
    },
    {
      "status": "error",
      "train_id": 553863420,
      "type": "Bulldozer",
      "location": "5 Shasta Circle",
      "last_maintained": "09-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 699985846,
      "type": "Backhoe",
      "location": "0569 Packers Terrace",
      "last_maintained": "04-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 92414619,
      "type": "Skid-Steer",
      "location": "1 Crownhardt Circle",
      "last_maintained": "03-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 31830127,
      "type": "Trencher",
      "location": "59414 Armistice Hill",
      "last_maintained": "08-Jun-2019"
    },
    {
      "status": "green",
      "train_id": 619092285,
      "type": "Bulldozer",
      "location": "3 Grayhawk Trail",
      "last_maintained": "14-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 433890662,
      "type": "Scraper",
      "location": "94162 Riverside Road",
      "last_maintained": "07-May-2019"
    },
    {
      "status": "error",
      "train_id": 496726031,
      "type": "Bulldozer",
      "location": "3 Messerschmidt Center",
      "last_maintained": "25-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 962257850,
      "type": "Trencher",
      "location": "798 Lukken Drive",
      "last_maintained": "23-Apr-2020"
    },
    {
      "status": "green",
      "train_id": 841082468,
      "type": "Dump Truck",
      "location": "2422 Fallview Center",
      "last_maintained": "10-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 772783578,
      "type": "Scraper",
      "location": "965 Corben Street",
      "last_maintained": "20-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 68464137,
      "type": "Scraper",
      "location": "71853 Shoshone Way",
      "last_maintained": "30-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 897522384,
      "type": "Scraper",
      "location": "030 Northwestern Trail",
      "last_maintained": "10-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 246096638,
      "type": "Dragline",
      "location": "9 Lawn Trail",
      "last_maintained": "15-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 272027638,
      "type": "Trencher",
      "location": "4 Garrison Terrace",
      "last_maintained": "30-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 222674412,
      "type": "Excavator",
      "location": "0340 Bluestem Center",
      "last_maintained": "28-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 233542069,
      "type": "Grader",
      "location": "61 Del Mar Park",
      "last_maintained": "10-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 250901365,
      "type": "Crawler",
      "location": "10 Loftsgordon Drive",
      "last_maintained": "16-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 30772650,
      "type": "Crawler",
      "location": "7076 South Point",
      "last_maintained": "29-Oct-2021"
    },
    {
      "status": "error",
      "train_id": 462541010,
      "type": "Compactor",
      "location": "0906 Commercial Way",
      "last_maintained": "23-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 872076960,
      "type": "Dragline",
      "location": "0300 Division Circle",
      "last_maintained": "17-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 289768354,
      "type": "Dragline",
      "location": "47640 Saint Paul Crossing",
      "last_maintained": "03-Mar-2021"
    },
    {
      "status": "success",
      "train_id": 500622113,
      "type": "Trencher",
      "location": "9 Mayfield Hill",
      "last_maintained": "01-May-2018"
    },
    {
      "status": "green",
      "train_id": 347813885,
      "type": "Dump Truck",
      "location": "04 Scofield Circle",
      "last_maintained": "19-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 312372827,
      "type": "Backhoe",
      "location": "3204 Transport Trail",
      "last_maintained": "14-May-2020"
    },
    {
      "status": "green",
      "train_id": 71157437,
      "type": "Bulldozer",
      "location": "99 Prentice Circle",
      "last_maintained": "23-Apr-2020"
    },
    {
      "status": "error",
      "train_id": 132017295,
      "type": "Excavator",
      "location": "55 Oakridge Pass",
      "last_maintained": "11-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 78593564,
      "type": "Dump Truck",
      "location": "4610 Brentwood Pass",
      "last_maintained": "22-May-2021"
    },
    {
      "status": "green",
      "train_id": 21951693,
      "type": "Compactor",
      "location": "68629 Susan Junction",
      "last_maintained": "18-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 449862717,
      "type": "Compactor",
      "location": "3 Butternut Hill",
      "last_maintained": "04-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 602398883,
      "type": "Compactor",
      "location": "56965 Hallows Crossing",
      "last_maintained": "16-May-2019"
    },
    {
      "status": "success",
      "train_id": 626260138,
      "type": "Backhoe",
      "location": "9 Ronald Regan Avenue",
      "last_maintained": "12-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 122280796,
      "type": "Grader",
      "location": "4535 John Wall Park",
      "last_maintained": "27-Aug-2021"
    },
    {
      "status": "error",
      "train_id": 267995026,
      "type": "Scraper",
      "location": "7 Norway Maple Circle",
      "last_maintained": "24-May-2020"
    },
    {
      "status": "error",
      "train_id": 519304669,
      "type": "Scraper",
      "location": "12238 Victoria Park",
      "last_maintained": "24-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 685061946,
      "type": "Crawler",
      "location": "4 Forest Circle",
      "last_maintained": "22-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 233036601,
      "type": "Crawler",
      "location": "1 Sunfield Lane",
      "last_maintained": "12-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 384979901,
      "type": "Crawler",
      "location": "15040 Forster Point",
      "last_maintained": "26-Nov-2021"
    },
    {
      "status": "error",
      "train_id": 830920651,
      "type": "Grader",
      "location": "1 Namekagon Way",
      "last_maintained": "20-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 556107663,
      "type": "Trencher",
      "location": "669 Brentwood Road",
      "last_maintained": "12-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 150529953,
      "type": "Dump Truck",
      "location": "3965 5th Court",
      "last_maintained": "06-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 3401134,
      "type": "Trencher",
      "location": "31 Lotheville Parkway",
      "last_maintained": "07-Aug-2019"
    },
    {
      "status": "error",
      "train_id": 41346614,
      "type": "Backhoe",
      "location": "454 Northport Hill",
      "last_maintained": "05-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 211235704,
      "type": "Compactor",
      "location": "930 Shoshone Terrace",
      "last_maintained": "02-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 131849649,
      "type": "Skid-Steer",
      "location": "65814 Lighthouse Bay Parkway",
      "last_maintained": "03-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 618939717,
      "type": "Dragline",
      "location": "00918 Ilene Lane",
      "last_maintained": "10-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 237728250,
      "type": "Dump Truck",
      "location": "4 Golden Leaf Lane",
      "last_maintained": "10-May-2018"
    },
    {
      "status": "error",
      "train_id": 926303882,
      "type": "Excavator",
      "location": "336 Chinook Pass",
      "last_maintained": "21-Jan-2019"
    },
    {
      "status": "error",
      "train_id": 953443214,
      "type": "Trencher",
      "location": "145 Lawn Plaza",
      "last_maintained": "07-Oct-2020"
    },
    {
      "status": "green",
      "train_id": 880993490,
      "type": "Crawler",
      "location": "9 Colorado Plaza",
      "last_maintained": "23-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 273424736,
      "type": "Crawler",
      "location": "986 Harbort Avenue",
      "last_maintained": "04-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 716077000,
      "type": "Grader",
      "location": "31927 5th Center",
      "last_maintained": "26-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 924585486,
      "type": "Bulldozer",
      "location": "93 Tomscot Pass",
      "last_maintained": "05-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 394635766,
      "type": "Skid-Steer",
      "location": "6 Paget Court",
      "last_maintained": "19-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 740040447,
      "type": "Trencher",
      "location": "96223 Elka Drive",
      "last_maintained": "08-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 770017326,
      "type": "Skid-Steer",
      "location": "62 Amoth Way",
      "last_maintained": "16-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 258060555,
      "type": "Excavator",
      "location": "3480 Lakeland Way",
      "last_maintained": "11-Apr-2021"
    },
    {
      "status": "error",
      "train_id": 769778053,
      "type": "Crawler",
      "location": "1810 Farwell Plaza",
      "last_maintained": "15-Dec-2020"
    },
    {
      "status": "green",
      "train_id": 760544560,
      "type": "Compactor",
      "location": "91471 Charing Cross Crossing",
      "last_maintained": "06-Nov-2021"
    },
    {
      "status": "green",
      "train_id": 991285787,
      "type": "Bulldozer",
      "location": "3524 Kropf Drive",
      "last_maintained": "04-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 539081148,
      "type": "Dragline",
      "location": "2 Eagan Park",
      "last_maintained": "12-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 785771561,
      "type": "Grader",
      "location": "74 Eastlawn Point",
      "last_maintained": "24-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 69250292,
      "type": "Backhoe",
      "location": "0 American Center",
      "last_maintained": "03-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 648848364,
      "type": "Skid-Steer",
      "location": "0 Manufacturers Terrace",
      "last_maintained": "09-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 22142477,
      "type": "Backhoe",
      "location": "0452 Doe Crossing Circle",
      "last_maintained": "06-May-2019"
    },
    {
      "status": "green",
      "train_id": 881387435,
      "type": "Skid-Steer",
      "location": "05 Rigney Hill",
      "last_maintained": "25-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 393212935,
      "type": "Compactor",
      "location": "8925 Menomonie Court",
      "last_maintained": "10-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 370404448,
      "type": "Dump Truck",
      "location": "812 Barby Pass",
      "last_maintained": "26-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 226267090,
      "type": "Dragline",
      "location": "55 Ridge Oak Avenue",
      "last_maintained": "17-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 64212727,
      "type": "Backhoe",
      "location": "696 Jana Hill",
      "last_maintained": "30-Jan-2020"
    },
    {
      "status": "error",
      "train_id": 200349532,
      "type": "Excavator",
      "location": "765 Muir Court",
      "last_maintained": "20-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 469838866,
      "type": "Backhoe",
      "location": "40 Moulton Hill",
      "last_maintained": "08-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 813625720,
      "type": "Backhoe",
      "location": "65306 Drewry Hill",
      "last_maintained": "15-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 195099949,
      "type": "Backhoe",
      "location": "7493 Arrowood Trail",
      "last_maintained": "07-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 842699207,
      "type": "Bulldozer",
      "location": "2234 Northridge Drive",
      "last_maintained": "03-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 390176771,
      "type": "Scraper",
      "location": "1507 Columbus Drive",
      "last_maintained": "07-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 470477706,
      "type": "Backhoe",
      "location": "634 2nd Road",
      "last_maintained": "14-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 337657988,
      "type": "Grader",
      "location": "7 Northwestern Street",
      "last_maintained": "18-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 567302321,
      "type": "Bulldozer",
      "location": "8093 Lindbergh Pass",
      "last_maintained": "17-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 454656350,
      "type": "Compactor",
      "location": "57 Hagan Drive",
      "last_maintained": "05-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 991305225,
      "type": "Scraper",
      "location": "88999 Merchant Center",
      "last_maintained": "08-Apr-2018"
    },
    {
      "status": "green",
      "train_id": 433668321,
      "type": "Crawler",
      "location": "6530 Cardinal Place",
      "last_maintained": "17-May-2018"
    },
    {
      "status": "success",
      "train_id": 790704736,
      "type": "Dump Truck",
      "location": "64 Carioca Place",
      "last_maintained": "18-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 346265124,
      "type": "Excavator",
      "location": "8275 Vidon Drive",
      "last_maintained": "13-Apr-2019"
    },
    {
      "status": "success",
      "train_id": 884091875,
      "type": "Skid-Steer",
      "location": "7 Oxford Street",
      "last_maintained": "21-Dec-2019"
    },
    {
      "status": "green",
      "train_id": 884736829,
      "type": "Grader",
      "location": "584 Steensland Terrace",
      "last_maintained": "02-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 970470555,
      "type": "Compactor",
      "location": "51799 Eagle Crest Pass",
      "last_maintained": "04-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 344834227,
      "type": "Compactor",
      "location": "515 David Terrace",
      "last_maintained": "26-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 625202870,
      "type": "Crawler",
      "location": "310 Del Mar Point",
      "last_maintained": "04-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 912358341,
      "type": "Grader",
      "location": "96 Sommers Road",
      "last_maintained": "20-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 523405934,
      "type": "Crawler",
      "location": "0265 Westend Crossing",
      "last_maintained": "26-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 232295678,
      "type": "Trencher",
      "location": "5 Bonner Alley",
      "last_maintained": "23-May-2021"
    },
    {
      "status": "success",
      "train_id": 110686054,
      "type": "Compactor",
      "location": "84594 Helena Crossing",
      "last_maintained": "06-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 986989677,
      "type": "Crawler",
      "location": "16 Bellgrove Pass",
      "last_maintained": "23-Nov-2018"
    },
    {
      "status": "green",
      "train_id": 47337768,
      "type": "Bulldozer",
      "location": "2 Pleasure Crossing",
      "last_maintained": "21-Apr-2021"
    },
    {
      "status": "error",
      "train_id": 502762,
      "type": "Bulldozer",
      "location": "957 Bashford Junction",
      "last_maintained": "22-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 331301196,
      "type": "Trencher",
      "location": "24 Warrior Drive",
      "last_maintained": "10-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 458984615,
      "type": "Grader",
      "location": "6 Packers Alley",
      "last_maintained": "07-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 514236488,
      "type": "Skid-Steer",
      "location": "55 Sullivan Junction",
      "last_maintained": "30-Jan-2020"
    },
    {
      "status": "green",
      "train_id": 277122705,
      "type": "Crawler",
      "location": "2519 Golden Leaf Way",
      "last_maintained": "03-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 135727732,
      "type": "Compactor",
      "location": "8 Bowman Hill",
      "last_maintained": "30-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 564416056,
      "type": "Trencher",
      "location": "1912 Elka Drive",
      "last_maintained": "24-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 890763819,
      "type": "Excavator",
      "location": "6520 North Court",
      "last_maintained": "15-Jan-2020"
    },
    {
      "status": "green",
      "train_id": 182546422,
      "type": "Dragline",
      "location": "72 Spohn Point",
      "last_maintained": "18-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 334911198,
      "type": "Skid-Steer",
      "location": "62405 Grasskamp Point",
      "last_maintained": "13-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 860466563,
      "type": "Backhoe",
      "location": "96 Arapahoe Junction",
      "last_maintained": "12-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 50413874,
      "type": "Grader",
      "location": "53 Fordem Place",
      "last_maintained": "21-May-2019"
    },
    {
      "status": "green",
      "train_id": 317492920,
      "type": "Skid-Steer",
      "location": "3 Sachs Terrace",
      "last_maintained": "25-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 530467987,
      "type": "Backhoe",
      "location": "5 Shelley Park",
      "last_maintained": "28-May-2019"
    },
    {
      "status": "success",
      "train_id": 348490143,
      "type": "Compactor",
      "location": "66477 Del Sol Park",
      "last_maintained": "29-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 606462727,
      "type": "Excavator",
      "location": "67 Manitowish Place",
      "last_maintained": "30-May-2020"
    },
    {
      "status": "error",
      "train_id": 987818345,
      "type": "Excavator",
      "location": "9 Dapin Parkway",
      "last_maintained": "23-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 607821528,
      "type": "Trencher",
      "location": "4253 Burrows Drive",
      "last_maintained": "07-Nov-2021"
    },
    {
      "status": "green",
      "train_id": 903984467,
      "type": "Backhoe",
      "location": "45 Oakridge Drive",
      "last_maintained": "17-Jan-2020"
    },
    {
      "status": "green",
      "train_id": 476474051,
      "type": "Backhoe",
      "location": "778 Tomscot Alley",
      "last_maintained": "28-May-2021"
    },
    {
      "status": "success",
      "train_id": 432626609,
      "type": "Dump Truck",
      "location": "5 Eagan Lane",
      "last_maintained": "17-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 945171312,
      "type": "Trencher",
      "location": "99 Summit Road",
      "last_maintained": "12-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 621275832,
      "type": "Scraper",
      "location": "1 Barby Circle",
      "last_maintained": "07-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 601060423,
      "type": "Trencher",
      "location": "69 Cambridge Trail",
      "last_maintained": "29-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 760509668,
      "type": "Grader",
      "location": "85155 Anzinger Terrace",
      "last_maintained": "19-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 55060727,
      "type": "Dragline",
      "location": "4 Portage Drive",
      "last_maintained": "13-Mar-2019"
    },
    {
      "status": "error",
      "train_id": 690386023,
      "type": "Bulldozer",
      "location": "80 Hayes Avenue",
      "last_maintained": "03-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 345849939,
      "type": "Skid-Steer",
      "location": "63 Thackeray Drive",
      "last_maintained": "21-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 908906870,
      "type": "Bulldozer",
      "location": "6689 Pleasure Drive",
      "last_maintained": "21-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 165392322,
      "type": "Scraper",
      "location": "488 Emmet Avenue",
      "last_maintained": "27-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 488301886,
      "type": "Bulldozer",
      "location": "2333 Maywood Center",
      "last_maintained": "07-Jan-2020"
    },
    {
      "status": "success",
      "train_id": 437603502,
      "type": "Trencher",
      "location": "8 Tennyson Circle",
      "last_maintained": "20-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 432203189,
      "type": "Grader",
      "location": "10345 Marcy Trail",
      "last_maintained": "06-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 169087377,
      "type": "Backhoe",
      "location": "82950 Forster Street",
      "last_maintained": "18-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 149643696,
      "type": "Scraper",
      "location": "5 Manitowish Court",
      "last_maintained": "05-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 705553710,
      "type": "Scraper",
      "location": "05 Mesta Road",
      "last_maintained": "29-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 616169939,
      "type": "Dragline",
      "location": "11750 Welch Circle",
      "last_maintained": "06-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 521882306,
      "type": "Bulldozer",
      "location": "8 Warner Parkway",
      "last_maintained": "02-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 985550876,
      "type": "Crawler",
      "location": "0449 Amoth Hill",
      "last_maintained": "08-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 297338065,
      "type": "Backhoe",
      "location": "19 Logan Drive",
      "last_maintained": "25-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 337450073,
      "type": "Bulldozer",
      "location": "04 Ryan Lane",
      "last_maintained": "10-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 532071109,
      "type": "Bulldozer",
      "location": "288 Montana Hill",
      "last_maintained": "29-Jun-2019"
    },
    {
      "status": "green",
      "train_id": 380025626,
      "type": "Skid-Steer",
      "location": "090 Badeau Avenue",
      "last_maintained": "08-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 940935161,
      "type": "Crawler",
      "location": "2769 Esch Avenue",
      "last_maintained": "07-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 807784008,
      "type": "Trencher",
      "location": "000 Almo Center",
      "last_maintained": "09-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 722317771,
      "type": "Excavator",
      "location": "5402 Sheridan Lane",
      "last_maintained": "11-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 367259083,
      "type": "Skid-Steer",
      "location": "16551 Beilfuss Terrace",
      "last_maintained": "06-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 759566555,
      "type": "Compactor",
      "location": "785 Badeau Trail",
      "last_maintained": "12-May-2021"
    },
    {
      "status": "error",
      "train_id": 321623247,
      "type": "Compactor",
      "location": "1062 South Plaza",
      "last_maintained": "04-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 578354926,
      "type": "Grader",
      "location": "79479 Portage Lane",
      "last_maintained": "19-Jun-2021"
    },
    {
      "status": "error",
      "train_id": 875646298,
      "type": "Bulldozer",
      "location": "8 Dottie Parkway",
      "last_maintained": "05-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 406462761,
      "type": "Crawler",
      "location": "7401 Comanche Plaza",
      "last_maintained": "22-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 17357807,
      "type": "Skid-Steer",
      "location": "527 Morrow Court",
      "last_maintained": "20-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 590436419,
      "type": "Crawler",
      "location": "6480 Cody Circle",
      "last_maintained": "13-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 696399743,
      "type": "Trencher",
      "location": "80 Garrison Plaza",
      "last_maintained": "19-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 837793160,
      "type": "Crawler",
      "location": "179 Daystar Center",
      "last_maintained": "30-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 174272229,
      "type": "Dump Truck",
      "location": "72 Moland Center",
      "last_maintained": "28-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 106695615,
      "type": "Backhoe",
      "location": "604 Muir Lane",
      "last_maintained": "23-Jan-2021"
    },
    {
      "status": "error",
      "train_id": 745181497,
      "type": "Trencher",
      "location": "81 Mandrake Junction",
      "last_maintained": "28-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 573091250,
      "type": "Dump Truck",
      "location": "937 Holmberg Street",
      "last_maintained": "04-May-2018"
    },
    {
      "status": "success",
      "train_id": 970317379,
      "type": "Dump Truck",
      "location": "19022 Rieder Lane",
      "last_maintained": "17-Nov-2021"
    },
    {
      "status": "green",
      "train_id": 670544056,
      "type": "Crawler",
      "location": "86 Lukken Junction",
      "last_maintained": "04-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 495765364,
      "type": "Skid-Steer",
      "location": "1 American Ash Circle",
      "last_maintained": "02-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 720791346,
      "type": "Trencher",
      "location": "08076 Tony Alley",
      "last_maintained": "19-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 467284299,
      "type": "Crawler",
      "location": "29232 Kropf Lane",
      "last_maintained": "19-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 650774475,
      "type": "Backhoe",
      "location": "6022 Golf Street",
      "last_maintained": "06-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 233309528,
      "type": "Grader",
      "location": "6 Pawling Way",
      "last_maintained": "12-May-2020"
    },
    {
      "status": "error",
      "train_id": 253287484,
      "type": "Crawler",
      "location": "90002 Welch Way",
      "last_maintained": "26-Feb-2018"
    },
    {
      "status": "success",
      "train_id": 15093222,
      "type": "Dump Truck",
      "location": "54639 Reindahl Plaza",
      "last_maintained": "23-May-2021"
    },
    {
      "status": "green",
      "train_id": 78439123,
      "type": "Skid-Steer",
      "location": "28 Northwestern Hill",
      "last_maintained": "16-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 358023680,
      "type": "Skid-Steer",
      "location": "22 Arizona Drive",
      "last_maintained": "17-Dec-2020"
    },
    {
      "status": "error",
      "train_id": 501069987,
      "type": "Compactor",
      "location": "650 Mockingbird Circle",
      "last_maintained": "12-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 653078990,
      "type": "Dump Truck",
      "location": "81 Green Ridge Way",
      "last_maintained": "05-May-2020"
    },
    {
      "status": "error",
      "train_id": 401613563,
      "type": "Compactor",
      "location": "99 Golf Road",
      "last_maintained": "15-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 852370199,
      "type": "Skid-Steer",
      "location": "8693 6th Place",
      "last_maintained": "24-Dec-2019"
    },
    {
      "status": "green",
      "train_id": 714690501,
      "type": "Grader",
      "location": "1 Quincy Lane",
      "last_maintained": "06-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 735797427,
      "type": "Dragline",
      "location": "57250 Twin Pines Crossing",
      "last_maintained": "13-Feb-2018"
    },
    {
      "status": "success",
      "train_id": 415040380,
      "type": "Trencher",
      "location": "684 Blaine Center",
      "last_maintained": "09-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 940421744,
      "type": "Trencher",
      "location": "2018 Warbler Crossing",
      "last_maintained": "14-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 454027949,
      "type": "Bulldozer",
      "location": "30178 Anderson Plaza",
      "last_maintained": "17-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 317519407,
      "type": "Bulldozer",
      "location": "72409 International Park",
      "last_maintained": "16-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 590493170,
      "type": "Bulldozer",
      "location": "721 Swallow Way",
      "last_maintained": "26-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 246077762,
      "type": "Scraper",
      "location": "26 Jenifer Lane",
      "last_maintained": "21-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 312396128,
      "type": "Grader",
      "location": "68 Merry Circle",
      "last_maintained": "31-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 180577838,
      "type": "Excavator",
      "location": "0650 Briar Crest Avenue",
      "last_maintained": "18-Oct-2020"
    },
    {
      "status": "green",
      "train_id": 199179907,
      "type": "Bulldozer",
      "location": "7331 Old Gate Pass",
      "last_maintained": "01-Aug-2021"
    },
    {
      "status": "error",
      "train_id": 249539459,
      "type": "Backhoe",
      "location": "747 Mccormick Terrace",
      "last_maintained": "29-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 257783690,
      "type": "Scraper",
      "location": "2377 Northfield Center",
      "last_maintained": "19-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 38490571,
      "type": "Trencher",
      "location": "5684 Veith Court",
      "last_maintained": "01-Dec-2019"
    },
    {
      "status": "green",
      "train_id": 841954196,
      "type": "Crawler",
      "location": "97 Lunder Drive",
      "last_maintained": "27-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 397002008,
      "type": "Skid-Steer",
      "location": "39 Beilfuss Park",
      "last_maintained": "06-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 756724367,
      "type": "Backhoe",
      "location": "60858 Manitowish Circle",
      "last_maintained": "20-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 881422892,
      "type": "Grader",
      "location": "5 Rusk Trail",
      "last_maintained": "31-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 215722631,
      "type": "Compactor",
      "location": "8 Morning Pass",
      "last_maintained": "07-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 353304562,
      "type": "Dump Truck",
      "location": "13787 Northview Drive",
      "last_maintained": "30-Oct-2019"
    },
    {
      "status": "green",
      "train_id": 188014391,
      "type": "Compactor",
      "location": "54147 Sunnyside Crossing",
      "last_maintained": "12-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 839131415,
      "type": "Skid-Steer",
      "location": "0220 Pine View Point",
      "last_maintained": "16-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 59180454,
      "type": "Trencher",
      "location": "228 Grasskamp Way",
      "last_maintained": "22-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 734512147,
      "type": "Skid-Steer",
      "location": "13655 Eastwood Trail",
      "last_maintained": "30-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 594686440,
      "type": "Crawler",
      "location": "36568 Shasta Center",
      "last_maintained": "07-Dec-2019"
    },
    {
      "status": "success",
      "train_id": 702314426,
      "type": "Compactor",
      "location": "41513 Pearson Way",
      "last_maintained": "10-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 61888846,
      "type": "Compactor",
      "location": "78664 Gina Alley",
      "last_maintained": "31-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 765089072,
      "type": "Excavator",
      "location": "3452 Westend Drive",
      "last_maintained": "14-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 698968534,
      "type": "Bulldozer",
      "location": "4757 Northwestern Road",
      "last_maintained": "17-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 833767752,
      "type": "Compactor",
      "location": "03 Vahlen Circle",
      "last_maintained": "16-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 754822576,
      "type": "Grader",
      "location": "1 Hagan Junction",
      "last_maintained": "09-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 918175858,
      "type": "Dump Truck",
      "location": "3 Autumn Leaf Place",
      "last_maintained": "05-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 511924551,
      "type": "Skid-Steer",
      "location": "98 Eagle Crest Hill",
      "last_maintained": "14-Mar-2019"
    },
    {
      "status": "success",
      "train_id": 387665528,
      "type": "Crawler",
      "location": "593 Thompson Terrace",
      "last_maintained": "02-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 603836367,
      "type": "Dragline",
      "location": "205 Elka Parkway",
      "last_maintained": "01-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 886599239,
      "type": "Trencher",
      "location": "132 Troy Circle",
      "last_maintained": "02-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 488886227,
      "type": "Dump Truck",
      "location": "5919 Sachs Lane",
      "last_maintained": "29-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 169903247,
      "type": "Bulldozer",
      "location": "0348 Dixon Pass",
      "last_maintained": "06-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 247957782,
      "type": "Dump Truck",
      "location": "3733 Elka Road",
      "last_maintained": "25-May-2021"
    },
    {
      "status": "success",
      "train_id": 481457684,
      "type": "Dump Truck",
      "location": "15209 Transport Circle",
      "last_maintained": "19-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 908236733,
      "type": "Grader",
      "location": "8803 Pepper Wood Road",
      "last_maintained": "12-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 305722313,
      "type": "Excavator",
      "location": "3507 Everett Parkway",
      "last_maintained": "18-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 911195506,
      "type": "Skid-Steer",
      "location": "83 Jenna Crossing",
      "last_maintained": "14-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 739806637,
      "type": "Dump Truck",
      "location": "3 Artisan Lane",
      "last_maintained": "22-Jun-2018"
    },
    {
      "status": "green",
      "train_id": 209717497,
      "type": "Trencher",
      "location": "430 Johnson Point",
      "last_maintained": "14-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 612233508,
      "type": "Excavator",
      "location": "6625 Claremont Parkway",
      "last_maintained": "23-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 673413108,
      "type": "Backhoe",
      "location": "02323 Chinook Parkway",
      "last_maintained": "10-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 240316340,
      "type": "Scraper",
      "location": "6637 Hovde Alley",
      "last_maintained": "30-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 622235799,
      "type": "Crawler",
      "location": "532 Briar Crest Crossing",
      "last_maintained": "24-May-2019"
    },
    {
      "status": "success",
      "train_id": 262609240,
      "type": "Dump Truck",
      "location": "76 Arizona Way",
      "last_maintained": "18-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 214384384,
      "type": "Dump Truck",
      "location": "91 Kennedy Circle",
      "last_maintained": "10-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 128307919,
      "type": "Grader",
      "location": "40907 Sheridan Road",
      "last_maintained": "14-Mar-2018"
    },
    {
      "status": "success",
      "train_id": 524280919,
      "type": "Excavator",
      "location": "5011 Mariners Cove Park",
      "last_maintained": "23-Jun-2018"
    },
    {
      "status": "error",
      "train_id": 338159424,
      "type": "Scraper",
      "location": "9429 Clyde Gallagher Road",
      "last_maintained": "05-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 495239579,
      "type": "Dragline",
      "location": "23 Porter Road",
      "last_maintained": "13-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 12478464,
      "type": "Skid-Steer",
      "location": "747 Forest Plaza",
      "last_maintained": "19-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 509471753,
      "type": "Excavator",
      "location": "197 Monterey Park",
      "last_maintained": "14-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 38929150,
      "type": "Trencher",
      "location": "8587 Messerschmidt Park",
      "last_maintained": "09-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 79955880,
      "type": "Skid-Steer",
      "location": "4909 Sachtjen Court",
      "last_maintained": "25-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 314740828,
      "type": "Dragline",
      "location": "595 Bonner Avenue",
      "last_maintained": "10-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 893039105,
      "type": "Bulldozer",
      "location": "407 Grim Hill",
      "last_maintained": "09-Mar-2021"
    },
    {
      "status": "success",
      "train_id": 147673063,
      "type": "Dragline",
      "location": "3980 Cottonwood Circle",
      "last_maintained": "03-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 864643384,
      "type": "Bulldozer",
      "location": "8412 Rieder Drive",
      "last_maintained": "15-Feb-2018"
    },
    {
      "status": "success",
      "train_id": 144182833,
      "type": "Bulldozer",
      "location": "76 Coolidge Court",
      "last_maintained": "22-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 940596622,
      "type": "Dump Truck",
      "location": "7420 Lillian Alley",
      "last_maintained": "25-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 483158809,
      "type": "Grader",
      "location": "23545 Village Green Lane",
      "last_maintained": "15-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 977032655,
      "type": "Dump Truck",
      "location": "8189 Pleasure Crossing",
      "last_maintained": "06-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 779598980,
      "type": "Compactor",
      "location": "4 Annamark Plaza",
      "last_maintained": "30-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 188953132,
      "type": "Dump Truck",
      "location": "06 Everett Junction",
      "last_maintained": "25-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 395961323,
      "type": "Grader",
      "location": "30485 Waxwing Circle",
      "last_maintained": "16-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 261915764,
      "type": "Excavator",
      "location": "9 Declaration Avenue",
      "last_maintained": "22-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 445462591,
      "type": "Bulldozer",
      "location": "97 Fallview Center",
      "last_maintained": "18-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 916341079,
      "type": "Grader",
      "location": "5205 American Park",
      "last_maintained": "17-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 832466379,
      "type": "Crawler",
      "location": "77079 Manley Center",
      "last_maintained": "04-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 596405939,
      "type": "Dump Truck",
      "location": "7 Shasta Hill",
      "last_maintained": "27-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 896241195,
      "type": "Grader",
      "location": "6029 Dahle Hill",
      "last_maintained": "27-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 999532638,
      "type": "Excavator",
      "location": "875 Fisk Crossing",
      "last_maintained": "03-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 917650251,
      "type": "Crawler",
      "location": "29111 Thackeray Trail",
      "last_maintained": "20-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 873456289,
      "type": "Excavator",
      "location": "89 Carey Avenue",
      "last_maintained": "17-Apr-2020"
    },
    {
      "status": "green",
      "train_id": 280833589,
      "type": "Dragline",
      "location": "8 Amoth Way",
      "last_maintained": "27-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 311972276,
      "type": "Trencher",
      "location": "73 Hazelcrest Terrace",
      "last_maintained": "22-Mar-2019"
    },
    {
      "status": "error",
      "train_id": 870168740,
      "type": "Grader",
      "location": "2109 Green Ridge Parkway",
      "last_maintained": "16-May-2020"
    },
    {
      "status": "success",
      "train_id": 730559136,
      "type": "Backhoe",
      "location": "0414 Hooker Crossing",
      "last_maintained": "12-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 321393309,
      "type": "Compactor",
      "location": "48921 Merchant Avenue",
      "last_maintained": "23-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 888031102,
      "type": "Trencher",
      "location": "3444 Boyd Circle",
      "last_maintained": "18-May-2018"
    },
    {
      "status": "green",
      "train_id": 361282792,
      "type": "Grader",
      "location": "166 Algoma Park",
      "last_maintained": "25-May-2018"
    },
    {
      "status": "error",
      "train_id": 231505221,
      "type": "Skid-Steer",
      "location": "97497 Buell Street",
      "last_maintained": "08-Jan-2019"
    },
    {
      "status": "error",
      "train_id": 346646618,
      "type": "Compactor",
      "location": "3 Lillian Circle",
      "last_maintained": "08-Dec-2020"
    },
    {
      "status": "green",
      "train_id": 112962486,
      "type": "Trencher",
      "location": "6 Arrowood Point",
      "last_maintained": "10-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 630767350,
      "type": "Skid-Steer",
      "location": "5 Thackeray Place",
      "last_maintained": "06-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 67658199,
      "type": "Bulldozer",
      "location": "064 Gulseth Way",
      "last_maintained": "17-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 256308181,
      "type": "Bulldozer",
      "location": "1 Manitowish Plaza",
      "last_maintained": "01-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 277342189,
      "type": "Excavator",
      "location": "5073 Haas Circle",
      "last_maintained": "11-Jun-2020"
    },
    {
      "status": "error",
      "train_id": 304124011,
      "type": "Trencher",
      "location": "068 Loeprich Alley",
      "last_maintained": "01-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 287707562,
      "type": "Bulldozer",
      "location": "315 Portage Junction",
      "last_maintained": "15-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 317279323,
      "type": "Grader",
      "location": "5764 Luster Avenue",
      "last_maintained": "24-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 383893174,
      "type": "Excavator",
      "location": "43166 Parkside Way",
      "last_maintained": "19-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 721567431,
      "type": "Compactor",
      "location": "55567 Cambridge Court",
      "last_maintained": "12-May-2020"
    },
    {
      "status": "success",
      "train_id": 416178704,
      "type": "Backhoe",
      "location": "1 Farwell Junction",
      "last_maintained": "17-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 167763816,
      "type": "Trencher",
      "location": "84 Schurz Place",
      "last_maintained": "18-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 873545613,
      "type": "Excavator",
      "location": "343 Nancy Center",
      "last_maintained": "11-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 113060443,
      "type": "Backhoe",
      "location": "68149 Arrowood Lane",
      "last_maintained": "23-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 150976541,
      "type": "Scraper",
      "location": "3 Clemons Drive",
      "last_maintained": "26-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 205005695,
      "type": "Backhoe",
      "location": "516 Mockingbird Street",
      "last_maintained": "16-May-2019"
    },
    {
      "status": "error",
      "train_id": 245193994,
      "type": "Excavator",
      "location": "489 Rockefeller Pass",
      "last_maintained": "24-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 262554661,
      "type": "Scraper",
      "location": "49502 Twin Pines Parkway",
      "last_maintained": "02-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 910527158,
      "type": "Bulldozer",
      "location": "4825 Anderson Road",
      "last_maintained": "01-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 812604332,
      "type": "Bulldozer",
      "location": "39 Rigney Way",
      "last_maintained": "27-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 204603276,
      "type": "Scraper",
      "location": "68 Warner Hill",
      "last_maintained": "27-Apr-2018"
    },
    {
      "status": "green",
      "train_id": 674626989,
      "type": "Dragline",
      "location": "9 Darwin Pass",
      "last_maintained": "19-May-2020"
    },
    {
      "status": "green",
      "train_id": 842526110,
      "type": "Scraper",
      "location": "773 American Ash Hill",
      "last_maintained": "01-Jan-2020"
    },
    {
      "status": "green",
      "train_id": 494194526,
      "type": "Crawler",
      "location": "1338 Emmet Junction",
      "last_maintained": "18-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 834618452,
      "type": "Excavator",
      "location": "0388 Westridge Place",
      "last_maintained": "04-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 516421591,
      "type": "Excavator",
      "location": "54605 Kropf Alley",
      "last_maintained": "13-Jun-2021"
    },
    {
      "status": "error",
      "train_id": 754552674,
      "type": "Dragline",
      "location": "5 American Park",
      "last_maintained": "25-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 128602435,
      "type": "Crawler",
      "location": "44 Division Street",
      "last_maintained": "21-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 371948665,
      "type": "Dump Truck",
      "location": "57369 Bluestem Park",
      "last_maintained": "05-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 7753701,
      "type": "Dragline",
      "location": "7175 Sauthoff Parkway",
      "last_maintained": "31-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 786864589,
      "type": "Grader",
      "location": "2 Stephen Drive",
      "last_maintained": "26-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 83514366,
      "type": "Dump Truck",
      "location": "39 Bultman Park",
      "last_maintained": "13-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 598285274,
      "type": "Excavator",
      "location": "03 Truax Plaza",
      "last_maintained": "04-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 105422425,
      "type": "Skid-Steer",
      "location": "9886 Continental Trail",
      "last_maintained": "14-Apr-2018"
    },
    {
      "status": "green",
      "train_id": 676254439,
      "type": "Scraper",
      "location": "2 Ronald Regan Street",
      "last_maintained": "15-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 854868005,
      "type": "Scraper",
      "location": "7569 Westerfield Junction",
      "last_maintained": "22-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 357772927,
      "type": "Excavator",
      "location": "1244 Moland Lane",
      "last_maintained": "09-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 215681632,
      "type": "Trencher",
      "location": "4 Esch Junction",
      "last_maintained": "10-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 598613157,
      "type": "Bulldozer",
      "location": "15467 Valley Edge Lane",
      "last_maintained": "01-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 949805288,
      "type": "Backhoe",
      "location": "32 Longview Trail",
      "last_maintained": "28-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 803013913,
      "type": "Excavator",
      "location": "78616 Mendota Alley",
      "last_maintained": "21-May-2021"
    },
    {
      "status": "success",
      "train_id": 893659098,
      "type": "Bulldozer",
      "location": "600 Mayer Place",
      "last_maintained": "03-Mar-2018"
    },
    {
      "status": "green",
      "train_id": 927222781,
      "type": "Backhoe",
      "location": "1091 Mockingbird Parkway",
      "last_maintained": "24-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 712103558,
      "type": "Backhoe",
      "location": "60 Lerdahl Alley",
      "last_maintained": "08-Apr-2019"
    },
    {
      "status": "success",
      "train_id": 373883000,
      "type": "Scraper",
      "location": "16600 Hoffman Lane",
      "last_maintained": "27-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 554417735,
      "type": "Excavator",
      "location": "82 Thompson Alley",
      "last_maintained": "18-Apr-2019"
    },
    {
      "status": "success",
      "train_id": 18158912,
      "type": "Grader",
      "location": "5 Gale Crossing",
      "last_maintained": "12-Mar-2018"
    },
    {
      "status": "green",
      "train_id": 515376467,
      "type": "Crawler",
      "location": "64 Bunting Place",
      "last_maintained": "01-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 62695676,
      "type": "Excavator",
      "location": "9807 Aberg Junction",
      "last_maintained": "15-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 967522438,
      "type": "Trencher",
      "location": "0 Fairview Trail",
      "last_maintained": "17-Nov-2020"
    },
    {
      "status": "green",
      "train_id": 842002006,
      "type": "Crawler",
      "location": "19434 Vernon Plaza",
      "last_maintained": "28-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 542688297,
      "type": "Grader",
      "location": "398 Rowland Way",
      "last_maintained": "07-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 964741703,
      "type": "Dragline",
      "location": "7975 Pine View Place",
      "last_maintained": "28-Mar-2018"
    },
    {
      "status": "green",
      "train_id": 207098260,
      "type": "Scraper",
      "location": "4 Ronald Regan Place",
      "last_maintained": "05-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 503157192,
      "type": "Crawler",
      "location": "67 Carberry Street",
      "last_maintained": "22-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 751078456,
      "type": "Excavator",
      "location": "11 Coleman Junction",
      "last_maintained": "27-Apr-2020"
    },
    {
      "status": "green",
      "train_id": 972682731,
      "type": "Scraper",
      "location": "07 Gale Court",
      "last_maintained": "30-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 633106475,
      "type": "Trencher",
      "location": "6 Orin Alley",
      "last_maintained": "02-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 439593014,
      "type": "Dragline",
      "location": "38 Moland Place",
      "last_maintained": "30-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 589559547,
      "type": "Skid-Steer",
      "location": "31 Summit Street",
      "last_maintained": "16-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 572564776,
      "type": "Backhoe",
      "location": "9 Hagan Drive",
      "last_maintained": "04-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 705983513,
      "type": "Compactor",
      "location": "047 Autumn Leaf Alley",
      "last_maintained": "12-Apr-2020"
    },
    {
      "status": "error",
      "train_id": 189254221,
      "type": "Dragline",
      "location": "5076 Barnett Parkway",
      "last_maintained": "23-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 4044012,
      "type": "Scraper",
      "location": "22 Monica Road",
      "last_maintained": "07-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 90059983,
      "type": "Trencher",
      "location": "26948 Warrior Pass",
      "last_maintained": "21-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 602771604,
      "type": "Crawler",
      "location": "3 Leroy Pass",
      "last_maintained": "01-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 860274301,
      "type": "Crawler",
      "location": "22676 Surrey Way",
      "last_maintained": "27-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 186031316,
      "type": "Bulldozer",
      "location": "0323 Crownhardt Terrace",
      "last_maintained": "30-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 83220516,
      "type": "Crawler",
      "location": "5 Hauk Circle",
      "last_maintained": "07-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 451382676,
      "type": "Skid-Steer",
      "location": "60 Old Gate Trail",
      "last_maintained": "28-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 942780225,
      "type": "Dump Truck",
      "location": "808 Claremont Place",
      "last_maintained": "27-May-2021"
    },
    {
      "status": "success",
      "train_id": 208340045,
      "type": "Bulldozer",
      "location": "14 Shasta Lane",
      "last_maintained": "26-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 136229441,
      "type": "Compactor",
      "location": "48977 Dixon Trail",
      "last_maintained": "05-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 951818032,
      "type": "Scraper",
      "location": "48 Londonderry Avenue",
      "last_maintained": "31-Dec-2020"
    },
    {
      "status": "error",
      "train_id": 767690842,
      "type": "Excavator",
      "location": "830 Bay Hill",
      "last_maintained": "10-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 320119151,
      "type": "Dump Truck",
      "location": "11 Westerfield Terrace",
      "last_maintained": "22-May-2020"
    },
    {
      "status": "error",
      "train_id": 634588919,
      "type": "Dump Truck",
      "location": "65680 Sugar Road",
      "last_maintained": "06-Jan-2018"
    },
    {
      "status": "green",
      "train_id": 69713349,
      "type": "Skid-Steer",
      "location": "22288 Haas Trail",
      "last_maintained": "06-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 920474696,
      "type": "Scraper",
      "location": "2 Transport Place",
      "last_maintained": "18-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 638956384,
      "type": "Grader",
      "location": "3225 Hudson Drive",
      "last_maintained": "12-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 287204917,
      "type": "Scraper",
      "location": "6589 Namekagon Center",
      "last_maintained": "25-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 882955127,
      "type": "Skid-Steer",
      "location": "5253 Golf Point",
      "last_maintained": "09-Apr-2020"
    },
    {
      "status": "green",
      "train_id": 525003217,
      "type": "Backhoe",
      "location": "19 Mifflin Street",
      "last_maintained": "07-May-2021"
    },
    {
      "status": "green",
      "train_id": 516246870,
      "type": "Scraper",
      "location": "734 Chinook Terrace",
      "last_maintained": "26-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 401641881,
      "type": "Crawler",
      "location": "76 Maywood Road",
      "last_maintained": "29-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 242087626,
      "type": "Trencher",
      "location": "7160 Graedel Pass",
      "last_maintained": "08-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 416035423,
      "type": "Skid-Steer",
      "location": "3 Armistice Lane",
      "last_maintained": "30-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 685893149,
      "type": "Skid-Steer",
      "location": "8 Jana Center",
      "last_maintained": "28-Jan-2018"
    },
    {
      "status": "green",
      "train_id": 436674146,
      "type": "Backhoe",
      "location": "958 Carberry Hill",
      "last_maintained": "25-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 378180360,
      "type": "Crawler",
      "location": "0298 Leroy Circle",
      "last_maintained": "25-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 35147128,
      "type": "Skid-Steer",
      "location": "68 5th Plaza",
      "last_maintained": "29-Jun-2018"
    },
    {
      "status": "error",
      "train_id": 690670459,
      "type": "Excavator",
      "location": "89720 Harbort Drive",
      "last_maintained": "12-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 734231628,
      "type": "Compactor",
      "location": "430 Esker Way",
      "last_maintained": "17-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 658530003,
      "type": "Grader",
      "location": "882 Prairie Rose Drive",
      "last_maintained": "09-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 404389542,
      "type": "Excavator",
      "location": "375 Morningstar Way",
      "last_maintained": "29-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 542549866,
      "type": "Grader",
      "location": "82 Grim Road",
      "last_maintained": "07-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 783608215,
      "type": "Excavator",
      "location": "9 Brentwood Trail",
      "last_maintained": "10-May-2020"
    },
    {
      "status": "error",
      "train_id": 824756735,
      "type": "Scraper",
      "location": "069 Monica Way",
      "last_maintained": "14-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 250824823,
      "type": "Excavator",
      "location": "9254 Little Fleur Court",
      "last_maintained": "13-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 505690642,
      "type": "Bulldozer",
      "location": "656 Haas Point",
      "last_maintained": "21-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 877731004,
      "type": "Dragline",
      "location": "69 Cascade Avenue",
      "last_maintained": "09-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 944875981,
      "type": "Scraper",
      "location": "02 Vermont Junction",
      "last_maintained": "01-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 970427385,
      "type": "Grader",
      "location": "940 Weeping Birch Lane",
      "last_maintained": "07-Dec-2017"
    },
    {
      "status": "error",
      "train_id": 946746667,
      "type": "Scraper",
      "location": "0 Clove Avenue",
      "last_maintained": "27-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 973325356,
      "type": "Dragline",
      "location": "88 Myrtle Alley",
      "last_maintained": "11-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 696606620,
      "type": "Dump Truck",
      "location": "84 Manitowish Avenue",
      "last_maintained": "10-May-2021"
    },
    {
      "status": "green",
      "train_id": 376681234,
      "type": "Excavator",
      "location": "2308 Northview Center",
      "last_maintained": "08-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 425780196,
      "type": "Crawler",
      "location": "2876 Shelley Court",
      "last_maintained": "19-Apr-2019"
    },
    {
      "status": "success",
      "train_id": 110989228,
      "type": "Backhoe",
      "location": "8 Kipling Court",
      "last_maintained": "14-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 852250623,
      "type": "Grader",
      "location": "1 Pierstorff Plaza",
      "last_maintained": "14-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 374097393,
      "type": "Skid-Steer",
      "location": "27707 Del Sol Circle",
      "last_maintained": "29-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 200105743,
      "type": "Scraper",
      "location": "7 Barby Circle",
      "last_maintained": "13-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 876592707,
      "type": "Excavator",
      "location": "443 Brentwood Way",
      "last_maintained": "18-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 349421798,
      "type": "Dragline",
      "location": "2843 Gateway Crossing",
      "last_maintained": "08-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 380982861,
      "type": "Excavator",
      "location": "4 Hallows Terrace",
      "last_maintained": "05-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 648936288,
      "type": "Dump Truck",
      "location": "07855 Orin Plaza",
      "last_maintained": "07-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 514727276,
      "type": "Bulldozer",
      "location": "935 Shoshone Street",
      "last_maintained": "25-May-2021"
    },
    {
      "status": "error",
      "train_id": 18811656,
      "type": "Bulldozer",
      "location": "8171 Surrey Parkway",
      "last_maintained": "06-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 96707602,
      "type": "Bulldozer",
      "location": "565 Mcbride Avenue",
      "last_maintained": "02-Nov-2021"
    },
    {
      "status": "green",
      "train_id": 654311089,
      "type": "Bulldozer",
      "location": "24766 Acker Avenue",
      "last_maintained": "14-Dec-2018"
    },
    {
      "status": "success",
      "train_id": 786063129,
      "type": "Trencher",
      "location": "1 Farmco Trail",
      "last_maintained": "15-May-2019"
    },
    {
      "status": "error",
      "train_id": 178135045,
      "type": "Excavator",
      "location": "62719 American Ash Place",
      "last_maintained": "23-May-2021"
    },
    {
      "status": "green",
      "train_id": 75199192,
      "type": "Crawler",
      "location": "75413 Muir Way",
      "last_maintained": "27-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 294504079,
      "type": "Dragline",
      "location": "8 Hoffman Trail",
      "last_maintained": "12-Dec-2020"
    },
    {
      "status": "green",
      "train_id": 238381521,
      "type": "Grader",
      "location": "98 Oriole Way",
      "last_maintained": "03-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 689989298,
      "type": "Dragline",
      "location": "312 Mcguire Court",
      "last_maintained": "04-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 747857318,
      "type": "Bulldozer",
      "location": "553 Ridgeway Court",
      "last_maintained": "24-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 23653447,
      "type": "Backhoe",
      "location": "539 Lakewood Junction",
      "last_maintained": "08-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 914325592,
      "type": "Dump Truck",
      "location": "957 Sloan Avenue",
      "last_maintained": "20-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 540808160,
      "type": "Excavator",
      "location": "5 Gulseth Way",
      "last_maintained": "09-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 398059417,
      "type": "Crawler",
      "location": "2669 Bunting Way",
      "last_maintained": "28-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 27913384,
      "type": "Dragline",
      "location": "0376 Summit Place",
      "last_maintained": "13-May-2018"
    },
    {
      "status": "error",
      "train_id": 934877894,
      "type": "Crawler",
      "location": "6742 Prairieview Point",
      "last_maintained": "17-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 369646825,
      "type": "Crawler",
      "location": "7748 Spaight Hill",
      "last_maintained": "06-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 830515694,
      "type": "Dump Truck",
      "location": "9 Esch Way",
      "last_maintained": "05-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 303794849,
      "type": "Scraper",
      "location": "79 Vermont Junction",
      "last_maintained": "02-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 207018421,
      "type": "Dragline",
      "location": "6241 Porter Crossing",
      "last_maintained": "10-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 129766251,
      "type": "Backhoe",
      "location": "64 Oneill Trail",
      "last_maintained": "24-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 871208274,
      "type": "Skid-Steer",
      "location": "41930 Killdeer Plaza",
      "last_maintained": "31-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 433773597,
      "type": "Skid-Steer",
      "location": "8976 Talisman Center",
      "last_maintained": "10-May-2020"
    },
    {
      "status": "success",
      "train_id": 210556179,
      "type": "Dump Truck",
      "location": "0822 Heath Center",
      "last_maintained": "08-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 869777666,
      "type": "Crawler",
      "location": "53388 Moose Center",
      "last_maintained": "18-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 893721378,
      "type": "Dump Truck",
      "location": "41836 Saint Paul Circle",
      "last_maintained": "16-Jun-2020"
    },
    {
      "status": "green",
      "train_id": 607295079,
      "type": "Scraper",
      "location": "911 Welch Terrace",
      "last_maintained": "02-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 730368418,
      "type": "Grader",
      "location": "037 American Parkway",
      "last_maintained": "02-Dec-2020"
    },
    {
      "status": "green",
      "train_id": 901556050,
      "type": "Dragline",
      "location": "42569 Hanson Park",
      "last_maintained": "05-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 239931364,
      "type": "Grader",
      "location": "38601 Mitchell Hill",
      "last_maintained": "26-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 188388378,
      "type": "Compactor",
      "location": "41 Luster Way",
      "last_maintained": "13-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 823467281,
      "type": "Skid-Steer",
      "location": "2 Esch Trail",
      "last_maintained": "10-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 737147761,
      "type": "Skid-Steer",
      "location": "9874 Stoughton Road",
      "last_maintained": "18-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 503801113,
      "type": "Compactor",
      "location": "95 Debs Place",
      "last_maintained": "02-Apr-2018"
    },
    {
      "status": "green",
      "train_id": 600125386,
      "type": "Backhoe",
      "location": "8536 Hollow Ridge Alley",
      "last_maintained": "13-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 83092918,
      "type": "Grader",
      "location": "1 Hermina Hill",
      "last_maintained": "17-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 590377059,
      "type": "Dump Truck",
      "location": "70227 Debra Lane",
      "last_maintained": "16-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 781216226,
      "type": "Compactor",
      "location": "2 Gerald Street",
      "last_maintained": "30-Jun-2018"
    },
    {
      "status": "green",
      "train_id": 987884104,
      "type": "Dump Truck",
      "location": "28 Eggendart Court",
      "last_maintained": "14-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 524996647,
      "type": "Bulldozer",
      "location": "7 Forest Run Avenue",
      "last_maintained": "02-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 115712022,
      "type": "Dump Truck",
      "location": "1 Meadow Ridge Pass",
      "last_maintained": "07-Mar-2018"
    },
    {
      "status": "green",
      "train_id": 194650176,
      "type": "Scraper",
      "location": "99 Moose Avenue",
      "last_maintained": "06-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 964273973,
      "type": "Excavator",
      "location": "62329 Charing Cross Alley",
      "last_maintained": "23-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 102540093,
      "type": "Trencher",
      "location": "833 Waxwing Road",
      "last_maintained": "13-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 929559658,
      "type": "Trencher",
      "location": "0 Evergreen Place",
      "last_maintained": "17-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 353386324,
      "type": "Scraper",
      "location": "2 Russell Parkway",
      "last_maintained": "25-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 913850558,
      "type": "Dragline",
      "location": "10 Mallory Point",
      "last_maintained": "22-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 155635595,
      "type": "Scraper",
      "location": "4 Northland Court",
      "last_maintained": "01-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 314638090,
      "type": "Skid-Steer",
      "location": "1715 Park Meadow Drive",
      "last_maintained": "05-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 855496689,
      "type": "Grader",
      "location": "4 Sommers Park",
      "last_maintained": "16-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 243817900,
      "type": "Backhoe",
      "location": "2093 Summer Ridge Way",
      "last_maintained": "19-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 904327702,
      "type": "Backhoe",
      "location": "18473 7th Hill",
      "last_maintained": "18-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 234369840,
      "type": "Trencher",
      "location": "6007 Express Court",
      "last_maintained": "03-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 276906006,
      "type": "Scraper",
      "location": "3 Hoffman Alley",
      "last_maintained": "07-Nov-2021"
    },
    {
      "status": "error",
      "train_id": 841312582,
      "type": "Dragline",
      "location": "33 Farwell Center",
      "last_maintained": "26-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 677200198,
      "type": "Bulldozer",
      "location": "5013 Brickson Park Place",
      "last_maintained": "06-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 411845935,
      "type": "Bulldozer",
      "location": "3 Hazelcrest Junction",
      "last_maintained": "09-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 537825215,
      "type": "Trencher",
      "location": "054 Crest Line Parkway",
      "last_maintained": "11-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 846398024,
      "type": "Crawler",
      "location": "2 Stone Corner Plaza",
      "last_maintained": "05-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 494838742,
      "type": "Bulldozer",
      "location": "862 Goodland Point",
      "last_maintained": "31-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 396566625,
      "type": "Grader",
      "location": "06 Namekagon Junction",
      "last_maintained": "06-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 595127748,
      "type": "Trencher",
      "location": "65 Eastlawn Point",
      "last_maintained": "16-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 114377708,
      "type": "Grader",
      "location": "6640 Summit Pass",
      "last_maintained": "02-Jan-2021"
    },
    {
      "status": "error",
      "train_id": 202140893,
      "type": "Backhoe",
      "location": "653 Buena Vista Parkway",
      "last_maintained": "29-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 196518053,
      "type": "Scraper",
      "location": "95226 Welch Pass",
      "last_maintained": "06-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 673648910,
      "type": "Compactor",
      "location": "867 Roth Park",
      "last_maintained": "24-Dec-2019"
    },
    {
      "status": "success",
      "train_id": 604958028,
      "type": "Trencher",
      "location": "1860 Lakewood Gardens Avenue",
      "last_maintained": "13-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 97181874,
      "type": "Scraper",
      "location": "6 Novick Hill",
      "last_maintained": "29-May-2018"
    },
    {
      "status": "success",
      "train_id": 938452330,
      "type": "Backhoe",
      "location": "28383 Loeprich Trail",
      "last_maintained": "08-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 380937948,
      "type": "Crawler",
      "location": "08078 Southridge Road",
      "last_maintained": "12-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 122577833,
      "type": "Trencher",
      "location": "9 Granby Center",
      "last_maintained": "17-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 163863143,
      "type": "Skid-Steer",
      "location": "5718 Atwood Lane",
      "last_maintained": "10-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 356559443,
      "type": "Crawler",
      "location": "92868 Riverside Hill",
      "last_maintained": "23-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 746859186,
      "type": "Dragline",
      "location": "77663 Service Road",
      "last_maintained": "11-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 999273090,
      "type": "Scraper",
      "location": "788 Everett Alley",
      "last_maintained": "27-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 718324985,
      "type": "Bulldozer",
      "location": "840 Huxley Avenue",
      "last_maintained": "21-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 855791150,
      "type": "Dragline",
      "location": "51461 Gerald Point",
      "last_maintained": "21-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 908646244,
      "type": "Skid-Steer",
      "location": "672 Atwood Alley",
      "last_maintained": "17-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 413578108,
      "type": "Backhoe",
      "location": "55203 Leroy Plaza",
      "last_maintained": "23-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 209699624,
      "type": "Dump Truck",
      "location": "598 7th Court",
      "last_maintained": "06-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 152358629,
      "type": "Dragline",
      "location": "09418 Sullivan Place",
      "last_maintained": "21-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 886589974,
      "type": "Dump Truck",
      "location": "96200 Forest Way",
      "last_maintained": "18-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 641439143,
      "type": "Skid-Steer",
      "location": "956 Mayer Plaza",
      "last_maintained": "23-Apr-2020"
    },
    {
      "status": "green",
      "train_id": 692746984,
      "type": "Scraper",
      "location": "3943 Drewry Point",
      "last_maintained": "14-Feb-2019"
    },
    {
      "status": "success",
      "train_id": 801055700,
      "type": "Excavator",
      "location": "071 Delaware Point",
      "last_maintained": "20-Mar-2019"
    },
    {
      "status": "success",
      "train_id": 527308317,
      "type": "Skid-Steer",
      "location": "15 Garrison Parkway",
      "last_maintained": "05-Jun-2018"
    },
    {
      "status": "green",
      "train_id": 295622941,
      "type": "Dump Truck",
      "location": "190 Lakewood Parkway",
      "last_maintained": "18-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 40722312,
      "type": "Scraper",
      "location": "3 Declaration Drive",
      "last_maintained": "20-Jan-2019"
    },
    {
      "status": "error",
      "train_id": 550970489,
      "type": "Compactor",
      "location": "9 Milwaukee Place",
      "last_maintained": "22-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 846950196,
      "type": "Skid-Steer",
      "location": "0588 Brown Terrace",
      "last_maintained": "14-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 644514809,
      "type": "Scraper",
      "location": "1 Vidon Avenue",
      "last_maintained": "03-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 938430196,
      "type": "Dump Truck",
      "location": "25 Judy Drive",
      "last_maintained": "28-Mar-2021"
    },
    {
      "status": "success",
      "train_id": 12914084,
      "type": "Compactor",
      "location": "132 Blackbird Park",
      "last_maintained": "01-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 42057568,
      "type": "Grader",
      "location": "06952 Lawn Way",
      "last_maintained": "15-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 194755029,
      "type": "Excavator",
      "location": "1065 Sheridan Hill",
      "last_maintained": "05-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 34328654,
      "type": "Dragline",
      "location": "94 Knutson Point",
      "last_maintained": "03-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 460692223,
      "type": "Crawler",
      "location": "07913 Harper Place",
      "last_maintained": "14-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 721494404,
      "type": "Backhoe",
      "location": "32 1st Circle",
      "last_maintained": "26-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 757108440,
      "type": "Grader",
      "location": "91 Nova Park",
      "last_maintained": "24-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 81271080,
      "type": "Compactor",
      "location": "3131 Union Drive",
      "last_maintained": "14-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 650097822,
      "type": "Trencher",
      "location": "9 Declaration Road",
      "last_maintained": "06-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 218916728,
      "type": "Dragline",
      "location": "4 Mccormick Lane",
      "last_maintained": "02-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 101229014,
      "type": "Backhoe",
      "location": "9 Division Center",
      "last_maintained": "27-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 38621355,
      "type": "Dragline",
      "location": "56 successwing Lane",
      "last_maintained": "19-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 892400948,
      "type": "Compactor",
      "location": "9 Evergreen Parkway",
      "last_maintained": "11-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 294595326,
      "type": "Scraper",
      "location": "3210 Bellgrove Hill",
      "last_maintained": "24-May-2019"
    },
    {
      "status": "success",
      "train_id": 502369,
      "type": "Scraper",
      "location": "79187 successwing Street",
      "last_maintained": "25-Mar-2021"
    },
    {
      "status": "error",
      "train_id": 275297674,
      "type": "Trencher",
      "location": "12 Larry Center",
      "last_maintained": "16-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 642711823,
      "type": "Skid-Steer",
      "location": "9 Transport Point",
      "last_maintained": "11-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 201355552,
      "type": "Scraper",
      "location": "53 Elmside Crossing",
      "last_maintained": "23-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 48155545,
      "type": "Grader",
      "location": "2 Ridgeway Circle",
      "last_maintained": "16-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 328712141,
      "type": "Grader",
      "location": "2 Lukken Road",
      "last_maintained": "12-Jul-2019"
    },
    {
      "status": "success",
      "train_id": 205543365,
      "type": "Compactor",
      "location": "45042 New Castle Trail",
      "last_maintained": "05-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 914940194,
      "type": "Skid-Steer",
      "location": "28404 Thierer Center",
      "last_maintained": "07-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 878170643,
      "type": "Dump Truck",
      "location": "834 Lien Pass",
      "last_maintained": "21-Jun-2020"
    },
    {
      "status": "error",
      "train_id": 155652535,
      "type": "Backhoe",
      "location": "4 Schmedeman Street",
      "last_maintained": "10-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 147359450,
      "type": "Grader",
      "location": "38 Laurel Way",
      "last_maintained": "02-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 123603723,
      "type": "Excavator",
      "location": "74077 Brickson Park Way",
      "last_maintained": "07-May-2019"
    },
    {
      "status": "success",
      "train_id": 346663496,
      "type": "Scraper",
      "location": "827 Manley Hill",
      "last_maintained": "01-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 491456272,
      "type": "Grader",
      "location": "57 Carpenter Avenue",
      "last_maintained": "20-Apr-2021"
    },
    {
      "status": "error",
      "train_id": 52660627,
      "type": "Grader",
      "location": "22713 Sherman Crossing",
      "last_maintained": "29-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 632005454,
      "type": "Grader",
      "location": "8 John Wall Street",
      "last_maintained": "29-Oct-2020"
    },
    {
      "status": "green",
      "train_id": 856570046,
      "type": "Excavator",
      "location": "92999 Buhler Parkway",
      "last_maintained": "22-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 333926682,
      "type": "Compactor",
      "location": "7 Transport Pass",
      "last_maintained": "30-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 149350194,
      "type": "Dump Truck",
      "location": "68 Susan Court",
      "last_maintained": "28-Aug-2021"
    },
    {
      "status": "error",
      "train_id": 515102841,
      "type": "Bulldozer",
      "location": "636 Melody Way",
      "last_maintained": "18-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 156994373,
      "type": "Backhoe",
      "location": "45769 Arapahoe Point",
      "last_maintained": "27-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 872692451,
      "type": "Dump Truck",
      "location": "1 Kensington Plaza",
      "last_maintained": "08-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 310174405,
      "type": "Trencher",
      "location": "26 Johnson Park",
      "last_maintained": "16-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 584816486,
      "type": "Dragline",
      "location": "067 Blackbird Place",
      "last_maintained": "08-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 686543059,
      "type": "Compactor",
      "location": "2196 Macpherson Avenue",
      "last_maintained": "14-May-2019"
    },
    {
      "status": "green",
      "train_id": 90099734,
      "type": "Scraper",
      "location": "4519 Loeprich Way",
      "last_maintained": "16-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 802880021,
      "type": "Dragline",
      "location": "753 Garrison Court",
      "last_maintained": "26-Dec-2020"
    },
    {
      "status": "green",
      "train_id": 735548661,
      "type": "Bulldozer",
      "location": "41794 Spaight Court",
      "last_maintained": "30-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 995701380,
      "type": "Bulldozer",
      "location": "6 Stuart Terrace",
      "last_maintained": "24-Jan-2018"
    },
    {
      "status": "green",
      "train_id": 124868505,
      "type": "Compactor",
      "location": "3 Eagle Crest Court",
      "last_maintained": "05-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 165563336,
      "type": "Trencher",
      "location": "79806 Randy Lane",
      "last_maintained": "19-Jun-2020"
    },
    {
      "status": "error",
      "train_id": 472058216,
      "type": "Excavator",
      "location": "6198 Hanover Way",
      "last_maintained": "26-Jul-2019"
    },
    {
      "status": "success",
      "train_id": 451207856,
      "type": "Grader",
      "location": "304 Logan Park",
      "last_maintained": "01-Dec-2020"
    },
    {
      "status": "error",
      "train_id": 326798204,
      "type": "Dump Truck",
      "location": "79081 Springview Terrace",
      "last_maintained": "26-Mar-2021"
    },
    {
      "status": "success",
      "train_id": 585172106,
      "type": "Crawler",
      "location": "8 Dakota Way",
      "last_maintained": "04-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 48209689,
      "type": "Trencher",
      "location": "118 Comanche Road",
      "last_maintained": "27-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 315804831,
      "type": "Dump Truck",
      "location": "8 Elgar Junction",
      "last_maintained": "10-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 174803240,
      "type": "Skid-Steer",
      "location": "53 Morningstar Avenue",
      "last_maintained": "27-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 935562935,
      "type": "Dump Truck",
      "location": "08454 Vera Parkway",
      "last_maintained": "24-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 21196870,
      "type": "Backhoe",
      "location": "65477 Leroy Hill",
      "last_maintained": "19-May-2019"
    },
    {
      "status": "green",
      "train_id": 334216200,
      "type": "Backhoe",
      "location": "38592 4th Drive",
      "last_maintained": "20-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 278170070,
      "type": "Dragline",
      "location": "15 Scoville Alley",
      "last_maintained": "25-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 660820512,
      "type": "Skid-Steer",
      "location": "56 Graedel Court",
      "last_maintained": "26-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 228254035,
      "type": "Dump Truck",
      "location": "3882 Macpherson Pass",
      "last_maintained": "20-Jan-2020"
    },
    {
      "status": "error",
      "train_id": 325225286,
      "type": "Bulldozer",
      "location": "7957 Carey Alley",
      "last_maintained": "10-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 503488333,
      "type": "Compactor",
      "location": "48825 Pine View Plaza",
      "last_maintained": "14-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 11555752,
      "type": "Scraper",
      "location": "5543 Northview Point",
      "last_maintained": "09-Oct-2021"
    },
    {
      "status": "error",
      "train_id": 792971432,
      "type": "Compactor",
      "location": "2 Dayton Place",
      "last_maintained": "29-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 545645927,
      "type": "Crawler",
      "location": "1 Ludington Trail",
      "last_maintained": "11-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 53406516,
      "type": "Grader",
      "location": "650 West Crossing",
      "last_maintained": "04-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 646264992,
      "type": "Compactor",
      "location": "50400 Bartelt Way",
      "last_maintained": "21-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 817937683,
      "type": "Excavator",
      "location": "220 Colorado Alley",
      "last_maintained": "15-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 617579045,
      "type": "Excavator",
      "location": "4414 Haas Crossing",
      "last_maintained": "08-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 407962877,
      "type": "Grader",
      "location": "12 Eagle Crest Lane",
      "last_maintained": "05-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 56047574,
      "type": "Compactor",
      "location": "9 Shelley Drive",
      "last_maintained": "22-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 983729328,
      "type": "Scraper",
      "location": "8816 Banding Hill",
      "last_maintained": "26-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 20245168,
      "type": "Dragline",
      "location": "861 Kennedy Terrace",
      "last_maintained": "13-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 899704671,
      "type": "Backhoe",
      "location": "26 Golf View Plaza",
      "last_maintained": "22-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 395831831,
      "type": "Trencher",
      "location": "49741 Rockefeller Crossing",
      "last_maintained": "26-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 697551924,
      "type": "Scraper",
      "location": "90 Southridge Road",
      "last_maintained": "24-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 205979554,
      "type": "Trencher",
      "location": "59684 8th Parkway",
      "last_maintained": "02-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 561828653,
      "type": "Excavator",
      "location": "15 Drewry Terrace",
      "last_maintained": "20-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 898421203,
      "type": "Dragline",
      "location": "06 Fordem Park",
      "last_maintained": "19-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 608638370,
      "type": "Skid-Steer",
      "location": "94 Prairieview Road",
      "last_maintained": "02-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 432696701,
      "type": "Backhoe",
      "location": "4 Glendale Crossing",
      "last_maintained": "04-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 472241240,
      "type": "Dragline",
      "location": "61522 Lotheville Junction",
      "last_maintained": "25-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 462931957,
      "type": "Crawler",
      "location": "99501 Kenwood Crossing",
      "last_maintained": "15-Dec-2018"
    },
    {
      "status": "success",
      "train_id": 458523860,
      "type": "Scraper",
      "location": "76 Sunnyside Circle",
      "last_maintained": "18-May-2020"
    },
    {
      "status": "success",
      "train_id": 43032872,
      "type": "Bulldozer",
      "location": "0457 Mallory Road",
      "last_maintained": "18-Jan-2019"
    },
    {
      "status": "error",
      "train_id": 133487206,
      "type": "Backhoe",
      "location": "3 Gale Way",
      "last_maintained": "02-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 839273445,
      "type": "Compactor",
      "location": "2 Thompson Terrace",
      "last_maintained": "20-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 546945385,
      "type": "Skid-Steer",
      "location": "09408 Old Gate Circle",
      "last_maintained": "03-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 369501814,
      "type": "Excavator",
      "location": "37888 Montana Parkway",
      "last_maintained": "12-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 666875318,
      "type": "Crawler",
      "location": "85 Golf Course Street",
      "last_maintained": "24-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 195583214,
      "type": "Scraper",
      "location": "1 Sunbrook Plaza",
      "last_maintained": "10-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 70040410,
      "type": "Scraper",
      "location": "199 Pennsylvania Street",
      "last_maintained": "18-May-2019"
    },
    {
      "status": "success",
      "train_id": 339121686,
      "type": "Compactor",
      "location": "4 Clarendon Avenue",
      "last_maintained": "19-Jan-2021"
    },
    {
      "status": "error",
      "train_id": 350030539,
      "type": "Trencher",
      "location": "60996 Sunbrook Pass",
      "last_maintained": "30-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 89882422,
      "type": "Dump Truck",
      "location": "9 Oriole Way",
      "last_maintained": "10-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 948212570,
      "type": "Dump Truck",
      "location": "3 Darwin Alley",
      "last_maintained": "22-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 832338513,
      "type": "Backhoe",
      "location": "31 Melvin Point",
      "last_maintained": "27-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 528275082,
      "type": "Trencher",
      "location": "21 Harbort Terrace",
      "last_maintained": "13-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 8740826,
      "type": "Bulldozer",
      "location": "377 Ludington Lane",
      "last_maintained": "13-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 27008610,
      "type": "Dragline",
      "location": "12857 Morningstar Parkway",
      "last_maintained": "02-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 647373983,
      "type": "Dump Truck",
      "location": "17070 Union Alley",
      "last_maintained": "12-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 87261840,
      "type": "Skid-Steer",
      "location": "18 Spaight Park",
      "last_maintained": "15-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 370189946,
      "type": "Scraper",
      "location": "471 Debra Terrace",
      "last_maintained": "13-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 773444034,
      "type": "Bulldozer",
      "location": "2314 Schurz Way",
      "last_maintained": "19-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 782639495,
      "type": "Backhoe",
      "location": "56 Mosinee Trail",
      "last_maintained": "11-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 71843813,
      "type": "Trencher",
      "location": "09290 Tomscot Trail",
      "last_maintained": "09-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 461971249,
      "type": "Crawler",
      "location": "0 Petterle Avenue",
      "last_maintained": "02-May-2020"
    },
    {
      "status": "success",
      "train_id": 575763628,
      "type": "Dump Truck",
      "location": "029 Ramsey Court",
      "last_maintained": "24-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 493058540,
      "type": "Scraper",
      "location": "7515 Browning Place",
      "last_maintained": "25-May-2018"
    },
    {
      "status": "success",
      "train_id": 764072801,
      "type": "Excavator",
      "location": "0191 Monica Point",
      "last_maintained": "25-May-2019"
    },
    {
      "status": "green",
      "train_id": 232207086,
      "type": "Scraper",
      "location": "19068 Forest Crossing",
      "last_maintained": "20-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 367499404,
      "type": "Scraper",
      "location": "3052 Sullivan Lane",
      "last_maintained": "28-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 566151311,
      "type": "Trencher",
      "location": "45249 Everett Alley",
      "last_maintained": "09-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 559165605,
      "type": "Dragline",
      "location": "10 Basil Road",
      "last_maintained": "14-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 461876283,
      "type": "Backhoe",
      "location": "4 Kenwood Avenue",
      "last_maintained": "24-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 383650302,
      "type": "Compactor",
      "location": "454 Ryan Terrace",
      "last_maintained": "24-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 853687118,
      "type": "Grader",
      "location": "5613 Crownhardt Parkway",
      "last_maintained": "08-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 689582105,
      "type": "Crawler",
      "location": "089 Sauthoff Lane",
      "last_maintained": "21-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 287156321,
      "type": "Skid-Steer",
      "location": "8 Quincy Parkway",
      "last_maintained": "01-Feb-2020"
    },
    {
      "status": "success",
      "train_id": 692520058,
      "type": "Trencher",
      "location": "18861 Anniversary Junction",
      "last_maintained": "17-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 820461930,
      "type": "Dragline",
      "location": "32764 Graedel Trail",
      "last_maintained": "14-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 54675835,
      "type": "Grader",
      "location": "9722 Katie Terrace",
      "last_maintained": "08-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 224986067,
      "type": "Bulldozer",
      "location": "5021 Mifflin Center",
      "last_maintained": "02-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 568954211,
      "type": "Dump Truck",
      "location": "5 Bartelt Avenue",
      "last_maintained": "29-May-2018"
    },
    {
      "status": "green",
      "train_id": 983739978,
      "type": "Bulldozer",
      "location": "3891 Weeping Birch Alley",
      "last_maintained": "13-Dec-2017"
    },
    {
      "status": "green",
      "train_id": 571980824,
      "type": "Scraper",
      "location": "70 Buhler Way",
      "last_maintained": "12-Nov-2018"
    },
    {
      "status": "green",
      "train_id": 671718002,
      "type": "Trencher",
      "location": "721 Jenna Park",
      "last_maintained": "30-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 201727201,
      "type": "Compactor",
      "location": "4 Nobel Court",
      "last_maintained": "08-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 388963727,
      "type": "Bulldozer",
      "location": "5 Hanover Parkway",
      "last_maintained": "05-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 284303057,
      "type": "Dump Truck",
      "location": "807 Helena Way",
      "last_maintained": "03-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 364075385,
      "type": "Dragline",
      "location": "474 Grayhawk Parkway",
      "last_maintained": "07-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 224093250,
      "type": "Dragline",
      "location": "939 Onsgard Alley",
      "last_maintained": "26-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 428503865,
      "type": "Dragline",
      "location": "31366 Saint Paul Junction",
      "last_maintained": "26-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 320465666,
      "type": "Dragline",
      "location": "7 Sauthoff Pass",
      "last_maintained": "03-Jan-2020"
    },
    {
      "status": "success",
      "train_id": 554976378,
      "type": "Backhoe",
      "location": "2197 Farwell Circle",
      "last_maintained": "13-Aug-2020"
    },
    {
      "status": "green",
      "train_id": 257384837,
      "type": "Grader",
      "location": "97 Eagan Plaza",
      "last_maintained": "18-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 200693123,
      "type": "Crawler",
      "location": "3211 American Ash Terrace",
      "last_maintained": "11-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 726177222,
      "type": "Dragline",
      "location": "3400 Corry Junction",
      "last_maintained": "14-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 108715908,
      "type": "Trencher",
      "location": "251 Cordelia Crossing",
      "last_maintained": "14-May-2020"
    },
    {
      "status": "success",
      "train_id": 527301529,
      "type": "Excavator",
      "location": "27 Sheridan Trail",
      "last_maintained": "22-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 974952210,
      "type": "Crawler",
      "location": "353 Amoth Parkway",
      "last_maintained": "06-Jun-2020"
    },
    {
      "status": "error",
      "train_id": 19568932,
      "type": "Trencher",
      "location": "17 Cody Crossing",
      "last_maintained": "09-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 816234717,
      "type": "Grader",
      "location": "8 Forest Run Terrace",
      "last_maintained": "13-Dec-2017"
    },
    {
      "status": "error",
      "train_id": 491357865,
      "type": "Bulldozer",
      "location": "190 Kennedy Street",
      "last_maintained": "07-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 60223218,
      "type": "Backhoe",
      "location": "26721 Linden Drive",
      "last_maintained": "20-May-2019"
    },
    {
      "status": "error",
      "train_id": 314338322,
      "type": "Dragline",
      "location": "519 Raven Pass",
      "last_maintained": "11-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 575834324,
      "type": "Scraper",
      "location": "84 Warbler Drive",
      "last_maintained": "26-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 601599722,
      "type": "Trencher",
      "location": "577 Alpine Place",
      "last_maintained": "09-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 144960533,
      "type": "Backhoe",
      "location": "6 Randy Crossing",
      "last_maintained": "24-Oct-2020"
    },
    {
      "status": "green",
      "train_id": 829969449,
      "type": "Dragline",
      "location": "8 Bashford Hill",
      "last_maintained": "14-Jun-2020"
    },
    {
      "status": "green",
      "train_id": 484565002,
      "type": "Crawler",
      "location": "29787 Trailsway Plaza",
      "last_maintained": "09-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 605735820,
      "type": "Grader",
      "location": "6087 Eggendart Hill",
      "last_maintained": "08-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 355734247,
      "type": "Excavator",
      "location": "766 Banding Place",
      "last_maintained": "10-Feb-2020"
    },
    {
      "status": "success",
      "train_id": 761276969,
      "type": "Compactor",
      "location": "01 Bowman Park",
      "last_maintained": "06-Nov-2020"
    },
    {
      "status": "green",
      "train_id": 815070771,
      "type": "Scraper",
      "location": "2 Luster Trail",
      "last_maintained": "11-Mar-2019"
    },
    {
      "status": "success",
      "train_id": 718155808,
      "type": "Skid-Steer",
      "location": "879 Summit Circle",
      "last_maintained": "15-Apr-2019"
    },
    {
      "status": "error",
      "train_id": 64302141,
      "type": "Backhoe",
      "location": "986 Fordem Court",
      "last_maintained": "26-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 742627533,
      "type": "Skid-Steer",
      "location": "3662 Milwaukee Place",
      "last_maintained": "26-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 842652356,
      "type": "Trencher",
      "location": "47 Tony Street",
      "last_maintained": "05-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 245570914,
      "type": "Backhoe",
      "location": "857 Comanche Point",
      "last_maintained": "19-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 26736743,
      "type": "Dragline",
      "location": "84703 South Circle",
      "last_maintained": "16-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 936184542,
      "type": "Backhoe",
      "location": "34457 Darwin Crossing",
      "last_maintained": "03-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 887490698,
      "type": "Dragline",
      "location": "17736 Esch Hill",
      "last_maintained": "14-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 111264713,
      "type": "Bulldozer",
      "location": "31760 Dwight Hill",
      "last_maintained": "17-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 984032271,
      "type": "Bulldozer",
      "location": "368 Stone Corner Junction",
      "last_maintained": "30-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 470384602,
      "type": "Grader",
      "location": "8302 Northwestern Place",
      "last_maintained": "13-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 504108555,
      "type": "Bulldozer",
      "location": "24770 Kropf Road",
      "last_maintained": "16-Jun-2021"
    },
    {
      "status": "green",
      "train_id": 632180344,
      "type": "Trencher",
      "location": "79283 Sommers Plaza",
      "last_maintained": "08-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 536298219,
      "type": "Bulldozer",
      "location": "55 Lighthouse Bay Terrace",
      "last_maintained": "28-May-2019"
    },
    {
      "status": "error",
      "train_id": 63999394,
      "type": "Scraper",
      "location": "1325 Melrose Center",
      "last_maintained": "27-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 371856792,
      "type": "Trencher",
      "location": "8197 Eagle Crest Park",
      "last_maintained": "14-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 568876744,
      "type": "Grader",
      "location": "897 Killdeer Court",
      "last_maintained": "08-Dec-2019"
    },
    {
      "status": "success",
      "train_id": 893495488,
      "type": "Bulldozer",
      "location": "1765 American Trail",
      "last_maintained": "22-May-2019"
    },
    {
      "status": "success",
      "train_id": 435434385,
      "type": "Excavator",
      "location": "81 Becker Center",
      "last_maintained": "18-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 8180428,
      "type": "Crawler",
      "location": "83820 Weeping Birch Terrace",
      "last_maintained": "07-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 168820132,
      "type": "Grader",
      "location": "2879 Bluejay Alley",
      "last_maintained": "10-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 533773625,
      "type": "Bulldozer",
      "location": "195 Memorial Place",
      "last_maintained": "26-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 947692790,
      "type": "Crawler",
      "location": "52486 Fairfield Park",
      "last_maintained": "14-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 863609384,
      "type": "Trencher",
      "location": "3 Graedel Junction",
      "last_maintained": "28-Apr-2021"
    },
    {
      "status": "green",
      "train_id": 702142091,
      "type": "Bulldozer",
      "location": "63 Green Junction",
      "last_maintained": "21-Nov-2017"
    },
    {
      "status": "success",
      "train_id": 248260780,
      "type": "Excavator",
      "location": "0 Jackson Avenue",
      "last_maintained": "11-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 142004723,
      "type": "Scraper",
      "location": "6984 Brown Junction",
      "last_maintained": "13-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 423996865,
      "type": "Dragline",
      "location": "83 Dryden Circle",
      "last_maintained": "09-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 718639446,
      "type": "Crawler",
      "location": "510 Utah Circle",
      "last_maintained": "22-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 907946759,
      "type": "Dragline",
      "location": "1544 Evergreen Plaza",
      "last_maintained": "04-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 226529207,
      "type": "Dump Truck",
      "location": "9 South Drive",
      "last_maintained": "16-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 513472301,
      "type": "Excavator",
      "location": "8 Emmet Place",
      "last_maintained": "04-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 89350367,
      "type": "Excavator",
      "location": "3 Mallory Way",
      "last_maintained": "21-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 929130080,
      "type": "Dragline",
      "location": "895 Lindbergh Court",
      "last_maintained": "23-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 26715224,
      "type": "Dump Truck",
      "location": "2 Bayside Road",
      "last_maintained": "01-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 857530892,
      "type": "Skid-Steer",
      "location": "88072 Summer Ridge Plaza",
      "last_maintained": "07-Dec-2018"
    },
    {
      "status": "success",
      "train_id": 48368213,
      "type": "Backhoe",
      "location": "9476 Eastwood Plaza",
      "last_maintained": "19-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 63869461,
      "type": "Compactor",
      "location": "10 Ilene Trail",
      "last_maintained": "31-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 975802383,
      "type": "Crawler",
      "location": "6629 Clove Alley",
      "last_maintained": "14-Nov-2017"
    },
    {
      "status": "green",
      "train_id": 962069448,
      "type": "Scraper",
      "location": "1 Chive Hill",
      "last_maintained": "05-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 512161464,
      "type": "Bulldozer",
      "location": "17 Brown Place",
      "last_maintained": "06-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 558969280,
      "type": "Bulldozer",
      "location": "06605 Sycamore Plaza",
      "last_maintained": "26-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 210953846,
      "type": "Backhoe",
      "location": "5 Granby Road",
      "last_maintained": "24-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 134075620,
      "type": "Compactor",
      "location": "1 Basil Point",
      "last_maintained": "31-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 149876435,
      "type": "Grader",
      "location": "6650 Kings Hill",
      "last_maintained": "09-May-2019"
    },
    {
      "status": "green",
      "train_id": 723186912,
      "type": "Dragline",
      "location": "58 Barnett Lane",
      "last_maintained": "19-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 980790803,
      "type": "Bulldozer",
      "location": "8 Burning Wood Hill",
      "last_maintained": "15-Mar-2019"
    },
    {
      "status": "success",
      "train_id": 159862643,
      "type": "Dump Truck",
      "location": "33375 Aberg Terrace",
      "last_maintained": "15-May-2020"
    },
    {
      "status": "error",
      "train_id": 951536781,
      "type": "Dragline",
      "location": "9 Farwell Crossing",
      "last_maintained": "11-Nov-2021"
    },
    {
      "status": "success",
      "train_id": 436270245,
      "type": "Dump Truck",
      "location": "2028 Bunker Hill Drive",
      "last_maintained": "13-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 908582385,
      "type": "Crawler",
      "location": "415 Duke Circle",
      "last_maintained": "25-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 507776920,
      "type": "Crawler",
      "location": "3 Goodland Pass",
      "last_maintained": "21-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 788396562,
      "type": "Scraper",
      "location": "7075 Arrowood Lane",
      "last_maintained": "30-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 231064788,
      "type": "Dump Truck",
      "location": "1 Sunnyside Park",
      "last_maintained": "25-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 833854823,
      "type": "Scraper",
      "location": "3 Melrose Drive",
      "last_maintained": "06-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 918763429,
      "type": "Dragline",
      "location": "4782 Maple Wood Junction",
      "last_maintained": "12-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 485717302,
      "type": "Trencher",
      "location": "1384 Morningstar Pass",
      "last_maintained": "27-Mar-2019"
    },
    {
      "status": "green",
      "train_id": 507095606,
      "type": "Skid-Steer",
      "location": "3251 Twin Pines Terrace",
      "last_maintained": "01-Nov-2018"
    },
    {
      "status": "green",
      "train_id": 753727614,
      "type": "Compactor",
      "location": "8 Summer Ridge Alley",
      "last_maintained": "14-Jun-2019"
    },
    {
      "status": "green",
      "train_id": 120733431,
      "type": "Excavator",
      "location": "58776 Old Gate Trail",
      "last_maintained": "24-Jan-2021"
    },
    {
      "status": "green",
      "train_id": 208577768,
      "type": "Dump Truck",
      "location": "07 Springs Terrace",
      "last_maintained": "11-Aug-2018"
    },
    {
      "status": "success",
      "train_id": 858810010,
      "type": "Compactor",
      "location": "45383 Carpenter Plaza",
      "last_maintained": "29-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 185316873,
      "type": "Compactor",
      "location": "64 Sutherland Place",
      "last_maintained": "13-Nov-2019"
    },
    {
      "status": "success",
      "train_id": 742588186,
      "type": "Skid-Steer",
      "location": "91 Spohn Parkway",
      "last_maintained": "13-Aug-2019"
    },
    {
      "status": "error",
      "train_id": 80145440,
      "type": "Trencher",
      "location": "89 Raven Hill",
      "last_maintained": "29-May-2021"
    },
    {
      "status": "success",
      "train_id": 456178376,
      "type": "Bulldozer",
      "location": "6798 Arapahoe Center",
      "last_maintained": "23-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 760384516,
      "type": "Trencher",
      "location": "3513 Carey Court",
      "last_maintained": "16-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 837956193,
      "type": "Grader",
      "location": "9 Sloan Road",
      "last_maintained": "05-Mar-2019"
    },
    {
      "status": "error",
      "train_id": 914170296,
      "type": "Compactor",
      "location": "99055 Lillian Plaza",
      "last_maintained": "24-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 147010997,
      "type": "Dragline",
      "location": "3 Scoville Place",
      "last_maintained": "29-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 965821564,
      "type": "Dump Truck",
      "location": "7 Melrose Point",
      "last_maintained": "17-Dec-2018"
    },
    {
      "status": "green",
      "train_id": 610024958,
      "type": "Scraper",
      "location": "5 Butterfield Plaza",
      "last_maintained": "10-May-2020"
    },
    {
      "status": "success",
      "train_id": 798757048,
      "type": "Grader",
      "location": "46 Rigney Parkway",
      "last_maintained": "19-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 566516145,
      "type": "Grader",
      "location": "2745 Kropf Alley",
      "last_maintained": "07-Dec-2020"
    },
    {
      "status": "error",
      "train_id": 266922732,
      "type": "Dump Truck",
      "location": "52015 Pleasure Crossing",
      "last_maintained": "07-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 281766448,
      "type": "Compactor",
      "location": "183 Walton Trail",
      "last_maintained": "07-Jan-2021"
    },
    {
      "status": "error",
      "train_id": 500704415,
      "type": "Backhoe",
      "location": "7 Muir Street",
      "last_maintained": "11-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 490601108,
      "type": "Compactor",
      "location": "25126 Sutherland Plaza",
      "last_maintained": "30-May-2018"
    },
    {
      "status": "error",
      "train_id": 86388473,
      "type": "Compactor",
      "location": "01248 Dakota Pass",
      "last_maintained": "03-Feb-2020"
    },
    {
      "status": "green",
      "train_id": 634323480,
      "type": "Excavator",
      "location": "25 Hayes Park",
      "last_maintained": "28-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 56634489,
      "type": "Dump Truck",
      "location": "0 Warbler Center",
      "last_maintained": "16-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 753936169,
      "type": "Excavator",
      "location": "72012 Thierer Parkway",
      "last_maintained": "29-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 183066846,
      "type": "Dragline",
      "location": "0413 Warbler Center",
      "last_maintained": "08-Jun-2018"
    },
    {
      "status": "green",
      "train_id": 941439801,
      "type": "Trencher",
      "location": "40 Blue Bill Park Hill",
      "last_maintained": "27-Jan-2021"
    },
    {
      "status": "success",
      "train_id": 113789493,
      "type": "Compactor",
      "location": "43 Spohn Court",
      "last_maintained": "01-May-2021"
    },
    {
      "status": "error",
      "train_id": 601104426,
      "type": "Bulldozer",
      "location": "6 East Way",
      "last_maintained": "01-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 128071651,
      "type": "Dump Truck",
      "location": "1593 Londonderry Junction",
      "last_maintained": "01-May-2021"
    },
    {
      "status": "green",
      "train_id": 432504103,
      "type": "Backhoe",
      "location": "97 Graceland Junction",
      "last_maintained": "19-Oct-2020"
    },
    {
      "status": "success",
      "train_id": 224664636,
      "type": "Skid-Steer",
      "location": "33 North Junction",
      "last_maintained": "03-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 676786055,
      "type": "Trencher",
      "location": "26155 Mayer Pass",
      "last_maintained": "09-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 672586096,
      "type": "Dragline",
      "location": "355 Waubesa Pass",
      "last_maintained": "24-Nov-2019"
    },
    {
      "status": "green",
      "train_id": 12676654,
      "type": "Grader",
      "location": "0 Burning Wood Place",
      "last_maintained": "07-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 73399880,
      "type": "Dragline",
      "location": "42476 Pankratz Circle",
      "last_maintained": "04-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 672994548,
      "type": "Skid-Steer",
      "location": "19 Kennedy Park",
      "last_maintained": "24-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 324519088,
      "type": "Excavator",
      "location": "6 Havey Park",
      "last_maintained": "27-May-2021"
    },
    {
      "status": "green",
      "train_id": 358754043,
      "type": "Skid-Steer",
      "location": "0317 Glacier Hill Plaza",
      "last_maintained": "30-Jan-2020"
    },
    {
      "status": "error",
      "train_id": 835934499,
      "type": "Bulldozer",
      "location": "52 Kingsford Drive",
      "last_maintained": "21-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 534184554,
      "type": "Dragline",
      "location": "049 Eastwood Center",
      "last_maintained": "16-May-2018"
    },
    {
      "status": "error",
      "train_id": 375306622,
      "type": "Trencher",
      "location": "836 Petterle Terrace",
      "last_maintained": "12-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 594009452,
      "type": "Dragline",
      "location": "1 Sullivan Trail",
      "last_maintained": "02-Mar-2018"
    },
    {
      "status": "success",
      "train_id": 388746801,
      "type": "Backhoe",
      "location": "5 Messerschmidt Lane",
      "last_maintained": "01-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 124190020,
      "type": "Backhoe",
      "location": "0 Sage Trail",
      "last_maintained": "02-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 822794811,
      "type": "Bulldozer",
      "location": "58 Vermont Parkway",
      "last_maintained": "25-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 80216532,
      "type": "Skid-Steer",
      "location": "3 Schlimgen Court",
      "last_maintained": "10-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 765174421,
      "type": "Grader",
      "location": "4 Moulton Street",
      "last_maintained": "04-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 317703895,
      "type": "Skid-Steer",
      "location": "3 Independence Avenue",
      "last_maintained": "05-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 69357077,
      "type": "Dump Truck",
      "location": "18406 Oakridge Circle",
      "last_maintained": "28-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 38769812,
      "type": "Dump Truck",
      "location": "105 Fieldstone Hill",
      "last_maintained": "09-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 902352035,
      "type": "Bulldozer",
      "location": "59 Cascade Way",
      "last_maintained": "20-May-2018"
    },
    {
      "status": "green",
      "train_id": 48046482,
      "type": "Dragline",
      "location": "3 Northview Point",
      "last_maintained": "10-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 412417980,
      "type": "Excavator",
      "location": "8 Pepper Wood Plaza",
      "last_maintained": "11-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 499775240,
      "type": "Excavator",
      "location": "9 Del Mar Crossing",
      "last_maintained": "04-Nov-2020"
    },
    {
      "status": "green",
      "train_id": 341672562,
      "type": "Skid-Steer",
      "location": "4 Shasta Drive",
      "last_maintained": "08-Sep-2020"
    },
    {
      "status": "success",
      "train_id": 792847358,
      "type": "Compactor",
      "location": "642 Ryan Avenue",
      "last_maintained": "05-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 722800042,
      "type": "Crawler",
      "location": "730 Cody Street",
      "last_maintained": "12-Apr-2018"
    },
    {
      "status": "success",
      "train_id": 567014438,
      "type": "Dragline",
      "location": "435 Coleman Center",
      "last_maintained": "05-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 717060048,
      "type": "Excavator",
      "location": "70 Meadow Valley Court",
      "last_maintained": "31-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 832185086,
      "type": "Dragline",
      "location": "83001 Corben Avenue",
      "last_maintained": "09-Aug-2019"
    },
    {
      "status": "error",
      "train_id": 767887247,
      "type": "Scraper",
      "location": "756 Corscot Center",
      "last_maintained": "23-Dec-2017"
    },
    {
      "status": "success",
      "train_id": 448324883,
      "type": "Skid-Steer",
      "location": "7 Ronald Regan Court",
      "last_maintained": "14-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 138481596,
      "type": "Scraper",
      "location": "01 Rockefeller Drive",
      "last_maintained": "31-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 792361180,
      "type": "Grader",
      "location": "7335 John Wall Crossing",
      "last_maintained": "05-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 697286129,
      "type": "Scraper",
      "location": "8410 Thackeray Place",
      "last_maintained": "17-May-2020"
    },
    {
      "status": "green",
      "train_id": 817289575,
      "type": "Excavator",
      "location": "08800 Moose Point",
      "last_maintained": "18-Mar-2021"
    },
    {
      "status": "success",
      "train_id": 331310202,
      "type": "Trencher",
      "location": "01 Pawling Crossing",
      "last_maintained": "22-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 876544691,
      "type": "Grader",
      "location": "92524 Declaration Hill",
      "last_maintained": "11-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 717563989,
      "type": "Trencher",
      "location": "2397 Golden Leaf Way",
      "last_maintained": "02-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 32263409,
      "type": "Scraper",
      "location": "95226 Arizona Plaza",
      "last_maintained": "14-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 573214788,
      "type": "Bulldozer",
      "location": "3 Ramsey Hill",
      "last_maintained": "08-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 598125440,
      "type": "Trencher",
      "location": "8523 Fairview Drive",
      "last_maintained": "05-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 815436099,
      "type": "Excavator",
      "location": "86678 6th Park",
      "last_maintained": "11-Oct-2018"
    },
    {
      "status": "green",
      "train_id": 609143832,
      "type": "Skid-Steer",
      "location": "3 Lake View Junction",
      "last_maintained": "19-Jan-2021"
    },
    {
      "status": "error",
      "train_id": 861870321,
      "type": "Skid-Steer",
      "location": "39 Hoffman Place",
      "last_maintained": "07-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 744812335,
      "type": "Compactor",
      "location": "4 Cottonwood Pass",
      "last_maintained": "28-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 773117610,
      "type": "Excavator",
      "location": "80 Graceland Trail",
      "last_maintained": "04-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 145369292,
      "type": "Grader",
      "location": "07 Eagle Crest Center",
      "last_maintained": "26-Aug-2018"
    },
    {
      "status": "error",
      "train_id": 645785782,
      "type": "Compactor",
      "location": "8 Moose Lane",
      "last_maintained": "29-Mar-2021"
    },
    {
      "status": "green",
      "train_id": 45126037,
      "type": "Crawler",
      "location": "53851 Clemons Circle",
      "last_maintained": "19-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 680118679,
      "type": "Grader",
      "location": "62929 Loomis Circle",
      "last_maintained": "07-May-2018"
    },
    {
      "status": "green",
      "train_id": 268985858,
      "type": "Bulldozer",
      "location": "7301 Dawn Pass",
      "last_maintained": "04-Jul-2021"
    },
    {
      "status": "success",
      "train_id": 543854864,
      "type": "Crawler",
      "location": "2550 Anderson Terrace",
      "last_maintained": "07-Sep-2021"
    },
    {
      "status": "error",
      "train_id": 199107407,
      "type": "Scraper",
      "location": "5 Dennis Trail",
      "last_maintained": "16-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 895297066,
      "type": "Dump Truck",
      "location": "0265 Ramsey Alley",
      "last_maintained": "02-Oct-2018"
    },
    {
      "status": "error",
      "train_id": 327257890,
      "type": "Trencher",
      "location": "6 Buhler Road",
      "last_maintained": "05-Sep-2018"
    },
    {
      "status": "green",
      "train_id": 266946077,
      "type": "Skid-Steer",
      "location": "6 Meadow Vale Street",
      "last_maintained": "03-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 354750827,
      "type": "Skid-Steer",
      "location": "521 Morrow Center",
      "last_maintained": "01-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 386217403,
      "type": "Grader",
      "location": "5 School Hill",
      "last_maintained": "12-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 604857101,
      "type": "Compactor",
      "location": "68 Transport Place",
      "last_maintained": "21-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 486608328,
      "type": "Backhoe",
      "location": "1 Butternut Road",
      "last_maintained": "20-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 837295122,
      "type": "Compactor",
      "location": "216 Kingsford Park",
      "last_maintained": "08-Nov-2018"
    },
    {
      "status": "error",
      "train_id": 5226209,
      "type": "Excavator",
      "location": "3358 Loftsgordon Circle",
      "last_maintained": "11-Sep-2019"
    },
    {
      "status": "error",
      "train_id": 983670396,
      "type": "Skid-Steer",
      "location": "9637 Namekagon Lane",
      "last_maintained": "19-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 121471539,
      "type": "Dragline",
      "location": "877 Saint Paul Alley",
      "last_maintained": "09-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 575174230,
      "type": "Dragline",
      "location": "7324 Anhalt Crossing",
      "last_maintained": "22-Feb-2019"
    },
    {
      "status": "green",
      "train_id": 101203956,
      "type": "Excavator",
      "location": "348 Marquette Place",
      "last_maintained": "11-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 436161657,
      "type": "Scraper",
      "location": "14 Spohn Circle",
      "last_maintained": "08-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 801025381,
      "type": "Trencher",
      "location": "3327 Briar Crest Center",
      "last_maintained": "23-Dec-2020"
    },
    {
      "status": "success",
      "train_id": 600263185,
      "type": "Scraper",
      "location": "89078 Maryland Parkway",
      "last_maintained": "10-May-2020"
    },
    {
      "status": "success",
      "train_id": 709720552,
      "type": "Bulldozer",
      "location": "725 Hayes Street",
      "last_maintained": "25-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 614646739,
      "type": "Trencher",
      "location": "76105 Kensington Pass",
      "last_maintained": "20-Dec-2019"
    },
    {
      "status": "green",
      "train_id": 142922787,
      "type": "Dragline",
      "location": "29 Eagle Crest Crossing",
      "last_maintained": "20-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 505369538,
      "type": "Compactor",
      "location": "31054 Pleasure Trail",
      "last_maintained": "23-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 76125989,
      "type": "Skid-Steer",
      "location": "65 Schiller Place",
      "last_maintained": "29-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 806076539,
      "type": "Dump Truck",
      "location": "62 Grim Lane",
      "last_maintained": "23-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 896612730,
      "type": "Scraper",
      "location": "927 Arkansas Lane",
      "last_maintained": "16-Jun-2020"
    },
    {
      "status": "error",
      "train_id": 904866295,
      "type": "Excavator",
      "location": "6 Talisman Center",
      "last_maintained": "17-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 144934249,
      "type": "Trencher",
      "location": "12 Elmside Trail",
      "last_maintained": "18-May-2019"
    },
    {
      "status": "error",
      "train_id": 873094121,
      "type": "Scraper",
      "location": "07 Gerald Hill",
      "last_maintained": "16-Oct-2021"
    },
    {
      "status": "error",
      "train_id": 911097469,
      "type": "Grader",
      "location": "144 Ohio Park",
      "last_maintained": "03-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 262194567,
      "type": "Grader",
      "location": "27180 Mifflin Drive",
      "last_maintained": "18-Mar-2020"
    },
    {
      "status": "success",
      "train_id": 463277713,
      "type": "Trencher",
      "location": "34 Ruskin Street",
      "last_maintained": "15-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 201710469,
      "type": "Excavator",
      "location": "6 Lunder Center",
      "last_maintained": "20-Nov-2018"
    },
    {
      "status": "success",
      "train_id": 74436820,
      "type": "Excavator",
      "location": "5361 Muir Center",
      "last_maintained": "04-Jan-2020"
    },
    {
      "status": "error",
      "train_id": 646196309,
      "type": "Backhoe",
      "location": "473 Aberg Parkway",
      "last_maintained": "27-May-2018"
    },
    {
      "status": "success",
      "train_id": 248381701,
      "type": "Dump Truck",
      "location": "665 Hooker Hill",
      "last_maintained": "25-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 944541365,
      "type": "Dragline",
      "location": "5581 Hanover Drive",
      "last_maintained": "18-Jun-2018"
    },
    {
      "status": "error",
      "train_id": 350451189,
      "type": "Grader",
      "location": "73 Mendota Avenue",
      "last_maintained": "27-Oct-2019"
    },
    {
      "status": "error",
      "train_id": 660216878,
      "type": "Skid-Steer",
      "location": "6 Meadow Ridge Drive",
      "last_maintained": "05-Nov-2017"
    },
    {
      "status": "success",
      "train_id": 493308553,
      "type": "Compactor",
      "location": "4 Delaware Terrace",
      "last_maintained": "29-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 825872377,
      "type": "Trencher",
      "location": "299 Weeping Birch Street",
      "last_maintained": "27-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 204693169,
      "type": "Excavator",
      "location": "06 Eggendart Plaza",
      "last_maintained": "03-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 536447076,
      "type": "Backhoe",
      "location": "9 Talisman Parkway",
      "last_maintained": "10-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 847642331,
      "type": "Bulldozer",
      "location": "570 Hanover Junction",
      "last_maintained": "23-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 606206920,
      "type": "Skid-Steer",
      "location": "7 Norway Maple Crossing",
      "last_maintained": "17-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 478797785,
      "type": "Crawler",
      "location": "8 Clove Circle",
      "last_maintained": "24-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 467426777,
      "type": "Bulldozer",
      "location": "48 Summerview Circle",
      "last_maintained": "24-May-2019"
    },
    {
      "status": "success",
      "train_id": 783746078,
      "type": "Skid-Steer",
      "location": "98438 Grasskamp Terrace",
      "last_maintained": "01-Dec-2021"
    },
    {
      "status": "green",
      "train_id": 570241495,
      "type": "Dragline",
      "location": "43389 Del Sol Junction",
      "last_maintained": "31-Oct-2021"
    },
    {
      "status": "error",
      "train_id": 667321531,
      "type": "Backhoe",
      "location": "305 Fieldstone Point",
      "last_maintained": "22-Oct-2021"
    },
    {
      "status": "success",
      "train_id": 370426932,
      "type": "Dragline",
      "location": "08693 Crest Line Road",
      "last_maintained": "09-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 925562251,
      "type": "Grader",
      "location": "84 Longview Parkway",
      "last_maintained": "20-Oct-2019"
    },
    {
      "status": "green",
      "train_id": 395602959,
      "type": "Skid-Steer",
      "location": "99 Corry Circle",
      "last_maintained": "15-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 639957450,
      "type": "Scraper",
      "location": "9 Buena Vista Court",
      "last_maintained": "14-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 720639546,
      "type": "Bulldozer",
      "location": "4028 Ramsey Avenue",
      "last_maintained": "27-Jul-2019"
    },
    {
      "status": "success",
      "train_id": 559464933,
      "type": "Scraper",
      "location": "99813 Commercial Plaza",
      "last_maintained": "07-Aug-2021"
    },
    {
      "status": "error",
      "train_id": 412562352,
      "type": "Scraper",
      "location": "8402 Scoville Junction",
      "last_maintained": "25-Sep-2019"
    },
    {
      "status": "green",
      "train_id": 846171969,
      "type": "Bulldozer",
      "location": "59 Harbort Way",
      "last_maintained": "22-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 81135990,
      "type": "Bulldozer",
      "location": "5 Del Sol Crossing",
      "last_maintained": "24-Feb-2018"
    },
    {
      "status": "error",
      "train_id": 892950254,
      "type": "Dump Truck",
      "location": "029 Elgar Park",
      "last_maintained": "31-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 60088930,
      "type": "Dragline",
      "location": "81 Mesta Alley",
      "last_maintained": "05-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 548950617,
      "type": "Crawler",
      "location": "5160 Valley Edge Terrace",
      "last_maintained": "06-Jun-2020"
    },
    {
      "status": "green",
      "train_id": 953231052,
      "type": "Grader",
      "location": "87075 Maywood Pass",
      "last_maintained": "07-Sep-2018"
    },
    {
      "status": "error",
      "train_id": 110822471,
      "type": "Backhoe",
      "location": "89446 Bluejay Hill",
      "last_maintained": "04-May-2019"
    },
    {
      "status": "success",
      "train_id": 24675950,
      "type": "Crawler",
      "location": "9 Stone Corner Plaza",
      "last_maintained": "12-May-2018"
    },
    {
      "status": "error",
      "train_id": 173179774,
      "type": "Scraper",
      "location": "27299 Shoshone Place",
      "last_maintained": "11-Jul-2020"
    },
    {
      "status": "green",
      "train_id": 755215246,
      "type": "Grader",
      "location": "95367 Onsgard Plaza",
      "last_maintained": "01-Dec-2017"
    },
    {
      "status": "error",
      "train_id": 132703055,
      "type": "Backhoe",
      "location": "7 Golf Course Drive",
      "last_maintained": "12-Feb-2021"
    },
    {
      "status": "green",
      "train_id": 797229284,
      "type": "Compactor",
      "location": "59337 Crownhardt Junction",
      "last_maintained": "03-Jan-2018"
    },
    {
      "status": "success",
      "train_id": 479638294,
      "type": "Crawler",
      "location": "5 Paget Drive",
      "last_maintained": "14-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 226897673,
      "type": "Compactor",
      "location": "6 Algoma Plaza",
      "last_maintained": "07-Nov-2020"
    },
    {
      "status": "error",
      "train_id": 651450837,
      "type": "Bulldozer",
      "location": "09 American Terrace",
      "last_maintained": "04-Sep-2021"
    },
    {
      "status": "success",
      "train_id": 899131476,
      "type": "Scraper",
      "location": "9 Union Avenue",
      "last_maintained": "02-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 971006862,
      "type": "Bulldozer",
      "location": "21311 Ridge Oak Road",
      "last_maintained": "28-Jan-2018"
    },
    {
      "status": "error",
      "train_id": 686437736,
      "type": "Backhoe",
      "location": "948 Pennsylvania Pass",
      "last_maintained": "10-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 384565686,
      "type": "Dump Truck",
      "location": "67799 Crownhardt Terrace",
      "last_maintained": "25-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 452645972,
      "type": "Grader",
      "location": "950 Maryland Circle",
      "last_maintained": "17-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 477123912,
      "type": "Dump Truck",
      "location": "9 Morning Plaza",
      "last_maintained": "02-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 699324222,
      "type": "Scraper",
      "location": "3671 American Ash Place",
      "last_maintained": "03-Feb-2020"
    },
    {
      "status": "error",
      "train_id": 748181144,
      "type": "Grader",
      "location": "8313 Northwestern Terrace",
      "last_maintained": "13-Nov-2017"
    },
    {
      "status": "error",
      "train_id": 85010383,
      "type": "Crawler",
      "location": "1370 Derek Hill",
      "last_maintained": "19-May-2020"
    },
    {
      "status": "error",
      "train_id": 319830883,
      "type": "Excavator",
      "location": "1279 Melody Way",
      "last_maintained": "30-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 408523932,
      "type": "Dragline",
      "location": "737 Corscot Center",
      "last_maintained": "17-Feb-2018"
    },
    {
      "status": "green",
      "train_id": 94972191,
      "type": "Scraper",
      "location": "0513 Spohn Place",
      "last_maintained": "31-Aug-2021"
    },
    {
      "status": "success",
      "train_id": 613929554,
      "type": "Excavator",
      "location": "2 Carioca Trail",
      "last_maintained": "05-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 86620872,
      "type": "Excavator",
      "location": "34 Muir Way",
      "last_maintained": "18-Jun-2019"
    },
    {
      "status": "error",
      "train_id": 740828531,
      "type": "Compactor",
      "location": "5 Karstens Avenue",
      "last_maintained": "21-Aug-2019"
    },
    {
      "status": "green",
      "train_id": 43771835,
      "type": "Trencher",
      "location": "4667 2nd Point",
      "last_maintained": "25-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 952709434,
      "type": "Skid-Steer",
      "location": "8 Armistice Way",
      "last_maintained": "13-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 269731384,
      "type": "Skid-Steer",
      "location": "8868 Maywood Alley",
      "last_maintained": "26-Dec-2018"
    },
    {
      "status": "error",
      "train_id": 251681828,
      "type": "Excavator",
      "location": "82 Monument Avenue",
      "last_maintained": "26-Dec-2019"
    },
    {
      "status": "error",
      "train_id": 686625572,
      "type": "Excavator",
      "location": "1240 Jay Road",
      "last_maintained": "28-Apr-2021"
    },
    {
      "status": "success",
      "train_id": 315998136,
      "type": "Crawler",
      "location": "57 Erie Trail",
      "last_maintained": "15-Oct-2019"
    },
    {
      "status": "green",
      "train_id": 67968914,
      "type": "Trencher",
      "location": "4254 Swallow Lane",
      "last_maintained": "17-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 845390146,
      "type": "Scraper",
      "location": "418 Pennsylvania Avenue",
      "last_maintained": "03-Jul-2018"
    },
    {
      "status": "green",
      "train_id": 232372951,
      "type": "Scraper",
      "location": "447 Rieder Road",
      "last_maintained": "24-May-2019"
    },
    {
      "status": "green",
      "train_id": 299758848,
      "type": "Trencher",
      "location": "39 Oriole Junction",
      "last_maintained": "19-Oct-2020"
    },
    {
      "status": "green",
      "train_id": 616692965,
      "type": "Compactor",
      "location": "83597 Ludington Terrace",
      "last_maintained": "14-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 862964050,
      "type": "Bulldozer",
      "location": "5 Spohn Point",
      "last_maintained": "16-Jul-2020"
    },
    {
      "status": "success",
      "train_id": 516790378,
      "type": "Backhoe",
      "location": "89 Springs Court",
      "last_maintained": "16-Sep-2019"
    },
    {
      "status": "success",
      "train_id": 140591011,
      "type": "Scraper",
      "location": "03444 Duke Trail",
      "last_maintained": "25-May-2021"
    },
    {
      "status": "success",
      "train_id": 962366569,
      "type": "Compactor",
      "location": "17635 Swallow Drive",
      "last_maintained": "12-Jan-2020"
    },
    {
      "status": "success",
      "train_id": 129146331,
      "type": "Bulldozer",
      "location": "7562 3rd Center",
      "last_maintained": "19-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 782263467,
      "type": "Dragline",
      "location": "4781 Mesta Plaza",
      "last_maintained": "16-Aug-2021"
    },
    {
      "status": "green",
      "train_id": 665038400,
      "type": "Dragline",
      "location": "5025 Marcy Junction",
      "last_maintained": "21-Apr-2019"
    },
    {
      "status": "green",
      "train_id": 411237753,
      "type": "Crawler",
      "location": "2 Menomonie Place",
      "last_maintained": "16-Oct-2018"
    },
    {
      "status": "success",
      "train_id": 523146329,
      "type": "Grader",
      "location": "36 Shopko Lane",
      "last_maintained": "18-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 888879250,
      "type": "Bulldozer",
      "location": "85394 Amoth Hill",
      "last_maintained": "24-Jul-2019"
    },
    {
      "status": "green",
      "train_id": 624224354,
      "type": "Compactor",
      "location": "7022 Lake View Junction",
      "last_maintained": "16-Mar-2019"
    },
    {
      "status": "error",
      "train_id": 459224703,
      "type": "Dragline",
      "location": "03692 4th Trail",
      "last_maintained": "24-Jan-2019"
    },
    {
      "status": "success",
      "train_id": 900594158,
      "type": "Dump Truck",
      "location": "4 Monterey Place",
      "last_maintained": "22-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 804349703,
      "type": "Compactor",
      "location": "082 Towne Alley",
      "last_maintained": "07-Dec-2017"
    },
    {
      "status": "error",
      "train_id": 469429698,
      "type": "Bulldozer",
      "location": "94 Homewood Court",
      "last_maintained": "11-Mar-2018"
    },
    {
      "status": "error",
      "train_id": 825838068,
      "type": "Bulldozer",
      "location": "3 Buena Vista Drive",
      "last_maintained": "27-Feb-2021"
    },
    {
      "status": "error",
      "train_id": 202517319,
      "type": "Skid-Steer",
      "location": "351 Sachtjen Trail",
      "last_maintained": "14-Aug-2020"
    },
    {
      "status": "error",
      "train_id": 181384434,
      "type": "Bulldozer",
      "location": "80426 Randy Avenue",
      "last_maintained": "20-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 366775129,
      "type": "Grader",
      "location": "57 Butternut Road",
      "last_maintained": "19-Oct-2020"
    },
    {
      "status": "error",
      "train_id": 477709559,
      "type": "Backhoe",
      "location": "349 Corscot Point",
      "last_maintained": "22-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 744320213,
      "type": "Backhoe",
      "location": "89427 Atwood Drive",
      "last_maintained": "08-Jun-2020"
    },
    {
      "status": "success",
      "train_id": 604955800,
      "type": "Compactor",
      "location": "6886 Vidon Circle",
      "last_maintained": "15-Sep-2018"
    },
    {
      "status": "success",
      "train_id": 786693219,
      "type": "Crawler",
      "location": "3785 Westend Place",
      "last_maintained": "24-Jul-2018"
    },
    {
      "status": "success",
      "train_id": 132305346,
      "type": "Crawler",
      "location": "842 Lakewood Street",
      "last_maintained": "24-Aug-2018"
    },
    {
      "status": "green",
      "train_id": 306908210,
      "type": "Compactor",
      "location": "772 Old Shore Drive",
      "last_maintained": "16-Sep-2020"
    },
    {
      "status": "green",
      "train_id": 738210867,
      "type": "Compactor",
      "location": "8 Tomscot Way",
      "last_maintained": "06-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 408524654,
      "type": "Bulldozer",
      "location": "24199 Nelson Point",
      "last_maintained": "26-Nov-2020"
    },
    {
      "status": "success",
      "train_id": 543781127,
      "type": "Bulldozer",
      "location": "057 Spohn Park",
      "last_maintained": "01-Oct-2021"
    },
    {
      "status": "error",
      "train_id": 748962801,
      "type": "Bulldozer",
      "location": "047 Artisan Way",
      "last_maintained": "12-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 210982105,
      "type": "Dragline",
      "location": "153 Bartelt Way",
      "last_maintained": "17-Apr-2018"
    },
    {
      "status": "error",
      "train_id": 585309726,
      "type": "Dump Truck",
      "location": "3687 Rigney Park",
      "last_maintained": "06-Nov-2019"
    },
    {
      "status": "error",
      "train_id": 414650495,
      "type": "Scraper",
      "location": "37 Susan Parkway",
      "last_maintained": "18-Sep-2021"
    },
    {
      "status": "green",
      "train_id": 238228308,
      "type": "Bulldozer",
      "location": "38 Steensland Plaza",
      "last_maintained": "11-Jul-2019"
    },
    {
      "status": "error",
      "train_id": 434065910,
      "type": "Compactor",
      "location": "203 Schiller Trail",
      "last_maintained": "21-May-2021"
    },
    {
      "status": "error",
      "train_id": 310024870,
      "type": "Backhoe",
      "location": "3 Clarendon Parkway",
      "last_maintained": "30-Oct-2019"
    },
    {
      "status": "success",
      "train_id": 922131656,
      "type": "Scraper",
      "location": "4 Shasta Center",
      "last_maintained": "10-Mar-2020"
    },
    {
      "status": "error",
      "train_id": 917190236,
      "type": "Trencher",
      "location": "87 Stone Corner Alley",
      "last_maintained": "06-Jun-2020"
    },
    {
      "status": "green",
      "train_id": 36319447,
      "type": "Skid-Steer",
      "location": "024 Forest Dale Hill",
      "last_maintained": "11-Jul-2020"
    },
    {
      "status": "error",
      "train_id": 287988751,
      "type": "Excavator",
      "location": "0328 Petterle Trail",
      "last_maintained": "12-Feb-2021"
    },
    {
      "status": "success",
      "train_id": 978912453,
      "type": "Scraper",
      "location": "9477 Blackbird Pass",
      "last_maintained": "21-Aug-2020"
    },
    {
      "status": "success",
      "train_id": 794046180,
      "type": "Trencher",
      "location": "8176 Superior Hill",
      "last_maintained": "13-Jun-2019"
    },
    {
      "status": "success",
      "train_id": 52227381,
      "type": "Excavator",
      "location": "2 Southridge Hill",
      "last_maintained": "14-Jul-2021"
    },
    {
      "status": "error",
      "train_id": 129483480,
      "type": "Excavator",
      "location": "5694 Weeping Birch Trail",
      "last_maintained": "02-Feb-2019"
    },
    {
      "status": "error",
      "train_id": 535649879,
      "type": "Trencher",
      "location": "00 Gerald Street",
      "last_maintained": "16-Sep-2020"
    },
    {
      "status": "error",
      "train_id": 509122614,
      "type": "Skid-Steer",
      "location": "1106 Corscot Alley",
      "last_maintained": "29-Mar-2020"
    },
    {
      "status": "green",
      "train_id": 738033615,
      "type": "Excavator",
      "location": "08644 John Wall Terrace",
      "last_maintained": "20-Jul-2018"
    },
    {
      "status": "error",
      "train_id": 104126710,
      "type": "Dump Truck",
      "location": "571 Lawn Drive",
      "last_maintained": "11-Apr-2020"
    },
    {
      "status": "success",
      "train_id": 769656178,
      "type": "Trencher",
      "location": "482 Ludington Terrace",
      "last_maintained": "09-Dec-2018"
    },
    {
      "status": "success",
      "train_id": 668145899,
      "type": "Scraper",
      "location": "72 Mifflin Avenue",
      "last_maintained": "20-Jun-2018"
    },
    {
      "status": "green",
      "train_id": 299188629,
      "type": "Scraper",
      "location": "6630 Forest Run Lane",
      "last_maintained": "21-Nov-2020"
    },
    {
      "status": "green",
      "train_id": 324808718,
      "type": "Dragline",
      "location": "37868 Mitchell Junction",
      "last_maintained": "22-Aug-2019"
    },
    {
      "status": "success",
      "train_id": 913259537,
      "type": "Compactor",
      "location": "5 Ridgeview Trail",
      "last_maintained": "25-Jun-2021"
    },
    {
      "status": "success",
      "train_id": 901001709,
      "type": "Backhoe",
      "location": "64953 Merchant Trail",
      "last_maintained": "22-Oct-2021"
    },
    {
      "status": "green",
      "train_id": 150549569,
      "type": "Compactor",
      "location": "15 Fuller Trail",
      "last_maintained": "03-Jan-2019"
    },
    {
      "status": "green",
      "train_id": 748183720,
      "type": "Skid-Steer",
      "location": "59 Bunting Court",
      "last_maintained": "19-Dec-2019"
    },
    {
      "status": "green",
      "train_id": 704053386,
      "type": "Dump Truck",
      "location": "7172 School Road",
      "last_maintained": "02-Jul-2019"
    },
    {
      "status": "success",
      "train_id": 635791049,
      "type": "Scraper",
      "location": "5227 South Street",
      "last_maintained": "13-Jun-2018"
    },
    {
      "status": "success",
      "train_id": 114208694,
      "type": "Trencher",
      "location": "207 Meadow Vale Junction",
      "last_maintained": "09-Jul-2021"
    },
    {
      "status": "green",
      "train_id": 889768321,
      "type": "Backhoe",
      "location": "6 Pond Lane",
      "last_maintained": "16-May-2020"
    },
    {
      "status": "error",
      "train_id": 501282795,
      "type": "Backhoe",
      "location": "5 Golden Leaf Hill",
      "last_maintained": "19-Nov-2020"
    }
   ];

