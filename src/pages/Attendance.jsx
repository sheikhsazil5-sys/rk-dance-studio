import { useState } from "react";
import { CalendarDays, Check, X, Save } from "lucide-react";
import "./Attendance.css";

function Attendance() {
  const students = [
    { id: 1, name: "Student 1", batch: "Girls" },
    { id: 2, name: "Student 2", batch: "Ladies" },
    { id: 3, name: "Student 3", batch: "Boys" },
    { id: 4, name: "Student 4", batch: "Gents" },
  ];

  const [attendance, setAttendance] = useState({});

  const markAttendance = (id, status) => {
    setAttendance({
      ...attendance,
      [id]: status,
    });
  };

  const saveAttendance = () => {
    localStorage.setItem(
      "rk-attendance",
      JSON.stringify(attendance)
    );

    alert("Attendance saved successfully!");
  };

  return (
    <main className="attendance-page">
      <section className="attendance-hero">

        <div className="attendance-header">
          <p className="attendance-tag">
            <CalendarDays size={16} />
            RK DANCE & FITNESS STUDIO
          </p>

          <h1>
            STUDENT
            <br />
            <span>ATTENDANCE.</span>
          </h1>

          <p>
            Mark and manage daily student attendance.
          </p>
        </div>

        <div className="attendance-panel">

          <div className="attendance-top">
            <div>
              <p>TODAY'S DATE</p>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>

            <div className="attendance-summary">
              <span>
                PRESENT: {
                  Object.values(attendance)
                    .filter((status) => status === "Present").length
                }
              </span>

              <span>
                ABSENT: {
                  Object.values(attendance)
                    .filter((status) => status === "Absent").length
                }
              </span>
            </div>
          </div>

          <div className="student-list">

            {students.map((student) => (
              <div className="student-row" key={student.id}>

                <div className="student-info">
                  <div className="student-avatar">
                    {student.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{student.name}</h3>
                    <span>{student.batch}</span>
                  </div>
                </div>

                <div className="attendance-actions">

                  <button
                    className={
                      attendance[student.id] === "Present"
                        ? "present active"
                        : "present"
                    }
                    onClick={() =>
                      markAttendance(student.id, "Present")
                    }
                  >
                    <Check size={18} />
                    PRESENT
                  </button>

                  <button
                    className={
                      attendance[student.id] === "Absent"
                        ? "absent active"
                        : "absent"
                    }
                    onClick={() =>
                      markAttendance(student.id, "Absent")
                    }
                  >
                    <X size={18} />
                    ABSENT
                  </button>

                </div>

              </div>
            ))}

          </div>

          <button
            className="save-attendance"
            onClick={saveAttendance}
          >
            <Save size={18} />
            SAVE ATTENDANCE
          </button>

        </div>
      </section>
    </main>
  );
}

export default Attendance;