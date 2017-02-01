
//scrol//


 $(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });

$(document).ready(function() {
    $(".smoothScroll").click(function(event){
        $('html, body').animate({scrollTop: '+=675px'}, 800);
    });
});




/** Document Ready Functions **/
/********************************************************************/



/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

  var height = $(window).height();
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

  $(element).each(function() {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

  var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;

  console.log(windowHeight);

  $(element).each(function() {
    var videoAspectRatio = $(this).data('height') / $(this).data('width'),
      windowAspectRatio = windowHeight / windowWidth;

    if (videoAspectRatio > windowAspectRatio) {
      videoWidth = windowWidth;
      videoHeight = videoWidth * videoAspectRatio;
      $(this).css({
        'top': -(videoHeight - windowHeight) / 2 + 'px',
        'margin-left': 0
      });
    } else {
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      $(this).css({
        'margin-top': 0,
        'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
      });
    }

    $(this).width(videoWidth).height(videoHeight);

    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


  });
}




//slider//
jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 22000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

//
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});
//captura de imagenes

  //home//

  $(document).scroll(function () {
      var scroll = $(this).scrollTop();

      if (scroll >= 600) {

          $(".navbar-brand-none").addClass("navbar-brand"); 
          // $(".nav.navbar-nav>li>a").css("color", "#fff");
          $(".menu-home").addClass("menu-color");
          $(".space").addClass("pd_80");    
        } else {
          $(".navbar-brand-none").removeClass("navbar-brand");
          $(".menu-home").removeClass("menu-color");  
          $(".space").removeClass("pd_80");           
        }

  });


////botones traductor
function cambia_shipibo(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = '<p>Dina Pangosa Vásquez kikinakin parancana amiga shipiba Gloria, rabé ainbo nahua(shipibama) bokanaiki paro pachiteani jain nocoananti. enfermerobaon ja Puesto de Salud Santa Rosa (distrito Masisea, provincia coronel portillo, región Pucallpa).westiora boten nanecanaiki bocanaiki Centro de Salud de Masisea jain huimeti kawé westiora chequeo médico. Dina,jawen amiga shipiba Gloria, rabé señora nahua(shipibama)bocanaiki paro Pachiteani jain nokoanani.</p><p>Tsecacanaiki ja  lista de Masisea jainxon peokanai kenai westiora westiorabo jaton janen sanlanco winoti.</p><p>"Ea yoicanaiki racawe kamillain, eara rakataiki en shinanaiki chequeoiti. Eara chachicanaiki jawe yoixonmabi, en onanyamaiki ea akí ikanai,jainoax peocotai raweskenani”</p><p>Jatian Dina jishtenaiki anastesianin aká pekao,jainoax icáiki moa esterilizancana. Niti atipanyama,chexa kikin akin jawen yora, onanyamaiki jawe copi ea xatecanaixon Westiora enfermeronin yoiyay jakonshocoakin miara ligado akanke akin jawetianbi baqueatimakin, jainxon yoiyaiki kikini cuiramewe xaté mia benxoai kaman.</p><p>"Enbix camaiki centro de Salud ain ea bokanaiki jabaon jaboriki culpable….enra jawe onanyamake jawekescákin atirin ixon eara kenai justicia”</p>'; 
}
function cambia_español(){
   var elemento = document.getElementById("capa"); 
   elemento.innerHTML = '<br><p class="txt-his"> Dina Pangosa Vásquez fue <a target="_blank" href="http://larepublica.pe/06-11-2013/mas-de-200-mujeres-contaron-a-fiscal-como-fujimorismo-las-engano-para-esterilizarlas">engañada por los enfermeros </a>del puesto de salud Santa Rosa (distrito Masisea, provincia Coronel Portillo, Ucayali). La subieron a un bote para llevarla al <b>Centro de Salud de Masisea </b>con la promesa de brindarle un chequeo médico.</p><p class="txt-his"> Junto con su amiga shipiba Gloria, y dos señoras más, <b>navegaron a través del río Pashitea con dirección al encuentro con sus verdugos.</b></p><p class="txt-his"> En el centro de salud los enfermeros sacaron una lista, y <b>las empezaron a llamar una a una por su nombre para que pasen a una sala.</b></p><p class="txt-his"> “Me dijeron que me eche en la camilla, yo me eché porque pensé que era para la consulta. <b>Me pusieron una inyección (anestesia) sin decirme nada...</b>nadie me explicó lo que me iban a hacer, empecé a sentirme adormecida”, relata Dina Pangosa. </p><p class="txt-his"> Cuando despertó, ya estaba <a target="_blank" href="http://larepublica.pe/impresa/politica/709900-alejandro-aguinaga-admite-esterilizaciones-forzadas-pero-solo-en-34-casos">esterilizada </a>No podía caminar, le dolía mucho el cuerpo, <b>no sabía por qué tenía un corte. </b>Un enfermero, de manera muy tranquila,le dijo que la habían ligado para no tener más hijos, y le recomendó cuidarse bien hasta que sane su herida.</p><p class="txt-his"> “Si hubiera sabido no hubiera ido (al Centro de Salud Masisea), a mí me han llevado...quiero justicia, a mí me han llevado, ellos son los culpables”.</p>';
}

function cambia_shipibo1(){
   var elemento = document.getElementById("capa-1"); 
   elemento.innerHTML = '<p>Ja shipiba Julia Lomas Cauper ligancanaiki icashamaibi 1997 ja baritian kikin coshi icha acana iki.</p><p>“Ja enfermero Domingo Sánchez ea benaiki en jawe onanyama ea raketai ea yoiyai kawe centro salud de iparía(distrito de iparia jai noa potares canaiki”</p><p>Moa  winota iká iki icha hora Virginia picasaiki ja centroainxon tsonbi jawebi  yoiyamaiki,jan jakiribi yocáribiai kikin jawebi yoiyamakin xabábicho jainxon  yoiyai.Icaxbi moa horabo winota rabé enfermeranin  winoma iki westiora salanco, Virginia jaki chipoti yamaikákíki.</p><p>“Ea yoicanai mia winotimakeská jawekira mi winoke akin ea acanai westiora tetaitonin ea yatanaiki nokon poyaman en coshi meta iki jaixon chachicanaiki”.</p><p>“jatian jishtena Virginia oina wetsa salanco jabicho jimi icha boy janbixbi centro de salud de Iparía jawebi tsonbi yoiyamaiki mato ligadura acanke ayamaiki comunidad ain"</p><p>Jatian jishtena  Virginia  ikáiki wetsa salanko jimiboani,ichavires yocacati jawen maponko. Ja  centro de Salud Iparia tsonbi yoyamaiki miara akanke ligado aquin,jawen jeman caxonpari unanaiki jawe copiki   jimiboai ixon</p>'; 
}
function cambia_español1(){
   var elemento = document.getElementById("capa-1"); 
   elemento.innerHTML = '<br><p class="txt-his"> A la shipiba Juliana Lomas Cauper la ligaron contra su voluntad en el año 1997, año dónde las esterilizaciones forzadas cobraron su mayor número de<a target="_blank" href="http://larepublica.pe/impresa/politica/772089-denuncian-intimidacion-victimas-de-esterilizaciones-forzadas-de-distrito-de-anta">víctimas </a></p><p class="txt-his"> “El enfermero Domingo Sánchez me buscó (en su casa), no sabía nada. <b>Me dijo que fuera para que me dieran ropa, víveres y dinero. </b>Me ha dicho para ir al <b>Centro de Salud Iparía (distrito Iparía, provincia Coronel Portillo, Ucayali), y ahí me abandonó”.</b></p><p class="txt-his"> Habían pasado varias horas, tenía hambre. En el centro nadie le decía nada, ella preguntaba pero el silencio le respondía. Seguían pasando las horas hasta que dos enfermeros la hicieron pasar a un pequeño cuarto. Juliana Lomas <b>sintió desconfianza.</b></p><p class="txt-his">“Me dijeron para pasar a una sala, que todo estaría bien, me echaron en la camilla...Cuando yo no quería echarme,<a target="_blank" href="http://larepublica.pe/impresa/en-portada/745992-me-ataron-las-munecas-en-la-camilla-para-esterilizarme-la-fuerza">a la fuerza me hicieron echar</a>, y grité fuerte”.</p><p class="txt-his"><b>“Apagaron la luz, </b>me pusieron una inyección (anestesia), yo temblaba, <b>grité, no sabía que me hacían, </b>me iba sintiendo como adormecida”. </p><p class="txt-his">Cuando Juliana Lomas despertó estaba en otra sala, sola, sangrando, con muchas preguntas en su cabeza. En el Centro de Salud de Iparía <b>nadie le dijo que la habían ligado, recién en su comunidad se enteró </b>el motivo de su sangre”. </p>';
}



