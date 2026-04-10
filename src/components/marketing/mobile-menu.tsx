"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { NAV_LINKS, Routes } from "@/constants";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-y-auto px-4 pb-6 pt-2"
                >
                    <nav className="flex flex-col gap-1 mb-6">
                        {NAV_LINKS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base text-foreground/70 hover:text-foreground font-medium transition-colors px-3 py-3 rounded-lg hover:bg-white/5"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <a href={Routes.AnmixAI} onClick={() => setIsOpen(false)}>
                            <Button variant="white" className="w-full" type="button">
                                Start for free
                            </Button>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
