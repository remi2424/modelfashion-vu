/*
 Quantcast measurement tag
 Copyright (c) 2008-2021, Quantcast Corp.
*/
(function(a,g,f){try{__qc("defaults",a,{labels:"_fp.event.Default"})}catch(k){}var h=function(a,c,b){return a?"nc"===a?!c||!b||0>c.indexOf(b):"eq"===a?c===b:"sw"===a?0===c.indexOf(b):"ew"===a?(a=c.length-b.length,c=c.lastIndexOf(b,a),-1!==c&&c===a):"c"===a?0<=c.indexOf(b):!1:!1},b=function(a,c,b){var d;if(g.top===g.self)d=f.location.href;else{d=f.referrer;var e=f.createElement("a");e.href=d;d=e.href}h(c,d,b)?a(d):a(!1)},e=function(a,c,b){b=document.getElementById(b);var d;if(b){d=function(){a(!0)};
if(b.addEventListener)return b.addEventListener(c,d,!1),!0;if(b.attachEvent)return b.attachEvent("on"+c,d),!0}a(!1)},c=function(a){return"array"==={}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()?{labels:a.join(",")}:{labels:""+a}};__qc.apply(null,["rules",[a,null,[[c,"_fp.event.AP Landing page"]],[[b,"eq","https://about.imvu.com/ap-landing-page"]]],[a,null,[[c,"_fp.event.VIP Club"]],[[b,"eq","https://about.imvu.com/vip-club"]]],[a,null,[[c,"_fp.event.Metaverse Landing Page"]],[[b,"c",
"https://about.imvu.com/metaverse"]]],[a,null,[[c,"_fp.event.IMVU Promise Landing Page"]],[[b,"eq","https://about.imvu.com/imvu-promise"]]],[a,null,[[c,"_fp.event.Great Reviews for IMVU Landing Page"]],[[b,"c","https://about.imvu.com/great-reviews-for-imvu"]]],[a,null,[[c,"_fp.event.Continue with Facebook Button Click"]],[[e,"click","btn id-fb"]]],[a,null,[[c,"_fp.event.Continue With Apple Button Click"]],[[e,"click","id-apple"]]],[a,null,[[c,"_fp.event.VCOIN Homepage"]],[[b,"eq","https://vcoin.imvu.com/"]]],
[a,null,[[c,"_fp.event.MMO vs MMORPG Landing Page"]],[[b,"eq","https://about.imvu.com/mmo-vs-mmorpg"]]],[a,null,[[c,"_fp.event.Homepage"]],[[b,"c","https://secure.imvu.com/welcome/ftux/"]]],[a,null,[[c,"_fp.event.The Real VCOIN Media"]],[[b,"eq","https://therealvcoin.com/media/"]]],[a,null,[[c,"_fp.event.The Real VCOIN Use Cases"]],[[b,"eq","https://therealvcoin.com/use-cases/"]]],[a,null,[[c,"_fp.event.The Real VCOIN FAQ"]],[[b,"eq","https://therealvcoin.com/faq/"]]],[a,null,[[c,"_fp.event.The Real VCOIN Homepage"]],
[[b,"eq","https://therealvcoin.com/"]]],[a,null,[[c,"_fp.event.Gaming Social Media Landing Page"]],[[b,"eq","https://about.imvu.com/gaming-social-media"]]],[a,null,[[c,"_fp.event.Halloween with Pabllo Landing Page"]],[[b,"eq","https://about.imvu.com/halloweenwithpabllo"]]],[a,null,[[c,"_fp.event.Virtual Social Life Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-social-life"]]],[a,null,[[c,"_fp.event.Urban Chat Landing Page"]],[[b,"eq","https://about.imvu.com/urban-chat"]]],[a,null,[[c,"_fp.event.Social Virtual Reality Landing Page"]],
[[b,"eq","https://about.imvu.com/social-virtual-reality"]]],[a,null,[[c,"_fp.event.Meet New People Landing Page"]],[[b,"eq","https://about.imvu.com/meet-new-people-on-imvu"]]],[a,null,[[c,"_fp.event.What Parents Need to Know Landing Page"]],[[b,"eq","https://about.imvu.com/what-parents-need-to-know-about-imvu-our-promise"]]],[a,null,[[c,"_fp.event.Your Voice Your Right Landing Page"]],[[b,"eq","https://about.imvu.com/imvu-wants-you-to-vote-your-voice-your-right"]]],[a,null,[[c,"_fp.event.Hang Out With Friends Landing Page"]],
[[b,"eq","https://about.imvu.com/hangout-with-friends-on-imvu"]]],[a,null,[[c,"_fp.event.Multiplayer Games Landing Page"]],[[b,"eq","https://about.imvu.com/multiplayer-games"]]],[a,null,[[c,"_fp.event.Make New Friends Landing Page"]],[[b,"eq","https://about.imvu.com/make-new-friends-on-imvu"]]],[a,null,[[c,"_fp.event.3D Virtual World FR Landing Page"]],[[b,"eq","https://about.imvu.com/monde-virtuel-en-3d"]]],[a,null,[[c,"_fp.event.3D Virtual World DE Landing Page"]],[[b,"eq","https://about.imvu.com/virtuelle-3d-welt"]]],
[a,null,[[c,"_fp.event.3D Virtual Chat FR Landing Page"]],[[b,"eq","https://about.imvu.com/messagerie-virtuelle-en-3d"]]],[a,null,[[c,"_fp.event.3D Virtual Chat DE Landing Page"]],[[b,"eq","https://about.imvu.com/virtueller-3d-chat"]]],[a,null,[[c,"_fp.event.Virtual World LQBTQ Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-world-lgbtq-community"]]],[a,null,[[c,"_fp.event.Virtual Fashion Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-fashion"]]],[a,null,[[c,"_fp.event.Virtual Life Landing Page"]],
[[b,"eq","https://about.imvu.com/virtual-life"]]],[a,null,[[c,"_fp.event.3D Avatar Creator Landing Page"]],[[b,"eq","https://about.imvu.com/3d-avatar-creator"]]],[a,null,[[c,"_fp.event.Make New Friends Landing Page"]],[[b,"eq","https://about.imvu.com/make-new-friends"]]],[a,null,[[c,"_fp.event.Virtual Meetup Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-meetup"]]],[a,null,[[c,"_fp.event.Role Playing Landing page"]],[[b,"eq","https://about.imvu.com/role-playing-games"]]],[a,null,[[c,"_fp.event.Social Distancing Landing Page"]],
[[b,"eq","https://about.imvu.com/social-distancing"]]],[a,null,[[c,"_fp.event.Virtual Friend Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-friend"]]],[a,null,[[c,"_fp.event.Staying Connected While Staying In"]],[[b,"eq","https://about.imvu.com/staying-connected-while-staying-in"]]],[a,null,[[c,"_fp.event.3D Avatar Landing Page"]],[[b,"eq","https://about.imvu.com/3d-avatar"]]],[a,null,[[c,"_fp.event.Virtual World Landing Page"]],[[b,"eq","https://about.imvu.com/virtual-world"]]],[a,null,
[[c,"_fp.event.3D Chat Landing Page"]],[[b,"eq","https://about.imvu.com/3d-chat"]]],[a,null,[[c,"_fp.event.Welcome Brazil"]],[[b,"sw","https://pt.secure.imvu.com/welcome"]]],[a,null,[[c,"_fp.event.Shop"]],[[b,"c","/shop"]]],[a,null,[[c,"_fp.event.VIP Club"]],[[b,"eq","http://www.imvu.com/vip_club/"]]],[a,null,[[c,"_fp.event.Shop"]],[[b,"eq","http://www.imvu.com/shop/"]]],[a,null,[[c,"_fp.event.Download"]],[[b,"eq","https://secure.imvu.com/welcome/ftux/download/"]]],[a,null,[[c,"_fp.event.Create Account"]],
[[b,"eq","https://secure.imvu.com/welcome/ftux/account/"]]],[a,null,[[c,"_fp.event.Clothing"]],[[b,"eq","https://secure.imvu.com/welcome/ftux/clothing/"]]],[a,null,[[c,"_fp.event.DNA"]],[[b,"eq","https://secure.imvu.com/welcome/ftux/dna/"]]],[a,null,[[c,"_fp.event.Gender"]],[[b,"eq","https://secure.imvu.com/welcome/ftux/gender/"]]],[a,null,[[c,"_fp.event.Welcome"]],[[b,"eq","https://secure.imvu.com/welcome/ftux/"]]]])})("p-EAkvGxbXCcR77",window,document);