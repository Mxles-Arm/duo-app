import { Link } from "react-router-dom";

export default function Home() {
  const quests = [
    { title: "Virus (Vitamin)", to: "/virus", badge: "Plague", desc: "มัลแวร์ที่เกาะไฟล์/โปรแกรมและทำงานเมื่อเปิดไฟล์" },
    { title: "Worm", to: "/worm", badge: "Swarm", desc: "แพร่เองผ่านเครือข่าย ไม่ต้องเปิดไฟล์ก็ลามได้" },
    { title: "Trojan (Horse)", to: "/trojan", badge: "Deception", desc: "ปลอมเป็นโปรแกรมปกติ หลอกให้ติดตั้งแล้วเปิดทางโจมตี" },
    { title: "Ransomware (Box)", to: "/ransomware", badge: "Curse", desc: "เข้ารหัสไฟล์และเรียกค่าไถ่" },
    { title: "Spyware (Spy)", to: "/spyware", badge: "Stealth", desc: "แอบขโมยข้อมูล/พฤติกรรมผู้ใช้" },
    { title: "Backdoor (Door)", to: "/backdoor", badge: "Hidden Gate", desc: "ช่องลับให้คนนอกเข้าระบบโดยไม่ยืนยันตัวตนตามปกติ" },
  ];

  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">🏰 Adventurer’s Handbook</div>
        <div className="panel__tag">Choose Your Quest</div>
      </div>

      <p className="panel__text">
        เลือกหัวข้อเพื่อเรียนรู้ <b>ความหมาย</b> / <b>พฤติกรรม</b> / <b>วิธีรับมือ</b>
        แบบหน้า UI เกม RPG MMO
      </p>

      <div className="quest-grid">
        {quests.map((q) => (
          <Link key={q.to} to={q.to} className="quest-card">
            <div className="quest-card__title">
              <span>{q.title}</span>
              <span className="quest-card__badge">{q.badge}</span>
            </div>
            <div className="quest-card__desc">{q.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}