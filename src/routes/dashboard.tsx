import { Card } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div>
      <Card variant="calendar">aaa</Card>
    </div>
  );
}
