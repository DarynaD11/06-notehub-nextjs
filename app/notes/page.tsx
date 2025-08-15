import NoteList from "@/components/NoteList/NoteList";
import NotesClient from "./Notes.client"; // CSR частина
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  const data = await fetchNotes({ page: 1, perPage: 12 });

  return (
    <div>
      <NotesClient />
    </div>
  );
}
