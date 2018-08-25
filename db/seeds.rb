# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Activity.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

users = User.create(
[{ username: 'Guest',
    email: "email@gmail.com",
    password: "password",
    avatar: "http://3.bp.blogspot.com/-sC9vVftcp48/Tk19UAu4SSI/AAAAAAAABCE/Xq2nS_QQLmo/s1600/100_2892.JPG"
},{ username: 'Fred',
  email: "fred@gmail.com",
  password: "password",
  avatar: "http://www.cyclefiesta.com/multimedia/pyrenees/images/cycling-pyrenees.jpg"
},{ username: 'Charlie',
  email: "charlie@gmail.com",
  password: "password",
  avatar: "https://thumbs.dreamstime.com/t/cyclist-jon-izagirre-insausti-col-du-tourmalet-france-july-movistarteam-climbing-difficult-road-to-col-du-tourmalet-51064580.jpg"
},{ username: 'Jim',
  email: "Jim@gmail.com",
  password: "password",
  avatar: "http://theclimbingcyclist.com/wp-content/uploads/2013/07/IMG_9582.jpg"
},{ username: 'Bob',
  email: "user2@gmail.com",
  password: "password",
  avatar: "https://www.discoveradventure.com/media/image-cache/80212f2a-0c5e-4f45-aa1e-699a25766dc4/900-0-1-1000-650/1483950968-cycling_uphill_pyreneesjpg.jpg"
},{ username: 'Linda',
  email: "user3@gmail.com",
  password: "password",
  avatar: "https://www.discoveradventure.com/media/image-cache/80212f2a-0c5e-4f45-aa1e-699a25766dc4/900-0-1-1000-650/1483950968-cycling_uphill_pyreneesjpg.jpg"
},{ username: 'Laurette',
  email: "email4@gmail.com",
  password: "password",
  avatar: "https://sweatngears.files.wordpress.com/2011/06/sweatngears_tourseries_endura_ian-superman-wilkinson.jpg"
},{ username: 'Tim',
    email: "tim@gmail.com",
    password: "password",
    avatar: "http://www.cyclefiesta.com/multimedia/pyrenees/images/cycling-pyrenees.jpg"
},{ username: 'OtherGuy',
  email: "Otherguy@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af753f6c66c27ee4325322951a0f2f6e&auto=format&fit=crop&w=1050&q=80"
},{ username: 'Aislinn',
  email: "aislinn@gmail.com",
  password: "password",
  avatar: "http://www.cycletouringreview.com/wp-content/uploads/2011/07/And-Kat-Makes-it-to-the-Top.jpg"
},{ username: 'Zach',
  email: "zach@gmail.com",
  password: "password",
  avatar: "https://www.discoveradventure.com/media/image-cache/80212f2a-0c5e-4f45-aa1e-699a25766dc4/900-0-1-1000-650/1483950968-cycling_uphill_pyreneesjpg.jpg"
},{ username: 'Dan',
  email: "dan@gmail.com",
  password: "password",
  avatar: "http://i1.wp.com/ledomestiquetours.co.uk.88-208-244-163.jago-staging.com/wp-content/uploads/2015/07/Col-du-Tourmalet-Feeling-the-Pain.jpg"
},{ username: 'Lael',
  email: "lael@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af753f6c66c27ee4325322951a0f2f6e&auto=format&fit=crop&w=1050&q=80"
},{ username: 'Taylor',
  email: "taylor@gmail.com",
  password: "password",
  avatar: "https://sweatngears.files.wordpress.com/2011/06/sweatngears_tourseries_endura_ian-superman-wilkinson.jpg"
},{ username: 'Jimbo',
  email: "jimbo@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1471439330580-1493ebc92c13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e3f8706cfc6281e973bbad12f6e0a5a&auto=format&fit=crop&w=762&q=80"
},{ username: 'Samuel',
  email: "samuel@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1495563923587-bdc4282494d0?ixlib=rb-0.3.5&s=69bb714b982f1104fd9262198ce60919&auto=format&fit=crop&w=1050&q=80"
},{ username: 'Christopher',
  email: "christopher@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1501620363363-4f9cb7fa25e8?ixlib=rb-0.3.5&s=08b1557aec8d2f46b179c1be135a268d&auto=format&fit=crop&w=934&q=80"
},{ username: 'Patrick',
  email: "patrick@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1470298740710-87fd14ccb21f?ixlib=rb-0.3.5&s=12378c445159824227f072429c33f40c&auto=format&fit=crop&w=1050&q=80"
},{ username: 'Jonah',
  email: "jonah@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1516725630185-19ae408fbc83?ixlib=rb-0.3.5&s=e86df147f25dae637a8ffbd42c21384d&auto=format&fit=crop&w=1051&q=80"
},{ username: 'Garrett',
  email: "garrett@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1455719103652-8c015f564e2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=361cd2dc22efed1c4f8149b1dfff409e&auto=format&fit=crop&w=889&q=80"
},{ username: 'Samantha',
  email: "samantha@gmail.com",
  password: "password",
  avatar: "https://images.unsplash.com/photo-1516147697747-02adcafd3fda?ixlib=rb-0.3.5&s=fc4bac92ba239938161e2e8628ddcf8f&auto=format&fit=crop&w=814&q=80"
}
])

