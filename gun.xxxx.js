


                       (function(){var t;if(typeof window     !==  ("undef"+      "ined") ){   t=window}if(typeof global !==  (
                      "undef"+"ined") ){t=global}t=t || {}    ;var n=t.console       || {log:function    (){}};function e(t,n){ return n ?
                      require(t):t.slice?e[r(t)]:function    (n,i){t(n={exports     :{}});e[r(i)]=n.   exports};function r(t){ return t.split
                      ( ("/") ).slice(-1).toString().    replace( (".js"      ) , ("") )}}if(   typeof module !==  ("undef"+"ined")
                     ){var r=module}e(function(t){var n=    {};n.fn={is:     function(t){   return!!t &&  ("funct"+"ion")  ==
                    typeof t}};n.bi={is:function(t){    return t        instanceof    Boolean || typeof t ==  ("boole"+"an"
                   ) }};n.num={is:     function(t){     return!r (t) &&       (t-parseFloat(    t)+1 >= 0 ||       Infinity === t     || -
                   Infinity === t)      }};n.text={is:   function(t){      return typeof  t    ==  ("strin"+"g"     ) }};n.text.   ify=function
                  (t){if(n.text.is     (t)){ return t }    if(typeof JSON       !==  ("undef"+   "ined") ){      return JSON.stringify     (t)}
                  return t  && t.     toString?t.    toString():t};n.     text.   random=function      (t,n){var e= (""    ) ;t=t
                  || 24;n=n ||  ("01234"+"56789"+   "ABCDE"+"FGHIJ"+"KLMNO"+"PQRST"+   "UVWXZ"+"abcde"+     "fghij"+"klmno"+     "pqrst"
                 +"uvwxy"+"z") ;while(t>0){e += n.    charAt(Math.floor(Math.random()*n.    length)); t-- }       return e };n.
                text.match=function(t,n){var e,r;if(    ("strin"+"g")  !== typeof t){    return false }if     ( ("strin"+"g")
                == typeof n){n={ "=" :n}}n=n || {};    e=n[ ("=") ] || n[ ("*") ] || n[ (">"    ) ] || n[ ("<")       ];if(t === e){
                return true }if(r !== n[ ("=") ]){     return false }e=n[ ("*") ] || n[ (">"   ) ] || n[ ("<")       ];if(t.slice(0,
               (e ||  ("") ).length) === e){     return true }if(r !== n[ ("*") ]){     return false }       if(r !== n[ (">"
                                 ) ] && r !== n[
                                 ("<") ]){ return t
               >= n[ (">")       ] && t <= n[ ("<"      ) ]?true:false}
            if(r !== n[ (">"      ) ] && t >= n[ (     ">") ])
           { return true }if     (r !== n[ ("<")      ] && t
            <= n[ ("<") ])      { return true }
          return false };n     .list={is:function      (t){
         return t        instanceof Array        }};n
         .list.slit=Array     .prototype.slice
        ;n.list.     sort=function(t)
        { return function       (n,e){if(!n ||     !e){ return 0 }n=n[t];
       e=e[t];if(n<e){      return-1 }else if    (n>e){ return 1 }else
       { return 0 }}};      n.list.    map=function(t,n,e
      ){ return a (t,n     ,e)};n.list.
     index=1;n.obj={is     :function(t){
     return t ?t instanceof Object && t.
    constructor === Object || Object.
    prototype.toString.call(t).match(
   /^\[object (\w+)\]$/ )[1] ===
   "Object" :false}};n.obj.put=function
  (t,n,e){ return(t  || {})[n]=e,t};n.


                       obj.has=function(t,n){ return t  &&     Object.prototype      .hasOwnProperty   .call(t,n)};n.obj.del=function(t,n){
                      if(!t){return}t[n]=null;delete t[n];     return t };n.obj      .as=function(t,    n,e,r){ return t [n]=t[n] || (r ===
                       e?{}:e)};n.obj.ify=function(t){if(    o(t)){ return t      }try{t=JSON.parse   (t)}catch(n){t={}} return t };(
                     function(){var t;function e(n,e){if(    u(this,e) && t       !== this[e]){   return}this[e]=n}n.obj.to=function(t
                     ,n){n=n || {};a(t,e,n); return n }}    )();n.obj.     copy=function(t)   { return!t ?t:JSON.parse(JSON.
                    stringify(t))};(function(){function    t(t,n){var e=this      .n;if(e && (n ===    e || o(e) && u(e,n))){return}if(n){
                    return true }}n     .obj.    empty=function(      n,e){if(!n){     return true }       return a (n,t,{    n:e})
                   ?false:true}})(      );(function(){   function t(n,e){     if(2 === arguments   .length){t.r=t.r      || {};t.r[n]=e;   return
                  }t.r=t.r || [];t     .r.push(n)}var     i=Object.keys,a      ;Object.   keys=Object.keys      || function(t){
                  return a (t,     function(t,n,e)    {e(n)})};n.obj.     map=a=function(a   ,f,s){var c,l=0      ,p,h,d,g,v=e(f)    ;t.
                 r=null;if(i && o(a)){d=i(a);g=true}if   (r(a) || d){p=(d || a).length;for(;l   <p; l++ ){var m=l     +n.list.index;if     (v){
                 h=g?f.call(s || this,a[d[l]],d[l],t    ):f.call(s || this,a[l],m,t);if(h !==     c){ return h }      }else{if(f ===
                a[g?d[l]:l]){ return d ?d[l]:m}}}}else   {for(l in a){if(v){if(u(a,l)){h=s?f.   call(s,a[l],l,t)     :f(a[l],l,t);if(
               h !== c){ return h }}}else{if(f ===     a[l]){ return l }}}} return v ?t.r:    n.list.index?0:      -1}})();n.time=
               {};n.time.is=function(t){ return t     ?t instanceof Date:+(new Date).getTime   ()};var e=n.fn.      is;var r=n.list.
               is;var i=n.obj,o=i.is,u=i.has,a=i.map    ;t.exports=n})(e, ("./typ"+"e") );e    (function(t){t       .exports=function
                                  t(n,e,r){if(!n)
                                 { return{to :t}}
             var i,n=(this.      tag || (this.tag=      {}))[n] || (this
            .tag[n]={tag:n,      to:t._={next:     function
           (t){var n;if(     n=this.to){n.next     (t)}}}
           });if(e       instanceof       Function
          ){var o={off:t.off      || (t.      off=function
         (){if(this.next       === t._.next){         return!0
          }if(this === this     .the.last){this.
        the.last=this.back     }this.to.back=this
        .back;this.next=t      ._.next;this.back    .to=this.to;if(this.the
       .last === this.the     ){delete this.on    .tag[this.the.tag]}})
       ,to:t._,next:e,      the:n,on:this,as    :r};(o.back=n.last
       || n).to=o;      return n.last =o
     }if((n=n.to) &&      i !== e){n.next(
     e)} return n }})(e, ("./ont"+"o") );
    e(function(t){function n(t,n,r,i,o){
    if(t<n){ return{defer :true}}if(n<r
   ){ return{historical :true}}if(r<n){
    return{converge :true,incoming:true
  }}if(n === r){i=e(i) ||  ("") ;o=e(o


                       ) ||  ("") ;if(i === o){ return{state     :true}}if(i<o){       return{converge    :true,current:true}}if(o<i){
                      return{converge :true,incoming:true}    }} return{err :       ("Inval"+"id CR"    +"DT Da"+"ta: ") +i+ (" to ") +o+ (
                      " at ") +n+ (" to ") +r+ ("!") }}if    (typeof JSON ===       ("undef"+"ined"   ) ){ throw new Error ( ("JSON "+
                     "is no"+"t inc"+"luded"+" in t"+    "his b"+"rowse"      +"r. Pl"+"ease "   +"load "+"it fi"+"rst: ") + ("ajax."
                     +"cdnjs"+".com/"+"ajax/"+"libs/"+    "json2"+"/2011"+     "0223/"+"json2"+   ".js") )}var e=JSON.stringify,r;t.
                    exports=n})(e, ("./HAM") );e(function   (t){var n=e( (      "./typ"+"e") );   var r={};r.is=function(t){if(t === o
                   ){ return false      }if(t === null){     return true }if      (t === Infinity    ){ return false       }if(f(t) || u(    t) ||
                    a(t)){       return true }    return r.link.is      (t) || false};r   .link=r.rel={_:      ("#") };(function   (){r.
                  link.is=function     (n){if(n && n[i]     && !n._ && c(n      )){var e={};p(n   ,t,e);if(e.id){      return e.id }}     return false
                   };function t(t,     n){var e=this;if    (e.id){      return e.id =false   }if(n == i && f      (t)){e.id=t}else    {
                 return e.id =false}}})();r.link.   ify=function(t){ return l ({},i,t)};   n.obj.has._= ("."     ) ;var i=r.link.     _,o;
                 var u=n.bi.is;var a=n.num.is;var f=n    .text.is;var s=n.obj,c=s.is,l=s.put    ,p=s.map;t.      exports=r})(e,
                ("./val") );e(function(t){var n=e( (   "./typ"+"e") );var r=e( ("./val") );   var i={_: ("_")      };i.soul=function
               (t,n){ return t  && t._ && t._[n ||     l]};i.soul.ify=function(t,n){n=typeof     n ===  ("strin"      +"g") ?{soul:n}
               :n || {};t=t || {};t._=t._ || {};t.    _[l]=n.soul || t._[l] || c(); return t    };i.soul._=r.      link._;(function
               (){i.is=function(n,e,r){var o;if(!u    (n)){ return false }if(o=i.soul(n))    { return!f (n,       t,{as:r,cb:e,s:
                                 o,n:n})}
                                 return false };
             function t(t,n      ){if(n === i._){      return}if(!r.is
            (t)){ return true       }if(this.cb){this     .cb.call
           (this.as,t,n,this     .n,this.s)}}})()     ;(
           function(){i.      ify=function(n,      e,r){
          if(!e){e={}}else      if(typeof e ===        (
         "strin"+"g") ){e=      {soul:e}}else if        (e
         instanceof      Function){e={map
        :e}}if(e.map){e.     node=e.map.call(
        r,n,p,e.node ||       {})}if(e.node=i    .soul.ify(e.node || {},
       e)){f(n,t,{o:e,as     :r})}     return e.node };
       function t(t,n)      {var e=this.o,i    ,o;if(e.map){i=e.map
      .call(this.as,t,      ("") +n,e.node)
     ;if(o === i){a(e     .node,n)}else if
     (e.node){e.node[n]=i}return}if(r.is(
    t)){e.node[n]=t}}})();var o=n.obj,u=o
    .is,a=o.del,f=o.map;var s=n.text,c=s
   .random;var l=i.soul._;var p;t.
   exports=i})(e, ("./nod"+"e") );e(
  function(t){var n=e( ("./typ"+"e") )


                       ;var r=e( ("./nod"+"e") );function     i(){var t;t=o();      if(u<t){ return a    =0,u=t+i.drift} return u =t+(a += 1
                      )/f+i.drift}var o=n.time.is,u=-    Infinity,a=0,      f=1e3;var     s=typeof performance !==  ("undef"+
                      "ined") ?performance.timing &&     performance:false     ,c=s && s.timing    && s.timing.navigationStart || (
                     s=false);i._= (">") ;i.drift=0;i.    is=function(t,n      ,e){var r=n &&    t && t[_] && t[_][i._] || e;if(!r){
                     return} return k (r=r[n])?r:-Infinity    };i.lex=function     (){ return i ().   toString(36).replace( (".") , ("")
                    )};i.ify=function(t,n,e,o,u){if(!t ||    !t[_]){if(!u){      return}t=r.soul   .ify(t,u)}var a=p(t[_],i._);if(x !==
                    n && n !== _){if     (k(e)){a[n]=e}if    (x !== o){t[n]=o      }} return t };i    .to=function(t,      n,e){var o=(t ||     {})[
                   n];if(d(o)){o=v      (o)} return i.ify    (e,n,i.is(t,n),     o,r.soul(t))};(   function(){i.     map=function(n,e   ,r){var
                   o;var u=d(u=n ||      e)?u:null;n=y(n=n     || e)?n:null;if      (u && !n){e=k(e   )?e:i();u[_]=u[_     ] || {};g(u,t,{o    :u,s:e
                  }); return u }r=r      || d(e)?e:o;e=k    (e)?e:i();      return function    (i,u,a,f){if(!n      ){t.call({o:a,s    :e},i,
                 u); return i }n.call(r || this || {}   ,i,u,a,f);if(h(a,u) && o === a[u]){   return}t.call({o     :a,s:e},i,u)}};     function
                  t(t,n){if(_ === n){return}i.ify(this    .o,n,this.s)}})();var l=n.obj,p=l.as    ,h=l.has,d=l.is      ,g=l.map,v=l.copy
                ;var m=n.num,k=m.is;var b=n.fn,y=b.is   ;var _=r._,x;t.exports=i})(e, ("./sta"   +"te") );e(     function(t){var
               n=e( ("./typ"+"e") );var r=e( ("./val"    ) );var i=e( ("./nod"+"e") );var o=    {};(function(){      o.is=function(n
               ,e,r,i){if(!n || !f(n) || l(n)){     return false } return!h (n,t,{cb:e,fn   :r,as:i})};      function t(t,e){
               if(!t || e !== i.soul(t) || !i.is(t    ,this.fn,this.as)){ return true }if    (!this.cb){       return}n.n=t;n.
                                 as=this.as;this.
                                 cb.call(n.as,t,e
             ,n)}function n      (t){if(t){i.is(n      .n,t,n.as)}}})(
            );(function(){o      .ify=function(n,     e,i){var
            o={path:[],obj:     n};if(!e){e={}}     else if
           (typeof e ===        ("strin"+"g") )      {e={
          soul:e}}else if(     e instanceof       Function
         ){e.map=e}if(e.      soul){o.link=r.        link
         .ify(e.soul)}e.     shell=(i || {}).
        shell;e.graph=e.     graph || {};e.
        seen=e.seen ||       [];e.as=e.as ||     i;t(e,o);e.root=o.node
       ; return e.graph      };function t(t,    n){var o;if(o=l(t,n))
       { return o }n.      env=t;n.soul=u;    if(i.ify(n.obj,e,n
      )){n.link=n.link      || r.link.ify(i
     .soul(n.node));if     (n.obj !== t.shell
     ){t.graph[r.link.is(n.link)]=n.node}
    } return n }function e(n,e,o){var
    u=this,f=u.env,l,p;if(i._ === e &&
   c(n,r.link._)){ return o._ }if(!(l=a
   (n,e,o,u,f))){return}if(!e){u.node=u
  .node || o || {};if(c(n,i._) && i.soul


                       (n)){u.node._=d(n._)}u.node=i.soul.    ify(u.node,r.link      .is(u.link));u.   link=u.link || r.link.ify(i.soul(u.
                      node))}if(p=f.map){p.call(f.as || {}    ,n,e,o,u);if(c(      o,e)){n=o[e];if    (g === n){s(o,e);return}if(!(l=a(n,
                      e,o,u,f))){return}}}if(!e){     return u.node }if     (true === l){    return n }p=t(f,{obj:n,path:u.path.
                     concat(e)});if(!p.node){return}     return p.link }      function u(t){var    n=this;var e=r.link.is(n.link),o=n.
                     env.graph;n.link=n.link || r.link.ify    (t);n.link[r.link     ._]=t;if(n.node    && n.node[i._]){n.node[i._][r.link.
                    _]=t}if(c(o,e)){o[t]=o[e];s(o,e)}}   function a(t,e,i      ,o,u){var s;if(   r.is(t)){ return true }if(f(t)){
                   return 1 }if(s=u     .invalid){t=s.call    (u.as || {},t,e      ,i); return a (    t,e,i,o,u)}u.err=       ("Inval"+"id va"    +
                   "lue a"+"t '")       +o.path.concat(e   ).join( (".") )+      ("'!") ;if(n.list   .is(t)){u.err +=       (" Use "+"`.set"   +"(item"
                  +")` in"+"stead"     +" of a"+"n Arr"    +"ay.") }}      function l(t,n)   {var e=t.seen,r=e     .length,i;while(     r-- )
                  {i=e[r];if(n.obj      === i.obj){     return i }}e.push     (n)}})();o.   node=function(t      ){var n=i.soul(    t);if(
                 !n){return} return p ({},n,t)};(   function(){o.to=function(n,e,r){if(!n   ){return}var i={     };r=r || {seen:{     }};h
                 (n[e],t,{obj:i,graph:n,opt:r});     return i };function t(t,n){var e,u;    if(i._ === n){if      (l(t,r.link._))
                {return}this.obj[n]=d(t);return}if(!   (e=r.link.is(t))){this.obj[n]=t;return   }if(u=this.opt.     seen[e]){this.obj
               [n]=u;return}this.obj[n]=this.opt.seen    [e]=o.to(this.graph,e,this.opt)}})(    );var u=n.fn.is      ;var a=n.obj,f=a
               .is,s=a.del,c=a.has,l=a.empty,p=a.put    ,h=a.map,d=a.copy;var g;t.exports=o}   )(e, ("./gra"+      "ph") );e(function
               (t){e( ("./ont"+"o") );t.    exports=function t(n,e){if(!this.on    ){return}if(!(       n instanceof
                                 Function)){if(!n
                                  || !e){return}var
              r=n[ ("#") ]       || n,i=(this.tag       || empty)[r];if
            (!i){return}      i=this.on(r,e);     clearTimeout
           (i.err);      return true }var      r=e &&
            e[ ("#") ] ||       Math.random().      toString
          (36).slice(2);if     (!n){ return r }      var
         o=this.on(r,n,e)      ;o.err=o.err ||
         setTimeout(     function(){o.next
        ({err: ("Error"+     ": No "+"ACK r"+
        "eceiv"+"ed ye"      +"t.") ,lack:true    });o.off()},(this.opt ||
        {}).lack || 9e3     ); return r }})(    e, ("./ask") );e(
       function(t){var       n=e( ("./typ"+    "e") );function r(
      t){var e={s:{}};     t=t || {max:1e3,
     age:1e3*9};e.     check=function(t
     ){var n;if(!(n=e.s[t])){ return false
     }if(n.pass){ return n.pass =false}
    return e.track (t)};e.track=function
   (r,o){var u=e.s[r] || (e.s[r]={});u.
   was=i();if(o){u.pass=true}if(!e.to)
  {e.to=setTimeout(function(){var r=i(


                       );n.obj.map(e.s,function(i,o){if(i     && t.age>r-i.was      ){return}n.obj.   del(e.s,o)});e.to=null},t.age+9)}
                      return u }; return e }var i=n.time.is    ;t.exports=r})(      e, ("./dup") );    e(function(t){function i(t){if(t
                      instanceof i){ return(this._ ={gun:    this,$:this}).$}     if(!(this    instanceof i)){ return new  i(t)}
                     return i.create (this._={gun:this,$:    this,opt:t})}i.      is=function(t){    return t  instanceof i || t && t._
                     && t === t._.$ || false};i.version=     .9 ;i.chain=i.     prototype;i.chain   .toJSON=function(){};var o=e( (
                    "./typ"+"e") );o.obj.to(o,i);i.HAM=e   ( ("./HAM") );i.      val=e( ("./val"   ) );i.node=e( ("./nod"+"e") );i.
                   state=e( ("./sta"     +"te") );i.graph=e    ( ("./gra"+"ph"      ) );i.on=e( (    "./ont"+"o") );      i.ask=e( ("./ask"    ) );i
                   .dup=e( ("./dup"      ) );(function(){   i.create=function     (n){n.root=n.root    || n;n.graph=n.     graph || {};n.on=n   .on ||
                   i.on;n.ask=n.ask      || i.ask;n.dup=n    .dup || i.dup()      ;var e=n.$.opt(   n.opt);if(!n.once     ){n.on( ("in") ,    t,n);n
                  .on( ("out") ,t,     {at:n,out:t});i    .on( ("creat"+"e"     ) ,n);n.on( (   "creat"+"e") ,n      )}n.once=1;     return e
                  };function t(n){var e=this,r=e.as,o=r   .at || r,u=o.$,a,f;if(!(f=n[ ("#") ]   )){f=n[ ("#") ]=s     (9)}if((a=o.dup)     .check
                 (f)){if(r.out === n.out){n.out=x;e.    to.next(n)}return}a.track(f);if(!o.    ask(n[ ("@") ],      n)){if(n.get){i
                .on.get(n,u)}if(n.put){i.on.put(n,u)   }}e.to.next(n);if(!r.out){n.out=t;o.   on( ("out") ,n)}     }})();(function(
               ){i.on.put=function(e,r){var u=r._,a=    {$:r,graph:u.graph,put:{},map:{},    souls:{},machine      :i.state(),ack:
               e[ ("@") ],cat:u,stop:{}};if(!i.graph    .is(e.put,null,t,a)){a.err= ("Error"   +": Inv"+"alid "      +"graph"+"!") }if
               (a.err){ return u.on ( ("in") ,{ "@"     :e[ ("#") ],err:i.log(a.err)})}d(a    .put,n,a);if(!a       .async){d(a.map
                                 ,o,a)}if(x !== a
                                 .defer){setTimeout
             (function(){i.      on.put(e,r)},a.      defer-a.machine
            )}if(!a.diff){      return}u.on( (     "put")
           ,h(e,{put:a.diff     }))};function t(     t,n,e,
           r){var o=this;var       u=i.state.is(e      ,n),a
          ;if(!u){      return o.err = (      "Error"
         +": No "+"state"      +" on '") +n+ (        "' in "
         +"node "+"'") +r     + ("'!") }var f=o
        .graph[r] || _,s=i     .state.is(f,n,true
        ),c=f[n];var l=i      .HAM(o.machine,    u,s,t,c);if(!l.incoming
       ){if(l.defer){o.     defer=u<(o.defer     || Infinity)?u:o.defer
       }return}o.put[r      ]=i.state.to(e,    n,o.put[r]);(o.diff
       || (o.diff={}))     [r]=i.state.to(e
     ,n,o.diff[r]);o.     souls[r]=true}
     function n(t,n){var i=this,u=i.$._,a=
    (u.next || _)[n];if(!a){if(!(u.opt ||
     _).super){i.souls[n]=false;return}
   a=i.$.get(n)._}var f=i.map[n]={put:t
   ,get:n,$:a.$},s={ctx:i,msg:f};i.
  async=!!u.tag.node;if(i.ack){f[ ("@"


                       ) ]=i.ack}d(t,e,s);if(!i.async){    return}if(!i.and      ){u.on( ("node"   ) ,function(t){this.to.next(t);if(t
                      !== i.map[t.get]){return}i.souls[t.get    ]=false;d(t.put      ,r,t);if(d(i.    souls,function(t){if(t){ return t }
                      })){return}if(i.c){return}i.c=1;this    .off();d(i.map,o     ,i)})}i.and=true   ;u.on( ("node") ,f)}function e(t,n){
                     var e=this.ctx,r=e.graph,o=this.msg,    u=o.get,a=o.put      ,f=o.$._,s;r[u]   =i.state.to(a,n,r[u]);if(e.async){
                     return}f.put=i.state.to(a,n,f.put)}    function r(t,n){     var e=this,r=e.put   ,o=e.$._;o.put=i.state.to(r,n,o.put
                    )}function o(t,n){if(!t.$){return}this   .cat.stop=this.      stop;t.$._.on(    ("in") ,t);this.cat.stop=null}i.on.
                   get=function(t,n     ){var e=n._,r=t.    get,o=r[m],u=e.      graph[o],a=r[k]    ,f;var s=e.next       || (e.next={})    ,c=s[
                   o];if(!u){       return e.on ( (   "get") ,t)}if(a)     {if( ("strin"+"g"   ) !=typeof a ||      !p(u,a)){    return e.on
                   ( ("get") ,t)}u=i     .state.to(u,a)}    else{u=i.obj.copy      (u)}u=i.graph.   node(u);f=(c ||      _).ack;e.on( ("in"    ) ,{ "@"
                   :t[ ("#") ],how     : ("mem") ,put:    u,$:n});e.on( (     "get") ,t)}})();   (function(){i.      chain.    opt=function
                 (t){t=t || {};var n=this,e=n._,r=t.   peers || t;if(!l(t)){t={}}if(!l(e.opt   )){e.opt=t}if(f(     r)){r=[r]}if(u(r     )){r=d
                 (r,function(t,n,e){n={};n.id=n.url=t    ;e(t,n)});if(!l(e.opt.peers)){e.opt    .peers={}}e.opt      .peers=h(r,e.opt
                .peers)}e.opt.peers=e.opt.peers || {   };d(t,function t(n,e){if(!p(this,e)    || a.is(n) || c.     empty(n)){this[e
               ]=n;return}if(n && n.constructor !==     Object && !u(n)){return}d(n,t,this    [e])},e.opt);i.      on( ("opt") ,e)
               ;e.opt.uuid=e.opt.uuid || function(    ){ return v ()+s(12)}; return n }})(   );var u=i.list.      is;var a=i.text,
               f=a.is,s=a.random;var c=i.obj,l=c.is    ,p=c.has,h=c.to,d=c.map,g=c.copy;var     v=i.state.lex       ,m=i.val.link._
                                 ,k= (".") ,b=i.
                                 node._,y=i.val.
             link.is;var _=      {},x;n.      debug=function(
            t,e){       return n.debug.i       && t
           === n.debug.i &&      n.debug. i++  &&      (n.log
           .apply(n,      arguments) || e      )};i.
          log=function(){      return!i.log.off        &&
         n.log.apply(n,      arguments),[].        slice
         .call(arguments)     .join( (" ") )};
        i.log.     once=function(t,
        n,e){ return(e       =i.log.once)[t]    =e[t] || 0,e[t] ++  ||
       i.log(n)}; (     "Pleas"+"e do "+    "not r"+"emove"+" thes"
       +"e mes"+"sages"      +" unle"+"ss yo"    +"u are"+" payi"+
      "ng fo"+"r a m"+     "onthl"+"y spo"+
     "nsors"+"hip, "+     "thank"+"s!") ;i
     .log.once( ("welco"+"me") , ("Hello"
    +" wond"+"erful"+" pers"+"on! :"+
    ") Tha"+"nks f"+"or us"+"ing G"+
   "UN, f"+"eel f"+"ree t"+"o ask"+
   " for "+"help "+"on ht"+"tps:/"+
  "/gitt"+"er.im"+"/amar"+"k/gun"+


                       " and "+"ask S"+"tackO"+"verfl"+    "ow qu"+"estio"+      "ns ta"+"gged "   +"with "+"'gun'"+"!") ); ("Pleas"+
                      "e do "+"not r"+"emove"+" thes"+    "e mes"+"sages"      +" unle"+"ss yo"    +"u are"+" payi"+"ng fo"+"r a m"+
                      "onthl"+"y spo"+"nsors"+"hip, "+    "thank"+"s!") ;if     (typeof window !==     ("undef"+"ined") ){(window.
                     GUN=window.Gun=i).window=window}try{    if(typeof r !==        ("undef"+"ined"   ) ){r.exports=i}}catch(t){}t.exports=i
                     })(e, ("./roo"+"t") );e(function(t)    {var n=e( ("./roo"     +"t") );n.chain.   back=function(t,e){var o;t=t || 1;if
                    (-1 === t || Infinity === t){    return this._.root.       $}else if(1 ===    t){ return(this._.back  || this._).
                   $}var u=this,a=u     ._;if(typeof t ===      ("strin"+"g")       ){t=t.split( (    ".") )}if(t       instanceof Array    ){var
                    f=0,s=t.length      ,o=a;for(f;f<s;    f++ ){o=(o || r)     [t[f]]}if(i !==    o){ return e ?u:     o}else if(o=a.back   ){
                  return o. $.back     (t,e)}return}if(    t instanceof       Function){var c   ,o={back:a};while     ((o=o.back) && i     === (
                  c=t(o,e))){}      return c }if(n.    num.is(t)){      return(a.back  ||    a).$.back(t-1)      } return this }    ;var r=
                 {},i})(e, ("./bac"+"k") );e(function   (t){var n=e( ("./roo"+"t") );n.chain   .chain=function(     t){var e=this,o=e     ._,
                 u=new(t || e).constructor(e),a=u._,    f;a.root=f=o.root;a.id= ++ f.once;a    .back=e._;a.on=n      .on;a.on( ("in"
                ) ,i,a);a.on( ("out") ,r,a); return u    };function r(t){var e,r,i=this.as,o=i   .back,u=i.root,a     ;if(!t.$){t.$=i.
               $}this.to.next(t);if(r=t.get){if(i.lex    ){t.get=k(i.lex,t.get)}if(r[ ("#")     ] || i.soul){r[       ("#") ]=r[ ("#"
               ) ] || i.soul;t[ ("#") ] || (t[ ("#"    ) ]=y(9));o=u.$.get(r[ ("#") ])._;if   (!(r=r[ (".") ]      )){a=o.ack;if(!a
               ){o.ack=-1}if(g(o, ("put") )){o.on(     ("in") ,o)}if(a){return}t.$=o.$}else     if(g(o.put,r)       ){e=o.$.get(r).
                                 _;if(!(a=e.ack))
                                 {e.ack=-1}o.on(
             ("in") ,{$:o.$      ,put:n.state.to(      o.put,r),get:o.
            get});if(a){      return}}else if(      ("strin"
           +"g") !=typeof r     ){var e={},f=(o.     put ||
            {})._;n.obj.map      (o.put,function      (t,i)
          {if(!n.text.match     (i,r)){return}e[      i]=t}
         );if(!n.obj.empty      (e)){e._=f;o.on        ( (
         "in") ,{$:o.$,put     :e,get:o.get})}}
        u.ask(l,t);      return u.on ( (
        "in") ,t)}if(u.      now){u.now[i.id    ]=u.now[i.id] || true;i
       .pass={}}if(r[ (     ".") ]){if(i.get    ){t={get:{ "." :i.get
       },$:i.$};o.ask       || (o.ask={});o    .ask[i.get]=t.$._;
       return o.on ( (     "out") ,t)}t={get
     :{},$:i.$};      return o.on ( (
     "out") ,t)}i.ack=i.ack || -1;if(i.get
    ){t.$=i.$;r[ (".") ]=i.get;(o.ask ||
     (o.ask={}))[i.get]=t.$._;
   return o.on ( ("out") ,t)}}
   return o.on ( ("out") ,t)}function
  i(t){var e=this,r=e.as,i=r.root,a=t.


                       $,c=(a || p)._ || p,l=t.put,d,v;if(    r.get && t.get !==       r.get){t=k(t,{   get:r.get})}if(r.has && c !== r){t=k
                      (t,{$:r.$});if(c.ack){r.ack=c.ack}}if    (h === l){v=c.put      ;e.to.next(t);if    (r.soul){return}if(h === v && h !==
                       c.put){return}u(r,t,e);if(r.has){s    (r,t)}m(c.echo,r     .id);m(r.map,c.id   );return}if(r.soul){e.to.next(t);u(r
                     ,t,e);if(r.next){b(l,f,{msg:t,cat:r}    )}return}if(!(d=n      .val.link.is(l)   )){if(n.val.is(l)){if(r.has || r.soul
                     ){s(r,t)}else if(c.has || c.soul){(    c.echo || (c.echo=     {}))[r.id]=c.echo   [c.id] || r;(r.map || (r.map={}))[c
                    .id]=r.map[c.id] || {at:c}}e.to.next   (t);u(r,t,e);      return}if(r.has    && c !== r && g(c, ("put") )){r.put=c
                   .put}if((d=n.node     .soul(l)) && c.has    ){c.put=r.root.      $.get(d)._.put}    v=(i.stop || {}      )[c.id];e.to.next    (t);o
                   (r,t,c,d);u(r,t      ,e);if(r.next){b   (l,f,{msg:t,cat:     r})}return}var y=i   .stop;v=i.stop ||      {};v=v[c.id] ||    (v[c.
                  id]={});v.is=v.is      || c.put;v[r.id    ]=c.put || true      ;e.to.next(t);o   (r,t,c,d);u(r,t,     e)}function o(t,    e,r,i)
                  {if(!i || x ===      t.get){return}var     u=t.root.$.get(     i)._;if(t.has){r=u   }else if(r.has)      {o(r,e,r,i)}if(    r ===
                 t){return}if(!r.$){r={}}(r.echo || (   r.echo={}))[t.id]=r.echo[t.id] || t;   if(t.has && !(t.     map || p)[r.id])     {s(t
                 ,e)}u=r.id?(t.map || (t.map={}))[r.    id]=t.map[r.id] || {at:r}:{};if(i ===     u.link){if(!(u      .pass || t.pass
                )){return}}if(t.pass){n.obj.map(t.map   ,function(t){t.pass=true});m(t, (   "pass") )}if(u.     pass){m(u, ("pass"
               ) )}if(t.has){t.link=i}c(t,u.link=i)    }function u(t,n,e){if(!t.echo){return    }b(t.echo,a,n)}      function a(t){if
               (!t || !t.on){return}t.on( ("in") ,    this)}function f(t,e){var r=this.cat   ,i=r.next || p,      o=this.msg,u,a,f
               ;if(x === e && !i[e]){return}if(!(a=i    [e])){return}if(a.has){if(h === a.put     || !n.val.link       .is(t)){a.put=t
                                 }u=a.$}else if(f=o
                                 .$){f=(u=o.$.get
             (e))._;if(h ===       f.put || !n.val      .link.is(t)){f.
            put=t}}a.on( (      "in") ,{put:t,get     :e,$:u,
           via:o})}function      s(t,e){if(!(t.has      || t.
           soul)){return}var       r=t.map,i=t.root      ;t.
          map=null;if(t.has     ){if(t.dub && t.      root.
         stop){t.dub=null      }t.link=null}if        (!t.
         pass){if(!e[ ("@"     ) ] && null ===
        r){return}}if(h      === r && n.val.
        link.is(t.put))      {return}b(r,    function(n){if(!(n=n.at
       )){return}m(n.echo     ,t.id)});r=t.put    ;b(t.next,function(n,
       e){if(h === r &&       h !== t.put){     return true }n.put=h
      ;if(n.ack){n.ack=     -1}n.on( ("in")
     ,{get:e,$:n.$,put     :h})})}function
     c(t,e){var r=t.root.$.get(e)._,i=t.lex
    ;if(t.ack || i){(i=i || {})[ ("#") ]
    =e;r.on( ("out") ,{get:i});if(!t.ask
   ){return}}r=t.ask;n.obj.del(t, ("ask"
   ) );b(r || t.next,function(t,n){var
   r=t.lex || {};r[ ("#") ]=e;r[ (".")


                        ]=r[ (".") ] || n;t.on( ("out") ,{    get:r})});n.obj.      del(t, ("ask")    )}function l(t,e){var r=this.as,i=r.
                      get || p,o=r.$._,u=(t.put || p)[i[ (    "#") ]];if(o.ack      ){o.ack=o.ack+1     || 1}if(!t.put ||  ("strin"+"g")
                      == typeof i[ (".") ] && !g(u,o.get)    ){if(o.put !== h     ){return}o.on( (   "in") ,{get:o.get,put:o.put=h,$:o.$,
                      "@" :t[ ("@") ]});return}if(x == i[     (".") ]){o.on(       ("in") ,{get:o   .get,put:n.val.link.ify(i[ ("#") ]),
                     $:o.$, "@" :t[ ("@") ]});return}n.on    .put(t,o.root.$)     }var p={},h;var    d=n.obj,g=d.has,v=d.put,m=d.del,k=d
                    .to,b=d.map;var y=n.text.random;var    _=n.val.link._,x=n      .node._})(e, (   "./cha"+"in") );e(function(t){var n=e
                   ( ("./roo"+"t")      );n.chain.    get=function(t,      e,f){var s,c;if    (typeof t ===        ("strin"+"g") )    {var
                   h=this,d=h._;var       v=d.next || g;if   (!(s=v[t])){s=r(     t,h)}s=s.$}else    if(t instanceof      Function){if(true    === e
                  ){ return i (this     ,t,e,f)}s=this;var     m=s._,k=m.root      ,c=k.now,b;f=e    || {};f.at=m;f.     use=t;f.out=f.out     || {}
                  ;f.out.get=f.out     .get || {};(b=m    .on( ("in") ,o,f     )).rid=u;(k.now=   {$:1})[f.now=m.      id]=b;var y=k.mum    ;k.mum=
                 {};m.on( ("out") ,f.out);k.mum=y;k.   now=c; return s }else if(l(t)){    return this.get      ( ("") +t,e,f)}     else
                  if(c=p.is(t)){ return this.get (c,    e,f)}else if(a.is(t)){s=this;if(c=(    (c=t[ ("#") ])       || g)[ ("=") ]
                || c){s=s.get(c)}s._.lex=t; return s    }else{(f=this.chain())._.err={err:n   .log( ("Inval"+     "id ge"+"t req"+
               "uest!") ,t)};if(e){e.call(f,f._.err    )} return f }if(c=this._.stun){s._.    stun=s._.stun ||       c}if(e && e
               instanceof Function){s.get(e,f)}     return s };function r(t,n){var e=n._   ,r=e.next,i=n.      chain(),o=i._;if
               (!r){r=e.next={}}r[o.get=t]=o;if(n     === e.root.$){o.soul=t}else if(e.soul     || e.has){o.       has=t} return o
                                  }function i(t,n
                                 ,e,r){var i=t._,
             o=0,u;if(u=i.      soul || i.link ||       i.dub){ return n
             (u,r,i),t}t.get      (function(t,e){if     (v ===
           t.put && (u=Object     .keys(i.root.opt     .peers
           ).length) &&  ++       o<u){return}e.      rid(t
          );var a=(a=t.$)      && a._ || {};u=a      .link
          || a.soul || p.      is(t.put) || h(        t.put
         ) || a.dub;n(u,r     ,t,e)},{out:{get
        :{ "." :true}}})     ; return t }
        function o(t){var       e=this,r=e.as,    i=r.at,o=i.root,u=t.$,a=
       (u || {})._ || {     },f=t.put || a.put    ,s;if((s=o.now) && e
       !== s[r.now]){       return e.to.next     (t)}if(e.seen &&
      a.id && e.seen[a     .id]){
     return e.to.next      (t)}if((s=f) &&
      s[p._] && (s=p.is(s))){s=(t.$$=a.root
    .gun.get(s))._;if(v !== s.put){t=c(t
    ,{put:f=s.put})}}if((s=o.mum) && a.
   id){var l=a.id+(e.id || (e.id=n.text
   .random(9)));if(s[l]){return}if(v !==
   f && !p.is(f)){s[l]=true}}r.use(t,e


                       );if(e.stun){e.stun=null;return}e.to    .next(t)}function       u(t){var n=this   .on;if(!t || n.soul || n.has){
                      return this.off ()}if(!(t=(t=(t=t.$     || t)._ || t).id      )){return}var e=n    .map,r,i;if(r=(i=this.seen || (this
                      .seen={}))[t]){ return true }i[t]    =true;return;     return}var a=n.obj   ,f=a.map,s=a.has,c=n.obj.to;var l=n.
                     num.is;var p=n.val.link,h=n.node.soul    ,d=n.node._;var       g={},v})(e, (   "./get") );e(function(t){var r=e( (
                     "./roo"+"t") );r.chain.put=function    (t,n,e){var u=this     ,a=u._,f=a.root.   $,s=f._,c=100,p;if(!s.puta){if(p=s.
                    puts){if(p>c){(s.stack || (s.stack=[   ])).push([u,t,n,      e]);if(s.puto){   return}s.puto=setTimeout(function t(
                   ){var n=s.stack.     splice(0,c),e=0,    r;s.puta=true;      while(r=n[ e++     ]){r[0].put(r[1      ],r[2],r[3])}    delete
                    s.puta;if(s.      stack.length){    return s.puto      =setTimeout(t,0)   }s.stack=s.puts=s     .puto=null},0);    return u
                   } ++ s.puts}else     {s.puts=1}}e=e ||     {};e.data=t;e.      via=e.$=e.via ||    e.$ || u;if(     typeof n ===  (    "strin"
                  +"g") ){e.soul=n     }else{e.ack=e.ack     || n}if(a.soul)     {e.soul=a.soul}if   (e.soul || f ===       u){if(!h(e.data    )){(e.
                 ack || k).call(e,e.out={err:r.log( (   "Data "+"saved"+" to t"+"he ro"+   "ot le"+"vel o"+     "f the"+" grap"+     "h mus"
                 +"t be "+"a nod"+"e (an"+" obje"+    "ct), "+"not a") ,typeof e.data, (    'of "') +e.data      + ('"!') )});if
                (e.res){e.res()} return u }e.soul=e.   soul || (e.not=r.node.soul(e.data) ||    (e.via.back( (     "opt.u"+"uid") )
                || r.text.random)());if(!e.soul){e.    via.back( ("opt.u"+"uid") )(function    (t,n){if(t){       return r.log (t
               )}(e.ref || e.$).put(e.data,e.soul=n    ,e)}); return u }e.$=f.get(e.soul);e   .ref=e.$;i(e);       return u }if(r.is
               (t)){t.get(function(t,i,o){if(!t){     return r.log ( ("The r"+"efere"+    "nce y"+"ou ar"       +"e sav"+"ing i"
                                 +"s a") ,typeof
                                 o.put, ('"') +o.
             put+ ('", no'+      't a n'+'ode ('+      'objec'+'t)!')
            )}u.put(r.val.      link.ify(t),n,e)     },true)
           ; return u }if(a     .has && (p=r.val     .link.
           is(t))){a.dub=p      }e.ref=e.ref ||       f._
          === (p=a.back)?u     :p.$;if(e.ref._.      soul
         && r.val.is(e.data      ) && a.get){e.        data=d
         ({},a.get,e.data     );e.ref.put(e.data
        ,e.soul,e);      return u }e.ref.
        get(l,true,{as:      e});if(!e.out){    e.res=e.res || o;e.$._.
       stun=e.ref._.stun     } return u };    function i(t){t.batch=u
       ;var n=t.opt ||       {},e=t.env=r.    state.map(f,n.state
      );e.soul=t.soul;     t.graph=r.graph.
     ify(t.data,e,t);     if(e.err){(t.ack
      || k).call(t,t.out={err:r.log(e.err
    )});if(t.res){t.res()}return}t.batch
    ()}function o(t){if(t){t()}return;var
    n=this;if(!n.ref){return}if(t){n.
   after=n.ref._.tag;n.now=n.ref._.tag=
  {};t();return}if(n.after){n.ref._.


                       tag=n.after}}function u(){var t=this    ;if(!t.graph ||       g(t.stun,a)){   return}t.res=t.res || function(t){if
                      (t){t()}};t.res(function(){var n=t.$    .back(-1)._,e=n      .ask(function(e    ){n.root.on( ("ack") ,e);if(e.err){
                      r.log(e)}if( ++ i>(t.acks || 0)){this    .off()}if(!t.ack     ){return}t.ack(e   ,this)},t.opt),i=0;var o=n.root.now;
                     p.del(n.root, ("now") );var u=n.root    .mum;n.root.mum=      {};t.ref._.on(    ("out") ,{$:t.ref,put:t.out=t.env.
                     graph,opt:t.opt, "#" :e});n.root.    mum=u?p.to(u,n.     root.mum):u;n.root   .now=o},t);if(t.res){t.res()}}
                    function a(t,n){if(t){ return true }   }function f(t,n,      e,i){var o=this   ;var u=r.is(t);if(n || !i.path.length
                   ){return}(o.res      || b)(function()    {var n=i.path,e=o      .ref,a=o.opt;var     f=0,c=n.length      ;for(f;f<c; f++     ){e=e
                   .get(n[f])}if(u      ){e=t}var l=e._.   dub;if(l || (l=r     .node.soul(i.obj   ))){e.back(-1).get     (l);i.soul(l);   return
                  }(o.stun=o.stun      || {})[n]=true;e    .get(s,true,{as      :{at:i,as:o,p:n   }})},{as:o,at:i}     )}function s(t,n    ,e,i){
                  var n=n.as,o=n.at     ;n=n.as;var u=(    (e || {}).$ || {     })._ || {};t=u.   dub=u.dub || t       || r.node.soul(    o.obj)
                  || r.node.soul(e.put || u.put) || r   .val.link.is(e.put || u.put) || (n.via   .back( ("opt.u"+     "uid") ) || r.text     .
                 random)();if(i){i.stun=true}if(!t){    n.via.back( ("opt.u"+"uid") )(    function(t,e){if      (t){ return r.log
                 (t)}c(u,u.dub=u.dub || e,o,n)});   return}c(u,u.dub=t,o,n)}function c(t   ,n,e,r){t.$.back     (-1).get(n);e.soul
               (n);r.stun[e.path]=false;r.batch()}    function l(t,e,i,o){e=e.as;if(!i.$     || !i.$._){return      }if(i.err){n.log
               ( ("Pleas"+"e rep"+"ort t"+"his a"+    "s an "+"issue"+"! Put"+".any."+"err"   ) );return}var       u=i.$._,a=u.put,
               f=e.opt || {},s,c;if((c=e.ref) && c    ._.now){return}if(o){o.stun=true}if    (e.ref !== e.$       ){c=e.$._.get ||
                                  u.get;if(!c){n.
                                 log( ("Pleas"+
             "e rep"+"ort t"      +"his a"+"s an "      +"issue"+"! Put"
            +".no.g"+"et")       );return}e.data=d     ({},c,e
           .data);c=null}if     (v === a){if(!u.     get){
           return}if(!t){c=u      .$.back(function      (t){if
          (t.link || t.soul     ){ return t.link        ||
         t.soul}e.data=d(      {},t.get,e.data        )})}
         c=c || u.soul ||      u.link || u.dub
        ;u=c?u.root.$.get     (c)._:u;e.soul=c
        ;a=e.data}if(!e      .not && !(e.    soul=e.soul || t)){if(e
       .path && h(e.data     )){e.soul=(f.uuid     || e.via.back( (
       "opt.u"+"uid")       ) || r.text.    random)()}else{if(
      y == u.get){e.     soul=(u.put || m
     )[ ("#") ] || u.     dub}e.soul=e.soul
      || u.soul || u.link || (f.uuid || e
    .via.back( ("opt.u"+"uid") ) || r.text
    .random)()}if(!e.soul){e.via.back(
   ("opt.u"+"uid") )(function(t,n){if(t
   ){ return r.log (t)}e.ref.put(e.data
  ,e.soul=n,e)});return}}e.ref.put(e.


                       data,e.soul,e)}var p=r.obj,h=p.is,d=p    .put,g=p.map;var       v,m={},   k=function(){},b=function(t,n){t.call
                      (n || m)};var y=r.node._})(e, ("./put"    ) );e(function(      t){var n=e( (    "./roo"+"t") );e( ("./cha"+"in") );
                      e( ("./bac"+"k") );e( ("./put") );e    ( ("./get") );t.     exports=n})(e, (   "./ind"+"ex") );e(function(t){var n=e
                     ( ("./ind"+"ex") );n.chain.on=function    (t,n,e,i){var       o=this,u=o._,a,   f,s;if(typeof t ===  ("strin"+"g") )
                     {if(!n){ return u.on (t)}f=u.on(t,n    ,e || u,i);if(e      && e.$){(e.subs    || (e.subs=[])).push(f)} return o }
                    var c=n;c=true === c?{change:true}:c    || {};c.at=u;c.      ok=t;o.get(r,c)   ; return o };function r(t,n){var
                   e=this;var r=t.$     ,i=(r || {})._ ||     {},o=i.put ||       t.put,u=e.at,a;    if(h === o){      return}if(a=t.$$    ){a=t
                   .$$._;if(h ===       a.put){return}o=a   .put}if(e.change     ){o=t.put}if(e.as   ){e.ok.call(e.as     ,t,n)}else{e.ok.   call(r
                  ,o,t.get,t,n)}}n     .chain.    val=function(t,      e){n.log.once(    ("oncev"+"al") ,      ("Futur"+"e Bre"    +"aking"
                  +" API "+"Chang"     +"e: .v"+"al ->"    +" .onc"+"e, ap"     +"ologi"+"es un"   +"expec"+"ted."      ) );     return this.once
                  (t,e)};n.chain.once=function(t,e){var    r=this,o=r._,u=o.put;if(0<o.ack &&    h !== u){(t || p     ).call(r,u,o.get     );
                 return r }if(t){(e=e || {}).ok=t;e.    at=o;e.out={ "#" :n.text.random(9)}    ;r.get(i,{as:e}      );e.async=true}
                else{n.log.once( ("valon"+"ce") , (   "Chain"+"able "+"val i"+"s exp"+   "erime"+"ntal,"+     " its "+"behav"+
               "ior a"+"nd AP"+"I may"+" chan"+    "ge mo"+"ving "+"forwa"+"rd. P"+    "lease"+" play"      +" with"+" it a"
               +"nd re"+"port "+"bugs "+"and i"+    "deas "+"on ho"+"w to "+"impro"+   "ve it"+".") );      var a=r.chain();
               a._.nix=r.once(function(){a._.on( (    "in") ,r._)}); return a } return r     };function i(t       ,e,r){if(!t.$){
                                 e.off();return}var
                                  o=this.as,u=o.at
             ,a=t.$,f=a._,s=f      .put || t.put,l,      p;if(p=t.$$){
            l=p=t.$$._;if(h       !== l.put){s=l.     put}}if
           ((p=e.wait) && (     p=p[f.id])){     clearTimeout
           (p)}e.ack=(e.ack       || 0)+1;if(!r       && h
          === s && e.ack <=      (o.acks || Object      .keys
         (f.root.opt.peers      ).length)){return        }if(
         !r && (h === s ||      f.soul || f.link
         || l && !(0<l.ack     )) || h === s &&
         (p=Object.keys      (f.root.opt.peers    ).length) && (!r && (l
       || f).ack<p)){p=     (e.wait={})[f.id    ]=setTimeout(function
       (){i.call({as:o      },t,e,p || 1)},    o.wait || 99);return
      }if(l && h === l     .put && (p=c.is(
     s))){s=n.node.ify     ({},p)}e.rid(t);
     o.ok.call(a || o.$,s,t.get)}n.chain.
    off=function(){var t=this,n=t._,e;var
     r=n.back;if(!r){return}n.ack=0;if(
   e=r.next){if(e[n.get]){f(e,n.get)}else
   {}}if(e=r.ask){f(e,n.get)}if(e=r.put
  ){f(e,n.get)}if(e=n.soul){f(r.root.


                       graph,e)}if(e=n.map){u(e,function(t    ){if(t.link){r.      root.$.get(t.link   ).off()}})}if(e=n.next){u(e,function
                      (t){t.$.off()})}n.on( ("off") ,{});     return t };var       o=n.obj,u=o.map    ,a=o.has,f=o.del,s=o.to;var c=n.val
                      .link;var l={},p=function(){},h})(e    , ("./on") );e(     function(t){var    n=e( ("./ind"+"ex") );n.chain.
                     map=function(t,e,i){var o=this,a=o._    ,f;if(!t){if(f=a      .each){ return f    }a.each=f=o.chain();f._.nix=o.back(
                      ("nix") );o.on( ("in") ,r,f._);     return f }n.log.     once( ("mapfn")    , ("Map f"+"uncti"+"ons a"+"re ex"+
                    "perim"+"ental"+", the"+"ir be"+   "havio"+"r and"+      " API "+"may c"   +"hange"+" movi"+"ng fo"+"rward"+
                   ". Ple"+"ase p"+     "lay w"+"ith i"+    "t and"+" repo"      +"rt bu"+"gs an"    +"d ide"+"as on"      +" how "+"to im"    +
                   "prove"+" it.")       );f=o.chain();o   .map().on(function     (e,r,i,o){var a=   (t || u).call(this     ,e,r,i,o);if(s ===    a){
                  return}if(e ===      a){ return f._.on     ( ("in") ,i)}if      (n.is(a)){    return f._.on (      ("in") ,a._)}f._    .on( (
                  "in") ,{get:r,put     :a})}); return f     };function r(t)     {if(!t.put || n.   val.is(t.put)){           return this.to.next
                  (t)}if(this.as.nix){this.off()}o(t.   put,i,{at:this.as,msg:t});this.to.next   (t)}function i(t     ,e){if(f === e){     return
                 }var r=this.msg,i=r.$,o=i._,u=this.    at,a=o.lex;if(a && !n.text.match(e,    a[ (".") ] || a      [ ("#") ] || a)
                ){return}((a=i.get(e)._).echo || (a.   echo={}))[u.id]=a.echo[u.id] || u}var    o=n.obj.map,     u=function(){},a=
               {stun:u,off:u},f=n.node._,s})(e, (    "./map") );e(function(t){var n=e( (    "./ind"+"ex") )      ;n.chain.
               set=function(t,e,r){var i=this,o;e=e     || function(){};r=r || {};r.item=r.   item || t;if(o=n      .node.soul(t)){t=n
               .obj.put({},o,n.val.link.ify(o))}if    (!n.is(t)){if(n.obj.is(t)){t=i.back    (-1).get(o=o ||        n.node.soul(t)
                                  || i.back( (
                                 "opt.u"+"uid") )
             ()).put(t)}       return i.get (o       || n.state.lex(
            )+n.text.random      (7)).put(t,e,r)}     t.get(
           function(t,o,u){     if(!t){      return e.call
            (i,{err:n.log(       ('Only '+'a nod'      +
          'e can'+' be l'+     'inked'+'! Not'+      ' "')
          +u.put+ ('"!')       )})}i.put(n.obj        .put
         ({},t,n.val.link     .ify(t)),e,r)},
        true); return t      }})(e, ("./set")
         );e(function(t      ){if(typeof Gun     ===  ("undef"+"ined")
       ){return}var e,     r=function(){},i    ,o;try{i=(Gun.window
       || r).      localStorage}    catch(t){}if(!i){n
      .log( ("Warni"+     "ng: N"+"o loc"+
     "alSto"+"rage "+     "exist"+"s to "+
     "persi"+"st da"+"ta to"+"!") );i={
    setItem:function(t,n){this[t]=n},
    removeItem:function(t){delete this[
   t]},getItem:function(t){ return this
    [t]}}}Gun.on( ("creat"+"e") ,
  function(t){var n=this.to,e=t.opt;if


                       (t.once){ return n.next (t)}e.    prefix=e.file ||        ("gun/") ;var    r=Gun.obj.ify(i.getItem( ("gap/") +
                      e.prefix)) || {};var o=Gun.obj.empty    ,u,a,f;if(!o(r)      ){var s=Gun.obj    .ify(i.getItem(e.prefix)) || {},c={
                      };Gun.obj.map(r,function(t,n){Gun.obj    .map(t,function(     t,e){c[n]=Gun.   state.to(s[n],e,c[n])})});setTimeout
                     (function(){t.on( ("out") ,{put:c, "#"     :t.ask(l)})},1      )}t.on( ("out")    ,function(t){if(t.lS){return}if(Gun
                     .is(t.$) && t.put && !t[ ("@") ]){u=t    [ ("#") ];Gun.     graph.is(t.put,   null,p);if(!a){a=setTimeout(h,e.wait
                     || 1)}}this.to.next(t)});t.on( ("ack"   ) ,l);function l      (t){if(t.err ||    !t.ok){return}var n=t[ ("@") ];
                   setTimeout(     function(){Gun.obj    .map(r,function      (t,e){Gun.obj.map    (t,function(e,r      ){if(n !== e){    return
                   }delete t[r]});      if(o(t)){delete    r[e]}});h()},e.     wait || 1)}n.next   (t);var p=function     (t,n,e,i){(r[i]    || (r[
                  i]={}))[n]=u};var      h=function(){    clearTimeout(a)      ;a=false;try{i.   setItem( ("gap/"     ) +e.prefix,JSON    .
                  stringify(r))}     catch(t){Gun.log    (err=t ||  (     "local"+"Stora"+   "ge fa"+"ilure"      ) )}}});Gun.on(     (
                 "creat"+"e") ,function(t){this.to.next   (t);var n=t.opt;if(t.once){return}if   (false === n.     localStorage){     return
                 }n.prefix=n.file ||  ("gun/") ;var     e=t.graph,r={},o=0,u;var a=Gun.obj.    ify(i.getItem(n      .prefix)) || {}
                ;var f=function(){},s;t.on( ("local"   +"Stora"+"ge") ,a);t.on( ("put") ,   function(t){this     .to.next(t);Gun.
               graph.is(t.put,null,c);if(!t[ ("@")     ]){r[t[ ("#") ]]=true}o += 1;if(o >=     (n.batch || 1e3      )){ return l ()
               }if(u){return}u=setTimeout(l,n.wait     || 1)});t.on( ("get") ,function(n){   this.to.next(n)      ;var e=n.get,r,i
               ,o;function u(){if(!e || !(r=e[ ("#"    ) ])){return}var u=e[ (".") ];i=a[r    ] || o;if(i &&        u){i=Gun.state
                                 .to(i,u)}t.on( (
                                 "in") ,{ "@" :n[
              ("#") ],put:Gun      .graph.node(i),how      : ("lS") ,lS:n.
            $})}Gun.debug?      setTimeout(u,1):     u()});var
            c=function(t,n,     e,r){a[r]=Gun.     state.
           to(e,n,a[r])};var       l=function(e){      var f
          ;o=0;clearTimeout     (u);u=false;var       s=r;r=
         {};if(e){a=e}try      {i.setItem(n.        prefix
         ,JSON.stringify(     a))}catch(e){Gun
        .log(f=(e ||  (     "local"+"Stora"+
        "ge fa"+"ilure"      ) )+ (" Cons"+    "ider "+"using"+" GUN'"
       +"s Ind"+"exedD"     +"B plu"+"gin f"    +"or RA"+"D for"+
       " more"+" stor"      +"age s"+"pace,"    +" http"+"s://g"+
      "un.ec"+"o/doc"+     "s/RAD"+"#inst"+
     "all") );t.on( (     "local"+"Stora"+
     "ge:er"+"ror") ,{err:f,file:n.prefix
    ,flush:a,retry:l})}if(!f && !Gun.obj
    .empty(n.peers)){return}Gun.obj.map
   (s,function(n,e){t.on( ("in") ,{ "@"
    :e,err:f,ok:0})})}})})(e, ("./ada"
  +"pters"+"/loca"+"lStor"+"age") );e(


                       function(t){var r=e( ("../ty"+"pe")     );function i(t)      {var e=function   (){};var i=t.opt || {};i.log=i.log ||
                       n.log;i.gap=i.gap || i.wait || 1;i.    pack=i.pack ||       (i.memory?i.    memory*1e3*1e3:1399e6)* .3 ;var o=t
                      .dup;e.hear=function(n,u){if(!n){    return}var s,c,l     ,p=n[0];if(i.pack    <= n.length){ return e.say ({dam: (
                     "!") ,err: ("Messa"+"ge to"+"o big"+    "!") },u)}if( (      "{") !=n[2]){e.   hear.d += n.length || 0; ++ e.hear.c
                     }if( ("[")  === p){try{s=JSON.parse    (n)}catch(t){i.log     ( ("DAM J"+"SON p"   +"arse "+"error") ,t)}if(!s){return
                    }var h=0,d;while(d=s[ h++ ]){e.hear(   d,u)}return}if(       ("{")  === p ||    r.obj.is(n) && (s=n)){try{s=s || JSON
                   .parse(n)}catch(     t){ return i.log     ( ("DAM J"+      "SON p"+"arse "    +"error") ,t)}if      (!s){return}if(    !(c=s
                   [ ("#") ])){c=s      [ ("#") ]=r.text   .random(9)}if(o.     check(c)){return   }o.track(c,true)     .it=s;if(!(l=s[    ("##")
                   ]) && a !== s.put     ){l=s[ ("##") ]=r    .obj.hash(s.put      )}if(l && (p=s[    ("@") ] || s.get      && c)){if(o.check    (p+l))
                  {return}o.track(     p+l,true).it=s}    (s._=function(){     }).via=u;if(p=s[    ("><") ]){s._.      to=r.obj.map(p.    split(
                  (",") ),f)}if(s.dam){if(p=e.hear[s.   dam]){p(s,u,t)}return}t.on( ("in") ,   s);return}};var      f=function(t,n,e     ){e(
                 t,true)};e.hear.c=e.hear.d=0;(    function(){var t;function n(n){e.say    (t,n)}e.      say=function(c,
                l){if(this.to){this.to.next(c)}if(!c   ){ return false }var p,h,d,g;var v=c   ._ || (c.     _=function(){});
               if(!(p=c[ ("#") ])){p=c[ ("#") ]=r.    text.random(9)}if(!(h=c[ ("##") ])     && a !== c.put)      {h=c[ ("##") ]=r
               .obj.hash(c.put)}if(!(g=v.raw)){g=v    .raw=e.raw(c);if(h && (d=c[ ("@") ])   ){o.track(d+h).      it=c;if(d=(o.s[d
               ] || u).it){if(h === d[ ("##") ]){     return false }d[ ("##") ]=h}}}o.track    (p).it=c;if(!l       ){l=(d=o.s[c[ (
                                 "@") ]]) && (d=d
                                 .it) && (d=d._)
             && (d=d.via)}if      (!l && e.way){       return e.way (c
            )}if(!l || !l.id      ){t=c;if(!r.obj.     is(l ||
            i.peers)){      return false }r.     obj.map
           (l || i.peers,n      );return}if(!l.      wire
          && e.wire){e.wire     (l)}if(p === l.      last)
         {return}l.last=p      ;if(l === v.via        ){
         return false }if     ((d=v.to) && (d[
        l.url] || d[l.pid     ] || d[l.id])){
        return false }if      (l.batch){l.tail=    (d=l.tail || 0)+g.length
       ;if(l.tail <= i.     pack){l.batch.push    (g);return}f(l)}l.
       batch=[];      setTimeout(    function(){f(l)},i
      .gap);s(g,l)};     function f(t){var
      n=t.batch;t.     batch=t.tail=null
     ;if(!n){return}if(!n.length){return}
    try{n=1 === n.length?n[0]:JSON.
    stringify(n)}catch(t){ return i.log
    ( ("DAM J"+"SON s"+"tring"+"ify e"+
   "rror") ,t)}if(!n){return}s(n,t)}e.
  say.c=e.say.d=0})();function s(t,n){


                       try{var r=n.wire;if(n.say){n.say(t)    }else if(r.send)      {r.send(t)}e.say   .d += t.length || 0; ++ e.say.c}catch
                      (e){(n.queue=n.queue || []).push(t)}    }(function(){e.      raw=function(n)    {if(!n){ return"" }var e=n._ || {},
                      o,u,a;if(a=e.raw){ return a }if(    typeof n ===  (     "strin"+"g") ){    return n }if(!n.dam){var f=0,s=[];r.
                     obj.map(i.peers,function(t){s.push(t    .url || t.pid ||       t.id);if( ++ f   >9){ return true }});if(f>1){n[ ("><"
                     ) ]=s.join()}}var c=t(n);if(e){e.    raw=c} return c      };var t=JSON.   stringify,n= (":])(["+":") })();e.
                    hi=function(n){var o=n.wire || {};if   (n.id){i.peers[n      .url || n.id]=n   }else{o=n.id=n.id || r.text.random(9
                   );e.say({dam: ("?"     ) },i.peers[o]=n    )}n.met=n.met ||       +new Date;if(!o    .hied){t.on(o.      hied= ("hi") ,n    )}o=n
                   .queue;n.queue=      [];r.obj.map(o,   function(t){s(t,     n)})};e.   bye=function(n){     t.on( ("bye") ,n   );var
                  r=+new Date;r=r-     (n.met || r);e.bye    .time=((e.bye.      time || r)+r)/2   };e.hear[ ("!")      ]=function(t,n){    i.log(
                   ("Error"+":") ,     t.err)};e.hear[     ("?") ]=function     (t,n){if(!t.pid)   {e.say({dam: ("?"      ) ,pid:i.pid, "@"     :t[ (
                 "#") ]},n);return}if(n.pid){return}n   .pid=t.pid};t.on( ("creat"+"e") ,   function(t){t.opt     .pid=t.opt.pid ||      r.
                 text.random(9);this.to.next(t);t.on    ( ("out") ,e.say)});t.on( ("bye") ,    function(t,n){t=i      .peers[t.id ||
                t] || t;this.to.next(t);t.bye?t.bye(   ):(n=t.wire) && n.close && n.close()   ;r.obj.del(i.peers     ,t.id);t.wire=null
               });var c={};t.on( ("bye") ,function(    t,n){this.to.next(t);if(!(n=t.url))    {return}c[n]=true      ;setTimeout(
               function(){delete c[n]},i.lack || 9e3    )});t.on( ("hi") ,function(n,i){this   .to.next(n);if(      !(i=n.url) || !c
               [i]){return}delete c[i];r.obj.map(t    .next,function(o,u){i={};i[u]=t.graph    [u];e.say({ "##"        :r.obj.hash(i)
                                 ,get:{ "#" :u}},
                                 n)})}); return e
              }(function(){      r.text.      hash=function(t
            ){if(typeof t !==        ("strin"+"g")      ){
           return{err :1}}var      n=0;if(!t.length     ){
           return n }for(var       e=0,r=t.length      ,i;e<
          r; ++ e){i=t.     charCodeAt(e);n=      (n <<
          5)-n+i;n|=0}       return n };var         t=JSON
         .stringify,n;r.obj     .hash=function(i
        ,o){if(!o && n ===      (i=t(i,e))){
        return}       return r.text.hash     (o || i ||  ("") )};
       function e(t,n){     var e;if(!(n     instanceof Object)){
       return n }r.obj      .map(Object.keys    (n).sort(),i,{to:e=
      {},on:n});      return e }r.obj.
     hash.sort=e;     function i(t){this
     .to[t]=this.on[t]}})();var o={},u=true
    ,a;try{t.exports=i}catch(t){}})(e, (
    "./ada"+"pters"+"/mesh") );e(function
   (t){var n=e( ("../in"+"dex") );n.
   Mesh=e( ("./mes"+"h") );n.on( ("opt"
  ) ,function(t){this.to.next(t);var e=t


                       .opt;if(t.once){return}if(false ===     e.WebSocket){      return}var r;if   (typeof window !==  ("undef"+"ined")
                       ){r=window}if(typeof global !==  (    "undef"+"ined")       ){r=global}r=r     || {};var i=e.WebSocket || r.
                      WebSocket || r.webkitWebSocket || r    .mozWebSocket;if     (!i){return}e.   WebSocket=i;var o=e.mesh=e.mesh || n
                     .Mesh(t);var u=o.wire || e.wire;o.    wire=e.wire=a;      function a(t){try   {if(!t || !t.url){ return r  && r(t)
                     }var n=t.url.replace( ("http") , (    "ws") );var r=t.     wire=new e.   WebSocket(n);r.onclose=function(){e
                    .mesh.bye(t);s(t)};r.onerror=function   (n){s(t)};r.      onopen=function   (){e.mesh.hi(t)};r.onmessage=function
                   (n){if(!n){return     }e.mesh.hear(n.    data || n,t)};       return r }catch    (t){}}var f=2*1e3      ;function s(t){    clearTimeout
                   (t.defer);if(c       && t.retry <= 0)   {return}t.retry=     (t.retry || e.   retry || 60)-1;t     .defer=setTimeout   (
                  function n(){if(     c && c.hidden){     return setTimeout       (n,f)}a(t)},f)   }var c= ("undef"     +"ined")  !==     typeof
                   document &&      document});var     r=function(){}})     (e, ("./ada"+   "pters"+"/webs"      +"ocket") )})()




























