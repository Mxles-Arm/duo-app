import horseImg from "../image/Horse.png";
export default function Horse() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🐴 Trojan (โทรจัน) — Horse</div>
        <div className="panel__tag">Threat Class</div>
      </div>
      {/* ✅ ใส่รูปตรงนี้ */}
      <img src={horseImg} alt="Horse" className="threat-image" />


      <div className="block">
        <h3>คืออะไร</h3>
        <p>
          Trojan คือมัลแวร์ที่ปลอมตัวเป็นโปรแกรมปกติ เพื่อหลอกให้ผู้ใช้ติดตั้ง
        </p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>เปิดช่องให้แฮกเกอร์เข้าควบคุมเครื่อง</li>
          <li>ติดตั้งมัลแวร์ตัวอื่นเพิ่ม</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>ดาวน์โหลดจากแหล่งที่เชื่อถือได้</li>
          <li>ลบโปรแกรมต้องสงสัย</li>
          <li>เปลี่ยนรหัสผ่านหลังพบการติดเชื้อ</li>
        </ul>
      </div>
    </section>
  );
}