import Vue from 'vue'

Vue.directive('vpshow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect();
    return !(rect.bottom < 0 || rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight-100)
  },

  bind(el, binding) {
    el.classList.add('before-enter');
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('animated');
        el.classList.add(binding.value);
        el.classList.remove('before-enter');
        binding.def.unbind(el, binding);
      }
    };
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})
