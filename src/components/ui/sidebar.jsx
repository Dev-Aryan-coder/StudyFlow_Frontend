import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(true);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate = true,
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = ({ className, children, ...props }) => {
  return (
    <>
      <DesktopSidebar className={className} {...props}>
        {children}
      </DesktopSidebar>
      <MobileSidebar className={className} {...props}>
        {children}
      </MobileSidebar>
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-3 py-4 hidden md:flex md:flex-col bg-gray-50/80 border-r border-gray-200 flex-shrink-0 transition-all select-none",
        className
      )}
      animate={{
        width: animate ? (open ? "240px" : "68px") : "240px",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className={cn(
        "px-4 py-2.5 flex flex-row md:hidden items-center justify-between bg-gray-50 border-b border-gray-200 w-full",
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center w-full">
        <span className="text-xs font-semibold text-gray-800">Layers & Components</span>
        <button
          onClick={() => setOpen(!open)}
          className="p-1 rounded text-gray-700 hover:bg-gray-200"
          title="Toggle Layers"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full pt-3 pb-2 flex flex-col gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  isActive = false,
  onClick,
  ...props
}) => {
  const { open, animate } = useSidebar();
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 group/sidebar py-2 px-2.5 rounded-lg transition-colors w-full text-left text-xs font-medium",
        isActive
          ? "bg-black text-white shadow-xs"
          : "text-gray-600 hover:text-black hover:bg-gray-100",
        className
      )}
      {...props}
    >
      <div className={cn("flex-shrink-0", isActive ? "text-white" : "text-gray-500 group-hover/sidebar:text-black")}>
        {link.icon}
      </div>

      <motion.div
        animate={{
          display: animate ? (open ? "flex" : "none") : "flex",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.2 }}
        className="items-center justify-between w-full overflow-hidden whitespace-nowrap"
      >
        <span className="truncate">{link.label}</span>
        {link.badge && (
          <span
            className={cn(
              "text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold ml-2",
              isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
            )}
          >
            {link.badge}
          </span>
        )}
      </motion.div>
    </button>
  );
};
