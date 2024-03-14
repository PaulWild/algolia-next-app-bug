import React from "react";

export const dynamic = "force-dynamic";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <>The product id is {id}</>;
}
