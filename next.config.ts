import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A second package-lock.json exists higher in the user directory. Without an
  // explicit root, Turbopack can select that directory and panic while building
  // a dependency tree for the dev server.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
