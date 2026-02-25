export default function Door() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🚪 Backdoor — Door</div>
        <div className="panel__tag">Hidden Gate</div>
      </div>

      <div className="block">
        <h3>คืออะไร</h3>
        <p>
          Backdoor คือช่องทางลับที่เปิดให้บุคคลภายนอกเข้าระบบได้
          โดยไม่ผ่านการยืนยันตัวตนปกติ
        </p>
      </div>

      <div className="block">
        <h3>พฤติกรรม</h3>
        <ul>
          <li>ควบคุมเครื่องระยะไกล</li>
          <li>ทำงานเงียบ ๆ ผู้ใช้ไม่รู้ตัว</li>
          <li>อาจถูกใช้ติดตั้งมัลแวร์เพิ่ม</li>
        </ul>
      </div>

      <div className="block">
        <h3>วิธีรับมือ</h3>
        <ul>
          <li>รีเซ็ตหรือฟอร์แมตเครื่อง</li>
          <li>เปลี่ยนรหัสผ่านทุกบัญชี</li>
          <li>ตรวจสอบการเข้าใช้งานผิดปกติ</li>
        </ul>
      </div>
    </section>
  );
}