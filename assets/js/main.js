// Mobile navigation toggle + publication tag filter
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var chips = document.querySelectorAll('.pub-filters .chip');
  if (!chips.length) return;
  var pubs = document.querySelectorAll('.pub');
  var years = document.querySelectorAll('.pub-year');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.getAttribute('data-tag');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      pubs.forEach(function (p) {
        var tags = (p.getAttribute('data-tags') || '').split(' ');
        p.hidden = tag !== 'all' && tags.indexOf(tag) === -1;
      });
      years.forEach(function (y) {
        var group = y.nextElementSibling;
        var any = group && group.querySelector('.pub:not([hidden])');
        y.hidden = !any; if (group) group.hidden = !any;
      });
    });
  });
})();
