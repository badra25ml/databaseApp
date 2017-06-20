// language selector

$(function() {
 $('select').change(function(event){
  var language = this.value;
   $('.lang').each(function(index, element){
    $(this).text(arrLang[language][$(this).attr('key')]);
    $(this).text(arrLang[language][$(this).attr('placeholder')]);
   })
  //  $('placeholder').each(function(index, element){
  //    $(this).text(arrLang[lang][$(this).attr('key')])
  //  })
 })
});
