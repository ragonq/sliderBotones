/* Importando modulo */
import {gzs2_slider} from './js/modulo.slidergz2.min.js';

window.addEventListener('DOMContentLoaded',function(){
  gzs2_slider.defecto.habilitar_tiempo = true;
  gzs2_slider.defecto.tiempo = 3000;
  gzs2_slider.gzs2_motor();
});
