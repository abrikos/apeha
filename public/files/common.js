$(document).ready(function(){
//byid("zayavka").style.display = '';
$('#div_nick').mouseenter(function() {
	$('#input_img').css({'visibility':'hidden'});
	$('#input_nick').css({'visibility':'visible'});
	});
$('#div_nick').mouseleave(function() {
	if (!$('#input_nick').val())
		{
		$('#input_img').css({'visibility':'visible'});
		$('#input_nick').css({'visibility':'hidden'});
		}
	});

$('#div_email').mouseenter(function() {
	$('#email_img').css({'visibility':'hidden'});
	$('#input_email').css({'visibility':'visible'});
	});
$('#div_email').mouseleave(function() {
	if (!$('#input_email').val())
		{
		$('#email_img').css({'visibility':'visible'});
		$('#input_email').css({'visibility':'hidden'});
		}
	});

$('#div_pwd1').mouseenter(function() {
	$('#pwd1_img').css({'visibility':'hidden'});
	$('#input_pwd1').css({'visibility':'visible'});
	});
$('#div_pwd1').mouseleave(function() {
	if (!$('#input_pwd1').val())
		{
		$('#pwd1_img').css({'visibility':'visible'});
		$('#input_pwd1').css({'visibility':'hidden'});
		}
	});

$('#div_pwd2').mouseenter(function() {
	$('#pwd2_img').css({'visibility':'hidden'});
	$('#input_pwd2').css({'visibility':'visible'});
	});
$('#div_pwd2').mouseleave(function() {
	if (!$('#input_pwd2').val())
		{
		$('#pwd2_img').css({'visibility':'visible'});
		$('#input_pwd2').css({'visibility':'hidden'});
		}
	});
	
	
$('div#zayavka').css({'display':'block'});
$('.topdiv').each(function() {
	$(this).mouseenter( function() {
		$(this).children('div.zamkam').css({'background':'url(i/zamkam_button_copy.png) no-repeat'});
		});
	$(this).mouseleave( function() {
		$(this).children('div.zamkam').css({'background':'url(i/zamkam_button.png) no-repeat'});
		});
//	$(this).children('div.submenu').css({'display':'inherit'});
//	$(this).click(function() {
//		$(this).children('div.submenu').slideToggle("slow");
//		});
	$(this).children('div.submenu_mag').css({'display':'inherit'});
	$(this).click(function() {
		$(this).children('div.submenu_mag').slideToggle("slow");
		});

	});
$('.zamkam').each(function() {
	$(this).mouseenter( function() {
		$(this).css({'background':'url(i/zamkam_button_copy.png) no-repeat'});
		});
	$(this).mouseleave( function() {
		$(this).css({'background':'url(i/zamkam_button.png) no-repeat'});
		});
	});
$('.int_txt').each(function() {
	if($(this).children().height() > 16)
		{
		var value = $(this).children().html();
		var i = 0;
		var temp = '';
		var res;
		$(this).children().html('');
		while ($(this).children().height() <= 16)
			{
			res = temp;
			temp = temp + value[i];
			$(this).children().html(temp+'...');
			i = i+1;
			}
		$(this).children().html(res+'...');
		}
	$(this).mouseenter( function() {
		$(this).parent().css({'background':'url(i/simple_button_copy.png) no-repeat'});
		});
	$(this).mouseleave( function() {
		$(this).parent().css({'background':'url(i/simple_button.png) no-repeat'});
		});
	});

	
$('.help').each(function() {
	$(this).mouseenter( function() {
		$(this).css({'background':'url(i/vopros-a.png) no-repeat'});
		});
	$(this).mouseleave( function() {
		$(this).css({'background':'url(i/vopros.png) no-repeat'});
		});
	});
	
	
$('.int_txt-a').each(function() {
	if($(this).children().height() > 16)
		{
		var value = $(this).children().html();
		var i = 0;
		var temp = '';
		var res;
		$(this).children().html('');
		while ($(this).children().height() <= 16)
			{
			res = temp;
			temp = temp + value[i];
			$(this).children().html(temp+'...');
			i = i+1;
			}
		$(this).children().html(res+'...');
		}
	});
	
$('.big_simple_button').each(function() {
	$(this).mouseenter( function() {
		$(this).css({'background':'url(i/simple_button_big_copy.png) no-repeat'});
	});	
	$(this).mouseleave( function() {
		$(this).css({'background':'url(i/simple_button_big.png) no-repeat'});
	});
});

$('div.button').each(function() {
	$(this).mouseenter( function() {
		$(this).children('div.button_left').css({'background':'url(i/left_mini_b_act.png) no-repeat'});
		$(this).children('div.button_middle').css({'background':'url(i/center_mini_b_act.png) repeat-x'});
		$(this).children('div.button_right').css({'background':'url(i/right_mini_b_act.png) no-repeat'});
		});
	$(this).mouseleave( function() {
		$(this).children('div.button_left').css({'background':'url(i/left_mini_b.png) no-repeat'});
		$(this).children('div.button_middle').css({'background':'url(i/center_mini_b.png) repeat-x'});
		$(this).children('div.button_right').css({'background':'url(i/right_mini_b.png) no-repeat'});
		});

	});

$('div#reload').mouseenter( function() {
	$('div#reload').css({'background':'url(i/reload_act.png) no-repeat'});
	});
$('div#reload').mouseleave( function() {
	$('div#reload').css({'background':'url(i/reload.png) no-repeat'});
	});
	
$('.topdiv').each(function() {
	$(this).children('div.submenu').css({'display':'none'});
	$(this).children('div.submenu_mag').css({'display':'none'});
	});
$('#main').height($(window).height()-193);
$('#mainmag').height($(window).height()-173);
$('#main2').height($(window).height()-150);
$('#main').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
$('#mainmag').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
$('#mainn').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
$('#main2').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
$('#main_table').height($(window).height());
if (jQuery('#maindiv'))
	{
	jQuery('#maindiv').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
	}	
var mid;
$('.input_area').each(function() {
	mid = $(this).children('.mid_area');
	$(this).children('.width_area').each(function() {
		$(this).width(mid.width());
		});
	$(this).children('.height_area').each(function() {
		$(this).height(mid.height());
		});
	});

$('.battle_div').each(function() {
	$(this).height($('#battle_div_mid').height());
});	

$('#top_list').width($(window).width()-149);
$('#bot_list').width($(window).width()-100);
$('#middle_list').width($(window).width()-82);
if ($('#middle_list').height() < $(window).height()-104)
	{
	$('#middle_list').height($(window).height()-104);
	}
$('#middle_list1').width($(window).width()-82);
$('#middle_list1').height($(window).height()-104);
$('#left_list_middle').height($('#middle_list').height());
$('#right_list_middle').height($('#middle_list').height());

$('#left_list_middle1').height($('#middle_list1').height());
$('#right_list_middle1').height($('#middle_list1').height());

if ($('#rulon_table').height() < $(window).height()-217)
	{
	$('#rulon_table').height($(window).height()-217);
	}

	
$('.info_area').each(function() {
//	$(this).children('.info_area_mid').width($(window).width() - 540);
	mid = $(this).children('.info_area_mid');
	$(this).children('.left_info_ramka').each(function() {
		$(this).height(mid.height());
		});
	$(this).children('.top_info_ramka').each(function() {
		$(this).width(mid.width());
		});
	});

if (screen.availWidth < 1500)
	{
	$('#chats').width(screen.availWidth-120);
	$('#actchat').width(screen.availWidth-120);
	}
else
	{
	$('#chats').width(1300);
	$('#actchat').width(1300);
	}
$('#chat').width($('#chats').width() * 0.7);
$('#list').width($('#chats').width() * 0.3);

$('div#zayavka').css({'display':'none'})
});

