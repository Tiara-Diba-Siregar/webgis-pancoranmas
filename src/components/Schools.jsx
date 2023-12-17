import "./../style/Schools.css";
import sekolahPancoranMasData from "./../data/SekolahPancoranMas.json";
import { useState } from "react";
import Back from "./MapBack";
import { Icon } from "@iconify/react";

const Schools = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  console.log(sekolahPancoranMasData);

  return (
    <>
      <Back />

      <div className="schools-table">
        <div className="schools-container">
          <h1 className="schools-header">Sekolah Dasar di Pancoran Mas</h1>
          <form>
            <div className="schools-input-group">
              <Icon
                icon="iconamoon:search-bold"
                className="schools-search-icon"
              />

              <input
                type="text"
                className="schools-form-control"
                placeholder="Cari Sekolah..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>

          <table className="schools-table-result">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Sekolah</th>
                <th>NPSN</th>
                <th>Status</th>
                <th>Alamat</th>
                <th>Kelurahan</th>
                <th>R. Kelas</th>
                <th>Rombel</th>
                <th>Perpus</th>
                <th>Lab</th>
              </tr>
            </thead>
            <tbody>
              {sekolahPancoranMasData
                .filter((item) => {
                  const lowerSearch = search.toLocaleLowerCase();
                  return (
                    lowerSearch === "" ||
                    item.NamaSekolah.toLocaleLowerCase().includes(
                      lowerSearch
                    ) ||
                    item.NPSN.toString().includes(search) ||
                    item.Status.toLocaleLowerCase().includes(lowerSearch)
                  );
                })
                .map((item) => (
                  <tr key={item.No}>
                    <td>{item.No}</td>
                    <td>{item.NamaSekolah}</td>
                    <td>{item.NPSN}</td>
                    <td>{item.Status}</td>
                    <td>{item.Alamat}</td>
                    <td>{item.Kelurahan}</td>
                    <td>{item.Kelas}</td>
                    <td>{item.Rombel}</td>
                    <td>{item.Perpus}</td>
                    <td>{item.Lab}</td>
                  </tr>
                ))}

              {/* Tambahkan baris lebih banyak sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schools;
