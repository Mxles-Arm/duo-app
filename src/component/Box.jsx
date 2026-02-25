export default function Box() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">📦 Ransomware — Box</div>
        <div className="panel__tag">Boss Threat</div>
      </div>

      <div className="block">
        <h3>คืออะไร</h3>
        <p>
          Ransomware คือมัลแวร์ที่เข้ารหัสไฟล์และเรียกค่าไถ่เพื่อแลกกับการปลดล็อก
        </p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>ไฟล์เปิดไม่ได้</li>
          <li>มีข้อความเรียกเงิน</li>
          <li>ข้อมูลถูกล็อกทั้งหมด</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>ตัดอินเทอร์เน็ตทันที</li>
          <li>ไม่จ่ายเงิน</li>
          <li>กู้ข้อมูลจาก Backup</li>
        </ul>
      </div>
    </section>
  );
}