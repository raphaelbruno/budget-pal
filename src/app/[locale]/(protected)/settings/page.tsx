import { SettingsIcon } from "lucide-react";
import PageTitle from "../_components/page-title";

export default function Symbols() {
  return (
    <div className="flex flex-col flex-grow w-full gap-3 px-3 py-2">
      <PageTitle title="Settings" icon={<SettingsIcon />} />
    </div>
  );
}
