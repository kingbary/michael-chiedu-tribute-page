import Gallery from "@/features/gallery/components";
import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function GalleryPage() {
    const { data } = await supabaseAdmin
        .from("tributes")
        .select("photo_urls")
        .order("created_at", { ascending: false });

    const photos = (data ?? []).flatMap((row) => row.photo_urls as string[]);

    return <Gallery photos={photos} />;
}
