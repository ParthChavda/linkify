import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils";
import { BellIcon, BotIcon, ClockIcon, ZapIcon } from "lucide-react";

const AGENTS = [
    { name: "Sales Agent", role: "Lead qualification & demos", status: "Active" as const },
    { name: "Support Agent", role: "Ticket triage & resolution", status: "Active" as const },
    { name: "HR Agent", role: "Onboarding & scheduling", status: "Idle" as const },
    { name: "Finance Agent", role: "Invoicing & reconciliation", status: "Active" as const },
];

const ACTIVITY = [
    "Sales Agent booked a demo with Acme Corp",
    "Support Agent resolved ticket #4021",
    "HR Agent completed onboarding for a new hire",
];

const STATS = [
    { label: "Active Agents", value: "6" },
    { label: "Tasks Completed Today", value: "214" },
    { label: "Avg. Response Time", value: "8s" },
];

const HeroDashboardMock = () => {
    return (
        <div className="w-full aspect-[16/10] rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border overflow-hidden flex flex-col text-left select-none">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-border/60">
                <span className="text-sm md:text-base font-bold font-heading text-foreground">
                    AKAI
                </span>
                <div className="flex items-center gap-3">
                    <BellIcon className="w-4 h-4 text-muted-foreground" />
                    <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-[10px]">AK</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden">
                {/* Stat tiles */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="rounded-md md:rounded-lg bg-background/60 border border-border/60 p-3 md:p-4">
                            <p className="text-[10px] md:text-xs text-muted-foreground truncate">
                                {stat.label}
                            </p>
                            <p className="text-lg md:text-2xl font-semibold text-foreground mt-1">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
                    {/* Agent roster */}
                    <div className="rounded-md md:rounded-lg bg-background/60 border border-border/60 p-3 md:p-4 overflow-hidden">
                        <p className="text-xs md:text-sm font-medium text-foreground mb-3 flex items-center gap-1.5">
                            <BotIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            Agent Roster
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {AGENTS.map((agent) => (
                                <div key={agent.name} className="flex items-center justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-[11px] md:text-sm text-foreground truncate">
                                            {agent.name}
                                        </p>
                                        <p className="text-[9px] md:text-xs text-muted-foreground truncate hidden md:block">
                                            {agent.role}
                                        </p>
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className={cn(
                                            "shrink-0 text-[9px] md:text-[10px] px-1.5 py-0 border-none",
                                            agent.status === "Active"
                                                ? "bg-emerald-500/15 text-emerald-400"
                                                : "bg-muted text-muted-foreground"
                                        )}
                                    >
                                        {agent.status}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity feed */}
                    <div className="rounded-md md:rounded-lg bg-background/60 border border-border/60 p-3 md:p-4 overflow-hidden hidden md:block">
                        <p className="text-xs md:text-sm font-medium text-foreground mb-3 flex items-center gap-1.5">
                            <ZapIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            Recent Activity
                        </p>
                        <div className="flex flex-col gap-3">
                            {ACTIVITY.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                    <ClockIcon className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
                                    <p className="text-[11px] md:text-xs text-muted-foreground leading-snug">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroDashboardMock;
