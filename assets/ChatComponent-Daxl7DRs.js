import{r as d,C as x,j as t,b as u}from"./index-BwGppaVX.js";const C="_chatContainer_1nlau_1",$={chatContainer:C},j="_textMessage_nh9ai_1",I="_receivedMessage_nh9ai_13",f="_hasReaction_nh9ai_13",y="_sentMessage_nh9ai_17",R="_topMessage_nh9ai_34",b="_bottomMessage_nh9ai_39",T="_sending_nh9ai_59",m="_sent_nh9ai_17",N="_reaction_nh9ai_21",E="_repliedMessage_nh9ai_97",n={textMessage:j,receivedMessage:I,hasReaction:f,sentMessage:y,topMessage:R,bottomMessage:b,sending:T,sent:m,reaction:N,repliedMessage:E},B=["👍","❤️","😆","😮","😢","😡"];function v({sentId:i,origin:o,content:c,reaction:e,prevMessage:s,nextMessage:a,status:_,receivedId:r,index:l,reply:M}){const{dataChannel:p}=d.useContext(x);return t.jsxs("div",{"data-sent-id":i,"data-received-id":r,"data-index":l,className:`
        ${n.textMessage}
        ${_==="sending"?n.sending:n.sent}
        ${o==="sent"?n.sentMessage:n.receivedMessage}
        ${(a==null?void 0:a.origin)===o?n.topMessage:""}
        ${(s==null?void 0:s.origin)===o?n.bottomMessage:""}
        ${e?n.hasReaction:""}
        ${M?n.repliedMessage:""}
      `,children:[t.jsx("p",{children:c}),e&&t.jsx("span",{className:n.reaction,children:B[e]})]})}const F="_replyToMessage_s5e0e_1",L="_sentMessage_s5e0e_18",k="_receivedMessage_s5e0e_23",g={replyToMessage:F,sentMessage:L,receivedMessage:k};function q({sentId:i,origin:o,content:c,reaction:e,status:s,receivedId:a,index:_,reply:r,nextMessage:l}){const{messages:M}=d.useContext(u),p=r.receivedId?M.find(h=>h.receivedId===r.receivedId):M.find(h=>h.sentId===r.sentId);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`
                        ${g.replyToMessage}
                        ${o==="sent"?g.sentMessage:g.receivedMessage}
                        ${e?g.hasReaction:""}
                      `,children:t.jsx("p",{children:p.content})}),t.jsx(v,{index:_,sentId:i,receivedId:a,status:s,origin:o,content:c,reaction:e,reply:!0,nextMessage:l},_)]})}function z(){const{messages:i,chatBottom:o}=d.useContext(u),c=d.useRef(null);return d.useEffect(()=>{o.current=c.current},[]),t.jsxs("div",{className:$.chatContainer,children:[i.map((e,s,a)=>e.reply?t.jsx(q,{index:s,sentId:e.sentId,receivedId:e.receivedId,status:e.status,origin:e.origin,content:e.content,reaction:e.reaction,reply:e.reply,nextMessage:a[s+1]},s):t.jsx(v,{index:s,sentId:e.sentId,receivedId:e.receivedId,status:e.status,origin:e.origin,content:e.content,reaction:e.reaction,prevMessage:a[s-1],nextMessage:a[s+1]},s)),t.jsx("div",{ref:c})]})}export{z as default};
