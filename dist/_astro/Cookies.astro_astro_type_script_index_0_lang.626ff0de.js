/*!
 * CookieConsent v2.9.2
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */(function(){var V="initCookieConsent";typeof window<"u"&&typeof window[V]!="function"&&(window[V]=function(De){var d,q,K,de,I,ue,tt,ot,X,U,pe,Ee,He,qe,W,Ie,Z,fe,_,Ce,we,J,M,z,B,m,N,Ae,ee,te,C,oe,ne,ie,ae,c={mode:"opt-in",current_lang:"en",auto_language:null,autorun:!0,page_scripts:!0,hide_from_bots:!0,cookie_name:"cc_cookie",cookie_expiration:182,cookie_domain:location.hostname,cookie_path:"/",cookie_same_site:"Lax",use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:"data-cookiecategory"},u={},h={},w=null,j=!0,D=!1,he=!1,ce=!1,Ue=!1,Se=!0,F=[],xe=!1,Je=[],nt=[],ze=[],it=!1,Fe=[],at=[],E=[],A=[],Ne=[],ge=document.documentElement,Ct=function(e){typeof(d=e).cookie_expiration=="number"&&(c.cookie_expiration=d.cookie_expiration),typeof d.cookie_necessary_only_expiration=="number"&&(c.cookie_necessary_only_expiration=d.cookie_necessary_only_expiration),typeof d.autorun=="boolean"&&(c.autorun=d.autorun),typeof d.cookie_domain=="string"&&(c.cookie_domain=d.cookie_domain),typeof d.cookie_same_site=="string"&&(c.cookie_same_site=d.cookie_same_site),typeof d.cookie_path=="string"&&(c.cookie_path=d.cookie_path),typeof d.cookie_name=="string"&&(c.cookie_name=d.cookie_name),typeof d.onAccept=="function"&&(pe=d.onAccept),typeof d.onFirstAction=="function"&&(He=d.onFirstAction),typeof d.onChange=="function"&&(Ee=d.onChange),d.mode==="opt-out"&&(c.mode="opt-out"),typeof d.revision=="number"&&(d.revision>-1&&(c.revision=d.revision),Ue=!0),typeof d.autoclear_cookies=="boolean"&&(c.autoclear_cookies=d.autoclear_cookies),d.use_rfc_cookie===!0&&(c.use_rfc_cookie=!0),typeof d.hide_from_bots=="boolean"&&(c.hide_from_bots=d.hide_from_bots),c.hide_from_bots&&(it=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),c.page_scripts=d.page_scripts===!0,d.auto_language==="browser"||d.auto_language===!0?c.auto_language="browser":d.auto_language==="document"&&(c.auto_language="document"),c.current_lang=wt(d.languages,d.current_lang)},ct=function(e){for(var t="accept-",o=p("c-settings"),n=p(t+"all"),a=p(t+"necessary"),i=p(t+"custom"),r=0;r<o.length;r++)o[r].setAttribute("aria-haspopup","dialog"),y(o[r],"click",function(f){f.preventDefault(),u.showSettings(0)});for(r=0;r<n.length;r++)y(n[r],"click",function(f){s(f,"all")});for(r=0;r<i.length;r++)y(i[r],"click",function(f){s(f)});for(r=0;r<a.length;r++)y(a[r],"click",function(f){s(f,[])});function p(f){return(e||document).querySelectorAll('[data-cc="'+f+'"]')}function s(f,L){f.preventDefault(),u.accept(L),u.hideSettings(),u.hide()}},Te=function(e,t){return t.hasOwnProperty(e)?e:_e(t).length>0?t.hasOwnProperty(c.current_lang)?c.current_lang:_e(t)[0]:void 0},Ge=function(e){if(d.force_consent===!0&&T(ge,"force--consent"),!_){_=l("div");var t=l("div"),o=l("div");_.id="cm",t.id="c-inr-i",o.id="cm-ov",_.tabIndex=-1,_.setAttribute("role","dialog"),_.setAttribute("aria-modal","true"),_.setAttribute("aria-hidden","false"),_.setAttribute("aria-labelledby","c-ttl"),_.setAttribute("aria-describedby","c-txt"),fe.appendChild(_),fe.appendChild(o),_.style.visibility=o.style.visibility="hidden",o.style.opacity=0}var n=d.languages[e].consent_modal.title;n&&(Ce||((Ce=l("h2")).id="c-ttl",t.appendChild(Ce)),Ce.innerHTML=n);var a=d.languages[e].consent_modal.description;Ue&&(a=Se?a.replace("{{revision_message}}",""):a.replace("{{revision_message}}",d.languages[e].consent_modal.revision_message||"")),we||((we=l("div")).id="c-txt",t.appendChild(we)),we.innerHTML=a;var i,r=d.languages[e].consent_modal.primary_btn,p=d.languages[e].consent_modal.secondary_btn;r&&(J||((J=l("button")).id="c-p-bn",J.className="c-bn",J.appendChild(Qe(1)),r.role==="accept_all"&&(i="all"),y(J,"click",function(){u.hide(),u.accept(i)})),J.firstElementChild.innerHTML=d.languages[e].consent_modal.primary_btn.text),p&&(M||((M=l("button")).id="c-s-bn",M.className="c-bn c_link",M.appendChild(Qe(1)),p.role==="accept_necessary"?y(M,"click",function(){u.hide(),u.accept([])}):y(M,"click",function(){u.showSettings(0)})),M.firstElementChild.innerHTML=d.languages[e].consent_modal.secondary_btn.text);var s=d.gui_options;B||((B=l("div")).id="c-inr",B.appendChild(t)),z||((z=l("div")).id="c-bns",s&&s.consent_modal&&s.consent_modal.swap_buttons===!0?(p&&z.appendChild(M),r&&z.appendChild(J),z.className="swap"):(r&&z.appendChild(J),p&&z.appendChild(M)),(r||p)&&B.appendChild(z),_.appendChild(B)),D=!0,ct(B)},rt=function(e){if(m)(C=l("div")).id="s-bl";else{(m=l("div")).tabIndex=-1;var t=l("div"),o=l("div"),n=l("div");N=l("div"),Ae=l("h2");var a=l("div");(ee=l("button")).appendChild(Qe(2));var i=l("div");te=l("div");var r=l("div"),p=!1;y(m,"mouseup",function(R){!ce||p||N.contains(R.target)||u.hideSettings()}),y(m,"mousedown",function(R){ce&&(p=N.contains(R.target))}),m.id="s-cnt",t.id="c-vln",n.id="c-s-in",o.id="cs",Ae.id="s-ttl",N.id="s-inr",a.id="s-hdr",te.id="s-bl",ee.id="s-c-bn",r.id="cs-ov",i.id="s-c-bnc",ee.className="c-bn",m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-hidden","true"),m.setAttribute("aria-labelledby","s-ttl"),m.style.visibility=r.style.visibility="hidden",r.style.opacity=0,i.appendChild(ee),y(document,"keydown",function(R){R.keyCode===27&&ce&&u.hideSettings()},!0),y(ee,"click",function(){u.hideSettings()})}var s=d.languages[e].settings_modal;ee.setAttribute("aria-label",s.close_btn_label||"Close"),U=s.blocks,X=s.cookie_table_headers;var f=s.cookie_table_caption,L=U.length;Ae.innerHTML=s.title;for(var k=0;k<L;++k){var b=U[k].title,g=U[k].description,v=U[k].toggle,x=U[k].cookie_table,me=d.remove_cookie_tables===!0,re=!!g||!me&&!!x,O=l("div"),P=l("div");if(g){var G=l("div");G.className="p",G.insertAdjacentHTML("beforeend",g)}var H=l("div");if(H.className="title",O.className="c-bl",P.className="desc",v!==void 0){var dt="c-ac-"+k,Q=l(re?"button":"div"),be=l("label"),$=l("input"),se=l("span"),$e=l("span"),ut=l("span"),pt=l("span");Q.className=re?"b-tl exp":"b-tl",be.className="b-tg",$.className="c-tgl",ut.className="on-i",pt.className="off-i",se.className="c-tg",$e.className="t-lb",re&&(Q.setAttribute("aria-expanded","false"),Q.setAttribute("aria-controls",dt)),$.type="checkbox",se.setAttribute("aria-hidden","true");var ye=v.value;$.value=ye,$e.textContent=b,Q.insertAdjacentHTML("beforeend",b),H.appendChild(Q),se.appendChild(ut),se.appendChild(pt),j?v.enabled?($.checked=!0,!C&&E.push(!0),v.enabled&&!C&&ze.push(ye)):!C&&E.push(!1):S(h.categories,ye)>-1?($.checked=!0,!C&&E.push(!0)):!C&&E.push(!1),!C&&A.push(ye),v.readonly&&($.disabled=!0,T(se,"c-ro"),!C&&Ne.push(ye)),T(P,"b-acc"),T(H,"b-bn"),T(O,"b-ex"),P.id=dt,P.setAttribute("aria-hidden","true"),be.appendChild($),be.appendChild(se),be.appendChild($e),H.appendChild(be),re&&function(R,et,kt){y(Q,"click",function(){St(et,"act")?(Ye(et,"act"),kt.setAttribute("aria-expanded","false"),R.setAttribute("aria-hidden","true")):(T(et,"act"),kt.setAttribute("aria-expanded","true"),R.setAttribute("aria-hidden","false"))},!1)}(P,O,Q)}else if(b){var ke=l("div");ke.className="b-tl",ke.setAttribute("role","heading"),ke.setAttribute("aria-level","3"),ke.insertAdjacentHTML("beforeend",b),H.appendChild(ke)}if(b&&O.appendChild(H),g&&P.appendChild(G),!me&&x!==void 0){for(var ft=document.createDocumentFragment(),je=0;je<X.length;++je){var Ve=l("th"),le=X[je];if(Ve.setAttribute("scope","col"),le){var Pe=le&&_e(le)[0];Ve.textContent=X[je][Pe],ft.appendChild(Ve)}}var ht=l("tr");ht.appendChild(ft);var gt=l("thead");gt.appendChild(ht);var Me=l("table");if(f){var vt=l("caption");vt.innerHTML=f,Me.appendChild(vt)}Me.appendChild(gt);for(var _t=document.createDocumentFragment(),We=0;We<x.length;We++){for(var mt=l("tr"),Ze=0;Ze<X.length;++Ze)if(le=X[Ze]){Pe=_e(le)[0];var Be=l("td");Be.insertAdjacentHTML("beforeend",x[We][Pe]),Be.setAttribute("data-column",le[Pe]),mt.appendChild(Be)}_t.appendChild(mt)}var bt=l("tbody");bt.appendChild(_t),Me.appendChild(bt),P.appendChild(Me)}(v&&b||!v&&(b||g))&&(O.appendChild(P),C?C.appendChild(O):te.appendChild(O))}oe||((oe=l("div")).id="s-bns"),ie||((ie=l("button")).id="s-all-bn",ie.className="c-bn",oe.appendChild(ie),y(ie,"click",function(){u.accept("all"),u.hideSettings(),u.hide()})),ie.innerHTML=s.accept_all_btn;var yt=s.reject_all_btn;if(yt&&(ae||((ae=l("button")).id="s-rall-bn",ae.className="c-bn",y(ae,"click",function(){u.accept([]),u.hideSettings(),u.hide()}),N.className="bns-t",oe.appendChild(ae)),ae.innerHTML=yt),ne||((ne=l("button")).id="s-sv-bn",ne.className="c-bn",oe.appendChild(ne),y(ne,"click",function(){u.accept(),u.hideSettings(),u.hide()})),ne.innerHTML=s.save_settings_btn,C)return N.replaceChild(C,te),void(te=C);a.appendChild(Ae),a.appendChild(i),N.appendChild(a),N.appendChild(te),N.appendChild(oe),n.appendChild(N),o.appendChild(n),t.appendChild(o),m.appendChild(t),fe.appendChild(m),fe.appendChild(r)};u.updateLanguage=function(e,t){if(typeof e=="string"){var o=Te(e,d.languages);return(o!==c.current_lang||t===!0)&&(c.current_lang=o,D&&Ge(o),rt(o),!0)}};var st=function(e){var t=U.length,o=-1;xe=!1;var n=ve("","all"),a=[c.cookie_domain,"."+c.cookie_domain];if(c.cookie_domain.slice(0,4)==="www."){var i=c.cookie_domain.substr(4);a.push(i),a.push("."+i)}for(var r=0;r<t;r++){var p=U[r];if(p.hasOwnProperty("toggle")){var s=S(F,p.toggle.value)>-1;if(!E[++o]&&p.hasOwnProperty("cookie_table")&&(e||s)){var f=p.cookie_table,L=_e(X[0])[0],k=f.length;p.toggle.reload==="on_disable"&&s&&(xe=!0);for(var b=0;b<k;b++){var g=a,v=f[b],x=[],me=v[L],re=v.is_regex||!1,O=v.domain||null,P=v.path||!1;if(O&&(g=[O,"."+O]),re)for(var G=0;G<n.length;G++)n[G].match(me)&&x.push(n[G]);else{var H=S(n,me);H>-1&&x.push(n[H])}x.length>0&&(lt(x,P,g),p.toggle.reload==="on_clear"&&(xe=!0))}}}}},S=function(e,t){return e.indexOf(t)},l=function(e){var t=document.createElement(e);return e==="button"&&t.setAttribute("type",e),t},wt=function(e,t){return c.auto_language==="browser"?Te(At(),e):c.auto_language==="document"?Te(document.documentElement.lang,e):typeof t=="string"?c.current_lang=Te(t,e):c.current_lang},At=function(){var e=navigator.language||navigator.browserLanguage;return e.length>2&&(e=e[0]+e[1]),e.toLowerCase()};u.allowedCategory=function(e){if(j&&c.mode!=="opt-in")t=ze;else var t=JSON.parse(ve(c.cookie_name,"one",!0)||"{}").categories||[];return S(t,e)>-1},u.run=function(e){if(!document.getElementById("cc_div")){if(Ct(e),it)return;h=JSON.parse(ve(c.cookie_name,"one",!0)||"{}");var t=(de=h.consent_uuid)!==void 0;if((q=h.consent_date)&&(q=new Date(q)),(K=h.last_consent_update)&&(K=new Date(K)),w=h.data!==void 0?h.data:null,Ue&&h.revision!==c.revision&&(Se=!1),D=j=!(t&&Se&&q&&K&&de),function(){(Z=l("div")).id="cc--main",Z.style.position="fixed",Z.innerHTML='<div id="cc_div" class="cc_div"></div>',fe=Z.children[0];var n=c.current_lang;D&&Ge(n),rt(n),(De||document.body).appendChild(Z)}(),function(){var n=["[href]","button","input","details",'[tabindex="0"]'];function a(i,r){try{var p=i.querySelectorAll(n.join(':not([tabindex="-1"]), '))}catch{return i.querySelectorAll(n.join(", "))}r[0]=p[0],r[1]=p[p.length-1]}a(N,at),D&&a(_,Fe)}(),function(n,a){if(typeof n=="object"){var i=n.consent_modal,r=n.settings_modal;D&&i&&p(_,["box","bar","cloud"],["top","middle","bottom"],["zoom","slide"],i.layout,i.position,i.transition),r&&p(m,["bar"],["left","right"],["zoom","slide"],r.layout,r.position,r.transition)}function p(s,f,L,k,b,g,v){if(g=g&&g.split(" ")||[],S(f,b)>-1&&(T(s,b),(b!=="bar"||g[0]!=="middle")&&S(L,g[0])>-1))for(var x=0;x<g.length;x++)T(s,g[x]);S(k,v)>-1&&T(s,v)}}(e.gui_options),ct(),c.autorun&&D&&u.show(e.delay||0),setTimeout(function(){T(Z,"c--anim")},30),setTimeout(function(){y(document,"keydown",function(n){if(n.key==="Tab"&&(he||ce)&&I){var a=Oe();n.shiftKey?a!==I[0]&&ue.contains(a)||(n.preventDefault(),Y(I[1])):a!==I[1]&&ue.contains(a)||(n.preventDefault(),Y(I[0]))}})},100),j)c.mode==="opt-out"&&Le();else{var o=typeof h.rfc_cookie=="boolean";(!o||o&&h.rfc_cookie!==c.use_rfc_cookie)&&(h.rfc_cookie=c.use_rfc_cookie,Xe(c.cookie_name,JSON.stringify(h))),qe=Ke(Re()),Le(),typeof pe=="function"&&pe(h)}}};var Le=function(){if(c.page_scripts){var e=h.categories||[];j&&c.mode==="opt-out"&&(e=ze);var t=document.querySelectorAll("script["+c.script_selector+"]"),o=function(n,a){if(a<n.length){var i=n[a],r=i.getAttribute(c.script_selector);if(S(e,r)>-1){i.type=i.getAttribute("data-type")||"text/javascript",i.removeAttribute(c.script_selector);var p=i.getAttribute("data-src");p&&i.removeAttribute("data-src");var s=l("script");if(s.textContent=i.innerHTML,function(f,L){for(var k=L.attributes,b=k.length,g=0;g<b;g++){var v=k[g].nodeName;f.setAttribute(v,L[v]||L.getAttribute(v))}}(s,i),p?s.src=p:p=i.src,p&&(s.readyState?s.onreadystatechange=function(){s.readyState!=="loaded"&&s.readyState!=="complete"||(s.onreadystatechange=null,o(n,++a))}:s.onload=function(){s.onload=null,o(n,++a)}),i.parentNode.replaceChild(s,i),p)return}o(n,++a)}};o(t,0)}};u.set=function(e,t){return e==="data"&&function(o,n){var a=!1;if(n==="update"){var i=typeof(w=u.get("data"))==typeof o;if(i&&typeof w=="object")for(var r in!w&&(w={}),o)w[r]!==o[r]&&(w[r]=o[r],a=!0);else!i&&w||w===o||(w=o,a=!0)}else w=o,a=!0;return a&&(h.data=w,Xe(c.cookie_name,JSON.stringify(h))),a}(t.value,t.mode)},u.get=function(e,t){return JSON.parse(ve(t||c.cookie_name,"one",!0)||"{}")[e]},u.getConfig=function(e){return c[e]||d[e]};var Re=function(){return Je=h.categories||[],nt=A.filter(function(e){return S(Je,e)===-1}),{accepted:Je,rejected:nt}},Ke=function(e){var t="custom",o=Ne.length;return e.accepted.length===A.length?t="all":e.accepted.length===o&&(t="necessary"),t};u.getUserPreferences=function(){var e=Re();return{accept_type:Ke(e),accepted_categories:e.accepted,rejected_categories:e.rejected}},u.loadScript=function(e,t,o){var n=typeof t=="function";if(document.querySelector('script[src="'+e+'"]'))n&&t();else{var a=l("script");if(o&&o.length>0)for(var i=0;i<o.length;++i)o[i]&&a.setAttribute(o[i].name,o[i].value);n&&(a.onload=t),a.src=e,document.head.appendChild(a)}},u.updateScripts=function(){Le()},u.show=function(e,t){t===!0&&Ge(c.current_lang),D&&(W=Oe(),I=Fe,ue=_,he=!0,_.removeAttribute("aria-hidden"),setTimeout(function(){T(ge,"show--consent")},e>0?e:t?30:0))},u.hide=function(){D&&(he=!1,Y(tt),_.setAttribute("aria-hidden","true"),Ye(ge,"show--consent"),Y(W),W=null)},u.showSettings=function(e){ce=!0,m.removeAttribute("aria-hidden"),he?Ie=Oe():W=Oe(),ue=m,I=at,setTimeout(function(){T(ge,"show--settings")},e>0?e:0)},u.hideSettings=function(){ce=!1,xt(),Y(ot),m.setAttribute("aria-hidden","true"),Ye(ge,"show--settings"),he?(Y(Ie),Ie=null,ue=_,I=Fe):(Y(W),W=null)},u.accept=function(e,t){var o=e||void 0,n=t||[],a=[];if(o)if(typeof o=="object"&&typeof o.length=="number")for(var i=0;i<o.length;i++)S(A,o[i])!==-1&&a.push(o[i]);else typeof o=="string"&&(o==="all"?a=A.slice():S(A,o)!==-1&&a.push(o));else a=function(){for(var r=document.querySelectorAll(".c-tgl")||[],p=[],s=0;s<r.length;s++)r[s].checked&&p.push(r[s].value);return p}();if(n.length>=1)for(i=0;i<n.length;i++)a=a.filter(function(r){return r!==n[i]});for(i=0;i<A.length;i++)Ne.includes(A[i])===!0&&S(a,A[i])===-1&&a.push(A[i]);(function(r){F=[];var p=m.querySelectorAll(".c-tgl")||[];if(p.length>0)for(var s=0;s<p.length;s++)S(r,A[s])!==-1?(p[s].checked=!0,E[s]||(F.push(A[s]),E[s]=!0)):(p[s].checked=!1,E[s]&&(F.push(A[s]),E[s]=!1));!j&&c.autoclear_cookies&&F.length>0&&st(),q||(q=new Date),de||(de=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(f){try{return(f^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>f/4).toString(16)}catch{return""}})),h={categories:r,level:r,revision:c.revision,data:w,rfc_cookie:c.use_rfc_cookie,consent_date:q.toISOString(),consent_uuid:de},(j||F.length>0)&&(Se=!0,K=K?new Date:q,h.last_consent_update=K.toISOString(),qe=Ke(Re()),Xe(c.cookie_name,JSON.stringify(h)),Le()),j&&(c.autoclear_cookies&&st(!0),typeof He=="function"&&He(u.getUserPreferences(),h),typeof pe=="function"&&pe(h),j=!1,c.mode==="opt-in")||(typeof Ee=="function"&&F.length>0&&Ee(h,F),xe&&location.reload())})(a)},u.eraseCookies=function(e,t,o){var n=[],a=o?[o,"."+o]:[c.cookie_domain,"."+c.cookie_domain];if(typeof e=="object"&&e.length>0)for(var i=0;i<e.length;i++)this.validCookie(e[i])&&n.push(e[i]);else this.validCookie(e)&&n.push(e);lt(n,t,a)};var Xe=function(e,t){var o=c.cookie_expiration;typeof c.cookie_necessary_only_expiration=="number"&&qe==="necessary"&&(o=c.cookie_necessary_only_expiration),t=c.use_rfc_cookie?encodeURIComponent(t):t;var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var a=e+"="+(t||"")+"; expires="+n.toUTCString()+"; Path="+c.cookie_path+";";a+=" SameSite="+c.cookie_same_site+";",location.hostname.indexOf(".")>-1&&c.cookie_domain&&(a+=" Domain="+c.cookie_domain+";"),location.protocol==="https:"&&(a+=" Secure;"),document.cookie=a},ve=function(e,t,o){var n;if(t==="one"){if((n=(n=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?o?n.pop():e:"")&&e===c.cookie_name){try{n=JSON.parse(n)}catch{try{n=JSON.parse(decodeURIComponent(n))}catch{n={}}}n=JSON.stringify(n)}}else if(t==="all"){var a=document.cookie.split(/;\s*/);n=[];for(var i=0;i<a.length;i++)n.push(a[i].split("=")[0])}return n},lt=function(e,t,o){for(var n=t||"/",a=0;a<e.length;a++){for(var i=0;i<o.length;i++)document.cookie=e[a]+"=; path="+n+(o[i].indexOf(".")==0?"; domain="+o[i]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";e[a]}};u.validCookie=function(e){return ve(e,"one",!0)!==""},u.validConsent=function(){return!j};var y=function(e,t,o,n){e.addEventListener(t,o,n===!0&&{passive:!0})},_e=function(e){if(typeof e=="object")return Object.keys(e)},T=function(e,t){e.classList.add(t)},Ye=function(e,t){e.classList.remove(t)},St=function(e,t){return e.classList.contains(t)},Qe=function(e){var t=l("span");return t.tabIndex=-1,e===1?tt=t:ot=t,t},Y=function(e){e&&e instanceof HTMLElement&&e.focus()},xt=function(){for(var e=N.querySelectorAll(".c-tgl"),t=0;t<e.length;t++){var o=e[t].value,n=Ne.includes(o);e[t].checked=n||u.allowedCategory(o)}},Oe=function(){return document.activeElement};return u})})();window.addEventListener("load",function(){var V=initCookieConsent();V.run({gui_options:{consent_modal:{layout:"cloud",position:"bottom right",transition:"slide",swap_buttons:!1},settings_modal:{layout:"box",transition:"slide"}},onAccept:function(De){V.allowedCategory("analytics_cookies")&&V.loadScript("https://www.google-analytics.com/analytics.js",function(){ga("create","","auto"),ga("send","pageview")})},onChange:function(De){},languages:{en:{consent_modal:{title:"Cookies & Privacy Policy",description:'Enabling cookies allows you to use our website to its full extent and to personalize your experience on our sites. They tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches and give us insights into user behavior so we can improve our communications with you. <a aria-label="Cookies Policy-Privacy Policy"  href="/cookies" target="_sblank">Cookies Policy-Privacy Policy</a>',primary_btn:{text:"Accept all Cookies",role:"accept_all"},secondary_btn:{text:"Customise Cookies",role:"settings"}},settings_modal:{title:"<div>Cookie settings</div>",save_settings_btn:"Save settings",accept_all_btn:"Accept all",cookie_table_headers:[{col1:"Name"},{col2:"Domain"},{col3:"Expiration"},{col4:"Description"},{col5:"Privacy policy"}],blocks:[{title:"Cookie usage",description:'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details about cookies and how we use them, read the full <a href="https://www.linaro.org/cookies" class="cc-link" target="_blank">cookie policy</a>.'},{title:"Analytics cookies",description:"These cookies cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.",toggle:{value:"analytics_cookies",enabled:!0,readonly:!1},cookie_table:[{col1:"_ga",col2:"google.com",col3:"2 years",col4:"Permanent cookie used to distinguish users.",col5:'<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>'},{col1:"_gat",col2:"google.com",col3:"1 minute",col4:"Permant Cookie used to throttle request rate. If Google Analytics is deployed via Google Tag Manager, this cookie will be named _dc_gtm_<property- id>.",col5:'<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>'},{col1:"_gid",col2:"google.com",col3:"1 day",col4:"Permanent Cookie used to distinguish users.",col5:'<a href="https://policies.google.com/privacy?hl=en-US" style="word-break: break-all;">Privacy Policy</a>'}]}]}}}})});