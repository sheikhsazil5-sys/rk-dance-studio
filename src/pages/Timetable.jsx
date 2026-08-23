import { Clock, Users, Calendar } from "lucide-react";
import "./Timetable.css";

function Timetable() {
  const schedule = [
    {
      id: "01",
      group: "KIDS",
      age: "AGE 5 TO 15",
      time: "4:00 PM – 5:30 PM",
      icon: <Users size={28} />,
      description:
        "Fun and energetic Dance & Zumba sessions for young students.",
    },
    {
      id: "02",
      group: "WOMEN",
      age: "WOMEN'S BATCH",
      time: "5:30 PM – 7:00 PM",
      icon: <Users size={28} />,
      description:
        "Dance and Zumba sessions to stay active, confident and healthy.",
    },
    {
      id: "03",
      group: "MEN",
      age: "MEN'S BATCH",
      time: "7:00 PM – 8:00 PM",
      icon: <Users size={28} />,
      description:
        "High-energy Dance and Zumba sessions for fitness and fun.",
    },
  ];

  return (
    <main className="timetable-page">
      {/* HERO */}
      <section className="timetable-hero">
        <p className="timetable-tag">RK DANCE & FITNESS STUDIO</p>

        <h1>
          FIND YOUR
          <br />
          <span>TIME.</span>
        </h1>

        <p className="timetable-description">
          Choose the perfect batch and make time for movement,
          energy and fun.
        </p>
      </section>

      {/* SCHEDULE */}
      <section className="schedule-section">
        <div className="schedule-heading">
          <p>WEEKLY SCHEDULE</p>
          <h2>
            OUR <span>TIME TABLE</span>
          </h2>
        </div>

        <div className="schedule-grid">
          {schedule.map((item) => (
            <div className="schedule-card" key={item.id}>
              <div className="schedule-number">{item.id}</div>

              <div className="schedule-icon">{item.icon}</div>

              <p className="schedule-age">{item.age}</p>

              <h3>{item.group}</h3>

              <div className="schedule-time">
                <Clock size={20} />
                <span>{item.time}</span>
              </div>

              <p className="schedule-description">
                {item.description}
              </p>

              <div className="schedule-line"></div>

              <div className="schedule-class">
                DANCE & ZUMBA
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DAYS */}
      <section className="days-section">
        <Calendar size={22} />

        <div>
          <p>AVAILABLE</p>
          <h3>MONDAY – SATURDAY</h3>
        </div>
      </section>
    </main>
  );
}

export default Timetable;