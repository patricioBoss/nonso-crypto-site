import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Redirect all routes to the 404 page
  url.pathname = "/notfound";
  return NextResponse.rewrite(url);
}
