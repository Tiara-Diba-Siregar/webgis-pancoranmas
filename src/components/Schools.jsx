import React, { useState, useEffect, useRef } from "react";
import Back from "./MapBack";
import { Icon } from "@iconify/react";
import ReactPaginate from "react-paginate";
import sekolahPancoranMasData from "./../data/SekolahPancoranMas.json";
import "./../style/Schools.css";

const Schools = () => {
  const [search, setSearch] = useState("");
  const [displayedSchools, setDisplayedSchools] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const schoolsPerPage = 10;
  const pageCountRef = useRef(0);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    // Filter data berdasarkan pencarian
    const filteredSchools = sekolahPancoranMasData.filter((item) => {
      const lowerSearch = search.toLocaleLowerCase();
      return (
        lowerSearch === "" ||
        item.NamaSekolah.toLocaleLowerCase().includes(lowerSearch) ||
        item.NPSN.toString().includes(search) ||
        item.Status.toLocaleLowerCase().includes(lowerSearch)
      );
    });

    // Hitung jumlah halaman yang dibutuhkan berdasarkan jumlah sekolah yang difilter
    const pageCount = Math.ceil(filteredSchools.length / schoolsPerPage);

    // Atur data yang akan ditampilkan di halaman saat ini
    const displayed = filteredSchools.slice(
      currentPage * schoolsPerPage,
      (currentPage + 1) * schoolsPerPage
    );

    // Simpan hasil di state
    setDisplayedSchools(displayed);

    // Update pageCount jika diperlukan
    if (pageCount !== pageCountRef.current) {
      pageCountRef.current = pageCount;
    }
  }, [search, currentPage]);

  const displaySchools = displayedSchools.map((item) => {
    return (
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
    );
  });

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
            <tbody>{displaySchools}</tbody>
          </table>
          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCountRef.current}
              onPageChange={changePage}
              containerClassName={"paginationButton"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schools;
