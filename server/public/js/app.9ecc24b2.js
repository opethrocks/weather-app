(function(t){function i(i){for(var a,n,s=i[0],c=i[1],v=i[2],b=0,u=[];b<s.length;b++)n=s[b],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(i);while(u.length)u.shift()();return r.push.apply(r,v||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],a=!0,n=1;n<e.length;n++){var s=e[n];0!==o[s]&&(a=!1)}a&&(r.splice(i--,1),t=c(c.s=e[0]))}return t}var a={},n={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({maps:"maps"}[t]||t)+"."+{maps:"fe311fbc"}[t]+".js"}function c(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var i=[],e={maps:1};n[t]?i.push(n[t]):0!==n[t]&&e[t]&&i.push(n[t]=new Promise((function(i,e){for(var a="css/"+({maps:"maps"}[t]||t)+"."+{maps:"6456a65f"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var v=r[s],b=v.getAttribute("data-href")||v.getAttribute("href");if("stylesheet"===v.rel&&(b===a||b===o))return i()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){v=u[s],b=v.getAttribute("data-href");if(b===a||b===o)return i()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=i,m.onerror=function(i){var a=i&&i.target&&i.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete n[t],m.parentNode.removeChild(m),e(r)},m.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(m)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)i.push(a[2]);else{var r=new Promise((function(i,e){a=o[t]=[i,e]}));i.push(a[2]=r);var v,b=document.createElement("script");b.charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.src=s(t);var u=new Error;v=function(i){b.onerror=b.onload=null,clearTimeout(m);var e=o[t];if(0!==e){if(e){var a=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,e[1](u)}o[t]=void 0}};var m=setTimeout((function(){v({type:"timeout",target:b})}),12e4);b.onerror=b.onload=v,document.head.appendChild(b)}return Promise.all(i)},c.m=t,c.c=a,c.d=function(t,i,e){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)c.d(e,a,function(i){return t[i]}.bind(null,a));return e},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="/",c.oe=function(t){throw console.error(t),t};var v=window["webpackJsonp"]=window["webpackJsonp"]||[],b=v.push.bind(v);v.push=i,v=v.slice();for(var u=0;u<v.length;u++)i(v[u]);var m=b;r.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},1399:function(t,i,e){},"1af2":function(t,i,e){},"4edb":function(t,i,e){"use strict";var a=e("1399"),n=e.n(a);n.a},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Conditions")]),t._v(" | "),e("router-link",{attrs:{to:"/weather-maps"}},[t._v("Maps")])],1),e("router-view")],1)},o=[],r={},s=r,c=(e("59f3"),e("2877")),v=Object(c["a"])(s,n,o,!1,null,"2b61cb32",null),b=v.exports,u=(e("d3b7"),e("8c4f")),m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"flex-container"},[e("dropdown-component",{on:{selectState:t.selectState,selectCountry:t.selectCountry}}),e("input-component",{attrs:{autoCompleteData:t.autoCompleteData},on:{newInput:t.autoComplete,selectCity:t.selectCity}}),e("div",{staticClass:"flex-item"},[e("button",{staticClass:"button is-info is-rounded is-small",staticStyle:{"margin-top":"1em","margin-right":"1em"},on:{click:t.searchImperial}},[t._v(" Imperial ")]),e("button",{staticClass:"button is-success is-rounded is-small",staticStyle:{"margin-top":"1em"},on:{click:t.searchMetric}},[t._v(" Metric ")])]),e("br"),e("transition",{attrs:{name:"fade"}},[t.currentWeather?e("div",[e("current-conditions",{attrs:{forecastWeather:t.weatherForecast,currentWeather:t.currentWeather,unitSelected:t.selectedUnit,isActive:t.toggleForecast,cityData:t.currentCity.data}})],1):t._e()])],1)])},l=[],A=(e("d81d"),e("5530")),d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"bounce","enter-active-class":"bounceInLeft","leave-active-class":"bounceOutRight"}},[t.isActive?t._e():e("div",[e("div",{staticClass:"box",attrs:{id:"round-corners"}},[t.cityData[0].state?e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v(" "+t._s(t.cityData[0].name)+", "+t._s(t.cityData[0].state)+" ")],1):e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v(" "+t._s(t.cityData[0].name)+", "+t._s(t.cityData[0].country)+" ")],1),e("p",{staticClass:"is-size-4 has-text-weight-semibold capitalize"},[t._v(" "+t._s(t.getWeather[0].description)+" ")]),e("p",{staticClass:"is-size-4 has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"thermometer-half"}}),t._v(" "+t._s(Math.round(t.currentWeather.main.temp))+t._s(t.formatUnits)+" ")],1),e("div",{attrs:{id:"icon"}},[e("i",{class:"wi wi-owm-"+t.getWeather[0].icon,style:{color:t.randomColor()}})]),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"wind"}}),t._v(" Wind: "+t._s(Math.round(t.currentWeather.wind.speed))+" Mph ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"water"}}),t._v(" Humidity: "+t._s(t.currentWeather.main.humidity)+"% ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"sun"}}),e("font-awesome-icon",{attrs:{icon:"long-arrow-alt-up"}}),t._v(" Sunrise: "+t._s(t.formatTime(t.currentWeather.sys.sunrise))+" ")],1),e("p",{staticClass:"pb-2 has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"sun"}}),e("font-awesome-icon",{attrs:{icon:"long-arrow-alt-down"}}),t._v(" Sunset: "+t._s(t.formatTime(t.currentWeather.sys.sunset))+" ")],1),e("button",{staticClass:"button is-link is-small",on:{click:t.toggleForecast}},[t._v(" Show Forecast ")])])])]),e("forecast",{attrs:{isActive:t.isActive,forecastWeather:t.forecastWeather,unitSelected:t.unitSelected,cityData:t.cityData}})],1)},p=[],h=(e("25f0"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{name:"bounce","enter-active-class":"bounceInLeft","leave-active-class":"bounceOutRight"}},[t.isActive?e("div",[e("div",{staticClass:"box"},[t.cityData[0].state?e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v(" "+t._s(t.cityData[0].name)+", "+t._s(t.cityData[0].state)+" ")],1):e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v(" "+t._s(t.cityData[0].name)+", "+t._s(t.cityData[0].country)+" ")],1),e("div",{staticClass:"flex-container"},t._l(t.getForecast,(function(i){return e("div",{key:i.dt},t._l(i.weather,(function(a){return e("div",{key:a.id},[e("div",{staticClass:"flex-item"},[e("p",{staticClass:"has-text-weight-semibold is-size-6",attrs:{id:"description"}},[t._v(" "+t._s(a.description)+" ")]),e("p",{staticClass:"has-text-weight-semibold is-size-6",attrs:{id:"description"}},[e("font-awesome-icon",{attrs:{icon:"thermometer-half"}}),t._v(" "+t._s(Math.round(i.main.temp))+t._s(t.formatUnits)+" ")],1),e("div",{attrs:{id:"icon"}},[e("i",{class:"wi wi-owm-"+a.icon,style:{color:t.randomColor()}})]),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"clock"}}),t._v(" "+t._s(t.formatTime(i.dt))+" ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"calendar-alt"}}),t._v(" "+t._s(t.formatDate(i.dt))+" ")],1)])])})),0)})),0),e("button",{staticClass:"button is-link is-small",on:{click:t.toggleConditions}},[t._v(" Show Conditions ")])])]):t._e()])],1)}),f=[],C=(e("4de4"),{name:"Forecast",data:function(){return{units:null}},props:{isActive:{type:Boolean,default:function(){}},forecastWeather:{type:Object,default:function(){}},unitSelected:{type:String,default:function(){}},cityData:{type:Array,default:function(){}}},methods:{toggleConditions:function(){this.$store.dispatch("toggleForecast")},randomColor:function(){return"#"+((1<<24)*Math.random()|0).toString(16)},formatTime:function(t){return new Date(1e3*t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},formatDate:function(t){return new Date(1e3*t).toLocaleDateString([],{month:"2-digit",day:"2-digit"})}},computed:{getForecast:function(){return this.forecastWeather.list.filter((function(t,i){return i<10}))},getIcon:function(){return this.forecastIcon.filter((function(t,i){return i<10}))},formatUnits:function(){return"imperial"===this.unitSelected?"°F":"°C"}}}),y=C,S=(e("cfcb"),Object(c["a"])(y,h,f,!1,null,"733cefee",null)),g=S.exports,w={name:"CurrentConditions",components:{Forecast:g},props:{isActive:{type:Boolean,default:function(){}},forecastWeather:{type:Object,default:function(){}},currentWeather:{type:Object,default:function(){}},unitSelected:{type:String,default:function(){return""}},cityData:{type:Array,default:function(){}}},methods:{toggleForecast:function(){this.$store.dispatch("toggleForecast")},randomColor:function(){return"#"+((1<<24)*Math.random()|0).toString(16)},formatTime:function(t){return new Date(1e3*t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}},computed:{formatUnits:function(){return"imperial"===this.unitSelected?"°F":"°C"},getWeather:function(){return this.currentWeather.weather.map((function(t){return t}))},getForecast:function(){return this.forecastWeather.list}}},I=w,T=(e("ed16"),Object(c["a"])(I,d,p,!1,null,"4b0b29c6",null)),D=T.exports,M=e("2f62"),N=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dropdown-container"},[e("div",{staticClass:"dropdown is-left",class:{"is-active":t.activeStateDropdown},on:{click:t.toggleStateDropdown}},[e("div",{staticClass:"dropdown-trigger"},[e("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu3"}},[e("span",[t._v(t._s(t.stateCase(t.stateDropdownText)))]),t._m(0)])]),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu3",role:"menu"}},[e("div",{staticClass:"dropdown-content",attrs:{id:"dropdown-flex"}},t._l(t.states,(function(i){return e("a",{key:i.name,staticClass:"dropdown-item",class:{"is-active":i.isActive},attrs:{href:"#"},on:{click:function(e){return t.selectStateDropdownItem(i)}}},[t._v(" "+t._s(t.stateCase(i.name))+" ")])})),0)])]),e("h3",{staticClass:"pl-2 pr-2 pt-1 is-size-5 has-text-weight-semibold"},[t._v("OR")]),e("div",{staticClass:"dropdown is-right",class:{"is-active":t.activeCountryDropdown},on:{click:t.toggleCountryDropdown}},[e("div",{staticClass:"dropdown-trigger"},[e("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu3"}},[e("span",[t._v(t._s(t.countryDropdownText))]),t._m(1)])]),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu3",role:"menu"}},[e("div",{staticClass:"dropdown-content",attrs:{id:"dropdown-flex"}},t._l(t.countries,(function(i){return e("a",{key:i.name,staticClass:"dropdown-item",class:{"is-active":i.isActive},attrs:{href:"#"},on:{click:function(e){return t.selectCountryDropdownItem(i)}}},[t._v(" "+t._s(i.name)+" ")])})),0)])])])},E=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"icon is-right",attrs:{id:"icon"}},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"icon is-right",attrs:{id:"icon"}},[e("i",{staticClass:"fa fa-angle-down"})])}],O=(e("a15b"),e("b0c0"),e("ac1f"),e("1276"),[{name:"Afghanistan",abbreviation:"AF",isActive:!1},{name:"Albania",abbreviation:"AL",isActive:!1},{name:"Algeria",abbreviation:"DZ",isActive:!1},{name:"American Samoa",abbreviation:"AS",isActive:!1},{name:"Andorra",abbreviation:"AD",isActive:!1},{name:"Angola",abbreviation:"AO",isActive:!1},{name:"Anguilla",abbreviation:"AI",isActive:!1},{name:"Antarctica",abbreviation:"AQ",isActive:!1},{name:"Antigua and Barbuda",abbreviation:"AG",isActive:!1},{name:"Argentina",abbreviation:"AR",isActive:!1},{name:"Armenia",abbreviation:"AM",isActive:!1},{name:"Aruba",abbreviation:"AW",isActive:!1},{name:"Australia",abbreviation:"AU",isActive:!1},{name:"Austria",abbreviation:"AT",isActive:!1},{name:"Azerbaijan",abbreviation:"AZ",isActive:!1},{name:"Bahamas",abbreviation:"BS",isActive:!1},{name:"Bahrain",abbreviation:"BH",isActive:!1},{name:"Bangladesh",abbreviation:"BD",isActive:!1},{name:"Barbados",abbreviation:"BB",isActive:!1},{name:"Belarus",abbreviation:"BY",isActive:!1},{name:"Belgium",abbreviation:"BE",isActive:!1},{name:"Belize",abbreviation:"BZ",isActive:!1},{name:"Benin",abbreviation:"BJ",isActive:!1},{name:"Bermuda",abbreviation:"BM",isActive:!1},{name:"Bhutan",abbreviation:"BT",isActive:!1},{name:"Bolivia",abbreviation:"BO",isActive:!1},{name:"Bosnia and Herzegovina",abbreviation:"BA",isActive:!1},{name:"Botswana",abbreviation:"BW",isActive:!1},{name:"Bouvet Island",abbreviation:"BV",isActive:!1},{name:"Brazil",abbreviation:"BR",isActive:!1},{name:"British Indian Ocean Territory",abbreviation:"IO",isActive:!1},{name:"Brunei",abbreviation:"BN",isActive:!1},{name:"Bulgaria",abbreviation:"BG",isActive:!1},{name:"Burkina Faso",abbreviation:"BF",isActive:!1},{name:"Burundi",abbreviation:"BI",isActive:!1},{name:"Cambodia",abbreviation:"KH",isActive:!1},{name:"Cameroon",abbreviation:"CM",isActive:!1},{name:"Canada",abbreviation:"CA",isActive:!1},{name:"Cape Verde",abbreviation:"CV",isActive:!1},{name:"Cayman Islands",abbreviation:"KY",isActive:!1},{name:"Central African Republic",abbreviation:"CF",isActive:!1},{name:"Chad",abbreviation:"TD",isActive:!1},{name:"Chile",abbreviation:"CL",isActive:!1},{name:"China",abbreviation:"CN",isActive:!1},{name:"Christmas Island",abbreviation:"CX",isActive:!1},{name:"Cocos (Keeling) Islands",abbreviation:"CC",isActive:!1},{name:"Colombia",abbreviation:"CO",isActive:!1},{name:"Comoros",abbreviation:"KM",isActive:!1},{name:"Congo",abbreviation:"CG",isActive:!1},{name:"Cook Islands",abbreviation:"CK",isActive:!1},{name:"Costa Rica",abbreviation:"CR",isActive:!1},{name:"Croatia",abbreviation:"HR",isActive:!1},{name:"Cuba",abbreviation:"CU",isActive:!1},{name:"Cyprus",abbreviation:"CY",isActive:!1},{name:"Czech Republic",abbreviation:"CZ",isActive:!1},{name:"Denmark",abbreviation:"DK",isActive:!1},{name:"Djibouti",abbreviation:"DJ",isActive:!1},{name:"Dominica",abbreviation:"DM",isActive:!1},{name:"Dominican Republic",abbreviation:"DO",isActive:!1},{name:"East Timor",abbreviation:"TP",isActive:!1},{name:"Ecuador",abbreviation:"EC",isActive:!1},{name:"Egypt",abbreviation:"EG",isActive:!1},{name:"El Salvador",abbreviation:"SV",isActive:!1},{name:"Equatorial Guinea",abbreviation:"GQ",isActive:!1},{name:"Eritrea",abbreviation:"ER",isActive:!1},{name:"Estonia",abbreviation:"EE",isActive:!1},{name:"Ethiopia",abbreviation:"ET",isActive:!1},{name:"Falkland Islands",abbreviation:"FK",isActive:!1},{name:"Faroe Islands",abbreviation:"FO",isActive:!1},{name:"Fiji Islands",abbreviation:"FJ",isActive:!1},{name:"Finland",abbreviation:"FI",isActive:!1},{name:"France",abbreviation:"FR",isActive:!1},{name:"French Guiana",abbreviation:"GF",isActive:!1},{name:"French Polynesia",abbreviation:"PF",isActive:!1},{name:"French Southern territories",abbreviation:"TF",isActive:!1},{name:"Gabon",abbreviation:"GA",isActive:!1},{name:"Gambia",abbreviation:"GM",isActive:!1},{name:"Georgia",abbreviation:"GE",isActive:!1},{name:"Germany",abbreviation:"DE",isActive:!1},{name:"Ghana",abbreviation:"GH",isActive:!1},{name:"Gibraltar",abbreviation:"GI",isActive:!1},{name:"Greece",abbreviation:"GR",isActive:!1},{name:"Greenland",abbreviation:"GL",isActive:!1},{name:"Grenada",abbreviation:"GD",isActive:!1},{name:"Guadeloupe",abbreviation:"GP",isActive:!1},{name:"Guam",abbreviation:"GU",isActive:!1},{name:"Guatemala",abbreviation:"GT",isActive:!1},{name:"Guernsey",abbreviation:"GG",isActive:!1},{name:"Guinea",abbreviation:"GN",isActive:!1},{name:"Guinea-Bissau",abbreviation:"GW",isActive:!1},{name:"Guyana",abbreviation:"GY",isActive:!1},{name:"Haiti",abbreviation:"HT",isActive:!1},{name:"Heard Island and McDonald Islands",abbreviation:"HM",isActive:!1},{name:"Holy See (Vatican City State)",abbreviation:"VA",isActive:!1},{name:"Honduras",abbreviation:"HN",isActive:!1},{name:"Hungary",abbreviation:"HU",isActive:!1},{name:"Iceland",abbreviation:"IS",isActive:!1},{name:"India",abbreviation:"IN",isActive:!1},{name:"Indonesia",abbreviation:"ID",isActive:!1},{name:"Iran",abbreviation:"IR",isActive:!1},{name:"Iraq",abbreviation:"IQ",isActive:!1},{name:"Ireland",abbreviation:"IE",isActive:!1},{name:"Isle of Man",abbreviation:"IM",isActive:!1},{name:"Israel",abbreviation:"IL",isActive:!1},{name:"Italy",abbreviation:"IT",isActive:!1},{name:"Ivory Coast",abbreviation:"CI",isActive:!1},{name:"Jamaica",abbreviation:"JM",isActive:!1},{name:"Japan",abbreviation:"JP",isActive:!1},{name:"Jersey",abbreviation:"JE",isActive:!1},{name:"Jordan",abbreviation:"JO",isActive:!1},{name:"Kazakhstan",abbreviation:"KZ",isActive:!1},{name:"Kenya",abbreviation:"KE",isActive:!1},{name:"Kiribati",abbreviation:"KI",isActive:!1},{name:"Kuwait",abbreviation:"KW",isActive:!1},{name:"Kyrgyzstan",abbreviation:"KG",isActive:!1},{name:"Laos",abbreviation:"LA",isActive:!1},{name:"Latvia",abbreviation:"LV",isActive:!1},{name:"Lebanon",abbreviation:"LB",isActive:!1},{name:"Lesotho",abbreviation:"LS",isActive:!1},{name:"Liberia",abbreviation:"LR",isActive:!1},{name:"Libyan Arab Jamahiriya",abbreviation:"LY",isActive:!1},{name:"Liechtenstein",abbreviation:"LI",isActive:!1},{name:"Lithuania",abbreviation:"LT",isActive:!1},{name:"Luxembourg",abbreviation:"LU",isActive:!1},{name:"Macao",abbreviation:"MO",isActive:!1},{name:"North Macedonia",abbreviation:"MK",isActive:!1},{name:"Madagascar",abbreviation:"MG",isActive:!1},{name:"Malawi",abbreviation:"MW",isActive:!1},{name:"Malaysia",abbreviation:"MY",isActive:!1},{name:"Maldives",abbreviation:"MV",isActive:!1},{name:"Mali",abbreviation:"ML",isActive:!1},{name:"Malta",abbreviation:"MT",isActive:!1},{name:"Marshall Islands",abbreviation:"MH",isActive:!1},{name:"Martinique",abbreviation:"MQ",isActive:!1},{name:"Mauritania",abbreviation:"MR",isActive:!1},{name:"Mauritius",abbreviation:"MU",isActive:!1},{name:"Mayotte",abbreviation:"YT",isActive:!1},{name:"Mexico",abbreviation:"MX",isActive:!1},{name:"Micronesia, Federated States of",abbreviation:"FM",isActive:!1},{name:"Moldova",abbreviation:"MD",isActive:!1},{name:"Monaco",abbreviation:"MC",isActive:!1},{name:"Mongolia",abbreviation:"MN",isActive:!1},{name:"Montenegro",abbreviation:"ME",isActive:!1},{name:"Montserrat",abbreviation:"MS",isActive:!1},{name:"Morocco",abbreviation:"MA",isActive:!1},{name:"Mozambique",abbreviation:"MZ",isActive:!1},{name:"Myanmar",abbreviation:"MM",isActive:!1},{name:"Namibia",abbreviation:"NA",isActive:!1},{name:"Nauru",abbreviation:"NR",isActive:!1},{name:"Nepal",abbreviation:"NP",isActive:!1},{name:"Netherlands",abbreviation:"NL",isActive:!1},{name:"Netherlands Antilles",abbreviation:"AN",isActive:!1},{name:"New Caledonia",abbreviation:"NC",isActive:!1},{name:"New Zealand",abbreviation:"NZ",isActive:!1},{name:"Nicaragua",abbreviation:"NI",isActive:!1},{name:"Niger",abbreviation:"NE",isActive:!1},{name:"Nigeria",abbreviation:"NG",isActive:!1},{name:"Niue",abbreviation:"NU",isActive:!1},{name:"Norfolk Island",abbreviation:"NF",isActive:!1},{name:"North Korea",abbreviation:"KP",isActive:!1},{name:"Northern Ireland",abbreviation:"GB",isActive:!1},{name:"Northern Mariana Islands",abbreviation:"MP",isActive:!1},{name:"Norway",abbreviation:"NO",isActive:!1},{name:"Oman",abbreviation:"OM",isActive:!1},{name:"Pakistan",abbreviation:"PK",isActive:!1},{name:"Palau",abbreviation:"PW",isActive:!1},{name:"Palestine",abbreviation:"PS",isActive:!1},{name:"Panama",abbreviation:"PA",isActive:!1},{name:"Papua New Guinea",abbreviation:"PG",isActive:!1},{name:"Paraguay",abbreviation:"PY",isActive:!1},{name:"Peru",abbreviation:"PE",isActive:!1},{name:"Philippines",abbreviation:"PH",isActive:!1},{name:"Pitcairn",abbreviation:"PN",isActive:!1},{name:"Poland",abbreviation:"PL",isActive:!1},{name:"Portugal",abbreviation:"PT",isActive:!1},{name:"Puerto Rico",abbreviation:"PR",isActive:!1},{name:"Qatar",abbreviation:"QA",isActive:!1},{name:"Reunion",abbreviation:"RE",isActive:!1},{name:"Romania",abbreviation:"RO",isActive:!1},{name:"Russian Federation",abbreviation:"RU",isActive:!1},{name:"Rwanda",abbreviation:"RW",isActive:!1},{name:"Saint Helena",abbreviation:"SH",isActive:!1},{name:"Saint Kitts and Nevis",abbreviation:"KN",isActive:!1},{name:"Saint Lucia",abbreviation:"LC",isActive:!1},{name:"Saint Pierre and Miquelon",abbreviation:"PM",isActive:!1},{name:"Saint Vincent and the Grenadines",abbreviation:"VC",isActive:!1},{name:"Samoa",abbreviation:"WS",isActive:!1},{name:"San Marino",abbreviation:"SM",isActive:!1},{name:"Sao Tome and Principe",abbreviation:"ST",isActive:!1},{name:"Saudi Arabia",abbreviation:"SA",isActive:!1},{name:"Senegal",abbreviation:"SN",isActive:!1},{name:"Serbia",abbreviation:"RS",isActive:!1},{name:"Seychelles",abbreviation:"SC",isActive:!1},{name:"Sierra Leone",abbreviation:"SL",isActive:!1},{name:"Singapore",abbreviation:"SG",isActive:!1},{name:"Slovakia",abbreviation:"SK",isActive:!1},{name:"Slovenia",abbreviation:"SI",isActive:!1},{name:"Solomon Islands",abbreviation:"SB",isActive:!1},{name:"Somalia",abbreviation:"SO",isActive:!1},{name:"South Africa",abbreviation:"ZA",isActive:!1},{name:"South Georgia and the South Sandwich Islands",abbreviation:"GS",isActive:!1},{name:"South Korea",abbreviation:"KR",isActive:!1},{name:"South Sudan",abbreviation:"SS",isActive:!1},{name:"Spain",abbreviation:"ES",isActive:!1},{name:"Sri Lanka",abbreviation:"LK",isActive:!1},{name:"Sudan",abbreviation:"SD",isActive:!1},{name:"Suriname",abbreviation:"SR",isActive:!1},{name:"Svalbard and Jan Mayen",abbreviation:"SJ",isActive:!1},{name:"Swaziland",abbreviation:"SZ",isActive:!1},{name:"Sweden",abbreviation:"SE",isActive:!1},{name:"Switzerland",abbreviation:"CH",isActive:!1},{name:"Syria",abbreviation:"SY",isActive:!1},{name:"Tajikistan",abbreviation:"TJ",isActive:!1},{name:"Tanzania",abbreviation:"TZ",isActive:!1},{name:"Thailand",abbreviation:"TH",isActive:!1},{name:"The Democratic Republic of Congo",abbreviation:"CD",isActive:!1},{name:"Timor-Leste",abbreviation:"TL",isActive:!1},{name:"Togo",abbreviation:"TG",isActive:!1},{name:"Tokelau",abbreviation:"TK",isActive:!1},{name:"Tonga",abbreviation:"TO",isActive:!1},{name:"Trinidad and Tobago",abbreviation:"TT",isActive:!1},{name:"Tunisia",abbreviation:"TN",isActive:!1},{name:"Turkey",abbreviation:"TR",isActive:!1},{name:"Turkmenistan",abbreviation:"TM",isActive:!1},{name:"Turks and Caicos Islands",abbreviation:"TC",isActive:!1},{name:"Tuvalu",abbreviation:"TV",isActive:!1},{name:"Uganda",abbreviation:"UG",isActive:!1},{name:"Ukraine",abbreviation:"UA",isActive:!1},{name:"United Arab Emirates",abbreviation:"AE",isActive:!1},{name:"United Kingdom",abbreviation:"GB",isActive:!1},{name:"United States",abbreviation:"US",isActive:!1},{name:"United States Minor Outlying Islands",abbreviation:"UM",isActive:!1},{name:"Uruguay",abbreviation:"UY",isActive:!1},{name:"Uzbekistan",abbreviation:"UZ",isActive:!1},{name:"Vanuatu",abbreviation:"VU",isActive:!1},{name:"Venezuela",abbreviation:"VE",isActive:!1},{name:"Vietnam",abbreviation:"VN",isActive:!1},{name:"Virgin Islands, British",abbreviation:"VG",isActive:!1},{name:"Virgin Islands, U.S.",abbreviation:"VI",isActive:!1},{name:"Wallis and Futuna",abbreviation:"WF",isActive:!1},{name:"Western Sahara",abbreviation:"EH",isActive:!1},{name:"Yemen",abbreviation:"YE",isActive:!1},{name:"Yugoslavia",abbreviation:"YU",isActive:!1},{name:"Zambia",abbreviation:"ZM",isActive:!1},{name:"Zimbabwe",abbreviation:"ZW",isActive:!1}]),_=O,R=[{name:"ALABAMA",abbreviation:"AL",isActive:!1},{name:"ALASKA",abbreviation:"AK",isActive:!1},{name:"AMERICAN SAMOA",abbreviation:"AS",isActive:!1},{name:"ARIZONA",abbreviation:"AZ",isActive:!1},{name:"ARKANSAS",abbreviation:"AR",isActive:!1},{name:"CALIFORNIA",abbreviation:"CA",isActive:!1},{name:"COLORADO",abbreviation:"CO",isActive:!1},{name:"CONNECTICUT",abbreviation:"CT",isActive:!1},{name:"DELAWARE",abbreviation:"DE",isActive:!1},{name:"DISTRICT OF COLUMBIA",abbreviation:"DC",isActive:!1},{name:"FEDERATED STATES OF MICRONESIA",abbreviation:"FM",isActive:!1},{name:"FLORIDA",abbreviation:"FL",isActive:!1},{name:"GEORGIA",abbreviation:"GA",isActive:!1},{name:"GUAM",abbreviation:"GU",isActive:!1},{name:"HAWAII",abbreviation:"HI",isActive:!1},{name:"IDAHO",abbreviation:"ID",isActive:!1},{name:"ILLINOIS",abbreviation:"IL",isActive:!1},{name:"INDIANA",abbreviation:"IN",isActive:!1},{name:"IOWA",abbreviation:"IA",isActive:!1},{name:"KANSAS",abbreviation:"KS",isActive:!1},{name:"KENTUCKY",abbreviation:"KY",isActive:!1},{name:"LOUISIANA",abbreviation:"LA",isActive:!1},{name:"MAINE",abbreviation:"ME",isActive:!1},{name:"MARSHALL ISLANDS",abbreviation:"MH",isActive:!1},{name:"MARYLAND",abbreviation:"MD",isActive:!1},{name:"MASSACHUSETTS",abbreviation:"MA",isActive:!1},{name:"MICHIGAN",abbreviation:"MI",isActive:!1},{name:"MINNESOTA",abbreviation:"MN",isActive:!1},{name:"MISSISSIPPI",abbreviation:"MS",isActive:!1},{name:"MISSOURI",abbreviation:"MO",isActive:!1},{name:"MONTANA",abbreviation:"MT",isActive:!1},{name:"NEBRASKA",abbreviation:"NE",isActive:!1},{name:"NEVADA",abbreviation:"NV",isActive:!1},{name:"NEW HAMPSHIRE",abbreviation:"NH",isActive:!1},{name:"NEW JERSEY",abbreviation:"NJ",isActive:!1},{name:"NEW MEXICO",abbreviation:"NM",isActive:!1},{name:"NEW YORK",abbreviation:"NY",isActive:!1},{name:"NORTH CAROLINA",abbreviation:"NC",isActive:!1},{name:"NORTH DAKOTA",abbreviation:"ND",isActive:!1},{name:"NORTHERN MARIANA ISLANDS",abbreviation:"MP",isActive:!1},{name:"OHIO",abbreviation:"OH",isActive:!1},{name:"OKLAHOMA",abbreviation:"OK",isActive:!1},{name:"OREGON",abbreviation:"OR",isActive:!1},{name:"PALAU",abbreviation:"PW",isActive:!1},{name:"PENNSYLVANIA",abbreviation:"PA",isActive:!1},{name:"PUERTO RICO",abbreviation:"PR",isActive:!1},{name:"RHODE ISLAND",abbreviation:"RI",isActive:!1},{name:"SOUTH CAROLINA",abbreviation:"SC",isActive:!1},{name:"SOUTH DAKOTA",abbreviation:"SD",isActive:!1},{name:"TENNESSEE",abbreviation:"TN",isActive:!1},{name:"TEXAS",abbreviation:"TX",isActive:!1},{name:"UTAH",abbreviation:"UT",isActive:!1},{name:"VERMONT",abbreviation:"VT",isActive:!1},{name:"VIRGIN ISLANDS",abbreviation:"VI",isActive:!1},{name:"VIRGINIA",abbreviation:"VA",isActive:!1},{name:"WASHINGTON",abbreviation:"WA",isActive:!1},{name:"WEST VIRGINIA",abbreviation:"WV",isActive:!1},{name:"WISCONSIN",abbreviation:"WI",isActive:!1},{name:"WYOMING",abbreviation:"WY",isActive:!1}],L=R,G={name:"DropdownComponent",data:function(){return{countries:_,states:L,state:null,country:null,activeStateDropdown:!1,activeCountryDropdown:!1,stateDropdownText:"Select State",countryDropdownText:"Select Country"}},methods:{stateCase:function(t){return t.toLowerCase().split(" ").map((function(t){return t[0].toUpperCase()+t.substr(1)})).join(" ")},selectStateDropdownItem:function(t){this.states.map((function(t){return t.isActive=!1})),t.isActive=!0,this.state=t.abbreviation,this.stateDropdownText=t.name,this.country=null,this.countryDropdownText="Select Country",this.$emit("selectState",{state:this.state,country:this.country})},selectCountryDropdownItem:function(t){this.countries.map((function(t){return t.isActive=!1})),t.isActive=!0,this.country=t.abbreviation,this.countryDropdownText=t.name,this.state=null,this.stateDropdownText="Select State",this.$emit("selectCountry",{country:this.country,state:this.state})},toggleStateDropdown:function(){!1===this.activeStateDropdown?this.activeStateDropdown=!0:this.activeStateDropdown=!1,this.activeCountryDropdown=!1,this.input=null},toggleCountryDropdown:function(){!1===this.activeCountryDropdown?this.activeCountryDropdown=!0:this.activeCountryDropdown=!1,this.activeStateDropdown=!1,this.input=null}}},F=G,W=(e("5ba2"),Object(c["a"])(F,N,E,!1,null,"0d2aae31",null)),U=W.exports,P=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"field",attrs:{id:"input"}},[e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input is-info is-focused",attrs:{type:"text",placeholder:"Search for city"},domProps:{value:t.input},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.searchImperial(i)},input:[function(i){i.target.composing||(t.input=i.target.value)},t.newInput]}}),e("span",{staticClass:"icon is-left"},[e("font-awesome-icon",{attrs:{icon:"search"}})],1),e("span",{staticClass:"icon is-right"},[e("a",{staticClass:"delete is-small",on:{click:t.clearCity}})])])]),t.isActive?e("div",{staticClass:"box"},[e("ul",t._l(t.autoCompleteData,(function(i){return e("li",{key:i.id},[e("a",{staticClass:"has-text-weight-semibold",on:{click:function(e){return t.selectCity(i.name)},select:function(i){return t.selectCity()}}},[t._v(t._s(i.name))])])})),0)]):t._e()])},B=[],k={name:"InputComponent",data:function(){return{isActive:!1,input:null}},props:{autoCompleteData:{type:Array,default:function(){}}},methods:{newInput:function(){this.$emit("newInput",this.input),this.isActive=!0,""===this.input&&(this.isActive=!1)},selectCity:function(t){this.input=t,!1===this.activeAutoComplete?this.activeAutoComplete=!0:this.activeAutoComplete=!1,this.isActive=!1,this.$emit("selectCity",this.input)},clearCity:function(){this.input=null}}},H=k,x=Object(c["a"])(H,P,B,!1,null,null,null),K=x.exports,j={name:"Home",components:{CurrentConditions:D,DropdownComponent:U,InputComponent:K},data:function(){return{input:null,state:null,country:null,city:null,units:null,cityCode:null}},computed:Object(A["a"])({getCityCode:function(){return this.currentCity.data.map((function(t){return t.id}))},getCityCoords:function(){return this.currentCity.data.map((function(t){return t.coord}))}},Object(M["c"])(["currentWeather","weatherForecast","selectedUnit","toggleForecast","currentCity","autoCompleteData"])),methods:Object(A["a"])(Object(A["a"])(Object(A["a"])({},Object(M["b"])(["currentWeather","weatherForecast","addCity","getAutoComplete","addCityCoords"])),Object(M["b"])({weather:"currentWeather",forecast:"weatherForecast",addCity:"addCity",getAc:"getAutoComplete",coord:"addCityCoords"})),{},{searchImperial:function(){var t=this;this.city=this.input,this.units="imperial",this.addCity({city:this.city,state:this.state,country:this.country}),setTimeout((function(){t.cityCode=t.getCityCode[0],t.weather({city:t.cityCode,unit:t.units}),t.forecast({city:t.cityCode,unit:t.units}),t.coord({coord:t.getCityCoords,city:t.city,state:t.state,country:t.country})}),500)},searchMetric:function(){var t=this;this.city=this.input,this.units="metric",this.addCity({city:this.city,state:this.state,country:this.country}),setTimeout((function(){t.cityCode=t.getCityCode[0],t.weather({city:t.cityCode,unit:t.units}),t.forecast({city:t.cityCode,unit:t.units}),t.coord({coord:t.getCityCoords,city:t.city,state:t.state,country:t.country})}),500)},selectState:function(t){this.state=t.state,this.country=t.country,this.input=null},selectCountry:function(t){this.country=t.country,this.state=t.state,this.input=null},selectCity:function(t){this.input=t},autoComplete:function(t){this.input=t,this.getAc({input:this.input,state:this.state,country:this.country})}})},V=j,Y=(e("4edb"),Object(c["a"])(V,m,l,!1,null,"2732e12d",null)),z=Y.exports;a["a"].use(u["a"]);var J=[{path:"/",name:"Home",component:z},{path:"/weather-maps",name:"WeatherMaps",component:function(){return e.e("maps").then(e.bind(null,"f6b0"))}}],Z=new u["a"]({routes:J}),$=Z,q=(e("99af"),e("bc3a")),Q=e.n(q);a["a"].use(M["a"]);var X=new M["a"].Store({state:{currentWeather:null,weatherForecast:null,selectedUnits:null,isForecastActive:!1,currentCity:null,cityCoords:{city:"Timbuktu",country:"ML",coord:[{lon:-3.00742,lat:16.773479}]},autoComplete:null},mutations:{ADD_WEATHER:function(t,i){var e=i;t.currentWeather=e},ADD_FORECAST:function(t,i){var e=i;t.weatherForecast=e},SET_UNIT:function(t,i){var e=i;t.selectedUnits=e},DELETE_CITY:function(t){t.currentWeather=null,t.weatherForecast=null},ADD_CITY:function(t,i){t.currentCity=i},AUTO_COMPLETE:function(t,i){t.autoComplete=i},TOGGLE_FORECAST:function(t){!1===t.isForecastActive?t.isForecastActive=!0:t.isForecastActive=!1},ADD_CITY_COORDS:function(t,i){t.cityCoords=i}},actions:{currentWeather:function(t,i){var e=t.commit,a=i.city,n=i.unit,o="64aaf5b71da8c0001799c0054eea79ca";Q()({method:"GET",url:"https://api.openweathermap.org/data/2.5/weather?id=".concat(a,"&appid=").concat(o),params:{units:n}}).then((function(t){e("ADD_WEATHER",t.data),e("SET_UNIT",n)})).catch((function(t){t.response&&alert(t.message)}))},weatherForecast:function(t,i){var e=t.commit,a=i.city,n=i.unit,o="64aaf5b71da8c0001799c0054eea79ca";Q()({method:"GET",url:"https://api.openweathermap.org/data/2.5/forecast?id=".concat(a,"&appid=").concat(o),params:{units:n}}).then((function(t){e("ADD_FORECAST",t.data),e("SET_UNIT",n)})).catch((function(t){t.response&&alert(JSON.stringify(t.message))}))},deleteCity:function(t){var i=t.commit;i("DELETE_CITY")},addCity:function(t,i){var e=t.commit,a=i.city,n=i.state,o=i.country,r="api/citySearch";Q.a.post(r,{data:{city:a,state:n,country:o}}).then((function(t){e("ADD_CITY",t.data)})).catch((function(t){return alert(t.message)}))},getAutoComplete:function(t,i){var e=t.commit,a=i.input,n=i.state,o=i.country;Q()({method:"GET",url:"api/autoComplete",params:{q:a,state:n,country:o}}).then((function(t){e("AUTO_COMPLETE",t.data)})).catch((function(t){alert(t.message)}))},addCityCoords:function(t,i){var e=t.commit;e("ADD_CITY_COORDS",i)},toggleForecast:function(t){var i=t.commit;i("TOGGLE_FORECAST")}},getters:{currentWeather:function(t){return t.currentWeather},weatherForecast:function(t){return t.weatherForecast},selectedUnit:function(t){return t.selectedUnits},toggleForecast:function(t){return t.isForecastActive},currentCity:function(t){return t.currentCity},autoCompleteData:function(t){return t.autoComplete},cityCoords:function(t){return t.cityCoords}}}),tt=(e("92c6"),e("ecee")),it=e("c074"),et=e("ad3d"),at=(e("66c9"),e("9ddc"),e("1f54"),e("e11e"));delete at["Icon"].Default.prototype._getIconUrl,at["Icon"].Default.mergeOptions({iconRetinaUrl:e("584d"),iconUrl:e("6397"),shadowUrl:e("e2b9")}),tt["c"].add(it["f"]),tt["c"].add(it["h"]),tt["c"].add(it["c"]),tt["c"].add(it["j"]),tt["c"].add(it["i"]),tt["c"].add(it["g"]),tt["c"].add(it["e"]),tt["c"].add(it["d"]),tt["c"].add(it["b"]),tt["c"].add(it["a"]),a["a"].config.productionTip=!1,a["a"].component("font-awesome-icon",et["a"]),new a["a"]({router:$,store:X,render:function(t){return t(b)}}).$mount("#app")},"59f3":function(t,i,e){"use strict";var a=e("81bc"),n=e.n(a);n.a},"5ba2":function(t,i,e){"use strict";var a=e("1af2"),n=e.n(a);n.a},6706:function(t,i,e){},"81bc":function(t,i,e){},cfcb:function(t,i,e){"use strict";var a=e("6706"),n=e.n(a);n.a},ed16:function(t,i,e){"use strict";var a=e("fd04"),n=e.n(a);n.a},fd04:function(t,i,e){}});
//# sourceMappingURL=app.9ecc24b2.js.map