function cambia_shipibo2(){
   var elemento = document.getElementById("capa-2"); 
   elemento.innerHTML = '<p>Ja señora Lidia Rodriguez González ká iki raomecasi gimi boani posta de San Fran cia Coronel portillo,región Pucallpa), uchuma jawen comucisco (distrito Yarinacocha,Provinnidad Santa Clara,jainxon yoicanai rao yama jatian bocanai cuidad de Pucallpa hospital amazónico jainra mia akincanai ixon .</p><p> Bain jokin Lidia nin shinanamaikáiki moera </p><p>“Ea racancanaiki camillani   jawe yoixonmabi meyatancana  nocon taeribi ea coshitima copi en onanyama ikáiki jainxon en  shinanai gimiboanai bexon mein ea acanai ixon." </p><p> Jishtenxon shipiba Lidianin yocatai enfermerasbo jatian jaton yoiyai jawe copi min icha akin yocatai akin akáiki ramacaya non mia,yoiyai icha bakeyariki mia akin. </p><p> Teaxon amakana  iki firmamaki westiora kirika jawetianbi en yoyoacamaiki  jaton ribi ea yoyo axónyamacanaiki  kikin akin chexá ikenbi ea firmamacana iki firma firma firma  ea teaxon amacanai firmamaki sináicanaiki enfermerobo .</p><p> Ja esterilizacíon pecao Lidianin yoranaiki chosco oxepecao chexaiki jawetianbi yoranti shinayamaiki japecao westiora baritia pekao yoranribiaiki ikaxbi jakáribi .</p><p>Jawen tita Dorotea Gozalez Valle, jaribi akanaiki baritia  pekao ja hospital amazónico jawen historia chinica meraiki la Republicani registrameta como antecedende ginecológico ligadura de trompas. Yamake registrana  como  jawen antesendentes  ginecológico ligadura de  trompas mas  registranyamaiki  ja operación. </p>'; 
}
function cambia_español2(){
   var elemento = document.getElementById("capa-2"); 
   elemento.innerHTML = '<br><p class="txt-his"> Lidia Rodríguez Gonzáles fue por medicamentos para tratar su hemorragia a la posta de San Francisco (distrito Yarinacocha, provincia Coronel Portillo, Ucayali), la más cercana a su comunidad en Santa Clara. </p><p class="txt-his">Allí le dijeron que no tenían medicina, pero que la llevarían <b>a la ciudad de Pucallpa, al Hospital Amazónico, </b>porque ahí con toda seguridad iban a curarla. </p><p class="txt-his">En el trayecto del camino, ella jamás imaginó lo que tenían planeado hacer con su cuerpo.</p><p class="txt-his">“Me pusieron en la camilla <b>sin decir nada, me ataron manos y pies </b>para que no me moviera...pensé que me hacían eso para curar mi hemorragia”. </p><p class="txt-his">Al despertarse, Lidia Rodríguez estaba esterilizada. Le reclamó a las enfermeras. Y ellas le respondieron:“¿Por qué tanta pregunta?, ya te explicamos, <a target="_blank" href="http://larepublica.pe/politica/773723-luis-bambaren-hay-etnias-que-desaparecieron-por-las-esterilizaciones-forzadas">muchos hijos tienes”.</a></p><p class="txt-his"><b>La obligaron a firmar un papel </b>que nunca leyó, que nunca le leyeron. Estando en la cama, con mucho dolor, las enfermeras molestas le dijeron: “¡firma, firma, firma de una vez!”</p><p class="txt-his">Pasados cuatro meses luego de la ligadura, Lidia Rodríguez tuvo relaciones sexuales. Relata que sentía dolor y poco placer. Intentó nuevamente un año más tarde, pero era lo mismo. <b>Nunca más volvió a tener sexo.</b></p><p class="txt-his">A su mamá, Dorotea Gonzáles Valle, también <a target="_blank" href="http://larepublica.pe/impresa/en-portada/722457-la-campesina-seferina-castro-fue-esterilizada-cuando-tenia-dos-meses-de-embarazo">la esterilizaron</a>en el Hospital Amazónico. Su historia clínica, conseguida por La República, no registra ningún documento en el cual ella autorice que le liguen las trompas. </p>'; 
}


