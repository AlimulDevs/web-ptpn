import React from "react";
import dynamic from "next/dynamic";

const LazyLoadedComponent = dynamic(
  () => import("../../components/lazyLoading/lazyLoading"),
  {
    loading: () => <p>Loading...</p>, // Komponen ini ditampilkan saat komponen sedang dimuat
    ssr: false, // Atur ke false jika Anda ingin melazy load komponen hanya di sisi klien
  }
);

function Tes() {
  return (
    <div>
      <h1>Tes</h1>
      <LazyLoadedComponent />
    </div>
  );
}

export default Tes;