activities = Activity.create([{title: "Morning Ride",
  description: "",
  polyline: "g}pwFfctbM}JeI][UUMCwC}BKRC?OO_A~BqKqIaEcD[c@_DiCaFaEiJuHOOuB_BiC_ByFsDMGaBUaASQIs@K}AYeEm@qAW}EgAWIwAWc@A_ACCZENMLMBmBOiFo@_Ec@gBUaE[h@eB",
  athlete_id: users[0].id, distance: "1340.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Evening Ride",
  description: "",
  polyline: "whrwFlutbMuBuIIMtCuHIaAOi@CqCr@oBMKO[CW@UBMBG]WKGuBuAqL}HaG{DkDyB{IcGiFgDgFiDgG}DlB{FhBsF",
  athlete_id: users[0].id , distance: "4.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Afternoon Ride",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[0].id , distance: "16.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Weak sauce",
  description: "",
  athlete_id: users[0].id , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Run",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "alrwF|usbMXYNWZoABI]URi@`CeGOSoAeAcEcDmBaBhEuMnCoIxDaM`GmRwBuAaEoCwEwCwBwAiD_CiEqCiGcEc[mSgQeLuOcKsMsI_Cy@mBqAk@o@u@s@m@c@Y[sA{@_C}A{CoBOESIeAYaC{AKSOO_Au@c@W]YEMeAs@{FyDyBwAaCyAyB}AiDyB_JaGoMsIc@[wB~GkAxDwC`J}@zCeBpFMT{BjHOh@zBxAxFrD_CrHyBxGc@`AQj@CP?DK@I?GAgBiAc@QUE[AWDc@PwAt@k@PiAPo@B_A?}ASu@Qa@Oc@WUSW_@KYGWMHi@PC?EAOk@",
  athlete_id: users[9].id , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Last ride in NY",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[8].id , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[7].id , distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Afternoon Ride",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[6].id, distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Evening Ride",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[3].id, distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[2].id, distance: "1.17",
  est_moving_time: "24:41",
  type_of: "Ride",
  elevation: 400},
{title: "Winter Legs :(",
  description: "",
  polyline: "whrwFlutbMuBuIIMtCuHIaAOi@CqCr@oBMKO[CW@UBMBG]WKGuBuAqL}HaG{DkDyB{IcGiFgDgFiDgG}DlB{FhBsF",
  athlete_id: users[3].id , distance: "1.32",
  est_moving_time: "26:55",
  type_of: "Run",
  elevation: 400},
{title: "Afternoon Ride ",
  description: "",
  polyline: "ufxwFppobMlJ_Z`GmRNe@OIkBsAcG{DeG_EsAaAkAs@sE{C{BwAwJsG_HsE",
  athlete_id: users[2].id , distance: "1.17",
  est_moving_time: "27:29",
  type_of: "Ride",
  elevation: 400},
{title: "Morning Ride",
  description: "",
  polyline: "}fymGpvf_LdLbCpEIpIc@dBPnBv@dAx@hEtFnEnKlC`FvEhF`C~CrBtDdBfAdBBlE{BfC{@l`@qBtCg@bCgBpD{DdCuAt@SjBKfOr@jRC`D\\~J|BbPbEnChAvStK|F~BfEd@lII~OQbHo@bEe@vB?dMh@nGTvBrAtBvAfEtAvFzIzBrBtC`Bv@jB|CpL|CvDvC~CtAlEhBdLp@pBvAbC~LrNxAt@bALpIMtCYtEs@vAHlCx@bAr@`E~IjBlDpGpJVvCgAzJy@nDgHdR}GxLaBbF]lE?~Dr@`CvAvBz@h@tAP~Lw@rAQ|IgCxF}Bd@bDFxBSfGjDjJjEjGf@lBbAnLNlFrApLl@dEBvAc@hDUzC`AjFv@vAdEhFfCtEnC~ItAxGx@zF@jC[zBOnEf@bEQjDo@tBsClFyA~Dk@lDFhESpEU|EWtAu@vBoAbB{@n@LpAw@|Gv@}GMqAsFtCcH~CcCrA{E`DuBhBaB|@{GnCuIpCeLpDi@~@iB|GyBjHq@]mBg@gFKmQ`DgP~D_[dHgDtAoEfD_CtAsA^oBReCTkFdBgEp@oDf@{DhBkOdIaNzGmEfAoEf@mHp@oElAuAr@uIpGyErB}RzEs_@xK{GhB_Dt@kH`C{JrDkIbDmD|@oEh@gJ`AgDBkGWwCDWLgKlKmCnBgA~@}@oCqBuFaAoCeDgGcEmJcCwFiBwBiCoAgGoAuVmNiCmBsAmC}@kFcBwMiCkMy@uB}BmCqCkAqEi@sBg@wBeBqAsBqAmEq@yDMqC?yA@Qm@CsCtFoA~CwBbGyArCu@v@{CNeGLo@P_BlCmCjHoApDm@n@gAZkBXwAz@sBtBwEx@aGlAqBBmFQ}ATyDtBsAb@wALcIe@iBFo@P{D|GiE`HwK`T?XkMCoNPoBMy@_@oD{BcMmIuPuIW_DTsEAqDeBmOe@qI?cQCwBq@cE_GuPiAcJEmFb@iJHoJZsFLiHAsGe@sFHyAtDaUbBaLXcEF{V`@wQNw@xBuHP_CC_E@iE`ASpB_@lEw@|@[`Ay@b@w@f@oBr@_IdAeFdC}HfC{KhAyIfAgFpEmLfBwDrGoIxDeClByApBgBtDcBlF{ChGmEzJePnDcFpD_EjEkKlFsKd@wBn@}AlCmC|CcCxCsCdF{C`BqAlA_Cf@eCl@sFx@iCb@q@jA{@bEmBdEgA\\{BMoFKwDzHkAvDi@jBgEFq@e@qIbQyCOqACaCBiAt@}ClA_HPmBlAw@`BgBjC_DfEcE~Ay@`EqAfH}DrGcC",
  athlete_id: users[4].id , distance: "25.42",
  est_moving_time: "1:20:47",
  type_of: "Ride",
  elevation: 3000}
])

images = Image.create(
  [{user_id: users[0].id , activity_id: activities[1].id, image:"http://www.whichtrainingcamp.com/images/Articleimages/CYCLING/TDFCLIMBS/col_du_tourmalet2.jpg" },
{user_id: users[0].id , activity_id: activities[2].id, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/LuzArdidien2003.jpg/300px-LuzArdidien2003.jpg" },
{user_id: users[0].id , activity_id: activities[2].id, image:"https://cdnmos-bikeradar.global.ssl.fastly.net/images/news/2017/05/25/canyon-endurance-al-60-06-1493210151001-r4uyy4e6rl1u-1493991204064-1141b06ihkp7d-1495783915049-z0ugfo3fbqjd-630-354.jpg" },
{user_id: users[0].id , activity_id: activities[3].id, image:"http://i.imgur.com/jMHV9Q5.jpg" },
{user_id: users[0].id , activity_id: activities[3].id, image:"https://imagesvc.timeincuk.net/v3/keystone/image?url=http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2016/07/4M1A8675-630x420.jpg&q=82" },
{user_id: users[0].id , activity_id: activities[4].id, image:"https://i.pinimg.com/originals/fc/55/36/fc55368b92fba2f8da65c35ac9bd0f5b.jpg" },
{user_id: users[0].id , activity_id: activities[4].id, image:"https://www.roughguides.com/wp-content/uploads/2013/12/01.DeathRoadBolivia-175086482-1680x1050.jpg" },
{user_id: users[1].id , activity_id: activities[4].id, image:"https://imagesvc.timeincuk.net/v3/keystone/image?url=http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/2/2015/02/170D9767edit-630x420.jpg&q=82" },
{user_id: users[2].id , activity_id: activities[12].id, image:"https://www.roughguides.com/wp-content/uploads/2013/12/18.greatOceanRoad-D1KY78-1680x1050.jpg" },
{user_id: users[3].id , activity_id: activities[5].id, image:"https://img.myswitzerland.com/653403/573" },
{user_id: users[0].id , activity_id: activities[1].id, image:"http://www.cyclefiesta.com/Images/articles/sacalobra1.jpg" },
{user_id: users[0].id , activity_id: activities[7].id, image:"https://acadiamagic.com/1200px/cadillac-6546.jpg" }]
)

comments = Comment.create(
[{author_id: users[1].id, activity_id: activities[12].id, content: "my man!"},
{author_id: users[7].id, activity_id: activities[12].id, content: "lookin' good!"},
{author_id: users[10].id, activity_id: activities[11].id, content: "slow down!"}
])

likes = Like.create(
[{liker_id: users[1].id, activity_id: activities[11].id},
{liker_id: users[3].id, activity_id: activities[9].id},
{liker_id: users[6].id, activity_id: activities[12].id},
{liker_id: users[5].id, activity_id: activities[12].id},
{liker_id: users[4].id, activity_id: activities[12].id},
{liker_id: users[3].id, activity_id: activities[11].id}
])

follows = Follow.create(
[{follower_id: users[1].id, followed_id: users[0].id },
{follower_id: users[2].id, followed_id: users[0].id },
{follower_id: users[3].id, followed_id: users[0].id },
{follower_id: users[4].id, followed_id: users[0].id },
{follower_id: users[5].id, followed_id: users[0].id },
{follower_id: users[6].id, followed_id: users[0].id },
{follower_id: users[7].id, followed_id: users[0].id },
{follower_id: users[8].id, followed_id: users[0].id },
{follower_id: users[9].id, followed_id: users[0].id },
{follower_id: users[0].id, followed_id: users[2].id },
{follower_id: users[0].id, followed_id: users[3].id },
{follower_id: users[0].id, followed_id: users[4].id },
{follower_id: users[0].id, followed_id: users[5].id },
{follower_id: users[0].id, followed_id: users[6].id }
])
