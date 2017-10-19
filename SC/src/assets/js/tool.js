import $ from 'jquery'
export function toast (msg, time, type) {
  $('<div class="modal toast ' + type + '">' + msg + '</div>').appendTo(document.body)
  setTimeout(function () {
    $('.toast').remove()
  }, time)
}
