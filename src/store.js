import React from 'react';
import Category from './components/Category.js';

var categories = [];

let animal_serisi = [
    {
        "price": "75",
        "imgs": [
            { url: require("./images/animal_serisi/IMG_1985.JPG") },
            { url: require("./images/animal_serisi/IMG_1984.JPG")}
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/animal_serisi/IMG_2027.JPG")},
            { url: require("./images/animal_serisi/IMG_2026.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/animal_serisi/IMG_1987.JPG")},
            { url: require("./images/animal_serisi/IMG_1986.JPG") }
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/animal_serisi/IMG_2081.JPG")},
            { url: require("./images/animal_serisi/IMG_2082.JPG")},
            { url: require("./images/animal_serisi/IMG_2083.JPG") }
        ]
    },

];

let cicek = [
    {
        "price": "75",
        "imgs": [
            { url: require("./images/cicek/IMG_2004.JPG")},
            { url: require("./images/cicek/IMG_2006.JPG")},
            { url: require("./images/cicek/IMG_2005.JPG") }
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/cicek/IMG_2010.JPG")},
            { url: require("./images/cicek/IMG_2011.JPG") },
            { url: require("./images/cicek/IMG_2012.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/cicek/IMG_2024.JPG")},
            { url: require("./images/cicek/IMG_2025.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/cicek/IMG_2041.JPG")},
            { url: require("./images/cicek/IMG_2042.JPG")},
            { url: require("./images/cicek/IMG_2043.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/cicek/IMG_2045.JPG")},
            { url: require("./images/cicek/IMG_2046.JPG")},
            { url: require("./images/cicek/IMG_2047.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/cicek/IMG_2084.JPG")},
            { url: require("./images/cicek/IMG_2085.JPG")},
            { url: require("./images/cicek/IMG_2086.JPG") }
        ]
    },

];



let earth = [
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_1988.JPG")},
            { url: require("./images/earth/IMG_1989.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_5234.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_2023.JPG")},
            { url: require("./images/earth/IMG_2022.JPG") },
            { url: require("./images/earth/IMG_2021.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_2090.JPG")},
            { url: require("./images/earth/IMG_2091.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_2149.JPG")},
            { url: require("./images/earth/IMG_2150.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_2151.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/earth/IMG_2152.JPG")}
        ]
    },

];


let girls = [
    {
        "price": "100",
        "imgs": [
            { url: require("./images/girls/IMG_1993.JPG")},
            { url: require("./images/girls/IMG_1994.JPG")}
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/girls/IMG_2049.JPG")},
            { url: require("./images/girls/IMG_2048.JPG") }
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/girls/IMG_2101.JPG")},
            { url: require("./images/girls/IMG_2099.JPG")},
            { url: require("./images/girls/IMG_2100.JPG") }
        ]
    },

];


let imge = [
    {
        "price": "100",
        "imgs": [
            { url: require("./images/imge/IMG_2028.JPG")},
            { url: require("./images/imge/IMG_2029.JPG")},
            { url: require("./images/imge/IMG_2030.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/imge/IMG_2032.JPG")},
            { url: require("./images/imge/IMG_2031.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/imge/IMG_2033.JPG")},
            { url: require("./images/imge/IMG_2034.JPG")},
            { url: require("./images/imge/IMG_2035.JPG") }
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/imge/IMG_2074.JPG")},
            { url: require("./images/imge/IMG_2073.JPG")}
        ]
    },
    {
        "price": "100",
        "imgs": [
            { url: require("./images/imge/IMG_2092.JPG")},
            { url: require("./images/imge/IMG_2093.JPG")},
            { url: require("./images/imge/IMG_2095.JPG") }
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/imge/IMG_2096.JPG")},
            { url: require("./images/imge/IMG_2097.JPG")},
            { url: require("./images/imge/IMG_2098.JPG") }
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/imge/IMG_2102.JPG")},
            { url: require("./images/imge/IMG_2103.JPG")},
            { url: require("./images/imge/IMG_2104.JPG") }
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/imge/IMG_2036.JPG")},
            { url: require("./images/imge/IMG_2037.JPG")}
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/imge/IMG_2058.JPG")},
            { url: require("./images/imge/IMG_2059.JPG")},
            { url: require("./images/imge/IMG_2060.JPG") }
        ]
    }

];

let istanbul = [
    {
        "price": "100",
        "imgs": [
            { url: require("./images/istanbul/IMG_2009.JPG")},
            { url: require("./images/istanbul/IMG_2008.JPG")},
            { url: require("./images/istanbul/IMG_2007.JPG") }
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/istanbul/IMG_2050.JPG")},
            { url: require("./images/istanbul/IMG_2051.JPG")}
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/istanbul/IMG_2054.JPG")},
            { url: require("./images/istanbul/IMG_2053.JPG")},
            { url: require("./images/istanbul/IMG_2052.JPG") }
        ]
    },
    {
        "price": "75",
        "imgs": [
            { url: require("./images/istanbul/IMG_2107.JPG")}
        ]
    }

];

let kozel = [
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/1.JPEG")},
            { url: require("./images/kozel/8.JPG")}
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/11.JPG")},
            { url: require("./images/kozel/10.JPG") }
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/14.JPG")},
            { url: require("./images/kozel/7.JPG") }
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/4.JPG")},
            { url: require("./images/kozel/21.JPG")},
            { url: require("./images/kozel/3.JPG") }
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/6.JPG")}
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/20.jpeg")}
        ]
    },
    {
        "price": "",
        "imgs": [
            { url: require("./images/kozel/24.jpeg")}
        ]
    },

];


