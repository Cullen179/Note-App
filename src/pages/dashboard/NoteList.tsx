import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Note } from "@/types";
import { Trash2 } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

interface NoteListProps {
  isSelected: string,
  setIsSelected: React.Dispatch<React.SetStateAction<string>>,
}

export default function NoteList(
  { isSelected, setIsSelected }: NoteListProps
) {

  const notes = useLoaderData() as Note[];
  const selectedNote = isSelected ? isSelected : notes[0].id;

  return (
    <ScrollArea className="h-full p-2">
      <div className="flex flex-col gap-1">
        {notes.map((note) => (
          <div
            key={note.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent min-w-[80px] group-hover:bg-red-400",
              selectedNote === note.id && "bg-muted"
            )}
            onClick={() => setIsSelected(note.id)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="font-semibold line-clamp-1">{note.title}</div>
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selectedNote === note.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <p>
                    {new Date(note.createdDate.toDate()).toLocaleDateString(
                      undefined,
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </p>
                  {/* Replace 'date' with the actual property name */}
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-2">
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {note.content.substring(0, 300)}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="aspect-square"
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
