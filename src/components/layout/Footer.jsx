import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const columns = [
  { title: "Development", links: ["Featured Course", "Featured Categories", "Business", "IT", "Design"] },
  { title: "Marketing", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "Become a Creator", links: ["Affiliate Program", "Contact", "Help", "About"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 pt-16 pb-8">
      <div className="container-bs flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <NavLink to="/" className="flex items-center gap-2">
              <span className="w-6 h-6 bg-secondary-500 rounded-full" />
              <span className="text-neutral-950 font-heading font-semibold text-label-l">
                ByteSpace
              </span>
            </NavLink>
            <p className="text-body-s text-neutral-400">
              Stay up to date with our latest features and releases by
              joining our newsletter.
            </p>
            <div className="flex items-center bg-neutral-50 rounded-full p-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 text-body-s text-neutral-950 placeholder:text-neutral-400 outline-none"
              />
              <Button variant="primary" size="md" label="Search" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="text-label-s font-medium text-neutral-950">{col.title}</p>
                {col.links.map((link) => (
                  <a key={link} href="#" className="text-body-s text-neutral-400 hover:text-neutral-950">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-100">
          <p className="text-body-xs text-neutral-400">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-body-xs text-neutral-400 hover:text-neutral-950">Privacy Policy</a>
            <a href="#" className="text-body-xs text-neutral-400 hover:text-neutral-950">Terms of Service</a>
            <a href="#" className="text-body-xs text-neutral-400 hover:text-neutral-950">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
