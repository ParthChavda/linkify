import { BrainCircuitIcon, HeadsetIcon, InfinityIcon, KeyRoundIcon, ShieldCheckIcon, UserCogIcon } from "lucide-react";

export const ENTERPRISE_FEATURES = [
    {
        icon: ShieldCheckIcon,
        title: "Enterprise Security & Compliance",
        description: "SOC 2-aligned infrastructure, data encryption, and audit-ready controls built in from day one.",
    },
    {
        icon: UserCogIcon,
        title: "Dedicated Integration Engineer",
        description: "A named engineer works with your team to connect AKAI agents to your existing stack.",
    },
    {
        icon: HeadsetIcon,
        title: "SLA-Backed Support",
        description: "Guaranteed response times and a dedicated support channel for mission-critical deployments.",
    },
    {
        icon: BrainCircuitIcon,
        title: "Custom Model Training",
        description: "Agents trained on your data, your workflows, and your tone of voice.",
    },
    {
        icon: InfinityIcon,
        title: "Unlimited Agents & Interactions",
        description: "Scale from one pilot agent to a full AI workforce without usage caps.",
    },
    {
        icon: KeyRoundIcon,
        title: "SSO & Access Controls",
        description: "Single sign-on, role-based permissions, and detailed audit logs for every agent action.",
    },
] as const;
