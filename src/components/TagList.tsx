import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
}

export function TagList({ title, tags }: TagListProps) {
  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="bg-[#293038] h-[32px] text-[#9EABB8] hover:bg-gray-700 cursor-pointer border-none py-1.5 px-4"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}