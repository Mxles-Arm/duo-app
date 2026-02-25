import vitaminImg from "../image/Vitamin.png";

export default function Vitamin() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🧪 Virus (ไวรัส) — Vitamin</div>
        <div className="panel__tag">Threat Class</div>
      </div>

      {/* ✅ ใส่รูปตรงนี้ */}
      <img
        src={vitaminImg}
        alt="Virus"
        className="threat-image"
      />

      <div className="block">
        <h3>คืออะไร</h3>
        <p>
          Virus (ไวรัส) คือโปรแกรมอันตรายที่ต้องเกาะกับไฟล์หรือโปรแกรมอื่น
          และทำงานเมื่อมีการเปิดไฟล์นั้น
        </p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>ทำให้ไฟล์เสียหาย</li>
          <li>โปรแกรมทำงานผิดปกติ</li>
          <li>แพร่ผ่านไฟล์หรือแฟลชไดรฟ์</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>สแกนไวรัสสม่ำเสมอ</li>
          <li>ไม่เปิดไฟล์ไม่รู้ที่มา</li>
          <li>สำรองข้อมูล (Backup)</li>
        </ul>
      </div>
    </section>
  );
}