function cambia_shipibo3(){
   var elemento = document.getElementById("capa-3"); 
   elemento.innerHTML = "<p>Ja señora Lucía Zumaeta López  jaribi ikáiki westiora más acana Hospital  Amazónico ainxon acanai,ubicamerake jema pucallpain, esterilizancanai kenaimabi. Doctoresbaon jaton kenakescá  ainbobo bakenaitibi, cesárea iamax jaconi bakenkebi jato ligadura acanaiki </p><p>Lucíara icáiki  tuya jawen chiní baque Ruth Sánchez Zumaeta, jara cáiki jawen bene vetan Hospital ain baqueni.</p><p>'Ea acaniki ligadurabetanbi cesárea jatianbi. Ea yuiamaiki, en onayamaiki jascaraike'</p><p>'Nete xabáketian já enfermerabaon yoiyaiki jawen bene. Jan yocata yoiribiai jatibiain costa, sierra y selva; Posta de Saluainbo ochó modernos Hospitalainbo: “Noaboriki yoikana apobaon noara senen akiresiki jaton joi'</p><p>Jawen historia clínica huincanaiki Republicanin, yoiyai rabechunca nete setiembre 1998 medicobaon wishacanai: “OP CSTP + LTB”, jascati yoiyai operación cesáreabetanbi acana tubárico Bilateral, yoicanaikescábi onancana ligadura de trompas.</p><p>Jainoaxribi kirikain yoiyai Lucía Preeclampsia Severaya ika westiora jacoma jaweki ja paciente jascarama ikenbi.</p><br><img src='images/doc1.jpg' width='100%'/> <br><p>Ikaxbijara jatibimaiki. Ja historia clínicaninra yoiyai ja señora Zumaeta kenaiki cesárea, ikaxbi yoiyamai ja westiora 73 páginas kenyamai já esterilizankanti.</p><br><img src='images/doc2.jpg' width='100%'/><br><p>Lucía Zumaeta López denuncia ayamaiki onanyamaxon, ikaxbi rama jawen shinan iki ati. Janra manake fiscalía kati jawen testimonio meniticopi,jainoax jatiribi jabé ikábo shipibas.</p>";
}
function cambia_español3(){
   var elemento = document.getElementById("capa-3"); 
   elemento.innerHTML = '<br/> <p class="txt-his"> La shipiba Lucía Zumaeta López fue una víctima más de la estrategia que aplicaba el Hospital Amazónico, ubicado en la ciudad de Pucallpa, para<a target="_blank" href="http://larepublica.pe/impresa/politica/783684-historias-clinicas-prueban-que-shipibas-fueron-esterilizadas-sin-su-consentimiento">esterilizar sin consentimiento. </a>Los doctores <b>aprovechaban el momento en que las mujeres daban a luz, fuera con cesárea o por parto natural, para ligarlas. </b></p><p class="txt-his"> Ella estaba embarazada de su última hija, Ruth Sánchez Zumaeta, y acudió junto con su esposo al hospital para dar a luz.</p><p class="txt-his"> “Me hicieron la ligadura y la cesárea al mismo tiempo. A mí no me han avisado, <b>yo no sabía, así ha sido”.</b></p><p class="txt-his"> Recién al día siguiente de que la esterilizaran, las enfermeras le contaron a su esposo la verdad. Él les reclamó, pero ellas le respondieron: <a target="_blank" href="http://larepublica.pe/impresa/en-portada/752295-ningun-medico-actuaba-por-su-cuenta-sino-que-obedecia-los-mandatos-del-gobierno">“Nosotras estamos ordenadas por el Gobierno </a>solo cumplimos órdenes”.</p><p class="txt-his"> En la <b>historia clínica de Lucía Zumaeta, |conseguida por </b><b>La República, </b>está indicado que el 22 de setiembre de 1998 los médicos escribieron: “OP CSTP + LTB”, es decir: Operación de Cesárea y al mismo tiempo Bloqueo Tubárico Bilateral, comúnmente conocido como ligadura de trompas. </p><p class="txt-his"> Además, el documento señala que la paciente tenía Preeclampsia Severa, una grave condición médica en la cual <b>no está en la condición de tomar decisiones en lo absoluto.</b></p><br/><img id="lucia1" src="images/doc1.jpg" width="100%" alt=""/><br/><br/> <p class="txt-his">Pero eso no es todo. La historia clínica muestra que consintió una cesárea, pero </p><b>no consigna en ninguna de sus 73 páginas que aceptará que la esterilizaran.</b><br/><img id="lucia2" src="images/doc2.jpg" width="100%" alt=""/><br/><br/> <p class="txt-his">Lucía Zumaeta no denunció en su momento por desconocimiento, pero hoy que ha roto su silencio está dispuesta a hacerlo.<a target="_blank" href="http://larepublica.pe/impresa/politica/731693-victimas-de-esterilizaciones-afirman-haber-recibido-maltrato-de-los-fiscales">Ella pide que la Fiscalía le tome su testimonio.</a></p>'; 
}


function cambia_shipibo4(){
   var elemento = document.getElementById("capa-4"); 
   elemento.innerHTML = '<p>Nilda Rojas Martíneznin shinanai  ea aprovechancana ixon ja winiei jatibitian shinanax  netetibi jawen baque picota bená mawataiki enfermerabaon yuyaiki nonra mia  ligado ake akin winiaiki kikini </p><p>Nilda raikaiki posaka  oxe toya presión keyá y mapon chexa.  Jaskara kaiki hospital amazónico, Jariki Pucallpa jemanko,moa bakenti keská akin chexá.</p><p>jikiamatianbi sala de operación amacanaiki firmamakin  westiora  documento,jan shinanaiki firmanai  cesarea anoxon,jakoma shinanki ishton firmanaiki yokaxonmabi jawetianbi jascara unanyamaresaiki jan firmana.</p><p>"En shinanaikaiki ea  ayamacana ligadura cesareares acana ea kenyama iki ligadura jawetianbi acantini".</p><p>"Ja nete xabaketian operación pekao mahuatai nokon baque,menicanai nokon tita.Nokon papan axonai westiura maxco ataúd,jawetianbi jawen bemana jan huinyamaiki hospitalmeranpari ixon". </p><p>"Enfermerani ea  yuyaiki ligaduraribira non mia ake en shinanaiki jakoma kenyamaiki".</p><p>Nilda kenaiki jakiribi benbo baque westiura benbo baque mahuata ikaxbira jakiribi iti atipanyamake jawen yura,jawen joi jawemabi kesca akinra,xatekanaiki netéxon.</p><p>"Kirika nocon báque mahuata  jascáribiakin Hospital ainxon jawetianbi meniyamacanaiki quirika ligadura". La Repúblicani merai jawen historia clínica yamake jascáwe iká westiora joi awé esterilización ika.</p>'; 
}
function cambia_español4(){
   var elemento = document.getElementById("capa-4"); 
   elemento.innerHTML = "<p>Cada vez que Nilda Rojas Martínez se acuerda como se aprovecharon de ella no puede parar de llorar. Cada vez que recuerda como el mismo día que falleció su recién nacido las enfermeras le decían fríamente: “si pues, te hemos ligado”, llora con frustración.</p><p>Nilda tenía ocho meses de embarazo, se sentía con la presión alta y dolor de cabeza. Por ello fue al Hospital Amazónico, ubicado en la ciudad de Pucallpa, porque sentía que era el momento de dar a luz.</p><p>Antes de entrar a la sala de operación le hicieron firmar un documento, ella pensó que estaba firmando para la cesárea, se sentía tan mal que firmó rápido y sin preguntar, nunca supo que fue lo que firmó.</p><p>“Yo no pensé que me iban a hacer la ligadura, solamente cesárea, yo no dije nunca que me hagan ligadura”.</p><p>“Al día siguiente de la operación falleció mi niño, se lo entregaron a mi mamá. Mi papá le preparó un pequeño ataúd. Nunca pude ver su rostro porque tenía que permanecer en el Hospital”.</p><p>“La enfermera me dijo que me habían hecho también la ligadura, y me sentí mal, yo no estaba de acuerdo”.</p><p>Nilda quería tener más hijos varones. Solo tenía un niño y el bebé que falleció. Pero no la dejaron decidir sobre su propio cuerpo, como si su palabra no importará, la cortaron en silencio.</p><p>“El hospital nunca me entregó ningún documento del fallecimiento de mi hijo, ni tampoco ningún documento de la ligadura”. Efectivamente, La República consiguió su historia clínica y no hay señales de ningún tipo de autorización para la esterilización. Fue contra su voluntad.</p>"; 
}


