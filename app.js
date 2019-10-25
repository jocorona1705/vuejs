const app = new Vue({
  el: "#app",
  data: {
    mensaje: 'Hola Vue.js',
    contador: 0
  },
  computed: {
    invertido() {
      return this.mensaje.split('').reverse().join('') //recorta el string, lo voltea y luego lo junta
    },
    color() {
      return {
        'bg-success': this.contador <= 10,
        'bg-warning': this.contador > 10 && this.contador < 20,
        'bg-danger': this.contador >= 20
      }
    }
  }
});
