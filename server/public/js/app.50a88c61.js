(function(i){function t(t){for(var a,n,s=t[0],c=t[1],v=t[2],b=0,u=[];b<s.length;b++)n=s[b],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(i[a]=c[a]);m&&m(t);while(u.length)u.shift()();return r.push.apply(r,v||[]),e()}function e(){for(var i,t=0;t<r.length;t++){for(var e=r[t],a=!0,n=1;n<e.length;n++){var s=e[n];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),i=c(c.s=e[0]))}return i}var a={},n={app:0},o={app:0},r=[];function s(i){return c.p+"js/"+({maps:"maps"}[i]||i)+"."+{maps:"36853704"}[i]+".js"}function c(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(i){var t=[],e={maps:1};n[i]?t.push(n[i]):0!==n[i]&&e[i]&&t.push(n[i]=new Promise((function(t,e){for(var a="css/"+({maps:"maps"}[i]||i)+"."+{maps:"2501184b"}[i]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var v=r[s],b=v.getAttribute("data-href")||v.getAttribute("href");if("stylesheet"===v.rel&&(b===a||b===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){v=u[s],b=v.getAttribute("data-href");if(b===a||b===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+i+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete n[i],m.parentNode.removeChild(m),e(r)},m.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(m)})).then((function(){n[i]=0})));var a=o[i];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,e){a=o[i]=[t,e]}));t.push(a[2]=r);var v,b=document.createElement("script");b.charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.src=s(i);var u=new Error;v=function(t){b.onerror=b.onload=null,clearTimeout(m);var e=o[i];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+i+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,e[1](u)}o[i]=void 0}};var m=setTimeout((function(){v({type:"timeout",target:b})}),12e4);b.onerror=b.onload=v,document.head.appendChild(b)}return Promise.all(t)},c.m=i,c.c=a,c.d=function(i,t,e){c.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},c.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},c.t=function(i,t){if(1&t&&(i=c(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var a in i)c.d(e,a,function(t){return i[t]}.bind(null,a));return e},c.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return c.d(t,"a",t),t},c.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},c.p="/",c.oe=function(i){throw console.error(i),i};var v=window["webpackJsonp"]=window["webpackJsonp"]||[],b=v.push.bind(v);v.push=t,v=v.slice();for(var u=0;u<v.length;u++)t(v[u]);var m=b;r.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"03a7":function(i,t,e){"use strict";var a=e("50ed"),n=e.n(a);n.a},"208e":function(i,t,e){"use strict";var a=e("6d7f"),n=e.n(a);n.a},"50ed":function(i,t,e){},"56d7":function(i,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[i._v("Conditions")]),i._v(" | "),e("router-link",{attrs:{to:"/weather-maps"}},[i._v("Maps")])],1),e("router-view")],1)},o=[],r={},s=r,c=(e("59f3"),e("2877")),v=Object(c["a"])(s,n,o,!1,null,"2b61cb32",null),b=v.exports,u=(e("d3b7"),e("8c4f")),m=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"flex-container"},[e("dropdown-component",{on:{selectState:i.selectState,selectCountry:i.selectCountry}}),e("input-component",{attrs:{autoCompleteData:i.autoCompleteData},on:{newInput:i.autoComplete,selectCity:i.selectCity}}),e("div",{staticClass:"flex-item"},[e("button",{staticClass:"button is-info is-rounded is-small",staticStyle:{"margin-top":"1em","margin-right":"1em"},on:{click:i.searchImperial}},[i._v(" Imperial ")]),e("button",{staticClass:"button is-success is-rounded is-small",staticStyle:{"margin-top":"1em"},on:{click:i.searchMetric}},[i._v(" Metric ")])]),e("br"),e("transition",{attrs:{name:"fade"}},[i.currentWeather?e("div",[e("current-conditions",{attrs:{forecastWeather:i.weatherForecast,currentWeather:i.currentWeather,unitSelected:i.selectedUnit,isActive:i.toggleForecast,cityData:i.currentCity.data}})],1):i._e()])],1)])},l=[],A=(e("d81d"),e("5530")),d=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("transition",{attrs:{name:"bounce","enter-active-class":"bounceInLeft","leave-active-class":"bounceOutRight"}},[i.isActive?i._e():e("div",[e("div",{staticClass:"box",attrs:{id:"round-corners"}},[i.cityData[0].state?e("p",{staticClass:"label is-size-3 pt-3 is-small"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),i._v(" "+i._s(i.cityData[0].name)+", "+i._s(i.cityData[0].state)+" ")],1):e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),i._v(" "+i._s(i.cityData[0].name)+", "+i._s(i.cityData[0].country)+" ")],1),e("p",{staticClass:"is-size-4 has-text-weight-semibold capitalize"},[i._v(" "+i._s(i.getWeather[0].description)+" ")]),e("p",{staticClass:"is-size-4 pb-2 has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"thermometer-half"}}),i._v(" "+i._s(Math.round(i.currentWeather.main.temp))+i._s(i.formatUnits)+" ")],1),e("button",{staticClass:"button is-rounded is-small is-warning",on:{click:i.toggleForecast}},[i._v(" Show Forecast ")]),e("div",{attrs:{id:"icon"}},[e("i",{class:"wi wi-owm-"+i.getWeather[0].icon,style:{color:i.randomColor()}})]),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"wind"}}),i._v(" Wind: "+i._s(Math.round(i.currentWeather.wind.speed))+" Mph ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"water"}}),i._v(" Humidity: "+i._s(i.currentWeather.main.humidity)+"% ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"sun"}}),e("font-awesome-icon",{attrs:{icon:"long-arrow-alt-up"}}),i._v(" Sunrise: "+i._s(i.formatTime(i.currentWeather.sys.sunrise))+" ")],1),e("p",{staticClass:"pb-2 has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"sun"}}),e("font-awesome-icon",{attrs:{icon:"long-arrow-alt-down"}}),i._v(" Sunset: "+i._s(i.formatTime(i.currentWeather.sys.sunset))+" ")],1)])])]),e("forecast",{attrs:{isActive:i.isActive,forecastWeather:i.forecastWeather,unitSelected:i.unitSelected,cityData:i.cityData}})],1)},p=[],h=(e("25f0"),function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("transition",{attrs:{name:"bounce","enter-active-class":"bounceInLeft","leave-active-class":"bounceOutRight"}},[i.isActive?e("div",[e("div",{staticClass:"box"},[i.cityData[0].state?e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),i._v(" "+i._s(i.cityData[0].name)+", "+i._s(i.cityData[0].state)+" ")],1):e("p",{staticClass:"label is-size-3 pt-3"},[e("font-awesome-icon",{attrs:{icon:"location-arrow"}}),i._v(" "+i._s(i.cityData[0].name)+", "+i._s(i.cityData[0].country)+" ")],1),e("button",{staticClass:"button is-rounded is-warning is-small",on:{click:i.toggleConditions}},[i._v(" Show Conditions ")]),e("div",{staticClass:"flex-container"},i._l(i.getForecast,(function(t){return e("div",{key:t.dt},i._l(t.weather,(function(a){return e("div",{key:a.id},[e("div",{staticClass:"flex-item"},[e("p",{staticClass:"has-text-weight-semibold is-size-6",attrs:{id:"description"}},[i._v(" "+i._s(a.description)+" ")]),e("p",{staticClass:"has-text-weight-semibold is-size-6",attrs:{id:"description"}},[e("font-awesome-icon",{attrs:{icon:"thermometer-half"}}),i._v(" "+i._s(Math.round(t.main.temp))+i._s(i.formatUnits)+" ")],1),e("div",{attrs:{id:"icon"}},[e("i",{class:"wi wi-owm-"+a.icon,style:{color:i.randomColor()}})]),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"clock"}}),i._v(" "+i._s(i.formatTime(t.dt))+" ")],1),e("p",{staticClass:"has-text-weight-semibold"},[e("font-awesome-icon",{attrs:{icon:"calendar-alt"}}),i._v(" "+i._s(i.formatDate(t.dt))+" ")],1)])])})),0)})),0)])]):i._e()])],1)}),f=[],C=(e("4de4"),{name:"Forecast",data:function(){return{units:null}},props:{isActive:{type:Boolean,default:function(){}},forecastWeather:{type:Object,default:function(){}},unitSelected:{type:String,default:function(){}},cityData:{type:Array,default:function(){}}},methods:{toggleConditions:function(){this.$store.dispatch("toggleForecast")},randomColor:function(){return"#"+((1<<24)*Math.random()|0).toString(16)},formatTime:function(i){return new Date(1e3*i).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},formatDate:function(i){return new Date(1e3*i).toLocaleDateString([],{month:"2-digit",day:"2-digit"})}},computed:{getForecast:function(){return this.forecastWeather.list.filter((function(i,t){return t<10}))},getIcon:function(){return this.forecastIcon.filter((function(i,t){return t<10}))},formatUnits:function(){return"imperial"===this.unitSelected?"°F":"°C"}}}),y=C,S=(e("03a7"),Object(c["a"])(y,h,f,!1,null,"23fb0f28",null)),g=S.exports,w={name:"CurrentConditions",components:{Forecast:g},props:{isActive:{type:Boolean,default:function(){}},forecastWeather:{type:Object,default:function(){}},currentWeather:{type:Object,default:function(){}},unitSelected:{type:String,default:function(){return""}},cityData:{type:Array,default:function(){}}},methods:{toggleForecast:function(){this.$store.dispatch("toggleForecast")},randomColor:function(){return"#"+((1<<24)*Math.random()|0).toString(16)},formatTime:function(i){return new Date(1e3*i).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}},computed:{formatUnits:function(){return"imperial"===this.unitSelected?"°F":"°C"},getWeather:function(){return this.currentWeather.weather.map((function(i){return i}))},getForecast:function(){return this.forecastWeather.list}}},I=w,T=(e("79fd"),Object(c["a"])(I,d,p,!1,null,"086611eb",null)),D=T.exports,M=e("2f62"),N=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"dropdown-container"},[e("div",{staticClass:"dropdown is-left",class:{"is-active":i.activeStateDropdown},on:{click:i.toggleStateDropdown}},[e("div",{staticClass:"dropdown-trigger"},[e("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu3"}},[e("span",[i._v(i._s(i.stateCase(i.stateDropdownText)))]),i._m(0)])]),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu3",role:"menu"}},[e("div",{staticClass:"dropdown-content",attrs:{id:"dropdown-flex"}},i._l(i.states,(function(t){return e("a",{key:t.name,staticClass:"dropdown-item",class:{"is-active":t.isActive},attrs:{href:"#"},on:{click:function(e){return i.selectStateDropdownItem(t)}}},[i._v(" "+i._s(i.stateCase(t.name))+" ")])})),0)])]),e("h3",{staticClass:"pl-2 pr-2 pt-1 is-size-5 has-text-weight-semibold"},[i._v("OR")]),e("div",{staticClass:"dropdown is-right",class:{"is-active":i.activeCountryDropdown},on:{click:i.toggleCountryDropdown}},[e("div",{staticClass:"dropdown-trigger"},[e("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu3"}},[e("span",[i._v(i._s(i.countryDropdownText))]),i._m(1)])]),e("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu3",role:"menu"}},[e("div",{staticClass:"dropdown-content",attrs:{id:"dropdown-flex"}},i._l(i.countries,(function(t){return e("a",{key:t.name,staticClass:"dropdown-item",class:{"is-active":t.isActive},attrs:{href:"#"},on:{click:function(e){return i.selectCountryDropdownItem(t)}}},[i._v(" "+i._s(t.name)+" ")])})),0)])])])},E=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("span",{staticClass:"icon is-right",attrs:{id:"icon"}},[e("i",{staticClass:"fa fa-angle-down"})])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("span",{staticClass:"icon is-right",attrs:{id:"icon"}},[e("i",{staticClass:"fa fa-angle-down"})])}],O=(e("a15b"),e("b0c0"),e("ac1f"),e("1276"),[{name:"Afghanistan",abbreviation:"AF",isActive:!1},{name:"Albania",abbreviation:"AL",isActive:!1},{name:"Algeria",abbreviation:"DZ",isActive:!1},{name:"American Samoa",abbreviation:"AS",isActive:!1},{name:"Andorra",abbreviation:"AD",isActive:!1},{name:"Angola",abbreviation:"AO",isActive:!1},{name:"Anguilla",abbreviation:"AI",isActive:!1},{name:"Antarctica",abbreviation:"AQ",isActive:!1},{name:"Antigua and Barbuda",abbreviation:"AG",isActive:!1},{name:"Argentina",abbreviation:"AR",isActive:!1},{name:"Armenia",abbreviation:"AM",isActive:!1},{name:"Aruba",abbreviation:"AW",isActive:!1},{name:"Australia",abbreviation:"AU",isActive:!1},{name:"Austria",abbreviation:"AT",isActive:!1},{name:"Azerbaijan",abbreviation:"AZ",isActive:!1},{name:"Bahamas",abbreviation:"BS",isActive:!1},{name:"Bahrain",abbreviation:"BH",isActive:!1},{name:"Bangladesh",abbreviation:"BD",isActive:!1},{name:"Barbados",abbreviation:"BB",isActive:!1},{name:"Belarus",abbreviation:"BY",isActive:!1},{name:"Belgium",abbreviation:"BE",isActive:!1},{name:"Belize",abbreviation:"BZ",isActive:!1},{name:"Benin",abbreviation:"BJ",isActive:!1},{name:"Bermuda",abbreviation:"BM",isActive:!1},{name:"Bhutan",abbreviation:"BT",isActive:!1},{name:"Bolivia",abbreviation:"BO",isActive:!1},{name:"Bosnia and Herzegovina",abbreviation:"BA",isActive:!1},{name:"Botswana",abbreviation:"BW",isActive:!1},{name:"Bouvet Island",abbreviation:"BV",isActive:!1},{name:"Brazil",abbreviation:"BR",isActive:!1},{name:"British Indian Ocean Territory",abbreviation:"IO",isActive:!1},{name:"Brunei",abbreviation:"BN",isActive:!1},{name:"Bulgaria",abbreviation:"BG",isActive:!1},{name:"Burkina Faso",abbreviation:"BF",isActive:!1},{name:"Burundi",abbreviation:"BI",isActive:!1},{name:"Cambodia",abbreviation:"KH",isActive:!1},{name:"Cameroon",abbreviation:"CM",isActive:!1},{name:"Canada",abbreviation:"CA",isActive:!1},{name:"Cape Verde",abbreviation:"CV",isActive:!1},{name:"Cayman Islands",abbreviation:"KY",isActive:!1},{name:"Central African Republic",abbreviation:"CF",isActive:!1},{name:"Chad",abbreviation:"TD",isActive:!1},{name:"Chile",abbreviation:"CL",isActive:!1},{name:"China",abbreviation:"CN",isActive:!1},{name:"Christmas Island",abbreviation:"CX",isActive:!1},{name:"Cocos (Keeling) Islands",abbreviation:"CC",isActive:!1},{name:"Colombia",abbreviation:"CO",isActive:!1},{name:"Comoros",abbreviation:"KM",isActive:!1},{name:"Congo",abbreviation:"CG",isActive:!1},{name:"Cook Islands",abbreviation:"CK",isActive:!1},{name:"Costa Rica",abbreviation:"CR",isActive:!1},{name:"Croatia",abbreviation:"HR",isActive:!1},{name:"Cuba",abbreviation:"CU",isActive:!1},{name:"Cyprus",abbreviation:"CY",isActive:!1},{name:"Czech Republic",abbreviation:"CZ",isActive:!1},{name:"Denmark",abbreviation:"DK",isActive:!1},{name:"Djibouti",abbreviation:"DJ",isActive:!1},{name:"Dominica",abbreviation:"DM",isActive:!1},{name:"Dominican Republic",abbreviation:"DO",isActive:!1},{name:"East Timor",abbreviation:"TP",isActive:!1},{name:"Ecuador",abbreviation:"EC",isActive:!1},{name:"Egypt",abbreviation:"EG",isActive:!1},{name:"El Salvador",abbreviation:"SV",isActive:!1},{name:"Equatorial Guinea",abbreviation:"GQ",isActive:!1},{name:"Eritrea",abbreviation:"ER",isActive:!1},{name:"Estonia",abbreviation:"EE",isActive:!1},{name:"Ethiopia",abbreviation:"ET",isActive:!1},{name:"Falkland Islands",abbreviation:"FK",isActive:!1},{name:"Faroe Islands",abbreviation:"FO",isActive:!1},{name:"Fiji Islands",abbreviation:"FJ",isActive:!1},{name:"Finland",abbreviation:"FI",isActive:!1},{name:"France",abbreviation:"FR",isActive:!1},{name:"French Guiana",abbreviation:"GF",isActive:!1},{name:"French Polynesia",abbreviation:"PF",isActive:!1},{name:"French Southern territories",abbreviation:"TF",isActive:!1},{name:"Gabon",abbreviation:"GA",isActive:!1},{name:"Gambia",abbreviation:"GM",isActive:!1},{name:"Georgia",abbreviation:"GE",isActive:!1},{name:"Germany",abbreviation:"DE",isActive:!1},{name:"Ghana",abbreviation:"GH",isActive:!1},{name:"Gibraltar",abbreviation:"GI",isActive:!1},{name:"Greece",abbreviation:"GR",isActive:!1},{name:"Greenland",abbreviation:"GL",isActive:!1},{name:"Grenada",abbreviation:"GD",isActive:!1},{name:"Guadeloupe",abbreviation:"GP",isActive:!1},{name:"Guam",abbreviation:"GU",isActive:!1},{name:"Guatemala",abbreviation:"GT",isActive:!1},{name:"Guernsey",abbreviation:"GG",isActive:!1},{name:"Guinea",abbreviation:"GN",isActive:!1},{name:"Guinea-Bissau",abbreviation:"GW",isActive:!1},{name:"Guyana",abbreviation:"GY",isActive:!1},{name:"Haiti",abbreviation:"HT",isActive:!1},{name:"Heard Island and McDonald Islands",abbreviation:"HM",isActive:!1},{name:"Holy See (Vatican City State)",abbreviation:"VA",isActive:!1},{name:"Honduras",abbreviation:"HN",isActive:!1},{name:"Hungary",abbreviation:"HU",isActive:!1},{name:"Iceland",abbreviation:"IS",isActive:!1},{name:"India",abbreviation:"IN",isActive:!1},{name:"Indonesia",abbreviation:"ID",isActive:!1},{name:"Iran",abbreviation:"IR",isActive:!1},{name:"Iraq",abbreviation:"IQ",isActive:!1},{name:"Ireland",abbreviation:"IE",isActive:!1},{name:"Isle of Man",abbreviation:"IM",isActive:!1},{name:"Israel",abbreviation:"IL",isActive:!1},{name:"Italy",abbreviation:"IT",isActive:!1},{name:"Ivory Coast",abbreviation:"CI",isActive:!1},{name:"Jamaica",abbreviation:"JM",isActive:!1},{name:"Japan",abbreviation:"JP",isActive:!1},{name:"Jersey",abbreviation:"JE",isActive:!1},{name:"Jordan",abbreviation:"JO",isActive:!1},{name:"Kazakhstan",abbreviation:"KZ",isActive:!1},{name:"Kenya",abbreviation:"KE",isActive:!1},{name:"Kiribati",abbreviation:"KI",isActive:!1},{name:"Kuwait",abbreviation:"KW",isActive:!1},{name:"Kyrgyzstan",abbreviation:"KG",isActive:!1},{name:"Laos",abbreviation:"LA",isActive:!1},{name:"Latvia",abbreviation:"LV",isActive:!1},{name:"Lebanon",abbreviation:"LB",isActive:!1},{name:"Lesotho",abbreviation:"LS",isActive:!1},{name:"Liberia",abbreviation:"LR",isActive:!1},{name:"Libyan Arab Jamahiriya",abbreviation:"LY",isActive:!1},{name:"Liechtenstein",abbreviation:"LI",isActive:!1},{name:"Lithuania",abbreviation:"LT",isActive:!1},{name:"Luxembourg",abbreviation:"LU",isActive:!1},{name:"Macao",abbreviation:"MO",isActive:!1},{name:"North Macedonia",abbreviation:"MK",isActive:!1},{name:"Madagascar",abbreviation:"MG",isActive:!1},{name:"Malawi",abbreviation:"MW",isActive:!1},{name:"Malaysia",abbreviation:"MY",isActive:!1},{name:"Maldives",abbreviation:"MV",isActive:!1},{name:"Mali",abbreviation:"ML",isActive:!1},{name:"Malta",abbreviation:"MT",isActive:!1},{name:"Marshall Islands",abbreviation:"MH",isActive:!1},{name:"Martinique",abbreviation:"MQ",isActive:!1},{name:"Mauritania",abbreviation:"MR",isActive:!1},{name:"Mauritius",abbreviation:"MU",isActive:!1},{name:"Mayotte",abbreviation:"YT",isActive:!1},{name:"Mexico",abbreviation:"MX",isActive:!1},{name:"Micronesia, Federated States of",abbreviation:"FM",isActive:!1},{name:"Moldova",abbreviation:"MD",isActive:!1},{name:"Monaco",abbreviation:"MC",isActive:!1},{name:"Mongolia",abbreviation:"MN",isActive:!1},{name:"Montenegro",abbreviation:"ME",isActive:!1},{name:"Montserrat",abbreviation:"MS",isActive:!1},{name:"Morocco",abbreviation:"MA",isActive:!1},{name:"Mozambique",abbreviation:"MZ",isActive:!1},{name:"Myanmar",abbreviation:"MM",isActive:!1},{name:"Namibia",abbreviation:"NA",isActive:!1},{name:"Nauru",abbreviation:"NR",isActive:!1},{name:"Nepal",abbreviation:"NP",isActive:!1},{name:"Netherlands",abbreviation:"NL",isActive:!1},{name:"Netherlands Antilles",abbreviation:"AN",isActive:!1},{name:"New Caledonia",abbreviation:"NC",isActive:!1},{name:"New Zealand",abbreviation:"NZ",isActive:!1},{name:"Nicaragua",abbreviation:"NI",isActive:!1},{name:"Niger",abbreviation:"NE",isActive:!1},{name:"Nigeria",abbreviation:"NG",isActive:!1},{name:"Niue",abbreviation:"NU",isActive:!1},{name:"Norfolk Island",abbreviation:"NF",isActive:!1},{name:"North Korea",abbreviation:"KP",isActive:!1},{name:"Northern Ireland",abbreviation:"GB",isActive:!1},{name:"Northern Mariana Islands",abbreviation:"MP",isActive:!1},{name:"Norway",abbreviation:"NO",isActive:!1},{name:"Oman",abbreviation:"OM",isActive:!1},{name:"Pakistan",abbreviation:"PK",isActive:!1},{name:"Palau",abbreviation:"PW",isActive:!1},{name:"Palestine",abbreviation:"PS",isActive:!1},{name:"Panama",abbreviation:"PA",isActive:!1},{name:"Papua New Guinea",abbreviation:"PG",isActive:!1},{name:"Paraguay",abbreviation:"PY",isActive:!1},{name:"Peru",abbreviation:"PE",isActive:!1},{name:"Philippines",abbreviation:"PH",isActive:!1},{name:"Pitcairn",abbreviation:"PN",isActive:!1},{name:"Poland",abbreviation:"PL",isActive:!1},{name:"Portugal",abbreviation:"PT",isActive:!1},{name:"Puerto Rico",abbreviation:"PR",isActive:!1},{name:"Qatar",abbreviation:"QA",isActive:!1},{name:"Reunion",abbreviation:"RE",isActive:!1},{name:"Romania",abbreviation:"RO",isActive:!1},{name:"Russian Federation",abbreviation:"RU",isActive:!1},{name:"Rwanda",abbreviation:"RW",isActive:!1},{name:"Saint Helena",abbreviation:"SH",isActive:!1},{name:"Saint Kitts and Nevis",abbreviation:"KN",isActive:!1},{name:"Saint Lucia",abbreviation:"LC",isActive:!1},{name:"Saint Pierre and Miquelon",abbreviation:"PM",isActive:!1},{name:"Saint Vincent and the Grenadines",abbreviation:"VC",isActive:!1},{name:"Samoa",abbreviation:"WS",isActive:!1},{name:"San Marino",abbreviation:"SM",isActive:!1},{name:"Sao Tome and Principe",abbreviation:"ST",isActive:!1},{name:"Saudi Arabia",abbreviation:"SA",isActive:!1},{name:"Senegal",abbreviation:"SN",isActive:!1},{name:"Serbia",abbreviation:"RS",isActive:!1},{name:"Seychelles",abbreviation:"SC",isActive:!1},{name:"Sierra Leone",abbreviation:"SL",isActive:!1},{name:"Singapore",abbreviation:"SG",isActive:!1},{name:"Slovakia",abbreviation:"SK",isActive:!1},{name:"Slovenia",abbreviation:"SI",isActive:!1},{name:"Solomon Islands",abbreviation:"SB",isActive:!1},{name:"Somalia",abbreviation:"SO",isActive:!1},{name:"South Africa",abbreviation:"ZA",isActive:!1},{name:"South Georgia and the South Sandwich Islands",abbreviation:"GS",isActive:!1},{name:"South Korea",abbreviation:"KR",isActive:!1},{name:"South Sudan",abbreviation:"SS",isActive:!1},{name:"Spain",abbreviation:"ES",isActive:!1},{name:"Sri Lanka",abbreviation:"LK",isActive:!1},{name:"Sudan",abbreviation:"SD",isActive:!1},{name:"Suriname",abbreviation:"SR",isActive:!1},{name:"Svalbard and Jan Mayen",abbreviation:"SJ",isActive:!1},{name:"Swaziland",abbreviation:"SZ",isActive:!1},{name:"Sweden",abbreviation:"SE",isActive:!1},{name:"Switzerland",abbreviation:"CH",isActive:!1},{name:"Syria",abbreviation:"SY",isActive:!1},{name:"Tajikistan",abbreviation:"TJ",isActive:!1},{name:"Tanzania",abbreviation:"TZ",isActive:!1},{name:"Thailand",abbreviation:"TH",isActive:!1},{name:"The Democratic Republic of Congo",abbreviation:"CD",isActive:!1},{name:"Timor-Leste",abbreviation:"TL",isActive:!1},{name:"Togo",abbreviation:"TG",isActive:!1},{name:"Tokelau",abbreviation:"TK",isActive:!1},{name:"Tonga",abbreviation:"TO",isActive:!1},{name:"Trinidad and Tobago",abbreviation:"TT",isActive:!1},{name:"Tunisia",abbreviation:"TN",isActive:!1},{name:"Turkey",abbreviation:"TR",isActive:!1},{name:"Turkmenistan",abbreviation:"TM",isActive:!1},{name:"Turks and Caicos Islands",abbreviation:"TC",isActive:!1},{name:"Tuvalu",abbreviation:"TV",isActive:!1},{name:"Uganda",abbreviation:"UG",isActive:!1},{name:"Ukraine",abbreviation:"UA",isActive:!1},{name:"United Arab Emirates",abbreviation:"AE",isActive:!1},{name:"United Kingdom",abbreviation:"GB",isActive:!1},{name:"United States",abbreviation:"US",isActive:!1},{name:"United States Minor Outlying Islands",abbreviation:"UM",isActive:!1},{name:"Uruguay",abbreviation:"UY",isActive:!1},{name:"Uzbekistan",abbreviation:"UZ",isActive:!1},{name:"Vanuatu",abbreviation:"VU",isActive:!1},{name:"Venezuela",abbreviation:"VE",isActive:!1},{name:"Vietnam",abbreviation:"VN",isActive:!1},{name:"Virgin Islands, British",abbreviation:"VG",isActive:!1},{name:"Virgin Islands, U.S.",abbreviation:"VI",isActive:!1},{name:"Wallis and Futuna",abbreviation:"WF",isActive:!1},{name:"Western Sahara",abbreviation:"EH",isActive:!1},{name:"Yemen",abbreviation:"YE",isActive:!1},{name:"Yugoslavia",abbreviation:"YU",isActive:!1},{name:"Zambia",abbreviation:"ZM",isActive:!1},{name:"Zimbabwe",abbreviation:"ZW",isActive:!1}]),_=O,R=[{name:"ALABAMA",abbreviation:"AL",isActive:!1},{name:"ALASKA",abbreviation:"AK",isActive:!1},{name:"AMERICAN SAMOA",abbreviation:"AS",isActive:!1},{name:"ARIZONA",abbreviation:"AZ",isActive:!1},{name:"ARKANSAS",abbreviation:"AR",isActive:!1},{name:"CALIFORNIA",abbreviation:"CA",isActive:!1},{name:"COLORADO",abbreviation:"CO",isActive:!1},{name:"CONNECTICUT",abbreviation:"CT",isActive:!1},{name:"DELAWARE",abbreviation:"DE",isActive:!1},{name:"DISTRICT OF COLUMBIA",abbreviation:"DC",isActive:!1},{name:"FEDERATED STATES OF MICRONESIA",abbreviation:"FM",isActive:!1},{name:"FLORIDA",abbreviation:"FL",isActive:!1},{name:"GEORGIA",abbreviation:"GA",isActive:!1},{name:"GUAM",abbreviation:"GU",isActive:!1},{name:"HAWAII",abbreviation:"HI",isActive:!1},{name:"IDAHO",abbreviation:"ID",isActive:!1},{name:"ILLINOIS",abbreviation:"IL",isActive:!1},{name:"INDIANA",abbreviation:"IN",isActive:!1},{name:"IOWA",abbreviation:"IA",isActive:!1},{name:"KANSAS",abbreviation:"KS",isActive:!1},{name:"KENTUCKY",abbreviation:"KY",isActive:!1},{name:"LOUISIANA",abbreviation:"LA",isActive:!1},{name:"MAINE",abbreviation:"ME",isActive:!1},{name:"MARSHALL ISLANDS",abbreviation:"MH",isActive:!1},{name:"MARYLAND",abbreviation:"MD",isActive:!1},{name:"MASSACHUSETTS",abbreviation:"MA",isActive:!1},{name:"MICHIGAN",abbreviation:"MI",isActive:!1},{name:"MINNESOTA",abbreviation:"MN",isActive:!1},{name:"MISSISSIPPI",abbreviation:"MS",isActive:!1},{name:"MISSOURI",abbreviation:"MO",isActive:!1},{name:"MONTANA",abbreviation:"MT",isActive:!1},{name:"NEBRASKA",abbreviation:"NE",isActive:!1},{name:"NEVADA",abbreviation:"NV",isActive:!1},{name:"NEW HAMPSHIRE",abbreviation:"NH",isActive:!1},{name:"NEW JERSEY",abbreviation:"NJ",isActive:!1},{name:"NEW MEXICO",abbreviation:"NM",isActive:!1},{name:"NEW YORK",abbreviation:"NY",isActive:!1},{name:"NORTH CAROLINA",abbreviation:"NC",isActive:!1},{name:"NORTH DAKOTA",abbreviation:"ND",isActive:!1},{name:"NORTHERN MARIANA ISLANDS",abbreviation:"MP",isActive:!1},{name:"OHIO",abbreviation:"OH",isActive:!1},{name:"OKLAHOMA",abbreviation:"OK",isActive:!1},{name:"OREGON",abbreviation:"OR",isActive:!1},{name:"PALAU",abbreviation:"PW",isActive:!1},{name:"PENNSYLVANIA",abbreviation:"PA",isActive:!1},{name:"PUERTO RICO",abbreviation:"PR",isActive:!1},{name:"RHODE ISLAND",abbreviation:"RI",isActive:!1},{name:"SOUTH CAROLINA",abbreviation:"SC",isActive:!1},{name:"SOUTH DAKOTA",abbreviation:"SD",isActive:!1},{name:"TENNESSEE",abbreviation:"TN",isActive:!1},{name:"TEXAS",abbreviation:"TX",isActive:!1},{name:"UTAH",abbreviation:"UT",isActive:!1},{name:"VERMONT",abbreviation:"VT",isActive:!1},{name:"VIRGIN ISLANDS",abbreviation:"VI",isActive:!1},{name:"VIRGINIA",abbreviation:"VA",isActive:!1},{name:"WASHINGTON",abbreviation:"WA",isActive:!1},{name:"WEST VIRGINIA",abbreviation:"WV",isActive:!1},{name:"WISCONSIN",abbreviation:"WI",isActive:!1},{name:"WYOMING",abbreviation:"WY",isActive:!1}],L=R,G={name:"DropdownComponent",data:function(){return{countries:_,states:L,state:null,country:null,activeStateDropdown:!1,activeCountryDropdown:!1,stateDropdownText:"Select State",countryDropdownText:"Select Country"}},methods:{stateCase:function(i){return i.toLowerCase().split(" ").map((function(i){return i[0].toUpperCase()+i.substr(1)})).join(" ")},selectStateDropdownItem:function(i){this.states.map((function(i){return i.isActive=!1})),i.isActive=!0,this.state=i.abbreviation,this.stateDropdownText=i.name,this.country=null,this.countryDropdownText="Select Country",this.$emit("selectState",{state:this.state})},selectCountryDropdownItem:function(i){this.countries.map((function(i){return i.isActive=!1})),i.isActive=!0,this.country=i.abbreviation,this.countryDropdownText=i.name,this.state=null,this.stateDropdownText="Select State",this.$emit("selectCountry",{country:this.country})},toggleStateDropdown:function(){!1===this.activeStateDropdown?this.activeStateDropdown=!0:this.activeStateDropdown=!1,this.activeCountryDropdown=!1,this.input=null},toggleCountryDropdown:function(){!1===this.activeCountryDropdown?this.activeCountryDropdown=!0:this.activeCountryDropdown=!1,this.activeStateDropdown=!1,this.input=null}}},F=G,U=(e("208e"),Object(c["a"])(F,N,E,!1,null,"1f68c2e3",null)),P=U.exports,W=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"field",attrs:{id:"input"}},[e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:i.input,expression:"input"}],staticClass:"input is-info is-focused",attrs:{type:"text",placeholder:"Search for city"},domProps:{value:i.input},on:{keyup:function(t){return!t.type.indexOf("key")&&i._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.searchImperial(t)},input:[function(t){t.target.composing||(i.input=t.target.value)},i.newInput]}}),e("span",{staticClass:"icon is-left"},[e("font-awesome-icon",{attrs:{icon:"search"}})],1),e("span",{staticClass:"icon is-right"},[e("a",{staticClass:"delete is-small",on:{click:i.clearCity}})])])]),i.isActive?e("div",{staticClass:"box"},[e("ul",i._l(i.autoCompleteData,(function(t){return e("li",{key:t.id},[e("a",{staticClass:"has-text-weight-semibold",on:{click:function(e){return i.selectCity(t.name)},select:function(t){return i.selectCity()}}},[i._v(i._s(t.name))])])})),0)]):i._e()])},B=[],k={name:"InputComponent",data:function(){return{isActive:!1,input:null}},props:{autoCompleteData:{type:Array,default:function(){}}},methods:{newInput:function(){this.$emit("newInput",this.input),this.isActive=!0,""===this.input&&(this.isActive=!1)},selectCity:function(i){this.input=i,!1===this.activeAutoComplete?this.activeAutoComplete=!0:this.activeAutoComplete=!1,this.isActive=!1,this.$emit("selectCity",this.input)},clearCity:function(){this.input=null}}},H=k,x=Object(c["a"])(H,W,B,!1,null,null,null),K=x.exports,j={name:"Home",components:{CurrentConditions:D,DropdownComponent:P,InputComponent:K},data:function(){return{input:null,state:null,country:null,city:null,units:null,cityCode:null}},computed:Object(A["a"])(Object(A["a"])({},Object(M["c"])(["currentWeather","weatherForecast","selectedUnit","toggleForecast","currentCity","autoCompleteData"])),{},{getCityCode:function(){return this.currentCity.data.map((function(i){return i.id}))}}),methods:Object(A["a"])(Object(A["a"])(Object(A["a"])({},Object(M["b"])(["addCity","getAutoComplete"])),Object(M["b"])({addCity:"addCity",getAc:"getAutoComplete"})),{},{searchImperial:function(){this.city=this.input,this.units="imperial",this.addCity({city:this.city,state:this.state,country:this.country,unit:this.units})},searchMetric:function(){this.city=this.input,this.units="metric",this.addCity({city:this.city,state:this.state,country:this.country,unit:this.units})},selectState:function(i){this.state=i.state,this.input=null},selectCountry:function(i){this.country=i.country,this.input=null},selectCity:function(i){this.input=i},autoComplete:function(i){this.input=i,this.getAc({input:this.input,state:this.state,country:this.country})}})},V=j,Y=(e("feeb"),Object(c["a"])(V,m,l,!1,null,"2ea0b318",null)),z=Y.exports;a["a"].use(u["a"]);var J=[{path:"/",name:"Home",component:z},{path:"/weather-maps",name:"WeatherMaps",component:function(){return e.e("maps").then(e.bind(null,"f6b0"))}}],Z=new u["a"]({routes:J}),$=Z,q=(e("99af"),e("bc3a")),Q=e.n(q);a["a"].use(M["a"]);var X=new M["a"].Store({state:{currentWeather:null,weatherForecast:null,selectedUnits:null,isForecastActive:!1,currentCity:null,cityCoords:{name:"Timbuktu",country:"ML",coord:{lon:-3.00742,lat:16.773479}},autoComplete:null},mutations:{ADD_WEATHER:function(i,t){i.currentWeather=t},ADD_FORECAST:function(i,t){i.weatherForecast=t},SET_UNIT:function(i,t){var e=t;i.selectedUnits=e},DELETE_CITY:function(i){i.currentWeather=null,i.weatherForecast=null},ADD_CITY:function(i,t){i.currentCity=t},AUTO_COMPLETE:function(i,t){i.autoComplete=t},TOGGLE_FORECAST:function(i){!1===i.isForecastActive?i.isForecastActive=!0:i.isForecastActive=!1},ADD_CITY_COORDS:function(i,t){i.cityCoords=t}},actions:{deleteCity:function(i){var t=i.commit;t("DELETE_CITY")},addCity:function(i,t){var e=i.commit,a=t.city,n=t.state,o=t.country,r=t.unit,s="api/citySearch";Q.a.post(s,{data:{city:a,state:n,country:o}}).then((function(i){var t=i.data.data[0].id,a="64aaf5b71da8c0001799c0054eea79ca";e("ADD_CITY_COORDS",i.data.data[0]),Q()({method:"GET",url:"https://api.openweathermap.org/data/2.5/forecast?id=".concat(t,"&appid=").concat(a),params:{units:r}}).then((function(i){e("ADD_FORECAST",i.data),e("SET_UNIT",r)})).catch((function(i){i.response&&alert(JSON.stringify(i.message))})),Q()({method:"GET",url:"https://api.openweathermap.org/data/2.5/weather?id=".concat(t,"&appid=").concat(a),params:{units:r}}).then((function(i){e("ADD_WEATHER",i.data),e("SET_UNIT",r)})).catch((function(i){i.response&&alert(i.message)})),e("ADD_CITY",i.data)})).catch((function(i){return alert(i.message)}))},getAutoComplete:function(i,t){var e=i.commit,a=t.input,n=t.state,o=t.country;Q()({method:"GET",url:"api/autoComplete",params:{q:a,state:n,country:o}}).then((function(i){e("AUTO_COMPLETE",i.data)})).catch((function(i){alert(i.message)}))},toggleForecast:function(i){var t=i.commit;t("TOGGLE_FORECAST")}},getters:{currentWeather:function(i){return i.currentWeather},weatherForecast:function(i){return i.weatherForecast},selectedUnit:function(i){return i.selectedUnits},toggleForecast:function(i){return i.isForecastActive},currentCity:function(i){return i.currentCity},autoCompleteData:function(i){return i.autoComplete},cityCoords:function(i){return i.cityCoords}}}),ii=(e("92c6"),e("ecee")),ti=e("c074"),ei=e("ad3d"),ai=(e("66c9"),e("9ddc"),e("1f54"),e("e11e"));delete ai["Icon"].Default.prototype._getIconUrl,ai["Icon"].Default.mergeOptions({iconRetinaUrl:e("584d"),iconUrl:e("6397"),shadowUrl:e("e2b9")}),ii["c"].add(ti["f"]),ii["c"].add(ti["h"]),ii["c"].add(ti["c"]),ii["c"].add(ti["j"]),ii["c"].add(ti["i"]),ii["c"].add(ti["g"]),ii["c"].add(ti["e"]),ii["c"].add(ti["d"]),ii["c"].add(ti["b"]),ii["c"].add(ti["a"]),a["a"].config.productionTip=!1,a["a"].component("font-awesome-icon",ei["a"]),new a["a"]({router:$,store:X,render:function(i){return i(b)}}).$mount("#app")},"59f3":function(i,t,e){"use strict";var a=e("81bc"),n=e.n(a);n.a},"6d7f":function(i,t,e){},"79fd":function(i,t,e){"use strict";var a=e("dca2"),n=e.n(a);n.a},"81bc":function(i,t,e){},8966:function(i,t,e){},dca2:function(i,t,e){},feeb:function(i,t,e){"use strict";var a=e("8966"),n=e.n(a);n.a}});
//# sourceMappingURL=app.50a88c61.js.map