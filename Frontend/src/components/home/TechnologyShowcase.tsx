import { equipment } from "@/data/equipment";
import { Printer, Layout, Scissors, BookOpen, Layers, Tag, FileText, Sticker } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  printer: Printer,
  layout: Layout,
  scissors: Scissors,
  "book-open": BookOpen,
  layers: Layers,
  tag: Tag,
  "file-text": FileText,
  sticker: Sticker,
};

export default function TechnologyShowcase() {
  const flagship = equipment.find((e) => e.isFlagship);
  const others = equipment.filter((e) => !e.isFlagship);

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          Built on Industry-Leading Equipment
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          We invest in the best technology to deliver exceptional print quality, speed, and consistency.
        </p>
      </div>

      {flagship && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <div className="flex items-start gap-5">
            <div className="size-14 shrink-0 flex items-center justify-center rounded-full bg-navy text-cyan">
              <Printer className="size-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-heading text-xl font-semibold text-navy">{flagship.name}</h3>
                <span className="text-xs font-medium text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full">
                  Flagship
                </span>
              </div>
              <p className="text-sm text-grey-dark mt-2">{flagship.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {flagship.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-sm text-navy">
                    <span className="size-1.5 rounded-full bg-cyan shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {others.map((item) => {
          const Icon = iconMap[item.icon] || Printer;
          return (
            <div
              key={item.name}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200 group cursor-default"
            >
              <div className="flex items-center gap-3">
                <Icon className="size-6 text-cyan shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-navy group-hover:text-cyan transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-grey-dark mt-0.5">{item.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
