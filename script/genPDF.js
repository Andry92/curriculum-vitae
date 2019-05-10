function genPDF() {
  var doc = new jsPDF();
  var content = document.getElementById("pdf-link");

  html2canvas(document.body).then(function (canvas) {
    var img = canvas.toDataURL('image/png');
    var doc = new jsPDF("p", "mm", "a4");

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    console.log("width: "+width);
    console.log("height: "+height);

    doc.addImage(img, 'JPEG', -2, 0, width, height);
    doc.save('Andrea Di Benedetto CV.pdf');
  });
}
