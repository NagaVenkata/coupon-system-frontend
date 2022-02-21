import React from 'react';
import styles from './blob-svg.module.scss'; 


export default function BlobBackground() {
  return (
    // <div id='blobWrapper' className={styles.blobWrapper}>

    <> 
      <svg id="blob" className={styles.blob} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50%" height="50%" viewBox="400 0 1300 1500">

          <defs>
              <filter id="blob1" x="0" y="0" width="1460.106" height="1509.097" filterUnits="userSpaceOnUse">
              <feOffset dy="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feFlood floodOpacity="0.302"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
              </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#blob1)">
              <g id="blob1-2" data-name="blob1" transform="translate(-334.22 282.94) rotate(-14)" fill="#8ac1e6">
              <path d="M 1094.4912109375 1333.395385742188 C 1063.922241210938 1333.395385742188 1030.517333984375 1330.924194335938 995.2041625976562 1326.050170898438 C 960.5491943359375 1321.26708984375 924.1953735351562 1314.191772460938 887.1524047851562 1305.020751953125 C 850.2239990234375 1295.8779296875 812.832763671875 1284.707885742188 776.0177612304688 1271.820678710938 C 738.7174072265625 1258.763793945312 702.1994018554688 1244.009155273438 667.4782104492188 1227.967163085938 C 631.787353515625 1211.476928710938 598.0527954101562 1193.64892578125 567.211181640625 1174.978759765625 C 535.151611328125 1155.570922851562 506.1101684570312 1135.182373046875 480.8937683105469 1114.37890625 C 467.8807678222656 1103.643310546875 455.7169799804688 1092.649536132812 444.7403869628906 1081.703125 C 433.4905700683594 1070.484130859375 423.2159729003906 1059.0439453125 414.202392578125 1047.7001953125 C 404.9569702148438 1036.064697265625 396.8097839355469 1024.2431640625 389.9871826171875 1012.56396484375 C 382.9857788085938 1000.578735351562 377.2027893066406 988.4413452148438 372.7989807128906 976.48876953125 C 365.7381896972656 957.3245239257812 359.3131713867188 933.0399169921875 353.7025756835938 904.3095092773438 C 348.1545715332031 875.8991088867188 343.5267944335938 843.78515625 339.9475708007812 808.8593139648438 C 336.3227844238281 773.4877319335938 333.8565673828125 736.025146484375 332.6177673339844 697.5123291015625 C 331.3355712890625 657.6531372070312 331.3931884765625 617.3185424804688 332.7887878417969 577.6285400390625 C 334.2561950683594 535.8915405273438 337.1983947753906 495.1601257324219 341.5335693359375 456.5657348632812 C 346.1353759765625 415.5965270996094 352.3225708007812 376.9441528320312 359.9231872558594 341.6819458007812 C 363.8999938964844 323.2327270507812 368.3225708007812 305.4601440429688 373.0683898925781 288.8579406738281 C 377.9705810546875 271.7077331542969 383.3387756347656 255.3839416503906 389.0235900878906 240.3399353027344 C 394.8949890136719 224.8017425537109 401.2523803710938 210.2367401123047 407.9193725585938 197.0493469238281 C 414.8023681640625 183.4349365234375 422.1923828125 170.9383392333984 429.8843688964844 159.9069366455078 C 437.4897766113281 148.9997406005859 445.5857849121094 139.2447357177734 453.9473876953125 130.9131469726562 C 462.5567932128906 122.3347396850586 471.6773681640625 115.0367431640625 481.0559692382812 109.2217407226562 C 485.84619140625 106.2517395019531 490.8025817871094 103.6073379516602 495.7877807617188 101.3623428344727 C 500.8445739746094 99.08513641357422 506.0723876953125 97.15493774414062 511.326171875 95.62513732910156 C 516.6551513671875 94.07353973388672 522.160400390625 92.89054107666016 527.68896484375 92.10913848876953 C 533.29638671875 91.31633758544922 539.0853881835938 90.91433715820312 544.894775390625 90.91433715820312 C 550.67041015625 90.91433715820312 556.6257934570312 91.31093597412109 562.5957641601562 92.0931396484375 C 568.6489868164062 92.88613891601562 574.8873901367188 94.09774017333984 581.1377563476562 95.6943359375 C 593.8977661132812 98.95394134521484 607.2457885742188 103.9549407958984 620.810791015625 110.5583419799805 C 634.7384033203125 117.3383407592773 649.28076171875 125.9955368041992 664.0339965820312 136.2895355224609 C 679.1669921875 146.8487396240234 694.9421997070312 159.4231414794922 710.9215698242188 173.6639404296875 L 711.2987670898438 174.0003356933594 L 711.6309814453125 173.6193389892578 C 714.3767700195312 170.4703369140625 718.9983520507812 167.0275421142578 724.9959716796875 163.6629333496094 C 731.5571899414062 159.98193359375 739.6485595703125 156.4875335693359 748.3949584960938 153.5575408935547 C 763.3101806640625 148.5609436035156 787.7879638671875 142.604736328125 819.6975708007812 142.604736328125 C 838.139404296875 142.604736328125 856.9005737304688 144.6171417236328 875.4599609375 148.5861358642578 C 885.6007690429688 150.7547454833984 895.826171875 153.5435333251953 905.8523559570312 156.8753356933594 C 916.45556640625 160.3987426757812 927.1057739257812 164.6193389892578 937.507568359375 169.4197387695312 C 948.4683837890625 174.4781341552734 959.4397583007812 180.3129425048828 970.1170043945312 186.7619323730469 C 981.3316040039062 193.5355377197266 992.5203857421875 201.1673431396484 1003.372375488281 209.4451446533203 C 1014.736999511719 218.1141357421875 1026.038940429688 227.7257385253906 1036.964599609375 238.012939453125 C 1048.375610351562 248.7573394775391 1059.686767578125 260.5315246582031 1070.584228515625 273.0089416503906 L 1070.661376953125 273.0971374511719 L 1070.769775390625 273.1419372558594 C 1083.641723632812 278.4657287597656 1109.31298828125 281.0721435546875 1141.81396484375 284.3721313476562 C 1168.39794921875 287.0713500976562 1198.52880859375 290.1307373046875 1230.776123046875 295.4575500488281 C 1268.290161132812 301.6541442871094 1300.5732421875 309.6295471191406 1329.469970703125 319.8393249511719 C 1346.493530273438 325.8541259765625 1362.492553710938 332.7393493652344 1377.022827148438 340.3039245605469 C 1384.793334960938 344.3491516113281 1392.32177734375 348.6807250976562 1399.398803710938 353.1783447265625 C 1406.764770507812 357.8593444824219 1413.857421875 362.8571472167969 1420.479370117188 368.0325317382812 C 1427.352416992188 373.4041442871094 1433.91796875 379.1231384277344 1439.993774414062 385.0305480957031 C 1446.28515625 391.1475524902344 1452.233032226562 397.6431274414062 1457.67236328125 404.3371276855469 C 1463.29296875 411.254150390625 1468.532348632812 418.5821533203125 1473.245239257812 426.1175537109375 C 1478.106323242188 433.8903503417969 1482.546630859375 442.1067504882812 1486.442626953125 450.5387268066406 C 1491.522338867188 461.5329284667969 1495.71142578125 473.1917419433594 1498.893188476562 485.1907348632812 C 1501.937133789062 496.6701354980469 1504.14013671875 508.7663269042969 1505.441162109375 521.143310546875 C 1506.681762695312 532.9471435546875 1507.135009765625 545.318115234375 1506.787841796875 557.9125366210938 C 1506.4580078125 569.8795166015625 1505.39697265625 582.3615112304688 1503.634399414062 595.0115356445312 C 1497.534790039062 638.7893676757812 1482.881225585938 686.5357666015625 1460.08056640625 736.924560546875 C 1451.121337890625 756.724365234375 1440.8671875 776.9843139648438 1429.603149414062 797.1417236328125 C 1420.591430664062 813.268310546875 1410.916748046875 829.3655395507812 1400.84814453125 844.9861450195312 C 1383.706787109375 871.579345703125 1371.207641601562 887.770751953125 1371.083129882812 887.93115234375 L 1370.95556640625 888.095947265625 L 1370.982788085938 888.3025512695312 C 1371.012329101562 888.52734375 1373.953735351562 911.1815185546875 1375.07177734375 945.6045532226562 C 1375.728393554688 965.8203125 1375.636962890625 986.079345703125 1374.799926757812 1005.818542480469 C 1373.754028320312 1030.489990234375 1371.533935546875 1054.414306640625 1368.201416015625 1076.927124023438 C 1359.721557617188 1134.211303710938 1344.0771484375 1182.809936523438 1321.702758789062 1221.372924804688 C 1315.238525390625 1232.51416015625 1308.118041992188 1242.953125 1300.538940429688 1252.400390625 C 1292.56298828125 1262.342163085938 1283.859130859375 1271.459106445312 1274.669799804688 1279.498168945312 C 1265.033325195312 1287.927734375 1254.595581054688 1295.405517578125 1243.646362304688 1301.723510742188 C 1232.199340820312 1308.328979492188 1219.874633789062 1313.8505859375 1207.014526367188 1318.134887695312 C 1191.701782226562 1323.236572265625 1174.259399414062 1327.114379882812 1155.171752929688 1329.660888671875 C 1136.5986328125 1332.138916015625 1116.1826171875 1333.395385742188 1094.4912109375 1333.395385742188 Z" stroke="none"/>
              <path d="M 1094.4912109375 1332.895385742188 C 1116.160522460938 1332.895385742188 1136.55419921875 1331.640380859375 1155.105590820312 1329.165283203125 C 1174.161987304688 1326.622924804688 1191.573364257812 1322.752197265625 1206.856567382812 1317.660522460938 C 1219.683837890625 1313.387084960938 1231.976806640625 1307.8798828125 1243.394165039062 1301.2919921875 C 1254.314575195312 1294.99072265625 1264.725219726562 1287.53271484375 1274.336547851562 1279.125122070312 C 1283.503784179688 1271.106323242188 1292.1865234375 1262.011596679688 1300.144165039062 1252.093383789062 C 1307.707397460938 1242.666748046875 1314.813354492188 1232.24951171875 1321.265014648438 1221.130981445312 C 1343.607543945312 1182.626098632812 1359.231811523438 1134.09130859375 1367.703735351562 1076.874389648438 C 1371.034423828125 1054.379760742188 1373.253540039062 1030.473999023438 1374.299560546875 1005.820556640625 C 1375.136352539062 986.0935668945312 1375.228393554688 965.8465576171875 1374.57275390625 945.6425170898438 C 1373.456176757812 911.236328125 1370.516723632812 888.592529296875 1370.487182617188 888.3677368164062 L 1370.432739257812 887.9545288085938 L 1370.68798828125 887.6251220703125 C 1370.81201171875 887.4647216796875 1383.297973632812 871.29052734375 1400.427734375 844.7151489257812 C 1410.490966796875 829.1033325195312 1420.160034179688 813.0153198242188 1429.166625976562 796.8977661132812 C 1440.423950195312 776.7527465820312 1450.671630859375 756.5055541992188 1459.625122070312 736.7183227539062 C 1482.406005859375 686.3733520507812 1497.046142578125 638.6729125976562 1503.13916015625 594.9425659179688 C 1504.899169921875 582.3107299804688 1505.958618164062 569.8475341796875 1506.287963867188 557.8987426757812 C 1506.634521484375 545.3263549804688 1506.182373046875 532.9775390625 1504.943725585938 521.195556640625 C 1503.645629882812 508.8441467285156 1501.447143554688 496.7733459472656 1498.410034179688 485.3189392089844 C 1495.235595703125 473.3477478027344 1491.056396484375 461.716552734375 1485.988525390625 450.7483520507812 C 1482.101440429688 442.3355407714844 1477.67138671875 434.1377258300781 1472.821166992188 426.3827514648438 C 1468.119384765625 418.86474609375 1462.891967773438 411.5535278320312 1457.284423828125 404.65234375 C 1451.857177734375 397.9735412597656 1445.922607421875 391.4923400878906 1439.645385742188 385.3891296386719 C 1433.582153320312 379.494140625 1427.030395507812 373.7871398925781 1420.17138671875 368.4265441894531 C 1413.562133789062 363.2609252929688 1406.483032226562 358.2727355957031 1399.130615234375 353.600341796875 C 1392.065551757812 349.1103515625 1384.5498046875 344.7861328125 1376.7919921875 340.7473449707031 C 1362.282348632812 333.1937255859375 1346.304931640625 326.3177490234375 1329.303344726562 320.3107299804688 C 1300.4345703125 310.1109313964844 1268.179321289062 302.1427307128906 1230.69482421875 295.9507446289062 C 1198.462768554688 290.6265258789062 1168.340209960938 287.5681457519531 1141.763549804688 284.8697509765625 C 1109.221801757812 281.5655517578125 1083.518432617188 278.9557495117188 1070.57861328125 273.6039428710938 L 1070.36181640625 273.5143432617188 L 1070.207641601562 273.3377380371094 C 1059.320922851562 260.8727416992188 1048.02099609375 249.1103363037109 1036.621826171875 238.3769378662109 C 1025.708740234375 228.1015319824219 1014.419982910156 218.5011444091797 1003.069152832031 209.8427429199219 C 992.2313842773438 201.5757446289062 981.0578002929688 193.954345703125 969.8585815429688 187.18994140625 C 959.1972045898438 180.7505340576172 948.2421875 174.9245452880859 937.2979736328125 169.8737335205078 C 926.9132080078125 165.0811462402344 916.2803955078125 160.8675384521484 905.6947631835938 157.3499450683594 C 895.6859741210938 154.0239410400391 885.4783935546875 151.2399444580078 875.3554077148438 149.0751342773438 C 856.8303833007812 145.1135406494141 838.1043701171875 143.104736328125 819.6975708007812 143.104736328125 C 787.8554077148438 143.104736328125 763.4337768554688 149.0469360351562 748.5537719726562 154.03173828125 C 739.8366088867188 156.9519348144531 731.7749633789062 160.4331359863281 725.2406005859375 164.0989379882812 C 719.2923583984375 167.4359436035156 714.716552734375 170.8417358398438 712.0077514648438 173.9479370117188 L 711.3435668945312 174.7099456787109 L 710.5888061523438 174.0373382568359 C 694.6243896484375 159.8095397949219 678.8648071289062 147.2475433349609 663.747802734375 136.6997375488281 C 649.0159912109375 126.420539855957 634.4961547851562 117.7765426635742 620.5919799804688 111.007942199707 C 607.0571899414062 104.4191360473633 593.7413940429688 99.42993927001953 581.0139770507812 96.17874145507812 C 574.7827758789062 94.58693695068359 568.564208984375 93.37914276123047 562.53076171875 92.58873748779297 C 556.5821533203125 91.80953979492188 550.6485595703125 91.41433715820312 544.894775390625 91.41433715820312 C 539.1085815429688 91.41433715820312 533.3432006835938 91.81453704833984 527.7587890625 92.60414123535156 C 522.2537841796875 93.38233947753906 516.7721557617188 94.56014251708984 511.4659729003906 96.10514068603516 C 506.234375 97.62834167480469 501.0285949707031 99.550537109375 495.9931945800781 101.8181381225586 C 491.0277709960938 104.0543365478516 486.0909729003906 106.6881408691406 481.3193664550781 109.6465377807617 C 471.9731750488281 115.4413375854492 462.8827819824219 122.7157363891602 454.3001708984375 131.2671356201172 C 445.9595947265625 139.5779418945312 437.8829956054688 149.3099365234375 430.2943725585938 160.1927337646484 C 422.615966796875 171.2051391601562 415.2379760742188 183.6811370849609 408.3657836914062 197.2747344970703 C 401.7065734863281 210.4463348388672 395.3563842773438 224.9951324462891 389.4911804199219 240.5165405273438 C 383.8113708496094 255.5477447509766 378.4475708007812 271.8583374023438 373.5489807128906 288.9953308105469 C 368.806396484375 305.5869445800781 364.3863830566406 323.3487243652344 360.4119873046875 341.787353515625 C 352.8147888183594 377.0331420898438 346.63037109375 415.6689453125 342.0303955078125 456.621337890625 C 337.69677734375 495.2033386230469 334.7555847167969 535.9219360351562 333.2883911132812 577.6461181640625 C 331.8931884765625 617.324951171875 331.8357849121094 657.6483154296875 333.1175842285156 697.4961547851562 C 334.3559875488281 735.99755859375 336.8211669921875 773.4483642578125 340.4449768066406 808.8085327148438 C 344.0225830078125 843.7191162109375 348.648193359375 875.818115234375 354.1933898925781 904.2137451171875 C 359.7987670898438 932.91796875 366.2165832519531 957.1767578125 373.2681884765625 976.3157348632812 C 377.6617736816406 988.2411499023438 383.4321899414062 1000.351745605469 390.4187927246094 1012.311767578125 C 397.2295837402344 1023.970520019531 405.3631896972656 1035.772094726562 414.5937805175781 1047.388916015625 C 423.5955810546875 1058.717895507812 433.857177734375 1070.143798828125 445.0933837890625 1081.348999023438 C 456.0589904785156 1092.284301757812 468.2109680175781 1103.267578125 481.2119750976562 1113.9931640625 C 506.4097900390625 1134.781127929688 535.43115234375 1155.15576171875 567.4701538085938 1174.550903320312 C 598.2957763671875 1193.211791992188 632.0139770507812 1211.03076171875 667.68798828125 1227.51318359375 C 702.3945922851562 1243.548583984375 738.8975830078125 1258.296997070312 776.1829833984375 1271.348754882812 C 812.9833984375 1284.230712890625 850.359375 1295.396362304688 887.2725830078125 1304.535400390625 C 924.298583984375 1313.7021484375 960.635009765625 1320.774169921875 995.2725830078125 1325.5546875 C 1030.563232421875 1330.425537109375 1063.945190429688 1332.895385742188 1094.4912109375 1332.895385742188 M 1094.491088867188 1333.895385742188 C 846.2498168945312 1333.895385742188 444.1925964355469 1171.708251953125 372.3297729492188 976.6615600585938 C 301.4549865722656 784.296875 300.7925720214844 90.4144287109375 544.8948364257812 90.4144287109375 C 591.1702270507812 90.4144287109375 646.1923217773438 115.3072891235352 711.2542114257812 173.2907409667969 C 721.98388671875 160.9858551025391 762.9952392578125 142.1047210693359 819.697509765625 142.1047210693359 C 888.8943481445312 142.1047210693359 981.4650268554688 170.2090454101562 1070.960815429688 272.679931640625 C 1124.790405273438 294.9431457519531 1403.2998046875 269.4019470214844 1486.896362304688 450.3289489746094 C 1570.493041992188 631.2555541992188 1371.478637695312 888.2373657226562 1371.478637695312 888.2373657226562 C 1371.478637695312 888.2373657226562 1418.8349609375 1248.093139648438 1207.172607421875 1318.609375 C 1175.921875 1329.020629882812 1137.491088867188 1333.895385742188 1094.491088867188 1333.895385742188 Z" stroke="none" fill="#8ac1e6"/>
              </g>
          </g>
      </svg>
    </>
    // </div>
  )
}