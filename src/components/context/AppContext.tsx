"use client";

import type { Project } from "@/lib/types";

import { type PropsWithChildren, createContext, useContext } from "react";

import { projects } from "@/lib/utils/constant";
import { useCycle } from "framer-motion";

export interface IAppContext {
	toggleOpen: () => void;
	projects: Project[];
	isOpen: boolean;
}

const AppContext = createContext<IAppContext | null>(null);

export function UseAppContext() {
	const context = useContext(AppContext);
	if (context === undefined)
		throw new Error("UseTAppContext must be used within a ContextProvider");
	return context;
}

export const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<AppContext.Provider value={{ toggleOpen, isOpen, projects }}>
			{children}
		</AppContext.Provider>
	);
};
