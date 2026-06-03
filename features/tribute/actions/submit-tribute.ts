"use server";

import { supabaseAdmin as supabase } from "@/lib/supabase-admin";

export type SubmitTributeState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitTribute(
  _prev: SubmitTributeState,
  formData: FormData
): Promise<SubmitTributeState> {
  const fullName = formData.get("fullName") as string;
  const relationship = formData.get("relationship") as string;
  const tribute = formData.get("tribute") as string;
  const photoFiles = formData.getAll("photos") as File[];

  if (!fullName.trim() || !relationship.trim() || !tribute.trim()) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const photoUrls: string[] = [];

  for (const file of photoFiles) {
    if (!file.size) continue;

    const ext = file.name.split(".").pop();
    const path = `tributes/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("tribute-photos")
      .upload(path, file, { contentType: file.type });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return { status: "error", message: `Photo upload failed: ${uploadError.message}` };
    }

    const { data } = supabase.storage.from("tribute-photos").getPublicUrl(path);
    photoUrls.push(data.publicUrl);
  }

  const { error } = await supabase.from("tributes").insert({
    full_name: fullName.trim(),
    relationship: relationship.trim(),
    tribute: tribute.trim(),
    photo_urls: photoUrls,
  });

  if (error) {
    console.error("Database insert error:", error);
    return { status: "error", message: `Submission failed: ${error.message}` };
  }

  return { status: "success" };
}
