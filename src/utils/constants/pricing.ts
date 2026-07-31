// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
export const PLANS = [
    {
        name: "Pilot",
        info: "For teams testing their first AI agent",
        price: {
            monthly: 499,
            yearly: Math.round(499 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "1 custom AI agent" },
            { text: "Single business function" },
            { text: "Setup & training included" },
            { text: "Performance dashboard", tooltip: "Track task volume and outcomes" },
            { text: "Email support" },
            { text: "Up to 1,000 interactions/month" },
        ],
        btn: {
            text: "Book a Demo",
            href: "/auth/sign-up?plan=pilot",
            variant: "default",
        }
    },
    {
        name: "Growth",
        info: "For teams scaling across departments",
        price: {
            monthly: 1499,
            yearly: Math.round(1499 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Up to 5 AI agents" },
            { text: "Multi-department deployment" },
            { text: "Custom integrations", tooltip: "Connect your CRM, helpdesk, and HRIS" },
            { text: "Advanced analytics" },
            { text: "Priority support", tooltip: "Get 24/7 chat support" },
            { text: "Up to 20,000 interactions/month" },
        ],
        btn: {
            text: "Book a Demo",
            href: "/auth/sign-up?plan=growth",
            variant: "purple",
        }
    },
    {
        name: "Enterprise",
        info: "For organizations building a full AI workforce",
        price: {
            monthly: 4999,
            yearly: Math.round(4999 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Unlimited AI agents" },
            { text: "Dedicated integration engineer" },
            { text: "Custom model training" },
            { text: "Enterprise security & compliance" },
            { text: "SLA-backed support", tooltip: "Guaranteed response times" },
            { text: "Unlimited interactions" },
        ],
        btn: {
            text: "Contact Sales",
            href: "/auth/sign-up?plan=enterprise",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "Shorten links",
        tooltip: "Create shortened links",
    },
    {
        text: "Track clicks",
        tooltip: "Track clicks on your links",
    },
    {
        text: "See top countries",
        tooltip: "See top countries where your links are clicked",
    },
    {
        text: "Upto 10 tags",
        tooltip: "Add upto 10 tags to your links",
    },
    {
        text: "Community support",
        tooltip: "Community support is available for free users",
    },
    {
        text: "Priority support",
        tooltip: "Get priority support from our team",
    },
    {
        text: "AI powered suggestions",
        tooltip: "Get AI powered suggestions for your links",
    },
];

export const WORKSPACE_LIMIT = 2;