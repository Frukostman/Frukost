var kms
function distancias(prov1, prov2) {
//CABA OK Río
if (prov1 === "Ciudad Autónoma de Buenos Aires") {

        switch (prov2) {
            // caso 1
            case "Ciudad Autónoma de Buenos Aires":
                kms = 0
                break;
            // caso 2
            case "Córdoba":
                kms = 715
                break;
            // caso 3 
            case "Corrientes":
                kms = 940
                break;
            // caso 4 
            case "Formosa":
                kms = 1191
                break;
            // caso 5
            case "Buenos Aires":
                kms = 61
                break;
            // caso 6
            case "La Rioja":
                kms = 1150
                break;
            // caso 7 
            case "Mendoza":
                kms = 1050
                break;
            // caso 8 
            case "Neuquén":
                kms = 1158
                break;
            // caso 9
            case "Entre Ríos":
                kms = 480
                break;
            // caso 10
            case "Misiones":
                kms = 1040
                break;
            // caso 11 
            case "Chubut":
                kms = 1455
                break;
            // caso 12 
            case "Chaco":
                kms = 1023
                break;
            // caso 13
            case "Santa Cruz":
                kms = 2635
                break;
            // caso 14
            case "Catamarca":
                kms = 1145
                break;
            // caso 15 
            case "Tucumán":
                kms = 1203
                break;
            // caso 16 
            case "Salta":
                kms = 1510
                break;
            // caso 17
            case "San Juan":
                kms = 1110
                break;
            // caso 18
            case "San Luis":
                kms = 790
                break;
            // caso 19
            case "Jujuy":
                kms = 1543
                break;
            // caso 20 
            case "Santa Fe":
                kms = 478
                break;
            // caso 21
            case "La Pampa":
                kms = 620
                break;
            // caso 22
            case "Santiago del Estero":
                kms = 1043
                break;
            // caso 24 
            case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
                kms = 3228
                break;
            // caso 24 
            case "Río Negro":
                kms = 960
                break;
        }

}
//CORDOBA OK
if (prov1 === "Córdoba") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 715
            break;
        // caso 2
        case "Córdoba":
            kms = 0
            break;
        // caso 3 
        case "Corrientes":
            kms = 898
            break;
        // caso 4 
        case "Formosa":
            kms = 1043
            break;
        // caso 5
        case "Buenos Aires":
            kms = 757
            break;
        // caso 6
        case "La Rioja":
            kms = 435
            break;
        // caso 7 
        case "Mendoza":
            kms = 670
            break;
        // caso 8 
        case "Neuquén":
            kms = 1137
            break;
        // caso 9
        case "Entre Ríos":
            kms = 361
            break;
        // caso 10
        case "Misiones":
            kms = 1213
            break;
        // caso 11 
        case "Chubut":
            kms = 1455
            break;
        // caso 12 
        case "Chaco":
            kms = 875
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2635
            break;
        // caso 14
        case "Catamarca":
            kms = 440
            break;
        // caso 15 
        case "Tucumán":
            kms = 590
            break;
        // caso 16 
        case "Salta":
            kms = 897
            break;
        // caso 17
        case "San Juan":
            kms = 500
            break;
        // caso 18
        case "San Luis":
            kms = 420
            break;
        // caso 19
        case "Jujuy":
            kms = 930
            break;
        // caso 20 
        case "Santa Fe":
            kms = 330
            break;
        // caso 21
        case "La Pampa":
            kms = 600
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 430
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3228
            break;
        // caso 24 
        case "Río Negro":
            kms = 1194
            break;
        
    }

}
//CORRIENTES OK
if (prov1 === "Corrientes") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 940
            break;
        // caso 2
        case "Córdoba":
            kms = 898
            break;
        // caso 3 
        case "Corrientes":
            kms = 0
            break;
        // caso 4 
        case "Formosa":
            kms = 191
            break;
        // caso 5
        case "Buenos Aires":
            kms = 978
            break;
        // caso 6
        case "La Rioja":
            kms = 993
            break;
        // caso 7 
        case "Mendoza":
            kms = 1565
            break;
        // caso 8 
        case "Neuquén":
            kms = 1989
            break;
        // caso 9
        case "Entre Ríos":
            kms = 590
            break;
        // caso 10
        case "Misiones":
            kms = 315
            break;
        // caso 11 
        case "Chubut":
            kms = 2187
            break;
        // caso 12 
        case "Chaco":
            kms = 23
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3367
            break;
        // caso 14
        case "Catamarca":
            kms = 845
            break;
        // caso 15 
        case "Tucumán":
            kms = 791
            break;
        // caso 16 
        case "Salta":
            kms = 803
            break;
        // caso 17
        case "San Juan":
            kms = 1398
            break;
        // caso 18
        case "San Luis":
            kms = 1318
            break;
        // caso 19
        case "Jujuy":
            kms = 883
            break;
        // caso 20 
        case "Santa Fe":
            kms = 568
            break;
        // caso 21
        case "La Pampa":
            kms = 1378
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 633
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3960
            break;
        // caso 24 
        case "Río Negro":
            kms = 2046
            break;
        
    }

}
//FORMOSA OK
if (prov1 === "Formosa") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1191
            break;
        // caso 2
        case "Córdoba":
            kms = 1043
            break;
        // caso 3 
        case "Corrientes":
            kms = 191
            break;
        // caso 4 
        case "Formosa":
            kms = 0
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1253
            break;
        // caso 6
        case "La Rioja":
            kms = 1136
            break;
        // caso 7 
        case "Mendoza":
            kms = 1710
            break;
        // caso 8 
        case "Neuquén":
            kms = 2060
            break;
        // caso 9
        case "Entre Ríos":
            kms = 744
            break;
        // caso 10
        case "Misiones":
            kms = 506
            break;
        // caso 11 
        case "Chubut":
            kms = 2378
            break;
        // caso 12 
        case "Chaco":
            kms = 168
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3558
            break;
        // caso 14
        case "Catamarca":
            kms = 988
            break;
        // caso 15 
        case "Tucumán":
            kms = 936
            break;
        // caso 16 
        case "Salta":
            kms = 948
            break;
        // caso 17
        case "San Juan":
            kms = 1543
            break;
        // caso 18
        case "San Luis":
            kms = 1463
            break;
        // caso 19
        case "Jujuy":
            kms = 960
            break;
        // caso 20 
        case "Santa Fe":
            kms = 713
            break;
        // caso 21
        case "La Pampa":
            kms = 1523
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 776
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 4151
            break;
        // caso 24 
        case "Río Negro":
            kms = 2117
            break;
        
    }

}
//BSAS OK
if (prov1 === "Buenos Aires") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 61
            break;
        // caso 2
        case "Córdoba":
            kms = 757
            break;
        // caso 3 
        case "Corrientes":
            kms = 978
            break;
        // caso 4 
        case "Formosa":
            kms = 1253
            break;
        // caso 5
        case "Buenos Aires":
            kms = 0
            break;
        // caso 6
        case "La Rioja":
            kms = 1189
            break;
        // caso 7 
        case "Mendoza":
            kms = 1152
            break;
        // caso 8 
        case "Neuquén":
            kms = 1197
            break;
        // caso 9
        case "Entre Ríos":
            kms = 555
            break;
        // caso 10
        case "Misiones":
            kms = 1061
            break;
        // caso 11 
        case "Chubut":
            kms = 1414
            break;
        // caso 12 
        case "Chaco":
            kms = 996
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2551
            break;
        // caso 14
        case "Catamarca":
            kms = 1188
            break;
        // caso 15 
        case "Tucumán":
            kms = 1309
            break;
        // caso 16 
        case "Salta":
            kms = 1614
            break;
        // caso 17
        case "San Juan":
            kms = 1213
            break;
        // caso 18
        case "San Luis":
            kms = 894
            break;
        // caso 19
        case "Jujuy":
            kms = 1645
            break;
        // caso 20 
        case "Santa Fe":
            kms = 527
            break;
        // caso 21
        case "La Pampa":
            kms = 670
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 1184
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3132
            break;
        // caso 24 
        case "Río Negro":
            kms = 957
            break;
        
    }

}
//LA RIOJA OK
if (prov1 === "La Rioja") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1150
            break;
        // caso 2
        case "Córdoba":
            kms = 435
            break;
        // caso 3 
        case "Corrientes":
            kms = 993
            break;
        // caso 4 
        case "Formosa":
            kms = 1136
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1189
            break;
        // caso 6
        case "La Rioja":
            kms = 0
            break;
        // caso 7 
        case "Mendoza":
            kms = 617
            break;
        // caso 8 
        case "Neuquén":
            kms = 1472
            break;
        // caso 9
        case "Entre Ríos":
            kms = 796
            break;
        // caso 10
        case "Misiones":
            kms = 1308
            break;
        // caso 11 
        case "Chubut":
            kms = 1890
            break;
        // caso 12 
        case "Chaco":
            kms = 970
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3070
            break;
        // caso 14
        case "Catamarca":
            kms = 156
            break;
        // caso 15 
        case "Tucumán":
            kms = 338
            break;
        // caso 16 
        case "Salta":
            kms = 695
            break;
        // caso 17
        case "San Juan":
            kms = 450
            break;
        // caso 18
        case "San Luis":
            kms = 550
            break;
        // caso 19
        case "Jujuy":
            kms = 770
            break;
        // caso 20 
        case "Santa Fe":
            kms = 765
            break;
        // caso 21
        case "La Pampa":
            kms = 1035
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 360
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3660
            break;
        // caso 24 
        case "Río Negro":
            kms = 1629
            break;
        
    }

}
//MENDOZA ok
if (prov1 === "Mendoza") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1050
            break;
        // caso 2
        case "Córdoba":
            kms = 670
            break;
        // caso 3 
        case "Corrientes":
            kms = 1565
            break;
        // caso 4 
        case "Formosa":
            kms = 1710
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1152
            break;
        // caso 6
        case "La Rioja":
            kms = 617
            break;
        // caso 7 
        case "Mendoza":
            kms = 0
            break;
        // caso 8 
        case "Neuquén":
            kms = 855
            break;
        // caso 9
        case "Entre Ríos":
            kms = 916
            break;
        // caso 10
        case "Misiones":
            kms = 1925
            break;
        // caso 11 
        case "Chubut":
            kms = 1620
            break;
        // caso 12 
        case "Chaco":
            kms = 1587
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2800
            break;
        // caso 14
        case "Catamarca":
            kms = 773
            break;
        // caso 15 
        case "Tucumán":
            kms = 1005
            break;
        // caso 16 
        case "Salta":
            kms = 1227
            break;
        // caso 17
        case "San Juan":
            kms = 167
            break;
        // caso 18
        case "San Luis":
            kms = 260
            break;
        // caso 19
        case "Jujuy":
            kms = 1345
            break;
        // caso 20 
        case "Santa Fe":
            kms = 885
            break;
        // caso 21
        case "La Pampa":
            kms = 765
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 977
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3393
            break;
        // caso 24 
        case "Río Negro":
            kms = 1359
            break;
        
    }

}
//NEUQUEN ok
if (prov1 === "Neuquén") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1158
            break;
        // caso 2
        case "Córdoba":
            kms = 1137
            break;
        // caso 3 
        case "Corrientes":
            kms = 1989
            break;
        // caso 4 
        case "Formosa":
            kms = 2060
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1197
            break;
        // caso 6
        case "La Rioja":
            kms = 1472
            break;
        // caso 7 
        case "Mendoza":
            kms = 855
            break;
        // caso 8 
        case "Neuquén":
            kms = 0
            break;
        // caso 9
        case "Entre Ríos":
            kms = 1378
            break;
        // caso 10
        case "Misiones":
            kms = 2198
            break;
        // caso 11 
        case "Chubut":
            kms = 750
            break;
        // caso 12 
        case "Chaco":
            kms = 2012
            break;
        // caso 13
        case "Santa Cruz":
            kms = 1930
            break;
        // caso 14
        case "Catamarca":
            kms = 1588
            break;
        // caso 15 
        case "Tucumán":
            kms = 1860
            break;
        // caso 16 
        case "Salta":
            kms = 2082
            break;
        // caso 17
        case "San Juan":
            kms = 1022
            break;
        // caso 18
        case "San Luis":
            kms = 883
            break;
        // caso 19
        case "Jujuy":
            kms = 2200
            break;
        // caso 20 
        case "Santa Fe":
            kms = 1347
            break;
        // caso 21
        case "La Pampa":
            kms = 537
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 1567
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 2523
            break;
        // caso 24 
        case "Río Negro":
            kms = 660
            break;
        
    }

}
//ENTRE RIOS ok
if (prov1 === "Entre Ríos") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 480
            break;
        // caso 2
        case "Córdoba":
            kms = 361
            break;
        // caso 3 
        case "Corrientes":
            kms = 590
            break;
        // caso 4 
        case "Formosa":
            kms = 744
            break;
        // caso 5
        case "Buenos Aires":
            kms = 555
            break;
        // caso 6
        case "La Rioja":
            kms = 796
            break;
        // caso 7 
        case "Mendoza":
            kms = 916
            break;
        // caso 8 
        case "Neuquén":
            kms = 1378
            break;
        // caso 9
        case "Entre Ríos":
            kms = 0
            break;
        // caso 10
        case "Misiones":
            kms = 820
            break;
        // caso 11 
        case "Chubut":
            kms = 1696
            break;
        // caso 12 
        case "Chaco":
            kms = 576
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2876
            break;
        // caso 14
        case "Catamarca":
            kms = 801
            break;
        // caso 15 
        case "Tucumán":
            kms = 798
            break;
        // caso 16 
        case "Salta":
            kms = 1105
            break;
        // caso 17
        case "San Juan":
            kms = 861
            break;
        // caso 18
        case "San Luis":
            kms = 656
            break;
        // caso 19
        case "Jujuy":
            kms = 1138
            break;
        // caso 20 
        case "Santa Fe":
            kms = 31
            break;
        // caso 21
        case "La Pampa":
            kms = 841
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 638
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3469
            break;
        // caso 24 
        case "Río Negro":
            kms = 1435
            break;
        
    }

}
//MISIONES ok
if (prov1 === "Misiones") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1040
            break;
        // caso 2
        case "Córdoba":
            kms = 1213
            break;
        // caso 3 
        case "Corrientes":
            kms = 315
            break;
        // caso 4 
        case "Formosa":
            kms = 506
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1061
            break;
        // caso 6
        case "La Rioja":
            kms = 1308
            break;
        // caso 7 
        case "Mendoza":
            kms = 1925
            break;
        // caso 8 
        case "Neuquén":
            kms = 2198
            break;
        // caso 9
        case "Entre Ríos":
            kms = 820
            break;
        // caso 10
        case "Misiones":
            kms = 0
            break;
        // caso 11 
        case "Chubut":
            kms = 2495
            break;
        // caso 12 
        case "Chaco":
            kms = 338
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3675
            break;
        // caso 14
        case "Catamarca":
            kms = 1160
            break;
        // caso 15 
        case "Tucumán":
            kms = 1106
            break;
        // caso 16 
        case "Salta":
            kms = 1118
            break;
        // caso 17
        case "San Juan":
            kms = 1758
            break;
        // caso 18
        case "San Luis":
            kms = 1633
            break;
        // caso 19
        case "Jujuy":
            kms = 1198
            break;
        // caso 20 
        case "Santa Fe":
            kms = 883
            break;
        // caso 21
        case "La Pampa":
            kms = 1660
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 948
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 4268
            break;
        // caso 24 
        case "Río Negro":
            kms = 2000
            break;
        
    }

}
//CHUBUT OK
if (prov1 === "Chubut") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1455
            break;
        // caso 2
        case "Córdoba":
            kms = 1455
            break;
        // caso 3 
        case "Corrientes":
            kms = 2378
            break;
        // caso 4 
        case "Formosa":
            kms = 1414
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1890
            break;
        // caso 6
        case "La Rioja":
            kms = 1150
            break;
        // caso 7 
        case "Mendoza":
            kms = 1620
            break;
        // caso 8 
        case "Neuquén":
            kms = 750
            break;
        // caso 9
        case "Entre Ríos":
            kms = 1696
            break;
        // caso 10
        case "Misiones":
            kms = 2495
            break;
        // caso 11 
        case "Chubut":
            kms = 0
            break;
        // caso 12 
        case "Chaco":
            kms = 2210
            break;
        // caso 13
        case "Santa Cruz":
            kms = 1180
            break;
        // caso 14
        case "Catamarca":
            kms = 1895
            break;
        // caso 15 
        case "Tucumán":
            kms = 2045
            break;
        // caso 16 
        case "Salta":
            kms = 2352
            break;
        // caso 17
        case "San Juan":
            kms = 1680
            break;
        // caso 18
        case "San Luis":
            kms = 1360
            break;
        // caso 19
        case "Jujuy":
            kms = 2385
            break;
        // caso 20 
        case "Santa Fe":
            kms = 1665
            break;
        // caso 21
        case "La Pampa":
            kms = 855
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 1885
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 1773
            break;
        // caso 24 
        case "Río Negro":
            kms = 495
            break;
        
    }

}
//CHACO OK
if (prov1 === "Chaco") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1023
            break;
        // caso 2
        case "Córdoba":
            kms = 875
            break;
        // caso 3 
        case "Corrientes":
            kms = 23
            break;
        // caso 4 
        case "Formosa":
            kms = 168
            break;
        // caso 5
        case "Buenos Aires":
            kms = 996
            break;
        // caso 6
        case "La Rioja":
            kms = 970
            break;
        // caso 7 
        case "Mendoza":
            kms = 1587
            break;
        // caso 8 
        case "Neuquén":
            kms = 2012
            break;
        // caso 9
        case "Entre Ríos":
            kms = 576
            break;
        // caso 10
        case "Misiones":
            kms = 338
            break;
        // caso 11 
        case "Chubut":
            kms = 2210
            break;
        // caso 12 
        case "Chaco":
            kms = 0
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3390
            break;
        // caso 14
        case "Catamarca":
            kms = 822
            break;
        // caso 15 
        case "Tucumán":
            kms = 768
            break;
        // caso 16 
        case "Salta":
            kms = 780
            break;
        // caso 17
        case "San Juan":
            kms = 1420
            break;
        // caso 18
        case "San Luis":
            kms = 1295
            break;
        // caso 19
        case "Jujuy":
            kms = 860
            break;
        // caso 20 
        case "Santa Fe":
            kms = 545
            break;
        // caso 21
        case "La Pampa":
            kms = 1475
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 610
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3983
            break;
        // caso 24 
        case "Río Negro":
            kms = 2069
            break;
        
    }

}
//SANTA CRUZ OK
if (prov1 === "Santa Cruz") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 2635
            break;
        // caso 2
        case "Córdoba":
            kms = 3635
            break;
        // caso 3 
        case "Corrientes":
            kms = 3367
            break;
        // caso 4 
        case "Formosa":
            kms = 3558
            break;
        // caso 5
        case "Buenos Aires":
            kms = 2551
            break;
        // caso 6
        case "La Rioja":
            kms = 3070
            break;
        // caso 7 
        case "Mendoza":
            kms = 2800
            break;
        // caso 8 
        case "Neuquén":
            kms = 1930
            break;
        // caso 9
        case "Entre Ríos":
            kms = 2876
            break;
        // caso 10
        case "Misiones":
            kms = 3675
            break;
        // caso 11 
        case "Chubut":
            kms = 1180
            break;
        // caso 12 
        case "Chaco":
            kms = 3390
            break;
        // caso 13
        case "Santa Cruz":
            kms = 0
            break;
        // caso 14
        case "Catamarca":
            kms = 3075
            break;
        // caso 15 
        case "Tucumán":
            kms = 3225
            break;
        // caso 16 
        case "Salta":
            kms = 3532
            break;
        // caso 17
        case "San Juan":
            kms = 2860
            break;
        // caso 18
        case "San Luis":
            kms = 2540
            break;
        // caso 19
        case "Jujuy":
            kms = 3565
            break;
        // caso 20 
        case "Santa Fe":
            kms = 2845
            break;
        // caso 21
        case "La Pampa":
            kms = 2035
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 3065
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 593
            break;
        // caso 24 
        case "Río Negro":
            kms = 1675
            break;
        
    }

}
//CATAMARCA OK
if (prov1 === "Catamarca") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1155
            break;
        // caso 2
        case "Córdoba":
            kms = 440
            break;
        // caso 3 
        case "Corrientes":
            kms = 845
            break;
        // caso 4 
        case "Formosa":
            kms = 988
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1188
            break;
        // caso 6
        case "La Rioja":
            kms = 156
            break;
        // caso 7 
        case "Mendoza":
            kms = 773
            break;
        // caso 8 
        case "Neuquén":
            kms = 1588
            break;
        // caso 9
        case "Entre Ríos":
            kms = 801
            break;
        // caso 10
        case "Misiones":
            kms = 1160
            break;
        // caso 11 
        case "Chubut":
            kms = 1895
            break;
        // caso 12 
        case "Chaco":
            kms = 822
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3075
            break;
        // caso 14
        case "Catamarca":
            kms = 0
            break;
        // caso 15 
        case "Tucumán":
            kms = 232
            break;
        // caso 16 
        case "Salta":
            kms = 539
            break;
        // caso 17
        case "San Juan":
            kms = 606
            break;
        // caso 18
        case "San Luis":
            kms = 705
            break;
        // caso 19
        case "Jujuy":
            kms = 572
            break;
        // caso 20 
        case "Santa Fe":
            kms = 770
            break;
        // caso 21
        case "La Pampa":
            kms = 1040
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 212
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3668
            break;
        // caso 24 
        case "Río Negro":
            kms = 1634
            break;
        
    }

}
//TUCUMAN OK
if (prov1 === "Tucumán") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1203
            break;
        // caso 2
        case "Córdoba":
            kms = 590
            break;
        // caso 3 
        case "Corrientes":
            kms = 791
            break;
        // caso 4 
        case "Formosa":
            kms = 936
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1309
            break;
        // caso 6
        case "La Rioja":
            kms = 388
            break;
        // caso 7 
        case "Mendoza":
            kms = 1005
            break;
        // caso 8 
        case "Neuquén":
            kms = 1860
            break;
        // caso 9
        case "Entre Ríos":
            kms = 798
            break;
        // caso 10
        case "Misiones":
            kms = 1106
            break;
        // caso 11 
        case "Chubut":
            kms = 2045
            break;
        // caso 12 
        case "Chaco":
            kms = 765
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3225
            break;
        // caso 14
        case "Catamarca":
            kms = 232
            break;
        // caso 15 
        case "Tucumán":
            kms = 0
            break;
        // caso 16 
        case "Salta":
            kms = 307
            break;
        // caso 17
        case "San Juan":
            kms = 838
            break;
        // caso 18
        case "San Luis":
            kms = 938
            break;
        // caso 19
        case "Jujuy":
            kms = 340
            break;
        // caso 20 
        case "Santa Fe":
            kms = 767
            break;
        // caso 21
        case "La Pampa":
            kms = 1190
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 160
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3818
            break;
        // caso 24 
        case "Río Negro":
            kms = 1784
            break;
        
    }

}
//SALTA OK
if (prov1 === "Salta") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1510
            break;
        // caso 2
        case "Córdoba":
            kms = 897
            break;
        // caso 3 
        case "Corrientes":
            kms = 803
            break;
        // caso 4 
        case "Formosa":
            kms = 948
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1614
            break;
        // caso 6
        case "La Rioja":
            kms = 695
            break;
        // caso 7 
        case "Mendoza":
            kms = 1227
            break;
        // caso 8 
        case "Neuquén":
            kms = 2082
            break;
        // caso 9
        case "Entre Ríos":
            kms = 1105
            break;
        // caso 10
        case "Misiones":
            kms = 1118
            break;
        // caso 11 
        case "Chubut":
            kms = 2352
            break;
        // caso 12 
        case "Chaco":
            kms = 780
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3532
            break;
        // caso 14
        case "Catamarca":
            kms = 539
            break;
        // caso 15 
        case "Tucumán":
            kms = 307
            break;
        // caso 16 
        case "Salta":
            kms = 0
            break;
        // caso 17
        case "San Juan":
            kms = 1145
            break;
        // caso 18
        case "San Luis":
            kms = 1245
            break;
        // caso 19
        case "Jujuy":
            kms = 99
            break;
        // caso 20 
        case "Santa Fe":
            kms = 1074
            break;
        // caso 21
        case "La Pampa":
            kms = 1497
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 467
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 4125
            break;
        // caso 24 
        case "Río Negro":
            kms = 2091
            break;
        
    }

}
//SAN JUAN OK
if (prov1 === "San Juan") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1110
            break;
        // caso 2
        case "Córdoba":
            kms = 500
            break;
        // caso 3 
        case "Corrientes":
            kms = 1398
            break;
        // caso 4 
        case "Formosa":
            kms = 1543
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1213
            break;
        // caso 6
        case "La Rioja":
            kms = 450
            break;
        // caso 7 
        case "Mendoza":
            kms = 167
            break;
        // caso 8 
        case "Neuquén":
            kms = 1022
            break;
        // caso 9
        case "Entre Ríos":
            kms = 861
            break;
        // caso 10
        case "Misiones":
            kms = 1758
            break;
        // caso 11 
        case "Chubut":
            kms = 1680
            break;
        // caso 12 
        case "Chaco":
            kms = 1420
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2860
            break;
        // caso 14
        case "Catamarca":
            kms = 606
            break;
        // caso 15 
        case "Tucumán":
            kms = 838
            break;
        // caso 16 
        case "Salta":
            kms = 1145
            break;
        // caso 17
        case "San Juan":
            kms = 0
            break;
        // caso 18
        case "San Luis":
            kms = 320
            break;
        // caso 19
        case "Jujuy":
            kms = 1220
            break;
        // caso 20 
        case "Santa Fe":
            kms = 830
            break;
        // caso 21
        case "La Pampa":
            kms = 825
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 810
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3453
            break;
        // caso 24 
        case "Río Negro":
            kms = 1419
            break;
        
    }

}
//SAN LUIS OK
if (prov1 === "San Luis") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 790
            break;
        // caso 2
        case "Córdoba":
            kms = 420
            break;
        // caso 3 
        case "Corrientes":
            kms = 1318
            break;
        // caso 4 
        case "Formosa":
            kms = 1463
            break;
        // caso 5
        case "Buenos Aires":
            kms = 894
            break;
        // caso 6
        case "La Rioja":
            kms = 550
            break;
        // caso 7 
        case "Mendoza":
            kms = 260
            break;
        // caso 8 
        case "Neuquén":
            kms = 883
            break;
        // caso 9
        case "Entre Ríos":
            kms = 656
            break;
        // caso 10
        case "Misiones":
            kms = 1633
            break;
        // caso 11 
        case "Chubut":
            kms = 1360
            break;
        // caso 12 
        case "Chaco":
            kms = 1295
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2540
            break;
        // caso 14
        case "Catamarca":
            kms = 705
            break;
        // caso 15 
        case "Tucumán":
            kms = 938
            break;
        // caso 16 
        case "Salta":
            kms = 1245
            break;
        // caso 17
        case "San Juan":
            kms = 320
            break;
        // caso 18
        case "San Luis":
            kms = 0
            break;
        // caso 19
        case "Jujuy":
            kms = 1320
            break;
        // caso 20 
        case "Santa Fe":
            kms = 625
            break;
        // caso 21
        case "La Pampa":
            kms = 505
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 850
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3133
            break;
        // caso 24 
        case "Río Negro":
            kms = 1099
            break;
        
    }

}
//JUJUY OK
if (prov1 === "Jujuy") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1543
            break;
        // caso 2
        case "Córdoba":
            kms = 930
            break;
        // caso 3 
        case "Corrientes":
            kms = 883
            break;
        // caso 4 
        case "Formosa":
            kms = 960
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1645
            break;
        // caso 6
        case "La Rioja":
            kms = 770
            break;
        // caso 7 
        case "Mendoza":
            kms = 1345
            break;
        // caso 8 
        case "Neuquén":
            kms = 2200
            break;
        // caso 9
        case "Entre Ríos":
            kms = 1138
            break;
        // caso 10
        case "Misiones":
            kms = 1198
            break;
        // caso 11 
        case "Chubut":
            kms = 2385
            break;
        // caso 12 
        case "Chaco":
            kms = 860
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3565
            break;
        // caso 14
        case "Catamarca":
            kms = 572
            break;
        // caso 15 
        case "Tucumán":
            kms = 340
            break;
        // caso 16 
        case "Salta":
            kms = 99
            break;
        // caso 17
        case "San Juan":
            kms = 1220
            break;
        // caso 18
        case "San Luis":
            kms = 1320
            break;
        // caso 19
        case "Jujuy":
            kms = 0
            break;
        // caso 20 
        case "Santa Fe":
            kms = 1107
            break;
        // caso 21
        case "La Pampa":
            kms = 1530
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 500
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 4158
            break;
        // caso 24 
        case "Río Negro":
            kms = 2124
            break;
        
    }

}
//SANTA FE OK
if (prov1 === "Santa Fe") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 478
            break;
        // caso 2
        case "Córdoba":
            kms = 330
            break;
        // caso 3 
        case "Corrientes":
            kms = 568
            break;
        // caso 4 
        case "Formosa":
            kms = 713
            break;
        // caso 5
        case "Buenos Aires":
            kms = 527
            break;
        // caso 6
        case "La Rioja":
            kms = 765
            break;
        // caso 7 
        case "Mendoza":
            kms = 885
            break;
        // caso 8 
        case "Neuquén":
            kms = 1347
            break;
        // caso 9
        case "Entre Ríos":
            kms = 31
            break;
        // caso 10
        case "Misiones":
            kms = 883
            break;
        // caso 11 
        case "Chubut":
            kms = 1665
            break;
        // caso 12 
        case "Chaco":
            kms = 545
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2845
            break;
        // caso 14
        case "Catamarca":
            kms = 770
            break;
        // caso 15 
        case "Tucumán":
            kms = 767
            break;
        // caso 16 
        case "Salta":
            kms = 1074
            break;
        // caso 17
        case "San Juan":
            kms = 830
            break;
        // caso 18
        case "San Luis":
            kms = 625
            break;
        // caso 19
        case "Jujuy":
            kms = 1107
            break;
        // caso 20 
        case "Santa Fe":
            kms = 0
            break;
        // caso 21
        case "La Pampa":
            kms = 810
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 607
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3438
            break;
        // caso 24 
        case "Río Negro":
            kms = 1404
            break;
        
    }

}
//LA PAMPA OK
if (prov1 === "La Pampa") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 620
            break;
        // caso 2
        case "Córdoba":
            kms = 600
            break;
        // caso 3 
        case "Corrientes":
            kms = 1378
            break;
        // caso 4 
        case "Formosa":
            kms = 1523
            break;
        // caso 5
        case "Buenos Aires":
            kms = 670
            break;
        // caso 6
        case "La Rioja":
            kms = 1035
            break;
        // caso 7 
        case "Mendoza":
            kms = 765
            break;
        // caso 8 
        case "Neuquén":
            kms = 537
            break;
        // caso 9
        case "Entre Ríos":
            kms = 841
            break;
        // caso 10
        case "Misiones":
            kms = 1660
            break;
        // caso 11 
        case "Chubut":
            kms = 855
            break;
        // caso 12 
        case "Chaco":
            kms = 1475
            break;
        // caso 13
        case "Santa Cruz":
            kms = 2035
            break;
        // caso 14
        case "Catamarca":
            kms = 1040
            break;
        // caso 15 
        case "Tucumán":
            kms = 1190
            break;
        // caso 16 
        case "Salta":
            kms = 1497
            break;
        // caso 17
        case "San Juan":
            kms = 825
            break;
        // caso 18
        case "San Luis":
            kms = 505
            break;
        // caso 19
        case "Jujuy":
            kms = 1530
            break;
        // caso 20 
        case "Santa Fe":
            kms = 810
            break;
        // caso 21
        case "La Pampa":
            kms = 0
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 1030
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 2628
            break;
        // caso 24 
        case "Río Negro":
            kms = 594
            break;
        
    }

}
//SANTIAGO DEL ESTERO OK
if (prov1 === "Santiago del Estero") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 1043
            break;
        // caso 2
        case "Córdoba":
            kms = 430
            break;
        // caso 3 
        case "Corrientes":
            kms = 633
            break;
        // caso 4 
        case "Formosa":
            kms = 776
            break;
        // caso 5
        case "Buenos Aires":
            kms = 1184
            break;
        // caso 6
        case "La Rioja":
            kms = 360
            break;
        // caso 7 
        case "Mendoza":
            kms = 977
            break;
        // caso 8 
        case "Neuquén":
            kms = 1567
            break;
        // caso 9
        case "Entre Ríos":
            kms = 638
            break;
        // caso 10
        case "Misiones":
            kms = 948
            break;
        // caso 11 
        case "Chubut":
            kms = 1885
            break;
        // caso 12 
        case "Chaco":
            kms = 610
            break;
        // caso 13
        case "Santa Cruz":
            kms = 3065
            break;
        // caso 14
        case "Catamarca":
            kms = 212
            break;
        // caso 15 
        case "Tucumán":
            kms = 160
            break;
        // caso 16 
        case "Salta":
            kms = 467
            break;
        // caso 17
        case "San Juan":
            kms = 810
            break;
        // caso 18
        case "San Luis":
            kms = 850
            break;
        // caso 19
        case "Jujuy":
            kms = 500
            break;
        // caso 20 
        case "Santa Fe":
            kms = 607
            break;
        // caso 21
        case "La Pampa":
            kms = 1030
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 0
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 3658
            break;
        // caso 24 
        case "Río Negro":
            kms = 1624
            break;
        
    }

}
//TIERRA DEL FUEGO OK
if (prov1 === "Tierra del Fuego, Antártida e Islas del Atlántico Sur") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 3228
            break;
        // caso 2
        case "Córdoba":
            kms = 3228
            break;
        // caso 3 
        case "Corrientes":
            kms = 3960
            break;
        // caso 4 
        case "Formosa":
            kms = 4151
            break;
        // caso 5
        case "Buenos Aires":
            kms = 3132
            break;
        // caso 6
        case "La Rioja":
            kms = 3663
            break;
        // caso 7 
        case "Mendoza":
            kms = 3393
            break;
        // caso 8 
        case "Neuquén":
            kms = 2523
            break;
        // caso 9
        case "Entre Ríos":
            kms = 3469
            break;
        // caso 10
        case "Misiones":
            kms = 4268
            break;
        // caso 11 
        case "Chubut":
            kms = 1773
            break;
        // caso 12 
        case "Chaco":
            kms = 3983
            break;
        // caso 13
        case "Santa Cruz":
            kms = 593
            break;
        // caso 14
        case "Catamarca":
            kms = 3668
            break;
        // caso 15 
        case "Tucumán":
            kms = 3818
            break;
        // caso 16 
        case "Salta":
            kms = 4125
            break;
        // caso 17
        case "San Juan":
            kms = 3453
            break;
        // caso 18
        case "San Luis":
            kms = 3133
            break;
        // caso 19
        case "Jujuy":
            kms = 4158
            break;
        // caso 20 
        case "Santa Fe":
            kms = 3438
            break;
        // caso 21
        case "La Pampa":
            kms = 2628
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 3658
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 0
            break;
        // caso 24 
        case "Río Negro":
            kms = 2268
            break;
        
    }

}
//RIO NEGRO OK
if (prov1 === "Río Negro") {
    
    switch (prov2) {
        // caso 1
        case "Ciudad Autónoma de Buenos Aires":
            kms = 960
            break;
        // caso 2
        case "Córdoba":
            kms = 1194
            break;
        // caso 3 
        case "Corrientes":
            kms = 2046
            break;
        // caso 4 
        case "Formosa":
            kms = 2117
            break;
        // caso 5
        case "Buenos Aires":
            kms = 957
            break;
        // caso 6
        case "La Rioja":
            kms = 1629
            break;
        // caso 7 
        case "Mendoza":
            kms = 1359
            break;
        // caso 8 
        case "Neuquén":
            kms = 660
            break;
        // caso 9
        case "Entre Ríos":
            kms = 1435
            break;
        // caso 10
        case "Misiones":
            kms = 2000
            break;
        // caso 11 
        case "Chubut":
            kms = 495
            break;
        // caso 12 
        case "Chaco":
            kms = 2069
            break;
        // caso 13
        case "Santa Cruz":
            kms = 1675
            break;
        // caso 14
        case "Catamarca":
            kms = 1634
            break;
        // caso 15 
        case "Tucumán":
            kms = 1784
            break;
        // caso 16 
        case "Salta":
            kms = 2091
            break;
        // caso 17
        case "San Juan":
            kms = 1419
            break;
        // caso 18
        case "San Luis":
            kms = 1099
            break;
        // caso 19
        case "Jujuy":
            kms = 2124
            break;
        // caso 20 
        case "Santa Fe":
            kms = 1404
            break;
        // caso 21
        case "La Pampa":
            kms = 594
            break;
        // caso 22
        case "Santiago del Estero":
            kms = 1624
            break;
        // caso 24 
        case "Tierra del Fuego, Antártida e Islas del Atlántico Sur":
            kms = 2268
            break;
        // caso 24 
        case "Río Negro":
            kms = 0
            break;
        
    }

}

console.log(kms)
    return kms

}