function cambia_shipibo5(){
   var elemento = document.getElementById("capa-5"); 
   elemento.innerHTML = '<p>Ja enfermeranin  noa yoiyai: nonliganai huetsabo yama “jabacanacopi”Icáiki  westiora nete shipiba Virginia Vásquez Megías westiora nete raroshaman shinanya neteCaimito jemamea (ditrito Masisea,Provincia Coronel Portillo, región Pucallpa). Jainra icáiki yoyoiki jawen  benebetan xepoti ton acanaitian tetai centro de salud  de Masisea yuiyai raro shama shinanyaxon virginiara cati jake novetan centroain jawen consulta medica y rao bi.</p><p>Jain centroainxon yoiyai Virginia y jabetan tsinkitabo pichica señoras  yoiyai jato nashicanwe  consulta winotamatianbi.</p><p>“Nocon listamea pichica señoras ikain niaxra westiora jabake nashia pecaora noa joyocanaiki noa chosco baneta nocon lista mea y jainxon noa  yoiyai bata sawecanwe.  ¿Jaweatiki non bata saweti iki?,yuique".</p><p>Manata jikinoxja westiora salanco(sala de operación) jainxon shinanai jawen poco xatecana jawetianbin baque atima. Matsi niscanaiki,jaweranobi jabáti yamaika iki jainxon acanaiki kikin akin rocotorobaon katea itan enfermeras.</p><p>“KenacanaI westiora,japari acanaiki jainxon wetsaboribi yea acana iki senenain. En hoinaiki mahuá keská tipibayna pasnashocobo, ishton ea jabacasai ikaxbi catikomaikáiki”.</p><p>"Eso chachicanaiki nikenbi(anastecianin ),ea racancanaiki camillanin,en yoiyay eara kenyamai kimisha akinyoixon nocon poyaman  ninicanaiki ea racáno ixon kenyama iki ea”</p><p>Icashamaibi acana pecao,jatian virginia caiki jawen comunidad  caimito geman caxon bena iki ja Tecnico enfermero Rodrigo Tananta tetai posta de caimitonconia y jara ikáiki testigo de la esterilización forzada ja centro de salud deMasisea jan yucataiki yoiyai enfermeronin “jara mato acanaiki jatiribi jabacanacopi”.</p>'; 
}
function cambia_español5(){
   var elemento = document.getElementById("capa-5"); 
   elemento.innerHTML = "<p>Era un día más para la shipiba Virginia Vásquez Mejías, un día común en su tranquila comunidad de Caimito (distrito Masisea, provincia Coronel Portillo, región Pucallpa). Estaba conversando con su esposo cuando tocaron a su puerta trabajadores del Centro de Salud Masisea. Les dijeron sonrientemente que Virginia debía acompañarlos al centro para consulta médica y recibir medicinas.</p><p>En el centro le explicaron a Virginia y a su grupo de cinco señoras que debían bañarse antes de pasar a consulta.</p><p>“De mi lista de cinco señoras se escapó una. Después de ducharnos nos pusieron en fila a las cuatro que quedábamos de mi lista  y nos dijeron para ponernos batas. ¿Y para qué nos van a poner batas?, dije”.</p><p>Esperando su turno para ingresar a una sala (sala de operación) recién se enteró que le harían un corte en la barriga para no tener más hijos. Sudó frío, no sabía por dónde escaparse, el lugar estaba rodeado de doctores y enfermeras.</p><p>“Llamaron a una, a ella primero le han hecho, y de allí a otra. Otra también. Y yo he sido la última. Vi que todas estaban como muertas, pálidas. Quería escapar pero no sabía cómo”</p><p>“Me pusieron una inyección parada (anestesia), me echaron a la camilla, yo decía que no quería, me resistí como tres veces. Me jalaron los brazos para que me echara, no quería eso para mí”.</p><p>Después de esterilizarla a la fuerza, cuando Virginia retornó a su comunidad de Caimito, buscó al técnico enfermero Rodrigo Tananta, trabajador de la posta de Caimito y el cual fue testigo de la esterilización forzada en el Centro de Salud Masisea. Ella le reclamó y él le respondió “Eso les hicieron a ustedes en reemplazo de las que se habían escapado”.</p>"; 
}


function cambia_quechuac1(){
   var elemento = document.getElementById("capa-c1"); 
   elemento.innerHTML = '<p>“Ch’atakuymantaqa manan imatapas niwarankuchu, manan yacharanichu imaraykun kurku hujuypi chay kasqanta”</p><p>24 watayoqmi karani, yukaywaspan ch’atawaranku. Kamachiwaranku rap’ipi huella digitalniyta churanaypaq, mana imata niwaspanku. Sala de Operacionpi  mana suyarankuchu Benedicta Nina Mamani kallpachasqa kamillamanta urayta munaqtin.</p><p>Niwanku riy posta Viscochone (Colquetapata) provincia Paucartambo, Region Cusco, Cheypin kashan vacuna wawakipak nispa, enfermerakuna aparawanku Colquepataman hina niwanku: “Qankuna wachankichis qowihina, chivo hina nispa"</p><p>Qhali yuyayniyoq, Benedicta, mana imatapas yacharanchu auqankunaq munasqanta.</p><p>“Rikuni hoj qoyaq wañusqa hina camillapi lloqsimusqanta, mancharikuni. ¿Imatan ruwashanku kay ujupi? Ayqekuyta munani, wawayta huj qoyaman qoni, enfermerakutaq ayqeyta munasaqtiy, hap’iruwanku.”</p><p>Benedicta mancharisqa kasharan, manan vacunakuna kanchu niqtinku. Ichaqa ñan yacharishaniña huj ch’atukuymanta, manataq yacharanichu imás chátakuy kasqanta. Kamachispan haykurachinku huj salaman.</p><p>“Anestesiata churayta munawanku, mana noqa munaranichu, hayt’apakusharanin. Uyarirqani wawachaypa waqasqanta, manan, manapunin munanichu. Anestesiata churawanku, chaymantaqa mana yachanichu imatas ruwawanku chayta”.</p><p>Mana pipas niranchu ch’atakuymantaqa, pay tapukuran imanaqtinmi wijsan kuchusqa kashan, imatan ruwaranku. Ch’in mana pipas rimanchu. Chaymantataq enfermera Petronila Viscuchunimanta, kaypi kashaspa nin: “Ch’atakuytan ruwayku, manaña haykáqpas muchunayhkipaq, manaña hayk’aqpas wawaykikuna kananpaq”.</p>'; 
}

