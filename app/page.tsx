import HomePage from "@/features/home/components";
import { supabaseAdmin } from "@/lib/supabase-admin";

export type Tribute = {
    id: string;
    full_name: string;
    relationship: string;
    tribute: string;
    created_at: string;
};

export default async function Home() {
    const { data } = await supabaseAdmin
        .from("tributes")
        .select("id, full_name, relationship, tribute, created_at")
        .order("created_at", { ascending: false });

    return <HomePage tributes={data ?? []} />;
}
