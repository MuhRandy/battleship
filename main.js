(()=>{"use strict";var t={365:(t,n,e)=>{e.d(n,{A:()=>i});var a=e(354),r=e.n(a),o=e(314),s=e.n(o)()(r());s.push([t.id,"* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  position: relative;\n\n  padding: 10px 30px;\n\n  .logo {\n    color: blue;\n  }\n\n  .instruction {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    -webkit-transform: translateX(-50%);\n    -moz-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n\n    padding: 10px;\n    margin: 5px;\n    background-color: blue;\n    color: white;\n    font-weight: bold;\n  }\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 60px;\n  min-height: 80dvh;\n  padding-top: 30px;\n\n  .board {\n    position: relative;\n\n    .board-label {\n      text-align: center;\n      margin-top: 10px;\n    }\n\n    .control-panel {\n      display: flex;\n      justify-content: center;\n      gap: 5px;\n      margin-top: 10px;\n      position: absolute;\n      bottom: -40px;\n      left: 50%;\n      transform: translateX(-50%);\n      -webkit-transform: translateX(-50%);\n      -moz-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n      -o-transform: translateX(-50%);\n\n      * {\n        flex: none;\n      }\n    }\n  }\n\n  &.game-start .start-button {\n    display: none;\n  }\n\n  &.game-start .randomise-button {\n    display: none;\n  }\n\n  .reset-button {\n    display: none;\n  }\n\n  &.game-start .reset-button {\n    display: block;\n  }\n\n  &.game-start #computer-board .board-content:hover {\n    cursor: crosshair;\n  }\n  &.game-over #computer-board .board-content:hover {\n    cursor: auto;\n  }\n\n  table {\n    border-collapse: collapse;\n\n    .board-mark-row,\n    .board-mark-col {\n      text-align: center;\n    }\n\n    .board-mark-row {\n      padding-bottom: 5px;\n    }\n\n    .board-mark-col {\n      padding-right: 5px;\n    }\n\n    .board-cell {\n      border: 1px solid #000;\n      padding: 0;\n    }\n\n    .board-content {\n      width: 2em;\n      height: 2em;\n\n      &.hit {\n        background-color: black;\n      }\n    }\n\n    .board-content.occupied {\n      background-color: blue;\n\n      &.hit {\n        background-color: red;\n      }\n    }\n  }\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,kBAAkB;;EAElB,kBAAkB;;EAElB;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,2BAA2B;IAC3B,mCAAmC;IACnC,gCAAgC;IAChC,+BAA+B;IAC/B,8BAA8B;;IAE9B,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;EACT,iBAAiB;EACjB,iBAAiB;;EAEjB;IACE,kBAAkB;;IAElB;MACE,kBAAkB;MAClB,gBAAgB;IAClB;;IAEA;MACE,aAAa;MACb,uBAAuB;MACvB,QAAQ;MACR,gBAAgB;MAChB,kBAAkB;MAClB,aAAa;MACb,SAAS;MACT,2BAA2B;MAC3B,mCAAmC;MACnC,gCAAgC;MAChC,+BAA+B;MAC/B,8BAA8B;;MAE9B;QACE,UAAU;MACZ;IACF;EACF;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;;IAEzB;;MAEE,kBAAkB;IACpB;;IAEA;MACE,mBAAmB;IACrB;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,sBAAsB;MACtB,UAAU;IACZ;;IAEA;MACE,UAAU;MACV,WAAW;;MAEX;QACE,uBAAuB;MACzB;IACF;;IAEA;MACE,sBAAsB;;MAEtB;QACE,qBAAqB;MACvB;IACF;EACF;AACF",sourcesContent:["* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  position: relative;\n\n  padding: 10px 30px;\n\n  .logo {\n    color: blue;\n  }\n\n  .instruction {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    -webkit-transform: translateX(-50%);\n    -moz-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n\n    padding: 10px;\n    margin: 5px;\n    background-color: blue;\n    color: white;\n    font-weight: bold;\n  }\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  gap: 60px;\n  min-height: 80dvh;\n  padding-top: 30px;\n\n  .board {\n    position: relative;\n\n    .board-label {\n      text-align: center;\n      margin-top: 10px;\n    }\n\n    .control-panel {\n      display: flex;\n      justify-content: center;\n      gap: 5px;\n      margin-top: 10px;\n      position: absolute;\n      bottom: -40px;\n      left: 50%;\n      transform: translateX(-50%);\n      -webkit-transform: translateX(-50%);\n      -moz-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n      -o-transform: translateX(-50%);\n\n      * {\n        flex: none;\n      }\n    }\n  }\n\n  &.game-start .start-button {\n    display: none;\n  }\n\n  &.game-start .randomise-button {\n    display: none;\n  }\n\n  .reset-button {\n    display: none;\n  }\n\n  &.game-start .reset-button {\n    display: block;\n  }\n\n  &.game-start #computer-board .board-content:hover {\n    cursor: crosshair;\n  }\n  &.game-over #computer-board .board-content:hover {\n    cursor: auto;\n  }\n\n  table {\n    border-collapse: collapse;\n\n    .board-mark-row,\n    .board-mark-col {\n      text-align: center;\n    }\n\n    .board-mark-row {\n      padding-bottom: 5px;\n    }\n\n    .board-mark-col {\n      padding-right: 5px;\n    }\n\n    .board-cell {\n      border: 1px solid #000;\n      padding: 0;\n    }\n\n    .board-content {\n      width: 2em;\n      height: 2em;\n\n      &.hit {\n        background-color: black;\n      }\n    }\n\n    .board-content.occupied {\n      background-color: blue;\n\n      &.hit {\n        background-color: red;\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const i=s},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",a=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),a&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),a&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,a,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);a&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},354:t=>{t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},72:t=>{var n=[];function e(t){for(var e=-1,a=0;a<n.length;a++)if(n[a].identifier===t){e=a;break}return e}function a(t,a){for(var o={},s=[],i=0;i<t.length;i++){var l=t[i],c=a.base?l[0]+a.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var A=e(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)n[A].references++,n[A].updater(p);else{var h=r(p,a);a.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var o=a(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var i=e(o[s]);n[i].references--}for(var l=a(t,r),c=0;c<o.length;c++){var d=e(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},659:t=>{var n={};t.exports=function(t,e){var a=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,r&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return t[a](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;var a=e(72),r=e.n(a),o=e(825),s=e.n(o),i=e(659),l=e.n(i),c=e(56),d=e.n(c),u=e(540),A=e.n(u),p=e(113),h=e.n(p),m=e(365),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=A(),r()(m.A,f),m.A&&m.A.locals&&m.A.locals;class b{constructor(t){this.length=t,this.hitCount=0}hit(){this.hitCount++}isSunk(){return this.length===this.hitCount}}function C(t,n){if(t>n)throw new Error("min number must be less than max number");return Math.floor(Math.random()*(n-t+1)+t)}function g(t){const[n,e]=t.match(/[A-Z]|\d+/g);return[n,parseInt(e)]}function B(t,n){return String.fromCharCode(t.charCodeAt(0)+n)}function E(){return String.fromCharCode(C(65,74))+C(1,10)}class v{ships=this.#t();battlefield=new Map;hitLog=new Set;getShipCoordinates(t){return Array.from(this.battlefield.entries()).filter((n=>n[1]===t)).map((t=>t[0]))}placeAllShipsToBattlefield(){this.ships.forEach(((t,n)=>this.#n(n)))}placeShip(t,n,e){const[a,r]=g(t),o=this.ships[e].length;this.#e(t,n,o);for(let t=0;t<o;t++)switch(n){case"horizontal":this.battlefield.set(B(a,t)+r,e);break;case"vertical":this.battlefield.set(a+(r+t),e);break;default:throw new Error("Orientation must be vertical or horizontal")}}receiveAttack(t){if(this.hitLog.has(t))throw new Error("The coordinate already hit");if(this.hitLog.add(t),this.#a(t)){const n=this.battlefield.get(t);return this.ships[n].hit(),"hit ship"}return"hit miss"}isAllShipsSunk(){return!this.ships.map((t=>t.isSunk())).some((t=>!1===t))}randomiseShips(){this.battlefield=new Map,this.placeAllShipsToBattlefield()}resetGameboard(){this.ships=this.#t(),this.randomiseShips(),this.hitLog=new Set}#n(t){try{this.placeShip(E(),this.#r(),t)}catch(n){this.#n(t)}}#r(){return["horizontal","vertical"][C(0,1)]}#t(){const t=[];for(let n=0;n<10;n++)0===n&&t.push(new b(4)),n>0&&n<3&&t.push(new b(3)),n>2&&n<6&&t.push(new b(2)),n>5&&t.push(new b(1));return t}#e(t,n,e){this.#o(t,n,e)&&this.#s("out of bounds"),this.#i(t,n,e)&&this.#s("occupied")}#a(t){return this.battlefield.has(t)}#o(t,n,e){const[a,r]=g(t);return a.charCodeAt(0)>74||a.charCodeAt(0)<65||r>10||r<1||"horizontal"===n&&a.charCodeAt(0)+e-1>74||"vertical"===n&&r+e-1>10}#i(t,n,e){const[a,r]=g(t);for(let t=0;t<e;t++){let o;if("horizontal"===n&&(o=B(a,t)+r),"vertical"===n&&(o=a+(r+t)),this.#a(o))return!0;if(this.#l(o,n,e,t))return!0}return!1}#l(t,n,e,a){const[r,o]=g(t),s=B(r,-1),i=B(r,1),l=o+1,c=o-1,d=s+c,u=s+l,A=i+c,p=i+l;if("horizontal"===n){if(0===a&&(this.#a(s+o)||this.#a(d)||this.#a(u)))return!0;if(a===e-1&&(this.#a(i+o)||this.#a(A)||this.#a(p)))return!0;if(this.#a(r+l)||this.#a(r+c))return!0}if("vertical"===n){if(0===a&&(this.#a(r+c)||this.#a(d)||this.#a(A)))return!0;if(a===e-1&&(this.#a(r+l)||this.#a(u)||this.#a(p)))return!0;if(this.#a(s+o)||this.#a(i+o))return!0}return!1}#s(t){switch(t){case"occupied":throw new Error("The coordinate already occupied");case"out of bounds":throw new Error("Ship out of bounds battlefield");default:throw new Error(`Error with type ${t} doesn't exist`)}}}class y{gameboard=new v;constructor(t){this.role=t}}function x(t,n,e){const a=w("div",{className:"board",id:e}),r=w("table"),o=w("tbody");for(let n=0;n<t+1;n++){const e=w("tr",{className:"board-row"});for(let a=0;a<t+1;a++){const t=w("td");0===n?(t.className="board-mark-row",0!==a&&(t.textContent=String.fromCharCode(a+64))):0===a?(t.className="board-mark-col",0!==n&&(t.textContent=n)):(t.className="board-cell",k(t,w("div",{className:"board-content",attributes:{"data-x":String.fromCharCode(a+64),"data-y":n}}))),k(e,t)}k(o,e)}k(r,o),k(a,r);const s=w("div",{className:"board-label",textContent:n}),i=function(){const t=w("div",{className:"control-panel"}),n=w("button",{className:"start-button",textContent:"start game"}),e=w("button",{className:"randomise-button",textContent:"randomise"}),a=w("button",{className:"reset-button",textContent:"reset game"});return k(t,n),k(t,e),k(t,a),t}();return k(a,s),"player-board"===e&&k(a,i),a}function k(t,n){t&&n&&t.appendChild(n)}function w(t,n={}){const e=document.createElement(t);return n.className&&(e.className=n.className),n.id&&(e.id=n.id),n.textContent&&(e.textContent=n.textContent),n.innerHTML&&(e.innerHTML=n.innerHTML),n.attributes&&Object.keys(n.attributes).forEach((t=>{e.setAttribute(t,n.attributes[t])})),e}function S(t,n){const{x:e,y:a}=t.target.dataset,r=M("main");if(r.classList.contains("game-start")&&!r.classList.contains("game-over"))try{const r=n.players[1].gameboard.receiveAttack(e+a);t.target.classList.add("hit"),"hit ship"===r?n.isPlayerWin()&&(alert("Player sunk all computer's ships"),j("Player")):(t.target.classList.remove("occupied"),n.changeTurn(),X(`${n.activePlayer.role} turn`),I(n))}catch(t){alert(t.message)}}function I(t){const n=E(),e=t.players[0].gameboard;if(e.hitLog.has(n))I(t);else{const[a,r]=g(n),o=M(`#player-board [data-x="${a}"][data-y="${r}"]`),s=e.receiveAttack(n);o.classList.add("hit"),"hit ship"===s?t.isComputerWin()?(alert("Computer sunk all player's ships"),j("Computer")):I(t):(t.changeTurn(),X(`${t.activePlayer.role} turn`))}}function M(t){return document.querySelector(t)}function L(t){return document.querySelectorAll(t)}function T(t,n){H(n),t.ships.forEach(((e,a)=>{t.getShipCoordinates(a).forEach((t=>{const e=function(t,n){const[e,a]=g(t);return M(`#${n} [data-x="${e}"][data-y="${a}"]`)}(t,n);e.classList.add("occupied")}))}))}function H(t){L(`.board#${t} .board-content`).forEach((t=>{t.classList.remove("occupied"),t.classList.remove("hit")}))}function X(t){M(".instruction").textContent=t}function N(t){H(t),L(`.board#${t} .board-content`).forEach((t=>{t.classList.add("occupied")}))}function j(t){const n=M("main");X(`${t} win!`),n.classList.add("game-over")}const P=new y("player"),O=new class{constructor(t){this.players=[t,new y("computer")],this.activePlayer=t,this.isGameStart=!1}changeTurn(){this.activePlayer===this.players[0]?this.activePlayer=this.players[1]:this.activePlayer=this.players[0]}startGame(){this.isGameStart=!0}resetGame(){this.isGameStart=!1,this.activePlayer=this.players[0],this.players.forEach((t=>t.gameboard.resetGameboard()))}isPlayerWin(){return this.players[1].gameboard.isAllShipsSunk()}isComputerWin(){return this.players[0].gameboard.isAllShipsSunk()}}(P);!function(t){const n=M("main"),e=x(10,"your board","player-board"),a=x(10,"opponent's board (computer)","computer-board");k(n,e),k(n,a);const r=t.players[0].gameboard,o=t.players[1].gameboard;r.placeAllShipsToBattlefield(),o.placeAllShipsToBattlefield(),T(r,"player-board"),N("computer-board");const s=M("button.randomise-button"),i=M("button.start-button"),l=M("button.reset-button");s.addEventListener("click",(()=>{return(t=r).randomiseShips(),void T(t,"player-board");var t})),i.addEventListener("click",(()=>function(t){if(confirm("Start the game?")){const n=M("main");X(`${t.activePlayer.role} turn`),n.classList.add("game-start"),t.startGame()}}(t))),l.addEventListener("click",(()=>function(t){if(confirm("Reset game?")){const n=M("main");n.classList.remove("game-start"),n.classList.remove("game-over"),t.resetGame(),T(t.players[0].gameboard,"player-board"),N("computer-board"),X("Click start game to play")}}(t))),a.addEventListener("click",(n=>S(n,t)))}(O)})();
//# sourceMappingURL=main.js.map