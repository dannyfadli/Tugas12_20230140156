function tampilkanData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jurusan = document.getElementById("jurusan").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;
  const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
  const alamat = document.getElementById("alamat").value;

  alert(
    "Nama       : " + nama +
    "\nNIM        : " + nim +
    "\nJurusan    : " + jurusan +
    "\nAngkatan   : " + angkatan +
    "\nTanggal    : " + tanggal +
    "\nPeminatan  : " + peminatan +
    "\nAlamat     : " + alamat
  );
}
