function genPDF() {
  var doc = new jsPDF();
  var content = document.getElementById("pdf-link");

  html2canvas(document.body).then(function (canvas) {
    var img = canvas.toDataURL('image/png');
    var doc = new jsPDF();
    doc.addImage(img, 'JPEG', -2, 0, 215, 275);
    doc.save('Andrea Di Benedetto CV.pdf');
  });
}
