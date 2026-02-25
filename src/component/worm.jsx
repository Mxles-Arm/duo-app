import worm from "../image/worm.png";

export default function Worm() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🐛 Worm (หนอน)</div>
        <div className="panel__tag">Threat Class</div>
      </div>

 {/* ✅ ใส่รูปตรงนี้ */}
      <img
        src={worm}
        alt="Worm"
        className="threat-image"
      />



      <div className="block">
        <h3>คืออะไร</h3>
        <p>
          Worm คือมัลแวร์ที่สามารถแพร่กระจายเองผ่านเครือข่าย
          โดยไม่ต้องอาศัยการเปิดไฟล์
        </p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>แพร่ไปยังเครื่องอื่นอัตโนมัติ</li>
          <li>ทำให้ระบบช้า หรือเครือข่ายล่ม</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>อัปเดตระบบเพื่อปิดช่องโหว่</li>
          <li>ใช้ Firewall</li>
          <li>แยกเครื่องที่ติดออกจากเครือข่าย</li>
        </ul>
      </div>
    </section>
  );
}