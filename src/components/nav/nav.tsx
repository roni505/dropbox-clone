import { NavContent } from "./nav-content";
import { NavGrid } from "./nav-grid";

export function Nav() {
  return (
    <div className="w-screen pointer-events-auto fixed inset-0 z-[100] overflow-hidden">
      <NavContent />
      <NavGrid />
    </div>
  )
}
