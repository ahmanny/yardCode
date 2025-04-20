import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const lat = req.nextUrl.searchParams.get("lat");
    const lon = req.nextUrl.searchParams.get("lon");

    if (!lat || !lon) {
        return NextResponse.json({ error: "Missing latitude or longitude" }, { status: 400 });
    }

    try {
        const nominatimURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;

        const res = await fetch(nominatimURL, {
            headers: {
                "User-Agent": "yardcode.ng (contact@yardcode.ng)",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch from Nominatim");
        }

        const data = await res.json();

        const state = data.address?.state || "Unknown";
        const city = data.address?.city || data.address?.town || data.address?.village || "Unknown";
        const country = data.address?.country || "Unknown";
        const displayName = data.display_name || "Unknown";

        // Generate mock YardCode and Spot for demonstration purposes
        const yard = `YARD-${Math.floor(Math.random() * 10000)}`;
        const spot = `SPOT-${Math.floor(Math.random() * 100)}`;

        return NextResponse.json({
            yard,
            spot,
            state,
            city,
            country,
            address: displayName,
        });
    } catch (error) {
        console.error("Error in reverse geocoding:", error);
        return NextResponse.json({ error: "Reverse geocoding failed" }, { status: 500 });
    }
}
