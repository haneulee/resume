(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(A){A.exports=JSON.parse('{"meta":{"title":"Haneul Lee - Resume","defaultLanguage":"English"},"aboutMe":{"name":"Haneul Lee","nickName":"Resume","profileImg":"../resume/assets/images/new_me.gif","email":"lovesky4294@gmail.com","githubUrl":"https://github.com/haneulee","blogUrl":"https://blog.haneul-lee.com/","websiteUrl":"https://www.haneul-lee.com/","linkedInUrl":"https://www.linkedin.com/hnlee"},"skillSets":[{"category":"Front End Skills","skills":[{"skill":"Javascript","level":"5"},{"skill":"HTML/CSS(SASS)","level":"5"},{"skill":"React","level":"5"},{"skill":"Typescript","level":"3"}]},{"category":"Back End Skills","skills":[{"skill":"Python","level":"3"},{"skill":"Django","level":"2"},{"skill":"Django-Rest-Framework","level":"1"},{"skill":"Java","level":"5"},{"skill":"Spring","level":"5"},{"skill":"Ruby","level":"4"},{"skill":"Ruby-on-Rails","level":"5"}]},{"category":"Collaboration Skills","skills":[{"skill":"Git/Github"},{"skill":"Notion"},{"skill":"Slack"},{"skill":"Figma"}]},{"category":"Etc...","skills":[{"skill":"Netlify"},{"skill":"Heroku"},{"skill":"AWS EC2"},{"skill":"AWS Beanstalk"},{"skill":"Docker"}]}],"projects":[{"imgUrl":"../resume/assets/images/hancom-smart-mirror.png","githubUrl":"","projectUrl":"","title":"[Team] Hancom - Laboratory Project","term":"v1.0.0","description":"Created Smart Mirror with APIs (Google Search, Map, Subway, Bus) / Voice Recognizing Library / Raspberry Pi / Realtime chat service on Document Editor","attribution":"Front End Development","tags":["Javascript","HTML","CSS"]}],"timestamp":[{"title":"Frontend Developer / Media Solution Group","when":"2019.02 ~ ","organizer":"SK planet","tags":["company"]},{"title":"Software Engineer / Web Framework Team","when":"2017.01 ~ 2019.02","organizer":"Hancom GROUP","tags":["company"]},{"title":"Staff Researcher / WebWrite Team","when":"2013.12 ~ 2016.12","organizer":"Hancom GROUP","tags":["company"]}],"experiences":[{"imgUrl":"../resume/assets/images/sk-btv.jpeg","title":"SK broadband BTV webapp UI","term":"2019.02 ~ ","description":"Developed web application of TV platform based on cloud streaming technology (ReactJS)","experienceUrl":"https://www.skbroadband.com/product/tv/SubMain.do"},{"imgUrl":"../resume/assets/images/hancom-amazon.png","title":"UI Framework","term":"2017.01 ~ 2019.02","description":"Currently Available to Amazon Workdocs Service. Built UX XML format design to customize UI / XML to HTML converter. - Improved Performance Tuning (60% improvements in UI render phase : 3s > 1s)","experienceUrl":"https://aws.amazon.com/ko/workdocs/?amazon-workdocs-whats-new.sort-by=item.additionalFields.postDateTime&amazon-workdocs-whats-new.sort-order=desc"},{"imgUrl":"../resume/assets/images/hancom-word.png","title":"Hancom web office (WORD)","term":"2013.12 ~ 2016.12","description":"Realtime Objects editing / Font Detecting / Keyboard Movement / Multilingual Support / Cross Browsing","experienceUrl":"https://www.hancom.com/product/productOfficeMain.do"}],"educations":[{"title":"Kongju National University","term":"2009.03 - 2014.02","description":"Department of Information & Communication Engineering - Radio Science Engineering"}]}')},,,,,,,,,,function(A){A.exports=JSON.parse('{"skill-sets-professional":"The skills that I am professional in","skill-sets-advanced":"The skills that I can make projects with","skill-sets-beginner":"The skills that I just started to learn"}')},function(A){A.exports=JSON.parse('{"skill-sets-professional":"\ub9ce\uc774 \uc0ac\uc6a9\ud574\ubcf4\uc558\uc73c\uba70 \uc790\uc2e0\uc774 \uc788\ub294 \uae30\uc220","skill-sets-advanced":"\uc5b4\ub290 \uc815\ub3c4 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\uc220","skill-sets-beginner":"\ud604\uc7ac \uad00\uc2ec\uc774 \uc788\uc5b4 \uc785\ubb38 \uc218\uc900\uc778 \uae30\uc220"}')},,,,,,,,,,function(A,e,t){},,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);t(24);var n=t(11),s=t(7),r=t(13),c=t(14),a=t(3),i={English:{translation:r},Korean:{translation:c}},l=a.meta.defaultLanguage;n.a.use(s.e).init({resources:i,lng:l,fallbackLng:{English:["English"],default:["Korean"]},debug:!0,defaultNS:"translation",ns:"translation",keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});var o=n.a,d=t(17),g=(t(29),t(1)),j=t.n(g),u=t(4),m=(t(30),t(55)),b="English",h="Korean",B=(t(31),t(0)),C=function(A){var e=A.children;return Object(B.jsx)("div",{className:"subtitle",children:Object(B.jsx)("h3",{className:"subtitle__h3",children:e})})};var O=Object(g.createContext)(null),f=function(A){var e=A.children,t=a.meta.defaultLanguage,n=Object(g.useState)(t),s=Object(u.a)(n,2),r=s[0],c=s[1];return Object(B.jsx)(O.Provider,{value:{currentLanguage:r,setCurrentLanguage:c},children:e})},v=function(){var A=Object(g.useContext)(O),e=A.currentLanguage,t=A.setCurrentLanguage;return{currentLanguage:e,changeLanguage:function(){return o.language===b?(o.changeLanguage(h),void t(h)):o.language===h?(o.changeLanguage(b),void t(b)):void 0}}},I=function(){var A=a.aboutMe,e=A.profileImg,n=A.name,s=A.email,r=A.githubUrl,c=A.blogUrl,i=A.websiteUrl,l=A.linkedInUrl,o=v().currentLanguage,d=Object(g.useState)(!1),j=Object(u.a)(d,2),O=j[0],f=j[1],I=Object(g.useRef)(null);Object(g.useEffect)((function(){if(O){var A=setTimeout((function(){f(!1)}),5e3);return function(){return clearTimeout(A)}}}),[O]);var Q=Object(g.useState)(""),x=Object(u.a)(Q,2),E=x[0],p=x[1],k=Object(g.useRef)(null);return Object(g.useEffect)((function(){o!==h?o!==b||t.e(3).then(t.bind(null,58)).then((function(A){fetch(A.default).then((function(A){return A.text()})).then((function(A){return p(A)})).catch((function(A){return console.log(A)}))})).catch((function(A){return console.log(A),""})):t.e(4).then(t.bind(null,57)).then((function(A){fetch(A.default).then((function(A){return A.text()})).then((function(A){return p(A)})).catch((function(A){return console.log(A)}))})).catch((function(A){return console.log(A),""}))}),[o]),k.current&&(k.current.innerHTML=function(A){var e="";function t(A){return new Option(A).innerHTML}function n(A){return t(A).replace(/!\[([^\]]*)]\(([^(]+)\)/g,'<img alt="$1" src="$2">').replace(/\[([^\]]+)]\(([^(]+?)\)/g,"$1".link("$2")).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>").replace(/(\+R\+)(?=\S)([^\r]*?\S[*_]*)\1/g,"<boldred>$2</boldred>").replace(/(\+B\+)(?=\S)([^\r]*?\S[*_]*)\1/g,"<boldblue>$2</boldblue>").replace(/(\+G\+)(?=\S)([^\r]*?\S[*_]*)\1/g,"<boldgreen>$2</boldgreen>").replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")}return A.replace(/^\s+|\r|\s+$/g,"").replace(/\t/g,"    ").split(/\n\n+/).forEach((function(A,s,r){s=A[0],e+=(r={"-":[/\n- /,"<ul><li>","</li></ul>"],"&":[/\n& /,"<ul><customli>","</customli></ul>"],1:[/\n[1-9]\d*\.? /,"<ol><li>","</li></ol>"],">":[/\n> /,"<blockquote>","</blockquote>","\n"]}[s])?r[1]+("\n"+A).split(r[0]).slice(1).map(r[3]?t:n).join(r[3]||"</li>\n<li>")+r[2]:"#"===s?"<h"+(s=A.indexOf(" "))+">"+n(A.slice(s+1))+"</h"+s+">":"<"===s?A:"<p>"+n(A)+"</p>"})),e}(E)),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"About Me"}),Object(B.jsxs)("div",{className:"about-me-container",children:[Object(B.jsxs)("div",{className:"personal-infos",children:[Object(B.jsx)("div",{className:"profile-image",children:Object(B.jsx)("img",{src:e,alt:"".concat(n,"\uc758 \uc0ac\uc9c4")})}),Object(B.jsx)("div",{className:"detail-wrapper",children:Object(B.jsxs)("div",{className:"details",children:[Object(B.jsx)("span",{className:"name",children:n}),Object(B.jsxs)("div",{className:"detail flex",children:[Object(B.jsx)("span",{className:"category",children:"Email"}),Object(B.jsxs)("div",{id:"email",onClick:function(){navigator.clipboard.writeText(s),f(!0)},children:[s,Object(B.jsx)(m.a,{nodeRef:I,in:O,timeout:300,classNames:"alert",unmountOnExit:!0,appear:!0,children:Object(B.jsx)("span",{ref:I,className:"alert",children:"copied!"})})]})]}),Object(B.jsxs)("div",{className:"detail flex",children:[Object(B.jsx)("span",{className:"category",children:"Github"}),Object(B.jsx)("a",{href:r,children:r})]}),c&&Object(B.jsxs)("div",{className:"detail flex",children:[Object(B.jsx)("span",{className:"category",children:"Blog"}),Object(B.jsx)("a",{href:c,children:c})]}),i&&Object(B.jsxs)("div",{className:"detail flex",children:[Object(B.jsx)("span",{className:"category",children:"Website"}),Object(B.jsx)("a",{href:i,children:i})]}),l&&Object(B.jsxs)("div",{className:"detail flex",children:[Object(B.jsx)("span",{className:"category",children:"LinkedIn"}),Object(B.jsx)("a",{href:l,children:l})]})]})})]}),Object(B.jsxs)("div",{className:"introduce",children:[Object(B.jsx)("div",{className:"subtitle",children:"Let me Introduce myself"}),Object(B.jsx)("div",{className:"about",ref:k})]})]})]})},Q=(t(36),t(37),function(A){var e=A.education,t=e.title,n=e.term,s=e.description;return Object(B.jsx)("div",{className:"education",children:Object(B.jsxs)("div",{className:"item__details",children:[Object(B.jsxs)("div",{className:"term",children:["[",n,"]"]}),Object(B.jsx)("div",{className:"title",children:t}),Object(B.jsx)("div",{className:"description",children:s})]})})}),x=function(){var A=a.educations;return Object(B.jsx)(B.Fragment,{children:A&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"Education"}),Object(B.jsx)("div",{className:"education-container",children:A&&A.map((function(A,e){return Object(B.jsx)(Q,{education:A},e)}))})]})})},E=(t(38),t(39),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABWiSURBVHgB7d3xcdNYv8dhcef9f9kKgAogFQAVABUAFQQqIFQAqQCoAKgAqCBQQaCCpQNufr6jvZm8xD6SJUfm+zwznmUXx1HEDucj6ejo2q8zHQAQ5X86ACCOAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAZnTz5s3u2rVrl77+/vvv7vv3792U1n2//nX//v0OyCYA4Ar9/Pmze/r0aQewawIArtjnz5+74+PjDmCXBAAswNHR0eSXAgDWEQCwAC4FALsmAGAhXAoAdkkAwII8e/as+/r1awcwNwEAC+NSALALAgAWps4APH/+vAOYkwCABXr9+vVqTgDAXAQALFRdCqi7AwDm8J8OWKRaF+Dly5fdq1evuqWqQPnw4UP37du31fbW63y01FLI169f7+7du9fdvn179U9gGa79OtMBs6gB8MePH902Pn36NGjgrLX+N6nPq88dqy5PVJwMvUxR+6O+94sXL1a/Bq6OSwCwcEu6FFADfj1IqF5j5ijUGYK3b992t27dWk10dIkDro4AgIWrQXMJdwXUIkVjB/7fqYmOBwcHlkCGKyIAYA/UUXNda78qFSC1SNHUavCvCLD4EeyeAIA9UZcCruJoua7119H6XOoyQJ1ZEAGwWwIArlhNhms5ur6KBwbVmYd6UuHc6md79OiROQGwQwIAFqBu9WuZ6b/LBwb1tyG26m/3q2CoV0XNnTt3mr9+6PcDtuM2QJhRy22A9Z7T09N/r4dvOgqugfbk5OTS2+imug2wzjbUGYAWjx8/Xl0mqG27qOYu1ByC1ssXQ297BMZxBgAWogb0uj9+k11cCuhv12tR21zv/d3gXx4+fLga1Fvv+3cWAHZDAMCC1GnzJVwKePfuXdP7alBvmSNQ73vz5k3Xon42cwFgfgIAFqYGysuOps+rgXeuuwJabzlsHdRLhU3rqf3WAAHGEwCwMHW03LL+fz9zfmoVFS235PXL+g7RcomjeBIizE8AwAI9efJkde18kxqop14lsB7s06Jl+y6qYGg5uyEAYH4CABaqTq+3TJyr2fdTDpitC/LcvXu3G6Pl1sA6u2EeAMxLAMBC1ZFy6zX2KR8Y1DqvYOzT/FrXBvCMAJiXAIAFq1PmLasETrmIztwB0HIJoDgDAPMSALBwNXHuKi4FbNI6kI/9uk0LKAHbEQCwcEMuBdRDdQBaCADYA62XAqYw9yn61q+7ceNGB8xHAMCeqLUBhjxcZ6ylBAAwLwEAe+T9+/ejr723ap3c9+XLl26M1tsMdxE7kEwAwB5pfWDQNlpPvbcO5GO+riJn7tCBdAIA9kzrA4PGal3hr/Vpged9/Pix6RKAxwHD/AQA7KHWBwaNUZ/bulrf0NsO61bFFg8ePOiAeQkA2ENzXwpoPQswZAXCOmPQGgzOAMD8BADsqboUMOaBPC0ODw+b3lerBrY8jGjISoX1IKSxqwwC7QQA7LHWBwYNVZcBWtcdqCP7g4ODS5cQPj4+Xvv7F809yRH4P//pgL3VrxI4xwqANRDX4N5yir9m9t+6dWs1d+D8/IEPHz4Muu/f0T/sjgCAPdevEtg6wa5VxUVFQMsp/l6FwNjbA3dxiyPw/1wCgD9A6wODhqqw2MWgXLHx6dMnR/+wQwIA/gBDHhg01NHR0awRYPCHqyEA4A8x5wOD5oqAGvRPTk4s+wtXQADAH2TOBwZVBJyenk7y+f38ghr8HfnD1RAA8IeZ84FB/RF7nbIfswZBP/BXSFRQWO8frs61X2c6YBYtK9+1Lr07RM3EX3f73VTfs18OuJ4MWPf517+fv9+/gqFet2/fXn0/K/zBcggAAAjkEgAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIH+08FCfPnypTs6Otr4vsPDw+7hw4cdAOMJABbj9PS0+/z588b3PXnypANgOy4BAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAICsB8sf5+vVr9/Pnz7XvuXnz5up1UX3dhw8fum/fvq1+/f379+769eur9969e7e7d+/e6t9b/e7zyp07d1av+szfbcdU6nvW6or1/fvv3f+zvm//s92+fXv1s81tm/3RskrkZX+uY7bz/H6rf+//n+q/R+2z2uY5//xgVr9gId68efOr/pfc9Hr79u3azzkbyAZ/xj///PPr6Ojo19mAuPFrnzx58uv09HTtNnz69KlpO+pV7zs5Ofk1lf5naf3+F7dl0/4dY+j++N3+bfna+rnHqv1W/w8O3W9z7TOYmwBgMa4qAGrwbRn4z7/OjvoujYBnz54NHni3Hbx6rRHT8vNNMajVoDrV/phzH9b/e/UzL2Gfwa4IABbjKgKgBv+xf+HXQHsxAurswDaDSH39GLUdZ6ejt/rev3vV4D1WbdO2g+r5AX3o+1tUoDx8+HDSfdZyhgiWwCRAYtW13UePHnVj1TXh81//8uXL7iwsum3U1x8fHw/6mvo57t+/v5r7MLXXr1+vPnuofpv6a/xj1eOhh+6PVrVtBwcHqzkJU6o/wyl+dpibACBWDdjb/iVdg+67d+9Wn1OD1RTqczZNYuxNNdCuU5Phnj9/PuhrKoym2qYh+6PV3Put//yptxumJACIVH9Bb3u03qvPqZiYSg0arUe9U0RMizoT0DILv9Q2TXk2ovbH06dPuynV58293+rzh4YT7JLbAIk01dF6aR0Yh6gB98WLF2vfMyRi6na/s2vTq1vX+tsY6+srNFoHwhrYN90qWJ9V2z5GbddlR8xTnqavn3nIn1n9zHW7X7/fKm7q1bLf6s/n8ePHO7nFEgb7BQuxy0mA3YXJfDXZ7f3796vb1epVE7nGTmD73ee9evVq8OdtujWwdcLh4eHharLbZc5Co3mb1n3OkG3qX/VnVfvn/OfWBLqxs/I3TQIcMjGxJgeum8zXut/qZ4QlEgAsxlUEwLrb+cbMYl/3eeXsaLD5szb9nC23+9Ug1aJ14K6oWWfI/tq0bWPubNgUAPX7U2xbr/UW0oocWBpzAIhVK7id/cV86Upu/e+3rvxX71v3eaVOj7euHLfuFHP93tkR6urUcr36Vf3Oq//WeqmjTlO3+PHjx6W/V6fVWy8n1OWNTdu26c9njJZLJnWppHW/1aWBTZdqypRzRGAqAoBYNehtGlzq92tAaFED8qbPq0H67PJA12LdDPL6PmdnTFYDZL3Ojpa7s9PodUZv9euzI9Pu7Gi9a9U6yK7bpo8fP3at36t1gK39VT/nFFoCpb5fy4B+Xv15Vgis07I8NeyaACBW68BeE+datB5FP3jwoOl9YweMGmD7tfVbTTE4tc78HzrA1hmOGzdudNtqCZSWiLvs69ap/TvHOg2wDQFApP4hOC2u6n27UkfFU9xm1zrAjZkRv6vta42zi1piqx4sBEviNkAiDXmi35+if6Jdfzq6BqT69RS3MfZPzNtk7NPz6imB22r5OesswZiBumXugzMALI0AgD/M+Ufu1sDUes/6Nlo/f+zZj23PmrRu31SLQ/2OOQAsjQCAP0ANLrUkcQ38cyxMNJUh8xLO21UAzEkAsDQCAPZcDfq15OwSBjlgf5gECHus7i+f8sE7QA4BAHuqBv8pnmkw5t73sZwGh+VwCQD20NjHD/drBNQ/a32DfhXBss1qda13VYwNgG1n0LfOIai1Iea6TXOKtQxgSgIA9lDrY2b7pwDW/e3nn2g3tdbPHTtBcd0SxC1at8+T+0giAGDP9Lf5bTLHWvrrvte6x/n26sxFvYZu07aPA65tqyPwTSGxbWjAPjEHAPZM6+nwXQ3+vdZb/Op2xaGmuLXx4OBg43uWfAslTE0AwJ5pWanu/LX9FlOsUtd66ryeiDhkLkDNTZjiLoeW7aszDWPmKdTXuBODfSMAYM/MMZP++Pi421brcr21/XXrYosKkynudCgtD2uqbRuzL2pOxq1bt7pr166tXvXrOuNw//791aueZbDtZQyYmgCAPdMyoW3I0Wi9d4olcOsIu/UsQJ1qrwFy3XbWQFyD51Rqv7VsXwXHkEsBFSkX91+/BHN9Tr3mXGIYxhIAsGf++uuvje+pAajliLPeN+Ug2/pI5FIDZB0p19mAGuxrkKxXfzT97Nmzyc92tK53UPuk5UxA7eOW/VeXYzY9Mhh2zV0AsGdaj7LrtHPNaj88PPyv3+tPdQ+9Hr9J3XI49Jp9DaK7Oj3en6VoOcKvAKn9U/+sNRP6ORW1v758+TLouQtuLWSJBADsmRqIWm5pq4GqBq86pX3+Mbx15D3no2nfvHkz6VmFUhEzxTyFUttXlx9awqdCpvbhNmq/72qlRRjCJQDYQ3V036oGuv46dL0uG/zHPqnvojraffXqVTeVGkDrSHzKz5ty+zap77XL2zGhlQCAPVRHxFMOKvV5UwVAqaPmKY56a+JerWcwtbpUsYuj8voerv2zVAIA9lANjO/fv59kad8a+Kc8wu7VpYfaxrGhMvdKhv32zbE8cn1mXWqY6hZGmIMAgD1VA/fJyclWA2Sdrp/jCLtXR7/1+XUk3Lqd/dMJ62eb8qzEZdtX36fOCEyl9unUnwlzEACwx/qj5KET1WqQrWvT9bVzPSCoV9tYR8Knp6f/bmsNkv3ExHrVv9eAWUfN9b56/9zbdX776vvWtm1zur6PqV0vwQxjXft1poMFqBnXLbdVbVrmtj5j021oNbi0/mXf+vCd+rzWQatlYZh+YGzV77+PHz/++9CdfqZ7bVf/KOC6V/93TwZs2W/1dXMflV+mVtjbpMJh22v7/X6sJZf7OyYu3jHQP/yo/nzqFsEhf/awFAIA2Au7CgBI4RIAsHit6xY49Q7tLAQEzKK/BFGDdy1a1F9eqOvtQ9VljRa1QBLQxiUAYBI1wNc6/v0188tW2qv5D0OeGdA/r6BleWF/nUE7ZwCASdTp95o8t2mJ3f6OhZYIqEG/HhbUMvi77Q6GMQcAmEzL7YgVCDVY13LGdXfF74KhBvx6qFCt2d96/X/IWQXAJQBgQjWY16N8hz5h8PzkvXWXDy7TryEAtBMAwKRqWeGaC7Arcy8ZDH8qlwCASU31IKAWBn8YTwAAk9vFgjwGf9iOSwDAbIbcwteqltytxxfXmQbL78J4AgCYXd37/+7du6ZnPVzGwA/TEgDAzlx80E7/0KKL+oft1IOH6mE7/dMDgekIAAAIZBIgAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgf4XWhsuACHteIMAAAAASUVORK5CYII="),p=function(A){var e=A.event,t=e.imgUrl,n=e.experienceUrl,s=e.title,r=e.term,c=e.description,a=e.attribution,i=e.tags;return Object(B.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:Object(B.jsxs)("div",{className:"experience",children:[Object(B.jsx)("div",{className:"item__image",children:Object(B.jsx)("img",{src:t,alt:"".concat(s," logo \uc774\ubbf8\uc9c0"),onError:function(A){return A.target.src=E}})}),Object(B.jsxs)("div",{className:"item__details",children:[Object(B.jsxs)("div",{className:"title",children:[s," ",Object(B.jsxs)("span",{className:"term",children:["(",r,")"]})]}),Object(B.jsx)("div",{className:"description",children:c}),a&&Object(B.jsx)("div",{className:"attribution",children:a}),i&&Object(B.jsx)("div",{className:"tags",children:i.map((function(A){return Object(B.jsx)("div",{className:"tag",children:A})}))})]})]})})},k=function(){var A=a.experiences;return Object(B.jsx)(B.Fragment,{children:A&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"Experiences"}),Object(B.jsx)("div",{className:"experience-container",children:A.map((function(A,e){return Object(B.jsx)(p,{event:A},e)}))})]})})},N=(t(40),function(){return Object(B.jsx)("div",{className:"footer-container",children:Object(B.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ddongule/ddongule-simple-portfolio",children:Object(B.jsxs)("p",{className:"footer-contents",children:[Object(B.jsx)("span",{className:"icon",children:"\xa9 2021"})," ddongule-simple-portfolio"]})})})}),w=(t(41),function(A,e){var t=A.children;return Object(B.jsx)("div",{className:"page",ref:e,children:Object(B.jsx)("div",{className:"page-container",children:t})})}),S=Object(g.forwardRef)(w),X=t(10),q=(t(42),t(43),function(A){var e=A.title,t=A.term,n=A.imgUrl,s=void 0===n?"../../../assets/static/images/no-image.png":n,r=A.tags,c=A.description,a=A.attribution,i=A.projectUrl,l=A.githubUrl;return Object(B.jsxs)("div",{className:"project",children:[Object(B.jsxs)("a",{className:"project__details",href:i,target:"_blank",rel:"noopener noreferrer",children:[Object(B.jsx)("div",{className:"item__image",children:Object(B.jsx)("img",{src:s,alt:"".concat(e," logo \uc774\ubbf8\uc9c0"),onError:function(A){return A.target.src=E}})}),Object(B.jsxs)("div",{className:"item__details",children:[Object(B.jsxs)("div",{className:"title",children:[e," ",Object(B.jsxs)("span",{className:"term",children:["(",t,")"]})]}),Object(B.jsx)("div",{className:"description",children:c}),Object(B.jsx)("div",{className:"attribution",children:a}),Object(B.jsx)("div",{className:"tags",children:r.map((function(A,e){return Object(B.jsx)("div",{className:"tag",children:A},e)}))})]})]}),l&&Object(B.jsx)("div",{className:"project__links",children:Object(B.jsx)("a",{href:l,children:Object(B.jsx)("div",{className:"github-logo"})})})]})}),P=function(){var A=a.projects;return Object(B.jsx)(B.Fragment,{children:A&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"Projects"}),Object(B.jsx)("div",{className:"projects-container",children:A.map((function(A,e){return Object(B.jsx)(q,Object(X.a)({},A),e)}))})]})})},z=(t(44),t(56)),J=function(){var A=a.skillSets,e=Object(z.a)().t;return Object(B.jsx)(B.Fragment,{children:A&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"Skill Sets"}),Object(B.jsxs)("div",{className:"skill-sets-container",children:[Object(B.jsxs)("div",{className:"description",children:[Object(B.jsxs)("div",{className:"description-item",children:[Object(B.jsx)("span",{className:"level expert",children:"4 - 5"}),": ",e("skill-sets-professional")]}),Object(B.jsxs)("div",{className:"description-item",children:[Object(B.jsx)("span",{className:"level",children:"3"}),": ",e("skill-sets-advanced")]}),Object(B.jsxs)("div",{className:"description-item",children:[Object(B.jsx)("span",{className:"level",children:"1 - 2"}),": ",e("skill-sets-beginner")]})]}),A.map((function(A,e){return Object(B.jsxs)("div",{className:"skill-set",children:[Object(B.jsx)("div",{className:"category",children:A.category}),Object(B.jsx)("div",{className:"items",children:A.skills.sort((function(A,e){return e.level-A.level})).map((function(A,e){var t=A.skill,n=A.level;return Object(B.jsxs)("div",{className:"item",children:[Object(B.jsx)("span",{className:"skill",children:t}),n&&Object(B.jsx)("span",{className:"level ".concat(n>3&&"expert"),children:n})]},e)}))})]},e)}))]})]})})},L=Object(g.createContext)(null),U=function(A){var e=A.children,t=Object(g.useState)(!1),n=Object(u.a)(t,2),s=n[0],r=n[1];return Object(B.jsx)(L.Provider,{value:{darkTheme:s,setDarkTheme:r},children:e})},D=(t(50),function(){var A=Object(g.useContext)(L).setDarkTheme;return Object(g.useEffect)((function(){"dark-mode"===localStorage.getItem("theme")&&(document.body.setAttribute("data-theme","dark-mode"),A(!0))}),[A]),{toggleDarkTheme:function(){if("dark-mode"===document.body.dataset.theme)return localStorage.removeItem("theme"),document.body.removeAttribute("data-theme"),void A(!1);localStorage.setItem("theme","dark-mode"),document.body.setAttribute("data-theme","dark-mode"),A(!0)}}}),y=function(){var A=D().toggleDarkTheme,e=v(),t=e.currentLanguage,n=e.changeLanguage;return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("div",{className:"language",children:Object(B.jsxs)("select",{defaultValue:t,onChange:n,children:[Object(B.jsx)("option",{value:"Korean",children:"Korean \ud83c\uddf0\ud83c\uddf7"}),Object(B.jsx)("option",{value:"English",children:"English \ud83c\uddfa\ud83c\uddf8"})]})}),Object(B.jsx)("div",{className:"theme-container",children:Object(B.jsx)("button",{onClick:A})})]})},H=(t(51),t(52),function(A){var e=A.title,t=A.when,n=A.description,s=A.organizer,r=A.tags;return Object(B.jsxs)("div",{className:"timestamp",children:[Object(B.jsxs)("div",{className:"timestamp__main",children:[Object(B.jsx)("div",{className:"when",children:t}),Object(B.jsx)("div",{className:"title",children:e})]}),Object(B.jsxs)("div",{className:"timestamp__details",children:[Object(B.jsx)("div",{className:"organizer",children:s}),r.map((function(A,e){return Object(B.jsx)("div",{className:"tags",children:A},e)}))]}),Object(B.jsx)("div",{className:"timestamp__description",children:n})]})}),W=function(){var A=a.timestamp;return Object(B.jsx)(B.Fragment,{children:A&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C,{children:"Timestamp"}),Object(B.jsx)("div",{className:"timestamp-container",children:A.map((function(A,e){return Object(B.jsx)(H,Object(X.a)({},A),e)}))})]})})},T=(t(53),function(){var A=a.aboutMe.nickName;return Object(B.jsx)("div",{className:"title",children:Object(B.jsxs)("h1",{className:"title__h1",children:["{ ",A," } "]})})}),F=function(){var A=Object(g.useContext)(L).darkTheme,e=Object(g.useRef)(null);return Object(B.jsx)(m.a,{classNames:"fade",in:!A,timeout:300,nodeRef:e,children:Object(B.jsxs)(S,{ref:e,children:[Object(B.jsx)(y,{}),Object(B.jsx)(T,{}),Object(B.jsx)(I,{}),Object(B.jsx)(J,{}),Object(B.jsx)(P,{}),Object(B.jsx)(W,{}),Object(B.jsx)(k,{}),Object(B.jsx)(x,{}),Object(B.jsx)(N,{})]})})};var V=function(){var A=a.meta.title;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(d.a,{children:Object(B.jsx)("title",{children:A})}),Object(B.jsx)(U,{children:Object(B.jsx)(f,{children:Object(B.jsx)(F,{})})})]})},R=t(5);t.n(R).a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(V,{})}),document.getElementById("root"))}],[[54,1,2]]]);
//# sourceMappingURL=main.120b1761.chunk.js.map