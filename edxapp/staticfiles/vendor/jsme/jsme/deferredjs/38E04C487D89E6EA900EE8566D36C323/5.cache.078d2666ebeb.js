function MQ(a){var b=$doc.createElement(sd);ZJ(dg,b.tagName);this.ob=b;this.b=new IK(this.ob);this.ob[Wc]="gwt-HTML";HK(this.b,a,!0);QK(this)}q(349,350,{15:1,17:1,19:1,20:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,32:1,33:1,34:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,46:1,47:1,49:1,51:1,55:1,60:1,70:1,71:1,72:1,75:1,79:1,82:1,83:1,85:1},MQ);function NQ(){nx();var a=$doc.createElement("textarea");!ct&&(ct=new bt);!at&&(at=new $s);this.ob=a;this.ob[Wc]="gwt-TextArea"}q(389,390,$h,NQ);
function OQ(a,b){var c,d;c=$doc.createElement(Ag);d=$doc.createElement(ng);d[xc]=a.a.a;d.style[Jg]=a.b.a;var e=(et(),ft(d));c.appendChild(e);dt(a.d,c);Ru(a,b,d)}function PQ(){Uv.call(this);this.a=(Xv(),dw);this.b=(ew(),hw);this.e[Sc]=$a;this.e[Rc]=$a}q(398,343,ji,PQ);_.Ld=function(a){var b;b=Xm(a.ob);(a=Vu(this,a))&&this.d.removeChild(Xm(b));return a};
function QQ(a){try{a.v=!1;var b,c,d,e,f;d=a.gb;c=a._;d||(a.ob.style[Kg]=ie,a._=!1,a.Yd());b=a.ob;b.style[te]=0+(To(),yf);b.style[vg]=ab;e=gn()-G(a.ob,mf)>>1;f=fn()-G(a.ob,lf)>>1;rM(a,Ui(hn($doc)+e,0),Ui(jn($doc)+f,0));d||((a._=c)?(bx(a.ob,Lf),a.ob.style[Kg]=Lg,qi(a.fb,200)):a.ob.style[Kg]=Lg)}finally{a.v=!0}}function RQ(a){a.f=(new DL(a.i)).mc.Ne();Bu(a.f,new SQ(a),(Fp(),Fp(),Gp));a.d=E(TQ,m,62,[a.f])}
function UQ(){MM();var a,b,c,d,e,f;iN.call(this,(AN(),BN),null,!0);this.Hg();this.cb=!0;a=new MQ(this.j);this.e=new NQ;this.e.ob.style[Ng]=eb;nu(this.e,eb);this.Fg();DM(this,"400px");f=new PQ;f.ob.style[he]=eb;f.e[Sc]=10;c=(Xv(),Yv);f.a=c;OQ(f,a);OQ(f,this.e);e=new lw;e.e[Sc]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],iw(e,a);OQ(f,e);RM(this,f);ML(this,!1);this.Gg()}q(651,652,cI,UQ);_.Fg=function(){RQ(this)};_.Gg=function(){var a=this.e;a.ob.readOnly=!0;var b=ru(a.ob)+"-readonly";mu(a.yd(),b,!0)};
_.Hg=function(){LL(this.H.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i="Close";_.j="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function SQ(a){this.a=a}q(654,1,{},SQ);_.Yc=function(){TM(this.a,!1)};_.a=null;function VQ(a){this.a=a}q(655,1,{},VQ);
_.Cc=function(){wu(this.a.e.ob,!0);this.a.e.ob.focus();var a=this.a.e,b;b=Tm(a.ob,Ig).length;if(0<b&&a.jb){if(0>b)throw new XE("Length must be a positive integer. Length: "+b);if(b>Tm(a.ob,Ig).length)throw new XE("From Index: 0  To Index: "+b+"  Text Length: "+Tm(a.ob,Ig).length);try{a.ob.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function WQ(a){a.i="Cancel";a.j="Paste the text to import into the text area below.";a.b="Accept";LL(a.H.b,"Paste")}function XQ(a){MM();UQ.call(this);this.c=a}
q(657,651,cI,XQ);_.Fg=function(){RQ(this);this.a=(new DL(this.b)).mc.Ne();Bu(this.a,new YQ(this),(Fp(),Fp(),Gp));this.d=E(TQ,m,62,[this.a,this.f])};_.Gg=function(){nu(this.e,"150px")};_.Hg=function(){WQ(this)};_.Yd=function(){hN(this);Dm((Am(),Bm),new ZQ(this))};_.a=null;_.b=null;_.c=null;function $Q(a){MM();XQ.call(this,a)}q(656,657,cI,$Q);_.Gg=function(){nu(this.e,"150px");QA(new aR(this),this.e)};_.Hg=function(){WQ(this);this.j+=" Or drag and drop a file on it."};
function aR(a){this.a=a;this.b=new bR(this);this.c=this.d=1}q(658,498,{},aR);_.a=null;function bR(a){this.a=a}q(659,1,{},bR);_.Ye=function(a){this.a.a.e.ob[Ig]=null!=a?a:l};_.a=null;function YQ(a){this.a=a}q(661,1,{},YQ);_.Yc=function(){if(this.a.c){var a=this.a.c,b;b=new fA(a.a,0,Tm(this.a.e.ob,Ig));XA(a.a.a,b.a)}TM(this.a,!1)};_.a=null;function ZQ(a){this.a=a}q(662,1,{},ZQ);_.Cc=function(){wu(this.a.e.ob,!0);this.a.e.ob.focus()};_.a=null;q(663,1,Fh);
_.Pc=function(){var a,b;a=new cR(this.a);void 0!=$wnd.FileReader?b=new $Q(a):b=new XQ(a);FM(b);QQ(b)};function cR(a){this.a=a}q(664,1,{},cR);_.a=null;q(665,1,Fh);_.Pc=function(){var a;a=new UQ;var b=this.a,c;mx(a.e,b);b=(c=aF(b,"\r\n|\r|\n|\n\r"),c.length);nu(a.e,20*(10>b?b:10)+yf);Dm((Am(),Bm),new VQ(a));FM(a);QQ(a)};X(651);var TQ=LE(813,KP);X(657);X(656);X(664);X(654);X(655);X(661);X(662);X(658);X(659);X(349);X(398);X(389);x(aI)(5);