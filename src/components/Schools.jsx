import "./../style/Schools.css";
import { useNavigate } from "react-router-dom";
import sekolahPancoranMasData from "./../data/SekolahPancoranMas.json";
import { useState } from "react";
import Back from "./MapBack";

const Schools = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  console.log(search);
  console.log(sekolahPancoranMasData);

  return (
    <>
      <Back />

      <div className="table">
        <div className="container">
          <h1 className="header">Sekolah Pancoran Mas</h1>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Cari Sekolah di Pancoran Mas"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>

          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Nama Sekolah</th>
                <th>NPSN</th>
                <th>Status</th>
                <th>Alamat</th>
                <th>Kelurahan</th>
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
                    <td>{item.NamaSekolah}</td>
                    <td>{item.NPSN}</td>
                    <td>{item.Status}</td>
                    <td>{item.Alamat}</td>
                    <td>{item.Kelurahan}</td>
                  </tr>
                ))}

              {/* Tambahkan baris lebih banyak sesuai kebutuhan */}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={() => navigate("/map")}>See Map</button>
    </>
  );
};

export default Schools;