var fname=(document.forms.length>1)?'KForm':0;

function goform(url,post)
{
if(url.indexOf('.')==-1)
	{ url+=".html"; }
if (post == 1)
	{ document.forms[fname].method='POST'; }
else
	{ document.forms[fname].method='GET'; }
document.forms[fname].action=url;
document.forms[fname].submit();
}

function gourl(url)
{
if(url.indexOf('.')==-1)
	{ url+=".html"; }
window.location.href=url;
}

function byid(id)
{ return document.getElementById(id); }


function convertString(str){
	var query=""
	for (i=0;i<str.length;i++){
		var n=str.charCodeAt(i)
		if (n>=0x410&&n<=0x44F) n-=0x350
		else if (n==0x451) n=0xB8
		else if (n==0x401) n=0xA8
		query=query+String.fromCharCode(n)
	} 
	return escape(query); 
}

function chkR(){
	if(window.refreshed){
		return false
	}else{
		window.refreshed=true
	}
	return true
}
function goR(url){
	if(!window.refreshed){
		window.refreshed=true
		location.href=url
	}
}
function goRC(url){
	if(!window.refreshed){
		window.refreshed=true
		location.href=url+((url.indexOf('?')==-1)?'?':'&')+'xdac='+Math.random()
	}
}

function jsquote(str)
{
str = str.toString();
return str.replace(/'/g,'&#39;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/&/g,'&amp;');
}

function chkpress(obj,elt){
	var elt=obj.nextSibling
	obj.className=(elt.value==1)?
		obj.className.replace(/1$/,'0'):
		obj.className.replace(/0$/,'1')
	elt.value=1-elt.value
}
function radiopress(obj){
	var form=document.forms[0]
	obj.id.match(/^(.*)\-(.*)$/)
	var elt=RegExp.$1
	var val=RegExp.$2
	gebi(elt+'-'+form.elements[elt].value).className=
		gebi(elt+'-'+form.elements[elt].value).className.replace(/1$/,'0')
	form.elements[elt].value=val
	obj.className=obj.className.replace(/0$/,'1')
}

function newWin(goL,id,ww,wh)
{
ww=ww||screen.width*.9
wh=wh||screen.height*.9
var wbx=Math.round((screen.width-ww)/2)*.45
var wby=Math.round((screen.height-wh)/2)*.45
var pos=(document.all)?'left='+wbx+',top='+wby+',':'screenX='+wbx+',screenY='+wby+','
var nw=window.open(goL,'Win'+id,'width='+ww+',height='+wh+','+pos+'toolbar=0,scrollbars=0,resizable=1,status=0')
nw.moveTo(0,0)
nw.resizeTo(screen.availWidth, screen.availHeight)
}

function newWin2(goL,id,ww,wh)
{
ww=ww||screen.width*.9
wh=wh||screen.height*.9
var wbx=Math.round((screen.width-ww)/2)*.45
var wby=Math.round((screen.height-wh)/2)*.45
var pos=(document.all)?'left='+wbx+',top='+wby+',':'screenX='+wbx+',screenY='+wby+','
var nw=window.open(goL,'Win'+id,'width='+ww+',height='+wh+','+pos+'toolbar=0,scrollbars=1,resizable=1,status=0')
nw.moveTo(wbx,wby)
}

function fsetTime(stm)
{
//if(!top.frames['d_menu']) return 0;
//if(!top.frames['d_menu'].document.clock) return 0;
if (parent.document.clock !== undefined && parent.document.clock.SetVariable !== undefined)
    parent.document.clock.SetVariable("servTime",stm);
}

var hloc;
var hlast;
var hpos = 0;
var tID;

function preRoll(c, r)
{
//document.getElementById('rollingscroll').innerHTML = c;
//window.clearTimeout(tID);
//tout = 0;
//if (c) tout = 4000;
//tID = window.setTimeout("startRoll('" + r + "')", tout);
}

function startRoll(lc)
{
//hpos = 0;
//if(lc != '')
//	{
//	hloc = lc;
//	document.getElementById('rollingscroll').alt = hloc;
//	document.getElementById('rollingscroll').title = hloc;
//	}
//hlast = hloc.replace(/.*:\s*/, '');
//if(hlast.length > 22)
//	hlast = hlast.substr(hlast.length - 22, 22);
//window.clearTimeout(tID);
//Roll(2000);
}

function Roll(tout)
{
//var set = hloc.substr(hpos, 22);
//if(set != hlast)
//	{
//	hpos++;
//	tID = setTimeout("Roll(150)", tout);
//	}
//document.getElementById('rollingscroll').innerHTML = set;
}

function butact(name)
{
var st = document.getElementById(name).style;
if(!st.display)
	{ st.display='none'; }
else
	{ st.display=''; }
$('#main').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});
}