function cambia_españolc1(){
   var elemento = document.getElementById("capa-c1"); 
   elemento.innerHTML = "<p>Tenía 24 años cuando mediante engaños la ligaron. La obligaron a poner su huella en un papel sin decirle para qué era. En la sala de operación no se detuvieron cuando Benedicta Nina Mamani forcejeaba porque quería bajarse de la camilla.</p><p>Le dijeron que vaya a la posta de Viscochone (distrito Colquepata, provincia Paucartambo, región Cusco) porque había vacunas para su niño. Luego la trasladaron a la posta de Colquepata con el mismo cuento, no sin antes decirle las enfermeras: “ustedes están pariendo como cuy, como chivos”.</p><p>Inocente, Benedicta no sospechó las verdaderas intenciones de sus verdugos.</p><p>“Vi que una señora salía en camilla inconsciente de una sala, me asusté. ¿Qué cosa están haciendo acá adentro? Intenté escaparme, le di mi wawa a una señora que estaba a mi costado, pero las enfermeras me han visto queriendo irme y no me han dejado”.</p><p>Benedicta estaba asustada, más aún cuando le dijeron que no había vacunas. Pero no sospechaba de una ligadura, ni siquiera sabía lo que era una ligadura. A la fuerza la hicieron pasar a una sala.</p><p>“Cuando me querían poner la anestesia yo no quería, estaba pataleando. Escuchaba a mi wawa que estaba llorando, les decía no no, siempre dije no no. Me pusieron la anestesia y cuando reaccioné no sabía lo que me habían hecho”.</p><p>Nadie le decía nada luego de la ligadura, ella se preguntaba por qué tenía un corte en la barriga, qué le habían hecho. Silencio e indiferencia por varias horas. Finalmente la enfermera Petronila de Viscochone, que estaba en ese recinto le dijo: “Te hemos hecho la ligadura para que nunca más sufras y nunca más tengas hijos”.</p>"; 
}

function cambia_quechuac2(){
   var elemento = document.getElementById("capa-c2"); 
   elemento.innerHTML = '<p>Damiana Huallpayunca Quispe yuyaykun, allin uywasqa yuyayniyoq kayman karan, qolqeyoq kayman karan chayqa, manan kurku ujuyta kuchurankumanchu,  nitaq pujllankumanchu karan yuyayninwan.</p><p>Wachakuqmi rirqan Antonio Lorena hampi wasita, Qosqo llaqtapi. Kasqanpachallan enfermerakuna muyupayaramunku ch’atachikuy askha wawayoqñan kanki nispa. Kinsa p’unchaymi hanpina wasipi kan, hinaspataq sapa kuti rijurimunku chayllata nirqankupaq.</p><p>Damianamanqa manan imatapas willarankuchu, imaynas ch’atakuna kasqanta, ichaqa payqa allin tajyasqa kakun, manan munanichu nispa. Kinsa púnchay pasaqtintaq, qosan hanpi wasiman orqoq hamuqtintaq mancharichinku millayta:</p><p>“Umalliqmi kamachikun, manan qanllatachu, llapaykichistan. Askhatañan chátamuyku. Llapan hanpi wasikunapi, llapan llaqtakunapi, ch’atamushanku. Fujimori umalliqmi kamachikamun”.</p><p>“Sichus mana munanki warmiykiq ch’atachikuyninta, chayqa qan ch’atachikuy, vasectomiata ruwachikuy”.</p><p>“Sichus mana munankichu ch’atakuy ruwanaykuta, chayqa guardiakuna hamunqa, hinaspa apasunki”.</p><p>Chhaynatan mancharichinku, kamanchinkutad Damianaq qosanta, seqéy kay raphipi nispa, qolloq kaypaq, mana munasqanta. Hinatapunin ch’atarunku iskaynin makinkunata wataruspa.</p><p>Churaruwanku anestesia nisqata, makiyta wataruwanku, hina niwanku, yupay nispa, doctor millay sonqoyuk kasqa, qaparispa niwan!! Manaya tukunichu, manchasqa kani, cheymanta wañurapuni, mana yuyakúnichu.</p> '; 
}

function cambia_españolc2(){
   var elemento = document.getElementById("capa-c2"); 
   elemento.innerHTML = "<p>Damiana Huallpayunca Quispe piensa que si hubiera tenido una mejor educación (su nivel de instrucción es primero de primaria) o dinero, no hubieran violentado su cuerpo ni jugado con su mente.</p><p>Fue a dar a luz al Hospital Antonio Lorena, en la ciudad de Cusco. Inmediatamente después las enfermeras la rodearon exigiéndole que debía ligarse porque ya tenía muchos hijos. Durante los tres días que permaneció en el hospital se le aparecían a toda hora a decirle lo mismo.</p><p>A Damiana no le explicaron mucho en qué consistía una ligadura, pero igual ella se mantuvo firme en todo momento diciendo que no quería. Pasado los tres días, cuando su esposo fue a recogerla al hospital, las amenazas y el hostigamiento agudizaron:</p><p>-“Fujimori, el presidente, nos ha ordenado no solamente a ti sino a todas, a bastantes hemos ligado. En todas las postas de salud de todos los distritos están ligando. El presidente, ha ordenado”.</p><p>-“Si no quieres que tu esposa se ligue a ti te vamos a hacer la ligadura”.</p><p>-“Si no dejas que le hagamos la ligadura la guardia vendrá y los llevará”.</p><p>Así, chantajearon y obligaron al esposo de Damiana a firmar un papel para que la esterilizaran contra su voluntad.</p><p>“ Cuando me han puesto la inyección (anestesia) me han amarrado mis manos, y me dijeron: “señora cuenta” Me ha hecho contar. El doctor hablaba gritando, tenía su carácter: ¡¡hasta cincuenta cuenta!! No he llegado a contar hasta cincuenta, tenía mucho miedo y luego he empezado a quedarme como muerta”</p>"; 
}

function cambia_quechuac3(){
   var elemento = document.getElementById("capa-c3"); 
   elemento.innerHTML = '<p>“Hoj rap’itan qowanku, seq’enaypaq, waqasharanin, mana ñawinchayta  yachanichu”.<br>¡”Hayk’ajkamataq wawaykikuna kanqa, qowi hinachu, khuchi hinachu! Hinatan niranku Ernestina Mamani Quispeta, Huancarani hanpina wasipi llank’aq enfermerakuna (Huancarani llaqtapi, Pauqartampu k’itipi, Qosqo suyupi) huj watuyakamuypi, chaymantataq apanku Pauqartampu Hanpina wasiman ch’atanankupaq.</p><p>Haqay hoj manchakuy watuyakamuypi Ernestina papata tarpukushaqtin enfermerakuna anchhuykunku, paytaq mancharisqa pakarukun, hinata hap’ispanku, mana munasaqtin ambulanciaman wicharachinku, hanpina wasiman apanankupaq.</p><p>“Hanpina wasimanta ayqekamushaqtiy, policía hap’iruwan, waqmanta kutichiwan, suwata hina”</p><p>Ernestina waqan, qaparintaq ancha kalpanwan. Hanpina wasipi llank’aqkuna phiñasqa niranku thaj niy nispa, chay ruwasqanmi huj qoyakunata hatarichishan, mancharichishan, ayqekunankupaq.</p><p>“huj rap’itan qowanku seq’enaypaq, waqasharanin, manan ñawinchayta yachanichu. Seq’ey, seq’ey, seq’ey, niwaranku, kamachiwaranku seq’enaypaq, noqataq mana reqsispa seq’eni”.</p><p>“P’achayta ch’utiwanku, k’ancharichimunku kawituman. Enfermerakunan ñit’iwanku, makinkuta qhasqoypi churanku, moqonwantaq ñit’iwanku wijsayta. Niwankutaq ¿Imanaqtinmi mana munankichu, imanaqtinmi hayt’aykachanki?.</p><p>Ernestina chayraq kallpachakun, Huancarani wasinman chayaruspa. Enfermerakunan kutichinku wasinman. Huj wasimasinmin nin: “Kausasasqankiraqmá Ernestina, ñoqaqa wañupunñan niranimá, wañusqata hinan apamusunkiku”.</p>'; 
}

