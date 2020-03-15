$(document).ready(function () {
  const videoThemes = [
    "video/ocean/ocean",
    "video/First-row/First-row",
    "video/The-Slow-Dock/The-Slow-Dock"
  ];
  var numOfTheme = 0;
  console.log(videoThemes[numOfTheme]);
  $('.section').attr('data-vide-bg', videoThemes[numOfTheme]);
  $('button').on('click', function () {
    if(numOfTheme < 2) {
      numOfTheme++;
      $('.section').hide();
      $('.section').attr('data-vide-bg', videoThemes[numOfTheme]);
      $('.section').show();
    } else {
      numOfTheme = 0;
      $('.section').attr('data-vide-bg', videoThemes[numOfTheme]);
    }
  });
});