let nimet = [
    {
        "price": "50",
        "imgs": [
            { url: require("./images/nimet/IMG_2063.JPG")},
            { url: require("./images/nimet/IMG_2062.JPG")},
            { url: require("./images/nimet/IMG_2061.JPG")}
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/nimet/IMG_2067.JPG")},
            { url: require("./images/nimet/IMG_2069.JPG")},
            { url: require("./images/nimet/IMG_2068.JPG")}
        ]
    },
    {
        "price": "50",
        "imgs": [
            { url: require("./images/nimet/IMG_2108.JPG")},
            { url: require("./images/nimet/IMG_2109.JPG")}
        ]
    },

];

let soyut_cicek = [
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2020.JPG")},
            { url: require("./images/soyut_cicek/IMG_2019.JPG")},
            { url: require("./images/soyut_cicek/IMG_2018.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2040.JPG")},
            { url: require("./images/soyut_cicek/IMG_2039.JPG")},
            { url: require("./images/soyut_cicek/IMG_2038.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2087.JPG")},
            { url: require("./images/soyut_cicek/IMG_2088.JPG")}
        ]
    },

    {
        "price": "50",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2055.JPG")},
            { url: require("./images/soyut_cicek/IMG_2056.JPG")},
            { url: require("./images/soyut_cicek/IMG_2057.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2070.JPG")},
            { url: require("./images/soyut_cicek/IMG_2071.JPG")},
            { url: require("./images/soyut_cicek/IMG_2072.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2075.JPG")},
            { url: require("./images/soyut_cicek/IMG_2076.JPG")},
            { url: require("./images/soyut_cicek/IMG_2077.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2087.JPG")},
            { url: require("./images/soyut_cicek/IMG_2088.JPG")},
            { url: require("./images/soyut_cicek/IMG_2089.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2110.JPG")},
            { url: require("./images/soyut_cicek/IMG_2111.JPG")},
            { url: require("./images/soyut_cicek/IMG_2112.JPG")}
        ]
    },
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_1992.JPG")},
            { url: require("./images/soyut_cicek/IMG_1991.JPG")},
            { url: require("./images/soyut_cicek/IMG_1990.JPG")}
        ]
    },
    
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_1995.JPG")},
            { url: require("./images/soyut_cicek/IMG_1996.JPG")},
            { url: require("./images/soyut_cicek/IMG_1997.JPG")}
        ]
    },
    
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_1998.JPG")},
            { url: require("./images/soyut_cicek/IMG_1999.JPG")}
        ]
    },
    
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2003.JPG")},
            { url: require("./images/soyut_cicek/IMG_2002.JPG")}
        ]
    },
    
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2014.JPG")},
            { url: require("./images/soyut_cicek/IMG_2013.JPG")}
        ]
    },
    
    {
        "price": "150",
        "imgs": [
            { url: require("./images/soyut_cicek/IMG_2015.JPG")},
            { url: require("./images/soyut_cicek/IMG_2017.JPG")},
            { url: require("./images/soyut_cicek/IMG_2016.JPG")}
        ]
    },
];




categories.push(
    <Category
        key="1111" 
        data={animal_serisi}
        name="Animal Serisi"
        desc="22 cm porselen tabak üstü el boyaması."
        thumb={require("./images/animal_serisi/IMG_2027.JPG")}
    />
);
categories.push(
    <Category 
        key="2222"
        data={istanbul}
        name="Istanbul Serisi"
        desc="Rüya kent hediye etmek ister misiniz?"
        thumb={require("./images/istanbul/IMG_2009.JPG")}
    />
);
categories.push(
    <Category 
        key="3333"
        data={kozel}
        name="Kisiye Özel Serisi"
        desc="Istediginiz fotografın tabaga el çizimi karakterlere dönüsmesini ister misiniz? 
              Fiyat belirlemesi fotograftaki figur sayısına göre belirlenmektedir."
        thumb={require("./images/kozel/4.JPG")}
    />
);
categories.push(
    <Category
        key="4444" 
        data={imge}
        name="Imge Serisi"
        desc="Ünlü ressamımız Ergin Inan'ın eserlerinden esinlenilmistir."
        thumb={require("./images/imge/IMG_2033.JPG")}
    />
);
categories.push(
    <Category 
        key="5555"
        data={soyut_cicek}
        name="Soyut Çiçek Serisi"
        desc="Dogadan ilhamla"
        thumb={require("./images/soyut_cicek/IMG_2040.JPG")}
    />
);
categories.push(
    <Category
        key="6666" 
        data={earth}
        name="Earth Serisi"
        desc="Dünya serisi tabaklara, isim bas harflerinizi yazdırabilirsiniz."
        thumb={require("./images/earth/IMG_5234.JPG")}
    />
);
categories.push(
    <Category 
        key="7777"
        data={cicek}
        name="Çiçek Serisi"
        desc="Evinize renk katacak güzeller burada."
        thumb={require("./images/cicek/IMG_2024.JPG")}
    />
);
categories.push(
    <Category 
        key="8888"
        data={girls}
        name="Girlsss Serisi"
        desc="Tabakta yüzünüz olsun ister misiniz?"
        thumb={require("./images/girls/IMG_1993.JPG")}
    />
);
categories.push(
    <Category 
        key="9999"
        data={nimet}
        name="Nimet Serisi"
        desc=""
        thumb={require("./images/nimet/IMG_2067.JPG")}
    />
);

export default categories;