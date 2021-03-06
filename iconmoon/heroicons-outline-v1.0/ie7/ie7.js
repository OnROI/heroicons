/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'heroicons-outline\'">' + entity + '</span>' + html;
	}
	var icons = {
		'hero-outline-adjustments': '&#xe900;',
		'hero-outline-annotation': '&#xe901;',
		'hero-outline-archive': '&#xe902;',
		'hero-outline-arrow-circle-down': '&#xe903;',
		'hero-outline-arrow-circle-left': '&#xe904;',
		'hero-outline-arrow-circle-right': '&#xe905;',
		'hero-outline-arrow-circle-up': '&#xe906;',
		'hero-outline-arrow-down': '&#xe907;',
		'hero-outline-arrow-left': '&#xe908;',
		'hero-outline-arrow-narrow-down': '&#xe909;',
		'hero-outline-arrow-narrow-left': '&#xe90a;',
		'hero-outline-arrow-narrow-right': '&#xe90b;',
		'hero-outline-arrow-narrow-up': '&#xe90c;',
		'hero-outline-arrow-right': '&#xe90d;',
		'hero-outline-arrow-up': '&#xe90e;',
		'hero-outline-at-symbol': '&#xe90f;',
		'hero-outline-bell': '&#xe910;',
		'hero-outline-book-open': '&#xe911;',
		'hero-outline-bookmark': '&#xe912;',
		'hero-outline-briefcase': '&#xe913;',
		'hero-outline-calendar': '&#xe914;',
		'hero-outline-camera': '&#xe915;',
		'hero-outline-cash': '&#xe916;',
		'hero-outline-chart-pie': '&#xe917;',
		'hero-outline-chat': '&#xe918;',
		'hero-outline-check': '&#xe919;',
		'hero-outline-check-circle': '&#xe91a;',
		'hero-outline-cheveron-down': '&#xe91b;',
		'hero-outline-cheveron-left': '&#xe91c;',
		'hero-outline-cheveron-right': '&#xe91d;',
		'hero-outline-cheveron-up': '&#xe91e;',
		'hero-outline-clipboard': '&#xe91f;',
		'hero-outline-clipboard-check': '&#xe920;',
		'hero-outline-clipboard-copy': '&#xe921;',
		'hero-outline-clipboard-list': '&#xe922;',
		'hero-outline-clock': '&#xe923;',
		'hero-outline-cloud-download': '&#xe924;',
		'hero-outline-cloud-upload': '&#xe925;',
		'hero-outline-code': '&#xe926;',
		'hero-outline-cog': '&#xe927;',
		'hero-outline-collection': '&#xe928;',
		'hero-outline-color-swatch': '&#xe929;',
		'hero-outline-credit-card': '&#xe92a;',
		'hero-outline-currency-dollar': '&#xe92b;',
		'hero-outline-currency-euro': '&#xe92c;',
		'hero-outline-currency-pound': '&#xe92d;',
		'hero-outline-currency-rupee': '&#xe92e;',
		'hero-outline-currency-yen': '&#xe92f;',
		'hero-outline-document': '&#xe930;',
		'hero-outline-document-add': '&#xe931;',
		'hero-outline-document-download': '&#xe932;',
		'hero-outline-document-duplicate': '&#xe933;',
		'hero-outline-document-remove': '&#xe934;',
		'hero-outline-dots-circle-horizontal': '&#xe935;',
		'hero-outline-dots-horizontal': '&#xe936;',
		'hero-outline-dots-vertical': '&#xe937;',
		'hero-outline-download': '&#xe938;',
		'hero-outline-duplicate': '&#xe939;',
		'hero-outline-emoji-happy': '&#xe93a;',
		'hero-outline-emoji-sad': '&#xe93b;',
		'hero-outline-exclamation': '&#xe93c;',
		'hero-outline-exclamation-circle': '&#xe93d;',
		'hero-outline-external-link': '&#xe93e;',
		'hero-outline-eye': '&#xe93f;',
		'hero-outline-filter': '&#xe940;',
		'hero-outline-flag': '&#xe941;',
		'hero-outline-folder': '&#xe942;',
		'hero-outline-globe': '&#xe943;',
		'hero-outline-globe-alt': '&#xe944;',
		'hero-outline-hashtag': '&#xe945;',
		'hero-outline-heart': '&#xe946;',
		'hero-outline-home': '&#xe947;',
		'hero-outline-inbox': '&#xe948;',
		'hero-outline-inbox-in': '&#xe949;',
		'hero-outline-information-circle': '&#xe94a;',
		'hero-outline-light-bulb': '&#xe94b;',
		'hero-outline-lightning-bolt': '&#xe94c;',
		'hero-outline-link': '&#xe94d;',
		'hero-outline-location-marker': '&#xe94e;',
		'hero-outline-lock-closed': '&#xe94f;',
		'hero-outline-lock-open': '&#xe950;',
		'hero-outline-mail': '&#xe951;',
		'hero-outline-mail-open': '&#xe952;',
		'hero-outline-menu': '&#xe953;',
		'hero-outline-menu-alt-1': '&#xe954;',
		'hero-outline-menu-alt-2': '&#xe955;',
		'hero-outline-menu-alt-3': '&#xe956;',
		'hero-outline-menu-alt-4': '&#xe957;',
		'hero-outline-minus-circle': '&#xe958;',
		'hero-outline-moon': '&#xe959;',
		'hero-outline-office-building': '&#xe95a;',
		'hero-outline-paper-clip': '&#xe95b;',
		'hero-outline-pencil': '&#xe95c;',
		'hero-outline-pencil-alt': '&#xe95d;',
		'hero-outline-phone': '&#xe95e;',
		'hero-outline-phone-incoming': '&#xe95f;',
		'hero-outline-phone-outgoing': '&#xe960;',
		'hero-outline-photograph': '&#xe961;',
		'hero-outline-plus': '&#xe962;',
		'hero-outline-plus-circle': '&#xe963;',
		'hero-outline-printer': '&#xe964;',
		'hero-outline-qrcode': '&#xe965;',
		'hero-outline-question-mark-circle': '&#xe966;',
		'hero-outline-receipt-refund': '&#xe967;',
		'hero-outline-refresh': '&#xe968;',
		'hero-outline-reply': '&#xe969;',
		'hero-outline-scale': '&#xe96a;',
		'hero-outline-search': '&#xe96b;',
		'hero-outline-selector': '&#xe96c;',
		'hero-outline-share': '&#xe96d;',
		'hero-outline-shield-check': '&#xe96e;',
		'hero-outline-shield-exclamation': '&#xe96f;',
		'hero-outline-sort-ascending': '&#xe970;',
		'hero-outline-sort-descending': '&#xe971;',
		'hero-outline-sparkles': '&#xe972;',
		'hero-outline-sun': '&#xe973;',
		'hero-outline-switch-horizontal': '&#xe974;',
		'hero-outline-switch-vertical': '&#xe975;',
		'hero-outline-tag': '&#xe976;',
		'hero-outline-template': '&#xe977;',
		'hero-outline-ticket': '&#xe978;',
		'hero-outline-translate': '&#xe979;',
		'hero-outline-trash': '&#xe97a;',
		'hero-outline-trending-down': '&#xe97b;',
		'hero-outline-trending-up': '&#xe97c;',
		'hero-outline-upload': '&#xe97d;',
		'hero-outline-user': '&#xe97e;',
		'hero-outline-user-add': '&#xe97f;',
		'hero-outline-user-circle': '&#xe980;',
		'hero-outline-user-group': '&#xe981;',
		'hero-outline-user-remove': '&#xe982;',
		'hero-outline-users': '&#xe983;',
		'hero-outline-view-boards': '&#xe984;',
		'hero-outline-view-list': '&#xe985;',
		'hero-outline-volume-off': '&#xe986;',
		'hero-outline-volume-up': '&#xe987;',
		'hero-outline-x': '&#xe988;',
		'hero-outline-x-circle': '&#xe989;',
		'hero-outline-zoom-in': '&#xe98a;',
		'hero-outline-zoom-out': '&#xe98b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/hero-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