function cambia_españolc3(){
   var elemento = document.getElementById("capa-c3"); 
   elemento.innerHTML = "<p>“¡Hasta cuándo vas a tener tus hijos, como el cuy, como el chancho!”, así le dijeron a Ernestina Mamani Quispe las enfermeras del Centro de Salud de Huancarani (distrito Huancarani, provincia Paucartambo, región Cusco) en una de sus tantas visitas para captarla  y posteriormente  llevarla a ligar al Hospital de Paucartambo.</p><p>En una de aquellas atemorizantes visitas Ernestina estaba sembrando papa, vio que las enfermeras de acercaban, se escondió, pero la agarraron. La metieron a la fuerza a una ambulancia, rumbo al Hospital.</p><p>“Me llevaron al Hospital de Paucartambo, ahí me estaba escapando, pero el policía me ha agarrado y me llevó como si estuviese presa”.</p><p>Ernestina lloraba y gritaba con todas sus fuerzas. El personal de salud molesto le decía que se calmara porque con su actitud estaba incentivando a las demás señoras a escaparse, a asustarse.</p><p>“Me dieron un papel para firmar, estaba llorando, no sé leer. Firma, firma, firma, me decían, me obligaron a firmar y yo sin conocimiento lo hice”.</p><p>“Cuando me han puesto a la cama, me han puesto la inyección (anestesia). Me agarraron de las manos, me aplastaron con su rodilla en la barriga, y me dijeron: ahí chiquitito no más te van a hacer la ligadura, por gusto pataleas”.</p><p>Ernestina recién reaccionó cuando llegó a su casa en Huancarani. Las enfermeras  la llevaron de regreso. Una vecina le dijo: “Habías estado viva todavía Ernestina, yo pensé que te habías muerto, porque toda inconsciente te han traído”.</p>"; 
}


function cambia_quechuac4(){
   var elemento = document.getElementById("capa-c4"); 
   elemento.innerHTML = "<p>Manchachiywanmi ch’ataranku Martina Camala Quispe, qoyata, 1996pi, kay watapi llapan qallarin. Millay manchakuy qallariy mit’an, waranqa, waranqa warmikunapaq mana munayninwan ch’atasqa, llapan Perú suyupi.</p><p>Qolqepata hanpi wasipi (Qolqepata, Pauqatampu k’ítipi, Qosqo suyupi), chaypin, aswan kinsa chunka qoyakuna “Republicaman” willakunku, tanqarpari ruway kasqanta, imaynas hanpi yanapaqkuna Alicia, Hernan; Martinata nirqanku huch’uy wasiman hanpikuq haykunanpaq, allin kausay kananpaq.</p><p>Payqa mana munaranchu, sayk’unankama. Mancharichiytaq qallarikun. Niranku, sichus mana kamachikuykunata munankuchu chayqa, manan paytapas, wawankutapas hanpinqakuchu kay hanpi wasipi. Pay qosan ima sank’ay wasiman rinkunman, gobiernoq kamachisqan mana munasqanku rayku.</p><p>Iskaymanta apawanku, chutakuy, chutakuy, t’ustikuy p’achakita niwanku. Hina churawanku yurak p’achawan. Chutakuy niwanku, churasakiku anestesiata, ama waqaychu nispa niwanku, huk killachayuk wawachay noqawan kan, paykuna wawachayta hap’ishiaranku, hinan puñurapuni.</p><p>Allinmi chay. Martinak Nisqan posta wasita wawachan controlpak y kuchurunku wiksanta mana munashiaqta, Kunan P’unchawkama mana allintachu kawsani, qariypas chey p’unchawmanta kama khuyayta qariy k’iriwan.</p><p>“Noqa tarikuni mana allin, khuyay llakisqa, unqosqalla kani cheymanta pacha“.</p><p>Wasiyta kutiqtiy, qosay k’aspiwan maqayuwan, qarquwan wasiymanta, hina niwan: “Huk, huk qariwan purinakipaq cheyta ruwachikunki, mana yachasqay, qammy huchayuk kanki, qancha yachanki imayna kayta, nispa niwan“</p><p>La República tarin enfermerata colquepata postamanta sutinmi Alicia Hilaria Muñoz Diaz, paymi apasqa Camala warmita.</p><img src='images/doc3.jpg' width='100%'/><p>“Paymi Alicia enfermera, paymi k’iriwaran, payta anyani. Wawaytan aparani posta wasiman hina mana munashiaqta ligawan. Mana hinaqa carcel manmi apasaki nispa, estado mana wawakikunata reqsinqachu nispa. Cheymi chay enfermerata ñakani, paymi huchayuk” Nispan willakun Camala mama.Iskaychunka (mamakuna) warmikuna ligasqakuna colquepata postapi willakunku Republica nisqa qelqayman Alicia enfermeran yukallawan apawaqku, phiñallañan apawaqku ligawanankupak nispa.</p><img src='images/doc4.jpg' width='100%'/><p>Kinsa warmikunaman qawachiyku fotota hinan riqsirunku, paykunan kanku: Seferina Castro Huaman(pin riqsichiran 1999 watapi, juez de paz , colquepata llaqtapi, esterilización nisqata mana munashiqta ruwasqankuta, Republica qelqaymi tarin chey denuncia nisqata), Juliana Yapo Flores y Nelly Quispe Huisa.</p><img src='images/doc5.jpg' width='100%'/>p>Seferina Castro Huamán.</p><p><img src='images/doc6.jpg' width='100%'/><p>Juliana Yapo Flores</p><p><img src='images/doc7.jpg' width='100%'/><p>Nelly Quispe Huisa </p><p>La República tarin enfermera Aliciata, hina pay willakun:“Manan hap’iykuchu, niy llallawanpis, llullakushianku nispa…paykunan munaranku nin, manan chutaykuchu, pin kani noqa chay ruwanaypak, manan pagawarankuchu, noqaqa kasukuyllata ruwarani“.“Manan sapallaychu kani, kanmi llank’akmasiykuna, noqaykuta obligawanku y ruwaraykutakmi estadota kasukuspa… allinta ruwaran gobierno chey campañata. ch’uño unullata mihuchik kanku wawankuman, manaqali wawakuna kak, cheymi nini allinmi nispa, gobierno kamachikamuran esterilización nisqa programata, noqaykuqa kasukullarayku “.</p>"; 
}