function shBlock(id)
{
var name = '#BLC_'+id;
if (id == 'par' && act_level == 55)
	{
	persact("actUser-NextStepAducation=56");
	}
if (id == 'par' && act_level == 151)
	{
	persact("actUser-NextStepAducation=152");
	}
	
byid('BLC_pers').style.display='none'
byid('BLC_par').style.display='none'
byid('BLC_stat').style.display='none'
byid('mana').style.display='none'
byid('hp').style.display='none'
byid('BUTT_pers').src=byid('BUTT_pers').src.replace(/-a\.png$/,'.png')
byid('BUTT_par').src=byid('BUTT_par').src.replace(/-a\.png$/,'.png')
byid('BUTT_stat').src=byid('BUTT_stat').src.replace(/-a\.png$/,'.png')
byid('BUTT_pers').src=byid('BUTT_pers').src.replace(/-b\.png$/,'.png')
byid('BUTT_par').src=byid('BUTT_par').src.replace(/-b\.png$/,'.png')
byid('BUTT_stat').src=byid('BUTT_stat').src.replace(/-b\.png$/,'.png')
byid('BLC_'+id).style.display='block'
//$(name).css({'display':'block'});
if (id == 'par' || id == 'stat')
	{
	if (id == 'par')
		{
		if (jQuery('#BLC_stat').parent('div.jScrollPaneContainer').html())
			{
			jQuery('#BLC_stat').parent('div.jScrollPaneContainer').css({'display':'none'});
			}
		if (jQuery('#BLC_par').parent('div.jScrollPaneContainer').html())
			{
			jQuery('#BLC_par').parent('div.jScrollPaneContainer').css({'display':'block'});
			}
		else
			{
			jQuery(name).jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});	
			}
		}
	if (id == 'stat')
		{
		if (jQuery('#BLC_par').parent('div.jScrollPaneContainer').html())
			{
			jQuery('#BLC_par').parent('div.jScrollPaneContainer').css({'display':'none'});
			}
		if (jQuery('#BLC_stat').parent('div.jScrollPaneContainer').html())
			{
			jQuery('#BLC_stat').parent('div.jScrollPaneContainer').css({'display':'block'});
			}
		else
			{
			jQuery(name).jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});	
			}
		}
