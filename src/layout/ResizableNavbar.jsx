"use client";
import ShinyText from "../layout/ShinyText";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Gamepad2 } from "lucide-react";
import { cn } from "../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

/* -------------------------------------------------------------------------- */
/*                                   NAVBAR                                   */
/* -------------------------------------------------------------------------- */

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-5 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child,
      )}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               DESKTOP NAV                                  */
/* -------------------------------------------------------------------------- */

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05)"
          : "none",
        width: visible ? "40%" : "40%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "800px" }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl items-center justify-between rounded-full px-2 py-1 lg:flex",
        visible ? "bg-primaryLinear" : "bg-bg_light_primary",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 hidden flex-1 items-center justify-center gap-2 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          onClick={onItemClick}
          className="rounded-full px-4 py-2 font-semibold text-[#06b6d4] hover:bg-white transition"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MOBILE NAV                                   */
/* -------------------------------------------------------------------------- */

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col rounded-2xl px-4 py-2 lg:hidden",
        visible && "bg-[#9233ea5d]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavNavbarDemo = ({ children, className }) => {
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-999 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Fullscreen Menu */}
          <motion.div
            className={cn(
              "fixed inset-0 z-1000 flex h-screen w-screen flex-col bg-[#9233ea5d] lg:hidden",
              className,
            )}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed right-4 top-4 z-1100 rounded-xl bg-[#9333ea] p-2.5 hover:bg-red-600/10"
            >
              <IconX className="h-6 w-6 text-white" />
            </button>

            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 border-b bg-[#9233ea5d] p-6 backdrop-blur">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Gamepad2 />
                <span className="font-bold text-xl tracking-tight">
                  <ShinyText
                    text="DANSHE"
                    speed={2}
                    delay={0}
                    color="#000000"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </span>
                <div className="w-0.5 h-6 bg-[#9333ea]"></div>
                <span className="font-bold text-xl tracking-tight">
                  <ShinyText
                    text="GAMING"
                    speed={2}
                    delay={0}
                    color="#000000"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-[#9333ea] p-2.5 hover:bg-[#7e22ce]/80"
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-white" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                              SHARED ELEMENTS                               */
/* -------------------------------------------------------------------------- */

export const NavbarLogo = () => {
  return (
    <a href="#" className="flex items-center gap-2">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight">
          <ShinyText
            text="DANSHE"
            speed={2}
            delay={0}
            color="#e0e0ff"
            shineColor="#06b6d4"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </span>
        <div className="w-0.5 h-6 bg-[#9333ea]"></div>
        <span className="font-bold text-xl tracking-tight">
          <ShinyText
            text="GAMING"
            speed={2}
            delay={0}
            color="#e0e0ff"
            shineColor="#06b6d4"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </span>
      </div>
    </a>
  );
};

export const NavbarButton = ({ href, as: Tag = "a", children, className }) => {
  return (
    <Tag
      href={href}
      className={cn(
        "rounded-md bg-[#9333ea] px-4 py-2 text-sm font-bold text-white hover:-translate-y-0.5 transition hover:bg-[#7e22ce]",
        className,
      )}
    >
      {children}
    </Tag>
  );
};
