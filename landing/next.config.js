/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

// Read PostInstall license token from file (if exists)
let moonuiProToken = process.env.MOONUI_PRO_TOKEN || "";
try {
    const tokenFilePath = path.join(process.cwd(), ".moonui-license-token");
    console.log(
        "[Next.js Build] Checking for license token file:",
        tokenFilePath
    );
    console.log("[Next.js Build] File exists:", fs.existsSync(tokenFilePath));

    if (fs.existsSync(tokenFilePath)) {
        moonuiProToken = fs.readFileSync(tokenFilePath, "utf8").trim();
        console.log(
            "[Next.js Build] ✓ MoonUI Pro license token loaded from file"
        );
        console.log("[Next.js Build] Token length:", moonuiProToken.length);
        console.log(
            "[Next.js Build] Will inject as NEXT_PUBLIC_MOONUI_PRO_TOKEN"
        );
    } else {
        console.log("[Next.js Build] ⚠ No .moonui-license-token file found");
        console.log("[Next.js Build] Current directory:", process.cwd());
        console.log(
            "[Next.js Build] Directory contents:",
            fs.readdirSync(process.cwd()).filter((f) => f.includes("moonui"))
        );
    }
} catch (error) {
    console.error(
        "[Next.js Build] ❌ Error reading license token file:",
        error
    );
}

const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_MOONUI_PRO_TOKEN: moonuiProToken,
    },
};

module.exports = nextConfig;
