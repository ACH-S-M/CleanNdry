<?php
$hargaParkir = [
    'Motor' => 2000,
    'Mobil' => 5000,
    'Truk' => 10000
];

$totalBayar = 0;
$kembalian = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $jenis = $_POST['jenis'];
    $bayar = (int) $_POST['uang'];
    $totalBayar = $hargaParkir[$jenis] ?? 0;
    $kembalian = $bayar - $totalBayar;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Form Parkir Kendaraan</title>
    <style>
        body { font-family: Arial; background: #eef; padding: 30px; }
        form { background: #fff; padding: 20px; border-radius: 8px; max-width: 400px; margin: auto; }
        label, select, input { display: block; width: 100%; margin-bottom: 10px; }
        .btn { background: #0af; color: white; border: none; padding: 10px; cursor: pointer; }
        .btn:hover { background: #08c; }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Form Parkir Kendaraan</h2>
        <label>Plat Nomor Kendaraan</label>
        <input type="text" name="plat" required>

        <label>Jenis Kendaraan</label>
        <select name="jenis" required>
            <option value="">Pilih</option>
            <option value="Motor">Motor</option>
            <option value="Mobil">Mobil</option>
            <option value="Truk">Truk</option>
        </select>

        <label>Uang Bayar (Rp)</label>
        <input type="number" name="uang" required>

        <p><strong>Total Bayar:</strong> Rp <?= number_format($totalBayar) ?></p>
        <p><strong>Kembalian:</strong> Rp <?= number_format($kembalian) ?></p>

        <button class="btn" type="submit">Bayar</button>
    </form>
</body>
</html>
