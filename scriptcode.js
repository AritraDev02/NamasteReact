import React from"react";
import ReactDOM from"react-dom/client";

//app layout
var Appcomp=()=>{
    return <div className="applayout">
        <Headercomp/>
        <Bodycomp resdata={rawdata}/>
        
    </div>
}

var Headercomp=()=>{
    return <div className="headercomp">
        <div className="header-items">
            <div className="logo">
                <img className="brandlogo" alt="brand logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"></img>
            </div> 
            <div className="nav-block">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    </div>
}



// var rawdata={

// "card": {
// "card": {
// "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
// "info": {
// "id": "150166",
// "name": "LunchBox - Meals and Thalis",
// "city": "7",
// "slugs": {
// "restaurant": "lunchbox-first-lane-south-kolkata",
// "city": "kolkata"
// },
// "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/231924a1-5fa0-4fdf-a918-5ee0d25ecf7c_150166.jpg",
// "address": "29 Old Ballygune, First Lane, Kolkata 700019",
// "locality": "First Lane",
// "areaName": "Ballygunge",
// "costForTwo": "20000",
// "costForTwoMessage": "₹200 FOR TWO",
// "cuisines": [
// "Thalis",
// "North Indian",
// "Biryani"
// ],
// "avgRating": 4.5,
// "feeDetails": {},
// "parentId": "4925",
// "avgRatingString": "4.5",
// "totalRatingsString": "9.6K+",
// "adTrackingId": "cid=fed990ae-eaba-4c80-a63b-044a223ca183~p=0~adgrpid=fed990ae-eaba-4c80-a63b-044a223ca183#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150166~plpr=SEARCH#RESTAURANT~st=north indian~eid=5c9abdaa-ee70-44b5-9fd2-4b01c37b51c5~srvts=1771913461959",
// "sla": {
// "deliveryTime": 54,
// "minDeliveryTime": 50,
// "maxDeliveryTime": 60,
// "lastMileTravel": 4.8,
// "serviceability": "SERVICEABLE",
// "rainMode": "RAIN_MODE_LIGHT",
// "slaString": "50-60 MINS",
// "lastMileTravelString": "4.8 km",
// "iconType": "ICON_TYPE_EMPTY"
// },
// "availability": {
// "opened": true,
// "restaurantClosedMeta": {}
// },
// "badges": {
// "imageBadges": [
// {
// "imageId": "High%20Protein/rx%20tag%205.png",
// "description": "High Protein"
// }
// ]
// },
// "aggregatedDiscountInfoV3": {
// "header": "ITEMS",
// "subHeader": "AT ₹99",
// "logoCtx": {
// "text": "BENEFITS"
// }
// },
// "ratingSlab": "RATING_SLAB_5",
// "orderabilityCommunication": {
// "title": {},
// "subTitle": {},
// "message": {},
// "customIcon": {},
// "commsStyling": {}
// },
// "cartOrderabilityNudgeBanner": {
// "parameters": {},
// "presentation": {}
// },
// "externalRatings": {
// "aggregatedRating": {
// "rating": "--"
// }
// },
// "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
// "featuredSectionInfo": {
// "featured": true,
// "sectionTitle": "Featured"
// },
// "campaignId": "fed990ae-eaba-4c80-a63b-044a223ca183",
// "showEoOffer": true
// },
// "analytics": {
// "screenName": "explore",

// "objectValue": "150166",
// "impressionObjectName": "impression-restaurant-ad",
// "clickObjectName": "click-restaurant-ad"
// },
// "ctaWithParams": {
// "link": "swiggy://menu",
// "type": "DEEPLINK",
// "params": {
// "restaurant_id": "150166",
// "query": "North Indian",
// "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
// "source": "SEARCH",
// "isSld": "false",
// "sourceRequestId": "00000000000000000000000000000000",
// "qrEnabled": "false"
// }
// }
// }
// }
// }

//Body Elements


