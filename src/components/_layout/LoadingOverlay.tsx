"use client";

import { ThreeCircles } from "react-loader-spinner";

interface Props {
  loading: boolean;
}

export default function LoadingOverlay({ loading }: Props) {
  if (!loading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-tertiary"
      style={{ zIndex: 2000 }}
    >
      <ThreeCircles height="100" width="100" color="#AFD275" />
    </div>
  );
}
