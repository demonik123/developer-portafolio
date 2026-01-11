// @flow strict
import Link from "next/link";
import ThemeToggle from "./helper/theme-toggle";


function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] w-full backdrop-blur supports-[backdrop-filter]:bg-background border-b border-border bg-background">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-primary text-2xl font-bold tracking-tight">
            BORIS LEONEL
          </Link>
        </div>

        <ul className="mt-0 flex w-auto flex-row items-center gap-1 text-sm md:space-x-1" id="navbar-default">
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/#about">
              <div className="text-sm text-foreground opacity-80 hover:opacity-100">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/#experience"><div className="text-sm text-foreground opacity-80 hover:opacity-100">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/#skills"><div className="text-sm text-foreground opacity-80 hover:opacity-100">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/#education"><div className="text-sm text-foreground opacity-80 hover:opacity-100">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/blog"><div className="text-sm text-foreground opacity-80 hover:opacity-100">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-3 py-2 rounded-md hover:bg-muted/60 transition-colors" href="/#projects"><div className="text-sm text-foreground opacity-80 hover:opacity-100">PROJECTS</div></Link>
          </li>
          <li className="pl-2"><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;