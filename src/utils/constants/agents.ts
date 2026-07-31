import { HeadphonesIcon, HeartPulseIcon, HomeIcon, TrendingUpIcon, UsersIcon, WalletIcon } from "lucide-react";

export const AGENTS = [
    {
        icon: TrendingUpIcon,
        category: "Sales",
        name: "Sales Agent",
        description: "Qualifies leads, books demos, and follows up automatically — so no lead goes cold.",
    },
    {
        icon: HeadphonesIcon,
        category: "Support",
        name: "Support Agent",
        description: "Resolves tickets and answers customer questions around the clock.",
    },
    {
        icon: UsersIcon,
        category: "HR",
        name: "HR Agent",
        description: "Handles onboarding, scheduling, and policy questions for your team.",
    },
    {
        icon: WalletIcon,
        category: "Finance",
        name: "Finance Agent",
        description: "Automates invoicing, reconciliation, and expense reporting.",
    },
    {
        icon: HeartPulseIcon,
        category: "Healthcare",
        name: "Healthcare Agent",
        description: "Manages patient intake, appointment scheduling, and follow-ups.",
    },
    {
        icon: HomeIcon,
        category: "Real Estate",
        name: "Real Estate Agent",
        description: "Qualifies buyers, schedules property tours, and answers listing questions.",
    },
] as const;
