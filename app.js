let totalPemasukan = 0;

function tambahTransaksi() {
  const menuItem = document.getElementById('menuItem').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  const [nama, harga] = menuItem.split('-');
  const hargaNumber = parseInt(harga);
  const total = hargaNumber * quantity;

  const tbody = document.getElementById('transaksiBody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${nama}</td>
    <td>${quantity}</td>
    <td>Rp${hargaNumber}</td>
    <td>Rp${total}</td>
  `;
  tbody.appendChild(row);

  totalPemasukan += total;
  document.getElementById('totalPemasukan').innerText = totalPemasukan;
}
