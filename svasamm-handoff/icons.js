/* Lucide icon loader — fills <span data-icon="truck"> with an inline SVG at
   stroke-width 1.5 (Industry's icon rule). Writes into the span's innerHTML
   rather than replacing the node, so React-rendered DOM stays intact. */
(function () {
  function pascal(n) {
    return n.replace(/(^|-)([a-z0-9])/g, function (m, a, b) { return b.toUpperCase(); });
  }
  function ser(node) {
    if (typeof node === 'string') return node;
    var tag = node[0], attrs = node[1] || {}, kids = node[2] || [], s = '<' + tag;
    for (var k in attrs) s += ' ' + k + '="' + String(attrs[k]).replace(/"/g, '&quot;') + '"';
    s += '>';
    for (var i = 0; i < kids.length; i++) s += ser(kids[i]);
    return s + '</' + tag + '>';
  }
  function build(name) {
    var L = window.lucide;
    if (!L || !L.icons) return '';
    var ico = L.icons[pascal(name)];
    if (!ico) return '';
    var attrs = {};
    for (var k in ico[1]) attrs[k] = ico[1][k];
    attrs['stroke-width'] = 1.75;
    attrs.width = '100%';
    attrs.height = '100%';
    return ser(['svg', attrs, ico[2]]);
  }
  window.svIcons = function (root) {
    var nodes = (root || document).querySelectorAll('[data-icon]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], want = el.getAttribute('data-icon');
      if (!want || el.getAttribute('data-icon-done') === want) continue;
      var html = build(want);
      if (html) { el.innerHTML = html; el.setAttribute('data-icon-done', want); }
    }
  };
  (function boot() {
    if (window.lucide && window.lucide.icons) window.svIcons();
    else setTimeout(boot, 60);
  })();
})();