function cambia_españolc4(){
   var elemento = document.getElementById("capa-c4"); 
   elemento.innerHTML = "<p>Con amenazas y violencia le ligaron las trompas a la señora Martina Camala Quispe, en 1996, el año donde todo empezó. El inicio de la época del terror para las miles de mujeres esterilizadas contra su voluntad a lo largo y ancho del Perú.</p><p>En la posta de Colquepata (distrito Colquepata, provincia Paucartambo, región Cusco),lugar donde más de cuarenta señoras han narrado a La República el atropello que se cometió contra ellas, los enfermeros Alicia y Hernán le dijeron a Martina para pasar al cuartito a curarse, para que de ahora en adelante le vaya mejor en la vida.</p><p>Ella se negó hasta el cansancio. Y empezaron las amenazas. Le dijeron que si no acataba las órdenes ni ella ni sus hijos podrían volver a atenderse en la posta. Qué ella y su esposo irían a la cárcel por oponerse al mandato del gobierno.</p><p>“Entre dos me han llevado adentro. Estírate, estírate, quítate, quítate tus ropas, así me decían. Me han puesto un vestido blanco. Estírate, me decían de nuevo, te vamos a poner una inyectable (anestesia) para que no llores, asi me han dicho...un mes tenía mi bebé que estaba conmigo ese día, ellos lo estaban agarrando a mi bebé, y yo me he quedado dormida”.</p><p>Misión cumplida. Martina había ido a la posta para el control de su bebé, y la esterilizaron a la fuerza.  Hasta el día de hoy la tragedia no la deja dormir, y su esposo a raíz del hecho la maltrata como jamás lo hizo antes.</p><p>“Yo me siento mal por haberme hecho esto, maldecía mucho. Mucha preocupación tengo, para pensando en esto y de eso me paro enfermando”.</p><p>“Cuando he regresado a mi casa mi esposo con palo me ha pegado, me ha botado de la casa, me dijo: “Querías caminar con otros varones por eso te has hecho esa cosa, yo no te he dicho nada, tú tienes la culpa, tú sabrás cómo seguir adelante”, así me ha dicho”.</p><p>La República logró identificar a la enfermera de la posta de Colquepata que llevó a la señora Camala, bajo amenazas, a ligarse. Se llama Alicia Hilaria Muñoz Díaz.</p><img src='images/doc3.jpg' width='100%'/><p>“Esta es la señorita Alicia, la que me ha maltratado a mí, yo la maldigo a ella. Cuando yo le llevé a mi hijo a la posta ella me ha obligado a ligarme. Me dijo que si no me iba  a llevar a la cárcel y que El Estado nunca más va a atender a mis hijos. Por eso yo le maldigo a esta señorita para siempre, porque por culpa de ella estoy así”, dijo indignada la señora Camala.</p><img src='images/doc4.jpg' width='100%'/><p>Más de 20 señoras ligadas a la fuerza en la posta de Colquepata contaron a La República que la enfermera Alicia las captaba con engaños, amenazas y a la fuerza para que las liguen.</p><p>Le mostramos su foto  a tres señoras más, y al instante la identificaron.</p><p>Ellas fueron: Seferina Castro Huamán (quién denunció en 1999 ante un juez de paz en Colquepata que la habían esterilizado en contra de su voluntad, La República obtuvo el documento de la denuncia), Juliana Yapo Flores y Nelly Quispe Huisa.</p><img src='images/doc5.jpg' width='100%'/><p>Seferina Castro Huamán.</p><img src='images/doc6.jpg' width='100%'/><p>Juliana Yapo Flores </p><img src='images/doc7.jpg' width='100%'/><p>Nelly Quispe Huisa</p><p>La República buscó a la enfermera Alicia, ella nos dijo:“No las forzamos, ni con policía hemos ido, es mentira lo que dicen...Ha sido con su consentimiento de ellas, no las hemos jalado a la fuerza. Quién soy yo para amenazarles, yo qué gano con esto, no me han pagado nada, solamente han sido órdenes”.“No soy la única, están mis compañeros, nos han obligado y hemos cumplido como orden del estado...bien ha hecho el gobierno con esta campaña. Agua de chuño hervido les daban a sus hijos, los niños eran desnutridos, por eso mismo estoy de acuerdo, el gobierno ha implementado ese programa de esterilizaciones, nosotros solo hemos cumplido”.</p>"; 
}

function cambia_quechuac5(){
   var elemento = document.getElementById("capa-c5"); 
   elemento.innerHTML = '<p>“Maximiliana Quillihuaman Quispe, wachakurqan, pisi pachamantaq wawachanta controlman aparqan, Maras hanpina wasiman (Maras llaqtapi, Urupanpa k’itipi, Qosqo suyupi). K’iriyqa manan huj pachallapas  suyankunchu. Hayk’a wawayoqmi kanki nispan tapuyunku Blanquita, Doris enfermerakuna. Pisqan kan nispa kutichin. “Manañan wawaykikuna kanqachu, ch’atachikunki”. Maximiliana ch’uya yuyayniyoq kaspa, nirqan kallpasapa, manan munanichu ch’atachikuyta. Ichaqa mana imapaqpas qokunchu.</p><p>“Imaymanata ruwaspa, ayqekuyta munarani, chaymantaq llapan punkukunata wisq’arunku, ancha kallpankuwan hap’iruwanku, manañan ayqeyta atiranichu. Wisq’ruwanku huj salapi”.</p><p>Chaymantataq tanqaspa ambulanciaman seqarachiwanku, askha kuska qoyakutawan. </p><p>Ñanpiñan enfermerakuna niwanku manan paykunaqa ch’atankuchu, chaytaqa ruwanku MINSA Urupanpa llank’aqkuna, chaymanmi risanku.</p><p>“Iskay Chunka pisqayuk watayukmi karani, wawaykuna qati, qatichallan karanku““Sala de Operación nisqapi niwanku:“ Asqha wawakikuna, cheymi ligasakiku nispa” Kunparuwanku, wichayta qawachiwanku, yupayniwanku, wataruwanku makiyta, chakiyta hina.</p><p>Maximiliana iskay wawatawan munaran, qhali warmi kayta munaran, ichaqa wiñaypaq k’iripunku kausayninta, ima pay kikin willakun.</p>'; 
}

function cambia_españolc5(){
   var elemento = document.getElementById("capa-c5"); 
   elemento.innerHTML = "<p>Maximiliana Quillahuaman Quispe dio a luz y al poco tiempo llevó a su hijo para su control a la posta de Maras (distrito Maras, provincia Urubamba, región Cusco). El maltrato no se hizo esperar ni un minuto. Cuántos hijos tienes, le preguntaron las enfermeras Blanquita y Doris. Tengo cinco. “Ya no vas a tener más hijos, la educación cuesta mucho, no estamos en tiempos  de que ustedes tengan más hijos, vas a hacerte ligar”. Maximiliana fue muy clara, les dijo con firmeza que no quería que la esterilizaran. Pero de nada sirvió.</p><p>“De cualquier forma, por cualquier lado quería escaparme, al mismo tiempo cerraron la puerta, nos han agarrado duro, yo no podía escaparme. Nos han encerrado en otra sala”.</p><p>Luego la subieron a una ambulancia empujándola, junto a varias señoras. En el trayecto del camino una enfermera le dijo que ellas no ligaban, que eso lo hacía personal del MINSA de Urubamba, a dónde se dirigían.</p><p>“En la sala de operación me han dicho: “tanto hijos tienes, por eso te vamos a ligar para siempre”, me han hecho mirar hacia arriba, me han hecho contar una numeración, me han amarrado mi manos, mis pies también me han amarrado”.</p><p>Maximiliana quería tener dos hijos más, quería ser una mujer sana, pero le malograron la vida, como ella misma relata.</p>"; 
}

