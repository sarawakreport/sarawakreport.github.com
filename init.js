$(function () {

	$('#countdown').countdown({
		until: new Date(2012, 3 - 1, 7), 
		layout: '<ul>{y<}<li>{yn} {yl}</li>{y>}{o<}<li><span="count">{on}</span> <small>{ol}</small></span></li>{o>}' + 
    '{d<}<li><span><span class="count">{dn}</span> <small>{dl}</small></span></li>{d>}{h<}<li><span><span class="count">{hn}</span> <small>{hl}</small></span></li>{h>}' + 
    '{m<}<li><span><span class="count">{mn}</span> <small>{ml}</small></span></li>{m>}{s<}<li><span><span class="count">{sn}</span> <small>{sl}</small></span></li>{s>}</ul>'
    });
	
});