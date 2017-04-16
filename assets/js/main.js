function avg(values) {
  return values.reduce(function (p, c) {
    return p + c;
  }) / values.length;
}

$(document).ready(function(){

var data = [[-122.40255599999999, 37.765751328571426, 7], [-122.39002, 37.7807647, 1], [-122.41268427499999, 37.7877928, 4], [-122.39971564000003, 37.79218739999999, 10], [-122.4083473, 37.797816940000004, 5], [-122.3935519, 37.795698126666665, 15], [-122.40898450000222, 37.80064789999713, 1], [-122.3997186, 37.79150814999999, 6], [-122.413152875, 37.786752325, 8], [-122.45078732500001, 37.7097893, 4], [-122.4058023, 37.789697524999994, 4], [-122.43772796249999, 37.8005264375, 8], [-122.43816936, 37.774393200000006, 5], [-122.40017071538462, 37.78703434615385, 13], [-122.40192030000412, 37.784475799999015, 1], [-122.41826249999998, 37.784381533333324, 6], [-122.39175553333334, 37.7726046, 3], [-122.4578363625, 37.70701541249999, 8], [-122.44833091111111, 37.782111944444445, 9], [-122.41943873333334, 37.76142361666667, 12], [-122.37272800005378, 37.7305314000145, 1], [-122.41837800000002, 37.798023300000004, 3], [-122.436814, 37.800823199999996, 3], [-122.4553228, 37.7814722888889, 9], [-122.44618084999998, 37.775223025, 4], [-122.44046282, 37.71942292, 5], [-122.41673108333335, 37.766396783333334, 6], [-122.40282739999999, 37.7683216, 2], [-122.39723253333334, 37.762462066666664, 9], [-122.4038787, 37.7892645, 1], [-122.40255314000001, 37.78186246, 5], [-122.41614464285715, 37.8084782, 7], [-122.41556361666666, 37.758938300000004, 6], [-122.40660168, 37.78312166, 5], [-122.41480064, 37.73907866, 5], [-122.40773087500003, 37.786982175, 12], [-122.4328942, 37.80397575, 2], [-122.39893033333334, 37.78828213333333, 3], [-122.40209630000001, 37.71236866666667, 6], [-122.40611813333334, 37.79519556666667, 3], [-122.43864677999998, 37.80054582, 5], [-122.48904842, 37.74229678000001, 5], [-122.43483523749998, 37.751205212500004, 8], [-122.46794036666665, 37.73915881666667, 6], [-122.46169379999999, 37.7831162, 2], [-122.4028127, 37.788585250000004, 4], [-122.4762827, 37.730296, 1], [-122.40434068, 37.790462440000006, 10], [-122.40362096666667, 37.7850269, 3], [-122.46426664285715, 37.78287192857143, 7], [-122.4108082, 37.79682394, 5], [-122.47479643333331, 37.780657299999994, 6], [-122.45614455000002, 37.7980283, 4], [-122.39642277142858, 37.78184240000001, 7], [-122.42184463846154, 37.76464682307693, 13], [-122.45292868, 37.78713729999999, 5], [-122.4156305000019, 37.808768899999706, 1], [-122.50549255714286, 37.76046772857143, 7], [-122.4818638, 37.7632182, 1], [-122.4858676, 37.78003691666667, 6], [-122.46644087777779, 37.765385499999994, 9], [-122.41326693750001, 37.78477395, 8], [-122.40690239999999, 37.7530748, 2], [-122.409096525, 37.783757525000006, 4], [-122.42223191, 37.773995039999996, 10], [-122.40606995, 37.793569999999995, 2], [-122.46917341999999, 37.76389538, 5], [-122.4787364857143, 37.76368318571429, 7], [-122.4080877, 37.789854770000005, 10], [-122.4099788142741, 37.77480842858007, 7], [-122.43371631999999, 37.72616814, 5], [-122.4037985, 37.77765765, 2], [-122.41129625714287, 37.7816223, 7], [-122.4038267384615, 37.79109059230769, 13], [-122.3960196, 37.780758666666664, 3], [-122.42237985000001, 37.778419150000005, 4], [-122.40288471666666, 37.784056500000005, 6], [-122.46356319999998, 37.72582786666668, 6], [-122.42906772999999, 37.751019199999995, 10], [-122.4120856, 37.7470822, 2], [-122.4298386, 37.7670753, 1], [-122.42327747142859, 37.78840182857142, 7], [-122.4513829857143, 37.7693937, 7], [-122.41555149999999, 37.77860496666667, 3], [-122.46545714999999, 37.764250725, 4], [-122.438535, 37.760671349999996, 2], [-122.40942226666667, 37.7841685, 3], [-122.43984513333334, 37.78602853333334, 3], [-122.45288230000001, 37.767018025, 4], [-122.4665769, 37.764559999999996, 2], [-122.40767210000001, 37.800630950000006, 2], [-122.42182332500002, 37.74220687500001, 4], [-122.39560742000002, 37.76264086, 5], [-122.47810294999998, 37.74298365833334, 12], [-122.49180060999998, 37.75358291, 10], [-122.4034548, 37.7398459, 1], [-122.39908324999999, 37.80002123333333, 6], [-122.43882414999999, 37.778301066666664, 6], [-122.41624852, 37.76197834, 5], [-122.4063214, 37.7875025, 4], [-122.39680129999999, 37.78096906666666, 3], [-122.40133173999999, 37.79016886, 5], [-122.43229537777779, 37.75138414444445, 9], [-122.43314408000002, 37.78569096, 5], [-122.4106546888889, 37.81075082222222, 9], [-122.403199475, 37.7702703125, 8], [-122.48311151666665, 37.74261083333334, 6], [-122.42276343333336, 37.77690784999999, 12], [-122.42286859999999, 37.798857999999996, 3], [-122.417563925, 37.7849561, 4], [-122.41499630000001, 37.78603608571428, 7], [-122.42949853333334, 37.76773096666667, 3], [-122.44605452222223, 37.77015035555556, 9], [-122.41798764999999, 37.7489713, 8], [-122.4160229, 37.778187100000004, 4], [-122.393138775, 37.792498224999996, 8], [-122.40768723333335, 37.7997206, 6], [-122.405384075, 37.795702575, 4], [-122.40931540000001, 37.8012747, 2], [-122.40544015714285, 37.79639488571428, 7], [-122.39096666, 37.726638040000005, 5], [-122.46034970000001, 37.781106433333335, 9], [-122.388958, 37.783055499999996, 4], [-122.4752585, 37.74313573333333, 3], [-122.39175315, 37.780824975, 4], [-122.3991464090909, 37.79363368181818, 11], [-122.41848047500002, 37.75263625, 12], [-122.46268420000001, 37.76246603333333, 3], [-122.4228406, 37.8052764, 3], [-122.42071310000001, 37.75518082727273, 11], [-122.39600585000001, 37.78897435, 2], [-122.4290613125, 37.7854845375, 8], [-122.40993469996297, 37.794532099982575, 1], [-122.40049278, 37.79393595999999, 5], [-122.42195673333333, 37.76625336666666, 3], [-122.40362345555555, 37.789922688888886, 9], [-122.39243552500001, 37.77757942499999, 8], [-122.4498165, 37.731527657142856, 7], [-122.44252703333333, 37.783115800000004, 3], [-122.42955253999999, 37.77226348, 5], [-122.48314955, 37.76317235, 2], [-122.39696531000003, 37.79409614000001, 10], [-122.40257184000001, 37.80371132, 5], [-122.4395812, 37.7996991, 1], [-122.42955119999999, 37.76330791666667, 6], [-122.4830359, 37.7634434, 1], [-122.42073444999998, 37.78092943749999, 8], [-122.42888815999999, 37.76686904, 5], [-122.40913014615384, 37.76593165384615, 13], [-122.40958975, 37.784793900000004, 2], [-122.39472618333333, 37.789314366666666, 6], [-122.46284904285713, 37.783107471428565, 7], [-122.4164002, 37.78812792, 5], [-122.44964150000001, 37.769720275000005, 4], [-122.51245165, 37.7789433, 4], [-122.43511543333334, 37.78575386666667, 3], [-122.40288314285714, 37.789482885714285, 7], [-122.48148848, 37.753914519999995, 5], [-122.40421113999999, 37.7937431, 5], [-122.48017605, 37.739000499999996, 2], [-122.42426340000002, 37.7630389, 2], [-122.40829414999997, 37.77148688333334, 6], [-122.40786055714285, 37.79893357142857, 7], [-122.41354095000001, 37.75062429999999, 2], [-122.4213438888889, 37.759831866666666, 9], [-122.50883220000001, 37.77252188333333, 6], [-122.41248492500002, 37.80564195000001, 4], [-122.40786653333332, 37.7828719, 3], [-122.4043219, 37.77245033333334, 3], [-122.40540672499999, 37.790495975000006, 4], [-122.4338729, 37.7883996, 5], [-122.39559374, 37.785455760000005, 10], [-122.42880965, 37.767892999999994, 2], [-122.43807315, 37.776257816666664, 6], [-122.40818552499998, 37.79583397500001, 4], [-122.45357538, 37.74388882, 5], [-122.43273453333333, 37.80015805, 6], [-122.395858525, 37.7978774, 4], [-122.41378640666666, 37.77030914, 15], [-122.398236, 37.7649519, 2], [-122.40031454444446, 37.78561555555556, 9], [-122.41969099999999, 37.775973349999994, 4], [-122.4151354625, 37.7812632375, 8], [-122.41725657142858, 37.77300352857143, 7], [-122.40479744, 37.784346719999995, 5], [-122.40109548333335, 37.798147183333334, 6], [-122.43412724444445, 37.73412587777777, 9], [-122.4036758, 37.7952627, 1], [-122.42032470000001, 37.79111519999999, 9], [-122.48102429000001, 37.76345369, 10], [-122.41030460329411, 37.778443763790364, 8], [-122.42201938333334, 37.80618955, 6], [-122.4209419, 37.783096566666664, 3], [-122.48983364285715, 37.73316488571429, 7], [-122.467044125, 37.764064075, 4], [-122.40188480999997, 37.79414492, 10], [-122.41784567777776, 37.78618712222222, 9], [-122.3928962, 37.79352624999999, 2], [-122.41384228571428, 37.78792602857143, 7], [-122.41927002666664, 37.807092986666675, 15], [-122.40940114999998, 37.799851350000004, 4], [-122.40448755714286, 37.78585102857143, 7], [-122.434874975, 37.759554975, 4], [-122.39847655999999, 37.79100888, 5], [-122.41135446, 37.78608704, 5], [-122.40837093333336, 37.797044099999994, 6], [-122.3871226, 37.77037060000001, 5], [-122.40625383333334, 37.79282953333333, 3], [-122.43193028181815, 37.79753294545455, 11], [-122.48230550000001, 37.783868033333334, 3], [-122.39299365000002, 37.79200105, 4], [-122.40742397250295, 37.77678188426842, 5], [-122.43507475384615, 37.761964507692305, 13], [-122.43643742, 37.76082856, 5], [-122.41713256000001, 37.782440220000005, 5], [-122.39041638571429, 37.735901985714285, 7], [-122.4113721999976, 37.783038099998706, 1], [-122.47462594999998, 37.73219155, 2], [-122.40444085, 37.79536975, 2], [-122.42878143333334, 37.768917900000005, 3], [-122.47698495000002, 37.728086499999996, 2], [-122.46391972500003, 37.7773243125, 8], [-122.408637125, 37.799756900000006, 4], [-122.47694755714286, 37.78077198571428, 7], [-122.40477582, 37.7430426, 5], [-122.43391783999999, 37.77168002, 5], [-122.39593890000002, 37.794863856250004, 16], [-122.40717949999998, 37.79847492727273, 11], [-122.44080551249999, 37.71647983750001, 8], [-122.398037, 37.786717900000006, 5], [-122.38917615714286, 37.78913788571429, 7], [-122.4327417, 37.7643560909091, 11], [-122.42298745000001, 37.74085665, 2], [-122.42727940000998, 37.79706750000638, 1], [-122.39958496666667, 37.79679753333333, 3], [-122.41188038571428, 37.8014362, 7], [-122.40325265, 37.797157899999995, 2], [-122.47555292499999, 37.76373515, 4], [-122.42199676666667, 37.796005066666666, 6], [-122.46664180000914, 37.780727199999575, 1], [-122.40605279166667, 37.79739339166666, 12], [-122.47797620000001, 37.77660235000001, 2], [-122.39707829999999, 37.778540799999995, 3], [-122.4107534375, 37.76015232500001, 8], [-122.46478283333333, 37.76417153333334, 3], [-122.42057664375, 37.78978583125, 16], [-122.41770016666668, 37.80771419999999, 12], [-122.43089520000001, 37.77187716363637, 11], [-122.42108044285715, 37.743788599999995, 7], [-122.42189308, 37.7635362, 5], [-122.39743357999998, 37.79038828, 5], [-122.45831969166665, 37.72446655, 12], [-122.43482547999999, 37.760905799999996, 10], [-122.426524825, 37.80118252499999, 4], [-122.45148734999948, 37.78638290000009, 2], [-122.41529674545454, 37.70711372727272, 11], [-122.44026244999998, 37.788303549999995, 2], [-122.42208041999999, 37.79758324, 5], [-122.42557196666667, 37.77635025, 6], [-122.40199523333334, 37.795686200000006, 3], [-122.39406186666666, 37.7926741, 3], [-122.47605738888888, 37.71987327777778, 9], [-122.473454025, 37.780524325, 4], [-122.40494573749999, 37.7982615375, 8], [-122.3931387, 37.7924983, 0], [-122.3985221, 37.78904262499999, 4], [-122.38942464000002, 37.73951738, 5], [-122.41913068000001, 37.75947144, 5], [-122.40321726666666, 37.78713664444444, 9], [-122.386105, 37.7449977, 2], [-122.43966975000001, 37.74376265, 2], [-122.40652595, 37.79173599999999, 2], [-122.39977113333332, 37.78928205, 6], [-122.50476531999999, 37.75362646, 5], [-122.39776532, 37.78963862, 5], [-122.38808053333334, 37.78167123333333, 3], [-122.42034643333332, 37.762457250000004, 6], [-122.47255416666665, 37.7639826, 3], [-122.44199055, 37.79971995, 6], [-122.48288295, 37.782030625, 4], [-122.39553169999849, 37.7885000000008, 1], [-122.43748944444442, 37.720981933333334, 9], [-122.4851283, 37.78201102857143, 7], [-122.40711567500001, 37.795127387499996, 8], [-122.40866694285715, 37.78911361428572, 7], [-122.40267292, 37.7909158, 5], [-122.41023628333335, 37.78206888333333, 6], [-122.42169443750001, 37.761128, 8], [-122.41000031666667, 37.7528644, 6], [-122.40826346666667, 37.75292873333333, 3], [-122.45383296, 37.72337944, 5], [-122.3902023, 37.7798413, 1], [-122.4103763, 37.7889839, 7], [-122.46462704999999, 37.785036125, 8], [-122.41465822499998, 37.803637525, 8], [-122.439925425, 37.7848917, 4], [-122.42043453636364, 37.788189563636365, 11], [-122.46653262000001, 37.76361264, 5], [-122.40275520000391, 37.78307470001384, 1], [-122.45993895, 37.77629165, 2], [-122.411281, 37.75292306666667, 3], [-122.43588632857143, 37.79932035714286, 7], [-122.43000358750002, 37.78615161249999, 8], [-122.40550861666667, 37.78145083333333, 6], [-122.4389534, 37.7996735, 1], [-122.41381323333333, 37.776083299999996, 6], [-122.40409609999998, 37.79142892499999, 16], [-122.38835561, 37.75836538, 10], [-122.46668685000003, 37.7828702, 10], [-122.4767791, 37.72689146666667, 3], [-122.48000741999999, 37.763402539999994, 5], [-122.403048375, 37.795810175, 4], [-122.42134200000001, 37.794407324999995, 4], [-122.4183448, 37.78762973999999, 5], [-122.44034934444444, 37.800217499999995, 9], [-122.41929702500002, 37.78375725, 4], [-122.42898780000039, 37.765804900006614, 1], [-122.40626262999999, 37.79607062, 10], [-122.40620842727274, 37.784425636363636, 11], [-122.45484397499999, 37.72351395, 4], [-122.41607734999998, 37.806282700000004, 2], [-122.40909235000001, 37.7987916, 4], [-122.39473673333333, 37.77971596666667, 3], [-122.404816775, 37.793662125, 4], [-122.4504038, 37.7748935, 2], [-122.41508440000197, 37.77812530000406, 1], [-122.42465747499998, 37.76066525, 4], [-122.46620813750002, 37.7626289875, 8], [-122.4417991, 37.71559165, 4], [-122.43253297499999, 37.7831751, 12], [-122.45832796666667, 37.7631988, 3], [-122.43416221666666, 37.79058091666666, 6], [-122.41380285, 37.807904225, 4], [-122.40946475, 37.73791835, 2], [-122.48796469999998, 37.7610962, 2], [-122.40344135714285, 37.78425457142857, 7], [-122.40425385714283, 37.79627394285715, 7], [-122.44167255, 37.77720400000002, 2], [-122.42117950000001, 37.79261041250001, 8], [-122.45812764999981, 37.788843499999906, 2], [-122.41567856666666, 37.78339936666667, 3], [-122.50426644960795, 37.77540295005091, 2], [-122.469027, 37.7434585, 1], [-122.40894783333333, 37.756797999999996, 3], [-122.43145370000917, 37.776034300049545, 1], [-122.47609870000001, 37.74285003333334, 3], [-122.41037072499999, 37.800030625000005, 8], [-122.43204353, 37.784924100000005, 10], [-122.39115563333334, 37.757744433333336, 3], [-122.39845378749997, 37.783727437500005, 8], [-122.41993521538463, 37.75757326153846, 13], [-122.48019806, 37.780530739999996, 10], [-122.41500601666667, 37.75246845, 6], [-122.46379035000001, 37.7810916, 8], [-122.4400654, 37.78682332, 5], [-122.40699834000002, 37.79401788, 5], [-122.43571977777779, 37.797337955555555, 9], [-122.47771313333335, 37.76347831666667, 6], [-122.432717725, 37.727204525000005, 4], [-122.40701816666667, 37.784023188888895, 9], [-122.48236876666668, 37.7800368, 6], [-122.39783516666668, 37.79499968333334, 6], [-122.4130348, 37.78597205714286, 7], [-122.436290025, 37.722554075, 8], [-122.4341245, 37.789236519999996, 5], [-122.39896670000002, 37.787520560000004, 10], [-122.39334231111108, 37.78200502222222, 9], [-122.46932860000001, 37.78276545000001, 10], [-122.44705648333333, 37.7983797, 6], [-122.40933858571427, 37.78752617142858, 7], [-122.4307823, 37.72914033333333, 3], [-122.41915413333334, 37.747480233333334, 3], [-122.38696586666667, 37.7652255, 3], [-122.40089326666667, 37.7951024, 3], [-122.42427101666665, 37.73611596666667, 6], [-122.4132084, 37.7804839, 1], [-122.41783127142857, 37.78344728571428, 7], [-122.4484046, 37.7861077, 1], [-122.40585292500002, 37.79435685, 4], [-122.44829881666669, 37.769747966666664, 6], [-122.47664894, 37.72815676, 5], [-122.4130823, 37.7832344, 3], [-122.38872005, 37.76220415, 4], [-122.41347909999998, 37.7811002, 2], [-122.46600825294114, 37.74054474705882, 17], [-122.39921521666666, 37.794703299999995, 6], [-122.42036533333331, 37.745170941666665, 12], [-122.41797284285715, 37.73930815714285, 7], [-122.4321338, 37.77963905, 4], [-122.48360882857143, 37.7234062, 7], [-122.41898858, 37.7828791, 5], [-122.39634496666667, 37.79122806666667, 3], [-122.39926209999999, 37.790474149999994, 2], [-122.4087499375, 37.786155212500006, 8], [-122.39858923333333, 37.78036563333333, 3], [-122.48206674, 37.7634924, 5], [-122.446604725, 37.7878565, 4], [-122.4691357999974, 37.76031120001579, 1], [-122.3886803, 37.77552406666667, 3], [-122.433742, 37.787584, 5], [-122.39202491999998, 37.76859248, 5], [-122.40870307499999, 37.752776075, 4], [-122.41811715, 37.79458185000001, 2], [-122.43204143333334, 37.806695166666664, 3], [-122.46980886, 37.73734226, 5], [-122.40935915, 37.754435199999996, 2], [-122.4207287, 37.74978513333333, 3], [-122.47806631538462, 37.75414111538462, 13], [-122.39437534, 37.79381202, 5], [-122.45237745, 37.769169950000006, 4], [-122.40377401428573, 37.794171528571425, 7], [-122.40819310000002, 37.7808131, 9], [-122.40036598, 37.79329276000001, 5], [-122.39373194, 37.77868892000001, 5], [-122.39253528000002, 37.77892678, 5], [-122.42412519999999, 37.77758954, 5], [-122.49730499333333, 37.775759126666664, 15], [-122.395007775, 37.776962412500005, 8], [-122.41751746666667, 37.78397543333334, 6], [-122.42675417999999, 37.74420178, 10], [-122.4331886, 37.734557, 2], [-122.45033719999998, 37.78661639999999, 2], [-122.42102991428573, 37.75231094285714, 7], [-122.45042546666664, 37.765005566666666, 6], [-122.402111, 37.72349, 1], [-122.46366619999999, 37.7052796, 9], [-122.5000576, 37.762384, 1], [-122.42101740000001, 37.787099437500004, 8], [-122.40434795000003, 37.7536482, 2], [-122.40285062, 37.77583564, 5], [-122.4659092, 37.763956885714286, 7], [-122.4238307857143, 37.7647942, 7], [-122.49287948, 37.78147648, 5], [-122.40515632499998, 37.730931899999995, 4], [-122.4511583, 37.724973766666665, 3], [-122.39292611666666, 37.79109688333334, 6], [-122.49354276666666, 37.7796259, 3], [-122.4040538357143, 37.72855037142857, 14], [-122.416843425, 37.781528787499994, 8], [-122.46555366666668, 37.7120243, 3], [-122.39215089, 37.730658330000004, 10], [-122.41684562500002, 37.790583975, 4], [-122.45859236666668, 37.76434508333334, 6], [-122.45945625, 37.74740619999999, 2], [-122.43775099999999, 37.79993065, 2], [-122.44933474, 37.76630314, 5], [-122.46353053333334, 37.76422465555556, 9], [-122.41556281428572, 37.80772655714286, 7], [-122.43427163333334, 37.76324333333333, 3], [-122.46856380000001, 37.763731050000004, 2], [-122.4327024, 37.76097514, 5], [-122.46956719999999, 37.7805657, 5], [-122.41131575, 37.792173875, 4], [-122.4435883, 37.71368705, 2], [-122.40099578750002, 37.7882352625, 16], [-122.41683517999999, 37.77673909999999, 10], [-122.4231362, 37.7421991, 1], [-122.39099087500001, 37.779253950000005, 4], [-122.40741276666665, 37.79776576666667, 9], [-122.43707587500003, 37.7721893, 4], [-122.4217335, 37.7968078, 1], [-122.41197149999998, 37.78914959, 10], [-122.39274572, 37.72145556, 5], [-122.39770494615382, 37.792591300000005, 13], [-122.43061571666668, 37.78519541666667, 6], [-122.50071146666667, 37.74032564444444, 9], [-122.41018807857141, 37.809231757142854, 14], [-122.4729748, 37.73160993333333, 3], [-122.4035949, 37.774778833333336, 3], [-122.40506616, 37.796781020000005, 5], [-122.49485665, 37.775904475, 4], [-122.38788835, 37.741542975, 4], [-122.39803690000001, 37.749279300000005, 5], [-122.47711610000096, 37.77061369995983, 1], [-122.44080813333335, 37.78788060000001, 3], [-122.43418362, 37.72514966000001, 5], [-122.42368605000001, 37.795393700000005, 2], [-122.41336824285715, 37.752803742857154, 7], [-122.39973856666666, 37.76636633333333, 3], [-122.42243584545456, 37.76960636363636, 11], [-122.41475656666667, 37.80848635, 6], [-122.4344546, 37.71557049999999, 2], [-122.41812121666666, 37.750562233333326, 6], [-122.41721923333333, 37.752068200000004, 3], [-122.43012230000002, 37.7662154, 8], [-122.39227102499999, 37.79291845, 4], [-122.40142044999999, 37.79197954999999, 10], [-122.409081625, 37.800240125, 4], [-122.42269282499998, 37.74147634999999, 4], [-122.42044535000001, 37.785509233333336, 6], [-122.40351153333333, 37.792724166666666, 6], [-122.39307903333335, 37.79523843333333, 6], [-122.40956537500001, 37.785252025, 4], [-122.41901956666668, 37.764934700000005, 9], [-122.4291477, 37.797916925, 4], [-122.40789935000001, 37.7854069375, 8], [-122.4606168, 37.7830445, 4], [-122.41057663333333, 37.787356833333334, 9], [-122.404830075, 37.7943696125, 8], [-122.47674134, 37.7276935, 5]]

console.log(avg(data.map((e)=>e[2])))
data = {
    data: data.map((e)=>{ return {lng:e[0], lat:e[1], value:[2]} }), //exp data point {lat: 24.6408, lng:46.7728, count: 3}
    min: 1,
    max: 4.568,
}

//init map
var baseLayer = L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }
);
var heatmapLayer = new HeatmapOverlay({
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  radius: .005,
  maxOpacity: .6,
  // scales the radius based on map zoom
  scaleRadius: true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  useLocalExtrema: false,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'value'
});
var map = new L.Map('map', {
  center: new L.LatLng(37.77086432692309, -122.41304015000001),
  zoom: 12,
  layers: [baseLayer, heatmapLayer]
});
heatmapLayer.setData(data);

})
