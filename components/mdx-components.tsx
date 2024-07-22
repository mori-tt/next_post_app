"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./callout";

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  const components = {
    Image,
    Callout,
  };
  return (
    <div className="prose lg:prose-xl max-w-full">
      <Component components={components} />
    </div>
  );
}