function cambia_quechuac6(){
   var elemento = document.getElementById("capa-c6"); 
   elemento.innerHTML = "Victoria Ccoya Quispe, mana qelqay  ñawinchay yachaqmi, chay raykun payqa iñikun  mana munasqanmanta ancha allin ajllasqa warmi ch’atakuypaq karan.</p><p>Askha kutitan wasiyta hamuranku, Huancarani hanpi wasimanta (Huancarani, Pauqartampu kítipi, Qosqo suyupi) ch’atakuy kamachiwannankupaq, Gobiernon nin, manas aswan kinsa wawayoq kaymanchu, nispa.</p><p>Victoriaqa allinta kurku ujunta waqaychakurqan, paypaqqa chaymi allin karan, munallaqtinmi wawankunapas karan. Enfermerakuna phiñasqa wasinta rirqanku, paypa ruwasqanqa manan allinchu, ch’atakuymi ancha allín nispa. Mana hayk’aqpas allin ruwaykunamanta rimarankuchu.</p><p>“Niwarankun manan nanay kanqachu, llapallanmi allillan kanqa, noqataq nini manan, paykunataq allinmi kanqa nispa niwanku, urayunin hanpina wasiman…Hanpina wasimanta carropi apawanku Hospital Regionalman, chaymanmi chayachiwanku”.</p><p>“kawitumanmi aparuwanku, p’achayta t’ijraruwanku, mana noqaqa munaranichu, manapuni munaranichu, anestesiatan churaruwanku, manañan imatapas yuyarinichu”.</p><p>Chey ligaduraka qepanman qoranku tarjetata convenio (MINSA) y (FONCODES), paykuna mana yuyaychankuchu, manaya ñawinchayta yachaqkuchu.</p><p>Chey tarjeta nin Victoria Ccoyata Captakun Enero 1996 watapi, Planihuan Programapi, Programa Planificacion Familiar uhupi, distrito Huancarani nisqapi.</p><img src='images/doc8.jpg' width='100%'/><p>Kay rap’iq tijranpin nin: “Kay tarjetata rikuchispan, Huancarani hanpina wasipi yanqalla hanpichikunqa, Programa de Planificación Familiarpi”. Kaykunapin seq’ekuna tarikun, Presidente de Núcleo Ejecutor PLANIHUAN, wiraqocha Tomás Condori, inspector del Convenio FONCODES, Dr. Félix Hidalgo Ramirez, 1996 watapi, Huancarani hanpina wasi kamachikuq, Dr. Carlos Zea Nuñezpuwan.</p><img src='images/doc9.jpg' width='100%'/><p>Doctor Felix Hidalgo Ramirez nin República qelqayman, chey Planihuan nisqaqa karan proyecto llapan profesionalkuna distrito Huacarani llaqtapi, manan hayk’aqpas quejakunkuchu.</p><p>“Chey proyecto paqariran grupo profesionales llank’aqkunaq, pisilla karan Planificacion Familiar, asq’ata kananta munaranku (Centro de Salud de Huacarani)… Cheymanta ligadurapak apachik kayku Cusco, Hospital regionalman“ </p><p>“Chey P’unchawkunapi noqa inspector, en la supervision chey programapi manan uyariqchukani, nitak rikuqchu kani ima anyakuytapas chay warmikunamanta”</p><p> Hinallatak La Republica qelqay tupan Dr. Carlos Zea Nunez, jefe 1996 Centro de Salud Huancarani, ¡waw! chey Doctor manas yuyanchu imaskaran Planificahuan, manas yuyanchu tarjetatapas, firmanqa kashiansi, mana cheytapas yuyanchu.</p><p>“Munarani wawaykuna kananta“ nispa nin Victoria Ccoya."; 
}

function cambia_españolc6(){
   var elemento = document.getElementById("capa-c6"); 
   elemento.innerHTML = "<p>Victoria Ccoya Quispe es analfabeta, ella cree que por eso ha sido una candidata perfecta para esterilizarla contra su voluntad.</p><p>“Fueron a mi casa varias veces del Centro de Salud de Huancarani (distrito Huancarani, provincia Paucartambo, región Cusco) para obligarme a que me haga la ligadura, porque el Gobierno dice que no debemos tener más de tres hijos”.</p><p>Victoria se cuidaba de forma natural, para ella eso era lo correcto, su método le funcionaba y solo tenía hijos cuando ella quería. Las enfermeras que iban a hostigarla a su casa le dijeron que su método no era adecuado, que tenía que cuidarse con la ligadura porque eso era lo mejor. Nunca le hablaron de otras formas para planificar.</p><p>“Me dijeron que no sentiría dolor, que todo estaría bien, yo les dije que no, pero siempre me obligaban , tuve que bajar a la posta…Del Centro de Salud me llevaron en carro particular al Hospital Regional del Cusco, ahí nos han hecho llegar”.</p><p>“Me llevaron a la cama, me cambiaron de ropa, yo no quería, no quería, me anestesiaron y ya no me di cuenta de nada”.</p><p>Luego de la ligadura le entregaron  una tarjeta que indica un convenio entre el Ministerio de Salud (MINSA) y el Fondo de Cooperación para el Desarrollo Social (FONCONDES). Una tarjeta que ella no podía entender, pues es analfabeta.</p><p>En la tarjeta se lee que a la señora Victoria Ccoya la CAPTARON en Enero de 1996 como parte del programa PLANIHUAN, un programa de reforzamiento del Programa de Planificación Familiar realizada en el pequeño distrito de Huancarani.</p><br><img src='images/doc8.jpg' width='100%'/><br><p>Dice el reverso del documento: “Al presentar esta tarjeta, el usuario no realizará ningún pago por la primera atención en el Centro de Salud Huancarani, en el Programa de Planificación Familiar”. Entre los que firman la tarjeta se encuentran el Presidente del Núcleo Ejecutor PLANIHUAN, señor Tomás Condori, el Inspector del Convenio FONCODES,  doctor Félix Hidalgo Ramírez, y el Jefe en el año 1996 del Centro de Salud de Huancarani, doctor Carlos Zea Núñez.</p><br><img src='images/doc9.jpg' width='100%'/><br><p>El doctor Felix Hidalgo Ramírez dijo a La República que PLANIHUAN fue un proyecto creado por un grupo de profesionales del distrito de Huancarani, y que nunca hubo quejas por parte de las mujeres captadas para las ligaduras.</p><p>“El proyecto fue creado por un grupo de profesionales que trabajaban en la zona, debido a que las coberturas de planificación familiar eran bajas y se necesitaba reforzar al establecimiento de salud (Centro de Salud Huancarani)...Los casos para ligadura eran derivados a la ciudad del Cusco, al Hospital Regional”.</p><p>“Durante el tiempo que participe como inspector en la supervisión de las actividades del programa,  nunca observé ni escuché ninguna queja por parte de las usuarias ni de sus familias”.</p><p>Así mismo, La República visitó al doctor Carlos Zea Núñez, jefe en 1996 del Centro de Salud Huancarani.Para nuestra sorpresa, el doctor no recuerda que es PLANIHUAN, no recuerda esa tarjeta (en la que sale su firma), dice no saber nada de lo que le estamos hablando y mostrando.</p><p>“Yo quería tener más hijos”, relata acongojada la señora Victoria Ccoya.</p>"; 
}




