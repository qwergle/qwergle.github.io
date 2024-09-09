const cast = document.getElementById("cast");
const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
    if (cast != null && cast.files.length != 0) {
        const data = cast.files[0];
        data.text().then((text) => {
            const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src='https://cdn.jsdelivr.net/npm/asciinema-player@3.8.0/dist/bundle/asciinema-player.min.js'></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/asciinema-player@3.8.0/dist/bundle/asciinema-player.min.css">
  </head>
  <div id="demo"></div>
  <script>
AsciinemaPlayer.create({ data: ${JSON.stringify(text)} }, document.getElementById('demo'));
  </script>
</html>`;
            var download_element = document.createElement('a');
            download_element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
            download_element.setAttribute('download', "cast.html");
            download_element.click();
        });
    }
});