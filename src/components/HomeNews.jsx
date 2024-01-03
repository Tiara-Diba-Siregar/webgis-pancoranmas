import React from "react";

const News = () => {
  return (
    <div id="news" className="news">
      <div className="news-container">
        <div className="news-title">
          <h2>NEWS</h2>
        </div>
        <div className="news-row">
          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news1.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://megapolitan.kompas.com/read/2022/05/11/15143191/pemkot-depok-belum-perbaiki-2-kelas-yang-ambruk-di-sdn-pancoran-mas-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Pemkot Depok Belum Perbaiki 2 Kelas yang Ambruk di SDN
                  Pancoran Mas 3
                </h3>
              </a>
            </div>
          </div>
          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news2.webp"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://berita.depok.go.id/siswa-sdn-pancoran-mas-01-senang-bisa-berkunjung-ke-perpustakaan-umum-depok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Siswa SDN Pancoran Mas 01 Senang Bisa Berkunjung ke
                  Perpustakaan Umum Depok
                </h3>
              </a>
            </div>
          </div>
          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news3.webp"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://berita.depok.go.id/resmikan-lima-sekolah-negeri-wali-kota-depok-wujud-kota-cerdas-berkarakter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Resmikan Lima Sekolah Negeri, Wali Kota Depok: Wujud Kota
                  Cerdas Berkarakter
                </h3>
              </a>
            </div>
          </div>
          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news4.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://news.republika.co.id/berita/s30642484/pemkot-bangun-smpn-30-depok-berbiaya-rp-19-miliar-di-pancoran-mas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Pemkot Bangun SMPN 30 Depok Berbiaya Rp 19 Miliar di Pancoran
                  Mas
                </h3>
              </a>
            </div>
          </div>

          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news5.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://depok.tribunnews.com/2023/03/04/sekolah-cakra-buana-kota-depok-mengadakan-festival-gembira-belajar-untuk-anak-dan-orang-tua"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Sekolah Cakra Buana Kota Depok Mengadakan Festival Gembira
                  Belajar untuk Anak dan Orang Tua
                </h3>
              </a>
            </div>
          </div>

          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news6.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://depok.tribunnews.com/2023/09/19/wakil-ketua-dprd-kota-depok-sebut-sumbangan-sukarela-di-sekolah-negeri-jadi-pungli-terselubung"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Wakil Ketua DPRD Kota Depok Sebut Sumbangan Sukarela di
                  Sekolah Negeri Jadi Pungli Terselubung
                </h3>
              </a>
            </div>
          </div>

          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news7.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://depok.tribunnews.com/2023/07/04/jadi-sekolah-inklusi-untuk-ppdb-2023-2024smp-negeri-22-depok-terimaanak-berkebutuhan-khusus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Jadi Sekolah Inklusi Untuk PPDB 2023-2024, SMP Negeri 22 Depok
                  Terima Anak Berkebutuhan Khusus
                </h3>
              </a>
            </div>
          </div>

          <div className="news-row-fill">
            <div className="news-image">
              <img
                src={process.env.PUBLIC_URL + "/img/news/news8.jpg"}
                alt="Description"
              />
            </div>
            <div className="news-row-title">
              <a
                href="https://depok.tribunnews.com/2023/03/04/sekolah-cakra-buana-depok-nilai-pentingnya-kolaborasi-dengan-orang-tua-guna-mengetahui-minat-anak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  Sekolah Cakra Buana Depok Nilai Pentingnya Kolaborasi dengan
                  Orang Tua Guna Mengetahui Minat Anak
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
