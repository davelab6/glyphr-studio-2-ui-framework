function pickerpanel_hideAll() {
    var p1 = document.getElementById('pickerpanel-primary');
    var p2 = document.getElementById('pickerpanel-secondary');
    var p3 = document.getElementById('pickerpanel-tertiary');
    
    if(p1) p1.style.display = 'none';    
    if(p2) p2.style.display = 'none';    
    if(p3) p3.style.display = 'none';
    
    console.log('pickerpanel_hideAll');
}

function pickerpanel_show(id) {
    pickerpanel_hideAll();
    var p = document.getElementById(id);
    if(p) p.style.display = 'flex';
    
    console.log('pickerpanel_show: ' + id);
}

function drawPanelControls() {
    var re = '';
    re += '<button onclick="alert(\'search box for glyphs\');">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12">';
    re += '<path d="M7.5,0C5.015,0,3,2.015,3,4.5c0,0.987,0.327,1.892,0.866,2.634L0,11v1h1l3.866-3.866C5.608,8.673,6.513,9,7.5,9 C9.985,9,12,6.985,12,4.5S9.985,0,7.5,0z M7.5,7.6c-1.709,0-3.1-1.391-3.1-3.1s1.391-3.1,3.1-3.1s3.1,1.391,3.1,3.1 S9.209,7.6,7.5,7.6z"/>';
    re += '</svg>';
    re += '</button>';
    re += '<button onclick="alert(\'popout panel to a new window\');">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve">';
    re += '<polygon points="3,0.6 3,2 9,2 1,10 1,11 2,11 10,3 10,8 11.4,8 11.4,0.6 "/>';
    re += '</svg>';
    re += '</button>';
    re += '<button onclick="event.stopPropagation(); pickerpanel_hideAll();">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12"><polygon points="12,1 11,0 6,5 1,0 0,1 5,6 0,11 1,12 6,7 11,12 12,11 7,6 "/></svg>';
    re += '</button>';
    
    return re;
}

function drawGlyphTiles() {
    var basiclatin = ['0x0041','0x0042','0x0043','0x0044','0x0045','0x0046','0x0047','0x0048','0x0049','0x004A','0x004B','0x004C','0x004D','0x004E','0x004F','0x0050','0x0051','0x0052','0x0053','0x0054','0x0055','0x0056','0x0057','0x0058','0x0059','0x005A','0x0061','0x0062','0x0063','0x0064','0x0065','0x0066','0x0067','0x0068','0x0069','0x006A','0x006B','0x006C','0x006D','0x006E','0x006F','0x0070','0x0071','0x0072','0x0073','0x0074','0x0075','0x0076','0x0077','0x0078','0x0079','0x007A','0x0030','0x0031','0x0032','0x0033','0x0034','0x0035','0x0036','0x0037','0x0038','0x0039','0x0021','0x0022','0x0023','0x0024','0x0025','0x0026','0x0027','0x0028','0x0029','0x002A','0x002B','0x002C','0x002D','0x002E','0x002F','0x003A','0x003B','0x003C','0x003D','0x003E','0x003F','0x0040','0x005B','0x005C','0x005D','0x005E','0x005F','0x0060','0x007B','0x007C','0x007D','0x007E'];
	
    var re = '';
    var gn = '';
    
    for(var g=0; g<basiclatin.length; g++){
        gn = String.fromCharCode(basiclatin[g]);
        
        if(gn === 'G') re += '<div class="glyphtile selected"><div class="preview">';
        else re += '<div class="glyphtile"><div class="preview">';
        
        re += gn;
        re += '</div><div class="name">';
        re += gn;
        re += '</div></div>';
    }
    
    return re;
}