//	jQuery(name).jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});	
	}
byid('BUTT_'+id).src=byid('BUTT_'+id).src.replace(/\.png$/,'-a.png')
if (id == 'pers')
	{	
	byid('mana').style.display='block'
	byid('hp').style.display='block'
	}
}


function shBlocknew(id)
{
var name = '#BLC1_'+id;
byid('BLC1_pers').style.display='none'
byid('BLC1_par').style.display='none'
byid('BLC1_stat').style.display='none'
if (byid('top_blocks'))
	{
	byid('top_blocks').style.display='none';
	}
//byid('mana').style.display='none'
//byid('hp').style.display='none'
byid('BUTT_pers').src=byid('BUTT_pers').src.replace(/-a\.png$/,'.png')
byid('BUTT_par').src=byid('BUTT_par').src.replace(/-a\.png$/,'.png')
byid('BUTT_stat').src=byid('BUTT_stat').src.replace(/-a\.png$/,'.png')
byid('BUTT_pers').src=byid('BUTT_pers').src.replace(/-b\.png$/,'.png')
byid('BUTT_par').src=byid('BUTT_par').src.replace(/-b\.png$/,'.png')
byid('BUTT_stat').src=byid('BUTT_stat').src.replace(/-b\.png$/,'.png')
if (id == 'par' || id == 'stat')
	{	
	byid('top_blocks').style.display='block';
	}
byid('BLC1_'+id).style.display='block'
//$(name).css({'display':'block'});
//if (id == 'par' || id == 'stat')
//	{	
//	jQuery('#top_blocks').jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});	
//	}
//if (id == 'stat')
//	{	jQuery(name).jScrollPane({showArrows:true,scrollbarWidth:21,dragMaxHeight:21});	}
byid('BUTT_'+id).src=byid('BUTT_'+id).src.replace(/\.png$/,'-a.png')
//if (id == 'pers')
//	{	
//	byid('mana').style.display='block'
//	byid('hp').style.display='block'
//	}
}


function printTime(s)
{
if (s < 0) s=0;
var min = Math.floor(s/60);
var sec = s - min*60;
return min + ":" + ((sec < 10)?('0' + sec):sec);
}

var RaceNames = new Array('','Hm','Or','Gn','El','Hb','Dr','Ab','Wm','');
var RaceFNames = new Array('Читер','Человек','Орк','Гном','Эльф','Хоббит','Дракон','Животное бойцовое','Боевая машина','');
var InjuryLevels = new Array('Легкая травма','Средняя травма','Тяжелая травма');

var cht=['h','b','r','l','f'];
var fcht=['head','body','rhand','lhand','foot'];

function injColor(inj)
{
var ic=['green','yellow','orange','red']
if(inj>3) inj=3
return ic[inj]
}
	
function injTitle(inj)
{
var ic=['Часть тела в порядке','Часть тела легко повреждена','Часть тела тяжело повреждена','Часть тела не функционирует']
if(inj>3) inj=3
return ic[inj]
}

function OpenFullWindow(url)
{
nw=window.open(url,'_blank','');
nw.moveTo(0,0);
nw.resizeTo(screen.availWidth, screen.availHeight);
}

function SendForm ()
{
document.getElementById('MForm').action="https://kovcheg.apeha.ru/user_add_3.html";
document.getElementById('MForm').submit();
}
