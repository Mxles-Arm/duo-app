import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./component/home.jsx";
import Vitamin from "./component/Vitamin.jsx"; // Virus
import Worm from "./component/worm.jsx";
import Horse from "./component/Horse.jsx"; // Trojan
import Box from "./component/Box.jsx"; // Ransomware
import Spy from "./component/Spy.jsx"; // Spyware
import Door from "./component/Door.jsx"; // Backdoor

export default function App() {
  return (
    <div className="rpg">
      <div className="rpg-bg" aria-hidden="true" />

      <header className="rpg-header">
        <div className="brand">
          <div className="brand__sigil" aria-hidden="true">
            ⚔️
          </div>
          <div className="brand__text">
            <h1 className="brand__title">Guild of Cyber Defense</h1>
            <p className="brand__sub">
              คู่มือนักผจญภัย: ป้องกันมัลแวร์แบบ RPG MMO ยุคกลาง
            </p>
          </div>
        </div>

        <div className="hud">
          <div className="hud__item">
            <span className="hud__label">Lv</span>
            <span className="hud__value">13</span>
          </div>
          <div className="hud__item">
            <span className="hud__label">HP</span>
            <span className="hud__bar">
              <span className="hud__barFill" style={{ width: "86%" }} />
            </span>
          </div>
          <div className="hud__item">
            <span className="hud__label">MP</span>
            <span className="hud__bar hud__bar--mp">
              <span className="hud__barFill hud__barFill--mp" style={{ width: "62%" }} />
            </span>
          </div>
        </div>
      </header>

      <nav className="rpg-nav">
        <MenuLink to="/" label="Home" icon="🏰" />
        <MenuLink to="/virus" label="Virus (Vitamin)" icon="🧪" />
        <MenuLink to="/worm" label="Worm" icon="🐛" />
        <MenuLink to="/trojan" label="Trojan (Horse)" icon="🐴" />
        <MenuLink to="/ransomware" label="Ransomware (Box)" icon="📦" />
        <MenuLink to="/spyware" label="Spyware (Spy)" icon="🕵️" />
        <MenuLink to="/backdoor" label="Backdoor (Door)" icon="🚪" />
      </nav>

      <main className="rpg-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virus" element={<Vitamin />} />
          <Route path="/worm" element={<Worm />} />
          <Route path="/trojan" element={<Horse />} />
          <Route path="/ransomware" element={<Box />} />
          <Route path="/spyware" element={<Spy />} />
          <Route path="/backdoor" element={<Door />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="rpg-footer">
        <div className="footer-card">
          <div className="footer-card__left">
            <div className="footer-badge" aria-hidden="true">
              🛡️
            </div>
            <div>
              <div className="footer-title">Tip:</div>
              <div className="footer-sub">
                สกิลที่สำคัญที่สุด = อัปเดตระบบ + สำรองข้อมูล + ระวังไฟล์แปลก
              </div>
            </div>
          </div>

          <div className="footer-meta">© {new Date().getFullYear()} Malware Awareness</div>
        </div>
      </footer>
    </div>
  );
}

function MenuLink({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-skill ${isActive ? "nav-skill--active" : ""}`
      }
    >
      <span className="nav-skill__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="nav-skill__label">{label}</span>
      <span className="nav-skill__glow" aria-hidden="true" />
    </NavLink>
  );
}

function NotFound() {
  return (
    <section className="panel">
      <div className="panel__head">
        <div className="panel__title">404 — Lost in the Dungeon</div>
        <div className="panel__tag">Quest Failed</div>
      </div>
      <p className="panel__text">
        ไม่พบหน้านี้ ลองกลับไปหน้า <b>Home</b> แล้วเลือก “สกิล” จากเมนูด้านบน
      </p>
    </section>
  );
}