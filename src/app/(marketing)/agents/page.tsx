import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { AGENTS } from "@/utils/constants/agents";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const AgentsPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero */}
            <MaxWidthWrapper className="pt-20 pb-10">
                <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                    <MagicBadge title="Our Agents" />
                    <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                        Meet Your AI Workforce
                    </h1>
                    <p className="mb-6 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-2xl">
                        AKAI builds specialized AI agents that work like employees — deployed in days, not months. Explore what&apos;s possible for your team.
                    </p>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Agent grid */}
            <MaxWidthWrapper className="pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {AGENTS.map((agent, idx) => (
                        <AnimationContainer delay={0.1 * idx} key={agent.name}>
                            <MagicCard className="h-full max-w-none flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                                        <agent.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <Badge variant="outline" className="text-xs">
                                        {agent.category}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-medium text-foreground mt-4">
                                    {agent.name}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground flex-1">
                                    {agent.description}
                                </p>
                                <Button asChild size="sm" variant="outline" className="mt-6 w-full">
                                    <Link href="/auth/sign-in" className="flex items-center justify-center">
                                        Book a Demo
                                        <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5" />
                                    </Link>
                                </Button>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* CTA */}
            <MaxWidthWrapper className="max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Don&apos;t See Your Use Case?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                AKAI builds custom AI agents for any role. Tell us what you need automated, and we&apos;ll design an agent for it.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/auth/sign-in" className="flex items-center">
                                        Book a Demo
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    )
};

export default AgentsPage
