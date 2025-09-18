import { MainNav } from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import TopHeader from "@/components/top-header";
import { SessionProvider } from "next-auth/react";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    // {
    //     title: "Academics",
    //     href: "/academics",
    //     dropdown: [
    //         { title: "Departments", href: "/academics/departments" },
    //         { title: "Programs", href: "/academics/programs" },
    //         { title: "Faculty", href: "/academics/faculty" },
    //         { title: "Research", href: "/academics/research" },
    //     ]
    // },

  {
        title: "Course",
        href: "/courses",
    },


    {
        title: "Contact",
        href: "/contact",
        // dropdown: [
        //     { title: "General Contact", href: "/contact/general" },
        //     { title: "Admissions Office", href: "/contact/admissions" },
        //     { title: "Student Services", href: "/contact/student-services" },
        //     { title: "Campus Location", href: "/contact/location" },
        // ]
    },
    // {
    //     title: "Admissions",
    //     href: "/admissions",
    //     // dropdown: [
    //     //     { title: "Undergraduate", href: "/admissions/undergraduate" },
    //     //     { title: "Graduate", href: "/admissions/graduate" },
    //     //     { title: "International", href: "/admissions/international" },
    //     //     { title: "Requirements", href: "/admissions/requirements" },
    //     //     { title: "Scholarships", href: "/admissions/scholarships" },
    //     // ]
    // },
    // {
    //     title: "News and update",
    //     href: "/university-life",
    // },
  
];

export default async function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                <TopHeader />
                <SessionProvider>
                    <div className="container flex h-20 items-center justify-between py-6">
                        <MainNav items={navLinks} />
                    </div>
                </SessionProvider>
            </header>

            <main className="flex-1 pt-20 flex flex-col">{children}</main>

            <SiteFooter />
        </div>
    );
}
