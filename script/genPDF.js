function genPDF() {
  var doc = new jsPDF();
  var content = document.getElementById("pdf-link");

  html2canvas(document.body).then(function (canvas) {
    var img = canvas.toDataURL('image/png');
    var doc = new jsPDF();

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    doc.addImage(img, 'JPEG', -2, 0, width, height);
    doc.save('Andrea Di Benedetto CV.pdf');
  });
}
