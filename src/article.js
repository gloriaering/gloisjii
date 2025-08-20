// src/Article.js
import React, { useEffect } from "react";
import "./article.css";

function Article({ onBack }) {
  useEffect(() => {
    const starCount = 150;
    const starContainer = document.querySelector(".article-container");

    // Hapus bintang lama
    document.querySelectorAll(".article-container .star").forEach((el) =>
      el.remove()
    );

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="article-container">
      <h1 className="article-title">🌌 Artikel Pemrograman</h1>

      <div className="article-scroll">
        <div className="article-card">
          <h2>✨ Apa Itu Pemrograman?</h2>
          <p>
            Pemrograman adalah proses menulis, menguji, dan memelihara instruksi
            yang dimengerti oleh komputer agar dapat menjalankan tugas tertentu.
            Instruksi ini ditulis dalam bahasa pemrograman seperti Python, Java,
            C++, JavaScript, dan lainnya.
          </p>
          <p>
            Melalui pemrograman, kita dapat menciptakan aplikasi, website,
            sistem operasi, game, hingga teknologi berbasis kecerdasan buatan
            (Artificial Intelligence).
          </p>
        </div>

        <div className="article-card">
          <h2>🚀 Mengapa Belajar Pemrograman Penting?</h2>
          <ul>
            <li>
              <b>Masa Depan Digital:</b> Hampir semua bidang kini menggunakan
              teknologi digital, dan pemrograman menjadi keterampilan inti.
            </li>
            <li>
              <b>Kreativitas:</b> Dengan pemrograman, kita bisa membangun solusi
              unik sesuai kebutuhan.
            </li>
            <li>
              <b>Karier:</b> Banyak perusahaan mencari programmer untuk
              mengembangkan produk digital.
            </li>
            <li>
              <b>Pemecahan Masalah:</b> Pemrograman melatih logika dan kemampuan
              berpikir kritis.
            </li>
          </ul>
        </div>

        <div className="article-card">
          <h2>💡 Contoh Bidang Aplikasi Pemrograman</h2>
          <ul>
            <li>🌐 <b>Web Development</b> – Membuat website interaktif.</li>
            <li>📱 <b>Mobile Development</b> – Membangun aplikasi Android/iOS.</li>
            <li>🎮 <b>Game Development</b> – Menciptakan game 2D/3D.</li>
            <li>🤖 <b>Artificial Intelligence</b> – Membangun sistem cerdas.</li>
            <li>💾 <b>Software Engineering</b> – Mengembangkan perangkat lunak.</li>
          </ul>
        </div>

        <div className="article-card">
          <h2>📘 Kesimpulan</h2>
          <p>
            Pemrograman adalah keterampilan penting yang membuka banyak peluang
            di era digital. Dengan pemahaman dasar logika, semangat belajar, dan
            konsistensi, siapa pun bisa menjadi programmer hebat.
          </p>
          <p>
            Dunia teknologi berkembang cepat, dan pemrograman adalah kunci untuk
            ikut berperan dalam membentuk masa depan 🌟.
          </p>
        </div>
      </div>

      <button className="btn-glow" onClick={onBack}>
        ⬅ Kembali ke Home
      </button>
    </div>
  );
}

export default Article;