var rawdata= [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "150166",
                        "name": "LunchBox - Meals and Thalis",
                        "city": "7",
                        "slugs": {
                          "restaurant": "lunchbox-first-lane-south-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/231924a1-5fa0-4fdf-a918-5ee0d25ecf7c_150166.jpg",
                        "address": "29 Old Ballygune, First Lane, Kolkata 700019",
                        "locality": "First Lane",
                        "areaName": "Ballygunge",
                        "costForTwo": "20000",
                        "costForTwoMessage": "₹200 FOR TWO",
                        "cuisines": [
                          "Thalis",
                          "North Indian",
                          "Biryani"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": { },
                        "parentId": "4925",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "9.6K+",
                        "adTrackingId": "cid=fed990ae-eaba-4c80-a63b-044a223ca183~p=0~adgrpid=fed990ae-eaba-4c80-a63b-044a223ca183#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150166~plpr=SEARCH#RESTAURANT~st=north indian~eid=58db310c-615f-4173-b1db-691f43a88c65~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 42,
                          "minDeliveryTime": 40,
                          "maxDeliveryTime": 45,
                          "lastMileTravel": 4.8,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "40-45 MINS",
                          "lastMileTravelString": "4.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "High%20Protein/rx%20tag%205.png",
                              "description": "High Protein"
                            }
                          ]
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹99",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "fed990ae-eaba-4c80-a63b-044a223ca183",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=fed990ae-eaba-4c80-a63b-044a223ca183~p=0~adgrpid=fed990ae-eaba-4c80-a63b-044a223ca183#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150166~plpr=SEARCH#RESTAURANT~st=north indian~eid=58db310c-615f-4173-b1db-691f43a88c65~srvts=1771916582961\"}",
                        "objectValue": "150166",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "restaurant_id": "150166",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "762090",
                        "name": "Rang De Basanti Dhaba",
                        "city": "7",
                        "slugs": {
                          "restaurant": "rang-de-basanti-dhaba-central-kolkata-central-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/19/2c95a2f8-beaf-4267-9adb-5f8c4751745b_762090.JPG",
                        "address": " Premises No. 20A, Nellie Sengupta Sarani, New Market Area, Dharmatala, Taltala, Kolkata, West Bengal 700046",
                        "locality": "New Market",
                        "areaName": "Central Kolkata",
                        "costForTwo": "25000",
                        "costForTwoMessage": "₹250 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Kebabs"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": { },
                        "parentId": "758",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "4.3K+",
                        "adTrackingId": "cid=a8f59776-fd1d-49bd-b08e-091fc35de05d~p=1~adgrpid=a8f59776-fd1d-49bd-b08e-091fc35de05d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=762090~plpr=SEARCH#RESTAURANT~st=north indian~eid=54de215a-eb31-4afd-9a70-2680637a6260~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 35,
                          "minDeliveryTime": 30,
                          "maxDeliveryTime": 35,
                          "lastMileTravel": 2.9,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "30-35 MINS",
                          "lastMileTravelString": "2.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "541"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "a8f59776-fd1d-49bd-b08e-091fc35de05d",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=a8f59776-fd1d-49bd-b08e-091fc35de05d~p=1~adgrpid=a8f59776-fd1d-49bd-b08e-091fc35de05d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=762090~plpr=SEARCH#RESTAURANT~st=north indian~eid=54de215a-eb31-4afd-9a70-2680637a6260~srvts=1771916582961\"}",
                        "objectValue": "762090",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "762090",
                          "query": "North Indian"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "639433",
                        "name": "Dum Safar Biryani",
                        "city": "7",
                        "slugs": {
                          "restaurant": "dum-safar-biryani-park-center-building-central-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                        "address": "C/o BARBEQUE NATION -24, 1st Floor,Park Center Building , Park Street, Kolkata, West Bengal 700016",
                        "locality": "Park Center Building",
                        "areaName": "PARK STREET",
                        "costForTwo": "50000",
                        "costForTwoMessage": "₹500 FOR TWO",
                        "cuisines": [
                          "Biryani",
                          "Hyderabadi",
                          "Kebabs",
                          "North Indian",
                          "barbeque"
                        ],
                        "avgRating": 4.3,
                        "feeDetails": { },
                        "parentId": "351013",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "459",
                        "adTrackingId": "cid=eac91823-6498-4479-bd96-5dc63c629ef4~p=2~adgrpid=eac91823-6498-4479-bd96-5dc63c629ef4#ag9~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=639433~plpr=SEARCH#RESTAURANT~st=north indian~eid=79c5bef4-c005-4862-b9bc-6dd6801343f6~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 33,
                          "minDeliveryTime": 30,
                          "maxDeliveryTime": 35,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "30-35 MINS",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "eac91823-6498-4479-bd96-5dc63c629ef4",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=eac91823-6498-4479-bd96-5dc63c629ef4~p=2~adgrpid=eac91823-6498-4479-bd96-5dc63c629ef4#ag9~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=639433~plpr=SEARCH#RESTAURANT~st=north indian~eid=79c5bef4-c005-4862-b9bc-6dd6801343f6~srvts=1771916582961\"}",
                        "objectValue": "639433",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "qrEnabled": "false",
                          "restaurant_id": "639433",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "6469",
                        "name": "Pawan Putra",
                        "city": "7",
                        "slugs": {
                          "restaurant": "pawan-putra-kankurgachi-naskar-road-kakurgachi-kankurgachi",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/85ca1a75-e534-4d10-a76f-2912d1e7165d_6469.jpg",
                        "address": "97, Hemchandra Naskar Road, Kolkata - 10",
                        "locality": "Kankurgachhi",
                        "areaName": "Kankurgachhi",
                        "costForTwo": "70000",
                        "costForTwoMessage": "₹700 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Chinese",
                          "Continental"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": { },
                        "parentId": "738866",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "6.3K+",
                        "adTrackingId": "cid=ba3e6ebf-8dc4-4808-ae1d-d2600ce53d3a~p=3~adgrpid=ba3e6ebf-8dc4-4808-ae1d-d2600ce53d3a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6469~plpr=SEARCH#RESTAURANT~st=north indian~eid=39bb738e-43bf-4266-98d8-0a5e7b2ce020~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 36,
                          "minDeliveryTime": 35,
                          "maxDeliveryTime": 40,
                          "lastMileTravel": 3.6,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "35-40 MINS",
                          "lastMileTravelString": "3.6 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹59",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "2.2K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "ba3e6ebf-8dc4-4808-ae1d-d2600ce53d3a",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=ba3e6ebf-8dc4-4808-ae1d-d2600ce53d3a~p=3~adgrpid=ba3e6ebf-8dc4-4808-ae1d-d2600ce53d3a#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6469~plpr=SEARCH#RESTAURANT~st=north indian~eid=39bb738e-43bf-4266-98d8-0a5e7b2ce020~srvts=1771916582961\"}",
                        "objectValue": "6469",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "6469",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "3031",
                        "name": "Sharma Dhaba",
                        "city": "7",
                        "slugs": {
                          "restaurant": "sharma-dhaba-ballygunge-prince-anwar-shah-road-area",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "dbqgbvrs2cznuxf67w8h",
                        "address": "17/1B, Ballygunge Circular Road, Near Ballygunge Maidan Camp, Ballygunge, Kolkata 700019 India",
                        "locality": "Paddapukur",
                        "areaName": "South Kolkata",
                        "costForTwo": "30000",
                        "costForTwoMessage": "₹300 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Tandoor",
                          "Kebabs",
                          "Snacks",
                          "Chinese",
                          "Biryani"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": { },
                        "parentId": "13766",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "88K+",
                        "adTrackingId": "cid=a3a07d55-c545-4ee8-8a79-08e85a6d5821~p=4~adgrpid=a3a07d55-c545-4ee8-8a79-08e85a6d5821#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3031~plpr=SEARCH#RESTAURANT~st=north indian~eid=a3437097-1c3a-4432-b928-8ca247126e22~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 42,
                          "minDeliveryTime": 40,
                          "maxDeliveryTime": 45,
                          "lastMileTravel": 4.6,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "40-45 MINS",
                          "lastMileTravelString": "4.6 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹50 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "7.6K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "a3a07d55-c545-4ee8-8a79-08e85a6d5821",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=a3a07d55-c545-4ee8-8a79-08e85a6d5821~p=4~adgrpid=a3a07d55-c545-4ee8-8a79-08e85a6d5821#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3031~plpr=SEARCH#RESTAURANT~st=north indian~eid=a3437097-1c3a-4432-b928-8ca247126e22~srvts=1771916582961\"}",
                        "objectValue": "3031",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "3031",
                          "query": "North Indian"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "12456",
                        "name": "Bar-B-Q",
                        "city": "7",
                        "slugs": {
                          "restaurant": "bar-b-q-central-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/1/933701dc-e78d-4d27-83c1-1038e0607681_12456.jpg",
                        "address": "Mother Teresa Sarani, Taltala, Kolkata, West Bengal 700016",
                        "locality": "Park Street",
                        "areaName": "Park Street",
                        "costForTwo": "80000",
                        "costForTwoMessage": "₹800 FOR TWO",
                        "cuisines": [
                          "Chinese",
                          "Oriental",
                          "Pan-Asian",
                          "Indian",
                          "Kebabs",
                          "Tandoor",
                          "Seafood"
                        ],
                        "avgRating": 4.6,
                        "feeDetails": { },
                        "parentId": "2672",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "50K+",
                        "adTrackingId": "cid=fae39be3-169d-4f83-bbe1-04408cf30f5c~p=5~adgrpid=fae39be3-169d-4f83-bbe1-04408cf30f5c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=12456~plpr=SEARCH#RESTAURANT~st=north indian~eid=75db9624-347f-4ba3-8ccc-08fc7b9bb171~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 54,
                          "minDeliveryTime": 50,
                          "maxDeliveryTime": 60,
                          "lastMileTravel": 3,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "50-60 MINS",
                          "lastMileTravelString": "3.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "newg.png",
                              "description": "Gourmet"
                            }
                          ]
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹75 OFF",
                          "subHeader": "ABOVE ₹499",
                          "discountTag": "FLAT DEAL",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "9.8K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "fae39be3-169d-4f83-bbe1-04408cf30f5c",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=fae39be3-169d-4f83-bbe1-04408cf30f5c~p=5~adgrpid=fae39be3-169d-4f83-bbe1-04408cf30f5c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=12456~plpr=SEARCH#RESTAURANT~st=north indian~eid=75db9624-347f-4ba3-8ccc-08fc7b9bb171~srvts=1771916582961\"}",
                        "objectValue": "12456",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "12456",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "1126254",
                        "name": "Hotel Sideshwari Ashram",
                        "city": "7",
                        "slugs": {
                          "restaurant": "hotel-sideshwari-ashram-central-kolkata-central-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/25/98f826dc-65be-4798-9533-df2338b8a29f_1126254.jpg",
                        "address": "19, RANI RASMONI ROAD, 1ST FLOOR,P.O. NEW MARKET,WARD 52, BOROUGH-VI ,KOLKATA MUNICIPAL CORPORATION,Kolkata,West Bengal-700087\t",
                        "locality": "Central Kolkata",
                        "areaName": "Central Kolkata",
                        "costForTwo": "15000",
                        "costForTwoMessage": "₹150 FOR TWO",
                        "cuisines": [
                          "Bengali",
                          "Mughlai",
                          "North Indian"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": { },
                        "parentId": "649397",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "585",
                        "adTrackingId": "cid=3a9313ad-72b2-4c99-b7fb-aee84705470f~p=6~adgrpid=3a9313ad-72b2-4c99-b7fb-aee84705470f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1126254~plpr=SEARCH#RESTAURANT~st=north indian~eid=d9e00b48-5dd4-4453-8983-7f30620c3d86~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 28,
                          "minDeliveryTime": 25,
                          "maxDeliveryTime": 30,
                          "lastMileTravel": 2,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "25-30 MINS",
                          "lastMileTravelString": "2.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹33",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "3a9313ad-72b2-4c99-b7fb-aee84705470f",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=3a9313ad-72b2-4c99-b7fb-aee84705470f~p=6~adgrpid=3a9313ad-72b2-4c99-b7fb-aee84705470f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1126254~plpr=SEARCH#RESTAURANT~st=north indian~eid=d9e00b48-5dd4-4453-8983-7f30620c3d86~srvts=1771916582961\"}",
                        "objectValue": "1126254",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "1126254",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "13571",
                        "name": "Haji Saheb",
                        "city": "7",
                        "slugs": {
                          "restaurant": "haji-saheb-park-circus-c-central-kolkata",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "bedbbaa7543c3d70d7a01b02046ee86e",
                        "address": "26, Circus Ave, Lower Range, Park Circus, Ballygunge, Kolkata, West Bengal 700017",
                        "locality": "Circus Ave",
                        "areaName": "Park Circus",
                        "costForTwo": "80000",
                        "costForTwoMessage": "₹800 FOR TWO",
                        "cuisines": [
                          "Biryani",
                          "rolls",
                          "Beverages",
                          "Desserts",
                          "Ice Cream"
                        ],
                        "avgRating": 4.4,
                        "feeDetails": { },
                        "parentId": "1912",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "41K+",
                        "adTrackingId": "cid=5bdeb097-b68b-4293-8955-32ebe7fb1e23~p=7~adgrpid=5bdeb097-b68b-4293-8955-32ebe7fb1e23#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=13571~plpr=SEARCH#RESTAURANT~st=north indian~eid=6373a81a-9e11-4e1b-a425-d8c10a6e081f~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 40,
                          "minDeliveryTime": 35,
                          "maxDeliveryTime": 40,
                          "lastMileTravel": 3.5,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "35-40 MINS",
                          "lastMileTravelString": "3.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹100 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "4.7K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "5bdeb097-b68b-4293-8955-32ebe7fb1e23",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=5bdeb097-b68b-4293-8955-32ebe7fb1e23~p=7~adgrpid=5bdeb097-b68b-4293-8955-32ebe7fb1e23#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=13571~plpr=SEARCH#RESTAURANT~st=north indian~eid=6373a81a-9e11-4e1b-a425-d8c10a6e081f~srvts=1771916582961\"}",
                        "objectValue": "13571",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "qrEnabled": "false",
                          "restaurant_id": "13571",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "3007",
                        "name": "Tandoori Darbar",
                        "city": "7",
                        "slugs": {
                          "restaurant": "tandoori-darbar-hazra-sarat-bose-road-area",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/39248539-8ea6-4a8e-a585-02a0bbcea5dc_3007.jpg",
                        "address": "128, Hazra Road, Near Jatin Das Park Metro, Hazra, Kolkata India",
                        "locality": "Hazra",
                        "areaName": "South Kolkata",
                        "costForTwo": "20000",
                        "costForTwoMessage": "₹200 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Chinese",
                          "Tandoor",
                          "Biryani",
                          "Beverages",
                          "Desserts"
                        ],
                        "avgRating": 4.6,
                        "feeDetails": { },
                        "parentId": "929",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "8.2K+",
                        "adTrackingId": "cid=4a9c27e1-cad0-4f98-8e1d-6eb74b696da6~p=8~adgrpid=4a9c27e1-cad0-4f98-8e1d-6eb74b696da6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3007~plpr=SEARCH#RESTAURANT~st=north indian~eid=480a96c1-e813-4131-bf04-a0c5ce318992~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 53,
                          "minDeliveryTime": 50,
                          "maxDeliveryTime": 60,
                          "lastMileTravel": 5.8,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "50-60 MINS",
                          "lastMileTravelString": "5.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "sld": true,
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹69",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "1.8K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "4a9c27e1-cad0-4f98-8e1d-6eb74b696da6",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=4a9c27e1-cad0-4f98-8e1d-6eb74b696da6~p=8~adgrpid=4a9c27e1-cad0-4f98-8e1d-6eb74b696da6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3007~plpr=SEARCH#RESTAURANT~st=north indian~eid=480a96c1-e813-4131-bf04-a0c5ce318992~srvts=1771916582961\"}",
                        "objectValue": "3007",
                        "impressionObjectName": "impression-restaurant-sld-ad",
                        "clickObjectName": "click-restaurant-sld-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "3007",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "true"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "67724",
                        "name": "Azad Hind Dhaba",
                        "city": "7",
                        "slugs": {
                          "restaurant": "azad-hind-dhaba-naktala-naktala",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "5af6a9b8069daeb459b9b4f971ac3b0c",
                        "address": "16, Vivekananda Road, Kolkata-700007",
                        "locality": "Girish Park",
                        "areaName": "Hati Bagan",
                        "costForTwo": "40000",
                        "costForTwoMessage": "₹400 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Tandoor",
                          "Chinese",
                          "Biryani",
                          "Snacks"
                        ],
                        "avgRating": 4.4,
                        "feeDetails": { },
                        "parentId": "6275",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "8.9K+",
                        "adTrackingId": "cid=145d30ff-5dad-4492-8d30-f4c75e1d6550~p=9~adgrpid=145d30ff-5dad-4492-8d30-f4c75e1d6550#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67724~plpr=SEARCH#RESTAURANT~st=north indian~eid=d14c8810-6100-4a25-a87b-c1af73321ae4~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 47,
                          "minDeliveryTime": 45,
                          "maxDeliveryTime": 50,
                          "lastMileTravel": 3.8,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "45-50 MINS",
                          "lastMileTravelString": "3.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹149",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "3.7",
                            "ratingCount": "655"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "145d30ff-5dad-4492-8d30-f4c75e1d6550",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=145d30ff-5dad-4492-8d30-f4c75e1d6550~p=9~adgrpid=145d30ff-5dad-4492-8d30-f4c75e1d6550#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67724~plpr=SEARCH#RESTAURANT~st=north indian~eid=d14c8810-6100-4a25-a87b-c1af73321ae4~srvts=1771916582961\"}",
                        "objectValue": "67724",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false",
                          "restaurant_id": "67724"
                        }
                      }
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "531860",
                        "name": "Russel punjabi dhaba",
                        "city": "7",
                        "slugs": {
                          "restaurant": "russel-punjabi-dhaba-central-kolkata-central-kolkata-2",
                          "city": "kolkata"
                        },
                        "cloudinaryImageId": "iftpfha5xcngan1ujk0z",
                        "address": "41 chowringhee road",
                        "locality": "Central Kolkata",
                        "areaName": "Chowringhee Road",
                        "costForTwo": "55000",
                        "costForTwoMessage": "₹550 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Snacks"
                        ],
                        "avgRating": 4.4,
                        "feeDetails": { },
                        "parentId": "173236",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "1.3K+",
                        "adTrackingId": "cid=f2464961-78b8-48bb-837c-0f25d1ff1662~p=10~adgrpid=f2464961-78b8-48bb-837c-0f25d1ff1662#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=531860~plpr=SEARCH#RESTAURANT~st=north indian~eid=ec88fbda-bc92-4fc3-8730-ee4ed1ed6c2e~srvts=1771916582961",
                        "sla": {
                          "deliveryTime": 36,
                          "minDeliveryTime": 35,
                          "maxDeliveryTime": 40,
                          "lastMileTravel": 4,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "35-40 MINS",
                          "lastMileTravelString": "4.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": { }
                        },
                        "aggregatedDiscountInfo": {
                          "visible": true
                        },
                        "badges": { },
                        "aggregatedDiscountInfoV2": {
                          "visible": true
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": { },
                          "subTitle": { },
                          "message": { },
                          "customIcon": { },
                          "commsStyling": { }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": { },
                          "presentation": { }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "f2464961-78b8-48bb-837c-0f25d1ff1662",
                        "showEoOffer": true
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"e4c89d60-fca1-2995-77ee-716ca077ffd5\",\"grid\":\"4df3ef71-d2d6-4f3e-b67a-d31e6f3eeab3\",\"queryUniqueId\":\"cdd9e960-3357-0cc1-fc4f-2ba6043a35f7\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=f2464961-78b8-48bb-837c-0f25d1ff1662~p=10~adgrpid=f2464961-78b8-48bb-837c-0f25d1ff1662#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=531860~plpr=SEARCH#RESTAURANT~st=north indian~eid=ec88fbda-bc92-4fc3-8730-ee4ed1ed6c2e~srvts=1771916582961\"}",
                        "objectValue": "531860",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "restaurant_id": "531860",
                          "query": "North Indian",
                          "sourceSessionId": "pvn04145993-0ddc-4265-bfe8-1d7ec6767",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "00000000000000000000000000000000",
                          "qrEnabled": "false"
                        }
                      }
                    }
                  }
                }]
var Bodycomp=()=>{
    return(
        <div className="bodycomp">
            <div className="restraunt-block">
                {rawdata.map(a=>(
                    <Bodyitems key={a.card.card.info.id} res={a.card.card}/>
                ))}
                
            </div>
        </div>
    )
}

var Bodyitems=({res})=>{
    const {name,cuisines,address,avgRating,sla}=res.info;

    
return(
    
    <div className="restaurant">
                    <div>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+res.info.cloudinaryImageId} alt="restaurant-pic"></img>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{cuisines.join(", ")}</p>
                        <p>{address}</p>
                        <span>{avgRating} star</span><span>{sla.deliveryTime} mins</span>
                    </div>
                </div>
)

}


var root=ReactDOM.createRoot(document.getElementById("container"));
root.render(<Appcomp/>);