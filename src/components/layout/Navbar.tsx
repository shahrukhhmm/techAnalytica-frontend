import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Moon, Sun, Briefcase, Users, PieChart, ShoppingBag, Megaphone, Code, UserPlus, CreditCard, Headphones, Cpu, Cloud, Target, Mail, LineChart, Layout, MessageSquare, PenTool } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const softwareMenu = [
    { name: "Project Management", icon: Layout, href: "#" },
    { name: "CRM", icon: Users, href: "#" },
    { name: "Analytics & BI", icon: PieChart, href: "#" },
    { name: "E-commerce", icon: ShoppingBag, href: "#" },
    { name: "Marketing Automation", icon: Megaphone, href: "#" },
    { name: "Developer Tools", icon: Code, href: "#" },
];

const categoriesMenu = [
    { name: "Business & Productivity", icon: Briefcase, href: "#" },
    { name: "HR & Recruitment", icon: UserPlus, href: "#" },
    { name: "Finance & Accounting", icon: CreditCard, href: "#" },
    { name: "Customer Support", icon: Headphones, href: "#" },
    { name: "AI & Automation", icon: Cpu, href: "#" },
];

const integrationsMenu = [
    { name: "Salesforce", icon: Cloud, href: "#" },
    { name: "HubSpot", icon: Target, href: "#" },
    { name: "Shopify", icon: ShoppingBag, href: "#" },
    { name: "Mailchimp", icon: Mail, href: "#" },
    { name: "Power BI", icon: LineChart, href: "#" },
];

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        const root = document.documentElement;
        if (next) {
            root.classList.add('dark');
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };


    const NavLink = ({ href, children, hasSubmenu, submenuKey }: { href: string; children: React.ReactNode; hasSubmenu?: boolean; submenuKey?: string }) => (
        <li className="relative group submenu-item">
            <a
                href={href}
                className={cn(
                    "relative flex items-center justify-between py-2 mx-8 text-base font-medium transition-all lg:mx-4 xl:mx-5 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4",
                    isSticky
                        ? "text-tech-dark dark:text-white hover:text-tech-blue"
                        : "text-tech-dark dark:text-white"
                )}
                onMouseEnter={() => hasSubmenu && submenuKey && setActiveSubmenu(submenuKey)}
            >
                {children}
                {hasSubmenu && <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:rotate-180" />}
            </a>
        </li>
    );

    const Submenu = ({ items, isOpen }: { items: any[]; isOpen: boolean }) => (
        <div className={cn(
            "submenu absolute left-0 top-full w-[280px] rounded-xl bg-white p-4 transition-all duration-50 shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100",
            isOpen ? "block" : "hidden lg:block"
        )}>
            {items.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:text-tech-blue hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700/50 transition-all font-medium"
                >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                </a>
            ))}
        </div>
    );

    return (
        <header
            className={cn(
                "sticky top-0 left-0 z-50 flex items-center w-full transition-[background-color,color,padding,box-shadow,backdrop-filter] duration-[var(--theme-duration)] ease-in-out ud-header",
                isSticky
                    ? "bg-[var(--bg-main)]/95 backdrop-blur-md shadow-lg py-3"
                    : "py-5"
            )}
        >
            <div className="container px-4 mx-auto">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60 shrink-0">
                        <a href="/" className="flex items-center navbar-logo">
                            <div className="w-9 h-9 bg-tech-blue rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                T
                            </div>
                            <span className={cn(
                                "ml-3 text-xl font-extrabold tracking-tight transition-colors text-tech-dark dark:text-white"
                            )}>
                                TechAnalytica
                            </span>
                        </a>
                    </div>

                    <div className="flex items-center justify-between w-full px-4">
                        <div className="hidden lg:block w-full">
                            <nav id="navbarCollapse" className="lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none">
                                <ul className="block lg:flex justify-end items-center">
                                    <li className="relative group submenu-item">
                                        <NavLink href="javascript:void(0)" hasSubmenu submenuKey="software">Software</NavLink>
                                        <Submenu items={softwareMenu} isOpen={activeSubmenu === 'software'} />
                                    </li>
                                    <li className="relative group submenu-item">
                                        <NavLink href="javascript:void(0)" hasSubmenu submenuKey="business">Categories</NavLink>
                                        <Submenu items={categoriesMenu} isOpen={activeSubmenu === 'business'} />
                                    </li>
                                    <li className="relative group submenu-item">
                                        <NavLink href="javascript:void(0)" hasSubmenu submenuKey="integrations">Integrations</NavLink>
                                        <Submenu items={integrationsMenu} isOpen={activeSubmenu === 'integrations'} />
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className={cn(
                                            "flex py-2 mx-8 text-base font-semibold transition-all lg:mx-3 xl:mx-4 lg:inline-flex lg:px-0 lg:py-6 whitespace-nowrap",
                                            "text-tech-dark dark:text-white hover:text-tech-blue"
                                        )}>
                                            Write a Review
                                        </a>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className={cn(
                                            "flex py-2 mx-8 text-base font-semibold transition-all lg:mx-3 xl:mx-4 lg:inline-flex lg:px-0 lg:py-6 whitespace-nowrap",
                                            "text-tech-dark dark:text-white hover:text-tech-blue"
                                        )}>
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center justify-end lg:ml-4 space-x-2 lg:space-x-4 shrink-0">
                            <button
                                onClick={toggleTheme}
                                className={cn(
                                    "p-2 rounded-full transition-theme focus:outline-none",
                                    "text-tech-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <div className="hidden sm:flex items-center space-x-3">
                                <a href="#" className="text-base font-bold whitespace-nowrap transition-all text-tech-dark dark:text-white hover:text-tech-blue px-2">
                                    Sign In
                                </a>
                                <a href="#" className="px-6 py-2.5 text-base font-bold whitespace-nowrap transition-all rounded-lg bg-tech-blue text-white hover:bg-tech-indigo shadow-md hover:shadow-lg">
                                    Sign Up
                                </a>
                            </div>

                            <button
                                className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <div className="space-y-1.5 w-6">
                                    <span className={cn("block h-0.5 w-full bg-current transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")}></span>
                                    <span className={cn("block h-0.5 w-full bg-current transition-all", isMobileMenuOpen && "opacity-0")}></span>
                                    <span className={cn("block h-0.5 w-full bg-current transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <div className={cn(
                "lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-50",
                isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )} onClick={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Menu Content */}
            <div className={cn(
                "lg:hidden fixed right-0 top-0 z-[70] h-screen w-full max-w-[300px] bg-[var(--bg-main)] shadow-2xl transition-transform duration-50 transform",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col h-full p-8">
                    <div className="flex items-center justify-between mb-10">
                        <span className="text-2xl font-bold dark:text-white tracking-tight">TechAnalytica</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <X className="w-6 h-6 dark:text-white" />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto pr-4 -mr-4">
                        <ul className="space-y-2">
                            <li>
                                <button className="flex items-center justify-between w-full py-3 text-lg font-semibold dark:text-white border-b border-gray-100 dark:border-gray-800">
                                    Software <ChevronDown className="w-5 h-5" />
                                </button>
                                <div className="pl-4 mt-2 space-y-2">
                                    {softwareMenu.map(m => (
                                        <a key={m.name} href={m.href} className="block py-2 text-gray-500 dark:text-gray-400 hover:text-tech-blue">{m.name}</a>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <button className="flex items-center justify-between w-full py-3 text-lg font-semibold dark:text-white border-b border-gray-100 dark:border-gray-800">
                                    Categories <ChevronDown className="w-5 h-5" />
                                </button>
                                <div className="pl-4 mt-2 space-y-2">
                                    {categoriesMenu.map(m => (
                                        <a key={m.name} href={m.href} className="block py-2 text-gray-500 dark:text-gray-400 hover:text-tech-blue">{m.name}</a>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <a href="#" className="block py-3 text-lg font-semibold dark:text-white border-b border-gray-100 dark:border-gray-800">Write a Review</a>
                            </li>
                            <li>
                                <a href="#" className="block py-3 text-lg font-semibold dark:text-white border-b border-gray-100 dark:border-gray-800">Blog</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="pt-8 space-y-4">
                        <a href="#" className="block w-full text-center py-4 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl font-bold transition-all hover:bg-gray-100">Sign In</a>
                        <a href="#" className="block w-full text-center py-4 bg-tech-blue text-white rounded-xl font-bold shadow-lg shadow-tech-blue/30 transition-all hover:bg-tech-indigo">Sign Up</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
