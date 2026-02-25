import spyImg from "../image/Spy.png";
export default function Spy() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🕵️ Spyware — Spy</div>
        <div className="panel__tag">Stealth Threat</div>
      </div>

      <img src={spyImg} alt="Spyware" className="threat-image" />

      <div className="block">
        <h3>คืออะไร</h3>
        <p>Spyware คือมัลแวร์ที่แอบเก็บข้อมูลผู้ใช้โดยไม่รู้ตัว</p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>ขโมยรหัสผ่าน</li>
          <li>บันทึกพฤติกรรมการใช้งาน</li>
          <li>ส่งข้อมูลออกไปยังผู้โจมตี</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>ใช้โปรแกรมป้องกันมัลแวร์</li>
          <li>เปลี่ยนรหัสผ่าน</li>
          <li>เปิดใช้งาน 2FA</li>
        </ul>
      </div>
    </section>
  );
}