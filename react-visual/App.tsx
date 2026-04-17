import React from "react";

const roleCards = [
  "A - Accountable",
  "R1 - Decision Authority",
  "R2 - Human Execution",
  "R3 - System Execution",
  "C1 - Human Advice",
  "C2 - AI / System Input",
  "I1 - Humans Informed",
  "I2 - Systems Informed",
];

const flowSteps = [
  "Trigger",
  "Classification",
  "AAR Activation",
  "Decision",
  "Evidence (DEXYS)",
];

export default function App() {
  return (
    <div
      style={{
        padding: "32px",
        fontFamily: "Arial, sans-serif",
        background: "#f4f6f8",
        minHeight: "100vh",
        color: "#111827",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          RACIv3 Decision-Grade Authority Model
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            marginBottom: "32px",
            maxWidth: "900px",
          }}
        >
          RACIv3 extends ARRRCCII by adding Accountability Activation Rules,
          Abdication Detection and Prevention, and explicit leadership behaviour
          at Accountability and Responsibility levels.
        </p>

        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Core Structure
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "14px",
            }}
          >
            {roleCards.map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "14px",
                  padding: "18px",
                  background: "#f9fafb",
                  textAlign: "center",
                  fontWeight: 600,
                  minHeight: "88px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Accountability Activation (AAR)
          </h2>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "#d1fae5",
                padding: "16px 22px",
                borderRadius: "12px",
                fontWeight: 700,
                minWidth: "180px",
                textAlign: "center",
              }}
            >
              Passive
            </div>

            <div
              style={{
                background: "#fef3c7",
                padding: "16px 22px",
                borderRadius: "12px",
                fontWeight: 700,
                minWidth: "180px",
                textAlign: "center",
              }}
            >
              Conditional
            </div>

            <div
              style={{
                background: "#fee2e2",
                padding: "16px 22px",
                borderRadius: "12px",
                fontWeight: 700,
                minWidth: "220px",
                textAlign: "center",
              }}
            >
              Active - must engage
            </div>
          </div>

          <p
            style={{
              marginTop: "14px",
              color: "#4b5563",
              fontSize: "16px",
            }}
          >
            Accountability is always assigned, but it becomes operationally
            active based on decision criticality, risk, escalation triggers, and
            boundary conditions.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Abdication Detection (ADP)
          </h2>

          <div
            style={{
              border: "2px dashed #dc2626",
              borderRadius: "14px",
              padding: "20px",
              background: "#fef2f2",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Was A required? → Did A engage? → If no → Flag failure
          </div>

          <p
            style={{
              marginTop: "14px",
              color: "#4b5563",
              fontSize: "16px",
            }}
          >
            Abdication is treated as a detectable governance failure mode, not a
            soft behavioural issue.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Leadership Overlay
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
            }}
          >
            <div
              style={{
                borderRadius: "14px",
                padding: "18px",
                background: "#e0f2fe",
                fontWeight: 700,
              }}
            >
              A = Own decision
            </div>

            <div
              style={{
                borderRadius: "14px",
                padding: "18px",
                background: "#ede9fe",
                fontWeight: 700,
              }}
            >
              R1 = Escalate correctly
            </div>

            <div
              style={{
                borderRadius: "14px",
                padding: "18px",
                background: "#ecfccb",
                fontWeight: 700,
              }}
            >
              R2 = Execute with integrity
            </div>
          </div>

          <p
            style={{
              marginTop: "14px",
              color: "#4b5563",
              fontSize: "16px",
            }}
          >
            Leadership applies to both Accountability and Responsibility, but in
            different ways: A owns the decision, while R roles act within
            authority and escalate correctly.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Decision Flow
          </h2>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {flowSteps.map((step, index) => (
              <React.Fragment key={step}>
                <div
                  style={{
                    padding: "14px 18px",
                    border: "1px solid #d1d5db",
                    borderRadius: "12px",
                    background: "#f9fafb",
                    fontWeight: 600,
                  }}
                >
                  {step}
                </div>
                {index < flowSteps.length - 1 && (
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#6b7280",
                    }}
                  >
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p
            style={{
              marginTop: "16px",
              color: "#4b5563",
              fontSize: "16px",
            }}
          >
            RACIv3 links authority structure, activation logic, leadership
            behaviour, and evidence capture into one decision-grade model.
          </p>
        </section>
      </div>
    </div>
  );
}
